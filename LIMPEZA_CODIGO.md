# 🧹 Guia de Limpeza de Código - GovindaSystems

## ⚠️ IMPORTANTE: ZERO CÓDIGO NÃO UTILIZADO

Este documento lista **TUDO** que deve ser **REMOVIDO** ou **ARQUIVADO** para manter o código limpo, performático e manutenível.

---

## 📁 ARQUIVOS A REMOVER COMPLETAMENTE

### Componentes React (src/web/components/)

#### ❌ REMOVER ESTES COMPONENTES:

```bash
# Componentes relacionados a DAO/Blockchain (mover conteúdo para DAO Builder)
src/web/components/Governance.js          # Conteúdo vai para /services/dao-builder
src/web/components/Token.js               # Conteúdo vai para /services/dao-builder
src/web/components/TokenEcosystem.js      # Conteúdo vai para /services/dao-builder
src/web/components/Map.js                 # Não será mais usado

# Componentes de NFT (arquivar - não remover, apenas mover)
src/web/components/NFTCard.js             # Mover para /archive/
src/web/components/nft/                   # Mover pasta inteira para /archive/
  ├── GeneralDetails.js
  ├── ItemActivity.js
  ├── NFTImage.js
  ├── Purchase.js
  └── itemActivity/EventItem.js

# Integração Dework
src/web/components/Dework.js              # Remover completamente
src/web/components/Dework.test.js         # Remover completamente
src/web/components/Dework.integration.test.js  # Remover completamente
```

#### ✅ MANTER ESTES COMPONENTES (serão atualizados):

```bash
src/web/components/Header.js              # Atualizar menu
src/web/components/Footer.js              # Atualizar links
src/web/components/Hero.js                # Atualizar conteúdo
src/web/components/About.js               # Atualizar conteúdo
src/web/components/services/Services.js   # Atualizar serviços
src/web/components/ThemeSwitcher.js       # Manter
src/web/components/ThemeToggle.tsx        # Manter
```

#### ⚠️ MOVER PARA DAO BUILDER (não deletar, mover):

```bash
# Criar diretório específico
src/web/components/dao/
  ├── Governance.js                       # Mover de /components/
  ├── Token.js                            # Mover de /components/
  ├── TokenEcosystem.js                   # Mover de /components/
  └── governance/                         # Mover pasta inteira
      ├── ProposalSubmission.js
      ├── ReputationSystem.js
      └── VotingSystem.js
```

### Páginas (src/web/pages/)

#### ❌ REMOVER/ARQUIVAR ESTAS PÁGINAS:

```bash
# Páginas de NFT - ARQUIVAR (mover para /archive/)
src/web/pages/nfts/[nftId].js            # Arquivar
src/web/pages/collections/[collectionId].js  # Arquivar

# Páginas de DAO - MIGRAR CONTEÚDO
src/web/pages/governance.js              # Conteúdo → /services/dao-builder, depois DELETAR
src/web/pages/token-ecosystem.js         # Conteúdo → /services/dao-builder, depois DELETAR
src/web/pages/crowdfund.js               # Arquivar ou deletar

# Página de projetos - ATUALIZAR (não remover)
src/web/pages/projects.js                # Atualizar para projetos AI
```

#### ✅ CRIAR ESTAS NOVAS PÁGINAS:

```bash
src/web/pages/services/
  ├── ai-customer-support.js             # CRIAR
  ├── social-media-automation.js         # CRIAR
  ├── workflow-automation.js             # CRIAR
  ├── seo-agent.js                       # CRIAR
  └── dao-builder.js                     # CRIAR (migrar conteúdo de governance + token)
```

### Assets (src/web/assets/)

#### ❌ AVALIAR E REMOVER SE NÃO USADOS:

```bash
# Verificar se estas imagens ainda são usadas
src/web/assets/consultoria.png           # Verificar uso → Remover se não usado
src/web/assets/desenvolvimento.png        # Verificar uso → Remover se não usado
src/web/assets/marketing_digital.png      # Verificar uso → Remover se não usado
src/web/assets/mobile_web.png             # Verificar uso → Remover se não usado
src/web/assets/solucoes.png               # Verificar uso → Remover se não usado

# Imagens hero antigas
src/web/assets/hero_1.png                 # Verificar uso
src/web/assets/hero_2.png                 # Verificar uso
```

#### ✅ ADICIONAR NOVOS ASSETS:

```bash
src/web/assets/
  ├── ai-customer-support.png            # CRIAR
  ├── social-media-automation.png        # CRIAR
  ├── workflow-automation.png            # CRIAR
  ├── seo-agent.png                      # CRIAR
  ├── dao-builder.png                    # CRIAR
  └── hero-ai.png                        # CRIAR (nova hero)
```

### Context (src/web/context/)

#### ✅ MANTER:

```bash
src/web/context/ThemeContext.js          # Manter
```

#### ⚠️ AVALIAR NECESSIDADE:

Se houver contextos relacionados a Web3/DAO que não serão usados, remover.

### Lib (src/web/lib/)

#### ✅ MANTER:

```bash
src/web/lib/sanityClient.js              # Manter
src/web/lib/theme.js                     # Manter
```

#### ❌ REMOVER SE EXISTIR:

```bash
src/web/lib/blockchain.js                # Remover se existir (mover para DAO)
src/web/lib/nft.js                       # Remover se existir (arquivar)
```

### Static (src/web/static/)

#### ❌ REMOVER:

```bash
src/web/static/dummyEvents.js            # Remover completamente
```

---

## 📦 DEPENDÊNCIAS NPM A REMOVER

### Verificar package.json e Remover Não Utilizados

```bash
# Navegar para diretório web
cd src/web

# Analisar dependências não utilizadas
npx depcheck

# Remover dependências identificadas como não utilizadas
```

### Dependências Provavelmente Não Usadas Após Migração:

```json
{
  "dependencies_to_remove": [
    // Avaliar estas dependências:
    "@magic-sdk/provider",           // Se não usar Magic, remover
    "magic-sdk",                     // Se não usar Magic, remover
    
    // Se zksync não for usado no DAO Builder:
    "zksync-ethers",
    
    // Avaliar necessidade de todos os Safe:
    "@safe-global/protocol-kit",
    "@safe-global/types-kit"
  ]
}
```

### ⚠️ MANTER ESTAS (mesmo para DAO Builder):

```json
{
  "dependencies_to_keep": [
    "@thirdweb-dev/react",           // Para DAO Builder
    "@thirdweb-dev/sdk",             // Para DAO Builder
    "@coinbase/wallet-sdk",          // Para DAO Builder
    "@sanity/client",                // Para CMS
    "axios",                         // Útil para APIs
    "react-hot-toast",               // Para notificações
    "next",                          // Framework
    "react",                         // Framework
    "react-bootstrap",               // UI
    "tailwindcss"                    // Styles
  ]
}
```

### ✅ ADICIONAR ESTAS:

```bash
npm install @privy-io/react-auth @privy-io/wagmi
npm install openai langchain
npm install @anthropic-ai/sdk
npm install @sendgrid/mail
npm install react-hook-form zod @hookform/resolvers
npm install framer-motion
```

### Após Adicionar, Remover Não Usadas:

```bash
# Executar análise
npx depcheck

# Remover conforme sugestões
npm uninstall [pacote-nao-usado]
```

---

## 🗂️ CRIAR ESTRUTURA DE ARQUIVO PARA ORGANIZAÇÃO

### Criar Pasta Archive

```bash
# Criar pasta para arquivar (não deletar) código antigo
mkdir -p archive/components
mkdir -p archive/pages
mkdir -p archive/assets

# Mover (não deletar) componentes antigos
mv src/web/components/NFTCard.js archive/components/
mv src/web/components/nft/ archive/components/
mv src/web/pages/nfts/ archive/pages/
mv src/web/pages/collections/ archive/pages/
mv src/web/pages/crowdfund.js archive/pages/
```

### Criar Pasta DAO (para código DAO)

```bash
# Criar estrutura específica para DAO Builder
mkdir -p src/web/components/dao
mkdir -p src/web/components/dao/governance

# Mover componentes de governança
mv src/web/components/governance/ src/web/components/dao/
mv src/web/components/Governance.js src/web/components/dao/
mv src/web/components/Token.js src/web/components/dao/
mv src/web/components/TokenEcosystem.js src/web/components/dao/
```

---

## 🔍 CHECKLIST DE LIMPEZA POR FASE

### FASE 1: Análise (1 dia)

- [ ] Executar `npx depcheck` para ver dependências não usadas
- [ ] Procurar imports não utilizados em cada arquivo
- [ ] Identificar componentes que ninguém importa
- [ ] Listar assets não referenciados
- [ ] Criar lista final de remoção

### FASE 2: Backup (1 hora)

- [ ] Criar branch de backup: `git checkout -b backup-before-cleanup`
- [ ] Commit: `git commit -am "Backup antes da limpeza"`
- [ ] Push: `git push origin backup-before-cleanup`

### FASE 3: Arquivamento (2 horas)

- [ ] Criar pasta `archive/`
- [ ] Mover (não deletar) código NFT para archive
- [ ] Mover código de crowdfund para archive
- [ ] Documentar o que foi arquivado e porquê

### FASE 4: Reorganização (3 horas)

- [ ] Criar pasta `src/web/components/dao/`
- [ ] Mover componentes DAO para lá
- [ ] Atualizar imports onde necessário
- [ ] Testar que nada quebrou

### FASE 5: Remoção de Componentes (2 horas)

- [ ] Deletar `Dework.js` e testes relacionados
- [ ] Deletar `Map.js`
- [ ] Deletar `static/dummyEvents.js`
- [ ] Verificar se nada mais importa esses arquivos
- [ ] Remover imports desses componentes de `index.js`

### FASE 6: Remoção de Páginas (1 hora)

- [ ] Deletar `governance.js` (após migrar conteúdo)
- [ ] Deletar `token-ecosystem.js` (após migrar conteúdo)
- [ ] Verificar que não há links quebrados
- [ ] Atualizar sitemap

### FASE 7: Limpeza de Assets (1 hora)

- [ ] Identificar imagens não usadas
- [ ] Deletar ou mover para archive
- [ ] Otimizar imagens que serão mantidas

### FASE 8: Limpeza de Dependências (1 hora)

- [ ] Remover dependências não usadas do package.json
- [ ] Executar `npm prune`
- [ ] Executar `npm install` para atualizar lock file
- [ ] Testar build: `npm run build`

### FASE 9: Limpeza de Imports (2 horas)

- [ ] Usar ferramenta para encontrar imports não usados
- [ ] Remover imports não utilizados
- [ ] Organizar imports (ordem alfabética)
- [ ] Executar linter: `npm run lint`

### FASE 10: Testes Finais (2 horas)

- [ ] Build sem erros: `npm run build`
- [ ] Dev server funcionando: `npm run dev`
- [ ] Todas as páginas carregando
- [ ] Nenhum console.error no browser
- [ ] Lighthouse score mantido ou melhorado

---

## 🛠️ FERRAMENTAS PARA AJUDAR

### 1. Depcheck (Dependências Não Usadas)

```bash
# Instalar
npm install -g depcheck

# Executar
cd src/web
depcheck

# Analisar resultado e remover
```

### 2. ESLint (Imports Não Usados)

```bash
# Adicionar regra ao .eslintrc
{
  "rules": {
    "no-unused-vars": "error",
    "unused-imports/no-unused-imports": "error"
  }
}

# Executar
npm run lint
```

### 3. Webpack Bundle Analyzer (Tamanho do Bundle)

```bash
# Instalar
npm install --save-dev @next/bundle-analyzer

# Configurar next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  // ... resto da config
})

# Executar análise
ANALYZE=true npm run build

# Ver o que está ocupando espaço no bundle
```

### 4. Find Dead Code (Código Morto)

```bash
# Usando grep para encontrar arquivos não importados
cd src/web/components
for file in *.js; do
  if ! grep -r "import.*$file" ../pages ../components; then
    echo "$file não é importado em lugar nenhum"
  fi
done
```

### 5. VS Code Extension

- **ES Lint** - Mostra imports não usados
- **Unused Modules** - Encontra arquivos não importados
- **Import Cost** - Mostra tamanho de cada import

---

## 📊 ANTES E DEPOIS

### Estimativa de Redução:

```
ANTES da Limpeza:
├─ Bundle Size: ~2.5 MB
├─ Dependencies: 38 pacotes
├─ Components: 45 arquivos
├─ Pages: 12 páginas
└─ Assets: 25 imagens

DEPOIS da Limpeza:
├─ Bundle Size: ~1.2 MB (-52%)
├─ Dependencies: 28 pacotes (-26%)
├─ Components: 30 arquivos (-33%)
├─ Pages: 8 páginas (-33%)
└─ Assets: 15 imagens (-40%)

Benefícios:
✅ Build 40% mais rápido
✅ Deploy 50% mais rápido
✅ Código mais fácil de manter
✅ Lighthouse score +10-15 pontos
✅ First Load JS reduzido
```

---

## ⚠️ REGRAS IMPORTANTES

### 🔴 NUNCA DELETAR SEM VERIFICAR

Antes de deletar qualquer arquivo:

1. ✅ Procurar por imports: `grep -r "NomeDoComponente" src/`
2. ✅ Procurar por referências: `grep -r "nome-do-arquivo" src/`
3. ✅ Testar build: `npm run build`
4. ✅ Commit antes de deletar: `git commit -am "Backup before delete"`

### 🟡 ARQUIVAR, NÃO DELETAR (pelo menos inicialmente)

- NFT components → archive/
- Crowdfund → archive/
- Páginas antigas → archive/

**Razão:** Se precisar recuperar algo, está disponível.

### 🟢 PODE DELETAR COM SEGURANÇA

- Arquivos de teste de componentes deletados
- Comentários de código
- Console.logs
- Código comentado
- Imports não utilizados

---

## 📝 DOCUMENTAÇÃO DE REMOÇÃO

### Criar Arquivo: CHANGELOG_LIMPEZA.md

```markdown
# Changelog de Limpeza

## Removido em [Data]

### Componentes Deletados:
- Dework.js - Integração não mais utilizada
- Map.js - Substituído por HowItWorks

### Componentes Arquivados:
- NFTCard.js → archive/components/
- nft/* → archive/components/nft/

### Páginas Deletadas:
- governance.js - Conteúdo migrado para /services/dao-builder
- token-ecosystem.js - Conteúdo migrado para /services/dao-builder

### Dependências Removidas:
- @magic-sdk/provider - Substituído por Privy
- magic-sdk - Substituído por Privy

### Assets Removidos:
- hero_1.png - Não utilizado
- hero_2.png - Não utilizado
```

---

## 🎯 CHECKLIST FINAL DE LIMPEZA

### Código
- [ ] Zero imports não utilizados
- [ ] Zero variáveis declaradas mas não usadas
- [ ] Zero funções definidas mas não chamadas
- [ ] Zero componentes não importados em lugar nenhum
- [ ] Zero console.logs no código de produção
- [ ] Zero código comentado (exceto comentários de documentação)

### Dependências
- [ ] Zero dependências não utilizadas (verificar com depcheck)
- [ ] Todas as dependências estão atualizadas
- [ ] package.json limpo e organizado
- [ ] package-lock.json atualizado

### Assets
- [ ] Zero imagens não referenciadas
- [ ] Todas as imagens otimizadas (WebP quando possível)
- [ ] Alt text em todas as imagens
- [ ] Tamanhos apropriados (não usar 4K quando 1080p basta)

### Páginas
- [ ] Zero páginas órfãs (sem links para elas)
- [ ] Todas as páginas têm meta tags
- [ ] Sitemap atualizado
- [ ] Robots.txt atualizado
- [ ] 404 page funcionando

### Performance
- [ ] Bundle size < 200 KB (first load)
- [ ] Lighthouse Performance > 90
- [ ] Zero warnings no build
- [ ] Zero errors no console

---

## 🚀 AUTOMAÇÃO DA LIMPEZA

### Script: cleanup.sh

```bash
#!/bin/bash

echo "🧹 Iniciando limpeza de código..."

# 1. Criar pasta archive se não existir
echo "📁 Criando estrutura de arquivos..."
mkdir -p archive/{components,pages,assets}

# 2. Mover arquivos para archive
echo "📦 Arquivando componentes antigos..."
mv src/web/components/NFTCard.js archive/components/ 2>/dev/null
mv src/web/components/nft archive/components/ 2>/dev/null
mv src/web/pages/nfts archive/pages/ 2>/dev/null
mv src/web/pages/collections archive/pages/ 2>/dev/null

# 3. Remover arquivos seguros de deletar
echo "🗑️  Removendo arquivos não utilizados..."
rm -f src/web/components/Dework.js
rm -f src/web/components/Dework.test.js
rm -f src/web/components/Dework.integration.test.js
rm -f src/web/components/Map.js
rm -f src/web/static/dummyEvents.js

# 4. Analisar dependências
echo "📊 Analisando dependências..."
cd src/web
npx depcheck

# 5. Verificar imports não usados
echo "🔍 Verificando imports..."
npm run lint

# 6. Build test
echo "🏗️  Testando build..."
npm run build

echo "✅ Limpeza concluída!"
```

### Executar:

```bash
chmod +x cleanup.sh
./cleanup.sh
```

---

## 📋 TEMPLATE DE PR DE LIMPEZA

### Pull Request: Limpeza de Código

```markdown
## 🧹 Limpeza de Código - Migração para AI

### Objetivo
Remover código não utilizado após migração de foco de Blockchain para AI.

### Arquivos Removidos
- [ ] `Dework.js` e testes
- [ ] `Map.js`
- [ ] `static/dummyEvents.js`
- [ ] `governance.js` (conteúdo migrado)
- [ ] `token-ecosystem.js` (conteúdo migrado)

### Arquivos Arquivados
- [ ] Componentes NFT → `archive/components/nft/`
- [ ] Páginas NFT → `archive/pages/nfts/`
- [ ] Crowdfund → `archive/pages/`

### Dependências Removidas
- [ ] `@magic-sdk/provider`
- [ ] `magic-sdk`
- [ ] Outras (listar)

### Checklist
- [ ] Build sem erros
- [ ] Todas as páginas carregando
- [ ] Nenhum console.error
- [ ] Bundle size reduzido
- [ ] Lighthouse score mantido ou melhorado
- [ ] Depcheck sem warnings
- [ ] ESLint sem errors

### Antes/Depois
**Antes:**
- Bundle: 2.5 MB
- Dependencies: 38

**Depois:**
- Bundle: 1.2 MB (-52%)
- Dependencies: 28 (-26%)

### Screenshots
[Adicionar screenshot do bundle analyzer]

### Breaking Changes
Nenhum - código removido não estava sendo usado.

### Reviewer Checklist
- [ ] Verificar que nada importante foi removido
- [ ] Testar build local
- [ ] Verificar performance
```

---

## 🎯 CRONOGRAMA DE LIMPEZA

### Dia 1: Análise e Planejamento (4 horas)
- [ ] Executar depcheck
- [ ] Identificar componentes não usados
- [ ] Identificar assets não usados
- [ ] Criar lista de remoção
- [ ] Backup completo

### Dia 2: Arquivamento (3 horas)
- [ ] Criar estrutura archive/
- [ ] Mover NFT components
- [ ] Mover NFT pages
- [ ] Mover crowdfund
- [ ] Commit

### Dia 3: Remoção (4 horas)
- [ ] Remover Dework
- [ ] Remover Map
- [ ] Remover static/dummyEvents
- [ ] Remover páginas migradas
- [ ] Testes

### Dia 4: Dependências (2 horas)
- [ ] Remover deps não usadas
- [ ] npm prune
- [ ] Rebuild
- [ ] Testes

### Dia 5: Polimento (3 horas)
- [ ] Remover imports não usados
- [ ] Lint
- [ ] Bundle analyzer
- [ ] Otimizações finais
- [ ] PR

**Total: 16 horas (2 dias úteis)**

---

## ✅ CRITÉRIOS DE SUCESSO

### A limpeza está completa quando:

1. ✅ `npx depcheck` retorna zero dependências não usadas
2. ✅ `npm run lint` retorna zero errors
3. ✅ `npm run build` executa sem warnings
4. ✅ Bundle size reduzido em pelo menos 30%
5. ✅ Lighthouse score ≥ 90
6. ✅ Zero console errors no browser
7. ✅ Todas as páginas carregam corretamente
8. ✅ Formulários funcionam
9. ✅ Links não estão quebrados
10. ✅ Imagens carregam corretamente

---

## 📞 Suporte

**Dúvidas sobre o que remover?**  
Consulte este documento ou pergunte antes de deletar.

**Regra de ouro:**  
> "Se não tem certeza se é usado, ARQUIVE primeiro, não delete."

---

**Status:** 🧹 Pronto para Limpeza  
**Tempo Estimado:** 16 horas (2 dias)  
**Risco:** Baixo (com backups adequados)  
**Benefício:** Alto (código limpo, rápido, manutenível)

---

**Última atualização:** Outubro 2025


