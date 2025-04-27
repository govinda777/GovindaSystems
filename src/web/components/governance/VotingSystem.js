import React, { useState } from 'react'
import { useAddress, useMetamask } from '@thirdweb-dev/react'

const style = {
  container: 'bg-gray-800 p-6 rounded-lg shadow-lg mb-12 text-white',
  title: 'text-2xl font-bold mb-6 text-white',
  proposalsList: 'space-y-6',
  proposalCard: 'bg-gray-700 p-5 rounded-lg border border-gray-600 text-white',
  proposalTitle: 'text-xl font-semibold text-white',
  proposalMeta: 'flex flex-wrap gap-4 text-sm text-gray-400 mt-2',
  metaItem: 'flex items-center',
  proposalDescription: 'mt-4 mb-6 text-white',
  votingSection: 'mt-6 border-t border-gray-600 pt-4',
  votingTitle: 'font-semibold mb-3 text-white',
  votingStats: 'flex flex-wrap gap-4 mb-4',
  statBox: 'bg-gray-800 px-3 py-2 rounded-lg text-sm text-white',
  voteButtons: 'flex gap-3 mt-3',
  voteFor: 'bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-300',
  voteAgainst: 'bg-red-700 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300',
  voteAbstain: 'bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-lg transition duration-300',
  votedBadge: 'bg-blue-900 text-blue-200 py-1 px-3 rounded-lg text-sm',
  progressBar: 'h-4 rounded-full bg-gray-800 overflow-hidden mt-3',
  progressFill: 'h-full',
  connectButton: 'bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300',
  filterOptions: 'flex flex-wrap gap-2 mb-6',
  filterButton: 'px-3 py-1 rounded-lg text-sm border border-gray-600 text-white',
  activeFilter: 'bg-blue-900 border-blue-700',
  deadline: 'text-orange-400',
  expandButton: 'text-blue-400 underline text-sm mt-2 cursor-pointer',
  loadMoreButton: 'bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 mt-8',
}

// Dados mockados para simular propostas
const mockProposals = [
  {
    id: 1,
    title: 'Desenvolvimento de Smart Contract para Marketplace Descentralizado',
    description: 'Esta proposta visa criar um contrato inteligente para facilitar transações seguras em nosso marketplace, permitindo que vendedores e compradores negociem com garantias baseadas em blockchain. A implementação usará padrões ERC-20 e incluirá mecanismos de disputa e garantia de entrega.',
    category: 'desenvolvimento',
    proposer: '0x2a45...e3f9',
    proposedAt: '2023-06-15',
    deadline: '2023-06-29',
    status: 'active',
    votes: {
      for: 12500,
      against: 4200,
      abstain: 1800,
    },
    budget: '25000 GOV',
    duration: '6 semanas',
  },
  {
    id: 2,
    title: 'Campanha de Marketing para Expansão da Comunidade',
    description: 'Proposta para realizar uma campanha de marketing direcionada para atrair novos membros para nossa comunidade. Incluirá estratégias para redes sociais, conteúdo educacional e eventos virtuais. O objetivo é aumentar nossa base de membros em 30% nos próximos 3 meses.',
    category: 'marketing',
    proposer: '0x8b67...9d21',
    proposedAt: '2023-06-10',
    deadline: '2023-06-24',
    status: 'active',
    votes: {
      for: 18200,
      against: 5300,
      abstain: 2100,
    },
    budget: '15000 GOV',
    duration: '3 meses',
  },
  {
    id: 3,
    title: 'Atualização dos Parâmetros de Governança',
    description: 'Proposta para ajustar os parâmetros de governança da DAO, incluindo quórum mínimo para votações, período de deliberação e peso dos votos baseado em reputação. Estas mudanças visam tornar nossa governança mais eficiente e representativa.',
    category: 'governanca',
    proposer: '0x3f56...1a87',
    proposedAt: '2023-06-05',
    deadline: '2023-06-19',
    status: 'closed',
    result: 'approved',
    votes: {
      for: 24600,
      against: 3800,
      abstain: 1200,
    },
    budget: 'N/A',
    duration: 'Permanente',
  },
  {
    id: 4,
    title: 'Implementação de Sistema de Recompensas por Contribuição',
    description: 'Esta proposta visa criar um sistema transparente para recompensar membros da comunidade por suas contribuições em desenvolvimento, educação e governança. O sistema utilizará contratos inteligentes para distribuir tokens GOV baseado em métricas de contribuição.',
    category: 'desenvolvimento',
    proposer: '0xc123...e7d9',
    proposedAt: '2023-06-01',
    deadline: '2023-06-15',
    status: 'closed',
    result: 'approved',
    votes: {
      for: 31200,
      against: 2700,
      abstain: 900,
    },
    budget: '18000 GOV',
    duration: '8 semanas',
  },
]

const VotingSystem = () => {
  const address = useAddress()
  const connectWallet = useMetamask()
  const [proposals, setProposals] = useState(mockProposals)
  const [userVotes, setUserVotes] = useState({})
  const [filter, setFilter] = useState('all')
  const [expandedProposals, setExpandedProposals] = useState({})
  
  const handleVote = (proposalId, voteType) => {
    // Simulação de voto - em produção, isso interagiria com um contrato
    setUserVotes(prev => ({
      ...prev,
      [proposalId]: voteType
    }))
    
    // Atualizar contagem de votos (simulação)
    setProposals(prev => prev.map(proposal => {
      if (proposal.id === proposalId) {
        const votes = { ...proposal.votes }
        votes[voteType] += 100 // Assumindo que o peso do voto é 100
        return { ...proposal, votes }
      }
      return proposal
    }))
  }
  
  const toggleExpandProposal = (proposalId) => {
    setExpandedProposals(prev => ({
      ...prev,
      [proposalId]: !prev[proposalId]
    }))
  }
  
  const filteredProposals = filter === 'all' 
    ? proposals 
    : proposals.filter(proposal => proposal.status === filter)
  
  const calculateProgress = (votes) => {
    const total = votes.for + votes.against + votes.abstain
    return {
      for: (votes.for / total) * 100,
      against: (votes.against / total) * 100,
      abstain: (votes.abstain / total) * 100,
    }
  }
  
  const formatVotes = (votes) => {
    return new Intl.NumberFormat().format(votes)
  }
  
  // Função para formatar datas
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('pt-BR', options)
  }

  if (!address) {
    return (
      <div className={style.container}>
        <h2 className={style.title}>Sistema de Votação</h2>
        <div className="text-center py-8">
          <p className="mb-4">Conecte sua carteira MetaMask para participar das votações da comunidade.</p>
          <button 
            className={style.connectButton}
            onClick={connectWallet}
          >
            Conectar Carteira
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Sistema de Votação</h2>
      
      <div className={style.filterOptions}>
        <button 
          className={`${style.filterButton} ${filter === 'all' ? style.activeFilter : ''}`}
          onClick={() => setFilter('all')}
        >
          Todas
        </button>
        <button 
          className={`${style.filterButton} ${filter === 'active' ? style.activeFilter : ''}`}
          onClick={() => setFilter('active')}
        >
          Ativas
        </button>
        <button 
          className={`${style.filterButton} ${filter === 'closed' ? style.activeFilter : ''}`}
          onClick={() => setFilter('closed')}
        >
          Encerradas
        </button>
      </div>
      
      <div className={style.proposalsList}>
        {filteredProposals.map(proposal => {
          const progress = calculateProgress(proposal.votes)
          const isExpanded = expandedProposals[proposal.id]
          
          return (
            <div key={proposal.id} className={style.proposalCard}>
              <h3 className={style.proposalTitle}>{proposal.title}</h3>
              
              <div className={style.proposalMeta}>
                <span className={style.metaItem}>Categoria: {proposal.category}</span>
                <span className={style.metaItem}>Proposto por: {proposal.proposer}</span>
                <span className={style.metaItem}>Data: {formatDate(proposal.proposedAt)}</span>
                {proposal.status === 'active' && (
                  <span className={`${style.metaItem} ${style.deadline}`}>
                    Prazo: {formatDate(proposal.deadline)}
                  </span>
                )}
                {proposal.status === 'closed' && (
                  <span className={style.metaItem}>
                    Resultado: {proposal.result === 'approved' ? 'Aprovada' : 'Rejeitada'}
                  </span>
                )}
              </div>
              
              <p className={style.proposalDescription}>
                {isExpanded 
                  ? proposal.description 
                  : `${proposal.description.substring(0, 150)}...`}
              </p>
              
              <div 
                className={style.expandButton}
                onClick={() => toggleExpandProposal(proposal.id)}
              >
                {isExpanded ? 'Ver menos' : 'Ver mais'}
              </div>
              
              <div className={style.votingSection}>
                <h4 className={style.votingTitle}>Votação</h4>
                
                <div className={style.votingStats}>
                  <div className={style.statBox}>
                    A favor: {formatVotes(proposal.votes.for)} ({progress.for.toFixed(1)}%)
                  </div>
                  <div className={style.statBox}>
                    Contra: {formatVotes(proposal.votes.against)} ({progress.against.toFixed(1)}%)
                  </div>
                  <div className={style.statBox}>
                    Abstenção: {formatVotes(proposal.votes.abstain)} ({progress.abstain.toFixed(1)}%)
                  </div>
                  {userVotes[proposal.id] && (
                    <div className={style.votedBadge}>
                      Você votou: {userVotes[proposal.id] === 'for' ? 'A favor' : userVotes[proposal.id] === 'against' ? 'Contra' : 'Abstenção'}
                    </div>
                  )}
                </div>
                
                <div className={style.progressBar}>
                  <div 
                    className={style.progressFill} 
                    style={{
                      width: `${progress.for}%`,
                      backgroundColor: '#22c55e'
                    }}
                  />
                </div>
                
                {proposal.status === 'active' && !userVotes[proposal.id] && (
                  <div className={style.voteButtons}>
                    <button 
                      className={style.voteFor}
                      onClick={() => handleVote(proposal.id, 'for')}
                    >
                      Votar a Favor
                    </button>
                    <button 
                      className={style.voteAgainst}
                      onClick={() => handleVote(proposal.id, 'against')}
                    >
                      Votar Contra
                    </button>
                    <button 
                      className={style.voteAbstain}
                      onClick={() => handleVote(proposal.id, 'abstain')}
                    >
                      Abster-se
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="text-center">
        <button className={style.loadMoreButton}>
          Carregar Mais Propostas
        </button>
      </div>
    </div>
  )
}

export default VotingSystem 