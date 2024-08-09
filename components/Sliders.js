import React, { useEffect, useRef } from "react";
import Image from "next/image";

import lifeofpirai1 from "../public/first-row/life_of_pirai_01.jpg";
import lifeofpirai2 from "../public/first-row/life_of_pirai_02.jpg";
import lifeofpirai3 from "../public/first-row/life_of_pirai_03.jpg";
import lifeofpirai4 from "../public/first-row/life_of_pirai_04.jpg";
import lifeofpirai5 from "../public/first-row/life_of_pirai_05.jpg";
import lifeofpirai6 from "../public/first-row/life_of_pirai_06.jpg";
import lifeofpirai7 from "../public/first-row/life_of_pirai_07.jpg";
import christmas from "../public/first-row/christmas.jpg";
import diwali1 from "../public/first-row/diwali-1.jpg";
import diwali2 from "../public/first-row/diwali-2.jpg";
import onam1 from "../public/first-row/onam-1.jpg";
import onam2 from "../public/first-row/onam-2.jpg";
import onam3 from "../public/first-row/onam-3.jpg";
import selfie from "../public/first-row/pongal-selfie.jpg";
import group from "../public/first-row/pongal-group.jpg";

import lifepirai1 from "../public/second-row/life_pirai_01.jpg";
import lifepirai2 from "../public/second-row/life_pirai_02.jpg";
import lifepirai3 from "../public/second-row/life_pirai_03.jpg";
import lifepirai4 from "../public/second-row/life_pirai_04.jpg";
import lifepirai5 from "../public/second-row/life_pirai_05.jpg";
import lifepirai6 from "../public/second-row/life_pirai_06.jpg";
import lifepirai7 from "../public/second-row/life_pirai_07.jpg";
import lifepirai8 from "../public/second-row/life_pirai_08.jpg";
import lifepirai9 from "../public/second-row/life_pirai_09.jpg";
import lifepirai10 from "../public/second-row/life_pirai_10.jpg";

const Sliders = () => {
  return (
    <>
      <section>
        <div className="logos overflow-hidden bg-white relative">
          <div className="flex animate-slideRightToLeft slideRightToLeft slide-track my-10 py-5 animation">
            <Image
              src={christmas}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="christmas"
            />
            <Image
              src={lifeofpirai1}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="lifeofpirai1"
            />
            <Image
              src={diwali1}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="diwali1"
            />
            <Image
              src={diwali2}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="diwali2"
            />
            <Image
              src={onam3}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="onam3"
            />
            <Image
              src={group}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="group"
            />
            <Image
              src={onam2}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="onam2"
            />
            <Image
              src={selfie}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="selfie"
            />
            <Image
              src={onam1}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="onam1"
            />
            <Image
              src={lifeofpirai2}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="lifeofpirai2"
            />
            <Image
              src={lifeofpirai4}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="lifeofpirai4"
            />
            <Image
              src={lifeofpirai6}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="lifeofpirai6"
            />
          </div>
          <div className="flex slideLeftToRight animate-slideLeftToRight slide-track pb-8">
          <Image
              src={lifeofpirai5}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="lifeofpirai5s"
            />
            <Image
              src={lifeofpirai3}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="lifeofpirai3"
            />
            <Image
              src={lifeofpirai7}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="lifeofpirai7"
            />
            <Image
              src={lifepirai1}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
            {/* <Image src={lifepirai4} className="slider-image h-[250px] w-[400px] mr-5" alt='pirai-images'/> */}
            <Image
              src={lifepirai6}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
            <Image
              src={lifepirai8}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
            <Image
              src={lifepirai10}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
            <Image
              src={lifepirai2}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
            <Image
              src={lifepirai5}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
            <Image
              src={lifepirai7}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
            <Image
              src={lifepirai9}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
            <Image
              src={lifepirai3}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
            <Image
              src={lifepirai4}
              className="slider-image xl:h-[250px] xl:w-[400px] lg:w-[250px] lg:h-[180px] w-[200px] h-[130px] mr-5 hover-stop-and-grow"
              alt="pirai-images"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sliders;
