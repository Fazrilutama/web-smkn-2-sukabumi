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
            <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
                <div>
                    <div className='flex items-center justify-between py-3 md:py-5 md:block'>
                        {/* Logo */}
                        <Link href="" className='flex items-center'>
                            <Image src="/images/navbar/logo.png " width={43} height={48} alt="Logo" /> 
                            <h2 className='pl-2 text-xl text-[#1e1916] font-bold w-48 md:w-full'>Smkn Negeri 2 Kota Sukabumi</h2>
                        </Link>
                        
                        {/* Hamburger Menu */}
                        <div className='md:hidden'>
                            <button className=' p-2 text-gray-700 rounded-md outline-none focus:border-gray-400'
                            onClick={() => setNavbar (!navbar)}>
                                {navbar ? (
                                    <Image src="/images/navbar/Vector.png" width={30} height={30} alt="Logo" />
                                ) : (
                                    <Image src="/images/navbar/Vector.png" width={30} height={30} alt='' className='focus:border-none active:border-none' />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        navbar ? 'p-12 md:p-0 block' : 'hidden'
                    }`} >
                        <ul className='h-screen md:h-auto items-center justify-center md:flex'>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold md:py-5  py-2 md:px-4 lg:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent'>
                                <Link href="/" onClick={() => setNavbar (!navbar)}>
                                    Beranda
                                </Link>
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold md:py-5 py-2 md:px-4 lg:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent'>

                                {/* <Link href="#" onClick={() => setNavbar (!navbar)}>
                                    Profil Sekolah 
                                </Link> */}
                                <Dropdown />
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold md:py-5 py-2 md:px-4 lg:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent'>
                                <Link href="/Ekstrakulikuler/" onClick={() => setNavbar (!navbar)}>
                                    Ekstrakulikuler
                                </Link>
                            </li>
                            <li className='pb-6 text-lg text-[#1e1916] font-bold md:py-5 py-2 md:px-4 lg:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-600 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent'>
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
