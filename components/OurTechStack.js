import React, { useState } from "react";
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
import app9 from "../public/logos/app-9.png";

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

const OurTechStack = () => {
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
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
      name: <hr className="border-2 text-bgPrimaryRed" />,
    },
    {
      id: 1,
      name: <hr className="border-2 text-bgPrimaryRed" />,
    },
    {
      id: 2,
      name: <hr className="border-2 text-bgPrimaryRed" />,
    },
    {
      id: 3,
      name: <hr className="border-2 text-bgPrimaryRed" />,
    },
  ];

  return (
    <div className="hidden lg:block">
      <div className="flex w-[70%] mx-auto container justify-around px-[20px] py-[10px]">
        <div>
          <button
            className={`button ${
              activeButton === 1 ? "active" : ""
            } font-semibold text-[20px]`}
            onClick={() => handleButtonClick(1)}
          >
            <span onClick={toggleVisibility}>DevOps Services</span>
          </button>
          {click && <LineResult line={line[0]} />}
        </div>
        <div>
          <button
            className={`button ${
              activeButton === 2 ? "active" : ""
            } font-semibold text-[20px]`}
            onClick={() => handleButtonClick(2)}
          >
            <span onClick={toggleVisibility1}>Application Services</span>
          </button>
          {click1 && <LineResult line={line[1]} />}
        </div>
        <div>
          <button
            className={`button ${
              activeButton === 3 ? "active" : ""
            } font-semibold text-[20px]`}
            onClick={() => handleButtonClick(3)}
          >
            <span onClick={toggleVisibility2}>Cloud Enablement</span>
          </button>
          {click2 && <LineResult line={line[2]} />}
        </div>
        <div>
          <button
            className={`button ${
              activeButton === 4 ? "active" : ""
            } font-semibold text-[20px]`}
            onClick={() => handleButtonClick(4)}
          >
            <span onClick={toggleVisibility3}>Quality Engineering</span>
          </button>
          {click3 && <LineResult line={line[3]} />}
        </div>
      </div>
      <div className="min-h-[650px] pt-[30px] w-[85%] mx-auto">
        <div className="flex ml-[50px] justify-center">
          <div className="flex-col items-center justify-center w-[180px] mx-[20px]">
            <Image
              src={qualityeng4}
              alt="Image 1"
              className={`image ${
                activeButton === 4 ? "active" : ""
              } py-[40px] transition-all duration-700 `}
              style={{ width: activeButton === 4 ? "110px" : "30px" }}
            />
            <Image
              src={devops7}
              alt="Image 2"
              className={`image ${
                activeButton === 1 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 1 ? "110px" : "30px" }}
            />
            <Image
              src={app1}
              alt="Image 3"
              className={`image ${
                activeButton === 2 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 2 ? "110px" : "30px" }}
            />
            <Image
              src={qualityeng3}
              alt="Image 4"
              className={`image ${
                activeButton === 4 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 4 ? "110px" : "30px" }}
            />
          </div>
          <div className="flex-col items-center justify-center w-[180px] mt-[30px] mx-[40px]">
            <Image
              src={app4}
              alt="Image 5"
              className={`image ${
                activeButton === 2 ? "active" : ""
              } py-[80px] transition-all duration-700`}
              style={{ width: activeButton === 2 ? "110px" : "30px" }}
            />
            <Image
              src={devops6}
              alt="Image 6"
              className={`image ${
                activeButton === 1 ? "active" : ""
              }  transition-all duration-700`}
              style={{ width: activeButton === 1 ? "110px" : "30px" }}
            />
            <Image
              src={cloud4}
              alt="Image 7"
              className={`image ${
                activeButton === 3 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 3 ? "110px" : "30px" }}
            />
          </div>
          <div className="flex-col items-center justify-center w-[180px] ">
            <Image
              src={devops4}
              alt="Image 8"
              className={`image ${
                activeButton === 1 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 1 ? "110px" : "30px" }}
            />
            <Image
              src={cloud1}
              alt="Image 9"
              className={`image ${
                activeButton === 3 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 3 ? "110px" : "30px" }}
            />
            <Image
              src={app9}
              alt="Image 10"
              className={`image ${
                activeButton === 2 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 2 ? "110px" : "30px" }}
            />
            <Image
              src={qualityeng7}
              alt="Image 11"
              className={`image ${
                activeButton === 4 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 4 ? "110px" : "30px" }}
            />
          </div>
          <div className="flex-col tems-center justify-center px-[30px] w-[180px] ">
            <Image
              src={app6}
              alt="Image 12"
              className={`image ${
                activeButton === 2 ? "active" : ""
              } pt-[110px] pb-[40px] transition-all duration-700`}
              style={{ width: activeButton === 2 ? "110px" : "30px" }}
            />
            <Image
              src={devops5}
              alt="Image 13"
              className={`image ${
                activeButton === 1 ? "active" : ""
              } py-[30px] transition-all duration-700`}
              style={{ width: activeButton === 1 ? "110px" : "30px" }}
            />
            <Image
              src={cloud5}
              alt="Image 14"
              className={`image ${
                activeButton === 3 ? "active" : ""
              } py-[30px] transition-all duration-700`}
              style={{ width: activeButton === 3 ? "830px" : "30px" }}
            />
          </div>
          <div className="flex-col tems-center justify-center px-[30px] w-[180px] ">
            <Image
              src={app8}
              alt="Image 15"
              className={`image ${
                activeButton === 2 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 2 ? "150px" : "30px" }}
            />
            <Image
              src={cloud2}
              alt="Image 16"
              className={`image ${
                activeButton === 3 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 3 ? "160px" : "30px" }}
            />
            <Image
              src={devops2}
              alt="Image 17"
              className={`image ${
                activeButton === 1 ? "active" : ""
              } py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 1 ? "110px" : "30px" }}
            />
            <Image
              src={qualityeng6}
              alt="Image 18"
              className={`image ${
                activeButton === 4 ? "active" : ""
              }py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 4 ? "110px" : "30px" }}
            />
          </div>
          <div className="flex-col tems-center justify-center px-[30px] w-[200px] ">
            <Image
              src={devops1}
              alt="Image 19"
              className={`image ${
                activeButton === 1 ? "active" : ""
              } mt-[70px] py-[30px] transition-all duration-700`}
              style={{ width: activeButton === 1 ? "150px" : "30px" }}
            />
            <Image
              src={app2}
              alt="Image 19"
              className={`image ${
                activeButton === 2 ? "active" : ""
              }py-[25px] transition-all duration-700`}
              style={{ width: activeButton === 2 ? "150px" : "30px" }}
            />
            <Image
              src={cloud7}
              alt="Image 19"
              className={`image ${
                activeButton === 3 ? "active" : ""
              }py-[50px] transition-all duration-700`}
              style={{ width: activeButton === 3 ? "110px" : "30px" }}
            />
            <Image
              src={qualityeng2}
              alt="Image 19"
              className={`image ${
                activeButton === 4 ? "active" : ""
              }py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 4 ? "150px" : "30px" }}
            />
          </div>
          <div className="flex-col px-[30px] w-[180px] ">
            <Image
              src={qualityeng1}
              alt="Image 19"
              className={`image ${
                activeButton === 4 ? "active" : ""
              }py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 4 ? "80px" : "30px" }}
            />
            <Image
              src={app3}
              alt="Image 19"
              className={`image ${
                activeButton === 2 ? "active" : ""
              }py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 2 ? "70px" : "30px" }}
            />
            <Image
              src={cloud6}
              alt="Image 19"
              className={`image ${
                activeButton === 3 ? "active" : ""
              }py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 3 ? "110px" : "30px" }}
            />
            <Image
              src={qualityeng5}
              alt="Image 19"
              className={`image ${
                activeButton === 4 ? "active" : ""
              }py-[60px] transition-all duration-700`}
              style={{ width: activeButton === 4 ? "110px" : "30px" }}
            />
          </div>
          <div className="flex-col justify-center items-center px-[30px] w-[180px] ">
            <Image
              src={app7}
              alt="Image 19"
              className={`image ${
                activeButton === 2 ? "active" : ""
              }py-[50px] transition-all duration-700`}
              style={{ width: activeButton === 2 ? "110px" : "30px" }}
            />
            <Image
              src={cloud3}
              alt="Image 19"
              className={`image ${
                activeButton === 3 ? "active" : ""
              }py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 3 ? "110px" : "30px" }}
            />
            <Image
              src={app5}
              alt="Image 19"
              className={`image ${
                activeButton === 2 ? "active" : ""
              }py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 2 ? "110px" : "30px" }}
            />
            <Image
              src={devops3}
              alt="Image 19"
              className={`image ${
                activeButton === 1 ? "active" : ""
              }py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 1 ? "110px" : "30px" }}
            />
            <Image
              src={qualityeng8}
              alt="Image 19"
              className={`image ${
                activeButton === 4 ? "active" : ""
              }py-[40px] transition-all duration-700`}
              style={{ width: activeButton === 4 ? "110px" : "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTechStack;
