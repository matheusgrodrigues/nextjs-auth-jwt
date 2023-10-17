| Tela de Login                                                                                                                             | Tela de Boas Vindas                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| ![Tela de Login](https://nextjs-auth-jwt-blue.vercel.app/images/readme/login-desk.png)                                                    | ![Tela de Boas Vindas](https://nextjs-auth-jwt-blue.vercel.app/images/readme/dash-desk.png)                                               |
| [Visualize o Layout no Figma](https://www.figma.com/file/WZ6hE95sDBZxWX6X6S5sB7/Portfolio-Matheus?type=design&node-id=6552-4&mode=design) | [Visualize o Layout no Figma](https://www.figma.com/file/WZ6hE95sDBZxWX6X6S5sB7/Portfolio-Matheus?type=design&node-id=6552-5&mode=design) |

# [NextJS: Auth + JWT](https://nextjs-auth-jwt-blue.vercel.app/) 🚀

> 💡 Aplicação de autenticação segura baseada em tokens JWT (JSON Web Tokens) que oferece uma experiência de login fluida e segura para os usuários.

## 🚩Conteudo

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Frontend](#frontend)
  - [Bibliotecas](#bibliotecas)
  - [Infraestrutura](#infraestrutura)
  - [Deploy e Hospedagem](#deploy-e-hospedagem)
  - [Versionamento](#versionamento)
  - [Testes](#testes)
  - [Prototipação](#prototipacao)
  - [Documentação](#documentacao)
- [Instruções de Instalação](#instrucoes-de-instalacao)
- [Como Usar](#como-usar)
- [Contribuição](#contribuicao)
- [Licença](#licenca)

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

   - `NEXT_PUBLIC_STRAPI_API_URL=https://nextjs-auth-jwt-backend-4be97176fefb.herokuapp.com/api`

4. Inicie um servidor local para visualizar o portfólio.

   > yarn dev ou yarn start

5. Abra o navegador e visualize o portfolio na porta 3000 🎉
   > http://localhost:3000

## Fluxos do sistema

Entenda algumas características por trás do funcionamento do sistema.

### Tela de Login

- O usuário acessa o sistema e informa o `email` e `senha`.
- O sistema valida se as informações correspondem aos padrôes de validação.
- Se os dados estiverem **incorretos**, o sistema informa o usuário para corrigi-los.
- Se os dados estiverem **corretos**, o sistema informa o usuário do sucesso, e é feito o login.

### Validacoes

Algumas validações importantes do sistema:

#### Autenticacao e Autorizacao

- O sistema valida se o usuário está `autenticado` e `autorizado` para acessar páginas internas.
- Caso não esteja autenticado e autorizado, o sistema informa o usuário e o redireciona para a página de `401`, e pede que ele faça o login.

#### Gerenciamento de Sessao

- Por padrão, o usuario é autenticado no `sessionStorage`, e caso ele feche o browser ele terá que logar novamente.
- O usuário tem a opção de `manter_logado`, que faz com que ele não precise se logar novamente.
- `manter_logado`, armazena o token do usuário no localStorage de no cookie, até que a duração do **token expire**.
- **Obs**: na minha regra de negócio coloquei para expirar o token em 365 dias, adapte para o seu cenário !
- Caso o usuario esteja na opção `manter_logado`, quando ele acessar o sistema, ele automaticamente será redirecionado para a tela principal, **sem precisar informar o email e password novamente**.

#### Extra - Temas

- O usuário poderá mudar a cor do tema, de `light` para `dark` para facilitar a visualização do sistema e não forçar os olhos.

## 🔧 Tecnologias Utilizadas

### Prototipacao

- Figma
- Untitled UI

### Metodologias

- BDD/TDD
- Atomic Design
- Arquitetura Hexagonal
- BEM
- REST API
- JWT

### Bibliotecas

- React.js
- Formik
- yup
- PrimeReact

### Frontend

- HTML5
- CSS3
- TypeScript
- Next.js 16

### Versionamento

- Git/Github

### Testes

- Jest e React Testing Library

### Deploy e Hospedagem

- Vercel
- Heroku

### Documentacao

- Jira
- Confluence

## 📦 Arquitetura do Projeto

O sistema está utilizando a arquitetura Hexagonal, e todas as funcionalidades da camada de Domínio e Aplicação, estão localizadas em suas respectivas pastas.

Abaixo está um resumo dos arquivos e pastas.

### Camada de Domínio

Os arquivos da camada de domínio estão localizadas na pasta: `src/core/*`.

| Nome             | Exemplo            | Descrição                                                                                               |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------- |
| `/adapters/auth` | `/authAdapter.ts`  | Função responsável pela conexão com a api e executar as lógicas necessárias de autenticação do usuário. |
| `/antities/auth` | `/authEntity.ts`   | Estrutura dos dados do usuário que estão modelados no banco e são retornados pela API.                  |
| `/infra/http`    | `/httpInfra.ts`    | Método responsável pelas chamadas HTTP da aplicação, tudo passa por ela.                                |
| `/ports/auth`    | `/authPort.ts`     | Interfaces que os Adapters implementam.                                                                 |
| `/useCases/auth` | `/authUseCase.tsx` | Função que a camada de aplicação executa.                                                               |

### Camada da Aplicacao

Os arquivos da camada da aplicação estão localizadas nas pastas: dentro de `/src/*` com exeção da pasta **core**.

#### Atomic Design

Os componentes do sistema estão utilizando a metodologia Atomic Design, e estão localizados na pasta `/src/componentes/*`.

| Nome        | Exemplo                 | Descrição              |
| ----------- | ----------------------- | ---------------------- |
| `atoms`     | `/a-button.tsx`         | Atomos do sistema.     |
| `molecules` | `/input-with-label.tsx` | Moleculas do sistema.  |
| `organisms` | `/o-form-login.tsx`     | Organismos do sistema. |
| `templates` | `/t-login.tsx`          | Templates do sistema.  |
| `pages`     | `/p-login.tsx`          | Paginas do sistema.    |

#### Services

A camada da aplicação possui alguns serviços que são executados rotineiramente por diversas partes do sistema, e estão localizados na pasta `/src/services/*`.

| Nome             | Exemplo               | Descrição                                               |
| ---------------- | --------------------- | ------------------------------------------------------- |
| `sessionService` | `/sessionService.tsx` | Decorator pattern (HOC) e helpers de sessão do usuário. |
| `tokenService`   | `/tokenService.tsx`   | Funções de gerenciamento do token do usuário logado.    |

### Testes

O sistema foi construido utilizando a metodologia **TDD**, todos os testes e os mocks, estão localizadas na raiz do projeto nas pastas `__tests__` e `__mocks__` e estão seguindo a mesma estrutura de arquivos e pastas referente aos arquivos que estão sendo testados.

| Nome          | Exemplo                                                   | Descrição                                                                     |
| ------------- | --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `__tests__`   | `/atoms/a-button/a-button.test.tsx`                       | Exemplo do teste relacionado ao atomo a-buttom.                               |
| `__mocks__`   | `/components/organism/o-login-form/o-login-form.test.tsx` | Mocks utilizados no teste de login do usuário.                                |
| `/src/utils/` | `/providers/app-router-ctx-provider.tsx`                  | Helper utilizado nos testes para adicionar o AppRouter do Next.js nos testes. |

**Obs.** Foquei em testar as partes mais importantes do siste, alguns ficaram pendentes para serem publicados nas proximas atualizações.

### Configuracoes

As configurações de `urls` e `mensagens` estão localizadas na pasta `/src/config/*`.

| Nome       | Exemplo               | Descrição                                                  |
| ---------- | --------------------- | ---------------------------------------------------------- |
| `url`      | `/url/index.tsx`      | URL do endpoint da API que está armazenado no .env.        |
| `messages` | `/messages/index.tsx` | Mensagens utilizadas pelo sistema para informar o usuário. |

### App

As paginas do sistema utilizam o **AppRouter** do Next.js, e basicamente instanciam as `pages` e informam as configurações dos `templates`.

Confira em `/app/*`.

## 💬 Contribuicao

Sinta-se a vontade para contribuir enviando um pull request.

## 👨‍💻 Autor

- [Site](https://matheusgomesdev.com.br/)
- [Github](https://github.com/matheusgrodrigues)
- [Linkedin](https://www.linkedin.com/in/matheusgomes/)

## 📜 Licenca

MIT License.
