'use client';

import React, { useRef } from 'react';

import { SessionHOCProps, withSessionHOC } from '@/core/components/SessionHOC/sessionHOC';

import { Button, Text, Title } from '@/components/atoms';
import { Header, Footer } from '@/components/organism';

import { LogoutDialog, LogoutDialogRef } from '@/components/templates';

import useTranslation from '@/core/hooks/useTranslation';

interface WelcomeProps extends SessionHOCProps {}

const Welcome: React.FC<WelcomeProps> = ({ data }) => {
    const { session } = data;

    const logoutDialogRef = useRef<LogoutDialogRef>(null);

    const { t } = useTranslation();

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
                            onClick={() => logoutDialogRef.current?.setVisible(true)}
                        >
                            {t('specific.welcome.label.btnLogout')}
                        </Button>
                    </main>
                )}

                <Footer />
            </section>

            <LogoutDialog ref={logoutDialogRef} />
        </>
    );
};

export default withSessionHOC(Welcome);
