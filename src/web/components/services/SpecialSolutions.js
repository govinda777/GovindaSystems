import React from 'react'

const style = {
  section: 'mt-16 mb-20',
  title: 'text-3xl font-bold mb-8 border-b pb-4',
  solutionsContainer: 'space-y-12',
  solutionTitle: 'text-2xl font-semibold mb-6',
  solutionCard: 'bg-gray-800 p-6 rounded-lg shadow-lg',
  serviceList: 'list-disc pl-5 space-y-2 mt-4',
  techUsed: 'mt-4 text-sm text-gray-400',
  techList: 'flex flex-wrap gap-2 mt-2',
  techTag: 'bg-gray-700 px-3 py-1 rounded-full text-xs',
}

const SpecialSolutions = () => {
  return (
    <div className={style.section}>
      <h2 className={style.title}>Soluções Especializadas</h2>
      
      <div className={style.solutionsContainer}>
        {/* Vending Machines */}
        <div>
          <h3 className={style.solutionTitle}>Vending Machines Descentralizadas</h3>
          <div className={style.solutionCard}>
            <p>Nossa solução inovadora permite aos clientes terem suas próprias máquinas de vendas automatizadas com as melhores taxas do mercado.</p>
            <ul className={style.serviceList}>
              <li>Infraestrutura de &quot;vending as a service&quot; em pontos de venda físicos</li>
              <li>Integração de dispositivos IoT para coleta de dados de uso e faturamento automático</li>
              <li>Gestão comunitária de rede de dispositivos e distribuição de receitas</li>
              <li>Opções de aluguel com taxas competitivas</li>
            </ul>
          </div>
        </div>
        
        {/* Serviços Financeiros DeFi */}
        <div>
          <h3 className={style.solutionTitle}>Serviços Financeiros DeFi</h3>
          <div className={style.solutionCard}>
            <p>Soluções financeiras descentralizadas que eliminam intermediários nas operações financeiras.</p>
            <ul className={style.serviceList}>
              <li>Sistema de pagamentos recorrentes para aluguéis, seguros e assinaturas</li>
              <li>Serviços de staking para participação em validação de redes Proof-of-Stake</li>
              <li>Plataformas de empréstimos peer-to-peer sem intermediários</li>
              <li>Tokenização de ativos financeiros</li>
            </ul>
          </div>
        </div>
        
        {/* Incubadora de Projetos */}
        <div>
          <h3 className={style.solutionTitle}>Incubadora de Projetos</h3>
          <div className={style.solutionCard}>
            <p>A Govinda Systems destina parte de seus lucros para apoiar novos projetos dentro do seu ecossistema.</p>
            <ul className={style.serviceList}>
              <li>Mentoria e suporte técnico para startups em fase inicial</li>
              <li>Acesso a uma rede de contatos e potenciais investidores</li>
              <li>Infraestrutura e recursos para desenvolvimento de protótipos</li>
              <li>Orientação sobre modelos de negócio e estratégias de crescimento</li>
            </ul>
            <div className={style.techUsed}>
              <p>Similar a incubadoras tradicionais como o Supera Parque (USP/Ribeirão Preto) e o CEI (UFRGS), mas com foco específico em projetos blockchain e Web3.</p>
            </div>
          </div>
        </div>
        
        {/* IoT Solution */}
        <div>
          <h3 className={style.solutionTitle}>Automação e Telemetria com IOT</h3>
          <div className={style.solutionCard}>
            <p>Nosso framework colaborativo proporciona agilidade no registro/gerenciamento de dispositivos IOT para coleta de dados e execução de ações.</p>
            <ul className={style.serviceList}>
              <li>Automação industrial para monitoramento e telemetria</li>
              <li>Integração de dispositivos físicos com blockchain</li>
            </ul>
            <div className={style.techUsed}>
              <p>Tecnologias utilizadas:</p>
              <div className={style.techList}>
                <span className={style.techTag}>AWS IOT</span>
                <span className={style.techTag}>Esp8266</span>
                <span className={style.techTag}>MQTT Protocol</span>
                <span className={style.techTag}>Blockchain</span>
                <span className={style.techTag}>Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialSolutions 