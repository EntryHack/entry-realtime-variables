export interface CloudServerInfo {
  url: 'https://playentry.org';
  query: string;
}

export interface Variable {
  value: string;
  id: string;
  variableType: 'variable';
}

export interface List {
  list: string[];
  id: string;
  value: { [id: string]: string };
  variableType: 'list';
}
