import { AxiosResponse } from "axios";

// Entities
import { I_AuthCredentialsEntity, I_AuthResponseEntity } from "@/core/entities/auth/authEntity";

export interface I_AuthPort {
  login: (body: I_AuthCredentialsEntity) => Promise<I_AuthResponseEntity>;
}
