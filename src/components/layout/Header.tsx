import React from 'react'
import Image from 'next/image'

interface HeaderProps {
    backgroundImage: string;
    title: string;
    subtitle?: string;
    buttonText?: string;
    buttonLink?: string;
    isHomePage?: boolean;
}

const Header: React.FC<HeaderProps> = ({ backgroundImage, title, subtitle, buttonText, buttonLink, isHomePage=false }) => {
    return(
        <header className={`${isHomePage ? '' : 'mt-16'} pb-20`}>
            <div className={`w-full ${isHomePage ? 'h-screen' : 'h-96 absolute inset-x-0 top'}`}>
                <Image src={backgroundImage} alt='header background' layout='fill' objectFit='cover' />
                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl mx-auto flex flex-col items-center'>
                    <h1 className='font-crete text-6xl leading-tight mb-8 text-salmon-1 text-center'>{title}</h1>
                    {subtitle && <p className="font-worksans text-xl text-salmon-1 font-medium mb-5">{subtitle}</p>}
                    {buttonText && buttonLink && (
                        <a href={buttonLink} className='font-worksans text-xl text-blue-tua font-medium bg-salmon-2 w-3/12 rounded-full p-3 bg-opacity-70 text-center'>{buttonText}</a>
                    )}        
                </div>
            </div>

        </header>
    )
}

export default Header;