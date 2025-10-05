# 🚀 Plano de Deploy - GovindaSystems

**Data:** Outubro 2025  
**Status:** 🟡 Em Preparação  
**Site Atual:** https://govinda-systems-web-govinda777.vercel.app

---

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Fase 1: Preparação do Código](#fase-1-preparação-do-código)
3. [Fase 2: Configuração de Ambiente](#fase-2-configuração-de-ambiente)
4. [Fase 3: Deploy na Vercel](#fase-3-deploy-na-vercel)
5. [Fase 4: Configuração de Domínio](#fase-4-configuração-de-domínio)
6. [Fase 5: Testes e Validação](#fase-5-testes-e-validação)
7. [Fase 6: Otimização e Monitoramento](#fase-6-otimização-e-monitoramento)
8. [Fase 7: Documentação e Handoff](#fase-7-documentação-e-handoff)

---

## ✅ Pré-requisitos

### Contas Necessárias

- [x] GitHub (repositório existente)
- [x] Vercel (site já deployado)
- [ ] Domínio próprio (opcional: govindasystems.com)
- [x] Privy (App ID: `cmaqqs10k00onl20md0g7c7bg`)
- [ ] OpenAI (para serviços de IA)
- [ ] SendGrid (para emails)
- [ ] Google Analytics (para métricas)
- [ ] Sanity CMS (se for usar)

### Versões Requeridas

```bash
Node.js >= 18.0.0 (atual: v20)
npm >= 9.0.0
```

---

## 🔧 Fase 1: Preparação do Código

### 1.1 Limpar Arquivos de Desenvolvimento

```bash
cd /Users/gosouza/projetos-p/GovindaSystems/src/web

# Remover node_modules e cache
rm -rf node_modules
rm -rf .next
rm -rf .turbo

# Limpar cache do npm
npm cache clean --force
```

### 1.2 Revisar e Commitar Mudanças Pendentes

**Arquivos Modificados:**
- `src/web/package-lock.json`
- `src/web/pages/_document.js`
- `vercel.json`

**Arquivos Novos:**
- `LISTA_SERVICOS.md`
- `src/web/.node-version`

```bash
# Voltar para raiz do projeto
cd /Users/gosouza/projetos-p/GovindaSystems

# Adicionar todos os arquivos
git add .

# Criar commit descritivo
git commit -m "feat: preparação para deploy - atualiza configurações Vercel e adiciona node version"

# Verificar branch
git branch
# Se não estiver em main/master, fazer merge depois
```

### 1.3 Verificar Builds Localmente

```bash
cd src/web

# Instalar dependências limpas
npm install

# Testar build de produção
npm run build

# Se o build passar, testar localmente
npm run start
# Acessar: http://localhost:3000
```

**✅ Checklist - Fase 1:**
- [ ] Arquivos commitados
- [ ] Build local funcionando
- [ ] Testes passando (`npm test`)
- [ ] Sem erros de lint (`npm run lint`)

---

## 🔐 Fase 2: Configuração de Ambiente

### 2.1 Criar Arquivo .env.local (Desenvolvimento)

```bash
cd /Users/gosouza/projetos-p/GovindaSystems/src/web
touch .env.local
```

**Conteúdo Mínimo (.env.local):**

```bash
# ============================================
# PRIVY (Autenticação) - OBRIGATÓRIO
# ============================================
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
PRIVY_SECRET=                           # ← Obter no https://dashboard.privy.io

# ============================================
# AMBIENTE
# ============================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# ============================================
# OPCIONAIS (Adicionar quando necessário)
# ============================================
# OPENAI_API_KEY=                        # Para serviços de IA
# SENDGRID_API_KEY=                      # Para emails
# NEXT_PUBLIC_GA_ID=                     # Google Analytics
# NEXT_PUBLIC_SANITY_PROJECT_ID=         # CMS
```

### 2.2 Obter Chaves Necessárias

#### Privy Secret (OBRIGATÓRIO)

1. Acessar: https://dashboard.privy.io
2. Selecionar o app
3. Settings → API Keys
4. Copiar **App Secret**
5. Adicionar em `.env.local`

#### OpenAI API Key (Para Serviços AI)

1. Acessar: https://platform.openai.com/api-keys
2. Criar nova chave: "GovindaSystems Production"
3. Copiar chave (começa com `sk-`)
4. Guardar em local seguro

#### SendGrid API Key (Para Emails)

1. Acessar: https://app.sendgrid.com/settings/api_keys
2. Criar API Key
3. Permissões: "Mail Send"
4. Copiar e guardar

#### Google Analytics

1. Criar propriedade: https://analytics.google.com
2. Copiar ID (formato: `G-XXXXXXXXXX`)

### 2.3 Testar Variáveis de Ambiente

```bash
# Criar arquivo de teste temporário
cd /Users/gosouza/projetos-p/GovindaSystems/src/web/pages/api
```

Criar `test-env.js`:

```javascript
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

```bash
# Testar
npm run dev
# Acessar: http://localhost:3000/api/test-env

# ⚠️ DELETAR arquivo após testar!
rm pages/api/test-env.js
```

**✅ Checklist - Fase 2:**
- [ ] `.env.local` criado
- [ ] PRIVY_SECRET configurado
- [ ] Variáveis testadas
- [ ] Site rodando localmente com sucesso

---

## 🚀 Fase 3: Deploy na Vercel

### 3.1 Verificar Conexão com Vercel

**Projeto já existe:** https://govinda-systems-web-govinda777.vercel.app

### 3.2 Configurar Variáveis de Ambiente na Vercel

#### Via Dashboard (Recomendado)

1. Acessar: https://vercel.com/seu-usuario/govinda-systems-web/settings/environment-variables

2. Adicionar variáveis **OBRIGATÓRIAS:**

```bash
# Environment: Production, Preview, Development (todos)

NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
PRIVY_SECRET=[seu-secret-aqui]
NEXT_PUBLIC_APP_URL=https://govindasystems.com
NODE_ENV=production
```

3. Adicionar variáveis **OPCIONAIS** (quando tiver as chaves):

```bash
OPENAI_API_KEY=[sua-chave]
SENDGRID_API_KEY=[sua-chave]
EMAIL_FROM=contato@govindasystems.com
NEXT_PUBLIC_GA_ID=[seu-id]
NEXT_PUBLIC_SANITY_PROJECT_ID=[seu-id]
```

#### Via CLI (Alternativo)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Linkar projeto
cd /Users/gosouza/projetos-p/GovindaSystems
vercel link

# Adicionar variáveis
vercel env add NEXT_PUBLIC_PRIVY_APP_ID
vercel env add PRIVY_SECRET
vercel env add NEXT_PUBLIC_APP_URL
```

### 3.3 Atualizar Configuração do Vercel

Verificar `vercel.json` (já configurado):

```json
{
  "buildCommand": "cd src/web && npm run build",
  "outputDirectory": "src/web/.next",
  "installCommand": "cd src/web && npm install",
  "framework": "nextjs",
  "rewrites": [
    { "source": "/(.*)", "destination": "/src/web/$1" }
  ]
}
```

### 3.4 Deploy

#### Opção 1: Git Push (Automático - RECOMENDADO)

```bash
cd /Users/gosouza/projetos-p/GovindaSystems

# Fazer merge para main/master se estiver em outra branch
git checkout main  # ou master
git merge feature/refactory

# Push para produção
git push origin main

# ✅ Vercel detecta automaticamente e faz deploy!
```

#### Opção 2: Via CLI

```bash
# Preview deploy
vercel

# Production deploy
vercel --prod
```

### 3.5 Monitorar Deploy

1. Acessar: https://vercel.com/seu-usuario/govinda-systems-web/deployments
2. Verificar logs de build
3. Aguardar conclusão (~2-5 minutos)

**✅ Checklist - Fase 3:**
- [ ] Variáveis de ambiente configuradas na Vercel
- [ ] Deploy executado com sucesso
- [ ] Site acessível na URL Vercel
- [ ] Sem erros nos logs

---

## 🌐 Fase 4: Configuração de Domínio

### 4.1 Comprar Domínio (se ainda não tem)

**Opções de Registro:**
- Registro.br (domínios .br)
- GoDaddy
- Namecheap
- Cloudflare Registrar (recomendado)

**Sugestões:**
- `govindasystems.com` (principal)
- `govindasystems.com.br` (alternativo)

### 4.2 Configurar DNS na Vercel

#### Na Vercel:

1. Acessar: https://vercel.com/seu-usuario/govinda-systems-web/settings/domains
2. Clicar em "Add Domain"
3. Digitar: `govindasystems.com`
4. Vercel fornecerá registros DNS

#### No Registrador de Domínio:

Adicionar os registros fornecidos pela Vercel:

```dns
Tipo: A
Nome: @
Valor: 76.76.21.21

Tipo: CNAME
Nome: www
Valor: cname.vercel-dns.com
```

### 4.3 Aguardar Propagação DNS

- Tempo: 1-48 horas (geralmente 1-4 horas)
- Verificar: https://dnschecker.org

### 4.4 Configurar SSL/HTTPS

✅ A Vercel configura automaticamente certificados SSL via Let's Encrypt

### 4.5 Configurar Redirects

Na Vercel, adicionar em `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/:path((?!www).*)",
      "destination": "https://www.govindasystems.com/:path*",
      "permanent": true
    }
  ]
}
```

### 4.6 Atualizar URLs no Código

```bash
# Buscar e substituir URLs antigas
cd /Users/gosouza/projetos-p/GovindaSystems

# Atualizar NEXT_PUBLIC_APP_URL na Vercel
# Production: https://govindasystems.com
# Preview: https://preview.govindasystems.com (se configurado)
```

**✅ Checklist - Fase 4:**
- [ ] Domínio registrado
- [ ] DNS configurado
- [ ] SSL ativo
- [ ] Redirects funcionando
- [ ] URLs atualizadas

---

## 🧪 Fase 5: Testes e Validação

### 5.1 Testes Funcionais

#### Checklist de Páginas

```bash
# Testar todas as rotas principais
✓ Homepage: https://govindasystems.com
✓ Serviços: https://govindasystems.com/services
✓ Projetos: https://govindasystems.com/projects
✓ Governança: https://govindasystems.com/governance
✓ NFTs: https://govindasystems.com/nfts/[id]
✓ Crowdfund: https://govindasystems.com/crowdfund
✓ Join: https://govindasystems.com/join
✓ Token: https://govindasystems.com/token-ecosystem
```

#### Checklist de Funcionalidades

- [ ] Autenticação com Privy funcionando
- [ ] Tema claro/escuro alternando
- [ ] Navegação responsiva (mobile/desktop)
- [ ] Formulários enviando
- [ ] Integrações externas funcionando
- [ ] Imagens carregando
- [ ] Links externos funcionando

### 5.2 Testes de Performance

#### Lighthouse (Chrome DevTools)

```bash
# Métricas alvo:
✓ Performance: > 90
✓ Accessibility: > 95
✓ Best Practices: > 90
✓ SEO: > 95
```

#### PageSpeed Insights

1. Acessar: https://pagespeed.web.dev
2. Testar: https://govindasystems.com
3. Verificar Core Web Vitals

#### Vercel Analytics

Ativar na dashboard da Vercel:
- Speed Insights
- Web Analytics

### 5.3 Testes de SEO

#### Verificar Meta Tags

```html
<title>GovindaSystems - Soluções de IA para Negócios</title>
<meta name="description" content="..." />
<meta property="og:title" content="..." />
<meta property="og:image" content="..." />
```

#### Submeter aos Buscadores

```bash
# Google Search Console
https://search.google.com/search-console

# Bing Webmaster Tools
https://www.bing.com/webmasters

# Submeter sitemap
https://govindasystems.com/sitemap.xml
```

### 5.4 Testes de Segurança

#### Verificar Headers de Segurança

```bash
# Testar em: https://securityheaders.com
✓ X-Frame-Options
✓ X-Content-Type-Options
✓ Content-Security-Policy
✓ HTTPS enforced
```

#### Verificar SSL

```bash
# Testar em: https://www.ssllabs.com/ssltest/
Target: Grade A
```

### 5.5 Testes Cross-Browser

**Browsers para testar:**
- [ ] Chrome (Desktop + Mobile)
- [ ] Firefox
- [ ] Safari (Desktop + Mobile)
- [ ] Edge
- [ ] Opera

**Dispositivos:**
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Mobile Large (414x896)

### 5.6 Testes de Integração

#### Privy (Autenticação)

- [ ] Login com email
- [ ] Login com wallet (MetaMask, WalletConnect)
- [ ] Login com social (Google, Twitter, Discord)
- [ ] Logout funcionando

#### Blockchain (se aplicável)

- [ ] Conectar wallet
- [ ] Ler dados da blockchain
- [ ] Transações funcionando

**✅ Checklist - Fase 5:**
- [ ] Todas as páginas carregando
- [ ] Performance > 90
- [ ] SEO otimizado
- [ ] Segurança verificada
- [ ] Cross-browser OK
- [ ] Integrações funcionando

---

## 📊 Fase 6: Otimização e Monitoramento

### 6.1 Configurar Analytics

#### Google Analytics 4

```javascript
// Em _app.js ou _document.js
<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `,
  }}
/>
```

#### Vercel Analytics

```bash
cd /Users/gosouza/projetos-p/GovindaSystems/src/web
npm install @vercel/analytics
```

```javascript
// Em _app.js
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

### 6.2 Configurar Monitoramento de Erros

#### Sentry (Recomendado)

```bash
npm install --save @sentry/nextjs
npx @sentry/wizard -i nextjs
```

#### LogRocket (Alternativo)

```bash
npm install --save logrocket
npm install --save logrocket-react
```

### 6.3 Otimizações de Performance

#### Imagens

```javascript
// Usar Next.js Image
import Image from 'next/image';

<Image
  src="/logo.png"
  alt="GovindaSystems"
  width={200}
  height={50}
  priority
/>
```

#### Fonts

```javascript
// Em _document.js
<link
  rel="preload"
  href="/fonts/inter-var.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

#### Cache

```javascript
// Em next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

### 6.4 SEO Avançado

#### Criar sitemap.xml

```bash
cd /Users/gosouza/projetos-p/GovindaSystems/src/web
npm install next-sitemap
```

Criar `next-sitemap.config.js`:

```javascript
module.exports = {
  siteUrl: 'https://govindasystems.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
```

Adicionar em `package.json`:

```json
{
  "scripts": {
    "postbuild": "next-sitemap"
  }
}
```

#### Criar robots.txt

```txt
User-agent: *
Allow: /

Sitemap: https://govindasystems.com/sitemap.xml
```

### 6.5 Configurar Email Marketing

#### MailChimp / SendGrid

```bash
# Criar formulário de newsletter
# Integrar com API
# Configurar automações
```

### 6.6 Configurar Backup

#### GitHub

```bash
# Já configurado via commits regulares
git push origin main
```

#### Vercel

✅ Vercel mantém histórico de deployments

#### Dados

```bash
# Se usar CMS/DB, configurar backups automáticos
# Sanity: backups automáticos
# Supabase: Point-in-Time Recovery
```

**✅ Checklist - Fase 6:**
- [ ] Analytics configurado
- [ ] Monitoramento de erros ativo
- [ ] Performance otimizada
- [ ] SEO avançado implementado
- [ ] Newsletter configurada
- [ ] Backups funcionando

---

## 📚 Fase 7: Documentação e Handoff

### 7.1 Documentar Processo de Deploy

✅ Este documento (`PLANO_DEPLOY.md`)

### 7.2 Criar Runbook de Operações

Criar `RUNBOOK_OPERACOES.md`:

```markdown
# Operações - GovindaSystems

## Deploy de Emergência
## Rollback
## Troubleshooting
## Escalação
```

### 7.3 Documentar Credenciais

**⚠️ NUNCA comitar credenciais no Git!**

Criar arquivo local (NÃO versionar):

```bash
# credentials.txt (adicionar ao .gitignore)
Vercel: [URL do projeto]
Privy: [App ID]
Domain: [Registrador]
Email: [SendGrid]
Analytics: [Google Analytics]
```

Armazenar em gerenciador de senhas seguro:
- 1Password
- Bitwarden
- LastPass

### 7.4 Criar Guia de Manutenção

Criar `MANUTENCAO.md`:

```markdown
# Manutenção do Site

## Atualizar Conteúdo
## Adicionar Serviço
## Atualizar Dependências
## Monitoramento Regular
```

### 7.5 Treinamento da Equipe

**Documentar:**
- Como fazer deploy
- Como adicionar conteúdo
- Como verificar analytics
- Como responder a incidentes

### 7.6 Checklist Pós-Deploy

Criar `POST_DEPLOY_CHECKLIST.md`:

```markdown
# Checklist Pós-Deploy

24h após deploy:
- [ ] Verificar analytics
- [ ] Verificar erros (Sentry)
- [ ] Verificar performance
- [ ] Verificar feedback de usuários

7 dias após deploy:
- [ ] Analisar métricas
- [ ] Ajustar SEO se necessário
- [ ] Otimizar conversões
```

**✅ Checklist - Fase 7:**
- [ ] Documentação completa
- [ ] Runbook criado
- [ ] Credenciais seguras
- [ ] Equipe treinada
- [ ] Processos documentados

---

## 🎯 Resumo Executivo

### Timeline Estimada

```
Fase 1: Preparação do Código        → 2-4 horas
Fase 2: Configuração de Ambiente     → 1-2 horas
Fase 3: Deploy na Vercel             → 30min-1h
Fase 4: Configuração de Domínio      → 1-48h (DNS)
Fase 5: Testes e Validação           → 4-8 horas
Fase 6: Otimização e Monitoramento   → 2-4 horas
Fase 7: Documentação                 → 2-3 horas

TOTAL: 12-24 horas (trabalho)
       + 1-48h (propagação DNS)
```

### Custos Mensais Estimados

```
Vercel (Hobby):       $0/mês (até 100GB bandwidth)
Vercel (Pro):         $20/mês (se precisar mais)
Domínio:              $12-15/ano
Privy:                $0-99/mês (conforme uso)
OpenAI:               Variável (por uso)
SendGrid:             $0-15/mês (até 40k emails)
Google Analytics:     $0 (grátis)
Sentry:               $0-26/mês

TOTAL INICIAL: $0-50/mês
```

### Prioridades

#### OBRIGATÓRIO (MVP)
1. ✅ Código funcionando
2. ✅ Variáveis de ambiente configuradas
3. ✅ Deploy na Vercel
4. ✅ HTTPS funcionando
5. ✅ Privy autenticação funcionando

#### IMPORTANTE (Launch)
6. Domínio próprio configurado
7. Analytics ativo
8. SEO básico
9. Performance > 90
10. Testes completos

#### DESEJÁVEL (Growth)
11. Monitoramento de erros
12. Email marketing
13. SEO avançado
14. Otimizações avançadas
15. Documentação completa

---

## 🆘 Troubleshooting

### Build Falhou

```bash
# Limpar cache
rm -rf node_modules .next
npm install
npm run build
```

### Variáveis de Ambiente não Funcionam

```bash
# Verificar se começam com NEXT_PUBLIC_ (para cliente)
# Verificar se estão na Vercel
# Re-deploy após adicionar variáveis
```

### Domínio não Resolve

```bash
# Verificar DNS: https://dnschecker.org
# Aguardar propagação (até 48h)
# Verificar registros A e CNAME
```

### Privy não Conecta

```bash
# Verificar NEXT_PUBLIC_PRIVY_APP_ID
# Verificar domínio permitido no Privy Dashboard
# Verificar CORS
```

### Performance Baixa

```bash
# Analisar Lighthouse
# Otimizar imagens
# Implementar cache
# Usar Next.js Image
```

---

## 📞 Contatos e Suporte

### Suporte Técnico

- **Vercel:** https://vercel.com/support
- **Privy:** https://docs.privy.io
- **Next.js:** https://nextjs.org/docs

### Emergências

```bash
# Rollback rápido na Vercel
1. Acessar Deployments
2. Clicar em deployment anterior
3. Clicar "Promote to Production"
```

---

## ✅ Status Final

Atualizar após completar:

```
[ ] Fase 1: Preparação          → __/__/____
[ ] Fase 2: Ambiente            → __/__/____
[ ] Fase 3: Deploy              → __/__/____
[ ] Fase 4: Domínio             → __/__/____
[ ] Fase 5: Testes              → __/__/____
[ ] Fase 6: Otimização          → __/__/____
[ ] Fase 7: Documentação        → __/__/____

🚀 SITE NO AR: https://govindasystems.com
```

---

**Criado por:** GovindaSystems Dev Team  
**Última atualização:** Outubro 2025  
**Versão:** 1.0

