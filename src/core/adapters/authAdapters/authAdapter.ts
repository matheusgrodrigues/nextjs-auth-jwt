import axios, { AxiosResponse } from "axios";

// Entities
import { I_AuthResponseEntity } from "@/core/entities/authEntities/authEntity";

// Ports
import { I_AuthPort } from "@/core/ports/authPorts/authPort";

// Config
import { STRAPI_API_URL } from "@/config";

export const authAdapter: I_AuthPort = {
  login: async (body) => {
    const url = `${STRAPI_API_URL}/auth/local`;

    try {
      const response: AxiosResponse<I_AuthResponseEntity> = await axios.post(url, body);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
