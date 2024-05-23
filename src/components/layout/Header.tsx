import React from 'react'
import Image from 'next/image'
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";

export default function Header(){
    return(
        <header>
            <div className='w-full'>
                <Image src="/images/home.png" alt='home' layout='fill' objectFit='cover'/>
            </div>
        </header>
    )
}