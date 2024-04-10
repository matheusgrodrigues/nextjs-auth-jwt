'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { Button, Text, Title } from '@/components/atoms';
import { Footer, Header } from '@/components/organism';

const Page401 = () => {
    const router = useRouter();

    const handleLogin = useCallback(() => router.push('/'), []);

    return (
        <main data-testid="p-401" className={'p_401'}>
            <Header image="https://github.com/matheusgrodrigues" link="/images/a-avatar.jpeg" />

            <main data-testid="t-401" className={'t_401'} id="t-401">
                <Text variant="fwSb-fs16-primary">401</Text>
                <Title variant="h1">Acesso não autorizado</Title>
                <Text variant="fwReg-fs16-gray500">
                    Desculpe, você não tem permissão para acessar esta página. Por favor, verifique suas credenciais ou
                    entre em contato com o suporte se precisar de assistência.
                </Text>
                <Button variant="gradient" onClick={handleLogin}>
                    Faça Login
                </Button>
            </main>

            <Footer
                github="https://github.com/matheusgrodrigues/nextjs-auth-jwt"
                linkedin="https://www.linkedin.com/in/matheusgomes/"
                name="matheusgomesdev"
                site="https://matheusgomesdev.com.br"
            />
        </main>
    );
};

export default Page401;
