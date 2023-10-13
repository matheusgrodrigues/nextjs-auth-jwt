// Entity
import { I_AuthCredentialsEntity } from "@/core/entities/auth/authEntity";

// Ports and Adapters
import { authAdapter } from "@/core/adapters/auth/authAdapter";
import { I_AuthPort } from "@/core/ports/auth/authPort";

// Application Services
import { tokenService } from "@/services/tokenService/tokenService";

export const authUseCases: I_AuthPort = {
  login: async ({ identifier, password }: I_AuthCredentialsEntity) => {
    try {
      const response = await authAdapter.login({ identifier, password });

      tokenService.save(response.jwt);

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
