import React, { useState } from 'react'
import { useAddress, useConnectionStatus, useConnect } from '@thirdweb-dev/react'

const style = {
  container: 'bg-gray-800 p-6 rounded-lg shadow-lg mb-12',
  title: 'text-2xl font-bold mb-6',
  profileSection: 'mb-12',
  profileHeader: 'flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6',
  profileInfo: 'flex-1',
  username: 'text-xl font-semibold mb-2',
  address: 'text-gray-400 text-sm mb-4',
  memberSince: 'text-gray-400 text-sm',
  statsGrid: 'grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8',
  statCard: 'bg-gray-700 p-4 rounded-lg text-center',
  statValue: 'text-2xl font-bold mb-1',
  statLabel: 'text-sm text-gray-400',
  contributionsSection: 'mb-12',
  sectionTitle: 'text-xl font-semibold mb-4 border-b border-gray-700 pb-3',
  contributionsList: 'space-y-4 mt-6',
  contributionCard: 'bg-gray-700 p-4 rounded-lg',
  contributionHeader: 'flex justify-between items-start mb-3',
  contributionTitle: 'font-semibold',
  contributionDate: 'text-sm text-gray-400',
  contributionPoints: 'text-yellow-500 font-semibold',
  badgesSection: 'mb-12',
  badgesGrid: 'grid grid-cols-2 sm:grid-cols-4 gap-4',
  badgeCard: 'bg-gray-700 p-4 rounded-lg text-center',
  badgeIcon: 'text-4xl mx-auto mb-2',
  badgeTitle: 'font-semibold mb-1',
  badgeDescription: 'text-xs text-gray-400',
  levelProgressBar: 'h-4 bg-gray-700 rounded-full overflow-hidden mb-2',
  progressFill: 'h-full bg-blue-600',
  leaderboardSection: 'mb-12',
  leaderboardTable: 'w-full',
  tableHeader: 'text-left text-gray-400 border-b border-gray-700 pb-2',
  tableRow: 'border-b border-gray-700',
  tableCell: 'py-3',
  rankCell: 'font-bold',
  highlightedRow: 'bg-gray-700',
  connectButton: 'bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300',
  tabs: 'flex mb-6 border-b border-gray-700',
  tab: 'py-3 px-6 font-medium cursor-pointer',
  activeTab: 'border-b-2 border-blue-500 text-blue-400',
  emptyProfilePrompt: 'text-center py-12',
  emptyProfileButton: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 mt-4',
}

// Dados mockados para simulação
const mockUserProfile = {
  username: 'Maria Blockchain',
  address: '0x8c5Be1e5ebec7d5bd14f71427d1e84f3dd0314c0',
  memberSince: '2023-01-15',
  level: 4,
  xp: 1250,
  xpToNextLevel: 2000,
  reputation: 780,
  tokensEarned: 3500,
  proposalsCreated: 7,
  votesParticipated: 32,
  contributions: [
    {
      id: 1,
      title: 'Desenvolvimento de Feature Wallet Connect',
      type: 'desenvolvimento',
      date: '2023-05-12',
      points: 250,
      description: 'Implementação da integração com Wallet Connect para diversificar opções de carteiras.',
    },
    {
      id: 2,
      title: 'Tutorial: Criando seu primeiro Smart Contract',
      type: 'educacao',
      date: '2023-04-28',
      points: 180,
      description: 'Criação de tutorial passo-a-passo para novos desenvolvedores sobre criação de contratos inteligentes.',
    },
    {
      id: 3,
      title: 'Revisão de Proposta de Atualização da Governança',
      type: 'governanca',
      date: '2023-04-15',
      points: 120,
      description: 'Análise detalhada e feedback para aprimorar a proposta de atualização de parâmetros de governança.',
    },
    {
      id: 4,
      title: 'Workshop Online: Tokenomics Sustentável',
      type: 'educacao',
      date: '2023-03-20',
      points: 300,
      description: 'Realização de workshop online sobre princípios de tokenomics sustentável para 45 membros.',
    },
  ],
  badges: [
    {
      id: 1,
      title: 'Desenvolvedor Bronze',
      icon: '🛠️',
      description: 'Contribuiu com pelo menos 5 implementações de código.',
    },
    {
      id: 2,
      title: 'Educador Prata',
      icon: '📚',
      description: 'Criou mais de 10 conteúdos educacionais para a comunidade.',
    },
    {
      id: 3,
      title: 'Governança Ativa',
      icon: '🗳️',
      description: 'Participou de mais de 25 votações na comunidade.',
    },
    {
      id: 4,
      title: 'Pioneiro',
      icon: '🚀',
      description: 'Membro desde os primeiros 100 participantes da DAO.',
    },
  ],
}

const mockLeaderboard = [
  { rank: 1, username: 'CryptoMaster', address: '0x1a2...3b4c', reputation: 1560, contributions: 42 },
  { rank: 2, username: 'BlockBuilder', address: '0x5d6...7e8f', reputation: 1350, contributions: 38 },
  { rank: 3, username: 'TokenWhisperer', address: '0x9a0...1b2c', reputation: 1120, contributions: 31 },
  { rank: 4, username: 'Maria Blockchain', address: '0x8c5...14c0', reputation: 780, contributions: 24 },
  { rank: 5, username: 'SmartContractor', address: '0x3d4...5e6f', reputation: 720, contributions: 23 },
  { rank: 6, username: 'DAOexplorer', address: '0x7g8...9h0i', reputation: 690, contributions: 20 },
  { rank: 7, username: 'Web3Wizard', address: '0xj1k...2l3m', reputation: 640, contributions: 19 },
  { rank: 8, username: 'ConsensusBuilder', address: '0xn4o...5p6q', reputation: 580, contributions: 17 },
  { rank: 9, username: 'ChainChampion', address: '0xr7s...8t9u', reputation: 520, contributions: 16 },
  { rank: 10, username: 'BlockchainBaron', address: '0xv0w...1x2y', reputation: 490, contributions: 15 },
]

const ReputationSystem = () => {
  const address = useAddress()
  const connectionStatus = useConnectionStatus()
  const connect = useConnect()
  const [activeTab, setActiveTab] = useState('profile')
  const [userProfile, setUserProfile] = useState(mockUserProfile)
  const [leaderboard, setLeaderboard] = useState(mockLeaderboard)
  
  // Funções para manipular os dados (em um cenário real, interagiriam com blockchain)
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('pt-BR', options)
  }
  
  const shortenAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }
  
  // Calcular progresso para o próximo nível
  const calculateLevelProgress = () => {
    return (userProfile.xp / userProfile.xpToNextLevel) * 100
  }
  
  if (!address) {
    return (
      <div className={style.container}>
        <h2 className={style.title}>Sistema de Reputação e Contribuições</h2>
        <div className="text-center py-12">
          <p className="text-xl mb-6">Conecte sua carteira para visualizar seu perfil de contribuidor.</p>
          <p className="mb-8 text-gray-400">
            Nosso sistema de reputação acompanha suas contribuições para a DAO 
            e recompensa você com badges, pontos de reputação e tokens GOV.
          </p>
          <button 
            className={style.connectButton}
            onClick={() => connect()}
          >
            Conectar Carteira
          </button>
        </div>
      </div>
    )
  }
  
  // Simular que o usuário não tem perfil ainda
  const hasProfile = true

  if (!hasProfile) {
    return (
      <div className={style.container}>
        <h2 className={style.title}>Sistema de Reputação e Contribuições</h2>
        <div className={style.emptyProfilePrompt}>
          <p className="text-xl mb-4">Você ainda não tem um perfil de contribuidor</p>
          <p className="mb-8 text-gray-400 max-w-2xl mx-auto">
            Comece a participar da comunidade criando propostas, votando em decisões 
            ou contribuindo com código, educação ou marketing para a DAO.
          </p>
          <button className={style.emptyProfileButton}>
            Começar a Contribuir
          </button>
        </div>
      </div>
    )
  }
  
  return (
    <div className={style.container}>
      <h2 className={style.title}>Sistema de Reputação e Contribuições</h2>
      
      {/* Tabs de navegação */}
      <div className={style.tabs}>
        <div 
          className={`${style.tab} ${activeTab === 'profile' ? style.activeTab : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Meu Perfil
        </div>
        <div 
          className={`${style.tab} ${activeTab === 'leaderboard' ? style.activeTab : ''}`}
          onClick={() => setActiveTab('leaderboard')}
        >
          Ranking da Comunidade
        </div>
      </div>
      
      {activeTab === 'profile' ? (
        <>
          {/* Seção de Perfil */}
          <div className={style.profileSection}>
            <div className={style.profileHeader}>
              <div className={style.profileInfo}>
                <h3 className={style.username}>{userProfile.username}</h3>
                <p className={style.address}>{shortenAddress(userProfile.address)}</p>
                <p className={style.memberSince}>Membro desde {formatDate(userProfile.memberSince)}</p>
              </div>
              <div>
                <div className="text-center">
                  <p className="text-2xl font-bold">Nível {userProfile.level}</p>
                  <div className={style.levelProgressBar}>
                    <div 
                      className={style.progressFill} 
                      style={{ width: `${calculateLevelProgress()}%` }} 
                    />
                  </div>
                  <p className="text-sm text-gray-400">
                    {userProfile.xp} / {userProfile.xpToNextLevel} XP
                  </p>
                </div>
              </div>
            </div>
            
            <div className={style.statsGrid}>
              <div className={style.statCard}>
                <p className={style.statValue}>{userProfile.reputation}</p>
                <p className={style.statLabel}>Pontos de Reputação</p>
              </div>
              <div className={style.statCard}>
                <p className={style.statValue}>{userProfile.tokensEarned}</p>
                <p className={style.statLabel}>Tokens GOV Ganhos</p>
              </div>
              <div className={style.statCard}>
                <p className={style.statValue}>{userProfile.proposalsCreated}</p>
                <p className={style.statLabel}>Propostas Criadas</p>
              </div>
              <div className={style.statCard}>
                <p className={style.statValue}>{userProfile.votesParticipated}</p>
                <p className={style.statLabel}>Votações Participadas</p>
              </div>
            </div>
          </div>
          
          {/* Seção de Badges */}
          <div className={style.badgesSection}>
            <h3 className={style.sectionTitle}>Badges Conquistadas</h3>
            <div className={style.badgesGrid}>
              {userProfile.badges.map(badge => (
                <div key={badge.id} className={style.badgeCard}>
                  <div className={style.badgeIcon}>{badge.icon}</div>
                  <p className={style.badgeTitle}>{badge.title}</p>
                  <p className={style.badgeDescription}>{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Seção de Contribuições */}
          <div className={style.contributionsSection}>
            <h3 className={style.sectionTitle}>Histórico de Contribuições</h3>
            <div className={style.contributionsList}>
              {userProfile.contributions.map(contribution => (
                <div key={contribution.id} className={style.contributionCard}>
                  <div className={style.contributionHeader}>
                    <h4 className={style.contributionTitle}>{contribution.title}</h4>
                    <span className={style.contributionPoints}>+{contribution.points} XP</span>
                  </div>
                  <p className={style.contributionDate}>
                    {formatDate(contribution.date)} • {contribution.type}
                  </p>
                  <p className="mt-2 text-sm">{contribution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        // Seção de Leaderboard
        <div className={style.leaderboardSection}>
          <table className={style.leaderboardTable}>
            <thead>
              <tr>
                <th className={style.tableHeader}>Posição</th>
                <th className={style.tableHeader}>Membro</th>
                <th className={style.tableHeader}>Reputação</th>
                <th className={style.tableHeader}>Contribuições</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(member => (
                <tr 
                  key={member.rank} 
                  className={`${style.tableRow} ${member.address === userProfile.address ? style.highlightedRow : ''}`}
                >
                  <td className={`${style.tableCell} ${style.rankCell}`}>{member.rank}</td>
                  <td className={style.tableCell}>
                    <div>
                      <div>{member.username}</div>
                      <div className="text-xs text-gray-400">{shortenAddress(member.address)}</div>
                    </div>
                  </td>
                  <td className={style.tableCell}>{member.reputation}</td>
                  <td className={style.tableCell}>{member.contributions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ReputationSystem 