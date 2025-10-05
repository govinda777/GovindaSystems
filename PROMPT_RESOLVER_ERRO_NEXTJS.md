# 🔧 Prompt para IA Resolver Erro Next.js

**Use este prompt para pedir ajuda a uma IA especializada em Next.js**

---

## 📋 Contexto do Projeto

Estou trabalhando em um projeto **Next.js 14.2.33** (React 18) localizado em:
- **Repositório:** https://github.com/govinda777/GovindaSystems
- **Branch:** feature/refactory
- **Diretório web:** `/src/web/`
- **Sistema:** macOS (darwin 24.6.0)
- **Node.js:** 18+

---

## ❌ Erro Atual

Quando executo `npm run dev`, recebo o seguinte erro:

```
TypeError: (0 , react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV) is not a function

Source: pages/_document.js (8:12) @ meta
```

### Screenshot do Erro
- **Arquivo:** `pages/_document.js`
- **Linha:** 8 (dentro do componente `<Head>`)
- **Erro:** Relacionado ao JSX/React runtime

---

## 📁 Arquivo Problemático

**`src/web/pages/_document.js`:**

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

---

## 📦 Dependências Principais

**`src/web/package.json`:**

```json
{
  "dependencies": {
    "next": "^14.2.33",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@privy-io/react-auth": "^3.0.1",
    "@thirdweb-dev/react": "^4.9.4",
    // ... outras dependências
  },
  "devDependencies": {
    "@babel/core": "^7.27.1",
    "@babel/preset-react": "^7.27.1",
    "eslint-config-next": "^14.1.0",
    // ... outras dev dependencies
  },
  "overrides": {
    "@coinbase/wallet-sdk": {
      "preact": "npm:react@18.3.1"
    }
  }
}
```

---

## 🔍 O Que Já Foi Tentado

1. ❌ Reiniciar servidor dev (`npm run dev`)
2. ❌ Remover `.next` e tentar novamente
3. ⏸️ **Tentativa de limpeza completa foi interrompida**

---

## ❓ O Que Preciso

**Por favor, me ajude a:**

1. ✅ **Diagnosticar** a causa raiz deste erro
2. ✅ **Resolver** o problema de forma definitiva
3. ✅ **Explicar** o que causou o erro
4. ✅ **Prevenir** que aconteça novamente

---

## 🎯 Solução Esperada

Preciso de comandos específicos para:

1. **Limpar** completamente o projeto (cache, node_modules, etc)
2. **Reinstalar** dependências corretamente
3. **Verificar** se há conflitos de versões
4. **Testar** se o erro foi resolvido
5. **Documentar** a solução para referência futura

---

## 💻 Comandos que Posso Executar

Forneça comandos exatos que eu devo executar no terminal, incluindo:

```bash
# Exemplo do formato que eu preciso:
cd /Users/gosouza/projetos-p/GovindaSystems/src/web

# Passo 1: Limpar
comando aqui

# Passo 2: Reinstalar
comando aqui

# Passo 3: Verificar
comando aqui
```

---

## 📂 Estrutura do Projeto

```
GovindaSystems/
├── src/
│   └── web/                    ← Aplicação Next.js está aqui
│       ├── pages/
│       │   ├── _app.js
│       │   ├── _document.js    ← Arquivo com erro
│       │   └── index.js
│       ├── components/
│       ├── styles/
│       ├── package.json
│       ├── next.config.js
│       └── tsconfig.json
├── package.json               ← Monorepo config
├── pnpm-workspace.yaml
└── .npmrc
```

---

## 🔧 Configurações do Projeto

### `next.config.js` (se relevante, peça para eu fornecer)
### `.npmrc` (otimizações de instalação já configuradas)
### `tsconfig.json` (projeto usa TypeScript + JavaScript)

---

## ⚠️ Observações Importantes

1. **Projeto é um monorepo** com workspace do pnpm
2. **Usa TypeScript E JavaScript** (arquivos .js e .tsx)
3. **Tem várias integrações:** Privy, Thirdweb, Sanity
4. **Next.js 14** (versão relativamente nova)
5. **React 18** com novos recursos

---

## 🎓 Informação Adicional

Se precisar de mais informações, posso fornecer:

- ✅ Conteúdo completo de qualquer arquivo
- ✅ Saída de comandos do terminal
- ✅ Logs de erro completos
- ✅ Configurações do Next.js
- ✅ Babel/ESLint configs

---

## 📞 Formato de Resposta Desejado

Por favor, estruture sua resposta assim:

### 1. 🔍 Diagnóstico
- O que está causando o erro
- Por que está acontecendo

### 2. 🛠️ Solução Passo a Passo
```bash
# Comandos exatos com explicações
```

### 3. ✅ Verificação
```bash
# Como confirmar que foi resolvido
```

### 4. 📚 Prevenção
- Como evitar no futuro
- Boas práticas

---

## 🚀 Urgência

Este erro está **bloqueando o desenvolvimento**. Preciso de uma solução:
- ✅ **Completa** (não apenas workaround)
- ✅ **Testada** (comandos que funcionam)
- ✅ **Explicada** (entender o problema)
- ✅ **Rápida** (o mais direto possível)

---

**Muito obrigado pela ajuda! 🙏**

---

## 📝 Notas Adicionais para a IA

- Sou desenvolvedor mas este erro específico está me confundindo
- Prefiro solução via terminal (comandos shell)
- Posso fornecer mais logs se necessário
- Não tenho problema em reinstalar tudo do zero se for a solução
- Objetivo final: `npm run dev` funcionando sem erros


