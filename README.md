| Tela de Login                                       | Tela de Boas Vindas                                      |
| ------------------------------------------- | ----------------------------------------- |
| ![Tela de Login](/readme/login-desktop.png) | ![Tela de Boas Vindas](/readme/dash-desktop.png) |
| [Visualize o Layout no Figma](https://www.figma.com/file/WZ6hE95sDBZxWX6X6S5sB7/Portfolio-Matheus?type=design&node-id=6552-4&mode=design) | [Visualize o Layout no Figma](https://www.figma.com/file/WZ6hE95sDBZxWX6X6S5sB7/Portfolio-Matheus?type=design&node-id=6552-5&mode=design)

# [NextJS: Auth + JWT](https://nextjs-auth-jwt-blue.vercel.app/) 🚀

> **Em andamento**: https://nextjs-auth-jwt-blue.vercel.app/

Aplicação de autenticação segura baseada em tokens JWT (JSON Web Tokens) que oferece uma experiência de login fluida e segura para os usuários.

- [Como Funciona](#como-funciona)
- [Tecnologias Utilizadas](#tecnologias-utilizadas) 
    - [Frontend](#frontend)
    - [Bibliotecas](#bibliotecas)
    - [Deploy e Hospedagem](#deploy-e-hospedagem)
    - [Versionamento](#versionamento)
    - [Testes](#testes)
    - [Prototipação](#prototipacao)
    - [Documentação](#documentacao)
- [Instruções de Instalação](#instrucoes-de-instalacao) 
- [Como Usar](#como-usar) 
- [Contribuição](#contribuicao) 
- [Licença](#licenca)

## Como Funciona

- Este sistema permite que os usuários ingressem com suas credenciais, como nome de usuário e senha.
- Após a autenticação bem-sucedida, o servidor gera um token JWT exclusivo que é enviado de volta ao cliente. 
- Este token é então armazenado no lado do cliente (por exemplo, em cookies ou armazenamento local) e enviado com cada solicitação subsequente para autenticação do usuário.
- O token JWT contém informações sobre o usuário autenticado e tem uma assinatura digital que garante sua autenticidade. 
- O servidor, ao receber solicitações, verifica a validade do token antes de conceder acesso aos recursos protegidos. 
- Se o token estiver expirado, inválido ou ausente, o servidor negará o acesso e solicitará uma nova autenticação.
- Além da autenticação, o sistema implementa medidas de segurança adicionais, como a capacidade de definir tempos de expiração para os tokens, protegendo contra ataques de repetição.
- Ele também suporta revogação de tokens em casos de comprometimento da conta do usuário ou outras situações de segurança.
- Além disso, o sistema de login JWT é altamente escalável e pode ser facilmente integrado a outros sistemas e serviços.
- Ele fornece uma experiência de usuário contínua, permitindo que os usuários acessem facilmente os recursos protegidos sem a necessidade de reautenticação frequente.
## Tecnologias Utilizadas

- **Frontend**
    - HTML5
    - CSS3 
    - TypeScript
    - Next.js 16

- **Bibliotecas**
    - React.js
    - Formik 
    - yup
    - PrimeReact
    - JWT (jsonwebtokens)

- **Deploy e Hospedagem**
    - Vercel

- **Versionamento**
    - Git/Github

- **Testes**
    - Jest
    - React Testing Library
    - Cypress
    - BDD/TDD

- **Prototipacao**
    - Figma

- **Documentacao**
    - Jira
    - Confluence

## Instrucoes de Instalacao

1. Clone o repositório para sua máquina local usando o seguinte comando:

   > git clone https://github.com/matheusgomesdevelop/nextjs-auth-jwt.git

2. Navegue até o diretório do projeto:

   > cd nextjs-auth-jwt

3. Inicie um servidor local para visualizar o portfólio.

   > yarn dev ou yarn start

4. Abra o navegador e visualize o portfolio na porta 3000
   > http://localhost:3000

## Como Usar

Este portfólio é simples de usar. Basta acessar as rotas disponíveis que podem ser visualizadas dentro da pasta `app`.

## Contribuicao

Sinta-se a vontade para contribuir enviando um pull request.

## Licenca

MIT License.
