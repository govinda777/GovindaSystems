import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AgileConsulting from '../components/services/AgileConsulting'
import Web3Development from '../components/services/Web3Development'
import DigitalMarketing from '../components/services/DigitalMarketing'
import SpecialSolutions from '../components/services/SpecialSolutions'

const style = {
  wrapper: 'min-h-screen',
  container: 'max-w-6xl mx-auto py-12 px-4',
  title: 'text-4xl font-bold text-center mb-16',
  subtitle: 'text-2xl font-semibold mb-4 mt-12',
  description: 'text-lg mb-8 max-w-3xl mx-auto text-center',
}

export default function ServicesPage() {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Soluções e Serviços | Govinda Systems DAO</title>
        <meta name="description" content="Conheça as soluções e serviços desenvolvidos pela nossa comunidade Govinda Systems DAO." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <div className={style.container}>
        <h1 className={style.title}>Soluções Desenvolvidas Pela Nossa Comunidade</h1>
        <p className={style.description}>
          Nossa força vem da inteligência coletiva que utiliza técnicas inovadoras de processos e tecnologias emergentes 
          para obter o melhor resultado custo e benefício para o ecossistema.
        </p>
        
        <AgileConsulting />
        <Web3Development />
        <DigitalMarketing />
        <SpecialSolutions />
      </div>
      
      <Footer />
    </div>
  )
} 