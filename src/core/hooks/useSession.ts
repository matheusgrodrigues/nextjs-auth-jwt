import { useEffect, useState } from 'react';

import { AuthUserSchema } from '@/schemas/AuthSchema';

import getSession from '../services/sessionService';

function useSession() {
    const [session, setSession] = useState<AuthUserSchema | undefined>(undefined);
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

export default useSession;
