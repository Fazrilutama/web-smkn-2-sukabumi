/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sarat from './Sarat'
import Uu from './Uu'
import Vidioppdb from './Vidioppdb'

export default function Headppdb() {
    return (
        <div className='mx-auto'>
            <div className='mt-16'>
                <img src='/images/ppdb/Header mobile.png' alt='' className='md:hidden' />
                <img src='/images/ppdb/Header.png' alt='' className='hidden md:block' />
            </div>
            <div className='mx-4 md:mx-10 lg:mx-20 lg:flex md:my-10'>
                <div className='lg:hidden'>
                    <p className='text-2xl font-semibold text-[#000000]'>
                        Format Surat Pernyataan Tanggung Jawab Mutlak 
                    </p>
                    <p className='text-base font-normal text-[#1D2939] py-6'>
                        Surat pernyataan tanggung jawab mutlak digunakan untuk proses pendaftaran PPDF di SMK Negeri 2 Kota Sukabumi, Surat ini dapat di unduh pada link berikut ini download
                    </p>
                </div>
                <div className='lg:w-8/12'>

                    <img src='/images/ppdb/jadwal ppdb 1.png' alt='jadwal ppdb' />
                </div>
                <div className='hidden lg:block lg:w-4/12 lg:px-3'>
                    <p className='text-2xl font-semibold text-[#000000] xl:text-3xl 2xl:text-4xl'>
                        Format Surat Pernyataan Tanggung Jawab Mutlak
                    </p>
                    <p className='text-base font-normal text-[#1D2939] py-6 xl:text-lg'>
                        Surat pernyataan tanggung jawab mutlak digunakan untuk proses pendaftaran PPDF di SMK Negeri 2 Kota Sukabumi, Surat ini dapat di unduh pada link berikut ini download
                    </p>
                </div>
            </div>
            <Sarat />
            <Vidioppdb />
            <Uu />
        </div>
    )
}
