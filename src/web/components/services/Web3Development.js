import React from 'react'

const style = {
  section: 'mt-16 mb-20',
  title: 'text-3xl font-bold mb-8 border-b pb-4',
  servicesGrid: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  serviceCard: 'bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300',
  serviceTitle: 'text-xl font-semibold mb-4',
  serviceList: 'list-disc pl-5 space-y-2',
}

const Web3Development = () => {
  return (
    <div className={style.section}>
      <h2 className={style.title}>Produtos e Serviços Web3</h2>
      
      <div className={style.servicesGrid}>
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Desenvolvimento Blockchain</h3>
          <ul className={style.serviceList}>
            <li>Contratos inteligentes personalizados que automatizam transações e acordos</li>
            <li>DApps (aplicações descentralizadas) para transações seguras e eficientes</li>
            <li>Soluções de integração de blockchain para empresas</li>
            <li>Tokenização de ativos reais, como imóveis e obras de arte</li>
          </ul>
        </div>
        
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Vending Machines Descentralizadas</h3>
          <ul className={style.serviceList}>
            <li>Infraestrutura de &quot;vending as a service&quot; em pontos de venda físicos</li>
            <li>Integração de dispositivos IoT para coleta de dados de uso e faturamento automático</li>
            <li>Gestão comunitária de rede de dispositivos e distribuição de receitas</li>
            <li>Opções de aluguel com taxas competitivas</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Web3Development 