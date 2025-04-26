import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import { ThirdwebProvider } from "@thirdweb-dev/react";

const activeChain = "goerli";

export default function App({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}