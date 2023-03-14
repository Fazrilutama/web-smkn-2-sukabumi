import React from 'react'
import CarouselJurusan from './CorouselJurusan';

export default function KompetensiKeahlian() {
  return (
    <div className='bg-red-600 bg-no-repeat w-full py-24 bg-over'>
      <div className='mx-auto text-white text-center pt-10 pb-8'>
        <h4 className='mx-10 font-semibold text-4xl'>Kompetensi Keahlian</h4>
        <p className='mx-5 text-sm mt-4'>Disini kami menyediakan 5 kompetensi keahlian yang tentunya sangat menarik.</p>
      </div>
      <CarouselJurusan />
    </div>
  )
}
