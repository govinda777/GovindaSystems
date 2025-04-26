import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useAddress, useMetamask } from "@thirdweb-dev/react"
import Image from 'next/image'

const style = {
  wrapper: 'min-h-screen',
  container: 'max-w-4xl mx-auto py-12 px-4',
  title: 'text-4xl font-bold text-center mb-12',
  stepsContainer: 'mt-12 space-y-8',
  stepCard: 'bg-gray-800 p-6 rounded-lg shadow-lg',
  stepNumber: 'text-6xl font-bold text-gray-700 mb-4',
  stepTitle: 'text-2xl font-semibold mb-4',
  stepDescription: 'mb-4',
  button: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 inline-block',
  tutorialLink: 'text-blue-400 hover:text-blue-300 underline mt-2 inline-block',
  connectWalletButton: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 mt-8 inline-block',
  metaMaskButton: 'bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 inline-block flex items-center',
  callout: 'mt-12 bg-gray-800 p-6 border border-gray-700 rounded-lg text-center',
}

export default function JoinPage() {
  const address = useAddress()
  const connectWithMetamask = useMetamask()
  
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Junte-se à Comunidade | Govinda Systems DAO</title>
        <meta name="description" content="Torne-se membro da comunidade Govinda Systems DAO e participe do desenvolvimento de soluções Web3." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <div className={style.container}>
        <h1 className={style.title}>Junte-se à Nossa Comunidade</h1>
        
        <p className="text-center text-xl mb-8">
          Para se tornar membro da comunidade Govinda Systems DAO, é simples e aberto a todos:
        </p>
        
        <div className={style.stepsContainer}>
          <div className={style.stepCard}>
            <div className={style.stepNumber}>1</div>
            <h3 className={style.stepTitle}>Acesse o hub da comunidade</h3>
            <p className={style.stepDescription}>
              Você já está no portal da nossa comunidade. Agora, vamos preparar tudo para você participar!
            </p>
          </div>
          
          <div className={style.stepCard}>
            <div className={style.stepNumber}>2</div>
            <h3 className={style.stepTitle}>Participe da Comunidade</h3>
            <p className={style.stepDescription}>
              Clique no botão abaixo para iniciar o processo de participação:
            </p>
            <button className={style.button}>
              Participar da Comunidade
            </button>
          </div>
          
          <div className={style.stepCard}>
            <div className={style.stepNumber}>3</div>
            <h3 className={style.stepTitle}>Configure sua carteira MetaMask</h3>
            <p className={style.stepDescription}>
              A MetaMask é sua identidade digital na blockchain. Você precisará dela para interagir com nosso ecossistema.
            </p>
            
            {address ? (
              <p className="text-green-400 mb-4">✅ Carteira conectada: {address.slice(0, 6)}...{address.slice(-4)}</p>
            ) : (
              <button
                className={style.metaMaskButton}
                onClick={() => connectWithMetamask()}
              >
                <Image src="/metamask-fox.svg" alt="MetaMask" width={24} height={24} className="mr-2" />
                Conectar MetaMask
              </button>
            )}
            
            <a 
              href="https://www.youtube.com/watch?v=cSBp71amDZo" 
              target="_blank" 
              rel="noopener noreferrer"
              className={style.tutorialLink}
            >
              👉 Tutorial: Como configurar sua MetaMask
            </a>
          </div>
          
          <div className={style.stepCard}>
            <div className={style.stepNumber}>4</div>
            <h3 className={style.stepTitle}>Comece a explorar, contribuir e colaborar!</h3>
            <p className={style.stepDescription}>
              Agora você pode explorar todas as áreas da nossa comunidade, participar das discussões no fórum e contribuir para nossos projetos.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="/governance" className="text-blue-400 hover:text-blue-300 underline">
                Governança
              </Link>
              <Link href="/services" className="text-blue-400 hover:text-blue-300 underline">
                Soluções
              </Link>
              <a 
                href="https://stackoverflowteams.com/c/govindasystems" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Fórum Comunitário
              </a>
            </div>
          </div>
        </div>
        
        <div className={style.callout}>
          <p className="text-xl mb-2">Não é necessário nenhum pagamento para começar a participar da comunidade Govinda Systems DAO.</p>
          <p>Valorizamos suas contribuições e ideias, não seu dinheiro.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  )
} 