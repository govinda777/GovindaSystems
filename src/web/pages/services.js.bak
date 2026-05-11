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
        <title>Produtos e Serviços | Govinda Systems DAO</title>
        <meta name="description" content="Conheça os produtos e serviços desenvolvidos pela Govinda Systems DAO, especializada em tecnologias blockchain e Web3." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      
      <div className={style.container}>
        <h1 className={style.title}>Produtos e Serviços da Govinda Systems DAO</h1>
        <p className={style.description}>
          A Govinda Systems DAO é uma organização descentralizada autônoma especializada em fornecer soluções tecnológicas 
          e consultorias para empresas, com foco em tecnologias blockchain e Web3.
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