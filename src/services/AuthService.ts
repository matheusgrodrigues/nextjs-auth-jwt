import { tokenService } from "@/core/services/tokenService";

import { authAdapter } from "@/core/adapters/authAdapter";

import { I_AuthPort } from "@/core/ports/authPort";

import { I_AuthCredentialsEntity } from "@/schemas/AuthSchema";

export const authUseCases: I_AuthPort = {
  login: async ({ identifier, password, manter_logado }: I_AuthCredentialsEntity) => {
    try {
      const response = await authAdapter.login({ identifier, password, manter_logado });

      tokenService.save(response.jwt, manter_logado);

      return response;
    } catch (error) {
      throw error;
    }
  },
  me: async (token: string) => {
    try {
      const response = await authAdapter.me(token);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
