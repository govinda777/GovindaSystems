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
      <h2 className={style.title}>Estratégias Coletivas de Marketing Digital</h2>
      
      <div className={style.servicesGrid}>
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Co-criação de Sites e Plataformas Web3</h3>
          <ul className={style.serviceList}>
            <li>Desenvolvimento participativo de sites institucionais com integração blockchain</li>
            <li>Criação coletiva de layouts responsivos para diversos dispositivos</li>
            <li>Desenvolvimento conjunto de landing pages para campanhas</li>
          </ul>
        </div>
        
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Gestão Comunitária de Mídias Sociais</h3>
          <ul className={style.serviceList}>
            <li>Compartilhamento de boas práticas para redes sociais</li>
            <li>Colaboração na criação de conteúdo para diferentes plataformas</li>
            <li>Desenvolvimento conjunto de lojas virtuais em Instagram / Google Shopping</li>
            <li>Estratégias coletivas para campanhas de anúncios</li>
            <li>Análise participativa de métricas para otimização</li>
          </ul>
        </div>
        
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Gestão Colaborativa de Tráfego</h3>
          <ul className={style.serviceList}>
            <li>Gerenciamento conjunto de campanhas em Google Ads, Facebook Ads e outras plataformas</li>
            <li>Otimização comunitária para aumentar tráfego e conversões</li>
          </ul>
        </div>
        
        <div className={style.serviceCard}>
          <h3 className={style.serviceTitle}>Desenvolvimento Coletivo de Produtos</h3>
          <ul className={style.serviceList}>
            <li>Análise participativa de boas práticas para produtos online</li>
            <li>Avaliação comunitária de portfólio de produtos</li>
            <li>Co-criação de novos produtos e serviços</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DigitalMarketing 