import { useEffect, useState } from "react";

import { I_AuthUserEntity } from "@/schemas/AuthSchema";

import { getSession } from "../services/sessionService";

export function useSession() {
  const [session, setSession] = useState<I_AuthUserEntity | undefined>(undefined);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getSession()
      .then((userSession) => {
        setSession(userSession);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data: {
      session,
    },
    error,
    loading,
  };
}
