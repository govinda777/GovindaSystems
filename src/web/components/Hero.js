import React, { useState } from 'react'
import Image from 'next/image'
import hero from '../assets/hero.png'

export default function Hero() {
    
    return (
        <div
            class="w-full h-screen flex justify-center items-center overflow-hidden relative bg-black">
            <Image
                src={hero}
                alt="Hero Image"
                className="opacity-60 object-cover"
                fill
            />
            <div class="flex flex-col justify-center items-center px-3">
                <h1 class=" text-center text-3xl md:text-5xl text-white font-bold drop-shadow-lg">WELCOME TO <br />
                    <span class="text-primary">Govinda Systems DAO</span>
                </h1>
            </div>
        </div>
    )
}