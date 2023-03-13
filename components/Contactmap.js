import React from 'react'

export default function Contactmap() {
    return (
        <div className='mt-24'>
            <div className='mx-5'>
                <div className='relative h-[362px] mt-20 bg-Header flex items-center justify-center md:bg-dekstop bg-cover md:h-[600px] bg-bottom bg-no-repeat'>
                    <img src='/images/header/Frame 13.png' className=' ' />

                    <div className='text-center font-semibold text-[28px] text-[#677487] absolute bottom-6 md:bottom-9 bg-white px-9 py-2 rounded-tr-[30px]'>
                        <h1>
                            Kontak
                        </h1>
                    </div>
                </div>
                <div>
                    <img src='/images/kontak/map.png'  alt='map'/>
                    <p>Jl. Pelabuhan II, RT.01/RW.06, Cikondang, Citamiang, Kota Sukabumi, Jawa Barat 43141</p>
                </div>
                <div>
                    <img src='/images/kontak/mail.png' alt='mail' />
                    <p>43141</p>
                </div>
                <div>
                    <img src='/images/kontak/phone.png' alt='phone' />
                    <p> (0266) 221589 </p>
                </div>
                <div>
                    <img src='/images/kontak/mail_2.png' alt='mail2' />
                    <p> info </p>
                </div>
                <div>
                    <img src='/images/logo_link.png' alt='logo_link' />
                    <p> link sekolah </p>
                </div>
            </div>
        </div>
    )
}
