import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="App">
      <header className="bg-primary text-white text-center py-5">
        <h1>Govinda Systems DAO</h1>
        <p>Simplificando a Tecnologia para Todos</p>
      </header>

      <section className="container mt-5">
        <h2 className="text-center mb-4">Bem-vindo à Govinda Systems DAO</h2>
        <p>A Govinda Systems DAO é uma organização descentralizada autônoma que oferece soluções tecnológicas inovadoras e acessíveis. Nós nos esforçamos para simplificar a tecnologia e torná-la compreensível e útil para todos, independentemente do seu nível de conhecimento técnico.</p>

        <h3 className="mt-4">Nossos serviços</h3>
        <ul>
          <li>Desenvolvimento de software personalizado</li>
          <li>Aplicações móveis e web</li>
          <li>Soluções em blockchain e criptomoedas</li>
          <li>Consultoria e treinamento em tecnologia</li>
        </ul>

        <h3 className="mt-4">Por que escolher a Govinda Systems DAO?</h3>
        <p>Nós nos orgulhamos de oferecer:</p>
        <ul>
          <li>Atendimento personalizado e adaptado às suas necessidades</li>
          <li>Soluções inovadoras e de alta qualidade</li>
          <li>Transparência e comunicação eficiente</li>
          <li>Uso de tecnologias emergentes, como blockchain e criptomoedas</li>
        </ul>

        <h3 className="mt-4">Pagamentos em GOV_COINS</h3>
        <p>A Govinda Systems DAO aceita pagamentos em GOV_COINS, uma criptomoeda inovadora que facilita transações rápidas e seguras. Isso permite maior flexibilidade e conveniência para nossos clientes.</p>

        <h3 className="mt-4">Entre em contato conosco</h3>
        <p>Estamos ansiosos para ouvir suas necessidades e trabalhar juntos para criar soluções tecnológicas que impulsionem seu sucesso. Entre em contato conosco hoje para saber mais sobre nossos serviços e como podemos ajudá-lo a alcançar seus objetivos.</p>
        <p><strong>Email:</strong> contato@govindasystems.dao</p>
      </section>

      <footer className="bg-primary text-white text-center py-3">
        <p>&copy; Govinda Systems DAO. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
