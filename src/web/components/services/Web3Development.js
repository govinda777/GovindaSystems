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
      <h2 className={style.title}>Desenvolvimento Web3 Comunitário</h2>
      
      <div className={style.servicesGrid}>
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Desenvolvimento Blockchain</h3>
          <ul className={style.serviceList}>
            <li>Construção colaborativa de aplicativos descentralizados (dApps)</li>
            <li>Desenvolvimento conjunto de contratos inteligentes</li>
            <li>Integração de soluções DeFi (Finanças Descentralizadas)</li>
            <li>Revisão comunitária de segurança e auditoria de contratos inteligentes</li>
            <li>Co-criação de interfaces de usuário com foco em experiência (UI/UX)</li>
          </ul>
        </div>
        
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Soluções Blockchain Enterprise</h3>
          <ul className={style.serviceList}>
            <li>Desenvolvimento colaborativo de contratos inteligentes personalizados</li>
            <li>Construção coletiva de aplicativos descentralizados (dApps)</li>
            <li>Integração participativa de blockchain em processos existentes</li>
            <li>Segurança blockchain comunitária para operações seguras</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Web3Development 