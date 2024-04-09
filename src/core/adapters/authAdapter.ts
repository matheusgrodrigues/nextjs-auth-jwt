import { AxiosResponse } from "axios";

import { I_AuthResponseEntity, I_AuthUserEntity } from "@/core/entities/auth/authEntity";

import { I_AuthPort } from "@/core/Ports/auth/authPort";

import { httpInfra } from "@/core/infra/http/httpInfra";

import { STRAPI_API_URL } from "@/config";

export const authAdapter: I_AuthPort = {
  login: async ({ identifier, password }) => {
    const method = "POST";

    const url = `${STRAPI_API_URL}/auth/local`;

    try {
      const response: AxiosResponse<I_AuthResponseEntity> = await httpInfra({
        method,
        url,
        body: {
          identifier,
          password,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
  me: async (token: string) => {
    const method = "GET";

    const url = `${STRAPI_API_URL}/users/me`;

    try {
      const response: AxiosResponse<I_AuthUserEntity> = await httpInfra({ method, url, token });

      return response.data;
    } catch (error) {
      throw error;
    }
  },
};
