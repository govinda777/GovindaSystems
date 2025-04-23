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
      <h2 className={style.title}>Soluções Destacadas da Nossa Comunidade</h2>
      
      <div className={style.solutionsContainer}>
        {/* E-Commerce Solution */}
        <div>
          <h3 className={style.solutionTitle}>E-Commerce - Marketplace Descentralizado</h3>
          <div className={style.solutionCard}>
            <p>Nossa solução de marketplace descentralizado oferece uma plataforma completa para negócios digitais com segurança blockchain.</p>
            <ul className={style.serviceList}>
              <li>Co-criação de lojas virtuais completas e personalizadas</li>
              <li>Sistema participativo de cadastro e segmentação de produtos</li>
              <li>Implementação colaborativa de sistemas de pagamento</li>
              <li>Configuração conjunta de workflow de faturamento</li>
              <li>Soluções comunitárias para controle de estoque</li>
              <li>Desenvolvimento conjunto de sistemas de atendimento ao cliente</li>
              <li>Dashboard BI com transparência para monitoramento</li>
              <li>Integração coletiva com SEO para melhor posicionamento</li>
              <li>Suporte comunitário acessível e online</li>
              <li>Arquitetura escalável desenvolvida em comunidade</li>
            </ul>
          </div>
        </div>
        
        {/* IoT Solution */}
        <div>
          <h3 className={style.solutionTitle}>Automação e Telemetria com IOT Comunitária</h3>
          <div className={style.solutionCard}>
            <p>Nosso framework colaborativo proporciona agilidade no registro/gerenciamento de dispositivos IOT para coleta de dados e execução de ações.</p>
            <h4 className="font-semibold mt-4">Contribuições Comunitárias</h4>
            <ul className={style.serviceList}>
              <li>Automação industrial para monitoramento e telemetria desenvolvida coletivamente</li>
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
        
        {/* Legal Solutions */}
        <div>
          <h3 className={style.solutionTitle}>Soluções Jurídicas Descentralizadas</h3>
          <div className={style.solutionCard}>
            <ul className={style.serviceList}>
              <li>Desenvolvimento conjunto de smart contracts para automação de garantias</li>
              <li>Implementação colaborativa de processos Escrow para garantia de transações</li>
              <li>Atualização participativa dos termos contratuais</li>
            </ul>
          </div>
        </div>
        
        {/* Compliance Solutions */}
        <div>
          <h3 className={style.solutionTitle}>Compliance Comunitário</h3>
          <div className={style.solutionCard}>
            <ul className={style.serviceList}>
              <li>Desenvolvimento coletivo de sistemas de auditoria e prevenção a fraudes</li>
              <li>Implementação participativa de sistemas de votação, compliance financeira e protocolos anti-corrupção</li>
            </ul>
          </div>
        </div>
        
        {/* CRM Solutions */}
        <div>
          <h3 className={style.solutionTitle}>CRM Descentralizado</h3>
          <div className={style.solutionCard}>
            <ul className={style.serviceList}>
              <li>Co-criação de sistemas de cupons promocionais</li>
              <li>Estratégias coletivas de fidelização e recompensas</li>
              <li>Ferramentas comunitárias para relacionamento com usuários</li>
              <li>Atendimento com chatbot utilizando IA desenvolvido colaborativamente</li>
              <li>Coleta participativa de feedbacks com dashboard transparente</li>
              <li>Canais comunitários de comunicação e interação</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialSolutions 