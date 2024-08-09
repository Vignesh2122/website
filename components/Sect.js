import { React, useState } from "react";
import Image from "next/image";
import retail from "../public/icons/Retail.svg";
import bank from "../public/icons/Bank.svg";
import engineering from "../public/icons/engineering.svg";
import telcom from "../public/icons/telecom.svg";
import hightech from "../public/icons/High-Tech.svg";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";

const Sect1 = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex  justify-center mt-[0px]  ">
      <div className="lg:flex block  w-[90%]">
        <div className="w-full lg:w-[30%]  lg:border-y-2 lg:border-r-none lg:border-l-[#D45147]  lg:border-y-[#D45147] lg:border-l-2 rounded-l-[36px]  lg:text-[30px] text-[10px] sm:text-[20px] font-semibold text-[#031555] hidden lg:block">
          <div className="flex lg:flex-col lg:justify-normal rounded-l-[36px] justify-around">
            <button
              className={`lg:px-[8px] lg:py-[12px] px-[9px] py-[2px] sm:py-[4px] sm:px-[8px] md:py-[6px] md:px-[10px] rounded-tl-[33px] bg-[#D45147] transition-all duration-200 ${activeTab === 2
                  ? "rounded-br-[36px]"
                  : activeTab === 1
                    ? "lg:bg-[white]  bg-[#031555] rounded-tl-[36px] text-white lg:text-[#031555]"
                    : "lg:bg-[#D45147]"
                }`}
              onClick={() => handleTabClick(1)}
            >
              Banking
            </button>
            <button
              className={`lg:px-[8px] lg:py-[12px] px-[9px] py-[2px] sm:py-[4px] sm:px-[8px] md:py-[6px] md:px-[10px] bg-[#D45147] transition-all duration-200 ${activeTab === 3
                  ? "rounded-br-[36px]"
                  : activeTab === 1
                    ? " rounded-tr-[36px]"
                    : activeTab === 2
                      ? "lg:bg-[white] bg-[#031555] text-white lg:text-[#031555]"
                      : "lg:bg-[#D45147]"
                }`}
              onClick={() => handleTabClick(2)}
            >
              Engineering
            </button>
            <button
              className={`lg:px-[8px] lg:py-[12px] px-[9px] py-[2px] sm:py-[4px] sm:px-[8px] md:py-[6px] md:px-[10px] bg-[#D45147] transition-all duration-200 ${activeTab === 2
                  ? "rounded-tr-[36px]"
                  : activeTab === 4
                    ? " rounded-br-[36px]"
                    : activeTab === 3
                      ? "lg:bg-[white] bg-[#031555] text-white lg:text-[#031555]"
                      : "lg:bg-[#D45147]"
                }`}
              onClick={() => handleTabClick(3)}
            >
              High Technology
            </button>
            <button
              className={`lg:px-[8px] lg:py-[12px] px-[9px] py-[2px] sm:py-[4px] sm:px-[8px] md:py-[6px] md:px-[10px] bg-[#D45147] transition-all duration-200 ${activeTab === 3
                  ? "rounded-tr-[36px]"
                  : activeTab === 5
                    ? " rounded-br-[36px]"
                    : activeTab === 4
                      ? "lg:bg-[white] text-[#031555]"
                      : "lg:bg-[#D45147]"
                }`}
              onClick={() => handleTabClick(4)}
            >
              Retail
            </button>{" "}
            <button
              className={`lg:px-[8px] lg:py-[12px] px-[9px] py-[2px] sm:py-[4px] sm:px-[8px] md:py-[6px] md:px-[10px] rounded-bl-[33px] transition-all duration-200  bg-[#D45147]  ${activeTab === 4
                  ? "rounded-tr-[36px]"
                  : activeTab === 5
                    ? "lg:bg-[white] bg-[#031555] rounded-bl-[36px] text-white lg:text-[#031555] "
                    : "lg:bg-[#D45147] "
                }`}
              onClick={() => handleTabClick(5)}
            >
              Telecom
            </button>
          </div>
        </div>
        <div className="w-full   lg:bg-[#D45147] lg:border-y-2 lg:border-r-none lg:border-l-[#D45147]  lg:border-y-[#D45147] lg:border-l-2  lg:rounded-l-[36px]  lg:text-[30px] text-[12px] sm:text-[20px] font-semibold text-[#031555] lg:hidden">
          <div className="block">
            <div className="flex justify-evenly ">
              <button
                className={`lg:px-[8px] lg:py-[12px] px-4 py-2  border-[2px] border-[#031555] lg:border-none rounded-[30px] lg:rounded-tl-[36px] lg:rounded-none ${activeTab === 1
                    ? "lg:bg-[white] bg-[#031555] text-textWhite lg:text-[#031555]"
                    : "lg:bg-[#D45147]"
                  }`}
                onClick={() => handleTabClick(1)}
              >
                Banking
              </button>
              <button
                className={`lg:px-[8px] lg:py-[12px] px-4 py-2 border-[2px] border-[#031555] lg:border-none rounded-[30px] lg:rounded-none ${activeTab === 2
                    ? "lg:bg-[white] bg-[#031555] text-textWhite lg:text-[#031555]"
                    : "lg:bg-[#D45147]"
                  }`}
                onClick={() => handleTabClick(2)}
              >
                Engineering
              </button>
              
            </div>
            <div className="flex justify-around mt-6">
              <button
                className={`lg:px-[8px] lg:py-[12px] px-4 py-2 border-[2px] border-[#031555] lg:border-none rounded-[30px] lg:rounded-none ${activeTab === 3
                    ? "lg:bg-[white] bg-[#031555] text-textWhite lg:text-[#031555]"
                    : "lg:bg-[#D45147]"
                  }`}
                onClick={() => handleTabClick(3)}
              >
                High Technology
              </button>
              <button
                className={`lg:px-[8px] lg:py-[12px] px-4 py-2 border-[2px] border-[#031555] lg:border-none rounded-[30px] lg:rounded-none ${activeTab === 4
                    ? "lg:bg-[white] bg-[#031555] text-textWhite lg:text-[#031555]"
                    : "lg:bg-[#D45147]"
                  }`}
                onClick={() => handleTabClick(4)}
              >
                Retail
              </button>{" "}
              <button
                className={`lg:px-[8px] lg:py-[12px] px-4 py-2 border-[2px] border-[#031555] lg:border-none rounded-[30px] lg:rounded-bl-[36px] lg:rounded-none ${activeTab === 5
                    ? "lg:bg-[white] bg-[#031555] text-textWhite lg:text-[#031555]"
                    : "lg:bg-[#D45147]"
                  }`}
                onClick={() => handleTabClick(5)}
              >
                Telecom
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-3/4 p-4 bg-white lg:mt-0 mt-3 border-0 lg:border-0 border-[#D45147] rounded-[36px] lg:border-y-2 lg:border-r-2  lg:border-r-[#D45147] lg:border-y-[#D45147] lg:border-l-none lg:rounded-r-[36px] lg:rounded-none">
          {activeTab === 1 && (
            <div className=" lg:p-[8px] xl:px-[10px]">
              <Image src={bank} alt="bank" className="hidden lg:block" />

              <div className="w-[96px]  mt-[16px] hidden lg:block">
                <h2 className="text-[20px] font-semibold text-textDarkBlue">
                  Overview
                </h2>
                <div className="w-full h-[4px] rounded-[20px] bg-[#D45147]"></div>
              </div>
              <p className="mt-[12px] text-[16px] leading-[24px] text-center lg:text-left font-[400] lg:border-0 border-2 border-textDarkBlue px-[12px] py-[8px] sm:px-[26px] sm:py-[18px] sm:text-[16px] lg:p-0 lg:text-[16px] rounded-[36px]">
                Leverage secure and scalable platforms to streamline operations,
                enhance data security, and personalize customer experiences. We
                bring industry expertise with innovative technologies to empower
                your banking institution.
              </p>

              <div className="flex justify-center lg:block">
                <Link href="industries/#banking">
                  <button className="group  xl:mt-[65px] 2xl:mt-[88px] lg:mt-[107px] md:mt-[15px]  mt-[12px] group-hover:border-[#D45147]   border-2 hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-[#D45147] rounded-xl lg:px-4 lg:py-2  px-[12px] py-[8px]  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-[#D45147] border-[#D45147] hover:text-textWhite transition-all duration-300">
                    <p className="flex items-center text-[12px] justify-between lg:text-[16px] font-medium">
                      Find Now{" "}
                      <span className="pl-2  group-hover:pl-3 transition-all">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 16.3018L6.575 14.9018L12.175 9.30176H0V7.30176H12.175L6.575 1.70176L8 0.301758L16 8.30176L8 16.3018Z"
                            fill="#D45147"
                            className=" group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className=" lg:p-[8px] xl:px-[10px]">
              <Image src={engineering} alt="engineering" className="hidden lg:block" />

              <div className="w-[96px]  mt-[16px] hidden lg:block">
                <h2 className="text-[20px] font-semibold text-textDarkBlue">
                  Overview
                </h2>
                <div className="w-full h-[4px] rounded-[20px] bg-[#D45147]"></div>
              </div>
              <p className="mt-[12px] text-[16px] leading-[24px] text-center lg:text-left font-[400] lg:border-0 border-2 border-textDarkBlue px-[12px] py-[8px] sm:px-[26px] sm:py-[18px] sm:text-[16px] lg:p-0 lg:text-[16px] rounded-[36px]">
                Pirai Infotech can help you take your engineering projects to
                greater heights. Our digital engineering, automation, and
                collaborative project management tools can accelerate your
                teams’ budgeting, productivity, and project delivery.
              </p>

              <div className="flex justify-center lg:block">
                <Link href="industries/#engineering">
                  <button className="group  xl:mt-[65px]  2xl:mt-[88px]  lg:mt-[107px] md:mt-[15px]  mt-[12px] group-hover:border-[#D45147]   border-2 hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-[#D45147] rounded-xl lg:px-4 lg:py-2  px-[12px] py-[8px]  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-[#D45147] border-[#D45147] hover:text-textWhite transition-all duration-300">
                    <p className="flex items-center text-[12px] justify-between lg:text-[16px] font-medium">
                      Discover our capabilities{" "}
                      <span className="pl-2  group-hover:pl-3 transition-all">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 16.3018L6.575 14.9018L12.175 9.30176H0V7.30176H12.175L6.575 1.70176L8 0.301758L16 8.30176L8 16.3018Z"
                            fill="#D45147"
                            className=" group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          )}
          {activeTab === 3 && (
            <div className=" lg:p-[8px] xl:px-[10px]">
              <Image
                src={hightech}
                alt="hightech"
                className="hidden lg:block"
              />

              <div className="w-[96px]  mt-[16px] hidden lg:block">
                <h2 className="text-[20px] font-semibold text-textDarkBlue">
                  Overview
                </h2>
                <div className="w-full h-[4px] rounded-[20px] bg-[#D45147]"></div>
              </div>
              <p className="mt-[12px] text-[16px] leading-[24px] text-center lg:text-left font-[400] lg:border-0 border-2 border-textDarkBlue px-[12px] py-[8px] sm:px-[26px] sm:py-[18px] sm:text-[16px] lg:p-0 lg:text-[16px] rounded-[36px]">
                Leverage our high-tech IT solutions to scale your innovation,
                enhance your business resilience and grow uninterruptedly. Pirai
                Infotech offers customized solutions to disrupt markets and
                powers you to become a leader within your industry.
              </p>

              <div className="flex justify-center lg:block">
                <Link href="industries/#hightech" >
                  <button className="group    xl:mt-[65px]  lg:mt-[107px] md:mt-[15px]  mt-[12px] group-hover:border-[#D45147]   border-2 hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-[#D45147] rounded-xl lg:px-4 lg:py-2  px-[12px] py-[8px]  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-[#D45147] border-[#D45147] hover:text-textWhite transition-all duration-300">
                    <p className="flex items-center text-[12px] justify-between lg:text-[16px] font-medium">
                      Uncover our expertise{" "}
                      <span className="pl-2  group-hover:pl-3 transition-all">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 16.3018L6.575 14.9018L12.175 9.30176H0V7.30176H12.175L6.575 1.70176L8 0.301758L16 8.30176L8 16.3018Z"
                            fill="#D45147"
                            className=" group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          )}
          {activeTab === 4 && (
            <div className=" lg:p-[8px] xl:px-[10px]">
              <Image src={retail} alt="retail" className="hidden lg:block" />

              <div className="w-[96px]  mt-[16px] hidden lg:block">
                <h2 className="text-[20px] font-semibold text-textDarkBlue">
                  Overview
                </h2>
                <div className="w-full h-[4px] rounded-[20px] bg-[#D45147]"></div>
              </div>
              <p className="mt-[12px] text-[16px] leading-[24px] text-center lg:text-left font-[400] lg:border-0 border-2 border-textDarkBlue px-[12px] py-[8px] sm:px-[26px] sm:py-[18px] sm:text-[16px] lg:p-0 lg:text-[16px] rounded-[36px]">
              Pirai Infotech can help you revolutionize your retail operations
                with its cutting-edge IT solutions. Enhance customer
                experiences, streamline supply chains, and optimize inventory
                management for increased profitability.
              </p>

              <div className="flex justify-center lg:block">
                <Link href="industries/#retail" >
                  <button className="group    xl:mt-[65px]  lg:mt-[107px] md:mt-[15px]  mt-[12px] group-hover:border-[#D45147]   border-2 hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-[#D45147] rounded-xl lg:px-4 lg:py-2  px-[12px] py-[8px]  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-[#D45147] border-[#D45147] hover:text-textWhite transition-all duration-300">
                    <p className="flex items-center text-[12px] justify-between lg:text-[16px] font-medium">
                      Unlock Our Value{" "}
                      <span className="pl-2  group-hover:pl-3 transition-all">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 16.3018L6.575 14.9018L12.175 9.30176H0V7.30176H12.175L6.575 1.70176L8 0.301758L16 8.30176L8 16.3018Z"
                            fill="#D45147"
                            className=" group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          )}
          {activeTab === 5 && (
            <div className=" lg:p-[8px] xl:px-[10px]">
              <Image
                src={telcom}
                alt="telcom"
                className="hidden lg:block"
              />

              <div className="w-[96px]  mt-[16px] hidden lg:block">
                <h2 className="text-[20px] font-semibold text-textDarkBlue">
                  Overview
                </h2>
                <div className="w-full h-[4px] rounded-[20px] bg-[#D45147]"></div>
              </div>
              <p className="mt-[12px] text-[16px] leading-[24px] text-center lg:text-left font-[400] lg:border-0 border-2 border-textDarkBlue px-[12px] py-[8px] sm:px-[26px] sm:py-[18px] sm:text-[16px] lg:p-0 lg:text-[16px] rounded-[36px]">
                Pirai Infotech’s innovative IT solutions can help you stay at
                the forefront of the rapidly evolving telecom industry. Harness
                the power of next-generation networks, enable seamless
                connectivity, and deliver exceptional customer experiences.
              </p>

              <div className="flex justify-center lg:block">
                <Link href="industries/#telecom" >
                  <button className="group    xl:mt-[65px]  lg:mt-[107px] md:mt-[15px]  mt-[12px] group-hover:border-[#D45147]   border-2 hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-[#D45147] rounded-xl lg:px-4 lg:py-2  px-[12px] py-[8px]  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-[#D45147] border-[#D45147] hover:text-textWhite transition-all duration-300">
                    <p className="flex items-center text-[12px] justify-between lg:text-[16px] font-medium">
                    Know how{" "}
                      <span className="pl-2  group-hover:pl-3 transition-all">
                        <svg
                          width="16"
                          height="15"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 16.3018L6.575 14.9018L12.175 9.30176H0V7.30176H12.175L6.575 1.70176L8 0.301758L16 8.30176L8 16.3018Z"
                            fill="#D45147"
                            className=" group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sect1;
