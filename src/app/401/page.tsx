'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';

import { Button, Text, Title } from '@/components/atoms';
import { Footer, Header } from '@/components/organism';

import useTranslation from '@/core/hooks/useTranslation';

const Page401 = () => {
    const router = useRouter();

    const { t } = useTranslation();

    const handleLogin = useCallback(() => router.push('/'), []);

    return (
        <main data-testid="p-401" className={'p_401'}>
            <Header />

            <main data-testid="t-401" className={'t_401'} id="t-401">
                <Text variant="fwSb-fs16-primary">{t('specific.404.title')}</Text>

                <Title variant="h1">{t('specific.404.naoAutorizado')}</Title>

                <Text variant="fwReg-fs16-gray500">{t('specific.404.desciption')}</Text>

                <Button variant="gradient" onClick={handleLogin}>
                    {t('specific.404.facaLogin')}
                </Button>
            </main>

            <Footer />
        </main>
    );
};

export default Page401;
