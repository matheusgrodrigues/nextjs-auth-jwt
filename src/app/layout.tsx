import { ReactNode } from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { PrimeReactProvider } from 'primereact/api';

import '../styles/theme.scss';

const inter = Inter({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'NextJS: Auth + JWT',
    description:
        'Aplicação de autenticação segura baseada em tokens JWT (JSON Web Tokens) que oferece uma experiência de login fluida e segura para os usuários.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR" className={inter.className}>
            <link rel="icon" href="/images/lock.svg" sizes="any" />
            <body>
                <PrimeReactProvider value={{ ripple: false }}>{children}</PrimeReactProvider>
            </body>
        </html>
    );
}
