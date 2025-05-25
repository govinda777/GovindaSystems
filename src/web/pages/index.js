import React from 'react'
import Head from 'next/head'
import Dework from '../components/Dework'

const style = {
  wrapper: ``,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Head>
        <title>Govinda Systems DAO - Simplificando a Tecnologia para Todos</title>
        <meta name="description" content="A Govinda Systems DAO é uma organização descentralizada autônoma que oferece soluções tecnológicas inovadoras e acessíveis. Conheça nossa comunidade descentralizada!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Dework />
    </div>
  );
}
