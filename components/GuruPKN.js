import { Pengajar, pkn } from "@/pages/data/Pengajar";
import React from "react";

const GuruPKN = () => {
  return (
    <>
      <div className="text-[#677487] my-8 md:my-16 text-center font-semibold text-3xl lg:text-4xl">
        <h1>Guru PKN</h1>
      </div>
      <div className="flex justify-center gap-8 px-6 items-center">
        {pkn.map((guru) => {
          return (
            <div key={guru.id} className="flex justify-center relative">
              <img
                src={guru.image}
                className="border-b-8 border-orange-600 rounded-lg overflow-hidden w-40 md:w-56 xl:w-64"
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

export default GuruPKN;
