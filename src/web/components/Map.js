import React from 'react'

const style = {
  wrapper: `w-full py-16 bg-gradient-to-b from-gray-900 to-black min-h-screen`,
  container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
  title: `text-4xl md:text-5xl font-bold text-center text-white mb-4`,
  subtitle: `text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto`,
  mapContainer: `flex justify-center items-center`,
  mapImage: `max-w-full h-auto rounded-lg shadow-2xl border border-gray-700`,
}

const Map = () => {
  console.log('🗺️ Map component is rendering!')
  
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <h2 className={style.title}>
          Mapa da Govinda Systems
        </h2>
        <p className={style.subtitle}>
          Explore nossa estrutura organizacional e veja como nossa DAO está conectada globalmente
        </p>
        <div className={style.mapContainer}>
          <img 
            src="/Govinda_Systems_Map.gif" 
            alt="Mapa da Govinda Systems DAO mostrando a estrutura organizacional"
            className={style.mapImage}
            onLoad={() => console.log('✅ Imagem carregada com sucesso!')}
            onError={(e) => console.error('❌ Erro ao carregar imagem:', e)}
          />
        </div>
      </div>
    </section>
  )
}

export default Map 