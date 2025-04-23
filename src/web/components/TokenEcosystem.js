import React from 'react'

const style = {
  wrapper: 'py-20 px-4 max-w-6xl mx-auto',
  title: 'text-4xl font-bold text-center mb-12',
  subtitle: 'text-2xl font-semibold mb-4',
  tokensContainer: 'grid grid-cols-1 md:grid-cols-3 gap-8 mt-10',
  tokenCard: 'bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300',
  tokenTitle: 'text-xl font-bold mb-3 text-center',
  tokenDescription: 'text-gray-300 mb-4',
  tokenUseCase: 'bg-gray-700 p-4 rounded-lg mt-4',
  useCaseTitle: 'font-semibold mb-2',
}

const TokenEcosystem = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={style.title}>Nosso Ecossistema de Tokens</h1>
      <p className="text-center max-w-3xl mx-auto mb-10">
        Os tokens da Govinda Systems DAO representam mais que utilidade - são a base da nossa governança comunitária e distribuição de valor.
      </p>
      
      <div className={style.tokensContainer}>
        {/* GSTG Token */}
        <div className={style.tokenCard}>
          <h2 className={style.tokenTitle}>GSTG</h2>
          <h3 className="text-center text-gray-400 mb-4">Govinda SysTems Governance</h3>
          <p className={style.tokenDescription}>
            Representa participação na comunidade e direitos de voto. Membros com GSTG decidem coletivamente sobre desenvolvimento, alocação de recursos e futuro da DAO.
          </p>
          <div className={style.tokenUseCase}>
            <h4 className={style.useCaseTitle}>Principais Usos:</h4>
            <ul className="list-disc pl-5">
              <li>Votação em propostas da comunidade</li>
              <li>Decisões sobre alocação de recursos</li>
              <li>Participação na governança da DAO</li>
              <li>Submissão de propostas para novos projetos</li>
            </ul>
          </div>
        </div>

        {/* GOV Token */}
        <div className={style.tokenCard}>
          <h2 className={style.tokenTitle}>GOV</h2>
          <h3 className="text-center text-gray-400 mb-4">Token de Serviço</h3>
          <p className={style.tokenDescription}>
            Utilizado para acessar as soluções desenvolvidas pela comunidade. Os membros ganham 30% de cashback em GOV, retornando valor ao ecossistema.
          </p>
          <div className={style.tokenUseCase}>
            <h4 className={style.useCaseTitle}>Principais Usos:</h4>
            <ul className="list-disc pl-5">
              <li>Acesso a soluções da comunidade</li>
              <li>Pagamento por serviços da DAO</li>
              <li>Recompensas por contribuições</li>
              <li>Cashback de 30% em transações</li>
            </ul>
          </div>
        </div>

        {/* GOV_PAG Token */}
        <div className={style.tokenCard}>
          <h2 className={style.tokenTitle}>GOV_PAG</h2>
          <h3 className="text-center text-gray-400 mb-4">Token de Pagamento</h3>
          <p className={style.tokenDescription}>
            Facilita transações dentro do ecossistema e pode ser trocado por outras criptomoedas via Uniswap.
          </p>
          <div className={style.tokenUseCase}>
            <h4 className={style.useCaseTitle}>Principais Usos:</h4>
            <ul className="list-disc pl-5">
              <li>Transações dentro do ecossistema</li>
              <li>Conversão para outras criptomoedas</li>
              <li>Liquidez via Uniswap</li>
              <li>Facilitação de pagamentos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenEcosystem 