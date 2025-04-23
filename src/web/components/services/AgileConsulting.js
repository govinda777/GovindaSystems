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
      <h2 className={style.title}>Consultoria Colaborativa em Agilidade</h2>
      
      <div className={style.servicesGrid}>
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Transformação Ágil</h3>
          <ul className={style.serviceList}>
            <li>Facilitação de transformação ágil em organizações</li>
            <li>Diagnóstico participativo de maturidade ágil</li>
            <li>Co-criação de métricas ágeis e quadros de gestão visual</li>
          </ul>
        </div>
        
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Análise e Otimização de Processos</h3>
          <ul className={style.serviceList}>
            <li>Mapeamento coletivo e diagramação de processos</li>
            <li>Identificação comunitária de gargalos e desperdícios</li>
            <li>Análise colaborativa para redução de custos</li>
            <li>Desenvolvimento de estratégias para automação de processos</li>
            <li>Avaliação participativa de desempenho e qualidade</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AgileConsulting 