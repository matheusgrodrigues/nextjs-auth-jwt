import axios, { AxiosResponse } from "axios";

// Config
import { STRAPI_API_URL } from "@/config";

interface I_LoginCredentials {
  identifier: string;
  password: string;
}

interface I_UserData {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: number;
  createdAt: string;
  updatedAt: string;
}

interface I_LoginResponse {
  jwt: string;
  user: I_UserData;
}

interface I_AuthService {
  login: (body: I_LoginCredentials) => Promise<AxiosResponse<I_LoginResponse>>;
}

export const authService: I_AuthService = {
  login: async (body: { identifier: string; password: string }) => {
    const url = `${STRAPI_API_URL}/auth/local`;

    try {
      const response: AxiosResponse<I_LoginResponse> = await axios.post(url, body);

      return response;
    } catch (error) {
      throw error;
    }
  },
};
