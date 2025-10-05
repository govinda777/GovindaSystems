import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/services/Services'
import Footer from '../components/Footer'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
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
        <title>Govinda Systems DAO - Comunidade de Inovação em IA</title>
        <meta name="description" content="Junte-se à Govinda Systems DAO, uma comunidade de inovadores construindo o futuro da Inteligência Artificial de forma descentralizada e colaborativa. Participe de projetos open source." />
        <meta name="keywords" content="DAO, inteligência artificial, IA, comunidade, open source, blockchain, inovação, automação, machine learning, web3" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Govinda Systems DAO - Comunidade de Inovação em IA" />
        <meta property="og:description" content="Construindo o futuro da Inteligência Artificial de forma descentralizada e colaborativa." />
        <meta property="og:url" content="https://govindasystems.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Govinda Systems DAO - Inovação em IA" />
        <meta name="twitter:description" content="Junte-se à comunidade que está construindo o futuro da IA de forma descentralizada e open source." />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <>
        <Header />
        <Hero />
        <About />
        <Services />
        <Footer />
      </>
    </div>
  );
}