# 🚀 Stack Tecnológico: Base + Sanity - GovindaSystems

## 📋 Visão Geral

Este documento detalha a escolha do stack tecnológico principal do projeto após a refatoração, focando em **Base Blockchain** para funcionalidades Web3/DAO e **Sanity CMS** para conteúdo estruturado.

---

## 🔷 Base Blockchain

### O que é Base?

**Base** é uma Layer 2 segura, de baixo custo e amigável ao desenvolvedor, construída para levar o próximo bilhão de usuários para o mundo on-chain.

**Desenvolvida por:** Coinbase  
**Tecnologia:** Layer 2 Optimistic Rollup no Ethereum  
**Website:** https://base.org

### Por que Base?

#### ✅ Vantagens Técnicas

1. **Taxas Extremamente Baixas**
   - Transações custam centavos
   - Ideal para DAOs com muitas operações
   - Viável para pequenas e médias empresas

2. **Velocidade**
   - Confirmação de transações em ~2 segundos
   - Experiência de usuário superior
   - Finalidade rápida

3. **Segurança do Ethereum**
   - Herda a segurança da mainnet Ethereum
   - Rollups verificados na Layer 1
   - Descentralização mantida

4. **EVM Compatibility**
   - 100% compatível com Ethereum
   - Mesmos contratos inteligentes
   - Mesmas ferramentas (Hardhat, Foundry, etc)
   - Fácil migração de Ethereum ou Polygon

5. **Suporte da Coinbase**
   - Integração nativa com Coinbase Wallet
   - Fácil onboarding de usuários
   - Liquidez garantida
   - Credibilidade institucional

#### ✅ Vantagens de Negócio

1. **Adoção Crescente**
   - Ecosistema em rápido crescimento
   - Muitos projetos migrando para Base
   - Comunidade ativa

2. **Integração com Privy**
   - Suporte nativo a Base
   - Carteiras embutidas funcionam perfeitamente
   - Experiência de usuário simplificada

3. **Futuro Promissor**
   - Coinbase apostando forte
   - Inovações constantes
   - Roadmap sólido

### Comparação com Outras Chains

| Característica | Base | Polygon | Ethereum | Arbitrum |
|----------------|------|---------|----------|----------|
| **Taxa de Gas** | ~$0.01 | ~$0.02 | ~$5-50 | ~$0.15 |
| **Velocidade** | ~2s | ~2s | ~15s | ~1s |
| **EVM Compatible** | ✅ | ✅ | ✅ | ✅ |
| **TVL** | $2B+ | $5B+ | $50B+ | $10B+ |
| **Suporte Coinbase** | ✅ | ❌ | ✅ | ❌ |
| **Maturidade** | Novo (2023) | Maduro | Maduro | Maduro |

**Decisão:** Base oferece o melhor custo-benefício para nossos casos de uso (DAO Builder).

---

## 🎨 Sanity CMS

### O que é Sanity?

**Sanity** é um CMS headless moderno e flexível que permite gerenciar conteúdo estruturado de forma eficiente.

**Website:** https://www.sanity.io  
**Tipo:** Headless CMS  
**Plano:** Gratuito até 3 usuários

### Por que Sanity?

#### ✅ Vantagens

1. **Conteúdo Estruturado**
   - Schema customizável
   - Validação de dados
   - Relações entre conteúdos
   - Versionamento automático

2. **Experiência do Editor**
   - Interface intuitiva
   - Preview em tempo real
   - Edição colaborativa
   - Media library integrada

3. **API Poderosa**
   - GROQ (query language)
   - GraphQL support
   - REST API
   - Webhooks

4. **Performance**
   - CDN global
   - Cache inteligente
   - Imagens otimizadas automaticamente
   - Lazy loading

5. **Developer Experience**
   - TypeScript support
   - Client libraries para React/Next.js
   - Studio customizável
   - Deploy fácil

### Conteúdo Gerenciado no Sanity

```typescript
// Schemas Sanity

1. Blog Posts
   - Título
   - Slug
   - Conteúdo (rich text)
   - Autor
   - Data de publicação
   - Imagem destacada
   - Tags/Categorias
   - SEO metadata

2. Projetos/Portfolio
   - Nome do projeto
   - Cliente
   - Descrição
   - Tecnologias usadas
   - Screenshots/Imagens
   - URL do projeto
   - Case study (rich text)

3. Depoimentos
   - Nome do cliente
   - Empresa
   - Cargo
   - Foto
   - Depoimento
   - Rating (estrelas)
   - Projeto relacionado

4. FAQ
   - Pergunta
   - Resposta
   - Categoria
   - Ordem de exibição

5. Membros da Equipe
   - Nome
   - Cargo
   - Bio
   - Foto
   - Links sociais
```

---

## 🔄 Integração Base + Sanity

### Arquitetura de Dados

```
┌─────────────────────────────────────────────────┐
│              FRONTEND (Next.js)                 │
│                                                 │
│  ┌──────────────┐         ┌─────────────────┐  │
│  │  Web2 Data   │         │   Web3 Data     │  │
│  │              │         │                 │  │
│  │  • Blog      │         │  • DAOs         │  │
│  │  • Projetos  │         │  • Tokens       │  │
│  │  • FAQ       │         │  • Proposals    │  │
│  │  • Depoimen. │         │  • Votes        │  │
│  └──────┬───────┘         └────────┬────────┘  │
│         │                          │            │
└─────────┼──────────────────────────┼────────────┘
          │                          │
          ↓                          ↓
  ┌───────────────┐          ┌──────────────┐
  │  SANITY CMS   │          │     BASE     │
  │               │          │  BLOCKCHAIN  │
  │  Content API  │          │              │
  │  • REST       │          │  • RPC       │
  │  • GROQ       │          │  • Contracts │
  │  • GraphQL    │          │  • Events    │
  └───────────────┘          └──────────────┘
```

### Quando Usar Cada Um?

#### Use Sanity para:
- ✅ Conteúdo editorial (blog, artigos)
- ✅ Dados que mudam frequentemente
- ✅ Conteúdo que precisa de aprovação
- ✅ Media (imagens, vídeos)
- ✅ SEO metadata
- ✅ Traduções/i18n
- ✅ Estruturas complexas de dados

#### Use Base para:
- ✅ Governança descentralizada
- ✅ Propriedade de ativos (NFTs)
- ✅ Tokens e finanças
- ✅ Votações imutáveis
- ✅ Contratos inteligentes
- ✅ Histórico auditável
- ✅ Transações financeiras

---

## 💻 Implementação Técnica

### 1. Configuração Base (Thirdweb)

```javascript
// src/web/pages/_app.js
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Base, BaseGoerli } from "@thirdweb-dev/chains";

const activeChain = process.env.NODE_ENV === 'production' 
  ? Base 
  : BaseGoerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
      supportedChains={[Base, BaseGoerli]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
```

### 2. Hooks para Base

```typescript
// hooks/useDAO.ts
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";

export function useDAO(daoAddress: string) {
  // Conectar ao contrato
  const { contract } = useContract(daoAddress);
  
  // Ler propostas
  const { data: proposals } = useContractRead(contract, "getProposals");
  
  // Criar proposta
  const { mutateAsync: createProposal } = useContractWrite(contract, "createProposal");
  
  // Votar
  const { mutateAsync: vote } = useContractWrite(contract, "vote");
  
  return {
    proposals,
    createProposal,
    vote,
  };
}
```

### 3. Configuração Sanity

```javascript
// lib/sanityClient.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // CDN para leituras
  token: process.env.SANITY_API_TOKEN, // Para writes
});

// Helper functions
export async function getBlogPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      publishedAt,
      "author": author->name,
      mainImage
    }
  `);
}

export async function getProjects() {
  return await client.fetch(`
    *[_type == "project"] | order(_createdAt desc) {
      title,
      slug,
      description,
      technologies,
      client,
      images,
      url
    }
  `);
}

export async function getTestimonials() {
  return await client.fetch(`
    *[_type == "testimonial"] | order(rating desc) {
      name,
      company,
      role,
      photo,
      testimonial,
      rating,
      "project": project->title
    }
  `);
}
```

### 4. Queries GROQ (Sanity)

```groq
// Buscar posts por categoria
*[_type == "post" && category->slug.current == $category] {
  title,
  slug,
  excerpt,
  "category": category->title
}

// Buscar projetos com tecnologia específica
*[_type == "project" && $tech in technologies] {
  title,
  description,
  technologies,
  images
}

// Buscar FAQs por categoria
*[_type == "faq" && category == $category] | order(order asc) {
  question,
  answer,
  category
}
```

---

## 🔧 Variáveis de Ambiente

```bash
# .env.local

# ============================================
# BASE BLOCKCHAIN (via Thirdweb)
# ============================================
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_thirdweb_client_id

# ============================================
# SANITY CMS
# ============================================
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token        # Para writes (server-side)

# ============================================
# PRIVY (Auth - suporta Base)
# ============================================
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
PRIVY_SECRET=your_privy_secret
```

---

## 📊 Custos Operacionais

### Base Blockchain

| Operação | Custo Estimado |
|----------|---------------|
| **Deploy de Contrato** | ~$1-5 |
| **Criar Proposta DAO** | ~$0.01 |
| **Votar** | ~$0.005 |
| **Transfer Token** | ~$0.002 |
| **Mint NFT** | ~$0.01 |

**Total Mensal (DAO ativo):** ~$5-20/mês

### Sanity CMS

| Plano | Custo | Limites |
|-------|-------|---------|
| **Free** | $0/mês | 3 usuários, 10GB bandwidth |
| **Growth** | $99/mês | 10 usuários, 100GB bandwidth |
| **Business** | $949/mês | Ilimitado |

**Decisão:** Começar com plano Free, upgrade conforme necessário.

---

## 🚀 Deploy e Setup

### 1. Setup Sanity

```bash
# Instalar CLI
npm install -g @sanity/cli

# Criar projeto
sanity init

# Configurar schemas
cd studio
# Editar schemas em schemas/

# Deploy studio
sanity deploy
```

### 2. Setup Base + Thirdweb

```bash
# Instalar dependências
npm install @thirdweb-dev/react @thirdweb-dev/sdk

# Criar conta Thirdweb
# https://thirdweb.com/dashboard

# Obter Client ID
# Dashboard > Settings > API Keys

# Configurar .env.local
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=...
```

### 3. Deploy Contratos na Base

```bash
# Instalar Hardhat
npm install --save-dev hardhat

# Configurar hardhat.config.js
module.exports = {
  networks: {
    base: {
      url: 'https://mainnet.base.org',
      accounts: [process.env.PRIVATE_KEY],
    },
    baseGoerli: {
      url: 'https://goerli.base.org',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};

# Deploy
npx hardhat run scripts/deploy.js --network baseGoerli
```

---

## 📈 Roadmap de Integração

### Fase 1: Foundation (Semana 1-2)
- [x] Configurar Base como blockchain principal
- [x] Atualizar _app.js para usar Base
- [ ] Configurar Sanity CMS
- [ ] Criar schemas básicos
- [ ] Deploy Sanity Studio

### Fase 2: Content (Semana 3)
- [ ] Migrar conteúdo para Sanity
- [ ] Criar queries GROQ
- [ ] Integrar blog com Sanity
- [ ] Adicionar projetos ao Sanity

### Fase 3: DAO Integration (Semana 4)
- [ ] Deploy contratos na Base Goerli
- [ ] Testar funcionalidades DAO
- [ ] Integrar governança com frontend
- [ ] Testes end-to-end

### Fase 4: Production (Semana 5)
- [ ] Deploy contratos na Base Mainnet
- [ ] Migração de dados final
- [ ] Testes de carga
- [ ] Go live

---

## 🔒 Segurança

### Base Blockchain

1. **Auditoria de Contratos**
   - Usar contratos auditados (OpenZeppelin)
   - Auditar customizações
   - Bug bounty program

2. **Gestão de Chaves**
   - Hardware wallets para contas admin
   - Multisig para tesouraria
   - Rotação periódica de chaves

3. **Monitoramento**
   - Alertas de transações suspeitas
   - Logs de eventos on-chain
   - Dashboard de governança

### Sanity CMS

1. **Controle de Acesso**
   - Roles e permissões
   - Revisão de conteúdo
   - Auditoria de mudanças

2. **Backup**
   - Backup automático diário
   - Export de dados
   - Disaster recovery plan

3. **API Security**
   - Rate limiting
   - Token rotation
   - CORS configurado

---

## 📚 Recursos e Documentação

### Base
- 📖 Documentação: https://docs.base.org
- 🔍 Explorer: https://basescan.org
- 💧 Faucet (testnet): https://faucet.quicknode.com/base/goerli
- 🌉 Bridge: https://bridge.base.org

### Sanity
- 📖 Documentação: https://www.sanity.io/docs
- 🎓 Learn: https://www.sanity.io/learn
- 💬 Community: https://www.sanity.io/community
- 📺 YouTube: https://www.youtube.com/@sanity-io

### Thirdweb
- 📖 Documentação: https://portal.thirdweb.com
- 🎮 Dashboard: https://thirdweb.com/dashboard
- 💬 Discord: https://discord.gg/thirdweb

---

## ✅ Checklist de Implementação

### Base Blockchain
- [x] Atualizar _app.js para Base
- [x] Documentar escolha da Base
- [ ] Configurar Thirdweb Dashboard
- [ ] Obter tokens de testnet
- [ ] Deploy de contrato de teste
- [ ] Integrar wallet connection
- [ ] Testes de transação

### Sanity CMS
- [ ] Criar projeto Sanity
- [ ] Configurar schemas
- [ ] Deploy Sanity Studio
- [ ] Criar conteúdo de exemplo
- [ ] Integrar com Next.js
- [ ] Configurar webhooks
- [ ] Otimizar queries

### Integração
- [ ] Conectar ambos ao frontend
- [ ] Criar pages que usam ambos
- [ ] Implementar caching
- [ ] Testes de performance
- [ ] Documentar APIs

---

## 💡 Conclusão

A combinação de **Base** + **Sanity** oferece:

✅ **Base:** Blockchain de baixo custo e alta performance para funcionalidades Web3  
✅ **Sanity:** CMS flexível e poderoso para conteúdo editorial  
✅ **Separação clara:** Web3 vs Web2 content  
✅ **Escalabilidade:** Ambas as soluções escalam facilmente  
✅ **Developer Experience:** Ferramentas modernas e bem documentadas  
✅ **Custo-benefício:** Free tiers generosos, upgrade conforme crescimento

Esta stack permite oferecer tanto serviços de **IA tradicionais** quanto o **DAO Builder** diferenciado, mantendo performance e custos controlados.

---

**Status:** ✅ Arquitetura Definida  
**Próximo Passo:** Implementar setup Sanity  
**Data:** Outubro 2025  
**Autor:** Equipe GovindaSystems

