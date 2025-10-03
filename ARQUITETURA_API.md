# 🔌 Arquitetura de APIs - GovindaSystems

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [API Routes Structure](#api-routes-structure)
3. [Endpoints Detalhados](#endpoints-detalhados)
4. [Autenticação e Autorização](#autenticação-e-autorização)
5. [Rate Limiting](#rate-limiting)
6. [Error Handling](#error-handling)
7. [Validação de Dados](#validação-de-dados)
8. [Documentação de APIs](#documentação-de-apis)

---

## 🎯 Visão Geral

### Arquitetura Serverless

As APIs do projeto são implementadas como **Serverless Functions** usando Next.js API Routes, hospedadas na Vercel.

**Vantagens:**
- ✅ Escalabilidade automática
- ✅ Pay-per-use
- ✅ Zero configuração de servidor
- ✅ Deploy automático
- ✅ Cold start otimizado

### Princípios

1. **RESTful:** Endpoints seguem padrões REST
2. **Stateless:** Sem sessão no servidor
3. **JSON:** Formato de dados padrão
4. **Idempotência:** Operações seguras para retry
5. **Versionamento:** API versioning quando necessário

---

## 📁 API Routes Structure

```
src/web/pages/api/
├── hello.js                    # Health check
│
├── 📁 auth/                    # Autenticação
│   ├── privy-webhook.js       # Webhooks Privy
│   └── verify.js              # Verificação de token
│
├── 📁 contact/                 # Contato
│   ├── index.js               # POST - Enviar mensagem
│   └── subscribe.js           # POST - Newsletter
│
├── 📁 ai/                      # Inteligência Artificial
│   ├── chat.js                # POST - Chat com IA
│   ├── generate.js            # POST - Gerar conteúdo
│   ├── analyze.js             # POST - Análise de dados
│   └── summarize.js           # POST - Resumir texto
│
├── 📁 services/                # Serviços
│   ├── quote.js               # POST - Solicitar orçamento
│   └── pricing.js             # GET - Consultar preços
│
├── 📁 dao/                     # DAO Builder
│   ├── proposals.js           # GET/POST - Propostas
│   ├── vote.js                # POST - Votar
│   └── treasury.js            # GET - Tesouraria
│
├── 📁 cms/                     # Sanity CMS
│   ├── posts.js               # GET - Blog posts
│   ├── projects.js            # GET - Projetos
│   └── testimonials.js        # GET - Depoimentos
│
└── 📁 webhooks/                # Webhooks externos
    ├── sendgrid.js            # POST - SendGrid events
    └── stripe.js              # POST - Stripe events
```

---

## 🔌 Endpoints Detalhados

### 1. Contact API

#### POST /api/contact

Envia mensagem de contato/orçamento.

**Request:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "phone": "+5511999999999",
  "company": "Empresa XYZ",
  "service": "ai-customer-support",
  "message": "Gostaria de saber mais sobre...",
  "budget": "5000-10000",
  "timeline": "1-3 meses"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!",
  "id": "msg_123456"
}
```

**Response (400):**
```json
{
  "error": "Validation error",
  "details": {
    "email": "Email inválido",
    "phone": "Formato de telefone incorreto"
  }
}
```

**Implementação:**
```javascript
// pages/api/contact/index.js
import { z } from 'zod';
import { sendEmail } from '@/lib/email';
import { trackEvent } from '@/lib/analytics';

const contactSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/),
  company: z.string().optional(),
  service: z.enum([
    'ai-customer-support',
    'social-media-automation',
    'workflow-automation',
    'seo-agent',
    'dao-builder',
    'other'
  ]),
  message: z.string().min(20).max(2000),
  budget: z.string().optional(),
  timeline: z.string().optional(),
});

export default async function handler(req, res) {
  // Only POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate
    const data = contactSchema.parse(req.body);

    // Send email to admin
    await sendEmail({
      to: 'contato@govindasystems.com',
      subject: `Novo contato: ${data.name} - ${data.service}`,
      template: 'contact',
      data,
    });

    // Send confirmation to user
    await sendEmail({
      to: data.email,
      subject: 'Recebemos sua mensagem!',
      template: 'contact-confirmation',
      data,
    });

    // Track event
    trackEvent('contact_form_submitted', {
      service: data.service,
      has_budget: !!data.budget,
    });

    // Return success
    return res.status(200).json({
      success: true,
      message: 'Mensagem enviada com sucesso!',
    });

  } catch (error) {
    console.error('Contact API error:', error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({
        error: 'Validation error',
        details: error.flatten().fieldErrors,
      });
    }

    return res.status(500).json({
      error: 'Internal server error',
    });
  }
}

// Rate limit
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
  },
};
```

---

### 2. AI Chat API

#### POST /api/ai/chat

Chat com IA para atendimento.

**Request:**
```json
{
  "message": "Como funciona o atendimento automatizado?",
  "context": "customer-support",
  "conversationId": "conv_123" // opcional
}
```

**Response (200):**
```json
{
  "response": "O atendimento automatizado funciona através de...",
  "conversationId": "conv_123",
  "model": "gpt-4",
  "tokensUsed": 150
}
```

**Implementação:**
```javascript
// pages/api/ai/chat.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPTS = {
  'customer-support': `Você é um assistente da GovindaSystems, especializado em soluções de IA. 
Responda de forma profissional, clara e em português do Brasil.`,
  'sales': `Você é um consultor de vendas da GovindaSystems. 
Ajude o cliente a entender nossos serviços e como podem beneficiar seu negócio.`,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message, context = 'customer-support', conversationId } = req.body;

  // Validation
  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (message.length > 1000) {
    return res.status(400).json({ error: 'Message too long' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: SYSTEM_PROMPTS[context] },
        { role: 'user', content: message },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const response = completion.choices[0].message.content;
    const tokensUsed = completion.usage.total_tokens;

    return res.status(200).json({
      response,
      conversationId: conversationId || `conv_${Date.now()}`,
      model: 'gpt-4',
      tokensUsed,
    });

  } catch (error) {
    console.error('OpenAI API error:', error);

    return res.status(500).json({
      error: 'Failed to generate response',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
}
```

---

### 3. Service Quote API

#### POST /api/services/quote

Solicita orçamento personalizado.

**Request:**
```json
{
  "service": "ai-customer-support",
  "requirements": {
    "volume": "500-1000 mensagens/mês",
    "integrations": ["hubspot", "zendesk"],
    "languages": ["pt-BR", "en"],
    "features": ["sentiment-analysis", "ticket-routing"]
  },
  "contact": {
    "name": "João Silva",
    "email": "joao@example.com",
    "phone": "+5511999999999",
    "company": "Empresa XYZ"
  }
}
```

**Response (200):**
```json
{
  "success": true,
  "estimatedPrice": {
    "min": 2500,
    "max": 4500,
    "currency": "BRL",
    "billing": "monthly"
  },
  "quoteId": "quote_123456",
  "validUntil": "2025-11-03T00:00:00Z",
  "nextSteps": "Nossa equipe entrará em contato em até 24h"
}
```

**Implementação:**
```javascript
// pages/api/services/quote.js
import { calculateServicePrice } from '@/lib/pricing';
import { sendEmail } from '@/lib/email';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { service, requirements, contact } = req.body;

  try {
    // Calculate estimated price
    const pricing = calculateServicePrice(service, requirements);

    // Generate quote ID
    const quoteId = `quote_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Save quote (opcional - pode salvar em DB)
    // await saveQuote({ quoteId, service, requirements, contact, pricing });

    // Send email to sales team
    await sendEmail({
      to: 'vendas@govindasystems.com',
      subject: `Novo orçamento: ${service}`,
      template: 'quote-internal',
      data: { quoteId, service, requirements, contact, pricing },
    });

    // Send confirmation to client
    await sendEmail({
      to: contact.email,
      subject: 'Seu orçamento GovindaSystems',
      template: 'quote-client',
      data: { quoteId, service, pricing, contact },
    });

    return res.status(200).json({
      success: true,
      estimatedPrice: pricing,
      quoteId,
      validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
      nextSteps: 'Nossa equipe entrará em contato em até 24h para refinar o orçamento.',
    });

  } catch (error) {
    console.error('Quote API error:', error);
    return res.status(500).json({ error: 'Failed to generate quote' });
  }
}

// lib/pricing.js - Pricing calculator
export function calculateServicePrice(service, requirements) {
  const basePrices = {
    'ai-customer-support': { min: 2500, max: 5900 },
    'social-media-automation': { min: 997, max: 4997 },
    'workflow-automation': { min: 3500, max: 8900 },
    'seo-agent': { min: 2900, max: 14900 },
    'dao-builder': { min: 45000, max: 300000 },
  };

  let price = basePrices[service] || { min: 0, max: 0 };

  // Adjust based on requirements
  if (requirements.integrations && requirements.integrations.length > 2) {
    price.min *= 1.2;
    price.max *= 1.2;
  }

  if (requirements.languages && requirements.languages.length > 1) {
    price.min *= 1.15;
    price.max *= 1.15;
  }

  return {
    min: Math.round(price.min),
    max: Math.round(price.max),
    currency: 'BRL',
    billing: service === 'dao-builder' ? 'project' : 'monthly',
  };
}
```

---

## 🔐 Autenticação e Autorização

### Privy Authentication

```javascript
// middleware/auth.js
import { verifyPrivyToken } from '@/lib/privy';

export async function requireAuth(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const user = await verifyPrivyToken(token);
      req.user = user;
      return handler(req, res);
    } catch (error) {
      return res.status(401).json({ error: 'Invalid token' });
    }
  };
}

// Uso
export default requireAuth(async (req, res) => {
  // req.user está disponível
  const { user } = req;
  // ...
});
```

### API Keys

```javascript
// middleware/apiKey.js
export function requireApiKey(handler) {
  return async (req, res) => {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey || apiKey !== process.env.API_SECRET_KEY) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    return handler(req, res);
  };
}
```

---

## ⏱️ Rate Limiting

### Implementação com Vercel

```javascript
// lib/rateLimit.js
import { LRUCache } from 'lru-cache';

const rateLimit = (options) => {
  const tokenCache = new LRUCache({
    max: options.uniqueTokenPerInterval || 500,
    ttl: options.interval || 60000,
  });

  return {
    check: (res, limit, token) =>
      new Promise((resolve, reject) => {
        const tokenCount = tokenCache.get(token) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage >= limit;

        res.setHeader('X-RateLimit-Limit', limit);
        res.setHeader('X-RateLimit-Remaining', isRateLimited ? 0 : limit - currentUsage);

        return isRateLimited ? reject() : resolve();
      }),
  };
};

// Uso
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minuto
  uniqueTokenPerInterval: 500,
});

export default async function handler(req, res) {
  const identifier = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    await limiter.check(res, 10, identifier); // 10 requests por minuto
    // Processar requisição...
  } catch {
    return res.status(429).json({ error: 'Too many requests' });
  }
}
```

---

## 🚨 Error Handling

### Padrão de Resposta de Erro

```javascript
// lib/errors.js
export class APIError extends Error {
  constructor(message, statusCode = 500, details = null) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
  }
}

export class ValidationError extends APIError {
  constructor(details) {
    super('Validation error', 400, details);
  }
}

export class NotFoundError extends APIError {
  constructor(resource) {
    super(`${resource} not found`, 404);
  }
}

export class UnauthorizedError extends APIError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

// Error handler middleware
export function errorHandler(error, req, res) {
  console.error('API Error:', error);

  if (error instanceof APIError) {
    return res.status(error.statusCode).json({
      error: error.message,
      details: error.details,
    });
  }

  // Zod validation errors
  if (error.name === 'ZodError') {
    return res.status(400).json({
      error: 'Validation error',
      details: error.flatten().fieldErrors,
    });
  }

  // Default error
  return res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? error.message : undefined,
  });
}
```

---

## ✅ Validação de Dados

### Schemas Zod

```javascript
// lib/schemas.js
import { z } from 'zod';

// Contact schema
export const contactSchema = z.object({
  name: z.string().min(3, 'Nome muito curto').max(100, 'Nome muito longo'),
  email: z.string().email('Email inválido'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Telefone inválido'),
  company: z.string().optional(),
  service: z.enum([
    'ai-customer-support',
    'social-media-automation',
    'workflow-automation',
    'seo-agent',
    'dao-builder',
    'other',
  ]),
  message: z.string().min(20, 'Mensagem muito curta').max(2000, 'Mensagem muito longa'),
});

// AI chat schema
export const chatSchema = z.object({
  message: z.string().min(1).max(1000),
  context: z.enum(['customer-support', 'sales']).optional(),
  conversationId: z.string().optional(),
});

// Quote schema
export const quoteSchema = z.object({
  service: z.string(),
  requirements: z.object({
    volume: z.string().optional(),
    integrations: z.array(z.string()).optional(),
    languages: z.array(z.string()).optional(),
    features: z.array(z.string()).optional(),
  }),
  contact: contactSchema.pick({ name: true, email: true, phone: true, company: true }),
});
```

---

## 📚 Documentação de APIs

### OpenAPI/Swagger Spec

```yaml
# swagger.yaml
openapi: 3.0.0
info:
  title: GovindaSystems API
  version: 1.0.0
  description: API de serviços GovindaSystems

servers:
  - url: https://govindasystems.com/api
    description: Production
  - url: http://localhost:3000/api
    description: Development

paths:
  /contact:
    post:
      summary: Enviar mensagem de contato
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ContactRequest'
      responses:
        '200':
          description: Sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ContactResponse'
        '400':
          description: Erro de validação
        '500':
          description: Erro interno

components:
  schemas:
    ContactRequest:
      type: object
      required:
        - name
        - email
        - phone
        - service
        - message
      properties:
        name:
          type: string
          minLength: 3
          maxLength: 100
        email:
          type: string
          format: email
        phone:
          type: string
          pattern: '^\+?[1-9]\d{1,14}$'
        company:
          type: string
        service:
          type: string
          enum: [ai-customer-support, social-media-automation, workflow-automation, seo-agent, dao-builder, other]
        message:
          type: string
          minLength: 20
          maxLength: 2000

    ContactResponse:
      type: object
      properties:
        success:
          type: boolean
        message:
          type: string
```

---

## 🧪 Testes de API

### Jest + Supertest

```javascript
// __tests__/api/contact.test.js
import { createMocks } from 'node-mocks-http';
import handler from '@/pages/api/contact';

describe('/api/contact', () => {
  it('should return 405 for GET requests', async () => {
    const { req, res } = createMocks({ method: 'GET' });
    await handler(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it('should validate email', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Test',
        email: 'invalid-email',
        phone: '+5511999999999',
        service: 'ai-customer-support',
        message: 'Test message with at least 20 characters',
      },
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(400);
    expect(res._getJSONData()).toHaveProperty('error');
  });

  it('should send email successfully', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'João Silva',
        email: 'joao@example.com',
        phone: '+5511999999999',
        service: 'ai-customer-support',
        message: 'Gostaria de saber mais sobre o serviço',
      },
    });

    await handler(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(res._getJSONData()).toHaveProperty('success', true);
  });
});
```

---

## 📊 Monitoring e Logs

### Structured Logging

```javascript
// lib/logger.js
export const logger = {
  info: (message, meta = {}) => {
    console.log(JSON.stringify({
      level: 'info',
      message,
      timestamp: new Date().toISOString(),
      ...meta,
    }));
  },
  error: (message, error, meta = {}) => {
    console.error(JSON.stringify({
      level: 'error',
      message,
      error: {
        message: error.message,
        stack: error.stack,
      },
      timestamp: new Date().toISOString(),
      ...meta,
    }));
  },
};

// Uso
logger.info('Contact form submitted', { email: user.email, service: 'ai-support' });
logger.error('Failed to send email', error, { userId: user.id });
```

---

**Última Atualização:** Outubro 2025  
**Versão:** 1.0  
**Autor:** Equipe GovindaSystems

