# 🚀 Como Instalar - GovindaSystems

**Guia Definitivo de Instalação**

---

## ⚡ TL;DR - Instalação em 3 Passos

```bash
# 1️⃣ Clone o projeto
git clone https://github.com/govinda777/GovindaSystems.git
cd GovindaSystems

# 2️⃣ Execute o instalador automático
./install-fast.sh

# 3️⃣ Configure e rode
cd src/web
cp .env.example .env.local
npm run dev
```

**Abra:** http://localhost:3000 🎉

---

## 📊 Métodos de Instalação

| Método | Tempo | Dificuldade | Recomendado |
|--------|-------|-------------|-------------|
| **🚀 Script Automático + pnpm** | 30-60s | ⭐ Fácil | ✅ **SIM** |
| 🔧 Manual com pnpm | 1-2min | ⭐⭐ Médio | 👌 OK |
| 🐌 Manual com npm | 2-4min | ⭐⭐ Médio | ❌ Lento |

---

## 🚀 Método 1: Script Automático (RECOMENDADO)

### Passo a Passo

```bash
# Na raiz do projeto
./install-fast.sh
```

### Escolhas no Assistente

**1. Escolha o gerenciador de pacotes:**
```
Opção 1: 🚀 pnpm (RECOMENDADO - 2-3x mais rápido) ✅
Opção 2: ⚡ npm (padrão)
Opção 3: 📦 yarn
```

**2. Limpar cache?**
```
n = NÃO (mais rápido - recomendado após primeira instalação) ✅
y = SIM (instalação limpa - primeira vez ou problemas)
```

### O que o script faz?

✅ Verifica Node.js instalado  
✅ Instala pnpm (se escolhido)  
✅ Usa configurações otimizadas (.npmrc)  
✅ Instala todas as dependências  
✅ Mostra tempo de instalação  
✅ Fornece próximos passos  

### Tempo Esperado

- ⚡ **pnpm (primeira vez):** 30-60 segundos
- ⚡ **pnpm (com cache):** 10-20 segundos
- 🐌 **npm:** 2-4 minutos

---

## 🔧 Método 2: Instalação Manual

### Com pnpm (Mais Rápido) ⚡

```bash
# 1. Instalar pnpm globalmente (apenas primeira vez)
npm install -g pnpm

# 2. Verificar instalação
pnpm --version

# 3. Instalar dependências
cd src/web
pnpm install

# 4. Rodar projeto
pnpm dev
```

### Com npm (Padrão) 🐌

```bash
# 1. Instalar dependências
cd src/web
npm install --prefer-offline

# 2. Rodar projeto
npm run dev
```

### Com yarn 📦

```bash
# 1. Instalar dependências
cd src/web
yarn install --prefer-offline

# 2. Rodar projeto
yarn dev
```

---

## 📋 Configuração Pós-Instalação

### 1. Configurar Variáveis de Ambiente

```bash
cd src/web
cp .env.example .env.local
```

Edite `.env.local` com suas chaves:

```env
# Privy (Auth)
NEXT_PUBLIC_PRIVY_APP_ID=seu_app_id_aqui

# Thirdweb (Blockchain)
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=seu_client_id_aqui

# Sanity CMS (Opcional)
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id_aqui
```

### 2. Iniciar Servidor de Desenvolvimento

```bash
# Na pasta src/web
npm run dev
# ou
pnpm dev
# ou
yarn dev
```

### 3. Acessar Aplicação

```
http://localhost:3000
```

---

## ⚙️ Requisitos do Sistema

### Obrigatórios

- ✅ **Node.js:** 18.0.0 ou superior
- ✅ **npm:** 9.0.0 ou superior
- ✅ **Git:** Para clonar o repositório

### Recomendados

- 🚀 **pnpm:** 8.0.0 ou superior (para instalação rápida)
- 💾 **Espaço em disco:** 500MB livres
- 🌐 **Internet:** Para primeira instalação

### Verificar Instalações

```bash
# Verificar Node.js
node --version  # Deve ser >= 18.0.0

# Verificar npm
npm --version   # Deve ser >= 9.0.0

# Verificar Git
git --version

# Verificar pnpm (opcional)
pnpm --version  # Deve ser >= 8.0.0
```

---

## 🛠️ Comandos Úteis

### Desenvolvimento

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Verifica código
npm test             # Executa testes
```

### Instalação

```bash
./install-fast.sh    # Instalação otimizada (RECOMENDADO)
npm install          # Instalação padrão
pnpm install         # Instalação com pnpm
```

### Limpeza

```bash
npm run clean        # Remove node_modules, .next, .turbo
npm run clean:all    # Remove tudo + cache npm
```

---

## 🐛 Problemas Comuns e Soluções

### Erro: "Permission denied" ao executar script

```bash
# Dar permissão de execução ao script
chmod +x install-fast.sh
./install-fast.sh
```

### Erro: "EACCES: permission denied" (npm global)

```bash
# Corrigir permissões
sudo chown -R $USER:$(id -gn $USER) ~/.npm
sudo chown -R $USER:$(id -gn $USER) ~/.pnpm-store
```

### Erro: "Node version too old"

```bash
# Atualizar Node.js
# Mac (com Homebrew):
brew update
brew upgrade node

# Linux (com nvm):
nvm install 20
nvm use 20

# Windows: Baixar de nodejs.org
```

### Instalação muito lenta

```bash
# Usar pnpm em vez de npm
npm install -g pnpm
./install-fast.sh  # escolha opção 1
```

### Erro: "Module not found"

```bash
# Reinstalação limpa
cd src/web
rm -rf node_modules .next package-lock.json
npm cache clean --force
npm install
```

### Build falha com erro de memória

```bash
# Aumentar memória do Node.js
export NODE_OPTIONS=--max_old_space_size=4096
npm run build
```

### Porto 3000 já está em uso

```bash
# Usar outro porto
PORT=3001 npm run dev

# Ou matar processo na porta 3000
# Mac/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

## 📊 Comparação de Performance

### Tempo de Instalação (Primeira Vez)

| Gerenciador | Tempo | Velocidade |
|-------------|-------|------------|
| **pnpm** | 30-60s | ⚡⚡⚡ Muito Rápido |
| npm (otimizado) | 1-2min | ⚡⚡ Rápido |
| npm (padrão) | 3-4min | ⚡ Lento |
| yarn | 2-3min | ⚡⚡ Rápido |

### Tempo de Instalação (Com Cache)

| Gerenciador | Tempo | Velocidade |
|-------------|-------|------------|
| **pnpm** | 10-20s | ⚡⚡⚡ Muito Rápido |
| npm (otimizado) | 40-60s | ⚡⚡ Rápido |
| npm (padrão) | 1-2min | ⚡ Lento |
| yarn | 50-70s | ⚡⚡ Rápido |

### Espaço em Disco (node_modules)

| Gerenciador | Espaço | Economia |
|-------------|--------|----------|
| **pnpm** | ~50MB | 75% menor |
| npm | ~200MB | - |
| yarn | ~180MB | 10% menor |

---

## ✅ Checklist de Instalação

Marque conforme avança:

```
Preparação:
[ ] Node.js 18+ instalado
[ ] npm 9+ instalado
[ ] Git instalado
[ ] Projeto clonado

Instalação:
[ ] ./install-fast.sh executado
[ ] pnpm escolhido (opção 1)
[ ] Dependências instaladas com sucesso
[ ] Tempo de instalação < 2 minutos

Configuração:
[ ] .env.local criado
[ ] Variáveis de ambiente configuradas
[ ] npm run dev executado
[ ] http://localhost:3000 acessível

Verificação:
[ ] Site carregando corretamente
[ ] Sem erros no console
[ ] Hot reload funcionando
[ ] Pronto para desenvolver! 🎉
```

---

## 🎯 Próximos Passos

### Após instalação bem-sucedida:

1. **📖 Leia a documentação principal**
   - [README.md](README.md) - Visão geral
   - [START_HERE.md](START_HERE.md) - Por onde começar
   - [QUICK_START.md](QUICK_START.md) - Quick start

2. **🔧 Configure o projeto**
   - [CONFIGURACAO_ENV.md](CONFIGURACAO_ENV.md) - Variáveis de ambiente
   - [CONFIGURACAO_PRIVY.md](CONFIGURACAO_PRIVY.md) - Setup Privy

3. **🏗️ Entenda a arquitetura**
   - [ARQUITETURA_PROJETO.md](ARQUITETURA_PROJETO.md) - Arquitetura completa
   - [STACK_BASE_SANITY.md](STACK_BASE_SANITY.md) - Stack tecnológico

4. **💻 Comece a desenvolver**
   - [CHECKLIST_IMPLEMENTACAO.md](CHECKLIST_IMPLEMENTACAO.md) - Guia de implementação

---

## 📚 Documentação Relacionada

- **[INSTALL_RAPIDO.md](INSTALL_RAPIDO.md)** - Guia detalhado com benchmarks
- **[QUICK_START.md](QUICK_START.md)** - Quick start em 60 segundos
- **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Solução de problemas
- **[PERFORMANCE_COMPARISON.md](PERFORMANCE_COMPARISON.md)** - Comparações de performance
- **[README.md](README.md)** - Documentação geral do projeto

---

## 🆘 Precisa de Ajuda?

### Ordem de Resolução:

1. **📖 Consulte esta página** - Problemas comuns acima
2. **📋 Veja [TROUBLESHOOTING.md](TROUBLESHOOTING.md)** - Guia completo de troubleshooting
3. **💬 Abra uma issue** - [GitHub Issues](https://github.com/govinda777/GovindaSystems/issues)
4. **📧 Entre em contato** - contato@govindasystems.com

---

## 📊 Resumo Visual

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  🚀 INSTALAÇÃO RÁPIDA - GOVINDASYSTEMS              │
│                                                     │
│  1️⃣  git clone + cd GovindaSystems                  │
│  2️⃣  ./install-fast.sh (escolha opção 1)            │
│  3️⃣  cd src/web && cp .env.example .env.local       │
│  4️⃣  npm run dev                                    │
│  5️⃣  Abra http://localhost:3000                     │
│                                                     │
│  ⏱️  Tempo total: 2-3 minutos                       │
│  ⚡ Com pnpm: 30-60 segundos!                       │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

**Made with ⚡ by GovindaSystems Team**  
**Última atualização:** Outubro 2025


