import type { AxiosStatic } from 'axios';
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

const jar = new CookieJar();
export const axios = wrapper((require('axios') as AxiosStatic).create({ jar, baseURL: 'https://playentry.org/' }));

interface RequestSuccess {
  success: true;
  data: Record<string, string | number | boolean>;
}

interface RequestFailed {
  success: false;
}

type RequestResult = RequestSuccess | RequestFailed;

const request = async (query: string, variables: Record<string, string | number | boolean>): Promise<RequestResult> => {
  const res = await axios.post('/graphql', { query, variables });
  if (res.status !== 200) return { success: false };

  const { data, errors } = res.data;
  if (errors) return { success: false };
  else return { success: true, data: Object.values(data).length > 0 && typeof Object.values(data)[0] === 'object' ? (Object.values(data)[0] as any) : {} };
};

export default request;
