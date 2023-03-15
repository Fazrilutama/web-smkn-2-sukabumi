/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Contactmap() {
    return (
        <div className='mt-24'>
            <div className=''>
                <div className='relative h-[450px] mt-20 bg-Header flex items-center justify-center md:bg-dekstop bg-cover md:h-[660px] bg-bottom bg-no-repeat'>
                    <img src='/images/header/Frame 13.png' />
                    <div className='text-center font-semibold text-[28px] xl:text-4xl 2xl:text-5xl text-[#677487] absolute bottom-7 2xl:bottom-16 bg-white py-2 rounded-tr-[30px] w-[90%]'>
                        <h1 className='mt-5'>
                            Kontak
                        </h1>
                    </div>
                </div>
                <div className='md:flex mx-10 lg:mx-16 2xl:mx-36 md:items-center md:justify-between'>
                    <div className='font-medium space-y-5 text-base xl:text-lg text-[#677487] mt-10 mx-5 lg:mx-10 xl:mx-16 md:w-4/12'>
                        <div className='flex'>
                            <img src='/images/kontak/map.svg'  alt='map'/>
                            <p className='pl-3'>Jl. Pelabuhan II, RT.01/RW.06, Cikondang, Citamiang, Kota Sukabumi, Jawa Barat 43141</p>
                        </div>
                        <div className='flex'>
                            <img src='/images/kontak/mail.svg' alt='mail' />
                            <p className='pl-3'>43141</p>
                        </div>
                        <div className='flex'>
                            <img src='/images/kontak/phone.svg' alt='phone' />
                            <p className='pl-3'> (0266) 221589 </p>
                        </div>
                        <div className='flex'>
                            <img src='/images/kontak/mail_2.svg' alt='mail2' />
                            <p className='pl-3'>Info </p>
                        </div>
                        <div className='flex'>
                            <img src='/images/kontak/link.svg' alt='logo_link' />
                            <p className='pl-3'>Link Sekolah </p>
                        </div>
                    </div>
                    <div className='md:w-8/12 mt-10'>
                        <div className='p-1 md:p-7 mt-10 shadow-xl rounded-b-[30px] rounded-tr-[30px] w-full mx-auto md:mr-5 lg:mr-10 md:w-[450px] lg:w-[600px] xl:w-[700px]'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.628842729293!2d106.92369351414492!3d-6.934886569809462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6848182063ba19%3A0xcc6bd9bbe54d5cb7!2sSMKN%202%20Sukabumi!5e0!3m2!1sid!2sid!4v1678772284235!5m2!1sid!2sid" className='w-full md:h-[300px] lg:h-60 xl:h-72' height="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            <p className='text-center font-semibold text-xl lg:text-2xl pt-3 lg:pt-7 py-3 text-[#677487]'>
                                SMK PUSAT KEUNGGULAN
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
