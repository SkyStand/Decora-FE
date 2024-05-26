import React from 'react'
import Image from 'next/image'

export default function NewPassword() {
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
                    <h2 className="text-xl font-bold mb-6 text-center font-primary">Kata Sandi Baru</h2>
                    {/* -- */}
                    <input type="password" placeholder='Kata Sandi' className='font-secondary max-w-sm'/>
                    <input type="password" placeholder='Konfirmasi Kata Sandi' className='font-secondary max-w-sm'/>
                    <button type="submit" className='mt-10 font-secondary max-w-sm'>Berikutnya</button>
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