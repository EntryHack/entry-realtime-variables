import Emittery from 'emittery';
import io from 'socket.io-client';
import Query from './query';
import request from './request';

export interface VariableSetAction {
  _id: string;
  id: string;
  variableType: 'variable';
  type: 'set';
  value: string;
}

export interface ListAppendAction {
  _id: string;
  id: string;
  variableType: 'list';
  type: 'append';
  data: string;
  key: string;
}

export interface ListInsertAction {
  _id: string;
  id: string;
  variableType: 'list';
  type: 'insert';
  index: number;
  data: string;
  key: string;
}

export interface ListReplaceAction {
  _id: string;
  id: string;
  variableType: 'list';
  type: 'replace';
  data: string;
  key: string;
  newKey: string;
}

export interface ListDeleteAction {
  _id: string;
  id: string;
  variableType: 'list';
  type: 'delete';
  index: number;
  key: string;
}

export type Action = VariableSetAction | ListAppendAction | ListInsertAction | ListReplaceAction | ListDeleteAction;

class RealTimeVariableClient extends Emittery {
  public projectId: string;
  public socket?: SocketIOClient.Socket;

  private variableList: Action[] = [];

  constructor(projectId: string) {
    super();
    this.projectId = projectId;
  }

  public static async getServerInfo(projectId: string) {
    return await request(Query.Project.GET_CLOUD_SERVER_INFO, { id: projectId });
  }

  public async login(username: string, password: string) {
    return await request(Query.User.SIGNIN_BY_USERNAME, { username, password, rememberme: true });
  }

  public async connect() {
    const serverInfoRes = await RealTimeVariableClient.getServerInfo(this.projectId);
    if (!serverInfoRes.success) throw new Error('Failed to get Cloud Server Info.');

    this.socket = io('wss://playentry.org', {
      path: '/cv',
      query: { q: serverInfoRes.data.query },
      transports: ['websocket'],
    });

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

    this.socket.on('action', (msg: Action) => {
      this.emit('action', msg);

      if (msg.variableType === 'variable') {
        if (msg.type === 'set') this.emit('set_variable', msg);
      } else if (msg.variableType === 'list') {
        if (msg.type === 'append') this.emit('append_list_item', msg);
        else if (msg.type === 'insert') this.emit('insert_list_item', msg);
        else if (msg.type === 'replace') this.emit('replace_list_item', msg);
        else if (msg.type === 'delete') this.emit('delete_list_item', msg);
      }
    });
    this.socket.on('create', (msg: any) => {
      console.log(msg, 'create');
    });
    this.socket.on('reset', (msg: any) => {
      console.log(msg, 'reset');
    });
    this.socket.on('check', (id: any) => {
      this.socket?.emit('imAlive', id);
    });
    this.socket.on('welcome', ({ variables }: any) => {
      this.variableList.push(...variables);
    });

    this.socket.on('connect', () => {
      console.log('connected!');
      this.emit('connect');
    });

    this.socket.connect();
  }
}

export default RealTimeVariableClient;
