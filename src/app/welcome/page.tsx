'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { SessionHOCProps, withSessionHOC } from '@/core/components/SessionHOC/sessionHOC';
import tokenService from '@/core/services/tokenService';

import { Button, Text, Title } from '@/components/atoms';
import { Header, Footer } from '@/components/organism';

import useTranslation from '@/core/hooks/useTranslation';

interface WelcomeProps extends SessionHOCProps {}

const Welcome: React.FC<WelcomeProps> = ({ data }) => {
    const router = useRouter();

    const { session } = data;

    const { t } = useTranslation();

    const handleLogout = useCallback(() => {
        tokenService.delete();
        router.push('/');
    }, []);

    return (
        <>
            <section className="page-welcome">
                <Header />

                {session && (
                    <main className="page-welcome__welcome">
                        <div className="page-welcome__welcome_heading">
                            <Text data-testid="a-text-welcome" variant="fwSb-fs16-primary">
                                {t('specific.welcome.label.title')}
                            </Text>

                            <Title data-testid="a-title-username" variant="fwSB-fs48-lh60-lspN2-gray900">
                                {session.username}
                            </Title>
                        </div>

                        <Text
                            data-testid="a-text-description"
                            variant="fwReg-fs20-lh30-gray500"
                            id="a-text-description"
                        >
                            {t('specific.welcome.label.description')}
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
                    </main>
                )}

                <Footer />
            </section>

            {/* Dialog Logout 
               <LogoutDialog visible={visible} onConfirm={handleLogout} onReject={toggleVisible} /> */}
        </>
    );
};

export default withSessionHOC(Welcome);
