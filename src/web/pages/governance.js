import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProposalSubmission from '../components/governance/ProposalSubmission'
import VotingSystem from '../components/governance/VotingSystem'
import ReputationSystem from '../components/governance/ReputationSystem'
import { useState } from 'react'

const style = {
  wrapper: 'min-h-screen',
  container: 'max-w-6xl mx-auto py-12 px-4',
  title: 'text-4xl font-bold text-center mb-12',
  subtitle: 'text-2xl font-semibold mb-6 mt-12',
  paragraph: 'mb-6 text-lg',
  processList: 'bg-gray-800 p-6 rounded-lg mt-8 mb-12 text-white',
  processItem: 'mb-4 flex items-start',
  processNumber: 'bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0',
  processText: 'mt-1 text-white',
  infoBox: 'bg-gray-800 p-6 rounded-lg mb-8 text-white',
  tabs: 'flex flex-wrap border-b border-gray-700 mb-12',
  tab: 'px-6 py-3 font-medium cursor-pointer transition duration-200',
  activeTab: 'border-b-2 border-blue-500 text-blue-400',
  inactiveTab: 'text-gray-400 hover:text-gray-300',
}

export default function GovernancePage() {
  const [activeTab, setActiveTab] = useState('overview')
  
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Governança Descentralizada | Govinda Systems DAO</title>
        <meta name="description" content="Conheça o modelo de governança descentralizada da Govinda Systems DAO, onde todos os detentores de tokens GSTG têm direito a voto." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <div className={style.container}>
        <h1 className={style.title}>Governança Descentralizada</h1>
        
        {/* Tabs de navegação */}
        <div className={style.tabs}>
          <div 
            className={`${style.tab} ${activeTab === 'overview' ? style.activeTab : style.inactiveTab}`}
            onClick={() => setActiveTab('overview')}
          >
            Visão Geral
          </div>
          <div 
            className={`${style.tab} ${activeTab === 'proposals' ? style.activeTab : style.inactiveTab}`}
            onClick={() => setActiveTab('proposals')}
          >
            Propostas e Votação
          </div>
          <div 
            className={`${style.tab} ${activeTab === 'submit' ? style.activeTab : style.inactiveTab}`}
            onClick={() => setActiveTab('submit')}
          >
            Enviar Proposta
          </div>
          <div 
            className={`${style.tab} ${activeTab === 'reputation' ? style.activeTab : style.inactiveTab}`}
            onClick={() => setActiveTab('reputation')}
          >
            Reputação e Contribuições
          </div>
        </div>
        
        {/* Conteúdo com base na tab ativa */}
        {activeTab === 'overview' && (
          <>
            <div className={style.infoBox}>
              <p className={style.paragraph}>
                Nossa comunidade opera através de processos decisórios descentralizados onde todos os detentores 
                de tokens GSTG têm direito a voto. Propostas são submetidas, discutidas e votadas pelos membros, 
                garantindo que o futuro da DAO seja determinado coletivamente.
              </p>
            </div>
            
            <h2 className={style.subtitle}>Processo de Propostas</h2>
            
            <div className={style.processList}>
              <div className={style.processItem}>
                <div className={style.processNumber}>1</div>
                <div className={style.processText}>
                  Qualquer membro pode submeter propostas para novos projetos, melhorias ou mudanças
                </div>
              </div>
              
              <div className={style.processItem}>
                <div className={style.processNumber}>2</div>
                <div className={style.processText}>
                  A comunidade discute e refina as propostas em nossos fóruns
                </div>
              </div>
              
              <div className={style.processItem}>
                <div className={style.processNumber}>3</div>
                <div className={style.processText}>
                  Propostas são votadas pelos detentores de tokens GSTG
                </div>
              </div>
              
              <div className={style.processItem}>
                <div className={style.processNumber}>4</div>
                <div className={style.processText}>
                  Implementação é executada de forma transparente com atualizações regulares
                </div>
              </div>
            </div>
            
            <h2 className={style.subtitle}>Transparência</h2>
            <p className={style.paragraph}>
              Estamos comprometidos com a transparência em todos os aspectos da nossa comunidade. Acreditamos que 
              a transparência é fundamental para cultivar confiança entre os membros e promover um ecossistema saudável para todos os participantes.
            </p>
            
            <h2 className={style.subtitle}>Sistema de Recompensas</h2>
            <p className={style.paragraph}>
              Contribuições são reconhecidas através de nosso sistema transparente de recompensas baseado em tokens, 
              determinado pela comunidade através de votação.
            </p>
            
            <div className="mt-12 bg-gray-800 p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-4 text-white">Formas de Contribuição</h3>
              <ul className="space-y-2 list-disc pl-5 text-white">
                <li><span className="font-semibold">Desenvolvimento:</span> Contribua com código para nossas soluções Web3</li>
                <li><span className="font-semibold">Educação:</span> Crie tutoriais ou workshops para nossa comunidade</li>
                <li><span className="font-semibold">Governança:</span> Participe ativamente de discussões e votações</li>
                <li><span className="font-semibold">Crescimento:</span> Ajude a expandir nossa comunidade e parcerias</li>
              </ul>
            </div>
          </>
        )}
        
        {activeTab === 'proposals' && (
          <VotingSystem />
        )}
        
        {activeTab === 'submit' && (
          <ProposalSubmission />
        )}
        
        {activeTab === 'reputation' && (
          <ReputationSystem />
        )}
      </div>
      
      <Footer />
    </div>
  )
} 