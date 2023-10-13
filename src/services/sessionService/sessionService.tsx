"use client";

import { ComponentType, useEffect } from "react";

import { GetServerSidePropsContext } from "next";

import { useRouter } from "next/navigation";

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
  },
  error: boolean,
  loading: boolean
}


export const getSession = async (ctx?: GetServerSidePropsContext) => {
  const token = tokenService.get(ctx);

  /*
   * Buscar os dados do usuário logado.
   *
   * Atenção !
   *
   * Não verificar se o token existe, para fazer o try...catch [if(token)].
   * Porque senão vai cair no finally no getSession(), e não vai setar o erro para true
   * Porque não vai disparar a exception, que controla a exibição das paginas autorizadas.
   *
   */

  try {
    const user = await authUseCases.me(token);

    return user;
  } catch (error) {
    throw error;
  }
};

// Client
export const withSessionHOC = <P extends object>(Component: ComponentType<P & I_SessionHOC>): React.FC<P> => {
  const Wrapper: React.FC<P> = (props) => {
    const { data, loading, error } = useSession();

    const router = useRouter();

    useEffect(() => {
      /*
       *
       * Em casos em que, passou o token jwt incorreto na requisição.
       * Ou o token expirou.
       * Ou não está autenticado.
       *
       */

      if (!loading && error) {
        router.push("/");
      }
    }, [loading, error, router]);

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
