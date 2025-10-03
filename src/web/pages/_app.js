import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
// TODO: Re-enable Thirdweb after fixing Preact/Coinbase SDK dependency conflict
// import { ThirdwebProvider, smartWallet, metamaskWallet } from "@thirdweb-dev/react";
// import { Base, BaseGoerli } from "@thirdweb-dev/chains";
import { ThemeProvider } from '../context/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}