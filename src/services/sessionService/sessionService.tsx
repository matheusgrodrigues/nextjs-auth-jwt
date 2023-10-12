import { ComponentType, FC } from "react";

// Entity
import { I_AuthResponseEntity } from "@/core/entities/auth/authEntity";

// Mock
import { mockLoginResponse } from "../../../__mocks__/src/services/auth/authService";

export interface I_SessionHOC {
  session: I_AuthResponseEntity;
}

export const withSessionHOC = <P extends object>(Component: ComponentType<P & I_SessionHOC>): React.FC<P> => {
  const Wrapper: FC<P> = (props) => {
    const session = mockLoginResponse;

    const modifiedProps = {
      ...props,
      session,
    };

    return <Component {...modifiedProps} />;
  };

  return Wrapper;
};
