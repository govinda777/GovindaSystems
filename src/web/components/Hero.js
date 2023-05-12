import React, { useState } from 'react'
import Image from 'next/image'
import hero from '../assets/hero.png'

export default function Hero() {
    
    return (
        <div
            className="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black">
            <Image
                src={hero}
                alt="Hero Image"
                className="opacity-60 object-cover"
                fill
            />
            <div className="flex flex-col justify-center items-center px-3">
                <h1 className=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">WELCOME TO <br />
                    <span className="text-primary">Govinda Systems DAO</span>
                </h1>
            </div>
        </div>
    )
}