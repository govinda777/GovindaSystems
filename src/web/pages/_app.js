import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import { ThirdwebProvider, smartWallet, metamaskWallet, coinbaseWallet } from "@thirdweb-dev/react";
import { Polygon, Mumbai } from "@thirdweb-dev/chains";
import { ThemeProvider } from '../context/ThemeContext';

// Define the chains we want to support
const supportedChains = [Polygon, Mumbai];

// Set the active chain to Polygon Mainnet
const activeChain = Polygon;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ThirdwebProvider 
        activeChain={activeChain}
        supportedChains={supportedChains}
        clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}
        supportedWallets={[
          smartWallet({
            factoryAddress: "YOUR_FACTORY_ADDRESS",
            gasless: true,
          }),
          metamaskWallet(),
          coinbaseWallet(),
        ]}
      >
        <Component {...pageProps} />
      </ThirdwebProvider>
    </ThemeProvider>
  )
}