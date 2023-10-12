import { useEffect, useState } from "react";

// Entity
import { I_AuthResponseEntity } from "@/core/entities/auth/authEntity";

// Mock
import { mockLoginEmptyResponse, mockLoginResponse } from "../../../__mocks__/src/services/auth/authService";

export function useSession() {
  const [session, setSession] = useState<I_AuthResponseEntity>(mockLoginEmptyResponse);
  const [error, setError] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const is_auth = false;

    if (is_auth) {
      setSession(mockLoginResponse);
    } else {
      setError(true);
    }
  }, [session, error]);

  return {
    data: {
      session,
    },
    error,
    loading,
  };
}
