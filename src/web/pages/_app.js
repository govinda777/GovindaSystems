import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "sepolia";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider 
      activeChain={activeChain}
      clientId="your-client-id-here" // Substitua por sua chave API real do thirdweb.com/create-api-key
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}