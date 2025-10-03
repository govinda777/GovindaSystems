#!/bin/bash

# 🧹 Script de Limpeza de Código - GovindaSystems
# Este script automatiza a limpeza de código não utilizado

set -e  # Para em caso de erro

echo ""
echo "🧹 ============================================="
echo "   LIMPEZA DE CÓDIGO - GOVINDASYSTEMS"
echo "============================================="
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Diretório base
BASE_DIR="$(pwd)"
WEB_DIR="$BASE_DIR/src/web"

# Verificar se estamos no diretório correto
if [ ! -d "$WEB_DIR" ]; then
    echo -e "${RED}❌ Erro: Diretório src/web não encontrado${NC}"
    echo "Execute este script da raiz do projeto GovindaSystems"
    exit 1
fi

echo -e "${BLUE}📂 Diretório de trabalho: $BASE_DIR${NC}"
echo ""

# 1. BACKUP
echo -e "${YELLOW}📦 PASSO 1: Criando backup...${NC}"
BRANCH_NAME="backup-cleanup-$(date +%Y%m%d-%H%M%S)"
git checkout -b "$BRANCH_NAME"
git add -A
git commit -m "Backup antes da limpeza de código - $(date)" || true
echo -e "${GREEN}✅ Backup criado no branch: $BRANCH_NAME${NC}"
echo ""

# 2. CRIAR ESTRUTURA DE ARQUIVO
echo -e "${YELLOW}📁 PASSO 2: Criando estrutura de pastas...${NC}"
mkdir -p "$BASE_DIR/archive/components"
mkdir -p "$BASE_DIR/archive/pages"
mkdir -p "$BASE_DIR/archive/assets"
mkdir -p "$WEB_DIR/components/dao"
mkdir -p "$WEB_DIR/components/dao/governance"
echo -e "${GREEN}✅ Estrutura criada${NC}"
echo ""

# 3. ARQUIVAR COMPONENTES NFT
echo -e "${YELLOW}📦 PASSO 3: Arquivando componentes NFT...${NC}"

if [ -f "$WEB_DIR/components/NFTCard.js" ]; then
    mv "$WEB_DIR/components/NFTCard.js" "$BASE_DIR/archive/components/"
    echo "  ↳ NFTCard.js arquivado"
fi

if [ -d "$WEB_DIR/components/nft" ]; then
    mv "$WEB_DIR/components/nft" "$BASE_DIR/archive/components/"
    echo "  ↳ Pasta nft/ arquivada"
fi

echo -e "${GREEN}✅ Componentes NFT arquivados${NC}"
echo ""

# 4. ARQUIVAR PÁGINAS
echo -e "${YELLOW}📦 PASSO 4: Arquivando páginas antigas...${NC}"

if [ -d "$WEB_DIR/pages/nfts" ]; then
    mv "$WEB_DIR/pages/nfts" "$BASE_DIR/archive/pages/"
    echo "  ↳ Pasta nfts/ arquivada"
fi

if [ -d "$WEB_DIR/pages/collections" ]; then
    mv "$WEB_DIR/pages/collections" "$BASE_DIR/archive/pages/"
    echo "  ↳ Pasta collections/ arquivada"
fi

if [ -f "$WEB_DIR/pages/crowdfund.js" ]; then
    mv "$WEB_DIR/pages/crowdfund.js" "$BASE_DIR/archive/pages/"
    echo "  ↳ crowdfund.js arquivado"
fi

echo -e "${GREEN}✅ Páginas arquivadas${NC}"
echo ""

# 5. MOVER COMPONENTES DAO
echo -e "${YELLOW}🔄 PASSO 5: Reorganizando componentes DAO...${NC}"

# Mover componentes de governança
if [ -f "$WEB_DIR/components/Governance.js" ]; then
    mv "$WEB_DIR/components/Governance.js" "$WEB_DIR/components/dao/"
    echo "  ↳ Governance.js movido para dao/"
fi

if [ -f "$WEB_DIR/components/Token.js" ]; then
    mv "$WEB_DIR/components/Token.js" "$WEB_DIR/components/dao/"
    echo "  ↳ Token.js movido para dao/"
fi

if [ -f "$WEB_DIR/components/TokenEcosystem.js" ]; then
    mv "$WEB_DIR/components/TokenEcosystem.js" "$WEB_DIR/components/dao/"
    echo "  ↳ TokenEcosystem.js movido para dao/"
fi

if [ -d "$WEB_DIR/components/governance" ]; then
    mv "$WEB_DIR/components/governance/"* "$WEB_DIR/components/dao/governance/" 2>/dev/null || true
    rmdir "$WEB_DIR/components/governance" 2>/dev/null || true
    echo "  ↳ Pasta governance/ movida para dao/"
fi

echo -e "${GREEN}✅ Componentes DAO reorganizados${NC}"
echo ""

# 6. REMOVER COMPONENTES NÃO USADOS
echo -e "${YELLOW}🗑️  PASSO 6: Removendo componentes não utilizados...${NC}"

REMOVED_COUNT=0

if [ -f "$WEB_DIR/components/Dework.js" ]; then
    rm "$WEB_DIR/components/Dework.js"
    echo "  ↳ Dework.js removido"
    ((REMOVED_COUNT++))
fi

if [ -f "$WEB_DIR/components/Dework.test.js" ]; then
    rm "$WEB_DIR/components/Dework.test.js"
    echo "  ↳ Dework.test.js removido"
    ((REMOVED_COUNT++))
fi

if [ -f "$WEB_DIR/components/Dework.integration.test.js" ]; then
    rm "$WEB_DIR/components/Dework.integration.test.js"
    echo "  ↳ Dework.integration.test.js removido"
    ((REMOVED_COUNT++))
fi

if [ -f "$WEB_DIR/components/Map.js" ]; then
    rm "$WEB_DIR/components/Map.js"
    echo "  ↳ Map.js removido"
    ((REMOVED_COUNT++))
fi

if [ -f "$WEB_DIR/static/dummyEvents.js" ]; then
    rm "$WEB_DIR/static/dummyEvents.js"
    echo "  ↳ static/dummyEvents.js removido"
    ((REMOVED_COUNT++))
fi

echo -e "${GREEN}✅ $REMOVED_COUNT arquivos removidos${NC}"
echo ""

# 7. REMOVER PÁGINAS MIGRADAS (ATENÇÃO: Só faça após migrar conteúdo!)
echo -e "${YELLOW}⚠️  PASSO 7: Páginas para remover APÓS migrar conteúdo...${NC}"
echo -e "${RED}   ATENÇÃO: Não execute esta parte até migrar o conteúdo!${NC}"
echo ""
echo "   As seguintes páginas devem ser removidas APÓS migrar conteúdo:"
echo "   - pages/governance.js → conteúdo para /services/dao-builder"
echo "   - pages/token-ecosystem.js → conteúdo para /services/dao-builder"
echo ""
echo "   Para remover manualmente depois:"
echo "   rm src/web/pages/governance.js"
echo "   rm src/web/pages/token-ecosystem.js"
echo ""

# 8. ANÁLISE DE DEPENDÊNCIAS
echo -e "${YELLOW}📊 PASSO 8: Analisando dependências...${NC}"
cd "$WEB_DIR"

if ! command -v npx &> /dev/null; then
    echo -e "${RED}❌ npx não encontrado. Instale Node.js${NC}"
    exit 1
fi

echo "   Executando depcheck..."
if npx depcheck --json > /tmp/depcheck.json 2>/dev/null; then
    echo -e "${GREEN}✅ Análise de dependências concluída${NC}"
    echo ""
    echo "   Veja o relatório completo em /tmp/depcheck.json"
    echo ""
    echo "   Dependências não usadas encontradas:"
    cat /tmp/depcheck.json | grep -o '"dependencies":\[.*\]' | sed 's/,/\n/g' || echo "   (Nenhuma)"
else
    echo -e "${YELLOW}⚠️  depcheck não instalado. Instalando...${NC}"
    npm install -g depcheck
    npx depcheck
fi

echo ""

# 9. VERIFICAR BUILD
echo -e "${YELLOW}🏗️  PASSO 9: Testando build...${NC}"
echo "   Executando npm run build..."

if npm run build > /tmp/build.log 2>&1; then
    echo -e "${GREEN}✅ Build executado com sucesso!${NC}"
else
    echo -e "${RED}❌ Build falhou! Veja o log em /tmp/build.log${NC}"
    echo ""
    echo "Últimas linhas do erro:"
    tail -20 /tmp/build.log
    echo ""
    echo -e "${YELLOW}Restaurando backup...${NC}"
    git reset --hard HEAD
    git checkout main || git checkout master
    exit 1
fi

echo ""

# 10. CRIAR DOCUMENTAÇÃO
echo -e "${YELLOW}📝 PASSO 10: Criando documentação de limpeza...${NC}"

cat > "$BASE_DIR/CHANGELOG_LIMPEZA.md" << 'EOF'
# Changelog de Limpeza

## Limpeza Executada em: $(date)

### Componentes Arquivados
- NFTCard.js → archive/components/
- nft/* → archive/components/nft/

### Páginas Arquivadas
- nfts/* → archive/pages/nfts/
- collections/* → archive/pages/collections/
- crowdfund.js → archive/pages/

### Componentes Removidos
- Dework.js (+ testes)
- Map.js
- static/dummyEvents.js

### Componentes Reorganizados
- Governance.js → components/dao/
- Token.js → components/dao/
- TokenEcosystem.js → components/dao/
- governance/* → components/dao/governance/

### Próximos Passos
1. Migrar conteúdo de pages/governance.js para services/dao-builder
2. Migrar conteúdo de pages/token-ecosystem.js para services/dao-builder
3. Remover pages/governance.js
4. Remover pages/token-ecosystem.js
5. Revisar dependências não usadas (ver depcheck)
6. Atualizar imports onde necessário

### Status
- [x] Arquivamento concluído
- [x] Reorganização concluída
- [x] Remoção de código não usado
- [ ] Migração de conteúdo (manual)
- [ ] Remoção de páginas antigas (após migração)
- [ ] Limpeza de dependências (manual)
EOF

echo -e "${GREEN}✅ Documentação criada: CHANGELOG_LIMPEZA.md${NC}"
echo ""

# 11. SUMÁRIO
echo ""
echo -e "${GREEN}🎉 ============================================="
echo "   LIMPEZA CONCLUÍDA COM SUCESSO!"
echo "=============================================${NC}"
echo ""
echo "📊 Resumo:"
echo "  ✅ Backup criado no branch: $BRANCH_NAME"
echo "  ✅ Componentes NFT arquivados"
echo "  ✅ Páginas antigas arquivadas"
echo "  ✅ Componentes DAO reorganizados"
echo "  ✅ $REMOVED_COUNT arquivos removidos"
echo "  ✅ Build testado com sucesso"
echo ""
echo "📝 Próximos passos MANUAIS:"
echo "  1. Revisar CHANGELOG_LIMPEZA.md"
echo "  2. Migrar conteúdo das páginas governance e token-ecosystem"
echo "  3. Remover páginas antigas após migração"
echo "  4. Revisar dependências com: cd src/web && npx depcheck"
echo "  5. Atualizar imports onde necessário"
echo "  6. Commit das mudanças: git add -A && git commit -m 'Limpeza de código'"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANTE: Teste tudo antes de fazer merge!${NC}"
echo ""
echo "Para reverter caso algo dê errado:"
echo "  git checkout main"
echo "  git branch -D $BRANCH_NAME"
echo ""

# Voltar ao diretório original
cd "$BASE_DIR"

exit 0


