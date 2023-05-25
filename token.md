<p align="center">
<img src="https://raw.githubusercontent.com/mermaid-js/mermaid/develop/docs/public/favicon.svg" height="150">
</p>
<h1 align="center">
Tokens
</h1>
<p align="center">
Aprenda como nossos tokens funcionam.
<p>
<p align="center">
&
<p>
<p align="center">
Processo de cash back.
<p>

## Nossos Tokens

# Tokens da Govinda Systems DAO: Uma Introdução Simples

A Govinda Systems DAO usa três tipos diferentes de tokens: **GSTG**, **GOV_PAG**, e **GOV**. Vamos entender um pouco mais sobre cada um deles:

## GOV - Govinda Services Coin

**GOV** é o token de serviço. Serve para solicitar produtos / serviços ou pagamento de hospedagem na Govinda Systems DAO.

## GSTG - Govinda SysTems Governance

O token **GSTG** é o token de governança da Govinda Systems DAO. Se você possui GSTG, significa que você tem uma participação na organização e pode votar em decisões importantes.

## GOV_PAG - Govinda Pagamento Coin

**GOV_PAG** é o token para pagamento da Govinda Systems DAO. Essa moeda é utilizada como contas a pagar, com ela pagamos os serviços prestados pelos integrantes da comunidade.

Ao adquirir esse token, você poderá trocar por Bitcoin pela plataforma Uniswap (https://uniswap.org/).

# Como os Tokens Funcionam?

Esses tokens funcionam como um tipo especial de moeda digital que são gerados e gerenciados na blockchain. Cada token tem um valor que pode ser trocado por produtos ou serviços dentro do ecossistema da Govinda Systems DAO.

# Como Adquirir Tokens?

Para adquirir qualquer um desses tokens, você precisará seguir estes passos:

1. **Crie uma carteira de criptomoedas**: É onde você vai guardar seus tokens. Alguns exemplos de carteiras são MetaMask, Trust Wallet e MyEtherWallet.

2. **Compre Ethereum (ETH)**: Como os tokens da Govinda Systems são baseados na blockchain Ethereum, você precisa comprar ETH para trocar por tokens.

3. **Conecte sua carteira a uma plataforma de troca descentralizada**: Um exemplo popular é o Uniswap.

4. **Troque seu ETH pelos tokens que deseja**: No Uniswap, você pode trocar seu ETH por GSTG, GOV_PAG, ou GOV.

Lembre-se de sempre manter a chave privada da sua carteira segura.

> Veja no diagrama abaixo como funciona o processo de compra de GOV COINS.

```mermaid
sequenceDiagram
    participant Cliente
    participant Corretora
    participant Carteira
    participant Plataforma_Troca
    participant Govinda_Systems

    Cliente->>Corretora: Comprar Ethereum (ETH)
    Corretora->>Cliente: Enviar ETH para a carteira do cliente
    Cliente->>Carteira: Conectar a carteira à plataforma de troca
    Carteira->>Plataforma_Troca: Acessar a plataforma de troca (ex: Uniswap)
    Plataforma_Troca->>Cliente: Selecionar troca de ETH por GOV_COINS
    Cliente->>Plataforma_Troca: Inserir endereço do contrato inteligente das GOV_COINS
    Cliente->>Plataforma_Troca: Definir quantidade de ETH e confirmar transação
    Plataforma_Troca->>Govinda_Systems: Enviar ETH
    Govinda_Systems->>Plataforma_Troca: Enviar GOV_COINS
    Plataforma_Troca->>Carteira: Creditar GOV_COINS na carteira do cliente
    Carteira->>Cliente: Confirmar saldo das GOV_COINS
```

Lembre-se de sempre armazenar seus tokens de maneira segura e manter a chave privada de sua carteira em local seguro e confidencial.

## Token 

```mermaid
sequenceDiagram
actor Client
Client->>Govinda_Systems: Realiza o pagamento (PIX)
Govinda_Systems->> Tela_Checkout : Cadastro de usuário / Promoção / Cashback
loop Validacao
    Tela_Checkout->>Tela_Checkout: Verifica se o pagamento foi creditado.
end
Note right of Tela_Checkout: Integração Chainlink Oracles
Tela_Checkout->> Tela_Confirmacao_Pagamento : Credita os tokens na carteira do cliente
Tela_Confirmacao_Pagamento-->> Client: Envio de comprovante de pagamento
Tela_Confirmacao_Pagamento-->> Dework: Cria um CARD com a demanda no kanban
```
