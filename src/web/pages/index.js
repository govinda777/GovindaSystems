import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Token from '../components/Token'
import Governance from '../components/Governance'
import Services from '../components/services/Services'
import Footer from '../components/Footer'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import { useEffect } from 'react'
import { client } from '../lib/sanityClient'
import toast, { Toaster } from 'react-hot-toast'

const style = {
  wrapper: ``,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42] `,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
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
        <title>Govinda Systems DAO - Simplificando a Tecnologia para Todos</title>
        <meta name="description" content="A Govinda Systems DAO é uma organização descentralizada autônoma que oferece soluções tecnológicas inovadoras e acessíveis. Conheça nossa comunidade descentralizada!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Toaster position="top-center" reverseOrder={false} />
      {true ? (
        <>
          <Header />
          <Hero />
          <About />
          <Services />
          <Governance />
          <Token />
          <Footer />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          <button
            className={style.button}
            onClick={connectWithMetamask}
          >
            Connect Wallet
          </button>
          <div className={style.details}>
            You need Chrome to be
            <br /> able to run this app.
          </div>
        </div>
      )}
    </div>
  );
}
