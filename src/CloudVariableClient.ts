import io from 'socket.io-client';
import { EventEmitter } from 'eventemitter3';
import { GET_CLOUD_SERVER_INFO, SELECT_PROJECT } from './graphql/project';
import { login } from './login';
import { graphql } from './request';
import { CloudServerInfo, List, Variable } from './typings';

class CloudVariableClient extends EventEmitter {
  private projectId: string;
  private listItems: { [id: string]: string[] } = {};
  private socket?: SocketIOClient.Socket;

  constructor(projectId: string) {
    super();
    this.projectId = projectId;
  }

  public static getCloudServerInfo = (projectId: string) =>
    new Promise<CloudServerInfo>(async (res, rej) => {
      const cloudServerInfoRes = await graphql(GET_CLOUD_SERVER_INFO, { id: projectId });
      if (cloudServerInfoRes.error) return rej(cloudServerInfoRes.error);
      res(cloudServerInfoRes.data.cloudServerInfo);
    });

  // public static getRealtimeVariables = (projectId: string) =>
  //   new Promise<{ variables: Variable[]; listItems: string[][] }>(async (res, rej) => {
  //     const projectInfoRes = await graphql(SELECT_PROJECT, { id: projectId });
  //     if (projectInfoRes.error) return rej(projectInfoRes.error);
  //     res({
  //       variables: projectInfoRes.data.project.variables.filter((variable: Variable) => (variable.variableType === 'list' || variable.variableType === 'variable') && variable.isRealTime),
  //       listItems: projectInfoRes.data.project.realTimeVariable.map((variable: Variable) => variable.array.map((a) => a.key)),
  //     });
  //   });

  // getVariableByName(name: string) {
  //   return this.realtimeVariables.get(name);
  // }

  async login(username: string, password: string) {
    await login(username, password);
    return this;
  }

  async connect() {
    this.socket = io('wss://playentry.org', { path: '/cv', query: { q: (await CloudVariableClient.getCloudServerInfo(this.projectId)).query }, transports: ['websocket'] });

    this.socket.on('connect', () => this.emit('connect'));
    this.socket.on('disconnect', (reason: string) => this.emit('disconnect', reason));
    this.socket.on('error', (error: any) => this.emit('error', error));
    this.socket.on('connect_error', (error: any) => this.emit('connect_error', error));
    this.socket.on('connect_timeout', (timeout: any) => this.emit('connect_timeout', timeout));
    this.socket.on('reconnect', (attemptNumber: number) => this.emit('reconnect', attemptNumber));
    this.socket.on('reconnect_attempt', (attemptNumber: number) => this.emit('reconnect_attempt', attemptNumber));
    this.socket.on('reconnecting', (attemptNumber: number) => this.emit('reconnecting', attemptNumber));
    this.socket.on('reconnect_error', (error: any) => this.emit('reconnect_error', error));
    this.socket.on('reconnect_failed', () => this.emit('reconnect_failed'));
    this.socket.on('ping', () => this.emit('ping'));
    this.socket.on('pong', (latency: number) => this.emit('pong', latency));

    this.socket.on('action', (msg: any) => {
      console.log(msg, 'action');
    });
    this.socket.on('create', (msg: any) => {
      console.log(msg, 'create');
    });
    this.socket.on('reset', (msg: any) => {
      console.log(msg, 'reset');
    });
    this.socket.on('check', (id: any) => {
      this.socket!.emit('imAlive', id);
    });
    this.socket.on('welcome', ({ variables }: any) => {
      variables.filter((variable: Variable | List) => variable.variableType === 'list').forEach((list: List) => (this.listItems[list.id] = list.list));
    });

    this.socket.connect();
  }

  async setVariable(variableId: string, value: string | number | boolean) {
    if (!this.socket) return;
    this.socket.emit('action', { _id: this.projectId, id: variableId, variableType: 'variable', type: 'set', value: value.toString() });
  }

  async appendList(listId: string, value: string | number | boolean) {
    if (!this.socket) return;
    this.socket.emit('action', { _id: this.projectId, id: listId, variableType: 'list', type: 'append', value: value.toString() });
  }

  async deleteList(listId: string, index: number, value: string | number | boolean) {
    if (!this.socket || !this.listItems) return;
    this.socket.emit('action', { _id: this.projectId, id: listId, variableType: 'list', key: this.listItems[listId][index], type: 'insert', index, value: value.toString() });
  }

  async insertList(listId: string, index: number, value: string | number | boolean) {
    if (!this.socket) return;
    this.socket.emit('action', { _id: this.projectId, id: listId, variableType: 'list', type: 'insert', index, value: value.toString() });
  }

  async replaceList(listId: string, index: number, value: string | number | boolean) {
    if (!this.socket || !this.listItems) return;
    this.socket.emit('action', { _id: this.projectId, id: listId, variableType: 'list', key: this.listItems[listId][index], type: 'insert', index, value: value.toString() });
  }
}

export default CloudVariableClient;
