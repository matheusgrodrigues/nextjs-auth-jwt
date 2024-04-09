"use client";

import { ComponentType, useEffect } from "react";

import { GetServerSidePropsContext } from "next";

import { useRouter } from "next/navigation";

import { I_AuthUserEntity } from "@/schemas/AuthSchema";

import { authUseCases } from "@/services/AuthService";

import { useSession } from "@/core/hooks/useSession";
import { tokenService } from "./tokenService";

export interface SessionHOCProps {
  data: {
    session: I_AuthUserEntity | undefined;
  };
  error: boolean;
  loading: boolean;
}

export const getSession = async (ctx?: GetServerSidePropsContext) => {
  const token = tokenService.get(ctx);

  try {
    const user = await authUseCases.me(token);

    return user;
  } catch (error) {
    throw error;
  }
};

export const withSessionHOC = <P extends object>(Component: ComponentType<P & SessionHOCProps>): React.FC<P> => {
  const Wrapper: React.FC<P> = (props) => {
    const { data, loading, error } = useSession();

    const router = useRouter();

    useEffect(() => {
      if (!loading && error) {
        if (window.location.pathname === "/") {
          router.push("/");
        } else {
          router.push("/401");
        }
      } else if (!loading && !error && data.session && window.location.pathname === "/") {
        router.push("/welcome");
      }
    }, [loading, error, router, data.session]);

    const modifiedProps = {
      ...props,
      data,
      error,
      loading,
    };

    return <Component {...modifiedProps} />;
  };

  return Wrapper;
};

/*
*
* Aplicar tipagem do typescript e testar.
* Estava consumindo muito tempo, então resolvi adiar.
* Por enquanto está buscando via GetServerSideProps diretamente no component.
* 
* Sinta-se a vontade para tipar esta função, testar e fazer um pull request no repositório :)
* 
* Obs: o GetServerSideProps só funciona no PagesRouter.
* A nova versão do next.js utiliza o AppRouter, que vem com o SSR ativado por padrão.
* Para buscar os cookies utilize {cookies} from "next/router".
* 
*

================================================================================

// Server
export function withSession(cb) {
  return async (ctx) => {
    try {
      const session = await getSession();
      const modifiedCtx = {
        ...ctx,
        req: {
          ...ctx.req,
          session,
        },
      };
      return cb(modifiedCtx);
    } catch (err) {
      return {
        redirect: {
          permanent: false,
          destination: "/?error=401",
        },
      };
    }
  };
}
================================================================================

*/
