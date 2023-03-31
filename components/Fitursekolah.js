import React from 'react'
import Saranaprasarana from './Saranaprasarana'

export default function Fitursekolah() {
  return (
    <div className='bg-red-600 bg-no-repeat w-full py-24 bg-cover mt-10 lg:px-20'>
      <div className='mx-auto text-white text-center pt-10 pb-8'>
        <h4 className='font-semibold text-4xl'>Sarana Dan Prasarana</h4>
        <p className='mx-5 text-sm mt-4'>Adapun Sarana & Prasarana Bisa dilihat di bawah ini</p>
      </div>
      <Saranaprasarana />
    </div>
  )
}
