import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import AgileConsulting from '../components/services/AgileConsulting'
import Web3Development from '../components/services/Web3Development'
import DigitalMarketing from '../components/services/DigitalMarketing'
import SpecialSolutions from '../components/services/SpecialSolutions'
import Dework from '../components/Dework'
import UseCases from '../components/UseCases'
import Governance from '../components/Governance'
import TokenEcosystem from '../components/TokenEcosystem'
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: ``,
}

export default function Home() {

  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back ${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    )
  }

  useEffect(() => {
    if (!address) return
    ;(async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      }

      const result = await client.createIfNotExists(userDoc)

      welcomeUser(result.userName)
    })()
  }, [address])



  return (
    <div className={style.wrapper}>
      <Head>
        <title>GovindaSystems - Soluções em Inteligência Artificial</title>
        <meta name="description" content="Transformamos empresas através da Inteligência Artificial. Atendimento automatizado, automação de redes sociais, processos inteligentes e muito mais." />
        <meta name="keywords" content="inteligência artificial, IA, automação, chatbot, AI, machine learning, automação de processos" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GovindaSystems - Soluções em Inteligência Artificial" />
        <meta property="og:description" content="Transformamos empresas através da Inteligência Artificial" />
        <meta property="og:url" content="https://govindasystems.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GovindaSystems - Soluções em IA" />
        <meta name="twitter:description" content="Transformamos empresas através da Inteligência Artificial" />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <>
        <Header />
        <Hero />
        <About />
        <div className="container">
          <AgileConsulting />
          <Web3Development />
          <DigitalMarketing />
          <SpecialSolutions />
        </div>
        <UseCases />
        <TokenEcosystem />
        <Governance />
        <Dework />
        <Footer />
      </>
    </div>
  );
}