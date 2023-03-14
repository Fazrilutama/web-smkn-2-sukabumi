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
                <p className='font-normal text-base text-[#667085] py-2 md:w-[565px] md:mx-auto'>
                    SMK Negri 2 Sukabumi mendapatkan kejuaraan yang sangat patut di apresiasi dan di banggakan , berikut di antaranya
                </p>

            </div>
                <div className='flex flex-wrap justify-center md:justify-evenly mt-10'>
                        <div className=''>
                            <Image alt='Foto' src="/images/kejuaraan/Group 2.png" width={324} height={324} className="lg:hidden" />
                            <Image alt='Foto' src="/images/kejuaraan/Group 2.png" width={400} height={400} className="hidden lg:block " />
                            <div className=''>
                                <p className='font-semibold text-xl text-[#1e1916] pt-6 w-[324px] lg:w-[400px]'>
                                    SMKN 2 Sukabumi Meraih Juara Dalam Acara LKPB Rajawali Walikota Cup 2 Sukabumi
                                </p>
                                <p className='font-normal text-sm text-[#667085] py-3 w-[324px] lg:w-[400px] '>
                                    PASUKAN PASKIBRA SMKN 2 Sukabumi memenangkan lomba juara 3 The Best Dress, peleton A, Juara 3 perintis, Peleton B/klz XL. Juara 3 Potensial, Peleton A/klz Z...
                                </p>
                                <div className=''>
                                    <Link href="https://www.instagram.com/p/Cmf0binPAR6/?utm_source=ig_web_copy_link">
                                        <button className='bg-[#da251c] py-2 px-6 text-sm font-semibold text-white rounded-[20px] mt-3 '>
                                            Baca selengkapnya
                                        </button>
                                    </Link>
                                </div>
                            </div>
                    </div> 
                        <div className="md:pl-6" >
                            <div className='flex flex-col justify-center py-6 mt-4 md:mt-0 md:py-0'>
                                <Image alt='Foto' src="/images/kejuaraan/Group 2 (1).png" width={324} height={324} className="lg:hidden" />
                                <Image alt='Foto' src="/images/kejuaraan/Group 2 (1).png" width={400} height={400} className="hidden lg:block " />
                                <div className=''>
                                    <p className='font-semibold text-xl pt-6 text-[#1e1916] w-[324px] lg:w-[400px]'>
                                        Meraih Juara 2 komedi Tunggal Tingkat Provinsi Jawa Barat
                                    </p>
                                    <p className='font-normal text-sm text-[#667085] py-3 w-[324px] lg:w-[400px] '>
                                        Sesuatu yang sangat membanggakan bagi SMKN 2 SUKABUMI, siswanya meraih Juara 1 musikalisasi  puisi tingkat kota  sukabumi , juara 1 komedi tunggal tingkat kota sukabumi, juara 3 komedi tunggal tingkat kota sukabumi dan juara 2 komedi tunggal... 
                                    </p>
                                    <div className=''>
                                        <Link href="https://www.instagram.com/dokumenter_smkn2_smi/?hl=id">
                                            <button className='bg-[#da251c] py-2 px-6 text-sm font-semibold text-white rounded-[20px] mt-3 '>
                                                Baca selengkapnya
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>

                </div>

                    <p className='text-[#b61f17] text-center mt-20 font-semibold text-base underline-offset-2 '>
                        <Link href="">Lebih Lengkap  </Link>
                    </p>

        </div>
    </div>
  )
}