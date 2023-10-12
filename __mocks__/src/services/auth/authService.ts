import { AxiosResponse } from "axios";

// Entity
import { I_AuthCredentialsEntity, I_AuthResponseEntity } from "@/core/entities/auth/authEntity";

/*
interface I_MockAuthService {
  login: jest.Mock<Promise<AxiosResponse<I_AuthResponseEntity>>>;
} */

/*
export const mockAuthService: I_MockAuthService = {
  login: jest.fn(),
};
*/
export const mockLoginValues: I_AuthCredentialsEntity = {
  identifier: "mockedemail@hotmail.com",
  password: "mockedpassword",
};

export const mockLoginResponse: I_AuthResponseEntity = {
  jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjk3MTE1NzMxLCJleHAiOjE2OTk3MDc3MzF9.EmMz1jdfjdLB-F35CoRkSPaj71dBbwVTb3QEjxclmS8",
  user: {
    id: 1,
    username: "topete",
    email: "topete.matheus@gmail.com",
    provider: "local",
    confirmed: true,
    blocked: false,
    createdAt: "2023-10-11T17:46:26.944Z",
    updatedAt: "2023-10-11T22:31:06.753Z",
  },
};

export const mockLoginEmptyResponse: I_AuthResponseEntity = {
  jwt: "",
  user: {
    id: 0,
    username: "",
    email: "",
    provider: "",
    confirmed: false,
    blocked: false,
    createdAt: "",
    updatedAt: "",
  },
};

/*
 * Implementarei os testes futuramente, porque está consumindo muito tempo.
 */
