import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='container mx-auto bg-[#1d2939] pt-12 mt-32'>
        <div className='px-6 md:flex justify-evenly'>
            <div>
                <div className='flex items-center md:w-[324px] '>
                    <Image src="/images/footer/image 1.png" alt='logo' width={51} height={58} />                
                    <p className='text-2xl font-semibold text-white pl-3 leading-6'>
                        SMK Negeri 2 Kota Sukabumi
                    </p>
                </div>
                <div className='text-base font-normal text-[#9c9c9c] pt-6 md:w-[324px]'>
                    <p >
                        merupakan salah satu smk dengan 5 kompetensi keahlian yakni Akuntansi
                    </p>
                </div>
            </div>
            <div>
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
                <div className='flex gap-7 pb-14 py-4'>
                    <div className='flex items-center justify-center w-[46px] h-[46px] bg-[#344054] rounded-full '>
                        <Image src="/images/footer/fb.png" alt='fb' width={26} height={26} />
                    </div>
                    <div className='flex items-center justify-center w-[46px] h-[46px] bg-[#344054] rounded-full '>
                        <Image src="/images/footer/ig.png" alt='ig' width={26} height={26} />
                    </div>
                    <div className='flex items-center justify-center w-[46px] h-[46px] bg-[#344054] rounded-full '>
                        <Image src="/images/footer/twiter.png" alt='twiter' width={26} height={26} />
                    </div>
                    <div className='flex items-center justify-center w-[46px] h-[46px] bg-[#344054] rounded-full '>
                        <Image src="/images/footer/yt.png" alt='yutub' width={26} height={26} />
                    </div>

                </div>

            </div>
        </div>
    </div>
  )
}
