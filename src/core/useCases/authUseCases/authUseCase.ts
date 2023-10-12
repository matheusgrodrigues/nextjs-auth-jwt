// Ports and Adapters
import { I_AuthCredentialsEntity } from "@/core/entities/authEntities/authEntity";
import { authAdapter } from "@/core/adapters/authAdapters/authAdapter";
import { I_AuthPort } from "@/core/ports/authPorts/authPort";

export const authUseCases: I_AuthPort = {
  login: ({ identifier, password }: I_AuthCredentialsEntity) => {
    return authAdapter.login({ identifier, password });
  },
};
