import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Kejuaraan() {
  return (
    <div className='container mx-auto'>
        <div className='px-6 mt-10'>
            <div className='text-center pb-6'>
                <p className='font-semibold text-[34px] text-[#1e1916]'>
                    Kejuaraan
                </p>
                <p className='font-normal text-sm text-[#667085] py-2'>
                    loremhbjhbhbhbchcbmcbnmcbcbz
                </p>

            </div>
                <div className='md:flex md:justify-evenly'>

                    <div className=''>
                        <div className='flex justify-center'>
                            <Image alt='Foto' src="/images/kejuaraan/Group 2.png" width={324} height={324} className="lg:hidden" />
                            <Image alt='Foto' src="/images/kejuaraan/Group 2.png" width={400} height={400} className="hidden lg:block " />
                        </div>
                        <div className='md:pl-5 lg:pl-10'>
                            <p className='font-semibold text-xl text-[#1e1916] pt-6'>
                                Smkn 2 Sukabumi Meraih Juara  Dalam Acara LKPB Rajawali Walikota Cup 2 Sukabumi
                            </p>
                            <p className='font-normal text-sm text-[#667085] py-3 '>
                                PAsukan paskibra
                            </p>
                            <div className=''>
                                <button className='bg-[#da251c] py-2 px-6 text-sm font-semibold text-white rounded-[20px] '>
                                    Baca selengkapnya
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className=''>
                            <div className='flex justify-center py-6 mt-4 md:mt-0 md:py-0'>
                                <Image alt='Foto' src="/images/kejuaraan/Group 2 (1).png" width={324} height={324} className="lg:hidden" />
                                <Image alt='Foto' src="/images/kejuaraan/Group 2 (1).png" width={400} height={400} className="hidden lg:block " />
                            </div>
                            <div className='md:pl-5 lg:pl-10'>
                                <p className='font-semibold text-xl pt-6 text-[#1e1916]'>
                                    Smkn 2 Sukabumi Meraih Juara  Dalam Acara LKPB Rajawali Walikota Cup 2 Sukabumi
                                </p>
                                <p className='font-normal text-sm text-[#667085] py-3 '>
                                    PAsukan paskibra
                                </p>
                                <div className=''>
                                    <button className='bg-[#da251c] py-2 px-6 text-sm font-semibold text-white rounded-[20px] '>
                                        Baca selengkapnya
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                    <p className='text-[#b61f17] text-center mt-20 font-semibold text-base underline-offset-2'>
                        <Link href="">Lebih Lengkap  </Link>
                    </p>

        </div>
    </div>
  )
}