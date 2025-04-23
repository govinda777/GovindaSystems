import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TokenEcosystem from '../components/TokenEcosystem'

export default function TokenEcosystemPage() {
  return (
    <div>
      <Head>
        <title>Token Ecosystem | Govinda Systems DAO</title>
        <meta name="description" content="Learn about the Govinda Systems DAO token ecosystem, including GSTG, GOV, and GOV_PAG tokens." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <TokenEcosystem />
      <Footer />
    </div>
  )
} 