import React from 'react'

const style = {
  section: 'mt-16 mb-20',
  title: 'text-3xl font-bold mb-8 border-b pb-4',
  servicesGrid: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  serviceCard: 'bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300',
  serviceTitle: 'text-xl font-semibold mb-4',
  serviceList: 'list-disc pl-5 space-y-2',
}

const AgileConsulting = () => {
  return (
    <div className={style.section}>
      <h2 className={style.title}>Consultoria Descomplicada para Criação de DAOs</h2>
      
      <div className={style.servicesGrid}>
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Serviços Completos de Consultoria</h3>
          <ul className={style.serviceList}>
            <li>Criação e gestão de canais de comunicação no Telegram ou Discord</li>
            <li>Desenvolvimento de tokens de participação, votação e pagamento</li>
            <li>Definição do tipo de DAO mais adequado (Serviço, Membership, Insurance, entre outros)</li>
            <li>Elaboração de planejamento financeiro detalhado</li>
            <li>Preparação de pitch para apresentação a investidores</li>
          </ul>
        </div>
        
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Tipos de DAOs Suportados</h3>
          <ul className={style.serviceList}>
            <li>DAOs de Leilão (Auction DAOs)</li>
            <li>DAOs de Seguro (Insurance DAOs)</li>
            <li>DAOs de Filiação/Associação (Membership DAOs)</li>
            <li>DAOs de Pagamentos Recorrentes</li>
            <li>DAOs de Automação de Aluguéis e Seguros</li>
            <li>DAOs de IoT e Vending Machines</li>
            <li>DAOs de Staking</li>
            <li>DAOs de Beats e Música</li>
            <li>DAOs de Crowdfunding e Grants</li>
            <li>DAOs de Serviços Profissionais</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AgileConsulting 