"use client"
import React, { use } from 'react'
import Image from 'next/image'
// import Carousel from "react-multi-carousel"
// import "react-multi-carousel/lib/styles.css"

// const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3 // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1 // optional, default to 1.
//     }
// }

const FurniturDalam = () => {
  return (
    <div className='w-full my-20 font-primary'>
        <div className='mx-4'>
            <h1 className='text-2xl font-semibold'>FURNITUR DALAM RUANGAN</h1>
            <p className='my-8 text-lg'>Desain modern kami yang terjangkau mencakup perpaduan faktor bentuk dan konstruksi, mulai dari sofa berlapis kain dan meja minimalis hingga tempat tidur platform tebal dan kursi bersandar sayap.</p>
        </div>
        {/* <div className='mx-4'>
            <Carousel 
                additionalTransfrom={0} 
                arrows={true} 
                autoPlay={true} 
                autoPlaySpeed={7000} 
                centerMode={false} 
                infinite 
                responsive={responsive}
                itemClass="carousel-item-padding-40-px"
                >
                <div>
                    <Image src="/images/furniturdalam/furniturruangtamu.png" alt="furnitur ruang tamu" width={400} height={400} className='rounded-2xl'/>
                </div>
                <div>
                    <Image src="/images/furniturdalam/furniturruangtamu.png" alt="furnitur ruang tamu" width={400} height={400} className='rounded-2xl'/>
                </div>
                <div>
                    <Image src="/images/furniturdalam/furniturruangtamu.png" alt="furnitur ruang tamu" width={400} height={400} className='rounded-2xl'/>
                </div>
                <div>
                    <Image src="/images/furniturdalam/furniturruangtamu.png" alt="furnitur ruang tamu" width={400} height={400} className='rounded-2xl'/>
                </div>

            </Carousel>
        </div> */}
    </div>
  )
}

export default FurniturDalam