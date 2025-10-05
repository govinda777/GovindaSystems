# 🔧 Troubleshooting - GovindaSystems

## 🚨 Erro: `jsxDEV is not a function`

### Sintomas
```
TypeError: (0 , react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV) is not a function
```

### Causa
- Cache corrompido do React/Next.js
- Incompatibilidade temporária após updates
- node_modules inconsistente

### ✅ Solução Completa

```bash
# 1. Parar o servidor dev (Ctrl+C)

# 2. Limpar tudo
cd /Users/gosouza/projetos-p/GovindaSystems/src/web
rm -rf node_modules .next .turbo package-lock.json

# 3. Limpar cache npm
npm cache clean --force

# 4. Reinstalar
npm install

# 5. Reiniciar dev server
npm run dev
```

**Tempo total:** 5-15 minutos (depende da internet)

---

## ⚡ Solução Rápida (com pnpm)

Se `npm install` está muito lento:

```bash
# Instalar pnpm globalmente
npm install -g pnpm

# Usar pnpm (3-5x mais rápido)
cd /Users/gosouza/projetos-p/GovindaSystems/src/web
pnpm install

# Rodar dev
pnpm dev
```

**Tempo total:** 2-5 minutos

---

## 🐛 Outros Erros Comuns

### Erro: "Port 3000 already in use"

**Solução:**
```bash
# Encontrar processo na porta 3000
lsof -ti:3000

# Matar processo
kill -9 $(lsof -ti:3000)

# Ou usar outra porta
npm run dev -- -p 3001
```

---

### Erro: "Cannot find module"

**Solução:**
```bash
# Reinstalar dependências
cd /Users/gosouza/projetos-p/GovindaSystems/src/web
rm -rf node_modules
npm install
```

---

### Erro: Build falha na Vercel

**Possíveis causas:**
1. Variáveis de ambiente faltando
2. Versão Node.js diferente
3. Dependências quebradas

**Solução:**
```bash
# 1. Verificar Node version
node -v  # Deve ser >= 18.0.0

# 2. Testar build localmente
npm run build

# 3. Verificar variáveis na Vercel
# Dashboard → Settings → Environment Variables
```

---

### Erro: "Module not found: Can't resolve '@/...'"

**Causa:** Alias de import não configurado

**Solução:**
Verificar `jsconfig.json` ou `tsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

### Erro: Privy não conecta

**Checklist:**
- [ ] `NEXT_PUBLIC_PRIVY_APP_ID` configurado?
- [ ] Domínio permitido no Privy Dashboard?
- [ ] CORS configurado?
- [ ] Variável começa com `NEXT_PUBLIC_`?

**Teste:**
```javascript
// Verificar em console do browser
console.log(process.env.NEXT_PUBLIC_PRIVY_APP_ID);
// Deve retornar: cmaqqs10k00onl20md0g7c7bg
```

---

### Erro: Thirdweb não funciona

**Causa comum:** `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` não configurado

**Solução:**
1. Obter Client ID: https://thirdweb.com/dashboard/settings/api-keys
2. Adicionar em `.env.local`:
```bash
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=seu_client_id_aqui
```
3. Reiniciar dev server

---

### Erro: Next.js outdated (14.2.33)

**Aviso no console:**
```
Next.js (14.2.33) is outdated
```

**É seguro ignorar?** 
✅ Sim, por enquanto. Next.js 14.2.33 é estável.

**Quer atualizar?**
```bash
cd /Users/gosouza/projetos-p/GovindaSystems/src/web
npm update next react react-dom
```

⚠️ **Cuidado:** Updates podem quebrar código. Faça backup antes!

---

## 🔍 Como Debugar

### 1. Verificar logs do Next.js

```bash
cd /Users/gosouza/projetos-p/GovindaSystems/src/web
npm run dev
# Observar mensagens de erro no terminal
```

### 2. Verificar logs no browser

Abrir DevTools (F12) → Console
- Erros em vermelho
- Warnings em amarelo

### 3. Verificar variáveis de ambiente

```bash
# Verificar se .env.local existe
ls -la /Users/gosouza/projetos-p/GovindaSystems/src/web/.env.local

# Ver conteúdo (sem expor secrets)
cat /Users/gosouza/projetos-p/GovindaSystems/src/web/.env.local | grep "NEXT_PUBLIC"
```

### 4. Testar build de produção

```bash
npm run build
# Se build passar, problema é só em dev
# Se build falhar, problema é no código
```

---

## 🆘 Solução Última Instância

Se nada funcionar:

### Hard Reset

```bash
cd /Users/gosouza/projetos-p/GovindaSystems

# 1. Limpar tudo
rm -rf src/web/node_modules
rm -rf src/web/.next
rm -rf src/web/.turbo
rm -rf src/web/package-lock.json

# 2. Reset git (se necessário)
git restore src/web/package-lock.json

# 3. Limpar cache global npm
npm cache clean --force

# 4. Reinstalar Node.js (se muito quebrado)
# brew reinstall node

# 5. Reinstalar dependências
cd src/web
npm install

# 6. Testar
npm run dev
```

---

## 📊 Performance Lenta?

### `npm install` muito lento?

**Opções:**

1. **Usar pnpm** (recomendado)
```bash
npm i -g pnpm
pnpm install  # 3-5x mais rápido
```

2. **Usar yarn**
```bash
npm i -g yarn
yarn install  # 2-3x mais rápido
```

3. **Configurar npm para usar cache**
```bash
npm config set cache ~/.npm-cache
```

---

## 🔗 Links Úteis

- **Next.js Docs:** https://nextjs.org/docs
- **Privy Docs:** https://docs.privy.io
- **Thirdweb Docs:** https://portal.thirdweb.com
- **Vercel Support:** https://vercel.com/support
- **React Docs:** https://react.dev

---

## 💡 Dicas Preventivas

### 1. Sempre use Git
```bash
# Antes de grandes mudanças
git add .
git commit -m "backup antes de mudança"
```

### 2. Mantenha .gitignore atualizado
```gitignore
node_modules/
.next/
.turbo/
.env.local
.env*.local
```

### 3. Documente problemas
Quando resolver um problema, adicione aqui para referência futura.

### 4. Use versões específicas
No `package.json`, fixe versões importantes:
```json
{
  "dependencies": {
    "next": "14.2.33",  // versão exata
    "react": "^18.3.1"  // versão mínima
  }
}
```

---

## 📞 Precisa de Mais Ajuda?

1. **GitHub Issues:** Postar no repositório
2. **Stack Overflow:** Tag com `nextjs`, `react`, `vercel`
3. **Discord Vercel:** https://vercel.com/discord
4. **Discord Next.js:** https://nextjs.org/discord

---

**Última atualização:** Outubro 2025  
**Mantido por:** GovindaSystems Dev Team

