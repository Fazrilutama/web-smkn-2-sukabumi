import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import Image from "next/image";

export default function Slider() {
    return (
        <div className="pt-20">
            <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image 
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
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-fill w-full md:hidden"
                        width={360} height={362}
                        src="/images/corosel/2.png"
                        alt="image slide 2"
                    />
                    <Image 
                        className="hidden object-fill w-full md:block"
                        width={1440} height={770}
                        src="/images/corosel/dekstop3.png"
                        alt="image slide 1"
                    />
                    {/* <img src="/images/corosel/2.png" alt="" className="object-fill w-full" /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className="object-fill w-full md:hidden"
                        width={360} height={362}
                        src="/images/corosel/3.png"
                        alt="image slide 3"
                    />
                    <Image 
                        className="hidden object-fill w-full md:block"
                        width={1440} height={770}
                        src="/images/corosel/dekstop1.png"
                        alt="image slide 1"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}