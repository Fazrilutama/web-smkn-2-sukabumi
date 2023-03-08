import Image from 'next/image'
import React from 'react'

export default function Kepsek() {
  return (
    <div className='container mx-auto'>
        <div className='mx-auto my-10'>
            <div className='flex justify-center'>
                <div className='flex flex-col items-center justify-center lg:flex-row'>
                    <Image src="/images/kepsek/Card Struktural.png" alt='Foto Kepsek' width={324} height={324} className="lg:hidden" />
                    <Image src="/images/kepsek/kepsek buled.png" alt='Foto Kepsek' width={441} height={441} className="hidden lg:block" />
                    <div className='hidden lg:block flex-col'>

                        <p className=' text-center font-semibold text-xl py-3 lg:text-4xl'> Saepurohman Udung. M.pd.</p>
                        <p className='text-center font-semibold text-xl lg:text-3xl'> Kepala Sekolah</p>
                        <p className='text-center font-medium text-lg text-gray-500 pb-7 py-5 lg:text-2xl'>Mulia, Profesional, Juara</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
