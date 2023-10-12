import axios, { AxiosResponse } from "axios";

interface I_HttpService {
  withBearer: (
    method: string,
    url: string,
    token: string,
    data?: {},
    customHeaders?: {}
  ) => Promise<AxiosResponse<any>>
}

export const httpService = {
  /*withBearer: (method, url, token, data, customHeaders) => {
    try {
      axios({
        method,
        url,
        data,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          ...customHeaders,
        },
      });
    } catch (error) {
      throw error;
    }
  }, */
};
