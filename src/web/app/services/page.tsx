"use client";

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AgileConsulting from '../../components/services/AgileConsulting';
import Web3Development from '../../components/services/Web3Development';
import DigitalMarketing from '../../components/services/DigitalMarketing';
import SpecialSolutions from '../../components/services/SpecialSolutions';

const style = {
  wrapper: 'min-h-screen',
  container: 'max-w-6xl mx-auto py-12 px-4',
  title: 'text-4xl font-bold text-center mb-16',
  description: 'text-lg mb-8 max-w-3xl mx-auto text-center',
};

export default function ServicesPage() {
  return (
    <div className={style.wrapper}>
      <Header />

      <div className={style.container}>
        <h1 className={style.title}>Produtos e Serviços da Govinda Systems DAO</h1>
        <p className={style.description}>
          A Govinda Systems DAO é uma organização descentralizada autônoma especializada em fornecer soluções tecnológicas
          e consultorias para empresas, com foco em tecnologias blockchain e Web3.
        </p>

        <AgileConsulting />
        <Web3Development />
        <DigitalMarketing />
        <SpecialSolutions />
      </div>

      <Footer />
    </div>
  );
}
