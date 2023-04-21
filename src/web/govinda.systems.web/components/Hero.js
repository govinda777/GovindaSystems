import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>

    <div>
      <header className="bg-primary text-white text-center py-5">
        <h1>Govinda Systems DAO</h1>
        <p>Simplificando a Tecnologia para Todos</p>
      </header>

      <section className="container mt-5">
        <h2 className="text-center mb-4">Bem-vindo à Govinda Systems DAO</h2>
        <p>A Govinda Systems DAO é uma organização descentralizada autônoma que oferece soluções tecnológicas inovadoras e acessíveis. Nós nos esforçamos para simplificar a tecnologia e torná-la compreensível e útil para todos, independentemente do seu nível de conhecimento técnico.</p>

        <h3 className="mt-4">Nossos serviços</h3>
        <ul>
          <li>* Desenvolvimento de software personalizado</li>
          <li>* Aplicações móveis e web</li>
          <li>* Soluções em blockchain e criptomoedas</li>
          <li>* Consultoria e treinamento em tecnologia</li>
        </ul>

        <h3 className="mt-4">Por que escolher a Govinda Systems DAO?</h3>
        <p>Nós nos orgulhamos de oferecer:</p>
        <ul>
          <li>* Atendimento personalizado e adaptado às suas necessidades</li>
          <li>* Soluções inovadoras e de alta qualidade</li>
          <li>* Transparência e comunicação eficiente</li>
          <li>* Uso de tecnologias emergentes, como blockchain e criptomoedas</li>
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

      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Govinda Systems DAO
            </div>
            <div className={style.description}>
              Simplificando a Tecnologia para Todos
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Magnésio</button>
              <button className={style.button}>Outros produtos</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img  
              className="rounded-t-lg"
              src="https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277"
                >
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
