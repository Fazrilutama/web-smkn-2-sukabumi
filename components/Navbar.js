import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Dropdown from './Dropdown'; 

export default function Navbar() {
    const [navbar, setNavbar] = useState(false);
  return (
    <div>
        <nav className='w-full fixed bg-white top-0 left-0 right-0 z-10'>
            <div className='justify-between px-4 mx-auto lg:items-center lg:flex lg:px-20'>
                <div>
                    <div className='flex items-center justify-between py-3 lg:py-5 lg:block'>
                        {/* Logo */}
                        <Link href="/" className='flex items-center lg:w-8/12'>
                            <Image src="/logo.png" width={43} height={48} alt="Logo" /> 
                            <h2 className='pl-2 text-xl text-[#1e1916] font-bold w-48 lg:w-full '>SMK Negeri 2 Kota Sukabumi</h2>
                        </Link>
                        
                        {/* Hamburger Menu */}
                        <div className='lg:hidden'>
                            <button className=' p-2 text-gray-700 rounded-lg outline-none focus:border-gray-400'
                            onClick={() => setNavbar (!navbar)}>
                                {navbar ? (
                                    <Image src="/images/navbar/x.svg" width={30} height={30} alt="Logo" />
                                ) : (
                                    <Image src="/images/navbar/y.svg" width={30} height={30} alt='' className='focus:border-none active:border-none' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                        navbar ? 'p-12 lg:p-0 block' : 'hidden'
                    }`} >
                        <ul className='h-screen lg:h-auto items-center justify-center lg:flex'>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold lg:py-5  py-2 lg:px-4 xl:px-6 text-center hover:text-[#da251c] focus:text-[#da251c]'>
                                <Link href="/" onClick={() => setNavbar (!navbar)}>
                                    Beranda
                                </Link>
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold lg:py-5 py-2 lg:px-4 xl:px-6 text-center hover:text-[#da251c] focus:text-[#da251c]'>

                                {/* <Link href="#" onClick={() => setNavbar (!navbar)}>
                                    Profil Sekolah 
                                </Link> */}
                                <Dropdown />
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold lg:py-5 py-2 lg:px-4 xl:px-6 text-center hover:text-[#da251c] focus:text-[#da251c]'>
                                <Link href="/Ekstrakulikuler/" onClick={() => setNavbar (!navbar)}>
                                    Ekstrakulikuler
                                </Link>
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold lg:py-3 py-2 lg:px-4 xl:px-6 text-center hover:text-[#da251c] lg:hover:text-white lg:bg-[#da251c] lg:text-white rounded-[30px] '>
                                <Link href="/Kontak/" onClick={() => setNavbar (!navbar)}>
                                    Kontak
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
