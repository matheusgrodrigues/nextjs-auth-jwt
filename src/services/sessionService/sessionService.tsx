import { ComponentType, useContext } from "react";

// Entity
import { I_AuthUserEntity } from "@/core/entities/auth/authEntity";

// useCases
import { authUseCases } from "@/core/useCases/auth/authUseCase";

// Services
import { useSession } from "@/hooks/session/useSession";
import { tokenService } from "../tokenService/tokenService";

export interface I_SessionHOC {
  data: {
    session: I_AuthUserEntity | undefined;
  };
}

export const withSessionHOC = <P extends object>(Component: ComponentType<P & I_SessionHOC>): React.FC<P> => {
  const Wrapper: React.FC<P> = (props) => {
    //const router = useRouter();
    const { data, loading, error } = useSession();

    if (!loading && error) {
      console.log("Erro de auth");
      // router.push("/")
    }

    console.log(data);

    const modifiedProps = {
      ...props,
      data,
      error,
      loading,
    };

    return <Component {...modifiedProps}></Component>;
  };

  return Wrapper;
};

export const getSession = async () => {
  const token = tokenService.get();

  // Buscar os dados o usuário logado

  if (token) {
    try {
      const user = await authUseCases.me(token);

      return user;
    } catch (error) {
      throw error;
    }
  }
};
