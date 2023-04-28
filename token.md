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

## GOV Coins

As **GOV Coins** podem ser utilizadas para a contratação de uma variedade de produtos e serviços oferecidos pela Govinda Systems DAO. Esses serviços incluem:

1. **Desenvolvimento de software personalizado**: A equipe da Govinda Systems pode criar soluções de software sob medida para atender às necessidades específicas dos clientes, seja para uma startup ou uma empresa estabelecida.

2. **Aplicações móveis e web**: A Govinda Systems tem experiência no desenvolvimento de aplicativos móveis e web eficientes e atraentes, que podem ajudar as empresas a expandir sua presença online e atrair novos clientes.

3. **Soluções em blockchain e criptomoedas (Dapp, Web3, Defi)**: A equipe da Govinda Systems possui conhecimentos avançados no desenvolvimento de soluções baseadas em blockchain, como aplicativos descentralizados (Dapps), projetos Web3 e finanças descentralizadas (DeFi).

4. **Consultoria e treinamento em tecnologia**: A Govinda Systems oferece serviços de consultoria e treinamento em várias áreas de tecnologia, ajudando as empresas a se manterem atualizadas com as tendências e práticas mais recentes do setor.

5. **Soluções e Consultoria em marketing digital**: A Govinda Systems também possui experiência em marketing digital, oferecendo estratégias e soluções que ajudam as empresas a melhorar sua presença online, aumentar o engajamento dos clientes e gerar mais vendas.

Ao utilizar as GOV Coins, os clientes podem ter acesso a todos esses serviços e produtos de forma rápida e segura, aproveitando os benefícios da tecnologia blockchain e das finanças descentralizadas.

### Como adquirir GOV Coins
Para adquirir GOV Coins, siga os passos abaixo:

**Crie uma carteira compatível com tokens ERC-20**: Primeiramente, é necessário ter uma carteira digital que suporte tokens baseados no padrão ERC-20. Algumas opções populares incluem MetaMask, Trust Wallet e MyEtherWallet.

**Compre Ethereum (ETH)**: Como as GOV Coins são tokens ERC-20, você precisará adquirir Ethereum (ETH) para realizar a troca. Compre ETH em uma corretora de criptomoedas de sua preferência e transfira os fundos para a sua carteira.

**Acesse uma plataforma de troca descentralizada**: Conecte sua carteira à uma plataforma de troca descentralizada, como o Uniswap. Verifique se a plataforma suporta a negociação de GOV Coins.

**Troque ETH por GOV Coins**: No Uniswap, selecione a opção de trocar Ethereum (ETH) por GOV Coins. Certifique-se de inserir o endereço do contrato inteligente das GOV Coins para evitar a perda de fundos. Defina a quantidade de ETH que deseja trocar e confirme a transação.

Contrato inteligente das GOV Coins : http://govindasystems

**Confirme a transação**: Sua carteira solicitará a confirmação da transação. Verifique os detalhes da troca e confirme a operação. Aguarde a conclusão da transação, que pode levar alguns minutos, dependendo da congestão da rede Ethereum.

**Verifique o saldo de GOV Coins**: Após a conclusão da transação, verifique o saldo de GOV Coins em sua carteira. Agora você está pronto para utilizar seus tokens na contratação de serviços da Govinda Systems DAO.

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

## Release

For those who have the permission to do so:

Update version number in `package.json`.

```sh
npm publish
```

The above command generates files into the `dist` folder and publishes them to npmjs.org.

## Related projects

- [Command Line Interface](https://github.com/mermaid-js/mermaid-cli)
- [Live Editor](https://github.com/mermaid-js/mermaid-live-editor)
- [HTTP Server](https://github.com/TomWright/mermaid-server)

## Contributors [![Good first issue](https://img.shields.io/github/labels/mermaid-js/mermaid/Good%20first%20issue%21)](https://github.com/mermaid-js/mermaid/issues?q=is%3Aissue+is%3Aopen+label%3A%22Good+first+issue%21%22) [![Contributors](https://img.shields.io/github/contributors/mermaid-js/mermaid)](https://github.com/mermaid-js/mermaid/graphs/contributors) [![Commits](https://img.shields.io/github/commit-activity/m/mermaid-js/mermaid)](https://github.com/mermaid-js/mermaid/graphs/contributors)

Mermaid is a growing community and is always accepting new contributors. There's a lot of different ways to help out and we're always looking for extra hands! Look at [this issue](https://github.com/mermaid-js/mermaid/issues/866) if you want to know where to start helping out.

Detailed information about how to contribute can be found in the [contribution guide](CONTRIBUTING.md)

## Security and safe diagrams

For public sites, it can be precarious to retrieve text from users on the internet, storing that content for presentation in a browser at a later stage. The reason is that the user content can contain embedded malicious scripts that will run when the data is presented. For Mermaid this is a risk, specially as mermaid diagrams contain many characters that are used in html which makes the standard sanitation unusable as it also breaks the diagrams. We still make an effort to sanitise the incoming code and keep refining the process but it is hard to guarantee that there are no loop holes.

As an extra level of security for sites with external users we are happy to introduce a new security level in which the diagram is rendered in a sandboxed iframe preventing javascript in the code from being executed. This is a great step forward for better security.

_Unfortunately you can not have a cake and eat it at the same time which in this case means that some of the interactive functionality gets blocked along with the possible malicious code._

## Reporting vulnerabilities

To report a vulnerability, please e-mail security@mermaid.live with a description of the issue, the steps you took to create the issue, affected versions, and if known, mitigations for the issue.

## Appreciation

A quick note from Knut Sveidqvist:

> _Many thanks to the [d3](https://d3js.org/) and [dagre-d3](https://github.com/cpettitt/dagre-d3) projects for providing the graphical layout and drawing libraries!_
>
> _Thanks also to the [js-sequence-diagram](https://bramp.github.io/js-sequence-diagrams) project for usage of the grammar for the sequence diagrams. Thanks to Jessica Peter for inspiration and starting point for gantt rendering._
>
> _Thank you to [Tyler Long](https://github.com/tylerlong) who has been a collaborator since April 2017._
>
> _Thank you to the ever-growing list of [contributors](https://github.com/knsv/mermaid/graphs/contributors) that brought the project this far!_

---

_Mermaid was created by Knut Sveidqvist for easier documentation._
