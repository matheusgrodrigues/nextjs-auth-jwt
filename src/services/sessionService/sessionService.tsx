import { ComponentType, useContext } from "react";

// Entity
import { I_AuthUserEntity } from "@/core/entities/auth/authEntity";

// Mock
import { useSession } from "@/hooks/session/useSession";
import { tokenService } from "../tokenService/tokenService";
import { mockLoginResponse } from "../../../__mocks__/src/components/organisms/o-login-form/o-login-form-validation/o-login-form-validation/o-login-form-validation";

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

export const getSession = () => {
  const token = tokenService.get();


 

  // Fake user
  const fake_user = mockLoginResponse.user;

  return fake_user;
};
