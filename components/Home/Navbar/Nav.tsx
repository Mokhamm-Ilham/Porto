"use client";
import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

// define props type
type Props = {
    openNav: () => void
}
const Nav = ({ openNav }: Props) => {

    const [navBg, setNavBg] = React.useState(false)

    React.useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true)
            } else {
                setNavBg(false)
            }
        }

        window.addEventListener('scroll', handler)
        return () => {
            window.removeEventListener('scroll', handler)
        }

    }, [])

    return (
        <div className={`fixed ${navBg ? 'bg-[#390b0b]' : 'fixed'} h-[12vh] z-[10] w-full transition-all duration-200`}>
            <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
                {/* Logo */}
                <Image src="/images/logo.png" alt="logo" width={170} height={170} className='ml-[-1.5rem] sm:ml-0' />
                {/* Links */}
                <div className='flex items-center space-x-10'>
                    <div className='hidden lg:flex items-center space-x-8'>
                        {navLinks.map((navLink) => {
                            return (
                                <Link key={navLink.id} href={navLink.url}>
                                    <p className='nav__link'>{navLink.title}</p>
                                </Link>
                            )
                        })}
                    </div>
                    {/* Button */}
                    <div className='flex items-center space-x-4'>
                        <button className='md:px-10 md:py-3 px-8 py-3 text-cyan-950 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>
                            Hire Me
                        </button>
                        {/* Burger */}
                        <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav