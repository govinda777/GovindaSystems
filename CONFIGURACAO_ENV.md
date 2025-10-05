# 🔐 Configuração de Variáveis de Ambiente

## ⚠️ IMPORTANTE: Privy App ID Configurado

```bash
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
```

---

## 📝 Como Configurar .env.local

### 1. Criar arquivo .env.local

```bash
cd src/web
touch .env.local
```

### 2. Adicionar as seguintes variáveis:

```bash
# ============================================
# PRIVY (Autenticação e Pagamentos)
# ============================================
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
PRIVY_SECRET=                           # ← Obter no https://dashboard.privy.io

# ============================================
# OPENAI (Inteligência Artificial)
# ============================================
OPENAI_API_KEY=                         # ← Obter no https://platform.openai.com

# ============================================
# ANTHROPIC (Claude AI - Opcional)
# ============================================
ANTHROPIC_API_KEY=                      # ← Obter no https://console.anthropic.com

# ============================================
# SANITY CMS (Se estiver usando)
# ============================================
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_API_TOKEN=

# ============================================
# EMAIL (SendGrid)
# ============================================
SENDGRID_API_KEY=                       # ← Obter no https://sendgrid.com
EMAIL_FROM=contato@govindasystems.com

# ============================================
# GOOGLE ANALYTICS
# ============================================
NEXT_PUBLIC_GA_ID=                      # ← Obter no Google Analytics
NEXT_PUBLIC_GTM_ID=                     # ← Obter no Google Tag Manager

# ============================================
# THIRDWEB (Para DAO Builder)
# ============================================
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=         # ← Se estiver usando para DAO

# ============================================
# DESENVOLVIMENTO
# ============================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Obter as Chaves

#### Privy Secret
1. Acesse: https://dashboard.privy.io
2. Selecione seu app
3. Vá em Settings → API Keys
4. Copie o **App Secret**
5. Cole em `PRIVY_SECRET=`

#### OpenAI API Key
1. Acesse: https://platform.openai.com/api-keys
2. Clique em "Create new secret key"
3. Dê um nome: "GovindaSystems"
4. Copie a chave (começa com `sk-`)
5. Cole em `OPENAI_API_KEY=`

#### SendGrid API Key
1. Acesse: https://app.sendgrid.com/settings/api_keys
2. Clique em "Create API Key"
3. Dê permissão de "Mail Send"
4. Copie a chave
5. Cole em `SENDGRID_API_KEY=`

#### Google Analytics
1. Acesse: https://analytics.google.com
2. Admin → Create Property
3. Copie o ID (formato: G-XXXXXXXXXX)
4. Cole em `NEXT_PUBLIC_GA_ID=`

---

## 🔒 Segurança

### ✅ Variáveis PÚBLICAS (começam com NEXT_PUBLIC_)
Podem ser expostas no frontend:
- `NEXT_PUBLIC_PRIVY_APP_ID`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_GTM_ID`
- `NEXT_PUBLIC_THIRDWEB_CLIENT_ID`
- `NEXT_PUBLIC_APP_URL`

### ❌ Variáveis SECRETAS (NUNCA expor)
Devem ficar APENAS no servidor:
- `PRIVY_SECRET`
- `OPENAI_API_KEY`
- `ANTHROPIC_API_KEY`
- `SANITY_API_TOKEN`
- `SENDGRID_API_KEY`

---

## 📂 .gitignore

Certifique-se que o arquivo `.gitignore` contém:

```bash
# Variáveis de ambiente
.env
.env.local
.env*.local
.env.development.local
.env.test.local
.env.production.local
```

**NUNCA commite .env.local no Git!**

---

## 🚀 Para Produção (Vercel)

### 1. Acessar Dashboard Vercel
https://vercel.com/seu-projeto/settings/environment-variables

### 2. Adicionar Variáveis

Copie as mesmas variáveis do `.env.local`, mas com valores de produção:

```bash
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
PRIVY_SECRET=seu_secret_de_producao
OPENAI_API_KEY=sua_key_de_producao
SENDGRID_API_KEY=sua_key_de_producao
NEXT_PUBLIC_APP_URL=https://govindasystems.com
NODE_ENV=production
```

### 3. Aplicar

- Production
- Preview (opcional)
- Development (opcional)

---

## ✅ Verificar Configuração

### Testar se variáveis estão carregando:

```javascript
// Criar arquivo: src/web/pages/api/test-env.js
export default function handler(req, res) {
  res.status(200).json({
    hasPrivyAppId: !!process.env.NEXT_PUBLIC_PRIVY_APP_ID,
    hasPrivySecret: !!process.env.PRIVY_SECRET,
    hasOpenAI: !!process.env.OPENAI_API_KEY,
    hasSendGrid: !!process.env.SENDGRID_API_KEY,
    nodeEnv: process.env.NODE_ENV,
  });
}
```

Acessar: `http://localhost:3000/api/test-env`

Deve retornar:
```json
{
  "hasPrivyAppId": true,
  "hasPrivySecret": true,
  "hasOpenAI": true,
  "hasSendGrid": true,
  "nodeEnv": "development"
}
```

**⚠️ DELETAR este arquivo após testar!**

---

## 📚 Arquivos de Referência

Criados para você:
- ✅ `CONFIGURACAO_PRIVY.md` - Guia completo do Privy
- ✅ `CONFIGURACAO_ENV.md` - Este arquivo

Para criar:
- [ ] `src/web/.env.local` - Suas variáveis locais (você precisa criar)

---

## 🎯 Checklist

- [x] App ID do Privy obtido: `cmaqqs10k00onl20md0g7c7bg`
- [ ] Arquivo `.env.local` criado
- [ ] `PRIVY_SECRET` adicionado
- [ ] `OPENAI_API_KEY` adicionado (quando precisar)
- [ ] `SENDGRID_API_KEY` adicionado (quando precisar)
- [ ] `.gitignore` verificado
- [ ] Testado com `npm run dev`

---

## 📞 Próximos Passos

1. ✅ Criar `src/web/.env.local`
2. ✅ Adicionar variáveis acima
3. ✅ Obter PRIVY_SECRET no dashboard
4. ✅ Testar com `npm run dev`
5. ✅ Seguir `CONFIGURACAO_PRIVY.md` para implementação completa

---

**Status:** ✅ App ID Documentado  
**Próximo:** Criar .env.local e adicionar PRIVY_SECRET  
**Data:** Outubro 2025

