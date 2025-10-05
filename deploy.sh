#!/bin/bash

# 🚀 Script de Deploy - GovindaSystems
# Autor: GovindaSystems Dev Team
# Data: Outubro 2025

set -e  # Exit on error

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para print colorido
print_step() {
    echo -e "${BLUE}==>${NC} $1"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Banner
echo ""
echo "╔════════════════════════════════════════╗"
echo "║   🚀 GovindaSystems Deploy Script      ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Verificar se está no diretório correto
if [ ! -f "vercel.json" ]; then
    print_error "Este script deve ser executado na raiz do projeto!"
    exit 1
fi

print_success "Diretório correto detectado"

# 1. Verificar Git
print_step "Verificando Git..."
if ! command -v git &> /dev/null; then
    print_error "Git não está instalado!"
    exit 1
fi

# Verificar branch atual
CURRENT_BRANCH=$(git branch --show-current)
print_success "Branch atual: $CURRENT_BRANCH"

# Verificar se há mudanças não commitadas
if ! git diff-index --quiet HEAD --; then
    print_warning "Há mudanças não commitadas"
    read -p "Deseja commitar agora? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        read -p "Mensagem do commit: " COMMIT_MSG
        git commit -m "$COMMIT_MSG"
        print_success "Commit realizado"
    fi
fi

# 2. Verificar Node.js
print_step "Verificando Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js não está instalado!"
    exit 1
fi

NODE_VERSION=$(node -v)
print_success "Node.js $NODE_VERSION detectado"

# Verificar versão mínima
REQUIRED_VERSION="18.0.0"
CURRENT_VERSION=$(node -v | cut -d'v' -f2)

if [ "$(printf '%s\n' "$REQUIRED_VERSION" "$CURRENT_VERSION" | sort -V | head -n1)" != "$REQUIRED_VERSION" ]; then
    print_error "Node.js >= 18.0.0 é necessário!"
    exit 1
fi

# 3. Verificar npm
print_step "Verificando npm..."
if ! command -v npm &> /dev/null; then
    print_error "npm não está instalado!"
    exit 1
fi

NPM_VERSION=$(npm -v)
print_success "npm $NPM_VERSION detectado"

# 4. Navegar para diretório web
print_step "Navegando para src/web..."
cd src/web

# 5. Verificar .env.local
print_step "Verificando variáveis de ambiente..."
if [ ! -f ".env.local" ]; then
    print_warning "Arquivo .env.local não encontrado!"
    print_warning "Criando arquivo de exemplo..."
    
    cat > .env.local << EOF
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
EOF
    
    print_warning "Arquivo .env.local criado. CONFIGURE as variáveis antes de continuar!"
    read -p "Pressione Enter após configurar..."
fi

# Verificar se PRIVY_SECRET está configurado
if ! grep -q "PRIVY_SECRET=.\+" .env.local; then
    print_error "PRIVY_SECRET não está configurado em .env.local!"
    print_warning "Obtenha em: https://dashboard.privy.io"
    exit 1
fi

print_success "Variáveis de ambiente OK"

# 6. Perguntar sobre limpeza de cache
print_step "Limpar cache e node_modules?"
echo "  y = Instalação limpa (mais lento)"
echo "  n = Manter cache (2-3x mais rápido)"
read -p "Limpar cache? (y/n, padrão=n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_step "Limpando cache..."
    rm -rf node_modules .next .turbo
    
    # Limpar cache do gerenciador de pacotes
    if command -v pnpm &> /dev/null; then
        pnpm store prune || true
    fi
    npm cache clean --force || true
    
    print_success "Cache limpo"
else
    print_success "Mantendo cache (instalação mais rápida)"
fi

# 7. Instalar dependências
print_step "Instalando dependências..."

# Detectar gerenciador de pacotes disponível
if command -v pnpm &> /dev/null; then
    print_success "Usando pnpm (mais rápido)"
    pnpm install --prefer-frozen-lockfile
elif command -v yarn &> /dev/null; then
    print_success "Usando yarn"
    yarn install --prefer-offline
else
    print_success "Usando npm"
    npm install --prefer-offline --no-audit --no-fund
fi

print_success "Dependências instaladas"

# 8. Rodar linter
print_step "Verificando código com linter..."
if npm run lint; then
    print_success "Linter passou"
else
    print_warning "Linter encontrou problemas (continuando...)"
fi

# 9. Rodar testes
print_step "Executando testes..."
if npm test -- --passWithNoTests; then
    print_success "Testes passaram"
else
    print_warning "Alguns testes falharam (continuando...)"
fi

# 10. Build de produção
print_step "Criando build de produção..."
if npm run build; then
    print_success "Build criado com sucesso!"
else
    print_error "Build falhou!"
    exit 1
fi

# 11. Perguntar sobre deploy
echo ""
print_step "Build completo! Deseja fazer deploy?"
echo ""
echo "Opções:"
echo "  1) Deploy Automático (Git Push)"
echo "  2) Apenas testar localmente"
echo "  3) Cancelar"
echo ""
read -p "Escolha (1-3): " -n 1 -r
echo ""

cd ../..  # Voltar para raiz

case $REPLY in
    1)
        print_step "Fazendo deploy..."
        
        # Verificar se está em main/master
        if [[ "$CURRENT_BRANCH" != "main" ]] && [[ "$CURRENT_BRANCH" != "master" ]]; then
            print_warning "Você não está em main/master"
            read -p "Deseja fazer merge para main? (y/n) " -n 1 -r
            echo
            if [[ $REPLY =~ ^[Yy]$ ]]; then
                git checkout main 2>/dev/null || git checkout master
                git merge $CURRENT_BRANCH
                print_success "Merge realizado"
            fi
        fi
        
        # Push para produção
        print_step "Enviando para repositório..."
        git push origin $(git branch --show-current)
        
        print_success "Deploy iniciado!"
        echo ""
        echo "╔════════════════════════════════════════╗"
        echo "║  ✅ Deploy Enviado!                     ║"
        echo "╚════════════════════════════════════════╝"
        echo ""
        echo "Acompanhe em: https://vercel.com/deployments"
        echo ""
        ;;
    2)
        print_step "Iniciando servidor local..."
        cd src/web
        npm run start
        ;;
    3)
        print_warning "Deploy cancelado"
        exit 0
        ;;
    *)
        print_error "Opção inválida"
        exit 1
        ;;
esac

echo ""
print_success "Script concluído!"
echo ""

