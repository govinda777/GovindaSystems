# 🎨 Arquitetura de Componentes - GovindaSystems

## 📋 Índice

1. [Design System](#design-system)
2. [Hierarquia de Componentes](#hierarquia-de-componentes)
3. [Componentes Principais](#componentes-principais)
4. [Padrões de Composição](#padrões-de-composição)
5. [Gerenciamento de Estado](#gerenciamento-de-estado)
6. [Estilização](#estilização)
7. [Acessibilidade](#acessibilidade)
8. [Responsividade](#responsividade)

---

## 🎨 Design System

### Paleta de Cores

```css
/* src/web/styles/globals.css */

:root {
  /* Primary Colors */
  --color-primary: #2ECAD5;           /* Cyan */
  --color-primary-light: #5ED4DD;
  --color-primary-dark: #1AA5AF;
  
  /* Accent Colors */
  --color-accent: #FF6B6B;            /* Coral */
  --color-accent-light: #FF8B8B;
  --color-accent-dark: #E54B4B;
  
  /* Neutral Colors */
  --color-dark: #111827;              /* Gray-900 */
  --color-dark-bg: #15293E;           /* Background */
  --color-dark-bg-lighter: #1F3A52;
  --color-gray: #6B7280;              /* Gray-500 */
  --color-gray-light: #9CA3AF;        /* Gray-400 */
  --color-white: #FFFFFF;
  
  /* Semantic Colors */
  --color-success: #10B981;           /* Green-500 */
  --color-warning: #F59E0B;           /* Amber-500 */
  --color-error: #EF4444;             /* Red-500 */
  --color-info: #3B82F6;              /* Blue-500 */
}
```

### Tipografia

```css
/* Fontes */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-heading: 'Plus Jakarta Sans', sans-serif;
--font-mono: 'Fira Code', monospace;

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

/* Weights */
--font-light: 300;
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Espaçamento

```css
/* Spacing Scale (4px base) */
--space-1: 0.25rem;      /* 4px */
--space-2: 0.5rem;       /* 8px */
--space-3: 0.75rem;      /* 12px */
--space-4: 1rem;         /* 16px */
--space-5: 1.25rem;      /* 20px */
--space-6: 1.5rem;       /* 24px */
--space-8: 2rem;         /* 32px */
--space-10: 2.5rem;      /* 40px */
--space-12: 3rem;        /* 48px */
--space-16: 4rem;        /* 64px */
--space-20: 5rem;        /* 80px */
```

### Breakpoints

```css
/* Responsive Breakpoints */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Border Radius

```css
--radius-sm: 0.25rem;    /* 4px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
```

### Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
--shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
```

---

## 📦 Hierarquia de Componentes

### Atomic Design Structure

```
src/web/components/
│
├── 📁 atoms/                    # Componentes básicos indivisíveis
│   ├── Button.js               # Botão
│   ├── Input.js                # Campo de entrada
│   ├── Label.js                # Rótulo
│   ├── Icon.js                 # Ícone
│   ├── Badge.js                # Badge/Tag
│   └── Spinner.js              # Loading spinner
│
├── 📁 molecules/                # Combinação de átomos
│   ├── FormField.js            # Label + Input + Error
│   ├── Card.js                 # Container de conteúdo
│   ├── Modal.js                # Modal dialog
│   ├── Dropdown.js             # Menu dropdown
│   ├── Toast.js                # Notificação
│   └── SearchBar.js            # Barra de busca
│
├── 📁 organisms/                # Seções complexas
│   ├── Header.js               # Cabeçalho completo
│   ├── Footer.js               # Rodapé completo
│   ├── Hero.js                 # Hero section
│   ├── ContactForm.js          # Formulário completo
│   ├── ServiceCard.js          # Card de serviço
│   └── TestimonialSlider.js    # Carrossel depoimentos
│
├── 📁 templates/                # Layouts de página
│   ├── MainLayout.js           # Layout principal
│   ├── ServiceLayout.js        # Layout de serviço
│   └── BlogLayout.js           # Layout de blog
│
└── 📁 pages/                    # Páginas completas (Next.js)
    ├── index.js                # Homepage
    ├── services/               # Páginas de serviços
    └── [...outros]
```

---

## 🧩 Componentes Principais

### 1. Button (Atom)

```typescript
// components/atoms/Button.tsx
import React, { ButtonHTMLAttributes } from 'react';
import { Spinner } from './Spinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark active:scale-95',
    secondary: 'bg-accent text-white hover:bg-accent-dark active:scale-95',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    ghost: 'text-primary hover:bg-primary/10',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Spinner size="sm" className="mr-2" />}
      {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
```

**Uso:**
```tsx
<Button variant="primary" size="lg">
  Solicitar Orçamento
</Button>

<Button variant="outline" leftIcon={<Icon name="mail" />}>
  Entrar em Contato
</Button>

<Button isLoading disabled>
  Enviando...
</Button>
```

---

### 2. Card (Molecule)

```typescript
// components/molecules/Card.tsx
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  padding = 'md',
  className = '',
}) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  return (
    <div
      className={`
        bg-white dark:bg-dark-bg-lighter 
        rounded-xl 
        shadow-lg 
        ${paddingClasses[padding]}
        ${hover ? 'hover:shadow-2xl hover:scale-105 transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// Subcomponentes
Card.Header = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4 pb-4 border-b border-gray-200 dark:border-gray-700">
    {children}
  </div>
);

Card.Body = ({ children }: { children: React.ReactNode }) => (
  <div className="mb-4">{children}</div>
);

Card.Footer = ({ children }: { children: React.ReactNode }) => (
  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
    {children}
  </div>
);
```

**Uso:**
```tsx
<Card hover padding="lg">
  <Card.Header>
    <h3>Título do Card</h3>
  </Card.Header>
  <Card.Body>
    <p>Conteúdo do card...</p>
  </Card.Body>
  <Card.Footer>
    <Button>Ação</Button>
  </Card.Footer>
</Card>
```

---

### 3. ServiceCard (Organism)

```typescript
// components/organisms/ServiceCard.tsx
import React from 'react';
import { Card } from '../molecules/Card';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price?: {
    min: number;
    max: number;
    billing: string;
  };
  detailsLink: string;
  quoteLink: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  features,
  price,
  detailsLink,
  quoteLink,
}) => {
  return (
    <Card hover padding="lg" className="h-full flex flex-col">
      <Card.Header>
        <div className="flex items-center gap-4 mb-3">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
            <Icon name={icon} size="lg" className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-accent">{title}</h3>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </Card.Header>
      
      <Card.Body className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Icon name="check" className="text-primary mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        {price && (
          <div className="mt-6 p-4 bg-gray-100 dark:bg-dark rounded-lg">
            <div className="text-sm text-gray-600 dark:text-gray-400">A partir de</div>
            <div className="text-3xl font-bold text-primary">
              R$ {price.min.toLocaleString()}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              /{price.billing}
            </div>
          </div>
        )}
      </Card.Body>
      
      <Card.Footer>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => window.location.href = detailsLink}
          >
            Ver Detalhes
          </Button>
          <Button 
            variant="primary" 
            className="flex-1"
            onClick={() => window.location.href = quoteLink}
          >
            Solicitar Orçamento
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};
```

**Uso:**
```tsx
<ServiceCard
  icon="robot"
  title="Atendimento Automatizado"
  description="Chatbot inteligente com IA para atendimento 24/7"
  features={[
    'Diálogos customizados',
    'Integração com CRM',
    'Base de conhecimento',
    'Análise de sentimento',
  ]}
  price={{
    min: 2500,
    max: 5900,
    billing: 'mês',
  }}
  detailsLink="/services/ai-customer-support"
  quoteLink="/join?service=ai-support"
/>
```

---

### 4. Header (Organism)

```typescript
// components/organisms/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Header: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Soluções AI',
      href: '#',
      submenu: [
        { name: 'Atendimento Automatizado', href: '/services/ai-customer-support' },
        { name: 'Automação Social Media', href: '/services/social-media-automation' },
        { name: 'Automação de Processos', href: '/services/workflow-automation' },
        { name: 'Agente SEO', href: '/services/seo-agent' },
        { name: 'DAO Builder', href: '/services/dao-builder' },
      ],
    },
    { name: 'Casos de Uso', href: '/use-cases' },
    { name: 'Tecnologias', href: '/technologies' },
    { name: 'Projetos', href: '/projects' },
    { name: 'Contato', href: '/contact' },
  ];
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-dark/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold">GovindaSystems</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              item.submenu ? (
                <div key={item.name} className="relative group">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    {item.name}
                    <Icon name="chevron-down" size="sm" />
                  </button>
                  
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-dark-bg-lighter rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-dark first:rounded-t-lg last:rounded-b-lg transition-colors"
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`hover:text-primary transition-colors ${
                    router.pathname === item.href ? 'text-primary font-semibold' : ''
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <Button variant="primary" size="md">
              Solicitar Orçamento
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name={mobileMenuOpen ? 'x' : 'menu'} />
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            {navigation.map((item) => (
              <div key={item.name} className="py-2">
                {item.submenu ? (
                  <>
                    <div className="font-semibold mb-2">{item.name}</div>
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="block py-2 pl-4 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
```

---

## 🔄 Padrões de Composição

### Compound Components Pattern

```typescript
// components/molecules/Tabs.tsx
import React, { createContext, useContext, useState } from 'react';

// Context
const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (id: string) => void;
}>({
  activeTab: '',
  setActiveTab: () => {},
});

// Main Component
interface TabsProps {
  children: React.ReactNode;
  defaultTab: string;
}

export const Tabs: React.FC<TabsProps> = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className="w-full">{children}</div>
    </TabsContext.Provider>
  );
};

// Sub-components
Tabs.List = ({ children }: { children: React.ReactNode }) => (
  <div className="flex border-b border-gray-200 dark:border-gray-700">
    {children}
  </div>
);

Tabs.Tab = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === id;
  
  return (
    <button
      className={`px-4 py-2 font-medium transition-colors ${
        isActive
          ? 'border-b-2 border-primary text-primary'
          : 'text-gray-600 hover:text-primary'
      }`}
      onClick={() => setActiveTab(id)}
    >
      {children}
    </button>
  );
};

Tabs.Panel = ({ id, children }: { id: string; children: React.ReactNode }) => {
  const { activeTab } = useContext(TabsContext);
  
  if (activeTab !== id) return null;
  
  return <div className="py-4">{children}</div>;
};
```

**Uso:**
```tsx
<Tabs defaultTab="features">
  <Tabs.List>
    <Tabs.Tab id="features">Recursos</Tabs.Tab>
    <Tabs.Tab id="pricing">Preços</Tabs.Tab>
    <Tabs.Tab id="faq">FAQ</Tabs.Tab>
  </Tabs.List>
  
  <Tabs.Panel id="features">
    <p>Conteúdo de recursos...</p>
  </Tabs.Panel>
  
  <Tabs.Panel id="pricing">
    <p>Tabela de preços...</p>
  </Tabs.Panel>
  
  <Tabs.Panel id="faq">
    <p>Perguntas frequentes...</p>
  </Tabs.Panel>
</Tabs>
```

### Render Props Pattern

```typescript
// components/molecules/Toggle.tsx
interface ToggleProps {
  children: (props: {
    on: boolean;
    toggle: () => void;
  }) => React.ReactNode;
}

export const Toggle: React.FC<ToggleProps> = ({ children }) => {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);
  
  return <>{children({ on, toggle })}</>;
};
```

**Uso:**
```tsx
<Toggle>
  {({ on, toggle }) => (
    <div>
      <button onClick={toggle}>
        {on ? 'Fechar' : 'Abrir'}
      </button>
      {on && <div>Conteúdo revelado</div>}
    </div>
  )}
</Toggle>
```

---

## 📊 Gerenciamento de Estado

### Context API

```typescript
// context/AppContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppState {
  user: User | null;
  theme: 'light' | 'dark';
  setUser: (user: User | null) => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  
  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);
  
  // Save theme to localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);
  
  return (
    <AppContext.Provider value={{ user, theme, setUser, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
```

### Custom Hooks

```typescript
// hooks/useForm.ts
import { useState, ChangeEvent, FormEvent } from 'react';

export function useForm<T>(initialValues: T) {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof T]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };
  
  const handleSubmit = (callback: (values: T) => Promise<void>) => {
    return async (e: FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      try {
        await callback(values);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    };
  };
  
  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };
  
  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    setErrors,
    reset,
  };
}
```

**Uso:**
```tsx
const ContactForm = () => {
  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm({
    name: '',
    email: '',
    message: '',
  });
  
  const onSubmit = async (data) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    
    toast.success('Mensagem enviada!');
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        value={values.name}
        onChange={handleChange}
        error={errors.name}
      />
      {/* ... */}
      <Button type="submit" isLoading={isSubmitting}>
        Enviar
      </Button>
    </form>
  );
};
```

---

## 🎨 Estilização

### Tailwind CSS + CSS Modules

```tsx
// components/Hero.tsx
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={`${styles.hero} bg-gradient-to-r from-primary to-accent`}>
      <div className="container mx-auto px-4">
        <h1 className={`${styles.title} text-5xl font-bold`}>
          Transforme seu negócio com IA
        </h1>
      </div>
    </section>
  );
};
```

```css
/* Hero.module.css */
.hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.title {
  background: linear-gradient(to right, var(--color-primary), var(--color-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

---

## ♿ Acessibilidade

### ARIA Labels e Roles

```tsx
<button
  aria-label="Fechar modal"
  aria-pressed={isOpen}
  role="button"
  onClick={handleClose}
>
  <Icon name="x" aria-hidden="true" />
</button>

<nav aria-label="Navegação principal">
  <ul role="list">
    <li role="listitem">
      <a href="/" aria-current="page">Home</a>
    </li>
  </ul>
</nav>
```

### Focus Management

```tsx
import { useRef, useEffect } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isOpen]);
  
  return (
    <dialog open={isOpen} aria-modal="true">
      <button ref={closeButtonRef} onClick={onClose}>
        Fechar
      </button>
      {/* conteúdo */}
    </dialog>
  );
};
```

---

## 📱 Responsividade

### Breakpoint Hook

```typescript
// hooks/useBreakpoint.ts
import { useState, useEffect } from 'react';

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('');
  
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setBreakpoint('sm');
      else if (width < 768) setBreakpoint('md');
      else if (width < 1024) setBreakpoint('lg');
      else if (width < 1280) setBreakpoint('xl');
      else setBreakpoint('2xl');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return {
    breakpoint,
    isMobile: ['sm', 'md'].includes(breakpoint),
    isTablet: breakpoint === 'lg',
    isDesktop: ['xl', '2xl'].includes(breakpoint),
  };
}
```

**Uso:**
```tsx
const MyComponent = () => {
  const { isMobile, isDesktop } = useBreakpoint();
  
  return (
    <div>
      {isMobile ? <MobileMenu /> : <DesktopMenu />}
      {isDesktop && <Sidebar />}
    </div>
  );
};
```

---

**Última Atualização:** Outubro 2025  
**Versão:** 1.0  
**Autor:** Equipe GovindaSystems

