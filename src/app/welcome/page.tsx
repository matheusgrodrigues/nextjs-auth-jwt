'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { SessionHOCProps, withSessionHOC } from '@/core/utils/hoc/sessionHOC';
import tokenService from '@/core/services/tokenService';

import { Button, Text, Title } from '@/components/atoms';
import { Header, Footer } from '@/components/organism';

interface WelcomeProps extends SessionHOCProps {}

const Welcome: React.FC<WelcomeProps> = ({ data }) => {
    const router = useRouter();

    const { session } = data;

    const handleLogout = useCallback(() => {
        tokenService.delete();
        router.push('/');
    }, []);

    return (
        <section className="p-welcome">
            <Header image="https://github.com/matheusgrodrigues" link="/images/a-avatar.jpeg" />

            {session && (
                <main className={'t_welcome'} id="t-welcome">
                    <div className={'t_welcome__heading'}>
                        <Text data-testid="a-text-welcome" variant="fwSb-fs16-primary">
                            Bem-vindo(a) ao nosso serviço !
                        </Text>

                        <Title data-testid="a-title-username" variant="fwSB-fs48-lh60-lspN2-gray900">
                            {'colocar o nome do usuario logado aqui'}
                        </Title>
                    </div>

                    <Text data-testid="a-text-description" variant="fwReg-fs20-lh30-gray500" id="a-text-description">
                        Queremos que você se sinta em casa e aproveite ao máximo tudo o que oferecemos. Se tiver alguma
                        dúvida ou precisar de ajuda, não hesite em nos chamar. Estamos sempre prontos para tornar sua
                        experiência conosco incrível. Mais uma vez, bem-vindo(a)!
                    </Text>

                    <Button
                        variant="fwMd-fs16-colGray700-bgWhite"
                        data-testid="a-button-logout"
                        onClick={() => {
                            // TODO: abrir Dialog
                            handleLogout();
                        }}
                    >
                        Logout
                    </Button>

                    {/* Dialog Logout 
               <LogoutDialog visible={visible} onConfirm={handleLogout} onReject={toggleVisible} /> */}
                </main>
            )}

            <Footer
                github="https://github.com/matheusgrodrigues/nextjs-auth-jwt"
                linkedin="https://www.linkedin.com/in/matheusgomes/"
                name="matheusgomesdev"
                site="https://matheusgomesdev.com.br"
            />
        </section>
    );
};

export default withSessionHOC(Welcome);
