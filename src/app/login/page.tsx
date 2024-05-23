import React from 'react'
import Image from 'next/image'

export default function Login() {
    return (
      <main className="overflow-hidden">
        <div className="w-full h-screen flex">
            <div className="w-1/2 flex flex-col items-center justify-center my-auto">
                <div className='flex items-center justify-center mb-8'>
                    <div className='relative cursor-pointer '>
                        <Image src="/images/logo.png" alt="logo" layout="responsive" width={73} height={50}  objectFit='contain'/>
                    </div>
                    <a href="#"className='ml-2 font-primary text-2xl font-bold'>DECORA</a>
                </div>
                <form action="" className='flex flex-col w-3/4 mx-auto border-emascoklat border-2 py-12 p-2 rounded-lg items-center'>
                    <h2 className="text-xl font-bold mb-6 text-center font-primary">Masuk Akun</h2>
                    {/* --------------------------- */}
                    <input type="email" placeholder='Email'className='font-secondary max-w-sm'/>
                    <input type="password" placeholder='Password' className='font-secondary max-w-sm'/>
                    <button type="submit" className='mt-10 font-secondary max-w-sm'>Masuk</button>

                    {/* --------------------------- */}
                    <span className="horizontalLines text-gray-500 my-8 font-secondary">ATAU</span>
                    <div className="flex flex-col items-center justify-center font-secondary">
                        <span>Tidak punya akun? <a href="/register" className="text-blue-500">Daftar</a></span>
                        <a href="#" className="text-gray-500 mt-3">Lupa kata sandi?</a>
                    </div>
                </form>
            </div>
            <div className="w-1/2 relative ">
                <Image src="/images/login.png" alt='home' layout='fill'/>
            </div>
        </div>
      </main>
    );
  }