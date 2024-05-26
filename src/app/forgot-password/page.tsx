import React from 'react'
import Image from 'next/image'
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
    return (
      <main className="overflow-y max-h-screen">
        <div className="w-full h-screen flex">
            <div className="w-3/5 flex flex-col items-center justify-center my-auto">
                {/* ------- title -------- */}
                <div className='flex items-center justify-center my-8'>
                    <div className='cursor-pointer'>
                        <Image src="/images/logo.png" alt="logo" layout="responsive" width={73} height={50}  objectFit='contain'/>
                    </div>
                    <a href="/"className='ml-2 font-primary text-2xl font-bold'>DECORA</a>
                </div>

                {/* ------- form ----------- */}
                <form action="" className='flex flex-col w-3/4 mx-auto border-emascoklat border-2 py-12 p-2 rounded-lg items-center mb-8'>
                    <h2 className="text-xl font-bold mb-6 text-center font-primary">Reset Kata Sandi</h2>
                    {/* -- */}
                    <input type="email" placeholder='Email'className='font-secondary max-w-sm'/>
                    <a href="/new-password" className='submit mt-10 text-center font-secondary w-full max-w-sm rounded-xl px-6 py-3'>Berikutnya</a>
                    <a href="/" className="text-gray-500 mt-6 font-secondary">Kembali ke halaman masuk</a>
                </form>
            </div>

            {/* -------- image ----------*/}
            <div className="w-2/5 h-screen fixed right-0">
                <Image src="/images/forgotpassword.png" alt='' layout='fill'/>
            </div>
        </div>
      </main>
    );
  }