import { ReactNode } from "react";

import { PrimeReactProvider } from "primereact/api";

import { Metadata } from "next";

import { Inter } from "next/font/google";

// Theme
import "../styles/theme.scss";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextJS: Auth + JWT",
  description:
    "Aplicação de autenticação segura baseada em tokens JWT (JSON Web Tokens) que oferece uma experiência de login fluida e segura para os usuários.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body>
        <PrimeReactProvider value={{}}>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
