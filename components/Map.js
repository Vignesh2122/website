import React, { useState } from "react";
import global from "../public/illustrations/global.jpg";
import Image from "next/image";
import unitedstates from "../public/icons/united-states.svg";
import india from "../public/icons/india.svg";
import malaysia from "../public/icons/malaysia.svg";
import germany from "../public/icons/germany.svg";
import unitedkingdom from "../public/icons/united-kingdom.svg";

import GlobalMap from "./GlobalMap";

export default function Map() {
  const [click, setClick] = useState(true);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);

  const toggleVisibility = () => {
    setClick(true);
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };
  const toggleVisibility1 = () => {
    setClick(false);
    setClick1(true);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };
  const toggleVisibility2 = () => {
    setClick(false);
    setClick1(false);
    setClick2(true);
    setClick3(false);
    setClick4(false);
    setClick5(false);
  };
  const toggleVisibility3 = () => {
    setClick(false);
    setClick1(false);
    setClick2(false);
    setClick3(true);
    setClick4(false);
    setClick5(false);
  };
  const toggleVisibility4 = () => {
    setClick(false);
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(true);
    setClick5(false);
  };

  const toggleVisibility5 = () => {
    setClick(false);
    setClick1(false);
    setClick2(false);
    setClick3(false);
    setClick4(false);
    setClick5(true);
  };
  const pop1 = [
    {
      id: 1,
      name: "Pirai Infotech INC, 99 Wall Street, #1253, New York, NY 10005",
      img: (
        <div className="flex justify-center">
          <Image
            src={unitedstates}
            className="w-[60px] h-[60px] mt-10"
            alt="US"
          />
        </div>

      ),
    },
    {
      id: 2,
      name: "Pirai Infotech Limited Venture House, Downshire Way, Arlington Square, Bracknell RG12 1WA, United Kingdom",
      img: (
        <div className="flex justify-center">
          <Image
            src={unitedkingdom}
            className="w-[60px] h-[60px] mt-6"
            alt="UK"
          />
        </div>
      ),
    },
    {
      id: 3,
      name: "Pirai Infotech UG,12307 Berlin, Germany",
      img: (
        <div className="flex justify-center">
          <Image
            src={germany}
            className="w-[60px] h-[60px] mt-14"
            alt="germany"
          />
        </div>
      ),
    },
    {
      id: 4,
      name: "Pirai Infotech Private Limited, 6, 32, Kamaraj Rd, Mahalingapuram, Pollachi, Tamil Nadu 642002",
      img: (
        <div className="flex justify-center">
          <Image
            src={india}
            className="w-[60px] h-[60px] mt-5"
            alt="india"
          />
        </div>
      ),
    },
    {
      id: 5,
      name: "Pirai Infosolutions SDN BHD No. 23 Lorong Cakera Purnama, 12/32 Seksyen 12 42300 Bandar Puncak Alam Selangor, Malaysia",
      img: (
        <div className="flex justify-center">
          <Image
            src={malaysia}
            className="w-[60px] h-[60px] mt-3"
            alt="malaysia"
          />
        </div>
      ),
    },
    {
      id: 6,
      name:
        <div>
          Pirai Infotech SDN BHD<br />
          Unit 911, 9th Floor,<br />Plaza Permata,<br />No 6 Jalan Kampar 5100<br />Kuala Lumpur, 50400,<br />Malaysia
        </div>,
      img: (
        <div className="flex justify-center">
          <Image
            src={malaysia}
            className="w-[60px] h-[60px] mt-3"
            alt="malaysia"
          />
        </div>
      ),
    },
  ];

  return (
    <section>
      <div className="hidden relative lg:flex lg:justify-center ">
        <div className=" xl:ml-[0px]">
          <Image
            src={global}
            className=" mt-[5%] 2xl:w-[100%] 2xl:ml-[0px] xl:w-[70%] lg:ml-[150px] lg:w-[70%] xl:ml-[160px] "
            alt="global"
          />
        </div>
        <div className="absolute lg:w-[100%] lg:h-[100%] 2xl:ml-[0px]">
          <div className="absolute lg:top-[49%]  lg:left-[30%] xl:left-[29%] 2xl:left-[24.5%]">
            <span
              onClick={toggleVisibility}
              className="absolute flex h-5 w-5  "
            >
              <span className="animate-ping  absolute inline-flex cursor-pointer h-full w-full rounded-full bg-[#031555] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#031555] cursor-pointer"></span>
            </span>
            {click && <GlobalMap pop1={pop1[0]} />}
          </div>

          <div className=" absolute lg:top-[39%] 2xl:top-[36%] lg:left-[46%] xl:left-[44.5%] 2xl:left-[45.8%]">
            <span
              onClick={toggleVisibility1}
              className="absolute flex h-5 w-5 "
            >
              <span className="animate-ping absolute cursor-pointer inline-flex h-full w-full rounded-full bg-[#031555] opacity-75"></span>
              <span className="relative inline-flex rounded-full cursor-pointer h-5 w-5 bg-[#031555]"></span>
            </span>
            {click1 && <GlobalMap pop1={pop1[1]} />}
          </div>

          <div className="absolute  lg:top-[41%] lg:left-[49%] xl:left-[47%] 2xl:top-[40%] 2xl:left-[50%]">
            <span
              onClick={toggleVisibility2}
              className="absolute flex h-5 w-5 "
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#031555] opacity-75 cursor-pointer"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#031555] cursor-pointer"></span>
            </span>
            {click2 && <GlobalMap pop1={pop1[2]} />}
          </div>

          <div className="absolute lg:top-[61%] lg:left-[62%] xl:left-[60%]  2xl:top-[60%] 2xl:left-[68%]">
            <span
              onClick={toggleVisibility3}
              className="absolute flex h-5 w-5 "
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#031555] opacity-75 cursor-pointer"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#031555] cursor-pointer"></span>
            </span>
            {click3 && <GlobalMap pop1={pop1[3]} />}
          </div>

          <div className="absolute lg:top-[65%] lg:left-[65.4%] 2xl:top-[62.4%] xl:top-[65%] xl:left-[63.6%] 2xl:left-[73.5%]">
            <span
              onClick={toggleVisibility4}
              className="absolute flex h-5 w-5 "
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#031555] opacity-75 cursor-pointer"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#031555] cursor-pointer"></span>
            </span>
            {click4 && <GlobalMap pop1={pop1[4]} />}
          </div>
          <div className="absolute lg:top-[65%] lg:left-[67.8%] 2xl:top-[64%] xl:top-[65%] xl:left-[65.5%] 2xl:left-[75.5%]">
            <span
              onClick={toggleVisibility5}
              className="absolute flex h-5 w-5 "
            >
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#031555] opacity-75 cursor-pointer"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-[#031555] cursor-pointer"></span>
            </span>
            {click5 && <GlobalMap pop1={pop1[5]} />}
          </div>
        </div>
      </div>
    </section>
  );
}
