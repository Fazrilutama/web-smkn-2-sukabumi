/* eslint-disable @next/next/no-img-element */
import { Petinggi } from "@/data/Petinggi";
import React from "react";

export default function Atasan() {
  return (
    <div className="bg-[hsl(3,77%,48%)] sm:bg-atasanGuru bg-cover mt-20 mx-auto -mb-32 pb-28 lg:py-16">
      <div className="grid grid-cols-2 px-5 mx-auto xl:grid-cols-3 place-items-center 2xl:w-11/12 xl:px-10">
        {Petinggi.map((penting) => {
          return (
            <div key={penting.id}>
              <div className="py-5 text-center">
                <img
                  src={penting.image}
                  alt={penting.nama}
                  className="md:w-44 lg:w-[350px] "
                />
                <div className="bg-white w-[152px] h-[106px] lg:h-40  md:w-44 lg:w-[350px] rounded-b-[20px] pb-4 shadow-lg ">
                  <p className="text-sm lg:text-xl xl:text-2xl font-semibold text-[#1E1916] tracking-[0,2em] md:px-3 ">
                    {penting.nama}
                  </p>
                  <p className="text-sm lg:text-base font-semibold text-[#98A2B3] tracking-[0,2em] pt-2 md:px-3 ">
                    {penting.jabatan}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
