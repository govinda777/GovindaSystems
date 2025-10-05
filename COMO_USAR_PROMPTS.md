# 📖 Como Usar os Prompts para IA

Criamos 2 prompts diferentes para você usar com outras IAs:

---

## 📋 Arquivos Disponíveis

### 1. `PROMPT_PARA_IA.md` (Completo - Recomendado)
- **Tamanho:** ~400 linhas
- **Quando usar:** ChatGPT-4, Claude, ou qualquer IA que aceite contexto longo
- **Contém:**
  - ✅ Erro completo com stack trace
  - ✅ Todo código dos arquivos problemáticos
  - ✅ package.json completo
  - ✅ Histórico do que já foi tentado
  - ✅ Contexto do projeto
  - ✅ Informações de ambiente
  - ✅ Formato de resposta esperado

### 2. `PROMPT_CURTO_IA.md` (Resumido)
- **Tamanho:** ~80 linhas
- **Quando usar:** Chat rápido, APIs com limite de tokens
- **Contém:**
  - ✅ Erro essencial
  - ✅ Código principal
  - ✅ O que já foi tentado
  - ✅ Pergunta direta

---

## 🚀 Como Usar

### Opção 1: Copiar e Colar Completo

```bash
# Abrir o arquivo
open PROMPT_PARA_IA.md

# Ou ver no terminal
cat PROMPT_PARA_IA.md

# Copiar TODO o conteúdo
# Colar na IA de sua escolha
```

### Opção 2: Copiar para Clipboard (macOS)

```bash
# Copiar versão completa
cat PROMPT_PARA_IA.md | pbcopy

# OU copiar versão curta
cat PROMPT_CURTO_IA.md | pbcopy

# Agora só dar Cmd+V no chat da IA
```

### Opção 3: Via Web

```bash
# Criar link compartilhável (se tiver GitHub Gist)
gh gist create PROMPT_PARA_IA.md --public

# Copiar link e enviar para IA
```

---

## 🎯 IAs Recomendadas

### 1. ChatGPT-4 (OpenAI)
- **URL:** https://chat.openai.com
- **Usar:** `PROMPT_PARA_IA.md` (completo)
- **Vantagem:** Muito bom com Next.js e React
- **Dica:** Perguntar "Você pode revisar esse erro e sugerir solução?"

### 2. Claude (Anthropic)
- **URL:** https://claude.ai
- **Usar:** `PROMPT_PARA_IA.md` (completo)
- **Vantagem:** Excelente para debugging complexo
- **Dica:** Pedir análise detalhada da causa raiz

### 3. Gemini (Google)
- **URL:** https://gemini.google.com
- **Usar:** `PROMPT_CURTO_IA.md` (resumido)
- **Vantagem:** Rápido para soluções diretas
- **Dica:** Ser específico no que precisa

### 4. Perplexity AI
- **URL:** https://www.perplexity.ai
- **Usar:** `PROMPT_CURTO_IA.md` (resumido)
- **Vantagem:** Busca informações atualizadas
- **Dica:** Bom para erros recentes/novos

### 5. GitHub Copilot Chat
- **No VS Code:** Cmd+I ou Ctrl+I
- **Usar:** `PROMPT_CURTO_IA.md` (resumido)
- **Vantagem:** Tem contexto do seu código
- **Dica:** Já está no seu ambiente

---

## 💡 Dicas de Uso

### ✅ DO (Faça)

1. **Cole o prompt completo** - Não edite ou resuma
2. **Espere resposta completa** - Não interrompa
3. **Siga os passos** - Execute na ordem sugerida
4. **Faça backup** - Antes de aplicar mudanças
5. **Teste cada passo** - Valide se funcionou
6. **Documente solução** - Se funcionar, salve

### ❌ DON'T (Não Faça)

1. **Não omita informações** - Pode mudar a solução
2. **Não misture prompts** - Use um de cada vez
3. **Não aplique parcialmente** - Aplique solução completa
4. **Não pule passos** - Siga sequência
5. **Não desista rápido** - Teste 2-3 IAs diferentes

---

## 📝 Template de Pergunta Adicional

Se a IA pedir mais informações, use este template:

```
Informações adicionais solicitadas:

[Cole aqui o que a IA pediu]

Resposta:
[Cole aqui as informações solicitadas]

Por favor, continue com a solução.
```

---

## 🔄 Se a Primeira Solução Não Funcionar

### Passo 1: Documente o Resultado
```
Tentei a solução sugerida:
[Descrever o que fez]

Resultado:
[Copiar erro ou comportamento]

Ainda não funcionou. Pode sugerir alternativa?
```

### Passo 2: Tente Outra IA
- Se Claude não resolver → Tente ChatGPT
- Se ChatGPT não resolver → Tente Perplexity
- Cada IA tem diferentes abordagens

### Passo 3: Peça Abordagem Diferente
```
A solução anterior não funcionou.
Pode tentar uma abordagem diferente?
Por exemplo:
- Downgrade de versões?
- Configuração alternativa?
- Solução sem Thirdweb?
```

---

## 🎯 O Que Esperar das Respostas

### Boa Resposta Inclui:

✅ **Diagnóstico claro** da causa raiz  
✅ **Comandos específicos** para executar  
✅ **Código corrigido** completo  
✅ **Explicação** do que foi mudado  
✅ **Passos de verificação** para testar  

### Resposta Insuficiente:

❌ "Tente reinstalar dependencies"  
❌ "Pode ser problema de cache"  
❌ Código sem explicação  
❌ Sugestões vagas  

**Se receber resposta insuficiente:**
```
Obrigado, mas preciso de mais detalhes:
1. Comandos exatos para executar
2. Código completo dos arquivos
3. Explicação do que está causando o erro
4. Como verificar se funcionou

Pode elaborar?
```

---

## 📊 Histórico de Tentativas

Use este template para rastrear:

```markdown
## Tentativa 1
- **IA:** ChatGPT-4
- **Data:** [data]
- **Solução:** [resumo]
- **Resultado:** ❌ Não funcionou
- **Erro:** [erro recebido]

## Tentativa 2
- **IA:** Claude
- **Data:** [data]
- **Solução:** [resumo]
- **Resultado:** ✅ Funcionou!
- **Notas:** [observações]
```

---

## 🆘 Última Opção

Se nenhuma IA resolver:

### Stack Overflow
```bash
# Criar pergunta com:
- Título: "Next.js 14: jsxDEV is not a function error with Thirdweb"
- Tags: nextjs, reactjs, thirdweb, jsx
- Corpo: Usar PROMPT_PARA_IA.md
```

### GitHub Issues
- Repositório Next.js: https://github.com/vercel/next.js/issues
- Repositório Thirdweb: https://github.com/thirdweb-dev/js/issues

### Discord/Comunidades
- Next.js Discord: https://nextjs.org/discord
- Thirdweb Discord: https://discord.gg/thirdweb

---

## ✅ Checklist Final

Antes de usar o prompt:

- [ ] Li completamente este guia
- [ ] Escolhi a IA apropriada
- [ ] Copiei o prompt completo
- [ ] Tenho backup do código atual
- [ ] Estou pronto para executar comandos
- [ ] Tenho tempo para testar solução

---

## 📞 Sucesso?

Se conseguir resolver, **por favor documente**:

```bash
# Criar arquivo com solução
echo "# Solução que Funcionou" > SOLUCAO_FINAL.md
echo "" >> SOLUCAO_FINAL.md
echo "## O que Fiz:" >> SOLUCAO_FINAL.md
echo "[descrever]" >> SOLUCAO_FINAL.md
echo "" >> SOLUCAO_FINAL.md
echo "## Resultado:" >> SOLUCAO_FINAL.md
echo "✅ Site funcionando!" >> SOLUCAO_FINAL.md
```

Isso ajudará outros desenvolvedores com o mesmo problema!

---

**Boa sorte! 🍀**

**Última atualização:** Outubro 2025
