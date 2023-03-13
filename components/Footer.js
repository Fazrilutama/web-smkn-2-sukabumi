import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='mx-auto bg-[#1d2939] pt-12 mt-32'>
        <div className='px-6 md:flex justify-around'>
            <div>
                <div className='flex items-center md:w-[324px] '>
                    <Image src="/images/footer/image 1.png" alt='logo' width={51} height={58} />                
                    <p className='text-2xl font-semibold text-white pl-3 leading-6'>
                        SMK Negeri 2 Kota Sukabumi
                    </p>
                </div>
                <div className='text-base font-normal text-[#9c9c9c] pt-6 md:w-[324px]'>
                    <p >
                        merupakan salah satu smk dengan 5 kompetensi keahlian yakni Akuntansi dan keuangan Lembaga, Otomatisasi dan Tata Kelola perkantoran, Bisnis daring dan pemasaran, Rekayasa perangkat Lunak, dan Teknik Komputer dan Jaringan.
                    </p>
                </div>
            </div>

            <div>
                <p className='text-[28px] font-bold text-white pt-14 pb-3 md:pb-5 md:pt-0'>
                    Social Media
                </p>
                <div className='pb-10 py-4'>
                    <div className='text-sm text-[#9c9c9c] font-normal '>
                        <Link href="/" className='flex gap-2'>
                        <Image src="/images/footer/fb.png" alt='fb' width={22} height={22}s />
                            Smea Djuara
                        </Link>
                    </div>
                    <div className='text-sm text-[#9c9c9c] font-normal py-4 '>
                    <Link href="/" className='flex gap-2'>
                        <Image src="/images/footer/ig.png" alt='ig' width={22} height={22}s />
                            dokumenter_smkn_2_smi
                        </Link>
                    </div>
                    <div className='text-sm text-[#9c9c9c] font-normal '>
                        <Link href="/" className='flex gap-2'>
                        <Image src="/images/footer/twiter.png" alt='twiter' width={22} height={22}s />
                            SMKN 2 SUKABUMI
                        </Link>
                    </div>
                    <div className='text-sm text-[#9c9c9c] font-normal py-4 ' >
                    <Link href="/" className='flex gap-2'>
                        <Image src="/images/footer/yt.png" alt='yt' width={22} height={22}s />
                            SMKN2 TV CHANNEL
                        </Link>
                    </div>

                </div>
            </div>


            <div className='pb-16'>
                <p className='text-[28px] font-bold text-white py-5 md:pb-5 md:py-0'>
                    Kontak
                </p>
                <div className='flex gap-2 items-center font-normal text-base text-[#9c9c9c]'>
                    <Image src="/images/footer/surat.png" alt='email' width={21} height={10} />
                    <p>info@smkn2smi.sch.id</p>
                </div>
                <div className='flex gap-2 items-center font-normal text-base text-[#9c9c9c] py-3'>
                    <Image src="/images/footer/telepon.png" alt='Telepon' width={19} height={19} />
                    <p>(0266) 221 589 </p>
                </div>

            </div>
        </div>
    </div>
  )
}
