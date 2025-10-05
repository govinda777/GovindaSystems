# Estrutura de Dados - Blockchain + Privy

## 📊 Arquitetura de Dados Descentralizada

Não utilizaremos banco de dados tradicional. Todos os dados estarão distribuídos entre **Privy** (dados de usuário) e **Blockchain** (dados transacionais e de estado).

## 1. Dados no Privy

O Privy gerenciará os dados de autenticação e perfil dos usuários:

```typescript
// Estrutura de dados do Privy (automático)
interface PrivyUser {
  id: string;                    // ID único do Privy
  wallet: {
    address: string;              // Endereço da carteira
    chainId: string;              // Rede blockchain
    walletClientType: string;     // Tipo de carteira
  };
  email?: {
    address: string;              // Email do usuário (opcional)
    verified: boolean;
  };
  phone?: {
    number: string;               // Telefone (opcional)
    verified: boolean;
  };
  createdAt: Date;                // Data de criação
  linkedAccounts: Array<{         // Contas vinculadas (Google, Twitter, etc)
    type: string;
    address: string;
  }>;
}
```

**O que o Privy armazena:**
- Endereço da carteira
- Email (opcional)
- Telefone (opcional)
- Contas sociais vinculadas
- Preferências de autenticação

## 2. Dados na Blockchain

Todos os dados transacionais e de estado são armazenados nos smart contracts:

### 2.1 NFT Data (GovindasystemsNFT.sol)

```solidity
// Dados armazenados on-chain
struct NFTData {
    uint256 tokenId;           // ID do token
    address owner;             // Dono atual
    NFTTier tier;              // Bronze, Silver, Gold, Platinum
    string tokenURI;           // Metadata URI (IPFS)
    uint256 mintedAt;          // Timestamp do mint
}
```

**Eventos emitidos:**
- `Transfer(from, to, tokenId)` - Transferências
- `Minted(to, tokenId, tier)` - Novos mints

### 2.2 Staking Data (NFTStaking.sol)

```solidity
// Dados armazenados on-chain
struct StakeInfo {
    address owner;             // Dono do stake
    uint256 tokenId;           // ID da NFT em stake
    uint256 startTime;         // Início do stake
    uint256 endTime;           // Fim do período
    StakingPeriod period;      // 6m, 1a, 5a
    uint256 lastClaimTime;     // Último claim de rewards
    bool active;               // Status do stake
}

mapping(uint256 => StakeInfo) public stakes;
mapping(address => uint256[]) public userStakes;
```

**Eventos emitidos:**
- `Staked(user, tokenId, period)` - Novo stake
- `Unstaked(user, tokenId)` - Fim do stake
- `RewardsClaimed(user, amount)` - Claim de rewards

### 2.3 Rewards Data (GOVAPPToken.sol)

```solidity
// Dados do token ERC20
mapping(address => uint256) public balanceOf;
mapping(address => mapping(address => uint256)) public allowance;
```

**Eventos emitidos:**
- `Transfer(from, to, amount)` - Transferências
- `Minted(to, amount)` - Novos tokens criados

### 2.4 Treasury Data (TreasuryDAO.sol)

```solidity
// Dados financeiros on-chain
uint256 public totalRevenue;
uint256 public totalDistributed;
uint256 public reinvestmentBalance;
uint256 public reserveBalance;
```

**Eventos emitidos:**
- `RevenueReceived(amount, timestamp)` - Receita recebida
- `RevenueDistributed(amount, timestamp)` - Distribuição feita

### 2.5 Profit Distribution Data (ProfitDistribution.sol)

```solidity
// Dados de distribuição de lucros
struct Distribution {
    uint256 amount;            // Total distribuído
    uint256 timestamp;         // Quando foi feito
    uint256 totalStakers;      // Número de stakers elegíveis
    mapping(address => bool) claimed;  // Quem já reclamou
}

mapping(uint256 => Distribution) public distributions;
```

**Eventos emitidos:**
- `DistributionCreated(distributionId, amount)` - Nova distribuição
- `ProfitClaimed(user, distributionId, amount)` - Lucro reclamado

## 3. Indexação de Dados (The Graph)

Para facilitar queries complexas, usaremos **The Graph** para indexar eventos da blockchain:

```graphql
# Schema do The Graph
type NFT @entity {
  id: ID!                      # tokenId
  owner: User!                 # Dono atual
  tier: String!                # Bronze/Silver/Gold/Platinum
  mintedAt: BigInt!            # Timestamp
  isStaked: Boolean!           # Se está em stake
  currentStake: Stake          # Stake atual (se houver)
}

type User @entity {
  id: ID!                      # wallet address
  nfts: [NFT!]! @derivedFrom(field: "owner")
  stakes: [Stake!]! @derivedFrom(field: "owner")
  totalRewardsClaimed: BigInt!
  totalProfitReceived: BigInt!
}

type Stake @entity {
  id: ID!                      # Compound key: tokenId-stakeIndex
  nft: NFT!
  owner: User!
  period: String!              # 6months/1year/5years
  startTime: BigInt!
  endTime: BigInt!
  lastClaimTime: BigInt!
  totalClaimed: BigInt!
  isActive: Boolean!
  claims: [RewardClaim!]! @derivedFrom(field: "stake")
}

type RewardClaim @entity {
  id: ID!                      # tx hash
  stake: Stake!
  user: User!
  amount: BigInt!
  timestamp: BigInt!
  transactionHash: String!
}

type ProfitDistribution @entity {
  id: ID!                      # distributionId
  amount: BigInt!
  timestamp: BigInt!
  totalStakers: Int!
  claims: [ProfitClaim!]! @derivedFrom(field: "distribution")
}

type ProfitClaim @entity {
  id: ID!                      # tx hash
  distribution: ProfitDistribution!
  user: User!
  amount: BigInt!
  timestamp: BigInt!
  transactionHash: String!
}

type FinancialMetric @entity {
  id: ID!                      # timestamp
  totalRevenue: BigInt!
  totalDistributed: BigInt!
  treasuryBalance: BigInt!
  timestamp: BigInt!
}
```

## 4. Como Consultar os Dados

### 4.1 Dados do Privy (Frontend)

```typescript
import { usePrivy } from '@privy-io/react-auth';

function MyComponent() {
  const { user, authenticated } = usePrivy();
  
  if (authenticated) {
    console.log(user.wallet.address);  // Endereço da carteira
    console.log(user.email?.address);  // Email (se fornecido)
  }
}
```

### 4.2 Dados da Blockchain (Direct Contract Calls)

```typescript
import { useContract, useContractRead } from 'wagmi';
import NFTStakingABI from './abis/NFTStaking.json';

function StakingInfo() {
  const { data: userStakes } = useContractRead({
    address: NFT_STAKING_ADDRESS,
    abi: NFTStakingABI,
    functionName: 'getUserStakes',
    args: [userAddress],
  });
  
  return <div>{userStakes?.length} NFTs em staking</div>;
}
```

### 4.3 Dados Indexados (The Graph)

```typescript
import { useQuery, gql } from '@apollo/client';

const GET_USER_DATA = gql`
  query GetUserData($address: ID!) {
    user(id: $address) {
      id
      totalRewardsClaimed
      totalProfitReceived
      stakes(where: { isActive: true }) {
        id
        nft {
          id
          tier
        }
        period
        startTime
        endTime
        totalClaimed
      }
    }
  }
`;

function UserDashboard({ address }) {
  const { data, loading } = useQuery(GET_USER_DATA, {
    variables: { address: address.toLowerCase() }
  });
  
  return (
    <div>
      <h2>Total Rewards: {data?.user.totalRewardsClaimed}</h2>
      <h3>Stakes Ativos: {data?.user.stakes.length}</h3>
    </div>
  );
}
```

## 5. Cache e Performance

Para melhorar a performance, usaremos cache em memória:

```typescript
// Redis para cache de dados da blockchain (opcional)
const CACHE_TTL = 60; // 60 segundos

async function getUserStakes(address: string) {
  // Tentar buscar do cache
  const cached = await redis.get(`stakes:${address}`);
  if (cached) return JSON.parse(cached);
  
  // Se não houver cache, buscar da blockchain
  const stakes = await stakingContract.getUserStakes(address);
  
  // Salvar no cache
  await redis.setex(`stakes:${address}`, CACHE_TTL, JSON.stringify(stakes));
  
  return stakes;
}
```

## 6. Metadados NFT (IPFS)

Os metadados das NFTs são armazenados no IPFS:

```json
{
  "name": "Govinda Systems Investor #1",
  "description": "NFT de investidor da Govinda Systems DAO",
  "image": "ipfs://QmXx.../image.png",
  "attributes": [
    {
      "trait_type": "Tier",
      "value": "Gold"
    },
    {
      "trait_type": "Mint Date",
      "value": "2025-10-03"
    },
    {
      "trait_type": "Investment Value",
      "value": "0.5 ETH"
    }
  ]
}
```

## Resumo da Arquitetura de Dados

| Tipo de Dado | Onde é Armazenado | Como Consultar |
|--------------|-------------------|----------------|
| Autenticação | Privy | SDK do Privy |
| Email/Telefone | Privy | SDK do Privy |
| NFTs (ownership) | Blockchain (ERC721) | Contract calls / The Graph |
| Stakes | Blockchain (NFTStaking) | Contract calls / The Graph |
| Rewards | Blockchain (GOV_APP) | Contract calls / The Graph |
| Distribuições | Blockchain (ProfitDistribution) | Contract calls / The Graph |
| Métricas financeiras | Blockchain (Treasury) | Contract calls / The Graph |
| Metadados NFT | IPFS | IPFS gateway |
| Analytics (agregados) | The Graph | GraphQL queries |

