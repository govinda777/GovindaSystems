# 🆘 Prompt Curto para IA

**Copie e cole isto para chat rápido:**

---

Preciso de ajuda urgente! Meu Next.js 14.2.33 está com erro crítico:

**Erro:**
```
TypeError: (0 , react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV) is not a function
```

**Ambiente:**
- Next.js 14.2.33
- React 18.3.1
- Node v20.19.5
- macOS ARM64

**Código _app.js:**
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
        <Component {...pageProps} />  {/* ERRO AQUI linha 17 */}
      </ThirdwebProvider>
    </ThemeProvider>
  )
}
```

**next.config.js:**
```javascript
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

**package.json (principais):**
```json
{
  "dependencies": {
    "next": "^14.2.33",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@thirdweb-dev/react": "^4.9.4",
    "@privy-io/react-auth": "^3.0.1"
  }
}
```

**Já tentei:**
- ✅ Deletar node_modules/.next/package-lock.json e reinstalar
- ✅ npm cache clean --force
- ✅ Reinstalar next@14.2.33 --force
- ✅ --legacy-peer-deps
- ✅ Matar todos processos node

**Compila com sucesso mas falha no runtime (SSR).**

Como resolver? Preciso de:
1. Causa raiz do problema
2. Código corrigido
3. Comandos para aplicar

Obrigado! 🙏

