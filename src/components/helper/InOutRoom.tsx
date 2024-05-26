import React from 'react'
import Image from 'next/image'

const InOutRoom = () => {
  return (
    <div className='w-full my-20 font-primary'>
        <p className='my-8 text-lg text-center'>Belanja furnitur modern untuk melengkapi ruangan dengan estetika penentu tren terkini yang terinspirasi oleh loteng Kota New York. </p>
        <div className='grid grid-cols-2 gap-4 mx-4 text-center'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl font-semibold my-4'>FURNITUR DALAM RUANGAN</h1>
                <Image src="/images/inroombutton.png" alt="furnitur dalam ruangan" width={525} height={500} className='rounded-2xl'/>
            </div>
            <div className='flex flex-col justify-center items-center '>
                <h1 className='text-xl font-semibold my-4'>FURNITUR LUAR RUANGAN</h1>
                <Image src="/images/outroombutton.png" alt="furnitur luar ruangan" width={525} height={500} className='rounded-2xl'/>
            </div>
        </div>
    </div>

  )
}

export default InOutRoom