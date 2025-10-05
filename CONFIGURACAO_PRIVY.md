# 🔐 Configuração Privy - GovindaSystems

## ✅ Informações do Privy App

### App ID (Público)
```
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
```

✅ **Status:** App ID configurado  
📅 **Data:** Outubro 2025  
🔗 **Dashboard:** https://dashboard.privy.io

---

## 🚀 Como Configurar

### 1. Criar arquivo .env.local

```bash
cd src/web
cp .env.local.example .env.local
```

### 2. Adicionar Privy Secret

O arquivo `.env.local` já tem o `NEXT_PUBLIC_PRIVY_APP_ID` configurado.

Você precisa adicionar apenas o **PRIVY_SECRET** (encontre no dashboard do Privy):

```bash
# Editar .env.local
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
PRIVY_SECRET=seu_secret_aqui  # ← Obter no dashboard Privy
```

### 3. Configurar _app.js

O arquivo `src/web/pages/_app.js` já deve ter ou você deve adicionar:

```jsx
import { PrivyProvider } from '@privy-io/react-auth';

function MyApp({ Component, pageProps }) {
  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID}
      config={{
        // Métodos de login
        loginMethods: ['email', 'google', 'wallet'],
        
        // Aparência
        appearance: {
          theme: 'dark',
          accentColor: '#2ECAD5',
          logo: '/logo.png',
        },
        
        // Carteiras embedded
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
        
        // Chains suportados (para DAO Builder)
        supportedChains: [
          // Ethereum Mainnet
          { id: 1, name: 'Ethereum' },
          // Polygon
          { id: 137, name: 'Polygon' },
          // Arbitrum
          { id: 42161, name: 'Arbitrum' },
        ],
      }}
    >
      <Component {...pageProps} />
    </PrivyProvider>
  );
}

export default MyApp;
```

---

## 🔧 Instalação das Dependências

```bash
cd src/web

# Instalar Privy
npm install @privy-io/react-auth

# Se for usar com wagmi (Web3)
npm install @privy-io/wagmi wagmi viem
```

---

## 🎨 Configuração do Dashboard Privy

### 1. Login Methods Habilitados

Habilite no dashboard (https://dashboard.privy.io):
- ✅ Email
- ✅ Google OAuth
- ✅ Wallet (MetaMask, WalletConnect, etc.)

### 2. Allowed Origins

Adicione suas URLs permitidas:
```
Development:
- http://localhost:3000

Production:
- https://govindasystems.com
- https://www.govindasystems.com
- https://govinda-systems-web-govinda777.vercel.app (se mantiver)
```

### 3. Redirect URLs

Configure URLs de redirecionamento após login:
```
Development:
- http://localhost:3000
- http://localhost:3000/dashboard (opcional)

Production:
- https://govindasystems.com
- https://govindasystems.com/dashboard
```

### 4. Webhooks (Opcional)

Se quiser receber eventos:
```
Webhook URL: https://govindasystems.com/api/privy/webhook
Events:
  - user.created
  - user.authenticated
  - wallet.linked
```

---

## 🧩 Componentes de Autenticação

### Criar AuthButton Component

**Arquivo:** `src/web/components/AuthButton.js`

```jsx
import { usePrivy } from '@privy-io/react-auth';

export default function AuthButton() {
  const { ready, authenticated, user, login, logout } = usePrivy();

  // Não renderizar até o Privy estar pronto
  if (!ready) {
    return <div className="btn btn-secondary">Carregando...</div>;
  }

  // Usuário não autenticado
  if (!authenticated) {
    return (
      <button 
        className="btn btn-primary"
        onClick={login}
      >
        Entrar
      </button>
    );
  }

  // Usuário autenticado
  return (
    <div className="dropdown">
      <button 
        className="btn btn-outline-light dropdown-toggle" 
        type="button" 
        id="userDropdown" 
        data-bs-toggle="dropdown"
      >
        {user.email?.address || user.wallet?.address.slice(0, 6) + '...'}
      </button>
      <ul className="dropdown-menu" aria-labelledby="userDropdown">
        <li>
          <span className="dropdown-item-text">
            {user.email?.address || 'Usuário'}
          </span>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <a className="dropdown-item" href="/dashboard">
            Dashboard
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="/settings">
            Configurações
          </a>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <button 
            className="dropdown-item text-danger" 
            onClick={logout}
          >
            Sair
          </button>
        </li>
      </ul>
    </div>
  );
}
```

### Integrar no Header

**Arquivo:** `src/web/components/Header.js`

```jsx
import AuthButton from './AuthButton';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            GovindaSystems
          </a>
          
          {/* Menu */}
          <div className="navbar-nav">
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/services">Soluções AI</a>
            <a className="nav-link" href="/join">Contato</a>
          </div>
          
          {/* Auth Button */}
          <AuthButton />
        </div>
      </nav>
    </header>
  );
}
```

---

## 🔐 Proteger Rotas

### Criar Hook de Autenticação

**Arquivo:** `src/web/hooks/useRequireAuth.js`

```jsx
import { usePrivy } from '@privy-io/react-auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function useRequireAuth() {
  const { ready, authenticated, login } = usePrivy();
  const router = useRouter();

  useEffect(() => {
    if (ready && !authenticated) {
      login();
    }
  }, [ready, authenticated, login]);

  return { ready, authenticated };
}
```

### Usar em Páginas Protegidas

**Exemplo:** `src/web/pages/dashboard.js`

```jsx
import { useRequireAuth } from '../hooks/useRequireAuth';

export default function Dashboard() {
  const { ready, authenticated } = useRequireAuth();

  if (!ready || !authenticated) {
    return <div>Autenticando...</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {/* Conteúdo protegido */}
    </div>
  );
}
```

---

## 💳 Pagamentos com Privy (Opcional)

### Habilitar Pagamentos

No dashboard Privy, habilite:
- Privy Payments
- Configure Stripe Connect

### Usar em Componente

```jsx
import { usePrivy } from '@privy-io/react-auth';

export function PaymentButton({ amount, description }) {
  const { ready, authenticated, createPayment } = usePrivy();

  const handlePayment = async () => {
    try {
      const payment = await createPayment({
        amount: amount, // em centavos
        currency: 'BRL',
        description: description,
      });
      
      console.log('Pagamento criado:', payment);
    } catch (error) {
      console.error('Erro no pagamento:', error);
    }
  };

  return (
    <button 
      onClick={handlePayment}
      disabled={!ready || !authenticated}
      className="btn btn-success"
    >
      Pagar R$ {(amount / 100).toFixed(2)}
    </button>
  );
}
```

---

## 🧪 Testar Integração

### 1. Iniciar Servidor de Desenvolvimento

```bash
cd src/web
npm run dev
```

### 2. Abrir no Navegador

```
http://localhost:3000
```

### 3. Testar Login

- Clicar em "Entrar"
- Testar login com email
- Testar login com Google
- Testar login com wallet (se habilitado)

### 4. Verificar no Console

```javascript
// No console do navegador
window.localStorage.getItem('privy:token')
// Deve retornar um token se autenticado
```

---

## 📊 Dados do Usuário

### Acessar Informações do Usuário

```jsx
import { usePrivy } from '@privy-io/react-auth';

export function UserProfile() {
  const { user } = usePrivy();

  if (!user) return null;

  return (
    <div>
      <h3>Perfil</h3>
      <p>Email: {user.email?.address}</p>
      <p>Wallet: {user.wallet?.address}</p>
      <p>ID: {user.id}</p>
      <p>Criado em: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
}
```

---

## 🔒 Segurança

### Variáveis de Ambiente

**✅ PÚBLICO (pode expor no frontend):**
```bash
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg
```

**❌ SECRETO (NUNCA expor no frontend):**
```bash
PRIVY_SECRET=seu_secret_aqui
```

### .gitignore

Certifique-se que `.env.local` está no `.gitignore`:

```bash
# .gitignore
.env.local
.env*.local
.env.production.local
```

---

## 📚 Recursos

### Documentação Oficial
- 📖 Docs: https://docs.privy.io
- 🎨 Exemplos: https://github.com/privy-io/privy-react-example
- 💬 Discord: https://discord.gg/privy

### Nossos Arquivos
- `.env.local.example` - Template de variáveis
- `src/web/components/AuthButton.js` - Componente de autenticação
- `src/web/hooks/useRequireAuth.js` - Hook para rotas protegidas

---

## ✅ Checklist de Configuração

- [x] App ID obtido: `cmaqqs10k00onl20md0g7c7bg`
- [ ] PRIVY_SECRET configurado no .env.local
- [ ] Dependências instaladas (`@privy-io/react-auth`)
- [ ] PrivyProvider configurado em _app.js
- [ ] AuthButton component criado
- [ ] AuthButton integrado no Header
- [ ] Allowed Origins configurados no dashboard
- [ ] Login methods habilitados no dashboard
- [ ] Testado login com email
- [ ] Testado login com Google
- [ ] Testado login com wallet (se aplicável)

---

## 🚨 Troubleshooting

### Erro: "Invalid App ID"
- Verifique se o App ID está correto
- Verifique se a variável `NEXT_PUBLIC_PRIVY_APP_ID` está sendo lida
- Reinicie o servidor: `npm run dev`

### Erro: "Origin not allowed"
- Adicione sua URL no dashboard Privy → Settings → Allowed Origins
- Para dev: `http://localhost:3000`
- Para prod: `https://govindasystems.com`

### Login não abre
- Verifique se `PrivyProvider` está envolvendo toda a app
- Verifique o console do navegador para erros
- Verifique se as dependências estão instaladas

### Token não persiste
- Verifique se cookies estão habilitados no navegador
- Verifique se não há conflito com outros providers

---

## 📞 Suporte

**Dúvidas sobre Privy?**
- 📖 Consulte: https://docs.privy.io
- 💬 Discord: https://discord.gg/privy
- 📧 Email: support@privy.io

**Dúvidas sobre implementação?**
- 📝 Consulte: CHECKLIST_IMPLEMENTACAO.md (Fase 8)
- 📖 Consulte: PLANO_ALTERACAO_SITE.md (Fase 7)

---

**Status:** ✅ App ID Configurado  
**Próximo passo:** Obter PRIVY_SECRET no dashboard  
**Data:** Outubro 2025


