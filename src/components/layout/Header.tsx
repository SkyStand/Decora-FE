import React from 'react'
import Image from 'next/image'
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai';

export default function Header(){
    return(
        <header className=''>
            <div className='w-full h-screen'>
                <Image src="/images/home.png" alt='home' layout='fill' objectFit='cover' />
            </div>
            <form action="" className='absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-sm mx-auto'>
                <div className='relative w-full rounded-full bg-black flex items-center'>
                    <input type="search" placeholder='welcome dear customer...' className='w-[85%] p-4 pl-6 bg-transparent font-primary text-white focus:outline-none'/>
                    <button className='absolute text-white right-0 w-1/5 border-none'>
                        <AiOutlineSearch size='24'/>
                    </button>
                </div>
            </form>
        </header>
    )
}

