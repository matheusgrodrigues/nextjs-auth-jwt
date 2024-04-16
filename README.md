# [NextJS: Auth + JWT](https://nextjs-auth-jwt-blue.vercel.app/) 🚀

> 💡 Aplicação de autenticação segura baseada em tokens JWT (JSON Web Tokens) que oferece uma experiência de login fluida e segura para os usuários.

## 🚩Conteudo

-   [Screenshots](#screenshots)
-   [Como Usar](#🐾-como-usar)
-   [Instalação](#⚡-instalação)
-   [Fluxos do Sistema](#fluxos-do-sistema)
    -   [Tela de Login](#tela-de-login)
    -   [Validações](#validacoes)
        -   [Autenticação e Autorização](#autenticacao-e-autorizacao)
        -   [Gerenciamento de Sessão](#gerenciamento-de-sessao)
        -   [Extra: Temas](#extra---temas)
-   [Tecnologias Utilizadas](#🔧-tecnologias-utilizadas)
    -   [Prototipação](#prototipacao)
    -   [Metodologias](#metodologias)
    -   [Bibliotecas](#bibliotecas)
    -   [Frontend](#frontend)
    -   [Versionamento](#versionamento)
    -   [Testes](#testes)
    -   [Deploy e Hospedagem](#deploy-e-hospedagem)
    -   [Documentação](#documentacao)
-   [Contribuição](#contribuicao)
-   [Autor](#👨‍💻-autor)
-   [Licença](#licenca)

## Screenshots

| Tela de Login                                                                                                                             | Tela de Boas Vindas                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![Tela de Login](https://nextjs-auth-jwt-blue.vercel.app/images/readme/login-desk.png)                                                    | ![Tela de Boas Vindas](https://nextjs-auth-jwt-blue.vercel.app/images/readme/dash-desk.png)                                               |
| [Visualize o Layout no Figma](https://www.figma.com/file/WZ6hE95sDBZxWX6X6S5sB7/Portfolio-Matheus?type=design&node-id=6552-4&mode=design) | [Visualize o Layout no Figma](https://www.figma.com/file/WZ6hE95sDBZxWX6X6S5sB7/Portfolio-Matheus?type=design&node-id=6552-5&mode=design) |

## 🐾 Como Usar

1. [Acesse a aplicação](https://nextjs-auth-jwt-blue.vercel.app/), no seu ambiente, e insira o `email` e `senha` que disponibilizei para testar o funcionamento do sistema.

> email: admin@matheusgomesdev.com.br

> password: 123456

Clique em entrar e pronto :)

## ⚡ Instalação

1. Clone o repositório para sua máquina local usando o seguinte comando:

    > git clone https://github.com/matheusgomesdevelop/nextjs-auth-jwt.git

2. Navegue até o diretório do projeto:

    > cd nextjs-auth-jwt

3. Crie um arquivo .env na raiz do projeto e configure a variavel de ambiente com a URL da API.

    - `NEXT_PUBLIC_STRAPI_API_URL=https://nextjs-auth-jwt-backend-new.onrender.com/api`

4. Inicie um servidor local para visualizar o portfólio.

    > yarn dev ou yarn start

5. Abra o navegador e visualize o portfolio na porta 3000 🎉
    > http://localhost:3000

## Fluxos do sistema

Entenda algumas características por trás do funcionamento do sistema.

### Tela de Login

-   O usuário acessa o sistema e informa o `email` e `senha`.
-   O sistema valida se as informações correspondem aos padrôes de validação.
-   Se os dados estiverem **incorretos**, o sistema informa o usuário para corrigi-los.
-   Se os dados estiverem **corretos**, o sistema informa o usuário do sucesso, e é feito o login.

### Validacoes

Algumas validações importantes do sistema:

#### Autenticacao e Autorizacao

-   O sistema valida se o usuário está `autenticado` e `autorizado` para acessar páginas internas.
-   Caso não esteja autenticado e autorizado, o sistema informa o usuário e o redireciona para a página de `401`, e pede que ele faça o login.

#### Gerenciamento de Sessao

-   Por padrão, o usuario é autenticado no `sessionStorage`, e caso ele feche o browser ele terá que logar novamente.
-   O usuário tem a opção de `manter_logado`, que faz com que ele não precise se logar novamente.
-   `manter_logado`, armazena o token do usuário no localStorage de no cookie, até que a duração do **token expire**.
-   **Obs**: na minha regra de negócio coloquei para expirar o token em 365 dias, adapte para o seu cenário !
-   Caso o usuario esteja na opção `manter_logado`, quando ele acessar o sistema, ele automaticamente será redirecionado para a tela principal, **sem precisar informar o email e password novamente**.

#### Extra - Temas

-   O usuário poderá mudar a cor do tema, de `light` para `dark` para facilitar a visualização do sistema e não forçar os olhos.

## 🔧 Tecnologias Utilizadas

### Prototipacao

-   Figma
-   Untitled UI
-   Clean Code
-   Clean Architecture

### Metodologias

-   BDD/TDD
-   Atomic Design
-   Arquitetura Hexagonal
-   BEM
-   REST API
-   JWT

### Bibliotecas

-   React.js
-   Formik
-   yup
-   PrimeReact

### Frontend

-   HTML5
-   CSS3
-   TypeScript
-   Next.js 13

### Versionamento

-   Git/Github

### Testes

-   Jest e React Testing Library

### Deploy e Hospedagem

-   Vercel
-   Render

### Documentacao

-   Jira
-   Confluence

## 💬 Contribuicao

Sinta-se a vontade para contribuir enviando um pull request.

## 👨‍💻 Autor

-   [Site](https://matheusgomesdev.com.br/)
-   [Github](https://github.com/matheusgrodrigues)
-   [Linkedin](https://www.linkedin.com/in/matheusgomes/)

## 📜 Licenca

MIT License.
