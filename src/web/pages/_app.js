import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { Base, BaseGoerli } from "@thirdweb-dev/chains";
import { ThemeProvider } from '../context/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThirdwebProvider
        activeChain={Base}
        supportedChains={[Base, BaseGoerli]}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        supportedWallets={[metamaskWallet()]}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ThemeProvider>
  )
}