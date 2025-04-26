import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const style = {
  wrapper: `bg-[#1E3D59] w-screen px-[1.2rem] py-[0.8rem] flex`,
  logoContainer: `flex items-center cursor-pointer`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
  searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center bg-[#2A4F6E] rounded-[0.8rem] hover:bg-[#3A6080]`,
  searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
  searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
  headerItems: ` flex items-center justify-end`,
  headerItem: `text-white px-4 font-bold text-[#e6e8eb] hover:text-[#2ECAD5] cursor-pointer transition-colors duration-200`,
  headerIcon: `text-[#e6e8eb] text-3xl font-black px-4 hover:text-[#FF6B6B] cursor-pointer transition-colors duration-200`,
}

const Header = () => {
  return (
    <div className={style.wrapper}>
      <Link href="/">
        <div className={style.logoContainer}>
          <Image src={logo} height={40} width={40} />
          <div className={style.logoText}>Govinda Systems DAO</div>
        </div>
      </Link>
      <div className={style.searchBar}>
        <div className={style.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={style.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className={style.headerItems}>
        <Link href="/services">
          <div className={style.headerItem}>Soluções</div>
        </Link>
        <Link href="/token-ecosystem">
          <div className={style.headerItem}>Tokens</div>
        </Link>
        <Link href="/governance">
          <div className={style.headerItem}>Governança</div>
        </Link>
        <Link href="/join">
          <div className={style.headerItem}>Comunidade</div>
        </Link>
        <a 
          href="https://stackoverflowteams.com/c/govinda-systems-dao"
          target="_blank"
          rel="noopener noreferrer"
          className={style.headerItem}
        >
          Fórum
        </a>
        <div className={style.headerIcon}>
          <CgProfile />
        </div>
        <div className={style.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  )
}

export default Header
