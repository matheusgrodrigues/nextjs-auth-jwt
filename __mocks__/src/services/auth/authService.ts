import { AxiosResponse } from "axios";

import { I_LoginCredentials, I_LoginResponse } from "@/services/auth/authService";

interface I_MockAuthService {
  login: jest.Mock<Promise<AxiosResponse<I_LoginResponse>>>;
}

export const mockAuthService: I_MockAuthService = {
  login: jest.fn(),
};

export const mockLoginValues: I_LoginCredentials = {
  identifier: "mockedemail@hotmail.com",
  password: "mockedpassword",
};

export const mockLoginResponse: I_LoginResponse = {
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

/*
 * Implementarei os testes futuramente, porque está consumindo muito tempo.
 */
