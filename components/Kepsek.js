import Image from 'next/image'
import React from 'react'

export default function Kepsek() {
  return (
    <div className='container mx-auto'>
        <div className='mx-auto my-10'>
            <div className='flex justify-center'>
                <div className='flex flex-col items-center justify-center lg:flex-row'>
                    
                    <Image src="/images/kepsek/kepsek-mobile.png" alt='Foto Kepsek' width={324} height={324} className="lg:hidden" />
                    <div className='lg:hidden text-center bg-white rounded-b-[30px] shadow-lg px-2 pb-6'>
                        <p className='font-semibold text-xl  text-[#1e1916] tracking-[0,2em] '>Saepurohman Udung, M.Pd.</p>
                        <p className='font-semibold text-xl text-[#344054] tracking-[0,2em] '>Kepala Sekolah</p>
                        <p className='font-medium text-lg py-3 tracking-[0,2em] text-[#667085]'>“Mulia, Profesional, dan Juara”</p>
                    </div>
                    <Image src="/images/kepsek/kepsek buled.png" alt='Foto Kepsek' width={441} height={441} className="hidden lg:block" />
                    <div className='hidden lg:block flex-col'>

                        <p className=' text-center font-semibold text-xl py-3 lg:text-3xl'> Saepurohman Udung. M.pd.</p>
                        <p className='text-center font-semibold text-xl lg:text-2xl'> Kepala Sekolah</p>
                        <p className='text-center font-medium text-lg text-gray-500 pb-7 py-5 lg:text-2xl'>“Mulia, Profesional, dan Juara”</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
