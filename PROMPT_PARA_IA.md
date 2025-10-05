# 🆘 Prompt para IA Resolver Erro Next.js

**Copie e cole este conteúdo completo para outra IA resolver o problema**

---

## 🚨 Problema

Estou com erro crítico no Next.js que impede o site de rodar:

```
TypeError: (0 , react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV) is not a function
    at App (webpack-internal:///./pages/_app.js:37:98)
```

O erro ocorre no arquivo `pages/_app.js` na linha 17 (componente `<Component {...pageProps} />`).

---

## 📁 Estrutura do Projeto

```
GovindaSystems/
├── src/
│   └── web/              # Aplicação Next.js
│       ├── pages/
│       │   ├── _app.js   ← ERRO AQUI
│       │   ├── _document.js
│       │   └── index.js
│       ├── components/
│       ├── package.json
│       └── next.config.js
```

---

## 📄 Código dos Arquivos Problemáticos

### pages/_app.js (onde ocorre o erro)

```javascript
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { Base, BaseGoerli } from "@thirdweb-dev/chains";
import { ThemeProvider } from '../context/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThirdwebProvider
        activeChain={Base}
        supportedChains={[Base, BaseGoerli]}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        supportedWallets={[metamaskWallet()]}
      >
        <Component {...pageProps} />  {/* ← ERRO NA LINHA 17 */}
      </ThirdwebProvider>
    </ThemeProvider>
  )
}
```

### pages/_document.js

```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="facebook-domain-verification" content="zrpeks7kvutacsqfyue53ed23d0oi0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
```

### package.json (dependências principais)

```json
{
  "name": "govinda.systems.web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest"
  },
  "dependencies": {
    "@coinbase/wallet-sdk": "^4.3.2",
    "@privy-io/react-auth": "^3.0.1",
    "@sanity/client": "^5.4.2",
    "@thirdweb-dev/react": "^4.9.4",
    "@thirdweb-dev/sdk": "^4.0.99",
    "next": "^14.2.33",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^12.23.22"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'preact/compat': 'react',
      'preact/hooks': 'react',
      'preact': 'react',
    };
    return config;
  },
}

module.exports = nextConfig
```

---

## 🔧 O que Já Foi Tentado (SEM SUCESSO)

1. ✅ Deletado `node_modules`, `.next`, `package-lock.json`
2. ✅ Limpado cache npm: `npm cache clean --force`
3. ✅ Reinstalado dependências múltiplas vezes
4. ✅ Reinstalado Next.js especificamente: `npm install next@14.2.33 --force`
5. ✅ Testado com `--legacy-peer-deps`
6. ✅ Verificado SWC binary (estava corrompido, reinstalado)
7. ✅ Matado todos os processos node/next rodando

---

## 💻 Ambiente

- **OS:** macOS 14.6.0 (Darwin 24.6.0)
- **Node:** v20.19.5
- **npm:** v10.8.2
- **Arquitetura:** darwin/arm64 (Apple Silicon M1/M2/M3)

---

## 🎯 Erro Completo (Stack Trace)

```
 ⚠ You are using a non-standard "NODE_ENV" value in your environment.
  ▲ Next.js 14.2.33
  - Local:        http://localhost:3000

 ✓ Ready in 1535ms
 ○ Compiling / ...
 ✓ Compiled / in 11.5s (3476 modules)

The default export of @sanity/client has been deprecated. Use the named export `createClient` instead

TypeError: (0 , react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV) is not a function
    at App (webpack-internal:///./pages/_app.js:37:98)
    at Wc (/Users/gosouza/projetos-p/GovindaSystems/src/web/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:68:44)
    at Zc (/Users/gosouza/projetos-p/GovindaSystems/src/web/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:253)
    [... stack continues ...]

 ⨯ pages/_app.js (17:10) @ Component
 ⨯ TypeError: (0 , react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV) is not a function
  page: '/'
```

---

## ⚠️ Observações Importantes

1. **Warning sobre NODE_ENV:** Aparece aviso sobre valor não-padrão de NODE_ENV
2. **Sanity Client Deprecated:** Aviso sobre exportação padrão do @sanity/client
3. **Compila mas falha no runtime:** O Next.js compila com sucesso (3476 módulos), mas falha ao renderizar
4. **Erro no SSR:** Erro ocorre no `react-dom-server`, sugerindo problema no Server-Side Rendering

---

## ❓ O Que Preciso

**Por favor, me forneça:**

1. ✅ **Solução para corrigir o erro `jsxDEV is not a function`**
2. ✅ **Código corrigido dos arquivos** (`_app.js`, `_document.js`, etc.)
3. ✅ **Comandos necessários** para aplicar a correção
4. ✅ **Explicação da causa raiz** do problema
5. ✅ **Como prevenir** que isso aconteça novamente

---

## 🎯 Contexto do Projeto

- **Tipo:** Site institucional com integração Web3
- **Framework:** Next.js 14.2.33 (Pages Router)
- **Objetivo:** Colocar site em produção na Vercel
- **Integrações:** 
  - Thirdweb (Web3/Blockchain)
  - Privy (Autenticação)
  - Sanity CMS
  - Framer Motion (Animações)

---

## 📦 Estrutura Atual do node_modules

```bash
# Versões instaladas atualmente:
next: 14.2.33
react: 18.3.1
react-dom: 18.3.1
@thirdweb-dev/react: 4.9.4
@privy-io/react-auth: 3.0.1
```

---

## 🔍 Suspeitas

Possíveis causas do erro:

1. **Conflito de versões** React/Next.js/JSX Runtime
2. **Problema com JSX Transform** (novo vs antigo)
3. **Conflito entre múltiplos providers** React
4. **Problema com Thirdweb** que pode ter dependências conflitantes
5. **Cache corrompido** persistente em algum lugar
6. **Problema com TypeScript/Babel** compilation
7. **Conflito de `preact`** (tem alias no next.config.js)

---

## 🚀 Formato de Resposta Esperado

Por favor, responda neste formato:

### 1. Diagnóstico
[Explique a causa raiz do problema]

### 2. Solução Passo a Passo
```bash
# Comandos para executar
```

### 3. Arquivos para Modificar
```javascript
// Código corrigido
```

### 4. Verificação
```bash
# Como testar se funcionou
```

### 5. Prevenção
[Como evitar que isso aconteça novamente]

---

## 📞 Informação Adicional

Se precisar de mais informações sobre:
- Outros arquivos do projeto
- Configurações específicas
- Logs mais detalhados
- Versões de outras dependências

**Por favor, peça e eu forneço!**

---

**Obrigado pela ajuda! 🙏**

---

**Status:** 🔴 Bloqueado - Site não roda localmente  
**Urgência:** 🚨 Alta - Impede deploy em produção  
**Data:** Outubro 2025

