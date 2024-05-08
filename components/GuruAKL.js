import { Pengajar, akl } from "@/pages/data/Pengajar";
import React from "react";

const GuruAKL = () => {
  return (
    <>
      <div className="text-[#677487] my-8 md:my-16 text-center font-semibold text-3xl lg:text-4xl">
        <h1>Guru Produktif AKL</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 px-6 lg:grid-cols-4 lg:gap-16 lg:px-20 ">
        {akl.map((guru) => {
          return (
            <div key={guru.id} className="flex justify-center relative">
              <img
                src={guru.image}
                className="border-b-8 border-orange-600 rounded-lg overflow-hidden"
              />
              <div className="absolute bottom-5  text-center">
                <p className="text-white font-semibold text-xs sm:text-lg lg:text-lg  tracking-normal lg:tracking-tight">
                  {guru.nama}
                </p>
                <p className="text-xs sm:text-base font-light text-white tracking-tight">
                  {guru.mapel}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GuruAKL;
