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
                        <svg width="40" height="40" viewBox="0 0 855 855" xmlns="http://www.w3.org/2000/svg">
                            <rect className='fill-blue-tua' x="29.4482" y="41.7975" width="69.3458" height="768.504"/>
                            <rect className='fill-blue-tua' x="221.337" y="41.7975" width="69.3458" height="768.504"/>
                            <rect className='fill-blue-tua' x="405.626" y="398.976" width="69.3458" height="411.325"/>
                            <rect className='fill-blue-tua' x="514.869" y="398.976" width="69.3458" height="411.325"/>
                            <rect className='fill-blue-tua' x="757.105" y="41.7975" width="69.3458" height="768.504"/>
                            <rect className='fill-blue-tua' x="29.5907" y="812.529" width="69.3458" height="445.523" transform="rotate(-90 29.5907 812.529)" />
                            <rect className='fill-blue-tua' x="29.5907" y="446.923" width="69.3458" height="445.523" transform="rotate(-90 29.5907 446.923)"/>
                            <rect className='fill-blue-tua' x="339.13" y="342.93" width="69.3458" height="360.978" transform="rotate(-90 339.13 342.93)"/>
                            <rect className='fill-blue-tua' x="628.862" y="111.143" width="69.3458" height="190.939" transform="rotate(-90 628.862 111.143)"/>
                            <rect className='fill-blue-tua' x="29.4482" y="111.143" width="69.3458" height="254.585" transform="rotate(-90 29.4482 111.143)"/>
                            <rect className='fill-blue-tua' x="514.869" y="446.473" width="69.3458" height="185.239" transform="rotate(-90 514.869 446.473)"/>
                            <rect className='fill-blue-tua' x="514.869" y="812.201" width="69.3458" height="311.581" transform="rotate(-90 514.869 812.201)"/>
                        </svg>
                    </div>
                    <a href="/"className='ml-2 font-crete text-4xl'>Decora</a>
                </div>

                {/* ------- form ----------- */}
                <form action="" className='flex flex-col w-3/4 mx-auto font-worksans border-emascoklat border-2 py-12 p-2 rounded-lg items-center mb-8'>
                    <h2 className="text-2xl font-semibold mb-10 text-center">Kata Sandi Baru</h2>
                    {/* -- */}
                    <input type="password" placeholder='Kata Sandi' className='max-w-sm'/>
                    <input type="password" placeholder='Konfirmasi Kata Sandi' className='max-w-sm'/>
                    <button type="submit" className='mt-8 max-w-sm'>Berikutnya</button>
                    <a href="/" className="text-gray-500 mt-5 text-sm">Kembali ke halaman masuk</a>
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