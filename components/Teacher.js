/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import GuruOTKP from "./GuruOTKP";
import GuruAKL from "./GuruAKL";
import GuruBDP from "./GuruBDP";
import GuruRPL from "./GuruRPL";
import GuruTKJ from "./GuruTKJ";
import GuruIndonesia from "./GuruIndonesia";
import GuruPAI from "./GuruPAI";
import GuruMTK from "./guruMTK";
import GuruIngrris from "./GuruIngrris";
import GuruBK from "./GuruBK";
import GuruPJOK from "./GuruPJOK";
import GuruPKN from "./GuruPKN";
import GuruKimia from "./GuruKimia";
import GuruSejarah from "./GuruSejarah";
import GuruSiskom from "./GuruSiskom";
import GuruSbk from "./GuruSbk";
import GuruSunda from "./GuruSunda";

export default function Teacher() {
  return (
    <>
      <div className="container mx-auto mt-28">
        <div className="relative h-[450px] mt-16 bg-Header flex items-center justify-center md:bg-dekstop bg-cover sm:h-[650px] bg-bottom bg-no-repeat">
          <img src="/images/header/Frame 13.png" />
          <div className="text-center font-semibold text-3xl lg:text-4xl text-[#677487] absolute bottom-7 pt-5 2xl:bottom-16 bg-white px-9 rounded-tr-[30px] w-[90%]">
            <h1>Guru Produktif OTKP</h1>
          </div>
        </div>
        <GuruOTKP />

        <GuruAKL />
        <GuruBDP />
        <GuruTKJ />
        <GuruRPL />
        <GuruIndonesia />
        <GuruPAI />
        <GuruMTK />
        <GuruIngrris />
        <GuruBK />
        <GuruPJOK />
        <GuruPKN/>
        <GuruKimia/>
        <GuruSejarah />
        <GuruSiskom />
        <GuruSbk />
        <GuruSunda />
      </div>
    </>
  );
}
