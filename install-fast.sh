#!/bin/bash

# ⚡ Script de Instalação Rápida - GovindaSystems
# Otimizado para máxima velocidade de instalação
# Autor: GovindaSystems Dev Team
# Data: Outubro 2025

set -e  # Exit on error

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Função para print colorido
print_step() {
    echo -e "${BLUE}⚡${NC} $1"
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

print_info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Banner
clear
echo ""
echo "╔════════════════════════════════════════╗"
echo "║   ⚡ Instalação RÁPIDA - GovindaSystems ║"
echo "╚════════════════════════════════════════╝"
echo ""

# Verificar se está no diretório correto
if [ ! -f "vercel.json" ]; then
    print_error "Este script deve ser executado na raiz do projeto!"
    exit 1
fi

# Verificar Node.js
print_step "Verificando Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js não está instalado!"
    exit 1
fi

NODE_VERSION=$(node -v)
print_success "Node.js $NODE_VERSION detectado"

# Escolher gerenciador de pacotes
echo ""
print_info "Qual gerenciador de pacotes você quer usar?"
echo ""
echo "  1) 🚀 pnpm (RECOMENDADO - 2-3x mais rápido)"
echo "  2) ⚡ npm (padrão)"
echo "  3) 📦 yarn"
echo ""
read -p "Escolha (1-3, padrão=2): " -n 1 -r
echo ""

PACKAGE_MANAGER="npm"
INSTALL_CMD="npm install"
CACHE_CLEAR="npm cache clean --force"

case ${REPLY:-2} in
    1)
        if ! command -v pnpm &> /dev/null; then
            print_warning "pnpm não encontrado. Instalando..."
            npm install -g pnpm
        fi
        PACKAGE_MANAGER="pnpm"
        INSTALL_CMD="pnpm install --prefer-frozen-lockfile"
        CACHE_CLEAR="pnpm store prune"
        print_success "Usando pnpm (mais rápido!)"
        ;;
    2)
        PACKAGE_MANAGER="npm"
        INSTALL_CMD="npm install --prefer-offline"
        CACHE_CLEAR="npm cache clean --force"
        print_success "Usando npm"
        ;;
    3)
        if ! command -v yarn &> /dev/null; then
            print_error "yarn não está instalado!"
            exit 1
        fi
        PACKAGE_MANAGER="yarn"
        INSTALL_CMD="yarn install --prefer-offline"
        CACHE_CLEAR="yarn cache clean"
        print_success "Usando yarn"
        ;;
    *)
        print_error "Opção inválida"
        exit 1
        ;;
esac

# Timer de início
START_TIME=$(date +%s)

# Navegar para diretório web
print_step "Navegando para src/web..."
cd src/web

# Opção de limpar cache
echo ""
read -p "Limpar cache e node_modules? (n=mais rápido, y=instalação limpa) [n]: " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_step "Limpando cache e node_modules..."
    rm -rf node_modules .next .turbo
    eval $CACHE_CLEAR 2>/dev/null || true
    print_success "Cache limpo"
else
    print_info "Mantendo cache (instalação mais rápida)"
fi

# Instalar dependências
print_step "Instalando dependências com $PACKAGE_MANAGER..."
echo ""

# Executar instalação
if eval $INSTALL_CMD; then
    print_success "Dependências instaladas!"
else
    print_error "Erro na instalação de dependências"
    exit 1
fi

# Timer de fim
END_TIME=$(date +%s)
DURATION=$((END_TIME - START_TIME))

# Voltar para raiz
cd ../..

# Resumo
echo ""
echo "╔════════════════════════════════════════╗"
echo "║  ✅ Instalação Concluída!               ║"
echo "╚════════════════════════════════════════╝"
echo ""
print_success "Tempo total: ${DURATION} segundos"
echo ""

# Informações úteis
print_info "Próximos passos:"
echo ""
echo "  1️⃣  Configurar .env.local:"
echo "     cd src/web && cp .env.example .env.local"
echo ""
echo "  2️⃣  Iniciar desenvolvimento:"
echo "     cd src/web && $PACKAGE_MANAGER run dev"
echo ""
echo "  3️⃣  Build de produção:"
echo "     cd src/web && $PACKAGE_MANAGER run build"
echo ""

# Dicas de performance
echo "💡 DICAS DE PERFORMANCE:"
echo ""
if [ "$PACKAGE_MANAGER" = "npm" ]; then
    echo "  • Use pnpm para instalar até 3x mais rápido:"
    echo "    npm install -g pnpm"
    echo "    ./install-fast.sh (e escolha opção 1)"
    echo ""
fi
echo "  • O arquivo .npmrc já está otimizado"
echo "  • Cache está habilitado para próximas instalações"
echo "  • Use 'prefer-offline' para instalações offline"
echo ""

# Benchmark
if [ "$PACKAGE_MANAGER" = "pnpm" ]; then
    echo "📊 COMPARAÇÃO DE VELOCIDADE:"
    echo ""
    echo "  pnpm:  ${DURATION}s ⚡ (você está usando)"
    echo "  npm:   ~$((DURATION * 2))s"
    echo "  yarn:  ~$((DURATION * 2))s"
    echo ""
fi

print_success "Pronto para desenvolver! 🚀"
echo ""


