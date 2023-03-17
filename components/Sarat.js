import React from 'react'

export default function Sarat() {
  return (
    <div className='mx-5 md:mx-10 xl:mx-15 my-10 md:flex'>
        <div className='px-3 w-6/12 md:my-auto'>
            <p className='text-[#000000] font-semibold text-2xl xl:text-3xl'>Persyaratan PPDB 2021</p>
            <p className='text-[#1D2939] font-normal text-base py-7 '> Persiapkan diri anda dengan membaca persyaratan yang diperlukan, baca dengan teliti jangan sampai ada hal yang menghambat kelulusan anda. Kunjungi PPDB Jawa Barat 2022</p>
            <button className='py-2 px-4 bg-red-500 rounded-full text-white text-sm'>
                Kunjungi di sini
            </button>
        </div>
        <div className='mx-5 md:w-6/12'>
          <img src='/images/ppdb/persyaratan ppdb.png' alt='sarat ppdb' />
        </div>
    </div>
  )
}
