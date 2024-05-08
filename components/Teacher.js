/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { GuruPengajarCard } from "./Cards/GuruPengajarCard";
import { guruPengajar } from "@/pages/data/Pengajar";

export default function Teacher() {
  return (
    <Fragment>
      <div className="mt-28">
        <div className="relative h-[450px] mt-16 bg-Header flex items-center justify-center md:bg-dekstop bg-cover sm:h-[650px] bg-bottom bg-no-repeat">
          <img src="/images/header/Frame 13.png" alt="" />
          <div className="text-center font-semibold text-3xl lg:text-4xl text-[#677487] absolute bottom-7 pt-5 2xl:bottom-16 bg-white px-9 rounded-tr-[30px] w-[95%] sm:w-[90%] h-20">
          </div>
        </div>

        <div className="container relative z-10 px-4 mx-auto -mt-16 space-y-20 w-[90%]">
        {guruPengajar.map((item, index) => (
              <GuruPengajarCard key={index} title={item.title} list_guru={item.list_guru} />
            ))}
        </div>
      </div>
    </Fragment>
  );
}
