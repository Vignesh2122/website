import React, { useState } from "react";
import { Tab, TabList, TabPanel } from "react-tabs";
import Image from "next/image";

import devops1 from "../public/logos/devops-1.png";
import devops2 from "../public/logos/devops-2.png";
import devops3 from "../public/logos/devops-3.png";
import devops4 from "../public/logos/devops-4.png";
import devops5 from "../public/logos/devops-5.png";
import devops6 from "../public/logos/devops-6.png";
import devops7 from "../public/logos/devops-7.png";

import app1 from "../public/logos/app-1.png";
import app2 from "../public/logos/app-2.png";
import app3 from "../public/logos/app-3.png";
import app4 from "../public/logos/app-4.png";
import app5 from "../public/logos/app-5.png";
import app6 from "../public/logos/app-6.png";
import app7 from "../public/logos/app-7.png";
import app8 from "../public/logos/app-8.png";

import cloud1 from "../public/logos/cloud-1.png";
import cloud2 from "../public/logos/cloud-2.png";
import cloud3 from "../public/logos/cloud-3.png";
import cloud4 from "../public/logos/cloud-4.png";
import cloud5 from "../public/logos/cloud-5.png";
import cloud6 from "../public/logos/cloud-6.png";
import cloud7 from "../public/logos/cloud-7.png";

import qualityeng1 from "../public/logos/qualityeng-1.png";
import qualityeng2 from "../public/logos/qualityeng-2.png";
import qualityeng3 from "../public/logos/qualityeng-3.png";
import qualityeng4 from "../public/logos/qualityeng-4.png";
import qualityeng5 from "../public/logos/qualityeng-5.png";
import qualityeng6 from "../public/logos/qualityeng-6.png";
import qualityeng7 from "../public/logos/qualityeng-7.png";
import qualityeng8 from "../public/logos/qualityeng-8.png";
import LineResult from "./LineResult";

function SmartFuture() {
  const [click, setClick] = useState(true);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);

  const toggleVisibility = () => {
    setClick(true);
    setClick1(false);
    setClick2(false);
    setClick3(false);
  };

  const toggleVisibility1 = () => {
    setClick(false);
    setClick1(true);
    setClick2(false);
    setClick3(false);
  };
  const toggleVisibility2 = () => {
    setClick(false);
    setClick1(false);
    setClick2(true);
    setClick3(false);
  };
  const toggleVisibility3 = () => {
    setClick(false);
    setClick1(false);
    setClick2(false);
    setClick3(true);
  };

  const line = [
    {
      id: 0,
      name: <hr className="border-[1px] text-bgPrimaryRed" />,
    },
    {
      id: 1,
      name: <hr className="border-[1px] text-bgPrimaryRed" />,
    },
    {
      id: 2,
      name: <hr className="border-[1px] text-bgPrimaryRed" />,
    },
    {
      id: 3,
      name: <hr className="border-[1px] text-bgPrimaryRed" />,
    },
  ];
  return (
    <>
      <section className="container mx-auto w-[90%] pt-[24px] block lg:hidden ">
        <div>
          <TabList>
            <div className="flex justify-between lg:text-[20px] sm:text-[12px]  lg:font-semibold text-[6.5px] font-normal lg:font-600 w-[100%] pb-[10px]">
              <Tab>
                <span onClick={toggleVisibility}>DevOps Services</span>
                {click && <LineResult line={line[0]} />}
              </Tab>

              <Tab>
                <span onClick={toggleVisibility1}>Application Services</span>
                {click1 && <LineResult line={line[1]} />}
              </Tab>

              <Tab>
                <span onClick={toggleVisibility2}>Cloud Enablement</span>
                {click2 && <LineResult line={line[2]} />}
              </Tab>

              <Tab>
                <span onClick={toggleVisibility3}>Quality Engineering</span>
                {click3 && <LineResult line={line[3]} />}
              </Tab>
            </div>

            <TabPanel>
              <div className=" lg:justify-between justify-around items-center flex pt-[10px] min-h-[100px] transition-all">

                <Image src={devops1} alt="devops" className="lg:w-[10%] w-[15%] h-[12%]" />
                <Image src={devops2} alt="devops" className="lg:w-[10%] w-[15%] h-[12%]" />
                <Image src={devops6} alt="devops" className="lg:w-[10%] w-[15%] h-[12%]" />
                <Image src={devops7} alt="devops" className="lg:w-[10%] w-[15%] h-[12%]" />
                
              </div>
              <div className="lg:justify-around justify-evenly flex items-center min-h-[100px] transition-all">
                <Image src={devops5} alt="devops" className="lg:w-[10%] w-[15%] h-[12%]" />
                
                <Image src={devops3} alt="devops" className="lg:w-[10%] w-[15%] h-[12%]" />
                <Image src={devops4} alt="devops" className="lg:w-[10%] w-[15%] h-[12%]" />
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex lg:justify-evenly justify-evenly items-center pt-[10px] min-h-[100px] transition-all">
                <Image src={app1} alt="apps" className="lg:w-[6%] w-[13%] h-[10%]" />
                <Image src={app2} alt="apps" className="lg:w-[6%] w-[15%] h-[10%]" />
                <Image src={app3} alt="apps" className=" lg:w-[12%]  w-[11%] h-[8%]" />
                <Image src={app4} alt="apps" className="lg:w-[6%] w-[15%] h-[10%]" />
                
              </div>
              
              <div className="flex justify-evenly items-center min-h-[100px]">
              <Image src={app5} alt="apps" className="lg:w-[6%] w-[15%] h-[10%]" />
                <Image src={app6} alt="apps" className="lg:w-[6%] w-[15%] h-[10%]" />
                <Image src={app7} alt="apps" className="lg:w-[6%] w-[15%] h-[10%]" />
                <Image src={app8} alt="apps" className="lg:w-[6%] w-[15%] h-[10%]" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-between items-center min-h-[100px] transition-all">       
                <Image src={cloud2} alt="apps" className="lg:w-[10%] w-[15%] h-[12%]" />
                <Image src={cloud1} alt="apps" className="lg:w-[10%] w-[15%] h-[12%]" />
                <Image src={cloud3} alt="apps" className="lg:w-[10%] w-[15%] h-[12%]" />
                <Image src={cloud7} alt="apps" className="lg:w-[10%] w-[15%] h-[12%]" />
              </div>
              <div className="flex lg:justify-around justify-evenly items-center pt-[10px] min-h-[100px] transition-all">
                <Image src={cloud4} alt="apps" className="lg:w-[10%] w-[15%] h-[12%] " />
                <Image src={cloud5} alt="apps" className="lg:w-[10%] w-[15%] h-[12%]" />
                <Image src={cloud6} alt="apps" className="lg:w-[10%] w-[15%] h-[12%]" />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-between items-center pt-[10px] min-h-[100px] transition-all">
                <Image
                  src={qualityeng1}
                  alt="qualityeng"
                  className="lg:w-[8%] w-[15%] h-[12%]" />
                <Image
                  src={qualityeng2}
                  alt="qualityeng"
                  className="lg:w-[8%] w-[15%] h-[12%]" />
                <Image
                  src={qualityeng3}
                  alt="qualityeng"
                  className="lg:w-[8%] w-[15%] h-[12%]" />
                <Image
                  src={qualityeng4}
                  alt="qualityeng"
                  className="lg:w-[8%] w-[15%] h-[12%]" />
              </div>
              <div className="flex justify-between items-center pt-[10px] min-h-[100px] transition-all">
                <Image
                  src={qualityeng5}
                  alt="qualityeng"
                  className="lg:w-[8%] w-[15%] h-[12%]" />
                <Image
                  src={qualityeng6}
                  alt="qualityeng"
                  className="lg:w-[8%] w-[15%] h-[12%]" />
                <Image
                  src={qualityeng7}
                  alt="qualityeng"
                  className="lg:w-[8%] w-[15%] h-[12%]" />
                  <Image
                  src={qualityeng8}
                  alt="qualityeng"
                  className="lg:w-[8%] w-[15%] h-[12%]" />
              </div>
            </TabPanel>
          </TabList>
        </div>
      </section>
      </>
  );
}

export default SmartFuture;