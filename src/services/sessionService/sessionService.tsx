import { ComponentType, FC } from "react";

// Entity
import { I_AuthResponseEntity } from "@/core/entities/auth/authEntity";

// Mock
import { useSession } from "@/hooks/session/useSession";
import { useRouter } from "next/router";

export interface I_SessionHOC {
  session: I_AuthResponseEntity;
}

export const withSessionHOC = <P extends object>(Component: ComponentType<P & I_SessionHOC>): React.FC<P> => {
  const Wrapper: FC<P> = (props) => {
    //const router = useRouter();
    const { data, loading, error } = useSession();

    if (!loading && error) {
      console.log("Erro de auth");
      // router.push("/")
    }

    const session = data.session;

    const modifiedProps = {
      ...props,
      session,
    };

    return <Component {...modifiedProps} />;
  };

  return Wrapper;
};
