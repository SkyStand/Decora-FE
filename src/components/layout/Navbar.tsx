import React from 'react'
import Image from 'next/image'
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";

const DropDownProfile = () => {
    return (
      <div className="relative inline-block">
        <CgProfile size="36" />
        <div className="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          <div className="py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700">Profile</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700">Settings</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700">Logout</a>
          </div>
        </div>
      </div>
    );
};

const Navbar = () => {
  return (
    <nav className='absolute w-full'>
        <div className='flex w-[90%] py-4 mx-auto items-center justify-between'>
            <div className='flex w-[20%] items-center justify-center'>
                <div className='relative cursor-pointer '>
                    <Image src="/images/logo.png" alt="logo" layout="responsive" width={73} height={50}  objectFit='contain'/>
                </div>
                <a href="#"className='ml-2 font-primary text-2xl font-bold text-primary '>DECORA</a>
            </div>
            <div className='flex w-[70%] items-center justify-center gap-12 lg:gap-28 font-secondary text-lg text-primary font-semibold'>
                <a href="#">FURNITURE</a>
                <a href="#">SALE</a>
                <a href="#">ARTICLE</a>
            </div>
            <div className='flex w-[20%] items-center justify-center font-secondary gap-4 text-primary'>
                <HiShoppingCart size='35'/>
                <FaHeart size='32'/>
                {/* <DropDownProfile /> */}
                <a href="/login" className='text-lg font-semibold bg-primary text-secondary rounded-full px-10 py-2'>LOGIN</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar