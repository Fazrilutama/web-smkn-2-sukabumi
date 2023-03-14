import React from 'react'

export default function Movie() {
  return (
    <div className='mx-4 flex justify-center'>
        <div className='px-5 md:px-7 lg:px-9 py-5 lg:py-7 shadow-2xl mt-24 rounded-b-[30px] rounded-tr-[30px] md:w-[400px] lg:w-[550px] '>
            <img src='/images/movie/Movie.png' alt='' className='w-full' />
            <p className='text-center font-semibold text-2xl py-5 text-[#677487]'>SMK PUSAT KEUNGGULAN</p>
        </div>
    </div>
  )
}
