# 📋 Resumo de Instalação - GovindaSystems

**Referência rápida para instalação do projeto**

---

## 🎯 Qual Método de Instalação Usar?

```
┌─────────────────────────────────────────────────────────────┐
│  VOCÊ É...                    →  USE ESTE MÉTODO            │
├─────────────────────────────────────────────────────────────┤
│  🆕 Novo no projeto           →  ./install-fast.sh (pnpm)   │
│  ⚡ Quer velocidade máxima    →  ./install-fast.sh (pnpm)   │
│  🔧 Desenvolvedor experiente  →  pnpm install               │
│  📚 Quer entender detalhes    →  npm install (manual)       │
│  🐛 Tendo problemas           →  TROUBLESHOOTING.md         │
└─────────────────────────────────────────────────────────────┘
```

---

## ⚡ Comandos de Instalação por Método

### 🚀 Método 1: Script Automático (RECOMENDADO)

```bash
./install-fast.sh
# Escolha: 1 (pnpm)
# Limpar cache: n (mais rápido)
```

**Tempo:** 30-60 segundos ⚡

---

### 🔧 Método 2: pnpm Manual

```bash
npm install -g pnpm
cd src/web
pnpm install
```

**Tempo:** 1-2 minutos ⚡

---

### 📦 Método 3: npm Manual

```bash
cd src/web
npm install --prefer-offline
```

**Tempo:** 2-4 minutos 🐌

---

## 📚 Documentação de Instalação Disponível

| Arquivo | Propósito | Quando Ler |
|---------|-----------|------------|
| **[COMO_INSTALAR.md](COMO_INSTALAR.md)** | **Guia definitivo completo** | **Primeira instalação** ✅ |
| [QUICK_START.md](QUICK_START.md) | Instalação em 60 segundos | Pressa |
| [INSTALL_RAPIDO.md](INSTALL_RAPIDO.md) | Benchmarks detalhados | Quer otimizar |
| [TROUBLESHOOTING.md](TROUBLESHOOTING.md) | Solução de problemas | Erro na instalação |
| [PERFORMANCE_COMPARISON.md](PERFORMANCE_COMPARISON.md) | Comparações de performance | Curiosidade técnica |

---

## 🔄 Fluxo de Instalação Completo

```
1. Pré-requisitos
   ├─ Node.js 18+ instalado?     [ ]
   ├─ npm 9+ instalado?           [ ]
   └─ Git instalado?              [ ]

2. Clone
   └─ git clone + cd GovindaSystems  [ ]

3. Instalação
   ├─ ./install-fast.sh           [ ]
   └─ Escolher pnpm (opção 1)     [ ]

4. Configuração
   ├─ cd src/web                  [ ]
   ├─ cp .env.example .env.local  [ ]
   └─ Editar .env.local           [ ]

5. Execução
   ├─ npm run dev (ou pnpm dev)   [ ]
   └─ Abrir http://localhost:3000 [ ]

6. Verificação
   ├─ Site carregou?              [ ]
   ├─ Sem erros no console?       [ ]
   └─ Hot reload funciona?        [ ]

✅ PRONTO PARA DESENVOLVER! 🎉
```

---

## 📊 Comparação Rápida de Performance

| Método | Primeira Instalação | Com Cache | Espaço |
|--------|-------------------|-----------|--------|
| **pnpm** | 30-60s ⚡⚡⚡ | 10-20s | 50MB |
| npm otimizado | 1-2min ⚡⚡ | 40-60s | 200MB |
| npm padrão | 3-4min ⚡ | 1-2min | 200MB |
| yarn | 2-3min ⚡⚡ | 50-70s | 180MB |

**Recomendação:** Use **pnpm** via `./install-fast.sh` (opção 1)

---

## 🎯 Comandos Mais Usados

```bash
# Instalação
./install-fast.sh              # Instalação otimizada
pnpm install                   # Com pnpm
npm install                    # Com npm

# Desenvolvimento
npm run dev                    # Iniciar dev server
npm run build                  # Build produção
npm run start                  # Iniciar prod server
npm run lint                   # Linter
npm test                       # Testes

# Limpeza
npm run clean                  # Limpar build
npm run clean:all              # Limpar tudo + cache

# Verificação
node --version                 # Versão Node
npm --version                  # Versão npm
pnpm --version                 # Versão pnpm
```

---

## 🐛 Problemas Comuns - Solução Rápida

| Problema | Solução |
|----------|---------|
| Permission denied | `chmod +x install-fast.sh` |
| Node version old | Instalar Node 18+ |
| Install muito lento | Usar pnpm |
| Port 3000 em uso | `PORT=3001 npm run dev` |
| Module not found | `rm -rf node_modules && npm install` |
| Build falha memória | `export NODE_OPTIONS=--max_old_space_size=4096` |

📖 **Ver mais soluções:** [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 🔑 Variáveis de Ambiente Principais

```env
# .env.local (criar após instalação)

# Privy (Auth + Wallet + Payments)
NEXT_PUBLIC_PRIVY_APP_ID=cmaqqs10k00onl20md0g7c7bg

# Thirdweb (Blockchain)
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=seu_client_id

# Sanity CMS (Opcional)
NEXT_PUBLIC_SANITY_PROJECT_ID=seu_project_id
```

📖 **Ver todas:** [CONFIGURACAO_ENV.md](CONFIGURACAO_ENV.md)

---

## 🗂️ Estrutura do Projeto (Simplificada)

```
GovindaSystems/
├── src/
│   └── web/                 ← Instalar aqui (cd src/web)
│       ├── pages/           ← Rotas Next.js
│       ├── components/      ← Componentes React
│       ├── styles/          ← CSS/Tailwind
│       ├── public/          ← Assets estáticos
│       ├── package.json     ← Dependências
│       └── .env.local       ← Config (criar)
│
├── install-fast.sh          ← Script de instalação ⚡
├── package.json             ← Monorepo config
├── pnpm-workspace.yaml      ← pnpm workspace
├── .npmrc                   ← Otimizações npm/pnpm
│
└── Docs/                    ← Documentação
    ├── COMO_INSTALAR.md     ← Guia definitivo ✅
    ├── QUICK_START.md       ← Quick start
    ├── INSTALL_RAPIDO.md    ← Benchmarks
    ├── TROUBLESHOOTING.md   ← Problemas
    └── README.md            ← Visão geral
```

---

## 💡 Dicas Pro

### 1. Use pnpm para Máxima Velocidade
```bash
npm install -g pnpm
./install-fast.sh  # escolha opção 1
```
**Ganho:** 2-3x mais rápido

### 2. Mantenha o Cache
```bash
# NÃO limpe cache entre instalações
# Apenas delete se houver problemas
```
**Ganho:** 50-70% mais rápido

### 3. Use Offline Mode (após primeira instalação)
```bash
pnpm install --offline
# ou
npm install --prefer-offline
```
**Ganho:** Funciona sem internet

### 4. Configure Aliases
```bash
# Adicione ao ~/.bashrc ou ~/.zshrc
alias gs-install='./install-fast.sh'
alias gs-dev='cd src/web && npm run dev'
alias gs-clean='npm run clean:all'
```

### 5. Monitore Performance
```bash
# Ver tempo de instalação
time pnpm install

# Ver tamanho
du -sh src/web/node_modules
```

---

## 🎓 Para Iniciantes

### Primeira Vez Instalando?

1. **Leia:** [COMO_INSTALAR.md](COMO_INSTALAR.md) (5 minutos)
2. **Execute:** `./install-fast.sh` (escolha opção 1)
3. **Configure:** `cp .env.example .env.local`
4. **Rode:** `npm run dev`
5. **Acesse:** http://localhost:3000

### Próximos Passos Após Instalação

1. **Documentação geral:** [README.md](README.md)
2. **Por onde começar:** [START_HERE.md](START_HERE.md)
3. **Arquitetura:** [ARQUITETURA_PROJETO.md](ARQUITETURA_PROJETO.md)
4. **Stack técnico:** [STACK_BASE_SANITY.md](STACK_BASE_SANITY.md)

---

## 🚀 Para Desenvolvedores Experientes

```bash
# Instalação rápida
npm i -g pnpm
cd src/web && pnpm i

# Config
cp .env.example .env.local

# Dev
pnpm dev

# Build
pnpm build

# Prod
pnpm start
```

**Arquitetura:**
- **Framework:** Next.js 14 (App Router)
- **UI:** React 18 + Tailwind CSS
- **Auth:** Privy
- **CMS:** Sanity (opcional)
- **Deploy:** Vercel

---

## 📞 Suporte

### Ordem de Resolução:

1. 📖 [COMO_INSTALAR.md](COMO_INSTALAR.md) - Seção "Problemas Comuns"
2. 🐛 [TROUBLESHOOTING.md](TROUBLESHOOTING.md) - Guia completo
3. 💬 [GitHub Issues](https://github.com/govinda777/GovindaSystems/issues)
4. 📧 contato@govindasystems.com

---

## ✅ Checklist Resumido

```
[ ] Node.js 18+ instalado
[ ] ./install-fast.sh executado (pnpm)
[ ] .env.local configurado
[ ] npm run dev rodando
[ ] http://localhost:3000 funcionando
[ ] Pronto para desenvolver! 🎉
```

---

**Made with ⚡ by GovindaSystems Team**  
**Última atualização:** Outubro 2025


