import React from 'react'

const style = {
  section: 'mt-16 mb-20',
  title: 'text-3xl font-bold mb-8 border-b pb-4',
  servicesGrid: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  serviceCard: 'bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300',
  serviceTitle: 'text-xl font-semibold mb-4',
  serviceList: 'list-disc pl-5 space-y-2',
}

const DigitalMarketing = () => {
  return (
    <div className={style.section}>
      <h2 className={style.title}>Publicidade e Propaganda</h2>
      
      <div className={style.servicesGrid}>
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Marketing Digital para Web3</h3>
          <ul className={style.serviceList}>
            <li>Criação, customização e gestão de redes sociais</li>
            <li>Desenvolvimento de sites e plataformas web</li>
            <li>Rebranding de marcas, serviços e produtos</li>
            <li>Estratégias de marketing adaptadas às particularidades do ecossistema Web3</li>
          </ul>
        </div>
        
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Serviços Financeiros DeFi</h3>
          <ul className={style.serviceList}>
            <li>Sistema de pagamentos recorrentes para aluguéis, seguros e assinaturas</li>
            <li>Serviços de staking para participação em validação de redes Proof-of-Stake</li>
            <li>Plataformas de empréstimos peer-to-peer sem intermediários</li>
            <li>Tokenização de ativos financeiros</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketing 