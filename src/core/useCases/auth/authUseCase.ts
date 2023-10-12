// Ports and Adapters
import { I_AuthCredentialsEntity } from "@/core/entities/auth/authEntity";
import { authAdapter } from "@/core/adapters/auth/authAdapter";
import { I_AuthPort } from "@/core/ports/auth/authPort";

export const authUseCases: I_AuthPort = {
  login: ({ identifier, password }: I_AuthCredentialsEntity) => {
    return authAdapter.login({ identifier, password });
  },
};
