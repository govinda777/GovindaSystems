# 🎨 Layout Detalhado do Site - GovindaSystems

## 📐 Visão Geral da Estrutura

Este documento detalha **componente por componente** como o site vai ficar após a transformação para AI.

---

## 🎨 Design System

### Paleta de Cores

```css
/* Cores Principais (Manter) */
--primary: #2ECAD5;        /* Cyan - CTAs, destaques */
--accent: #FF6B6B;         /* Coral - Títulos, ícones */
--dark: #111827;           /* Background escuro */
--dark-secondary: #15293E; /* Background sections */
--white: #FFFFFF;          /* Texto principal */
--gray-light: #94A3B8;     /* Texto secundário */

/* Gradientes */
--gradient-primary: linear-gradient(90deg, #2ECAD5, #FF6B6B);
--gradient-bg: linear-gradient(180deg, #15293E 0%, #111827 100%);
--gradient-bg-alt: linear-gradient(180deg, #111827 0%, #15293E 100%);

/* Glassmorphism */
--glass-bg: rgba(255, 255, 255, 0.05);
--glass-border: rgba(255, 255, 255, 0.1);
--glass-blur: blur(10px);
```

### Tipografia

```css
/* Fontes */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 
             'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 
             sans-serif;

/* Tamanhos */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Espaçamentos

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

---

## 📄 PÁGINA HOME (index.js)

### Estrutura Visual Completa

```
┌─────────────────────────────────────────────────────────────┐
│                         HEADER                               │
│  Logo    [Home] [Soluções AI ▼] [Casos] [Tecnologias] [👤] │
│                                              [Solicitar]     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                          HERO                                │
│                                                              │
│  ┌──────────────────────┐    ┌──────────────────────┐      │
│  │ GovindaSystems       │    │   [Imagem AI/Robot]  │      │
│  │ Soluções em          │    │                      │      │
│  │ Inteligência         │    │                      │      │
│  │ Artificial           │    │                      │      │
│  │                      │    │                      │      │
│  │ Transformando...     │    │                      │      │
│  │                      │    │                      │      │
│  │ [Conheça] [Contato]  │    │                      │      │
│  └──────────────────────┘    └──────────────────────┘      │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                         ABOUT                                │
│                                                              │
│                      Quem Somos                              │
│                     ─────────────                            │
│                                                              │
│  Somos especialistas em criar soluções de Inteligência...   │
│                                                              │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐           │
│  │   💡       │  │   📈       │  │   👥       │           │
│  │  Missão    │  │   Visão    │  │  Valores   │           │
│  │            │  │            │  │            │           │
│  │ Texto...   │  │ Texto...   │  │ Texto...   │           │
│  └────────────┘  └────────────┘  └────────────┘           │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                       SERVICES                               │
│                                                              │
│                   Nossas Soluções AI                         │
│                  ────────────────────                        │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  🤖          │  │  📱          │  │  ⚙️           │     │
│  │ Atendimento  │  │ Automação    │  │ Automação    │     │
│  │ Automatizado │  │ Social Media │  │ Processos    │     │
│  │              │  │              │  │              │     │
│  │ • Item 1     │  │ • Item 1     │  │ • Item 1     │     │
│  │ • Item 2     │  │ • Item 2     │  │ • Item 2     │     │
│  │ • Item 3     │  │ • Item 3     │  │ • Item 3     │     │
│  │              │  │              │  │              │     │
│  │ [Detalhes] [Orçamento]  ...     ...              │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐                        │
│  │  📊          │  │  🏛️           │                        │
│  │ Agente SEO   │  │ DAO Builder  │                        │
│  │              │  │              │                        │
│  │ • Item 1     │  │ • Item 1     │                        │
│  │ • Item 2     │  │ • Item 2     │                        │
│  │ • Item 3     │  │ • Item 3     │                        │
│  │              │  │              │                        │
│  │ [Detalhes] [Orçamento]  ...                      │     │
│  └──────────────┘  └──────────────┘                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     HOW IT WORKS                             │
│                                                              │
│                  Como Trabalhamos                            │
│                 ───────────────────                          │
│                                                              │
│  ① ────→ ② ────→ ③ ────→ ④ ────→ ⑤                        │
│  Consulta  Análise  Desenvolv  Testes  Deploy               │
│  Gratuita  Proposta  Solução   Validação Suporte            │
│                                                              │
│  Descrição de cada etapa...                                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                      USE CASES                               │
│                                                              │
│                   Casos de Uso                               │
│                  ──────────────                              │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ 🛒       │  │ 💼       │  │ 🎓       │  │ 🏥       │   │
│  │E-commerce│  │ Serviços │  │ Educação │  │  Saúde   │   │
│  │          │  │          │  │          │  │          │   │
│  │• Caso 1  │  │• Caso 1  │  │• Caso 1  │  │• Caso 1  │   │
│  │• Caso 2  │  │• Caso 2  │  │• Caso 2  │  │• Caso 2  │   │
│  │• Caso 3  │  │• Caso 3  │  │• Caso 3  │  │• Caso 3  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    TECHNOLOGIES                              │
│                                                              │
│              Tecnologias que Utilizamos                      │
│             ─────────────────────────                        │
│                                                              │
│  AI & Machine Learning:                                      │
│  [OpenAI] [Claude] [LangChain] [Replicate]                  │
│                                                              │
│  Automação:                                                  │
│  [Zapier] [Make] [n8n]                                      │
│                                                              │
│  Auth & Payments:                                            │
│  [Privy]
│                                                              │
│  Blockchain (DAO):                                           │
│  [Hardhat] [Ethers.js]                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    TESTIMONIALS                              │
│                                                              │
│                O Que Dizem Nossos Clientes                   │
│               ────────────────────────────                   │
│                                                              │
│  ┌──────────────────┐  ┌──────────────────┐                │
│  │ [Foto]           │  │ [Foto]           │                │
│  │                  │  │                  │                │
│  │ "Depoimento..."  │  │ "Depoimento..."  │                │
│  │                  │  │                  │                │
│  │ ⭐⭐⭐⭐⭐        │  │ ⭐⭐⭐⭐⭐        │                │
│  │ - Nome, Empresa  │  │ - Nome, Empresa  │                │
│  └──────────────────┘  └──────────────────┘                │
│                                                              │
│            [← Prev]  ○ ● ○  [Next →]                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        FOOTER                                │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Serviços   │  │   Empresa   │  │   Contato   │        │
│  │             │  │             │  │             │        │
│  │ • Atendimento│ │ • Sobre     │  │ 📧 Email    │        │
│  │ • Social    │  │ • Casos     │  │ 📱 WhatsApp │        │
│  │ • Processos │  │ • Tecnologias│ │ 💼 LinkedIn │        │
│  │ • SEO       │  │ • Blog      │  │ 🐦 Twitter  │        │
│  │ • DAO       │  │             │  │             │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
│                                                              │
│  GovindaSystems DAO                                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧩 COMPONENTES DETALHADOS

### 1. Header Component

**Arquivo:** `src/web/components/Header.js`

```
┌──────────────────────────────────────────────────────────────┐
│ [Logo/Text]           Menu Items                    Actions  │
│                                                               │
│ GovindaSystems  [Home] [Soluções AI ▼] [Casos] [Tech] [👤]  │
│                                            [Solicitar Orçam.] │
└──────────────────────────────────────────────────────────────┘

Detalhes:
─────────────────────────────────────────────────────────────

[Logo/Text] - Esquerda
├─ Logo: "GovindaSystems" (text ou logo.png)
├─ Font: Bold, 24px
├─ Color: Gradient (cyan to coral)
└─ Link: → "/"

[Menu Items] - Centro
├─ Home
│  └─ Link: → "/"
│
├─ Soluções AI (Dropdown) ▼
│  ├─ Atendimento Automatizado → "/services/ai-customer-support"
│  ├─ Automação Social Media → "/services/social-media-automation"
│  ├─ Automação de Processos → "/services/workflow-automation"
│  ├─ Agente SEO → "/services/seo-agent"
│  └─ DAO Builder → "/services/dao-builder"
│
├─ Casos de Uso
│  └─ Link: → "/#use-cases" (scroll suave)
│
└─ Tecnologias
   └─ Link: → "/#technologies" (scroll suave)

[Actions] - Direita
├─ AuthButton (se não logado)
│  ├─ Ícone: 👤 ou user icon
│  ├─ Text: "Entrar"
│  ├─ Style: Outline button
│  └─ Action: → Privy login modal
│
├─ User Dropdown (se logado)
│  ├─ Avatar/Email
│  ├─ Dropdown:
│  │  ├─ Dashboard
│  │  ├─ Configurações
│  │  └─ Sair
│  └─ Style: Dropdown menu
│
└─ CTA Button
   ├─ Text: "Solicitar Orçamento"
   ├─ Style: Gradient background (cyan to coral)
   ├─ Link: → "/join"
   └─ Icon: → arrow or sparkle

Estilos CSS:
─────────────────────────────────────────────────────────────

.header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
}

.nav-link {
  color: #94A3B8;
  font-size: 16px;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #2ECAD5;
}

.nav-link.active {
  color: #FFFFFF;
}

.cta-button {
  background: linear-gradient(90deg, #2ECAD5, #FF6B6B);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 12px rgba(46, 202, 213, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(46, 202, 213, 0.4);
}

Mobile (< 768px):
─────────────────────────────────────────────────────────────
- Menu vira hamburger (☰)
- Dropdown em tela cheia
- CTA button menor
```

---

### 2. Hero Component

**Arquivo:** `src/web/components/Hero.js`

```
┌────────────────────────────────────────────────────────────┐
│                                                             │
│   ┌─────────────────────────┐    ┌───────────────────┐    │
│   │                          │    │                   │    │
│   │  GovindaSystems          │    │   [Ilustração]    │    │
│   │  ───────────────         │    │                   │    │
│   │  Soluções em             │    │   Robot/AI art    │    │
│   │  Inteligência Artificial │    │   com efeito      │    │
│   │                          │    │   glassmorphism   │    │
│   │  Transformando negócios  │    │                   │    │
│   │  através da IA e         │    │                   │    │
│   │  Automação Inteligente   │    │                   │    │
│   │                          │    │                   │    │
│   │  [Conheça Soluções]      │    │                   │    │
│   │  [Falar com Especialista]│    │                   │    │
│   │                          │    │                   │    │
│   └─────────────────────────┘    └───────────────────┘    │
│                                                             │
│   • Círculos blur decorativos nos cantos                   │
│   • Gradiente de fundo (dark-secondary → dark)             │
│                                                             │
└────────────────────────────────────────────────────────────┘

Estrutura HTML:
─────────────────────────────────────────────────────────────

<section className="hero">
  {/* Background Blur Circles */}
  <div className="blur-circle blur-primary" />
  <div className="blur-circle blur-accent" />
  
  <Container>
    <Row className="align-items-center">
      <Col lg={7}>
        <h1 className="hero-title">
          GovindaSystems
          <span className="subtitle">
            Soluções em Inteligência Artificial
          </span>
        </h1>
        
        <p className="hero-description">
          Transformando negócios através da Inteligência Artificial 
          e Automação Inteligente
        </p>
        
        <p className="hero-text">
          Especializamos em criar soluções de AI personalizadas que 
          automatizam processos, otimizam atendimento ao cliente, 
          gerenciam redes sociais e transformam fluxos de trabalho.
        </p>
        
        <div className="hero-actions">
          <Link href="#services" className="btn-primary">
            Conheça Nossas Soluções
          </Link>
          <Link href="/join" className="btn-secondary">
            Falar com Especialista
          </Link>
        </div>
      </Col>
      
      <Col lg={5}>
        <div className="hero-image-container">
          <Image src="/assets/hero-ai.png" alt="AI Illustration" />
          {/* Blur decorativo */}
          <div className="image-blur" />
        </div>
      </Col>
    </Row>
  </Container>
</section>

Estilos CSS:
─────────────────────────────────────────────────────────────

.hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #15293E 0%, #111827 100%);
  position: relative;
  overflow: hidden;
  padding: 6rem 0;
}

.blur-circle {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;
}

.blur-primary {
  width: 300px;
  height: 300px;
  background: #2ECAD5;
  top: -50px;
  left: -50px;
}

.blur-accent {
  width: 400px;
  height: 400px;
  background: #FF6B6B;
  bottom: -100px;
  right: -100px;
}

.hero-title {
  font-size: 3.75rem;        /* 60px */
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, #2ECAD5, #FF6B6B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title .subtitle {
  display: block;
  font-size: 2.25rem;        /* 36px */
  margin-top: 0.5rem;
}

.hero-description {
  font-size: 1.5rem;         /* 24px */
  font-weight: 500;
  color: #FFFFFF;
  margin-bottom: 1.5rem;
}

.hero-text {
  font-size: 1.125rem;       /* 18px */
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.7;
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  background: linear-gradient(90deg, #2ECAD5, #FF6B6B);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  box-shadow: 0 8px 16px rgba(46, 202, 213, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 24px rgba(46, 202, 213, 0.4);
}

.btn-secondary {
  background: transparent;
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: border-color 0.2s, background 0.2s;
}

.btn-secondary:hover {
  border-color: #2ECAD5;
  background: rgba(46, 202, 213, 0.1);
}

.hero-image-container {
  position: relative;
  padding: 2rem;
}

.hero-image-container img {
  width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

Mobile Responsive (< 768px):
─────────────────────────────────────────────────────────────
.hero-title {
  font-size: 2.5rem;        /* 40px */
}

.hero-title .subtitle {
  font-size: 1.75rem;       /* 28px */
}

.hero-description {
  font-size: 1.25rem;       /* 20px */
}

.hero-actions {
  flex-direction: column;
}

.btn-primary, .btn-secondary {
  width: 100%;
  text-align: center;
}
```

---

### 3. About Component

**Arquivo:** `src/web/components/About.js`

```
┌────────────────────────────────────────────────────────────┐
│                                                             │
│                      Quem Somos                             │
│                     ─────────────                           │
│                                                             │
│   Somos Especialistas em Inteligência Artificial           │
│   ─────────────────────────────────────────────            │
│                                                             │
│   A GovindaSystems é uma empresa especializada em criar    │
│   soluções personalizadas de Inteligência Artificial...    │
│                                                             │
│   ┌────────────────┐  ┌────────────────┐  ┌──────────────┐│
│   │                │  │                │  │              ││
│   │      💡        │  │      📈        │  │      👥      ││
│   │                │  │                │  │              ││
│   │    Missão      │  │     Visão      │  │   Valores    ││
│   │                │  │                │  │              ││
│   │  Democratizar  │  │  Ser referência│  │  Inovação    ││
│   │  o acesso à AI │  │  em soluções AI│  │  Transparência││
│   │  tornando...   │  │  ajudando...   │  │  Excelência  ││
│   │                │  │                │  │              ││
│   └────────────────┘  └────────────────┘  └──────────────┘│
│                                                             │
│   {Animação de fade-in ao scrollar}                        │
│                                                             │
└────────────────────────────────────────────────────────────┘

Estrutura HTML:
─────────────────────────────────────────────────────────────

<section id="about" className="about">
  <Container>
    {/* Title */}
    <Row className="mb-5">
      <Col className="text-center">
        <h2 className="section-title">Quem Somos</h2>
        <div className="title-divider" />
      </Col>
    </Row>
    
    {/* Main Content */}
    <Row className="mb-5">
      <Col md={12}>
        <h3 className="subsection-title">
          Somos Especialistas em Inteligência Artificial
        </h3>
        <p className="lead-text">
          A GovindaSystems é uma empresa especializada em criar 
          soluções personalizadas de Inteligência Artificial que 
          resolvem problemas reais de negócios.
        </p>
        <p className="body-text">
          Nossa equipe combina expertise técnica com profundo 
          entendimento das necessidades empresariais, oferecendo 
          desde atendimento automatizado até automação completa 
          de processos.
        </p>
      </Col>
    </Row>
    
    {/* Cards */}
    <Row>
      <Col md={4}>
        <div className="value-card">
          <div className="card-icon">💡</div>
          <h4 className="card-title">Missão</h4>
          <p className="card-text">
            Democratizar o acesso à Inteligência Artificial, 
            tornando soluções avançadas acessíveis para empresas 
            de todos os tamanhos.
          </p>
        </div>
      </Col>
      
      <Col md={4}>
        <div className="value-card">
          <div className="card-icon">📈</div>
          <h4 className="card-title">Visão</h4>
          <p className="card-text">
            Ser referência em soluções de AI personalizadas, 
            ajudando empresas a automatizar processos e alcançar 
            resultados extraordinários.
          </p>
        </div>
      </Col>
      
      <Col md={4}>
        <div className="value-card">
          <div className="card-icon">👥</div>
          <h4 className="card-title">Valores</h4>
          <p className="card-text">
            Inovação, transparência, excelência técnica e foco 
            em resultados mensuráveis para nossos clientes.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
</section>

Estilos CSS:
─────────────────────────────────────────────────────────────

.about {
  padding: 5rem 0;
  background: linear-gradient(180deg, #111827 0%, #15293E 100%);
}

.section-title {
  font-size: 3rem;          /* 48px */
  font-weight: 700;
  background: linear-gradient(90deg, #2ECAD5, #FF6B6B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
}

.title-divider {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #2ECAD5, #FF6B6B);
  margin: 0 auto 2rem;
  border-radius: 2px;
}

.subsection-title {
  font-size: 1.875rem;      /* 30px */
  font-weight: 600;
  color: #2ECAD5;
  margin-bottom: 1.5rem;
}

.lead-text {
  font-size: 1.25rem;       /* 20px */
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.body-text {
  font-size: 1rem;          /* 16px */
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
}

.value-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 2rem;
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}

.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(46, 202, 213, 0.2);
  border-color: rgba(46, 202, 213, 0.3);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 8px rgba(46, 202, 213, 0.3));
}

.card-title {
  font-size: 1.5rem;        /* 24px */
  font-weight: 600;
  color: #FF6B6B;
  margin-bottom: 1rem;
}

.card-text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

Animações (usar Framer Motion ou CSS):
─────────────────────────────────────────────────────────────

/* Fade in ao scrollar */
.value-card {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.6s ease forwards;
}

.value-card:nth-child(1) {
  animation-delay: 0.1s;
}

.value-card:nth-child(2) {
  animation-delay: 0.2s;
}

.value-card:nth-child(3) {
  animation-delay: 0.3s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

### 4. Services Component (PRINCIPAL)

**Arquivo:** `src/web/components/services/Services.js`

```
┌──────────────────────────────────────────────────────────────┐
│                                                               │
│                    Nossas Soluções AI                         │
│                   ────────────────────                        │
│                                                               │
│  Nossa comunidade colabora para criar soluções...            │
│                                                               │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐│
│  │       🤖        │ │       📱        │ │       ⚙️         ││
│  │                 │ │                 │ │                 ││
│  │  Atendimento    │ │   Automação     │ │   Automação     ││
│  │  de Cliente     │ │   de Redes      │ │   de Fluxos     ││
│  │  Automatizado   │ │   Sociais       │ │   de Trabalho   ││
│  │                 │ │                 │ │                 ││
│  │ • Diálogos      │ │ • Geração auto  │ │ • Cotações      ││
│  │   customizados  │ │   de conteúdo   │ │   automáticas   ││
│  │ • Base de       │ │ • Agendamento   │ │ • Curadoria     ││
│  │   conhecimento  │ │   inteligente   │ │   de blog       ││
│  │ • Integração CRM│ │ • Multi-rede    │ │ • Manutenção    ││
│  │ • 24/7          │ │ • Analytics     │ │   preditiva     ││
│  │                 │ │                 │ │                 ││
│  │ R$ 2.500/mês    │ │ R$ 997/mês      │ │ R$ 3.500/mês    ││
│  │                 │ │                 │ │                 ││
│  │ [Ver Detalhes]  │ │ [Ver Detalhes]  │ │ [Ver Detalhes]  ││
│  │ [Solicitar ⭐]  │ │ [Solicitar ⭐]  │ │ [Solicitar ⭐]  ││
│  └─────────────────┘ └─────────────────┘ └─────────────────┘│
│                                                               │
│  ┌─────────────────┐ ┌─────────────────┐                    │
│  │       📊        │ │       🏛️         │                    │
│  │                 │ │                 │                    │
│  │   Agente SEO    │ │   DAO Builder   │                    │
│  │   e Campanhas   │ │   com AI        │                    │
│  │                 │ │                 │                    │
│  │ • SEO automatiz.│ │ • Smart Contracts│                   │
│  │ • Campanhas     │ │ • Governança    │                    │
│  │ • Keywords      │ │ • NFTs & DeFi   │                    │
│  │ • Analytics     │ │ • Tokens        │                    │
│  │                 │ │                 │                    │
│  │ R$ 2.900/mês    │ │ R$ 45.000 (proj)│                    │
│  │                 │ │                 │                    │
│  │ [Ver Detalhes]  │ │ [Ver Detalhes]  │                    │
│  │ [Solicitar ⭐]  │ │ [Solicitar ⭐]  │                    │
│  └─────────────────┘ └─────────────────┘                    │
│                                                               │
│            [Ver Todos os Serviços →]                         │
│                                                               │
└──────────────────────────────────────────────────────────────┘

Estrutura HTML (Um Card):
─────────────────────────────────────────────────────────────

<Col md={4} className="mb-4">
  <div className="service-card">
    {/* Icon */}
    <div className="service-icon">
      🤖
    </div>
    
    {/* Title */}
    <h3 className="service-title">
      Atendimento de Cliente Automatizado
    </h3>
    
    {/* Features List */}
    <ul className="service-features">
      <li>
        <span className="bullet">•</span>
        <span>Diálogos customizados e personalizados</span>
      </li>
      <li>
        <span className="bullet">•</span>
        <span>Acesso a base de conhecimento em tempo real</span>
      </li>
      <li>
        <span className="bullet">•</span>
        <span>Integração completa com CRM</span>
      </li>
      <li>
        <span className="bullet">•</span>
        <span>Atendimento 24/7 sem interrupções</span>
      </li>
    </ul>
    
    {/* Price */}
    <div className="service-price">
      <span className="price-label">A partir de</span>
      <span className="price-value">R$ 2.500</span>
      <span className="price-period">/mês</span>
    </div>
    
    {/* Actions */}
    <div className="service-actions">
      <Link 
        href="/services/ai-customer-support" 
        className="btn-details"
      >
        Ver Detalhes
      </Link>
      <Link 
        href="/join?service=ai-support" 
        className="btn-request"
      >
        Solicitar Orçamento ⭐
      </Link>
    </div>
  </div>
</Col>

Estilos CSS:
─────────────────────────────────────────────────────────────

.services {
  padding: 5rem 0;
  background: linear-gradient(180deg, #15293E 0%, #111827 100%);
}

.service-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(46, 202, 213, 0.25);
  border-color: rgba(46, 202, 213, 0.4);
}

.service-icon {
  font-size: 4rem;          /* 64px */
  text-align: center;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 12px rgba(46, 202, 213, 0.4));
}

.service-title {
  font-size: 1.5rem;        /* 24px */
  font-weight: 700;
  color: #FF6B6B;
  text-align: center;
  margin-bottom: 1.5rem;
  min-height: 3rem;         /* Garante alinhamento */
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex-grow: 1;
}

.service-features li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  font-size: 0.9375rem;     /* 15px */
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
}

.service-features .bullet {
  color: #2ECAD5;
  font-size: 1.5rem;
  margin-right: 0.75rem;
  flex-shrink: 0;
  line-height: 1;
}

.service-price {
  text-align: center;
  margin-bottom: 1.5rem;
  padding: 1rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.price-label {
  display: block;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.25rem;
}

.price-value {
  display: inline-block;
  font-size: 2rem;          /* 32px */
  font-weight: 700;
  background: linear-gradient(90deg, #2ECAD5, #FF6B6B);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.price-period {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.service-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.btn-details {
  padding: 0.75rem 1.5rem;
  border: 1px solid rgba(46, 202, 213, 0.5);
  border-radius: 8px;
  color: #2ECAD5;
  text-align: center;
  font-weight: 600;
  transition: background 0.2s, border-color 0.2s;
}

.btn-details:hover {
  background: rgba(46, 202, 213, 0.1);
  border-color: #2ECAD5;
}

.btn-request {
  padding: 0.75rem 1.5rem;
  background: linear-gradient(90deg, #2ECAD5, #FF6B6B);
  border-radius: 8px;
  color: white;
  text-align: center;
  font-weight: 600;
  border: none;
  box-shadow: 0 4px 12px rgba(46, 202, 213, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-request:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(46, 202, 213, 0.4);
}

Mobile Responsive (< 768px):
─────────────────────────────────────────────────────────────
.service-card {
  margin-bottom: 2rem;
}

.service-icon {
  font-size: 3rem;
}

.service-title {
  font-size: 1.25rem;
  min-height: auto;
}
```

Continuarei no próximo arquivo devido ao limite de tamanho...

---

## 📝 OBSERVAÇÃO

Este é apenas o INÍCIO do documento de layout. Preciso continuar com:

- [ ] HowItWorks Component (detalhado)
- [ ] UseCases Component (detalhado)
- [ ] Technologies Component (detalhado)
- [ ] Testimonials Component (detalhado)
- [ ] Footer Component (detalhado)
- [ ] Páginas de Serviços Individuais (layout completo de cada uma)
- [ ] Página de Contato/Orçamento (formulário detalhado)
- [ ] Responsividade completa
- [ ] Animações e transições
- [ ] Estados de hover/active
- [ ] Loading states
- [ ] Error states

Quer que eu continue com os outros componentes?


