import nodeFetch from 'isomorphic-fetch';
import fetchCookie from 'fetch-cookie';
import toughCookie from 'tough-cookie';
import { graphql } from './request';
import { SIGNIN_BY_USERNAME } from './graphql/user';

export const fetch = fetchCookie(nodeFetch, new toughCookie.CookieJar());

export const login = async (username: string, password: string) => {
  const loginRes = await graphql(SIGNIN_BY_USERNAME, { username, password, rememberme: true });
  if (loginRes.error) return console.error(loginRes.error);
  return loginRes.data.signinByUsername;
};
