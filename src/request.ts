import nodeFetch from 'isomorphic-fetch';
import fetchCookie from 'fetch-cookie';
import toughCookie from 'tough-cookie';

export const fetch = fetchCookie(nodeFetch, new toughCookie.CookieJar());

export interface GraphQLError {
  statusCode: number;
}

export const graphql = async (query: string, variables: Record<string, any>, headers = { 'Content-Type': 'application/json' }, endpoint = 'https://playentry.org/graphql') => {
  let error: GraphQLError | undefined;

  const res = await fetch(endpoint, {
    headers,
    body: JSON.stringify({ query, variables }),
    method: 'POST',
  });
  if (!res.ok) return { error: { statusCode: res.status } };

  const { data, errors } = (await res.json()) as any;
  if (errors !== undefined && errors.length > 0 && Object.keys(errors).includes('statusCode')) return { error: errors[0] };

  return { data, error };
};
