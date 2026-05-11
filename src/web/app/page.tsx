"use client";

import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Footer from '../components/Footer';
import AgileConsulting from '../components/services/AgileConsulting';
import Web3Development from '../components/services/Web3Development';
import DigitalMarketing from '../components/services/DigitalMarketing';
import SpecialSolutions from '../components/services/SpecialSolutions';
import Dework from '../components/Dework';
import UseCases from '../components/UseCases';
import Governance from '../components/Governance';
import TokenEcosystem from '../components/TokenEcosystem';
import { client } from '../lib/sanityClient';
import toast, { Toaster } from 'react-hot-toast';
import { usePrivy } from '@privy-io/react-auth';

const style = {
  wrapper: ``,
};

export default function Home() {
  const { user } = usePrivy();
  const address = user?.wallet?.address;

  const welcomeUser = (userName: string, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back ${userName !== 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    );
  };

  useEffect(() => {
    if (!address) return;
    (async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      };

      try {
        const result = await client.createIfNotExists(userDoc);
        welcomeUser(result.userName);
      } catch (error) {
        console.error("Error creating user in Sanity:", error);
      }
    })();
  }, [address]);

  return (
    <div className={style.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Hero />
      <About />
      <div className="container py-20">
        <AgileConsulting />
        <Web3Development />
        <DigitalMarketing />
        <SpecialSolutions />
      </div>
      <Dework />
      <UseCases />
      <TokenEcosystem />
      <Governance />
      <Footer />
    </div>
  );
}
