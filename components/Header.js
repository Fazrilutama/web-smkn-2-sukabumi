import React from 'react'

export default function Header() {
    return (
        <div className='mx-auto'>
            <div className=''>
                <div className='relative h-[450px] mt-20 bg-Header flex items-center justify-center md:bg-dekstop bg-cover sm:h-[650px] bg-bottom bg-no-repeat'>
                    <img src='/images/header/Frame 13.png' />
                    <div className='text-center font-semibold text-[28px] text-[#677487] absolute bottom-7 pt-5 2xl:bottom-16 bg-white px-9 py-2 rounded-tr-[30px] w-[90%]'>
                        <h1>
                            Sejarah Singkat
                        </h1>
                    </div>
                </div>
                <div className='mx-7'>
                    <div className='mx-auto px-7 text-base font-normal text-gray-800 md:text-center lg:w-[860px] tracking-[0,2em]'>
                        <p>
                            Tahun 1962/1963 didirikan SMEA Swasta dibawah binaan LPN (Lembaga Pendidikan Nasional) Setelah Peristiwa G.30S/PKI SMEA LPN di ambil alih oleh Pemda Kotamadya DT. II Sukabumi Menjadi SMEA Negeri pada tanggal 27 Januari 1967 berdasarkan SK. Menteri Pendidikan Dan Kebudayaan RI Dengan Nomor : 14/B.3/Kedj. Dan alamat di Jalan Perintis Kemerdekaan No. 11 Kotamadya Sukabumi.
                            <br /> <br />
                            Dengan jumlah kelas 5 dan Guru tetapnya 2 (dua) orang. Pada Tahun 1980/1981 dipindahkan ke Jalan Pelabuhan II Cipoho Sukabumi dengan luas tanah kurang lebih 18.000 M2 dan berjarak 1,5 km dari pusat kota.
                            <br /> <br />
                            Tahun pelajaran 1994/1995 berganti nama menjadi SMK Negeri kelompok Bisnis dan Manajemen Tahun pelajaran 1997/1998 menjadi SMK Negeri 2 Sukabumi.
                        </p>
                    </div>

                    <div className='text-center font-semibold text-[28px] pt-24'>
                        <h1>
                            Visi dan Misi
                        </h1>
                    </div>

                    <div className='md:flex md:gap-10  mx-5'>                    
                        <div className='w-full md:w-6/12'>
                            <div className='font-bold text-[#677487] text-2xl py-5 pt-16 '>
                                <p>Visi</p>
                            </div>
                            <div className='bg-[#DA251C] rounded-b-[30px] rounded-tr-[30px] '>
                                <div className='flex gap-2 p-5 text-white '>
                                    <p>1.</p>
                                    <p>
                                        Terwujudnya tamatan yang beriman dan bertaqwa, berstandar Nasional/Internasional berbudaya lingkungan dan terunggul di Jawa barat melalui pelayanan yang profesional dan berkualitas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:w-6/12 flex-col'>
                                <div className='font-bold text-[#677487] text-2xl py-5 pt-16 '>
                                    <p>Misi</p>
                                </div>
                                <div className='bg-[#DA251C] rounded-b-[30px] rounded-tr-[30px] '>
                                    <div className='flex gap-2 p-5 text-white'>
                                        <p>1.</p>
                                        <p>
                                            Mengembangkan suasana belajar yang kondusif, berwawasan keimanan, menjunjung nilai luhur budaya masyarakat Jawa barat serta Berwawasan kebangsaan.
                                        </p>
                                    </div>
                                </div>
                                <div className='bg-[#DA251C] rounded-b-[30px] rounded-tr-[30px] my-10 '>
                                    <div className='flex gap-2 p-5 text-white'>
                                        <p>2.</p>
                                        <p>
                                            Mengembangakan kualitas sumber
                                            daya manusia yang kompetitif dan
                                            suasana sekolah yang kondusif
                                            yang berpijak pada aspirasi warga
                                            sekolah dalam upaya mewujudkan
                                            manusia yang cerdas, terampil,
                                            trengginas, sehat, jasmani dan
                                            rohani, kreatif, inovatif, disiplin, serta
                                            memiliki tanggung jawab terhadap
                                            pelestarian lingkungan.
                                        </p>
                                    </div>
                                </div>
                                <div className='bg-[#DA251C] rounded-b-[30px] rounded-tr-[30px] '>
                                    <div className='flex gap-2 p-5 text-white'>
                                        <p>3.</p>
                                        <p>
                                            Meningkatkan dan memperluas
                                            kerjasama dengan Stakeholder,
                                            Institusi terkait dan Dunia Usaha
                                            Dunia Industri yang relevan yang
                                            berstandar Nasional/Internasional.
                                        </p>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
