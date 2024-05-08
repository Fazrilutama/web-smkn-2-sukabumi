/* eslint-disable @next/next/no-img-element */
import { Pengajar, inggris } from "@/pages/data/Pengajar";
import React from "react";

const GuruIngrris = () => {
  return (
    <>
      <div className="text-[#677487] my-8 md:my-16 text-center font-semibold text-3xl lg:text-4xl">
        <h1>Guru Bahasa Inggris</h1>
      </div>
      <div className="grid grid-cols-2 gap-8 px-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-16 lg:px-20 ">
        {inggris.map((guru) => {
          return (
            <div key={guru.id} className="relative flex justify-center">
              <img
                src={guru.image}
                alt=""
                className="overflow-hidden border-b-8 border-orange-600 rounded-lg"
              />
              <div className="absolute text-center bottom-5">
                <p className="text-xs font-semibold tracking-normal text-white sm:text-lg lg:text-lg lg:tracking-tight">
                  {guru.nama}
                </p>
                <p className="text-xs font-light tracking-tight text-white sm:text-base">
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

export default GuruIngrris;
