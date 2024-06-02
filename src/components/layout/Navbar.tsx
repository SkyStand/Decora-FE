import React from 'react'
import Image from 'next/image'


interface NavbarProps {
    isHomePage: boolean;
  }

const Navbar: React.FC<NavbarProps> = ({ isHomePage }) => {
  return (
    <nav className={'absolute z-10 top-0 w-full max-w-7xl'}>
        <div className={`flex py-4 items-center justify-between ${isHomePage?'text-salmon-1':'text-blue-tua'}`}>
            <div className='flex items-center'>
                <div className='cursor-pointer w-[40px]'>
                    {/* <Image src={`${isHomePage? '/images/logo-salmon.png':'/images/logo-blue.png'}`} alt="logo" layout="responsive" width={40} height={40}  objectFit='contain'/> */}
                    <svg width="40" height="40" viewBox="0 0 855 855" xmlns="http://www.w3.org/2000/svg">
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="29.4482" y="41.7975" width="69.3458" height="768.504"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="221.337" y="41.7975" width="69.3458" height="768.504"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="405.626" y="398.976" width="69.3458" height="411.325"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="514.869" y="398.976" width="69.3458" height="411.325"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="757.105" y="41.7975" width="69.3458" height="768.504"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="29.5907" y="812.529" width="69.3458" height="445.523" transform="rotate(-90 29.5907 812.529)" />
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="29.5907" y="446.923" width="69.3458" height="445.523" transform="rotate(-90 29.5907 446.923)"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="339.13" y="342.93" width="69.3458" height="360.978" transform="rotate(-90 339.13 342.93)"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="628.862" y="111.143" width="69.3458" height="190.939" transform="rotate(-90 628.862 111.143)"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="29.4482" y="111.143" width="69.3458" height="254.585" transform="rotate(-90 29.4482 111.143)"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="514.869" y="446.473" width="69.3458" height="185.239" transform="rotate(-90 514.869 446.473)"/>
                        <rect className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`} x="514.869" y="812.201" width="69.3458" height="311.581" transform="rotate(-90 514.869 812.201)"/>
                    </svg>
                </div>
                <a href="#"className='ml-2 font-crete text-4xl'>Decora</a>
            </div>
            <div className='flex items-center justify-center gap-3 lg:gap-10 font-worksans font-medium'>
                <a href="/">Beranda</a>
                <a href="/furniture">Furnitur</a>
                <a href="/decor">Dekorasi</a>
                <a href="/inspiration">Inspirasi</a>
                <a href="/layanan">Layanan</a>
                <a href="/promo">Promo</a>
            </div>
            <div className={`flex items-center gap-4 justify-end ${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`}>
                <svg width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25366 5.99975V4.49975C5.25366 2.42869 6.9326 0.749756 9.00368 0.749756C11.0747 0.749756 12.7537 2.42869 12.7537 4.49975V5.99975H15.0037C15.4179 5.99975 15.7537 6.33554 15.7537 6.74975V15.7497C15.7537 16.164 15.4179 16.4997 15.0037 16.4997H3.00366C2.58945 16.4997 2.25366 16.164 2.25366 15.7497V6.74975C2.25366 6.33554 2.58945 5.99975 3.00366 5.99975H5.25366ZM5.25366 7.49975H3.75366V14.9997H14.2537V7.49975H12.7537V8.99975H11.2537V7.49975H6.75366V8.99975H5.25366V7.49975ZM6.75366 5.99975H11.2537V4.49975C11.2537 3.25712 10.2463 2.24975 9.00368 2.24975C7.761 2.24975 6.75366 3.25712 6.75366 4.49975V5.99975Z"/>
                </svg>

                <svg width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.375 2.25C14.6532 2.25 16.5 4.125 16.5 6.75C16.5 12 10.875 15 9 16.125C7.125 15 1.5 12 1.5 6.75C1.5 4.125 3.375 2.25 5.625 2.25C7.01998 2.25 8.25 3 9 3.75C9.75 3 10.98 2.25 12.375 2.25ZM9.70043 13.9529C10.3616 13.5364 10.9575 13.1216 11.5162 12.6772C13.7503 10.8998 15 8.95762 15 6.75C15 4.98057 13.8472 3.75 12.375 3.75C11.5681 3.75 10.6945 4.17683 10.0606 4.81066L9 5.87132L7.93935 4.81066C7.30551 4.17683 6.43192 3.75 5.625 3.75C4.1693 3.75 3 4.99238 3 6.75C3 8.95762 4.2497 10.8998 6.48385 12.6772C7.0425 13.1216 7.63838 13.5364 8.29957 13.9529C8.52345 14.0939 8.74582 14.2297 9 14.3814C9.25418 14.2297 9.47655 14.0939 9.70043 13.9529Z"/>
                </svg>
                
                <a href="/login" className={`${isHomePage? 'fill-salmon-1':'fill-blue-tua'}`}>
                    <svg width="20" height="20" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 16.5C3 13.1863 5.68629 10.5 9 10.5C12.3137 10.5 15 13.1863 15 16.5H13.5C13.5 14.0147 11.4853 12 9 12C6.51472 12 4.5 14.0147 4.5 16.5H3ZM9 9.75C6.51375 9.75 4.5 7.73625 4.5 5.25C4.5 2.76375 6.51375 0.75 9 0.75C11.4862 0.75 13.5 2.76375 13.5 5.25C13.5 7.73625 11.4862 9.75 9 9.75ZM9 8.25C10.6575 8.25 12 6.9075 12 5.25C12 3.5925 10.6575 2.25 9 2.25C7.3425 2.25 6 3.5925 6 5.25C6 6.9075 7.3425 8.25 9 8.25Z"/>
                    </svg>
                </a>

            </div>
        </div>
    </nav>
  )
}

export default Navbar