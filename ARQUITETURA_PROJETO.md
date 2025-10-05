# 🏗️ Arquitetura do Projeto - GovindaSystems AI

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Arquitetura de Sistema](#arquitetura-de-sistema)
3. [Stack Tecnológico](#stack-tecnológico)
4. [Estrutura de Diretórios](#estrutura-de-diretórios)
5. [Camadas da Aplicação](#camadas-da-aplicação)
6. [Fluxo de Dados](#fluxo-de-dados)
7. [Integrações e APIs](#integrações-e-apis)
8. [Segurança](#segurança)
9. [Deploy e Infraestrutura](#deploy-e-infraestrutura)
10. [Padrões e Convenções](#padrões-e-convenções)

---

## 🎯 Visão Geral

### Contexto do Projeto

**Nome:** GovindaSystems  
**Tipo:** Plataforma Web de Serviços de IA  
**Foco:** Soluções em Inteligência Artificial para Empresas  
**Arquitetura:** JAMstack (JavaScript, APIs, Markup)  
**Padrão:** Server-Side Rendering (SSR) + Static Site Generation (SSG)

### Objetivos Arquiteturais

1. **Performance:** Lighthouse score > 90, carregamento < 3s
2. **Escalabilidade:** Suportar crescimento de tráfego sem refatoração
3. **Manutenibilidade:** Código limpo, modular e documentado
4. **Segurança:** Proteção de dados e API keys
5. **SEO:** Otimização para motores de busca
6. **UX:** Interface responsiva e acessível

### Princípios de Design

- **Component-Based Architecture:** Componentes reutilizáveis e isolados
- **Separation of Concerns:** UI, lógica e dados separados
- **API-First:** Comunicação via APIs RESTful
- **Progressive Enhancement:** Funciona sem JavaScript (SSR)
- **Mobile-First:** Design responsivo desde a base

---

## 🏛️ Arquitetura de Sistema

### Diagrama de Alto Nível

```
┌──────────────────────────────────────────────────────────────┐
│                         USUÁRIO                              │
│                      (Browser/Mobile)                         │
└───────────────────────┬──────────────────────────────────────┘
                        │
                        ↓
┌──────────────────────────────────────────────────────────────┐
│                     CDN (Vercel Edge)                        │
│          Cache de Assets | Distribuição Global               │
└───────────────────────┬──────────────────────────────────────┘
                        │
                        ↓
┌──────────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js 14)                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │   Pages     │  │ Components  │  │   Assets    │         │
│  │   (SSR)     │  │  (React)    │  │  (Static)   │         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
└───────────────────────┬──────────────────────────────────────┘
                        │
         ┌──────────────┼──────────────┐
         ↓              ↓              ↓
┌────────────┐  ┌───────────┐  ┌──────────────┐
│   Privy    │  │  OpenAI   │  │  SendGrid    │
│   (Auth)   │  │   (AI)    │  │   (Email)    │
└────────────┘  └───────────┘  └──────────────┘
         ↓              ↓              ↓
┌─────────────────────────────────────────────┐
│          API Routes (Serverless)            │
│    /api/contact | /api/ai | /api/auth       │
└─────────────────────────────────────────────┘
         ↓              ↓              ↓
┌────────────┐  ┌───────────┐  ┌──────────────┐
│   Sanity   │  │   Base    │  │  Thirdweb    │
│   (CMS)    │  │(Blockchain)│  │   (SDK)      │
└────────────┘  └───────────┘  └──────────────┘
```

### Camadas Arquiteturais

```
┌──────────────────────────────────────────────┐
│         CAMADA 1: APRESENTAÇÃO               │
│  • React Components                          │
│  • Next.js Pages                             │
│  • Tailwind CSS + Bootstrap                  │
│  • Responsividade e Acessibilidade           │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│         CAMADA 2: LÓGICA DE NEGÓCIO          │
│  • Hooks Customizados                        │
│  • Context API (Estado Global)               │
│  • Validação de Forms (Zod)                  │
│  • Gerenciamento de Estado                   │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│         CAMADA 3: SERVIÇOS                   │
│  • API Routes (Next.js)                      │
│  • Integrações Externas                      │
│  • Autenticação (Privy)                      │
│  • Email (SendGrid)                          │
└──────────────────────────────────────────────┘
                    ↓
┌──────────────────────────────────────────────┐
│         CAMADA 4: DADOS                      │
│  • Sanity CMS (Conteúdo Estruturado)        │
│  • Base Blockchain (DAO/Web3)                │
│  • Vercel Edge Cache (Performance)           │
│  • Google Analytics (Métricas)               │
└──────────────────────────────────────────────┘
```

---

## 🛠️ Stack Tecnológico

### Frontend Core

| Tecnologia | Versão | Propósito | Criticidade |
|------------|--------|-----------|-------------|
| **Next.js** | 14.1.0 | Framework React SSR/SSG | 🔴 Crítico |
| **React** | 18.2.0 | Biblioteca UI | 🔴 Crítico |
| **TypeScript** | 5.3.3 | Tipagem estática | 🟡 Médio |
| **Tailwind CSS** | 3.3.1 | Estilização utilitária | 🔴 Crítico |
| **Bootstrap** | 5.2.3 | Framework CSS | 🟢 Baixo |
| **React Bootstrap** | 2.7.4 | Componentes Bootstrap | 🟢 Baixo |

### AI & Automação

| Tecnologia | Versão | Propósito | Criticidade |
|------------|--------|-----------|-------------|
| **OpenAI SDK** | 4.x | GPT-4, ChatGPT | 🔴 Crítico |
| **LangChain** | 0.x | Orquestração AI | 🟡 Médio |
| **Anthropic SDK** | 0.x | Claude AI | 🟢 Baixo |
| **Replicate** | 0.x | Modelos AI | 🟢 Baixo |

### Autenticação & Pagamentos

| Tecnologia | Versão | Propósito | Criticidade |
|------------|--------|-----------|-------------|
| **Privy** | 1.x | Auth + Wallet + Payments | 🔴 Crítico |
| **@privy-io/react-auth** | 1.x | React integration | 🔴 Crítico |
| **@privy-io/wagmi** | 0.x | Web3 integration | 🟡 Médio |

### Blockchain (DAO Builder) - Base Network

| Tecnologia | Versão | Propósito | Criticidade |
|------------|--------|-----------|-------------|
| **Base Network** | - | Layer 2 Ethereum (Coinbase) | 🔴 Crítico |
| **Thirdweb SDK** | 4.9.4 | Web3 SDK para Base | 🔴 Crítico |
| **Hardhat** | 2.x | Smart contracts dev | 🟡 Médio |
| **Ethers.js** | 6.x | Blockchain interaction | 🟡 Médio |
| **Viem** | 2.x | TypeScript blockchain client | 🟡 Médio |

### Comunicação & CMS

| Tecnologia | Versão | Propósito | Criticidade |
|------------|--------|-----------|-------------|
| **SendGrid** | latest | Envio de emails | 🔴 Crítico |
| **Resend** | latest | Email alternativo | 🟢 Baixo |
| **Sanity CMS** | 5.4.2 | Content management | 🟢 Baixo |

### Forms & Validação

| Tecnologia | Versão | Propósito | Criticidade |
|------------|--------|-----------|-------------|
| **react-hook-form** | latest | Gerenciamento forms | 🔴 Crítico |
| **Zod** | latest | Validação schemas | 🔴 Crítico |
| **@hookform/resolvers** | latest | Integração zod | 🔴 Crítico |

### UI & Animações

| Tecnologia | Versão | Propósito | Criticidade |
|------------|--------|-----------|-------------|
| **Framer Motion** | latest | Animações | 🟢 Baixo |
| **React Icons** | 4.8.0 | Ícones | 🟡 Médio |
| **React Hot Toast** | 2.4.0 | Notificações | 🟡 Médio |

### Analytics & Monitoring

| Tecnologia | Versão | Propósito | Criticidade |
|------------|--------|-----------|-------------|
| **Google Analytics 4** | - | Analytics | 🔴 Crítico |
| **Google Tag Manager** | - | Tag management | 🟡 Médio |
| **Vercel Analytics** | - | Performance | 🟢 Baixo |
| **Sentry** | - | Error tracking | 🟢 Baixo |

---

## 📁 Estrutura de Diretórios

### Estrutura Completa Após Refatoração

```
GovindaSystems/
├── 📄 README.md                        # Documentação principal
├── 📄 ARQUITETURA_PROJETO.md          # Este documento
├── 📄 START_HERE.md                   # Guia de início
├── 📄 CHECKLIST_IMPLEMENTACAO.md      # Checklist técnico
├── 📄 package.json                    # Dependências root
│
├── 📁 src/
│   ├── 📁 web/                        # Aplicação web (Next.js)
│   │   ├── 📁 pages/                  # Páginas Next.js
│   │   │   ├── _app.js                # App wrapper (Providers)
│   │   │   ├── _document.js           # HTML document
│   │   │   ├── index.js               # Homepage
│   │   │   │
│   │   │   ├── 📁 api/                # API Routes (Serverless)
│   │   │   │   ├── contact.js         # Formulário de contato
│   │   │   │   ├── ai/                # Endpoints AI
│   │   │   │   │   ├── chat.js        # Chat AI
│   │   │   │   │   ├── generate.js    # Geração de conteúdo
│   │   │   │   │   └── analyze.js     # Análise de dados
│   │   │   │   └── auth/              # Autenticação
│   │   │   │       └── privy-webhook.js
│   │   │   │
│   │   │   ├── 📁 services/           # Páginas de serviços
│   │   │   │   ├── ai-customer-support.js
│   │   │   │   ├── social-media-automation.js
│   │   │   │   ├── workflow-automation.js
│   │   │   │   ├── seo-agent.js
│   │   │   │   └── dao-builder.js
│   │   │   │
│   │   │   ├── join.js                # Formulário orçamento
│   │   │   ├── projects.js            # Projetos/Portfolio
│   │   │   └── [...outros]            # Páginas auxiliares
│   │   │
│   │   ├── 📁 components/             # Componentes React
│   │   │   ├── Header.js              # Cabeçalho
│   │   │   ├── Footer.js              # Rodapé
│   │   │   ├── Hero.js                # Hero section
│   │   │   ├── About.js               # Sobre nós
│   │   │   │
│   │   │   ├── 📁 services/           # Componentes de serviços
│   │   │   │   ├── Services.js        # Grid de serviços
│   │   │   │   ├── AICustomerSupport.js
│   │   │   │   ├── SocialMediaAutomation.js
│   │   │   │   ├── WorkflowAutomation.js
│   │   │   │   ├── SEOAgent.js
│   │   │   │   └── DAOBuilderAI.js
│   │   │   │
│   │   │   ├── 📁 governance/         # Componentes DAO
│   │   │   │   ├── VotingSystem.js
│   │   │   │   ├── ProposalSubmission.js
│   │   │   │   └── ReputationSystem.js
│   │   │   │
│   │   │   ├── 📁 common/             # Componentes comuns
│   │   │   │   ├── Button.js
│   │   │   │   ├── Card.js
│   │   │   │   ├── Modal.js
│   │   │   │   └── Form.js
│   │   │   │
│   │   │   ├── Technologies.js        # Stack tecnológico
│   │   │   ├── HowItWorks.js          # Processo
│   │   │   ├── UseCases.js            # Casos de uso
│   │   │   ├── Testimonials.js        # Depoimentos
│   │   │   ├── AuthButton.js          # Botão de login
│   │   │   ├── ThemeSwitcher.js       # Alternador de tema
│   │   │   └── ProjectCard.js         # Card de projeto
│   │   │
│   │   ├── 📁 context/                # Context API
│   │   │   ├── ThemeContext.js        # Tema dark/light
│   │   │   ├── AuthContext.js         # Autenticação
│   │   │   └── AppContext.js          # Estado global
│   │   │
│   │   ├── 📁 hooks/                  # Custom Hooks
│   │   │   ├── useAuth.js             # Hook de autenticação
│   │   │   ├── useForm.js             # Hook de formulário
│   │   │   ├── useAI.js               # Hook AI
│   │   │   └── useAnalytics.js        # Hook analytics
│   │   │
│   │   ├── 📁 lib/                    # Bibliotecas e utilitários
│   │   │   ├── sanityClient.js        # Cliente Sanity
│   │   │   ├── openai.js              # Cliente OpenAI
│   │   │   ├── privy.js               # Configuração Privy
│   │   │   ├── email.js               # Cliente email
│   │   │   ├── analytics.js           # Analytics
│   │   │   ├── theme.js               # Configuração tema
│   │   │   └── projects.js            # Dados projetos
│   │   │
│   │   ├── 📁 utils/                  # Funções utilitárias
│   │   │   ├── validation.js          # Validações
│   │   │   ├── formatters.js          # Formatadores
│   │   │   ├── helpers.js             # Helpers gerais
│   │   │   └── constants.js           # Constantes
│   │   │
│   │   ├── 📁 styles/                 # Estilos globais
│   │   │   └── globals.css            # CSS global
│   │   │
│   │   ├── 📁 assets/                 # Assets estáticos
│   │   │   ├── logo.png
│   │   │   ├── hero-ai.png
│   │   │   ├── ai-customer-support.png
│   │   │   └── [...outras imagens]
│   │   │
│   │   ├── 📁 public/                 # Arquivos públicos
│   │   │   ├── favicon.ico
│   │   │   ├── robots.txt
│   │   │   ├── sitemap.xml
│   │   │   └── manifest.json
│   │   │
│   │   ├── 📁 __tests__/              # Testes
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── utils/
│   │   │
│   │   ├── 📄 .env.local              # Variáveis ambiente (não commitado)
│   │   ├── 📄 .env.example            # Exemplo de variáveis
│   │   ├── 📄 next.config.js          # Configuração Next.js
│   │   ├── 📄 tailwind.config.js      # Configuração Tailwind
│   │   ├── 📄 postcss.config.js       # Configuração PostCSS
│   │   ├── 📄 tsconfig.json           # Configuração TypeScript
│   │   ├── 📄 jest.config.js          # Configuração Jest
│   │   ├── 📄 jest.setup.js           # Setup Jest
│   │   └── 📄 package.json            # Dependências web
│   │
│   └── 📁 blockchain/                 # Contratos blockchain
│       ├── 📁 contracts/              # Smart contracts
│       ├── 📁 test/                   # Testes contratos
│       ├── 📁 scripts/                # Scripts deploy
│       ├── hardhat.config.js          # Config Hardhat
│       └── package.json               # Dependências blockchain
│
├── 📁 docs/                           # Documentação adicional
│   ├── API.md                         # Documentação API
│   ├── DEPLOYMENT.md                  # Guia de deploy
│   └── CONTRIBUTING.md                # Guia contribuição
│
├── 📁 config/                         # Configurações gerais
│   └── [...configs]
│
└── 📄 vercel.json                     # Configuração Vercel
```

---

## 🔄 Camadas da Aplicação

### 1. Camada de Apresentação (Presentation Layer)

**Responsabilidade:** Interface do usuário e experiência

**Componentes:**
- **Pages:** Rotas da aplicação (Next.js pages)
- **Components:** Componentes React reutilizáveis
- **Layouts:** Templates de página
- **Styles:** CSS e estilização

**Tecnologias:**
- React 18 (Componentes)
- Next.js 14 (SSR/SSG)
- Tailwind CSS (Estilização)
- Bootstrap 5 (Componentes UI)
- Framer Motion (Animações)

**Padrões:**
- **Atomic Design:** Atoms → Molecules → Organisms → Templates → Pages
- **Component Composition:** Componentes compostos
- **Props Drilling:** Evitar com Context API
- **CSS-in-JS:** Tailwind com classes utilitárias

**Estrutura de Componente:**
```jsx
// Exemplo: components/services/AICustomerSupport.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../common/Button';
import Card from '../common/Card';

const AICustomerSupport = () => {
  return (
    <Container>
      <Row>
        <Col md={8}>
          {/* Conteúdo do serviço */}
        </Col>
        <Col md={4}>
          {/* Sidebar / CTA */}
        </Col>
      </Row>
    </Container>
  );
};

export default AICustomerSupport;
```

### 2. Camada de Lógica (Business Logic Layer)

**Responsabilidade:** Regras de negócio e processamento

**Componentes:**
- **Hooks:** Lógica reutilizável
- **Context:** Estado global
- **Utils:** Funções utilitárias
- **Validators:** Validação de dados

**Tecnologias:**
- React Hooks (useState, useEffect, custom hooks)
- Context API (Estado global)
- Zod (Validação)
- React Hook Form (Formulários)

**Custom Hooks:**
```javascript
// hooks/useAuth.js
import { usePrivy } from '@privy-io/react-auth';

export const useAuth = () => {
  const { login, logout, authenticated, user } = usePrivy();
  
  return {
    isAuthenticated: authenticated,
    user,
    login,
    logout,
  };
};
```

**Context Providers:**
```javascript
// context/AuthContext.js
import { createContext, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Lógica de autenticação
  return (
    <AuthContext.Provider value={{ /* ... */ }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
```

### 3. Camada de Serviços (Service Layer)

**Responsabilidade:** Comunicação com APIs externas

**Componentes:**
- **API Routes:** Endpoints serverless
- **Clients:** Clientes para serviços externos
- **Integrations:** Integrações terceiros

**API Routes Structure:**
```javascript
// pages/api/contact.js
import { sendEmail } from '@/lib/email';
import { validateContactForm } from '@/utils/validation';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  try {
    // Validar dados
    const data = validateContactForm(req.body);
    
    // Enviar email
    await sendEmail({
      to: 'contato@govindasystems.com',
      subject: `Novo contato: ${data.name}`,
      html: `...`,
    });
    
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
```

**Serviços Externos:**

#### OpenAI Service
```javascript
// lib/openai.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateResponse(prompt) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  });
  
  return completion.choices[0].message.content;
}
```

#### Email Service
```javascript
// lib/email.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail({ to, subject, html }) {
  const msg = {
    to,
    from: process.env.EMAIL_FROM,
    subject,
    html,
  };
  
  await sgMail.send(msg);
}
```

### 4. Camada de Dados (Data Layer)

**Responsabilidade:** Persistência e recuperação de dados

**Fontes de Dados:**
- **Sanity CMS:** Conteúdo estruturado (blog, projetos, depoimentos, FAQ)
- **Base Blockchain:** Dados Web3 (contratos, tokens, governança DAO)
- **Vercel Edge Cache:** Cache distribuído globalmente
- **Analytics:** Google Analytics 4, Vercel Analytics

**Sanity Client:**
```javascript
// lib/sanityClient.js
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
});

export async function getProjects() {
  return await client.fetch(`*[_type == "project"]`);
}
```

---

## 🔄 Fluxo de Dados

### Fluxo de Requisição

```
1. USUÁRIO                    → Acessa página
   ↓
2. NEXT.JS (SSR)              → Renderiza página no servidor
   ↓
3. COMPONENTE REACT           → Renderiza UI
   ↓
4. INTERAÇÃO                  → Usuário clica/preenche form
   ↓
5. HANDLER                    → Processa evento
   ↓
6. API ROUTE                  → Chama endpoint
   ↓
7. SERVIÇO EXTERNO            → OpenAI/SendGrid/Privy
   ↓
8. RESPOSTA                   → Retorna ao cliente
   ↓
9. ATUALIZAÇÃO UI             → React re-renderiza
   ↓
10. FEEDBACK                  → Toast/Modal/Redirect
```

### Exemplo: Formulário de Contato

```
┌─────────────────────────────────────────────────┐
│  1. Usuário preenche formulário                 │
│     → Nome, Email, Serviço, Mensagem            │
└────────────┬────────────────────────────────────┘
             ↓
┌─────────────────────────────────────────────────┐
│  2. React Hook Form valida (Zod)                │
│     → Validação client-side                     │
└────────────┬────────────────────────────────────┘
             ↓
┌─────────────────────────────────────────────────┐
│  3. POST para /api/contact                      │
│     → Envia dados validados                     │
└────────────┬────────────────────────────────────┘
             ↓
┌─────────────────────────────────────────────────┐
│  4. API Route valida server-side                │
│     → Segurança adicional                       │
└────────────┬────────────────────────────────────┘
             ↓
┌─────────────────────────────────────────────────┐
│  5. SendGrid envia email                        │
│     → Para admin e confirmação cliente          │
└────────────┬────────────────────────────────────┘
             ↓
┌─────────────────────────────────────────────────┐
│  6. Salva em CRM/Database (opcional)            │
│     → Registro de lead                          │
└────────────┬────────────────────────────────────┘
             ↓
┌─────────────────────────────────────────────────┐
│  7. Retorna sucesso                             │
│     → Status 200 + mensagem                     │
└────────────┬────────────────────────────────────┘
             ↓
┌─────────────────────────────────────────────────┐
│  8. Toast de sucesso                            │
│     → "Mensagem enviada com sucesso!"           │
└─────────────────────────────────────────────────┘
```

### Estado da Aplicação

**Hierarquia de Estado:**

```
1. LOCAL STATE (useState)
   → Estado de componente individual
   → Ex: form inputs, modals abertos/fechados

2. LIFTED STATE (props)
   → Estado compartilhado entre componentes irmãos
   → Elevado ao componente pai comum

3. CONTEXT STATE (Context API)
   → Estado global da aplicação
   → Ex: tema, autenticação, idioma

4. SERVER STATE (SWR/React Query)
   → Dados do servidor
   → Cache automático, revalidação
   
5. URL STATE (Next.js Router)
   → Estado na URL (query params)
   → Ex: filtros, paginação
```

---

## 🔌 Integrações e APIs

### Mapa de Integrações

```
                    ┌─────────────┐
                    │  Next.js    │
                    │ Application │
                    └──────┬──────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
        ↓                  ↓                  ↓
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│     PRIVY     │  │    OPENAI     │  │   SENDGRID    │
│  (Auth + Pay) │  │  (AI Models)  │  │    (Email)    │
└───────────────┘  └───────────────┘  └───────────────┘
        │                  │                  │
        ↓                  ↓                  ↓
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│  THIRDWEB     │  │    SANITY     │  │    GOOGLE     │
│  (Blockchain) │  │     (CMS)     │  │  (Analytics)  │
└───────────────┘  └───────────────┘  └───────────────┘
```

### 1. Privy (Autenticação e Pagamentos)

**Configuração:**
```javascript
// pages/_app.js
import { PrivyProvider } from '@privy-io/react-auth';

<PrivyProvider
  appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
  config={{
    loginMethods: ['email', 'google', 'wallet'],
    appearance: {
      theme: 'dark',
      accentColor: '#2ECAD5',
    },
    embeddedWallets: {
      createOnLogin: 'users-without-wallets',
    },
  }}
>
  {children}
</PrivyProvider>
```

**Uso:**
```javascript
// components/AuthButton.js
import { usePrivy } from '@privy-io/react-auth';

const AuthButton = () => {
  const { login, logout, authenticated, user } = usePrivy();
  
  return authenticated ? (
    <button onClick={logout}>Sair ({user.email})</button>
  ) : (
    <button onClick={login}>Entrar</button>
  );
};
```

### 2. OpenAI (Inteligência Artificial)

**Casos de Uso:**
- Chatbot de atendimento
- Geração de conteúdo
- Análise de sentimento
- Sugestões inteligentes

**API Route:**
```javascript
// pages/api/ai/chat.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {
  const { message, context } = req.body;
  
  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [
      { role: 'system', content: context },
      { role: 'user', content: message },
    ],
  });
  
  res.json({ response: completion.choices[0].message.content });
}
```

### 3. SendGrid (Email)

**Tipos de Email:**
- Contato/Orçamento
- Confirmação de cadastro
- Newsletter
- Notificações

**Implementação:**
```javascript
// lib/email.js
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendContactEmail(data) {
  const msg = {
    to: 'contato@govindasystems.com',
    from: process.env.EMAIL_FROM,
    subject: `Novo contato: ${data.name}`,
    html: `
      <h2>Novo contato recebido</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Serviço:</strong> ${data.service}</p>
      <p><strong>Mensagem:</strong> ${data.message}</p>
    `,
  };
  
  await sgMail.send(msg);
}
```

### 4. Thirdweb + Base (Blockchain)

**Usado em:** DAO Builder

**Configuração:**
```javascript
// pages/_app.js
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Base, BaseGoerli } from "@thirdweb-dev/chains";

const activeChain = process.env.NODE_ENV === 'production' ? Base : BaseGoerli;

<ThirdwebProvider
  activeChain={activeChain}
  clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
  supportedChains={[Base, BaseGoerli]}
>
  {children}
</ThirdwebProvider>
```

**Por que Base?**
- ✅ Layer 2 do Ethereum (taxas baixas)
- ✅ Suportado pela Coinbase
- ✅ EVM-compatible (compatível com todos os contratos)
- ✅ Rápido e escalável
- ✅ Integração nativa com Privy e Thirdweb

### 5. Sanity CMS

**Conteúdo Gerenciado:**
- Blog posts
- Projetos/Portfolio
- Depoimentos
- FAQ

**Query:**
```javascript
// lib/sanityClient.js
export async function getBlogPosts() {
  return await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      title,
      slug,
      excerpt,
      publishedAt,
      author->,
      mainImage
    }
  `);
}
```

### 6. Google Analytics

**Eventos Rastreados:**
- Page views
- Formulário enviado
- CTA clicado
- Serviço visualizado
- Conversões

**Implementação:**
```javascript
// lib/analytics.js
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Uso
trackEvent('click', 'CTA', 'Solicitar Orçamento', 1);
```

---

## 🔒 Segurança

### Princípios de Segurança

1. **Defense in Depth:** Múltiplas camadas de proteção
2. **Least Privilege:** Acesso mínimo necessário
3. **Fail Securely:** Falhas não expõem dados
4. **Don't Trust Input:** Validar tudo

### Checklist de Segurança

#### ✅ Variáveis de Ambiente

```bash
# ❌ NUNCA commitar
.env.local

# ✅ Usar prefixo NEXT_PUBLIC_ apenas para valores públicos
NEXT_PUBLIC_PRIVY_APP_ID=...

# ❌ Secrets nunca começam com NEXT_PUBLIC_
OPENAI_API_KEY=...
PRIVY_SECRET=...
```

#### ✅ Validação de Inputs

**Client-Side (Zod):**
```javascript
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  message: z.string().min(20).max(1000),
});
```

**Server-Side:**
```javascript
// pages/api/contact.js
export default async function handler(req, res) {
  // Validação obrigatória
  try {
    const data = contactSchema.parse(req.body);
    // Processar...
  } catch (error) {
    return res.status(400).json({ error: 'Invalid data' });
  }
}
```

#### ✅ Rate Limiting

```javascript
// middleware/rateLimit.js
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // 5 requisições
};

// Uso
export default async function handler(req, res) {
  // Implementar rate limiting
  // Ex: usando Vercel Edge Functions ou Redis
}
```

#### ✅ CORS

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://govindasystems.com' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,POST,OPTIONS' },
        ],
      },
    ];
  },
};
```

#### ✅ HTTPS

```javascript
// Vercel força HTTPS automaticamente
// next.config.js - redirect HTTP para HTTPS
module.exports = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        permanent: true,
        destination: 'https://govindasystems.com/:path*',
      },
    ];
  },
};
```

#### ✅ CSP Headers

```javascript
// next.config.js
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.google.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' *.openai.com *.privy.io;
`;

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim() },
        ],
      },
    ];
  },
};
```

#### ✅ Sanitização de Dados

```javascript
// Prevenir XSS
import DOMPurify from 'isomorphic-dompurify';

const cleanHTML = DOMPurify.sanitize(userInput);
```

---

## 🚀 Deploy e Infraestrutura

### Arquitetura de Deploy

```
┌──────────────────────────────────────────────┐
│           CÓDIGO FONTE (GitHub)              │
└──────────────┬───────────────────────────────┘
               │
               ↓ (Push/PR)
┌──────────────────────────────────────────────┐
│         VERCEL (CI/CD Automático)            │
│  • Build automático                          │
│  • Testes                                    │
│  • Preview Deploys                           │
└──────────────┬───────────────────────────────┘
               │
     ┌─────────┼─────────┐
     ↓                   ↓
┌─────────────┐   ┌─────────────┐
│  STAGING    │   │ PRODUCTION  │
│  (Preview)  │   │  (Main)     │
└─────────────┘   └─────────────┘
     │                   │
     ↓                   ↓
┌──────────────────────────────────────────────┐
│         VERCEL EDGE NETWORK (CDN)            │
│  • 300+ localizações globais                 │
│  • Cache automático                          │
│  • SSL/TLS                                   │
└──────────────┬───────────────────────────────┘
               │
               ↓
┌──────────────────────────────────────────────┐
│              USUÁRIOS                        │
└──────────────────────────────────────────────┘
```

### Ambientes

#### 1. Development (Local)

```bash
# Variáveis
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Comando
npm run dev
```

#### 2. Staging (Preview)

```bash
# Vercel - Deploy automático de PRs
# URL: https://projeto-xyz-govindasystems.vercel.app

# Variáveis iguais à produção (mas APIs de teste)
```

#### 3. Production

```bash
# Domínio: https://govindasystems.com
# Deploy: Push para branch main

# Variáveis
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://govindasystems.com
```

### Configuração Vercel

**vercel.json:**
```json
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "framework": "nextjs",
  "regions": ["gru1"],
  "env": {
    "NEXT_PUBLIC_PRIVY_APP_ID": "@privy-app-id"
  },
  "build": {
    "env": {
      "OPENAI_API_KEY": "@openai-api-key",
      "SENDGRID_API_KEY": "@sendgrid-api-key"
    }
  },
  "redirects": [
    {
      "source": "/old-service",
      "destination": "/services/ai-customer-support",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

### CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm test
      - run: npm run lint
      - run: npm run build
```

### Monitoramento

**Ferramentas:**
- Vercel Analytics (performance)
- Google Analytics 4 (comportamento)
- Sentry (erros)
- Uptime Robot (disponibilidade)

---

## 📐 Padrões e Convenções

### Nomenclatura

#### Arquivos
```
PascalCase    → Componentes React (Hero.js, AuthButton.js)
camelCase     → Utilidades (validation.js, helpers.js)
kebab-case    → Páginas (ai-customer-support.js)
UPPER_CASE    → Constantes (API_URL, MAX_RETRIES)
```

#### Variáveis
```javascript
// Componentes
const MyComponent = () => {}

// Funções
const handleClick = () => {}
const fetchData = async () => {}

// Constantes
const API_BASE_URL = 'https://api.example.com'
const MAX_FILE_SIZE = 5 * 1024 * 1024

// Booleanos
const isLoading = false
const hasError = true
const shouldRender = true
```

### Estrutura de Componente

```javascript
// Imports
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Tipos (TypeScript)
interface Props {
  title: string;
  onSubmit: () => void;
}

// Componente
const MyComponent = ({ title, onSubmit }: Props) => {
  // Hooks
  const [state, setState] = useState(false);
  
  useEffect(() => {
    // Side effects
  }, []);
  
  // Handlers
  const handleClick = () => {
    setState(true);
    onSubmit();
  };
  
  // Render
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

// PropTypes (se não usar TS)
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

// Default props
MyComponent.defaultProps = {
  title: 'Default Title',
};

export default MyComponent;
```

### Organização de Imports

```javascript
// 1. React e frameworks
import React, { useState } from 'react';
import { useRouter } from 'next/router';

// 2. Bibliotecas externas
import { Container, Row, Col } from 'react-bootstrap';
import toast from 'react-hot-toast';

// 3. Componentes internos
import Header from '@/components/Header';
import Button from '@/components/common/Button';

// 4. Hooks
import { useAuth } from '@/hooks/useAuth';

// 5. Utils e helpers
import { formatDate } from '@/utils/formatters';
import { API_URL } from '@/utils/constants';

// 6. Estilos
import styles from './Component.module.css';

// 7. Assets
import logo from '@/assets/logo.png';
```

### Comentários

```javascript
/**
 * Envia email de contato para o admin
 * 
 * @param {Object} data - Dados do formulário
 * @param {string} data.name - Nome do usuário
 * @param {string} data.email - Email do usuário
 * @param {string} data.message - Mensagem
 * @returns {Promise<boolean>} - True se enviado com sucesso
 * @throws {Error} - Se falhar ao enviar
 */
async function sendContactEmail(data) {
  // Implementação...
}

// TODO: Adicionar validação de telefone
// FIXME: Corrigir bug no envio de email
// NOTE: Este código precisa ser refatorado
```

### Git Workflow

**Branches:**
```
main          → Produção (protegida)
develop       → Desenvolvimento
feature/*     → Novas funcionalidades
bugfix/*      → Correções
hotfix/*      → Correções urgentes
```

**Commits:**
```bash
# Formato: <tipo>: <descrição>

feat: adiciona componente AuthButton
fix: corrige bug no formulário de contato
docs: atualiza documentação de API
style: formata código com prettier
refactor: reorganiza estrutura de componentes
test: adiciona testes para Hero
chore: atualiza dependências
```

---

## 📊 Performance

### Métricas Alvo

| Métrica | Alvo | Atual |
|---------|------|-------|
| **Lighthouse Score** | > 90 | - |
| **First Contentful Paint** | < 1.8s | - |
| **Time to Interactive** | < 3.8s | - |
| **Cumulative Layout Shift** | < 0.1 | - |
| **Total Bundle Size** | < 200KB | - |

### Otimizações

#### 1. Code Splitting
```javascript
// Lazy loading de componentes
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});
```

#### 2. Image Optimization
```javascript
import Image from 'next/image';

<Image
  src="/hero.png"
  width={1200}
  height={600}
  alt="Hero"
  priority
  placeholder="blur"
/>
```

#### 3. Font Optimization
```javascript
// next.config.js
module.exports = {
  optimizeFonts: true,
};
```

#### 4. Static Generation
```javascript
// pages/services/[slug].js
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'ai-customer-support' } },
      { params: { slug: 'social-media-automation' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Buscar dados em build time
  return { props: { data } };
}
```

---

## 🎯 Próximos Passos

### Fase 1: Implementação Core (Semanas 1-2)
- [ ] Setup inicial e dependências
- [ ] Atualizar Hero, About, Services
- [ ] Atualizar Header e Footer
- [ ] Criar componentes novos

### Fase 2: Páginas de Serviços (Semana 3)
- [ ] Criar 5 páginas detalhadas
- [ ] Integrar formulários
- [ ] Implementar Privy

### Fase 3: Testes e Otimização (Semana 4)
- [ ] Testes responsivos
- [ ] Otimização SEO
- [ ] Performance tuning

### Fase 4: Deploy (Semana 5)
- [ ] Staging
- [ ] Testes finais
- [ ] Production
- [ ] Monitoramento

---

## 📞 Contato e Suporte

**Email:** contato@govindasystems.com  
**Projeto:** Arquitetura GovindaSystems AI  
**Versão:** 1.0  
**Data:** Outubro 2025  
**Autor:** Equipe GovindaSystems

---

## 📚 Referências

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Privy Documentation](https://docs.privy.io)
- [OpenAI API Reference](https://platform.openai.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Status:** ✅ Documentado  
**Última Atualização:** Outubro 2025  
**Próxima Revisão:** Após implementação

