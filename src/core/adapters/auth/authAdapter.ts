import { AxiosResponse } from "axios";

// Entities
import { I_AuthResponseEntity } from "@/core/entities/auth/authEntity";

// Ports
import { I_AuthPort } from "@/core/ports/auth/authPort";

// Infra
import { httpInfra } from "@/core/infra/http/httpInfra";

// Config
import { STRAPI_API_URL } from "@/config";

export const authAdapter: I_AuthPort = {
  login: async (body) => {
    const method = "POST";

    const url = `${STRAPI_API_URL}/auth/local`;

    try {
      const response: AxiosResponse<I_AuthResponseEntity> = await httpInfra({ method, url, body });

      return response;
    } catch (error) {
      throw error;
    }
  },
};
