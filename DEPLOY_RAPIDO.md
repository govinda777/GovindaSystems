# ⚡ Deploy Rápido - GovindaSystems

**Para colocar o site no ar HOJE**

---

## 🎯 Ações Imediatas (30 minutos)

### 1. Preparar Código (5 min)

```bash
cd /Users/gosouza/projetos-p/GovindaSystems/src/web

# Limpar e reinstalar
rm -rf node_modules .next
npm install

# Testar build
npm run build

# ✅ Se passar, continuar
```

### 2. Configurar Variáveis Mínimas (5 min)

Criar `/Users/gosouza/projetos-p/GovindaSystems/src/web/.env.local`:

```bash
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
PRIVY_SECRET=GET_FROM_PRIVY_DASHBOARD
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

**Obter PRIVY_SECRET:**
1. Acesse: https://dashboard.privy.io
2. Settings → API Keys
3. Copie o "App Secret"
4. Cole no `.env.local`

### 3. Testar Localmente (5 min)

```bash
npm run dev
# Abrir: http://localhost:3000

# ✅ Verificar:
# - Site carrega
# - Login funciona
# - Navegação OK
```

### 4. Commitar Mudanças (5 min)

```bash
cd /Users/gosouza/projetos-p/GovindaSystems

git add .
git commit -m "feat: preparação para deploy de produção"
```

### 5. Configurar Vercel (5 min)

**Acessar:** https://vercel.com/seu-usuario/govinda-systems-web/settings/environment-variables

**Adicionar OBRIGATÓRIAS:**

```
Nome: NEXT_PUBLIC_PRIVY_APP_ID
Valor: cmaqqs10k00onl20md0g7c7bg
Environments: Production, Preview, Development

Nome: PRIVY_SECRET
Valor: [seu-secret-do-privy]
Environments: Production

Nome: NEXT_PUBLIC_APP_URL
Valor: https://govinda-systems-web-govinda777.vercel.app
Environments: Production

Nome: NODE_ENV
Valor: production
Environments: Production
```

### 6. Deploy! (5 min)

```bash
cd /Users/gosouza/projetos-p/GovindaSystems

# Se estiver em feature branch
git checkout main
git merge feature/refactory

# Push para produção
git push origin main
```

**✅ Vercel detecta e faz deploy automaticamente!**

---

## 📊 Verificação Pós-Deploy (10 min)

### 1. Verificar Build

Acessar: https://vercel.com/deployments

- ✅ Status: Ready
- ✅ Sem erros
- ✅ Build concluído

### 2. Testar Site

Acessar: https://govinda-systems-web-govinda777.vercel.app

**Checklist Rápido:**
- [ ] Homepage carrega
- [ ] Menu funciona
- [ ] Página de Serviços abre
- [ ] Login com Privy funciona
- [ ] Tema claro/escuro alterna
- [ ] Responsivo (mobile)

### 3. Verificar Logs

Se algo não funcionar:

1. Vercel Dashboard → Deployments → [último deploy]
2. Clicar em "View Function Logs"
3. Procurar por erros

---

## 🚨 Se Algo Der Errado

### Build Falhou

```bash
# Localmente, verificar o erro
cd /Users/gosouza/projetos-p/GovindaSystems/src/web
npm run build

# Corrigir erros e tentar novamente
```

### Variáveis de Ambiente Erradas

1. Vercel Dashboard → Settings → Environment Variables
2. Editar variável com erro
3. Re-deploy: Deployments → [...] → Redeploy

### Rollback Rápido

1. Vercel Dashboard → Deployments
2. Clicar no deployment anterior que funcionava
3. "Promote to Production"

---

## ✅ Checklist Completo

```
[ ] 1. Build local passou
[ ] 2. .env.local criado com PRIVY_SECRET
[ ] 3. Testado localmente (npm run dev)
[ ] 4. Código commitado
[ ] 5. Variáveis configuradas na Vercel
[ ] 6. Push para main
[ ] 7. Deploy completado na Vercel
[ ] 8. Site acessível e funcionando
```

---

## 🎉 PRONTO!

Seu site está no ar em:
**https://govinda-systems-web-govinda777.vercel.app**

---

## 📈 Próximos Passos (Opcional)

Quando tiver tempo:

1. **Domínio Próprio** (govindasystems.com)
   - Ver `PLANO_DEPLOY.md` → Fase 4

2. **Analytics**
   - Google Analytics
   - Vercel Analytics

3. **Email**
   - SendGrid
   - Newsletter

4. **Otimizações**
   - SEO
   - Performance
   - Monitoramento

📖 **Guia completo:** `PLANO_DEPLOY.md`

---

## 💡 Comandos Úteis

```bash
# Ver status do git
git status

# Ver deployments recentes
vercel ls

# Ver logs em tempo real
vercel logs [deployment-url]

# Forçar novo deploy
git commit --allow-empty -m "trigger deploy"
git push origin main

# Testar build de produção localmente
npm run build && npm start
```

---

**Tempo Total:** 30-60 minutos  
**Custo:** $0 (Vercel Hobby é grátis)  
**Resultado:** Site no ar! 🚀

