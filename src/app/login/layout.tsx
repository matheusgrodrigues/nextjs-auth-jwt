import { PrimeReactProvider } from "primereact/api";

import type { Metadata } from "next";

import { Inter } from "next/font/google";

// Styles
import "../../styles/theme.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS: Auth + JWT",
  description:
    "Aplicação de autenticação segura baseada em tokens JWT (JSON Web Tokens) que oferece uma experiência de login fluida e segura para os usuários.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <PrimeReactProvider value={{ unstyled: false }}>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
