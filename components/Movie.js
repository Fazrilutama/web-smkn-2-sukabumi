import React from 'react'
import ReactPlayer from 'react-player/youtube';

export default function Movie() {
  return (
    <div className='mx-4 flex justify-center'>
        <div className='p-5 mx-auto md:px-7 lg:px-9 py-5 lg:py-7 shadow-2xl mt-24 rounded-b-[30px] rounded-tr-[30px] md:w-[400px] lg:w-[800px] '>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/44Gp4U751P8" title="YouTube video player" allowFullScreen></iframe>
            <p className='text-center font-semibold text-2xl py-5 text-[#677487]'>SMK PUSAT KEUNGGULAN</p>
        </div>
    </div>
  )
}
