"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../assets/logo.png';
import ThemeSwitcher from './ThemeSwitcher';

const Header: React.FC = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-dark w-screen px-5 py-3 flex items-center justify-between shadow-md sticky top-0 z-50">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src={logo} height={40} width={40} alt="GovindaSystems Logo" />
          <div className="ml-3 text-white font-semibold text-2xl hidden md:block">GovindaSystems</div>
        </div>
      </Link>
      
      <nav className="flex items-center justify-end gap-4 md:gap-6">
        <Link href="/" className="text-white font-bold hover:text-primary cursor-pointer transition-colors duration-200">
          Início
        </Link>
        
        {/* Dropdown de Soluções */}
        <div 
          className="relative"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button className="text-white font-bold hover:text-primary cursor-pointer transition-colors duration-200 flex items-center gap-1">
            Soluções AI
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
            </svg>
          </button>
          
          {servicesOpen && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-[#1a1b1e] rounded-lg shadow-xl border border-white/10 py-2 z-50">
              <Link href="/services" className="block px-4 py-2 text-white hover:bg-primary/20 hover:text-primary transition-colors">
                🤖 Atendimento Automatizado
              </Link>
              <Link href="/services" className="block px-4 py-2 text-white hover:bg-primary/20 hover:text-primary transition-colors">
                📱 Automação Social Media
              </Link>
              <Link href="/services" className="block px-4 py-2 text-white hover:bg-primary/20 hover:text-primary transition-colors">
                ⚙️ Automação de Processos
              </Link>
              <Link href="/services" className="block px-4 py-2 text-white hover:bg-primary/20 hover:text-primary transition-colors">
                📊 Agente SEO
              </Link>
              <Link href="/services" className="block px-4 py-2 text-white hover:bg-primary/20 hover:text-primary transition-colors">
                🏛️ DAO Builder
              </Link>
              <div className="border-t border-white/10 my-2"></div>
              <Link href="/services" className="block px-4 py-2 text-primary font-bold hover:bg-primary/20 transition-colors">
                Ver Todas as Soluções →
              </Link>
            </div>
          )}
        </div>
        
        <Link href="/projects" className="text-white font-bold hover:text-primary cursor-pointer transition-colors duration-200">
          Projetos
        </Link>
        
        <Link href="/join" className="hidden md:block">
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity duration-200">
            Participar
          </button>
        </Link>
        
        <div className="ml-2">
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

export default Header;
