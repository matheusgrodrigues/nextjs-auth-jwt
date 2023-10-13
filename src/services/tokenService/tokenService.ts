import { GetServerSidePropsContext } from "next";

const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY";

const ONE_SECOND = 1;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_YEAR = ONE_DAY * 365;

const saveStorage = (value: string, ctx?: GetServerSidePropsContext) => {
  globalThis?.localStorage?.setItem(ACCESS_TOKEN_KEY, value);
  globalThis?.sessionStorage?.setItem(ACCESS_TOKEN_KEY, value);
};

const getStorage = (ctx?: GetServerSidePropsContext) => {
  const localStorage = globalThis?.localStorage?.getItem(ACCESS_TOKEN_KEY);
  const sessionStorage = globalThis?.sessionStorage?.getItem(ACCESS_TOKEN_KEY);

  return localStorage ? localStorage : sessionStorage;
};

const deleteStorage = (ctx?: GetServerSidePropsContext) => {
  globalThis?.localStorage?.removeItem(ACCESS_TOKEN_KEY);
  globalThis?.sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
};

export const tokenService = {
  save(value: string, ctx?: GetServerSidePropsContext) {
    return saveStorage(value, ctx);
  },

  get(ctx?: GetServerSidePropsContext) {
    return getStorage();
  },

  delete(ctx?: GetServerSidePropsContext) {
    return deleteStorage();
  },
};
