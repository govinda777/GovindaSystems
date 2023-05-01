# Govinda Systems DAO | Web UI Documentation

Welcome to the Govinda Systems DAO Web UI, a user interface built with [Next.js](https://nextjs.org/) for interacting with the Govinda Systems DAO platform.

This project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and uses Bootstrap for styling and the Metamask wallet for authentication.

## Getting Started

### Prerequisites

Before running the development server, make sure you have:

- [Node.js](https://nodejs.org/en/) installed (version 12.x or higher)
- [Yarn](https://yarnpkg.com/) package manager installed

### Running the Development Server

1. Clone this repository:

```bash
git clone https://github.com/your-repo/govinda-systems-dao.git
```

2. Change into the project directory:

```bash
cd govinda-systems-dao
```

3. Install dependencies:

```bash
yarn install
```

4. Run the development server:

```bash
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as API routes instead of React pages.

This project uses `next/font` to automatically optimize and load Inter, a custom Google Font.

### Deploy on Vercel

Vercel é uma plataforma de hospedagem ideal para projetos Next.js, oferecendo escalabilidade e desempenho otimizado. Para implantar seu aplicativo Next.js na Vercel, siga os passos abaixo:

1. Crie uma conta no [Vercel](https://vercel.com/signup) se ainda não tiver uma.

2. Instale a CLI do Vercel globalmente em seu computador, executando o seguinte comando:

```bash
npm install -g vercel
```

3. Faça login na CLI do Vercel usando seu e-mail ou conta do GitHub/GitLab:

```bash
vercel login
```

4. Navegue até o diretório do projeto Govinda Systems DAO em seu computador e execute o seguinte comando:

```bash
vercel
```

5. A CLI do Vercel solicitará algumas informações sobre o projeto, como o nome do projeto e as configurações de build. Forneça as informações necessárias conforme solicitado.

6. Após a conclusão do processo, a CLI do Vercel fornecerá um link para a versão de desenvolvimento do seu projeto, algo como `https://govinda-systems-dao-yourusername.vercel.app/`. Acesse o link para verificar se o aplicativo foi implantado corretamente.

7. Para implantar uma versão de produção do seu aplicativo, execute o seguinte comando:

```bash
vercel --prod
```

Isso criará uma implantação de produção e fornecerá um link de produção, como `https://govinda-systems-dao.vercel.app/`.

8. Sempre que você fizer alterações no seu projeto e quiser atualizar a versão de produção, basta executar o comando `vercel --prod` novamente.

Para obter informações mais detalhadas sobre a implantação de aplicativos Next.js na Vercel, consulte a [documentação oficial do Next.js](https://nextjs.org/docs/deployment).