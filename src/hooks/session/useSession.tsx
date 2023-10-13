import { useEffect, useState } from "react";

// Entity
import { I_AuthUserEntity } from "@/core/entities/auth/authEntity";

// Services
import { getSession } from "@/services/sessionService/sessionService";

export function useSession() {
  const [session, setSession] = useState<I_AuthUserEntity | undefined>(undefined);
  const [error, setError] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const user = getSession();

    if (user) {
      setSession(user);
    } else {
      setError(true);
    }
  }, []);

  return {
    data: {
      session,
    },
    error,
    loading,
  };
}
