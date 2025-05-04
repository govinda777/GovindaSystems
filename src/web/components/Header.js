import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import ThemeSwitcher from './ThemeSwitcher.js'

const Header = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  return (
    <header className="bg-dark w-screen px-5 py-3 flex">
      <Link href="/">
        <div className="flex items-center cursor-pointer">
          <Image src={logo} height={40} width={40} alt="Govinda Systems Logo" />
          <div className="ml-3 text-white font-semibold text-2xl">Govinda Systems DAO</div>
        </div>
      </Link>
      <div className="flex flex-1 mx-3 w-max-[520px] items-center bg-dark-bg-lighter rounded-lg hover:bg-dark/80 transition-colors duration-200">
        <div className="text-gray mx-3 font-bold text-lg">
          <AiOutlineSearch />
        </div>
        <input
          className="h-10 w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-white placeholder:text-gray"
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className="flex items-center justify-end">
        <Link href="/services" className="text-white px-4 font-bold hover:text-primary cursor-pointer transition-colors duration-200">
          Soluções
        </Link>
        <Link href="/token-ecosystem" className="text-white px-4 font-bold hover:text-primary cursor-pointer transition-colors duration-200">
          Tokens
        </Link>
        <Link href="/governance" className="text-white px-4 font-bold hover:text-primary cursor-pointer transition-colors duration-200">
          Governança
        </Link>
        <Link href="/projects" className="text-white px-4 font-bold hover:text-primary cursor-pointer transition-colors duration-200">
          Projetos
        </Link>
        <Link href="/join" className="text-white px-4 font-bold hover:text-primary cursor-pointer transition-colors duration-200">
          Comunidade
        </Link>
        <a 
          href="https://stackoverflowteams.com/c/govindasystems"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white px-4 font-bold hover:text-primary cursor-pointer transition-colors duration-200"
        >
          Fórum
        </a>
        
        {/* Theme Switcher */}
        <div className="ml-2 mr-4">
          <ThemeSwitcher />
        </div>
        
        {address ? (
          <>
            <div className="text-white text-3xl font-black px-4 hover:text-secondary cursor-pointer transition-colors duration-200">
              <CgProfile />
            </div>
            <div 
              onClick={disconnectWallet}
              className="text-white text-3xl font-black px-4 hover:text-secondary cursor-pointer transition-colors duration-200"
            >
              <MdOutlineAccountBalanceWallet />
            </div>
          </>
        ) : (
          <button
            onClick={connectWithMetamask}
            className="ml-4 bg-primary text-white px-4 py-2 rounded-lg font-bold hover:bg-primary-dark transition-colors duration-200"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </header>
  )
}

export default Header
