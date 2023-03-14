import React from 'react'

export default function Contactmap() {
    return (
        <div className='mt-24'>
            <div className=''>
                <div className='relative h-[362px] mt-20 bg-Header flex items-center justify-center md:bg-dekstop bg-cover md:h-[600px] bg-bottom bg-no-repeat'>
                    <img src='/images/header/Frame 13.png' className=' ' />

                    <div className='text-center font-semibold text-[28px] text-[#677487] absolute bottom-6 md:bottom-9 bg-white px-28 py-2 rounded-tr-[30px]'>
                        <h1>
                            Kontak
                        </h1>
                    </div>
                </div>
                <div className='md:flex'>

                    <div className='font-medium text-base xl:text-lg text-[#677487] mt-10 mx-5 lg:mx-10 xl:mx-20 md:w-4/12'>
                        <div className='flex'>
                            <img src='/images/kontak/map.png'  alt='map' className='w-6 h-7'/>
                            <p className='pl-3'>Jl. Pelabuhan II, RT.01/RW.06, Cikondang, Citamiang, Kota Sukabumi, Jawa Barat 43141</p>
                        </div>
                        <div className='flex py-8 lg:py-12'>
                            <img src='/images/kontak/mail.png' alt='mail' />
                            <p className='pl-3'>43141</p>
                        </div>
                        <div className='flex'>
                            <img src='/images/kontak/phone.png' alt='phone' />
                            <p className='pl-3'> (0266) 221589 </p>
                        </div>
                        <div className='flex py-8'>
                            <img src='/images/kontak/mail_2.png' alt='mail2' />
                            <p className='pl-3'> info </p>
                        </div>
                        <div className='flex'>
                            <img src='/images/kontak/logo_link.png' alt='logo_link' />
                            <p className='pl-3'>link sekolah </p>
                        </div>
                    </div>
                    <div className='md:w-8/12'>
                        <div className='p-5 md:p-7 mt-10 shadow-xl rounded-b-[30px] rounded-tr-[30px] w-[350px] mx-auto md:mr-5 lg:mr-10 md:w-[450px] lg:w-[600px] xl:w-[700px]'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.628842729293!2d106.92369351414492!3d-6.934886569809462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6848182063ba19%3A0xcc6bd9bbe54d5cb7!2sSMKN%202%20Sukabumi!5e0!3m2!1sid!2sid!4v1678772284235!5m2!1sid!2sid" width="" className='w-full md:h-[300px] lg:h-60 xl:h-72' height="" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
