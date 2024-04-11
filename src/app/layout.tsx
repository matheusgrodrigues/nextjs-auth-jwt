import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { PrimeReactProvider } from 'primereact/api';

import '../styles/theme.scss';

import i18n_metadata from '@/config/i18n/Metadata/metadata';

const inter = Inter({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: i18n_metadata.metadata.title,
    description: i18n_metadata.metadata.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={inter.className}>
            <link rel="icon" href="/images/lock.svg" sizes="any" />
            <body>
                <PrimeReactProvider value={{ ripple: false }}>{children}</PrimeReactProvider>
            </body>
        </html>
    );
}
