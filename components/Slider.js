import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";
import Link from "next/link";

export default function Slider() {
    return (
        <div className="pt-20 md:pt-[95px]  ">
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="w-full h-[362px] lg:h-[500px] bg-[url('/images/corosel/mobile1.png')] bg-cover bg-no-repeat md:bg-[url('/images/corosel/dekstop1.png')] md:object-center  ">
                        <div className=" font-bold text-[28px] lg:text-4xl text-white leading-[33px] lg:leading-[54px] p-6 lg:p-[70px] ">
                            <p>Upacara</p>
                            <p>Memperingati Hari</p>
                            <p>Pendidikan Nasional</p>
                            <p className="font-normal text-sm lg:text-[28px] pt-1">Bergerak Untuk Merdeka Belajar</p>
                            <button className="py-2 mt-6 px-4 font-semibold text-xs bg-[#da251c] rounded-lg ">
                                <Link href="https://www.instagram.com/p/Cdf6e8TvOQk/?utm_source=ig_web_copy_link" >Lihat Selengkapnya</Link>
                            </button>
                        </div>
                    </div>
                    {/* <Image 
                        className="object-fill w-full md:hidden"
                        width={360} height={362}
                        src="/images/corosel/1.png"
                        alt="image slide 1"
                    />
                    <Image 
                        className="hidden object-fill w-full md:block"
                        width={1440} height={770}
                        src="/images/corosel/dekstop2.png"
                        alt="image slide 1"
                    /> */}
                </SwiperSlide>
                <SwiperSlide>

                <div className="w-full h-[362px] lg:h-[500px] bg-[url('/images/corosel/mobile2.png')] bg-cover bg-no-repeat md:bg-[url('/images/corosel/dekstop2.png')] md:object-center  ">
                        <div className=" font-bold text-[28px] lg:text-4xl text-white leading-[33px] lg:leading-[54px] p-6 lg:p-[70px] ">
                            <p>LKBB Rajawali </p>
                            <p>Walikota Cup 2</p>
                            <p>Kabupaten se-</p>
                            <p>Nasional</p>
                            <p className="font-normal text-sm lg:text-[28px] pt-1">Mulia, Profesional, Juara</p>
                            <button className="py-2 mt-6 px-4 font-semibold text-xs bg-[#da251c] rounded-lg ">
                                <Link href="https://www.instagram.com/p/Cmf0binPAR6/?utm_source=ig_web_copy_link" >Lihat Selengkapnya</Link>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                <div className="w-full h-[362px] lg:h-[500px] bg-[url('/images/corosel/mobile3.png')] bg-cover bg-no-repeat md:bg-[url('/images/corosel/dekstop3.png')] md:object-center  ">
                        <div className=" font-bold text-[28px] lg:text-4xl text-white leading-[33px] lg:leading-[54px] p-6 lg:p-[70px] ">
                            <p>Lomba Traveling  </p>
                            <p>Kepalangmerahan</p>
                            <p>Tingkat Kota Dan</p>
                            <p>Kabupaten Sukabumi</p>
                            <p className="font-normal text-sm lg:text-[28px] pt-1">Mulia, Profesional, Juara</p>
                            <button className="py-2 mt-6 px-4 font-semibold text-xs bg-[#da251c] rounded-lg ">
                                <Link href="https://www.instagram.com/p/CldGpEKyg4w/?utm_source=ig_web_copy_link" >Lihat Selengkapnya</Link>
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}