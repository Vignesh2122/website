import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import serviceleadership from "../../public/logos/service-leadership.svg";
import serviceInspiration from "../../public/logos/inspiration.svg";
import industries from "../../public/illustrations/industries.svg";
import Client from "../../components/client";
import retailIcon from "../../public/icons/Retail.svg";
import bankIcon from "../../public/icons/Bank.svg";
import engineeringIcon from "../../public/icons/engineering.svg";
import telcomIcon from "../../public/icons/telecom.svg";
import hightechIcon from "../../public/icons/High-Tech.svg";
import efficacy from "../../public/logos/efficacy.svg";
import telecom from "../../public/illustrations/industries-telecom.jpg";
import banking from "../../public/illustrations/industries-banking.jpg";
import engineering from "../../public/illustrations/industries-engineering.jpg";
import retail from "../../public/illustrations/industries-retail.jpg";
import hightech from "../../public/illustrations/industries-hightech.jpg";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import industriesExperienece from "../../public/illustrations/industriesExperienece.svg";
import Link from "next/link";
import Head from "next/head";

function Industries() {
  return (
    <>
      <Head>
        <title>Tailored IT Solutions for Industries | Pirai Infotech</title>
        <meta name="description" content="Explore Industry-specific Cloud Solutions at Pirai Infotech. From Banking to Telecom, unlock growth and Innovation with our customized IT services." />
        <meta name="keywords" content="Tailored IT Solutions, Banking, Telecom, Engineering, Fintech, Edutech, High Technology, 
          Banking cloud solutions, Advanced analytics, Enhanced security, Risk management, AI capabilities,
          Engineering firms, Cloud solutions, Project management,
          High Technology, e-Learning, e-Commerce, Live Enterprise framework,
          Cloud solutions, Retail industry, Future trends, Data-driven insights,
          Telecom Industry, Cloud Solutions, Network Performance" />
        <meta charSet="utf-8" />
        <link rel="icon" href="title.png" type="image/png" />
      </Head>
      <Header />

      <section
        className="relative before:content-[''] z-5 before:block before:absolute
       before:top-0 before:left-0 2xl:before:w-[50%] lg:before:w-[50%] md:mt-[100px]
       xl:before:w-[50%] xl:before:h-[500px] 2xl:before:h-[550px]  lg:before:h-[396px] 
        before:bg-textDarkBlue md:before:w-[50%]  md:before:h-[435px] lg:mt-[160px]"
      >
        <div
          className="md:flex  md:justify-between md:items-center  md:bg-textDarkBlue 
          lg:rounded-r-[320px] md:rounded-r-[300px] container m-auto z-10 relative lg:h-[396px] xl:h-[500px] 2xl:h-[550px]  md:before:h-[435px] lg:py-[40px]"
        >
          <div className="container m-auto w-[90%]">
            <h1
              className="2xl:text-[60px] text-textDarkBlue lg:text-textWhite lg:text-[36px] lg:w-[500px]  font-[700]
          2xl:w-[680px]  text-[36px] py-[20px] lg:py-[0px] lg:px-[10px] 
           md:text-textWhite text-center  md:text-left "
            >
              Transform Your Business With{" "}
              <span className="text-bgPrimaryRed md:text-textWhite">
                Tailored IT Solutions
              </span>
            </h1>
            <p className="font-[400] 2xl:text-[20px] lg:text-[18px] text-textDarkBlue md:text-bgPrimaryRed  xl:w-[580px] lg:w-[500px] lg:py-[10px] lg:px-[10px] 2xl:w-[50%] text-center md:text-left text-[20px]">
              Industry-focused IT solutions for sustainable growth and staying
              ahead of the curve
            </p>
            <div className="py-5">
              <Link href="#form">
                <button className="group flex items-center text-bgPrimaryRed mx-auto lg:!ml-3  border-2 border-bgPrimaryRed rounded-xl hover:border-bgPrimaryRed hover:bg-bgPrimaryRed hover:text-textWhite  px-5 py-3 lg:mt-10 mt-[10px]   my-10 md:mx-0 lg:my-3 drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] ">
                  Connect With Our Specialists
                  <span className="pl-2 group-hover:pl-3 transition-all">
                    <svg
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 16.3018L6.575 14.9018L12.175 9.30176H0V7.30176H12.175L6.575 1.70176L8 0.301758L16 8.30176L8 16.3018Z"
                        fill="#D45147"
                        className="group-hover:fill-textWhite"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-textDarkBlue rounded-r-[320px] w-[100%]  md:w-auto py-[10px] md:py-0 hidden md:block">
            <Image
              src={industries}
              alt="industries"
              className="2xl:mr-[300px] xl:mr-[300px] "
            />
          </div>

          <div className="bg-textDarkBlue md:hidden flex justify-center rounded-r-[320px] w-[100%] h-[400px] md:w-auto py-[10px] md:py-0 before:contents-[''] before:bg-textDarkBlue md:before:hidden relative z-0 before:h-[400px] before:absolute before:-left-10 before:top-0 before:w-[50%]">
            <Image
              src={industries}
              alt="industries"
              className="2xl:mr-[100px] z-10 xl:mr-[50px]"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------- industry experience with cloud solutions ---------------------- */}

      <section className="lg:mt-[180px] md:mt-[120px] mt-[50px]">
        <div className="container m-auto w-[90%]">
          <div className=" bg-textDarkBlue lg:px-0 order-1 py-[30px] rounded-3xl">
            <h2 className="lg:text-[36px] lg:px-10 md:text-3xl text-[20px] lg:leading-[45px] text-center lg:text-left   text-textWhite font-semibold">
              Redefine Your Industry Experiences With
              <span className="text-bgPrimaryRed text-[22px] block">
                {" "}
                Our Customized Cloud Solutions
              </span>
            </h2>
            <div className="lg:flex mt lg:items-center lg:justify-around ">
              <div
                className="2xl:w-[30%] 2xl:my-6  hidden lg:block lg:mt-[36px]  
              lg:mb-[0px] lg:w-[60%]  xl:w-[60%] "
              >
                <Image
                  src={industriesExperienece}
                  alt="Banner"
                  className="2xl:ml-[50px] xl:ml-[40px]  lg:order-2 !order-last mx-auto"
                />
              </div>
              <div
                className="text-textWhite text-[16px] lg:text-[20px] 2xl:w-[990px]  font-normal  mx-auto
                 px-[10px] lg:ml-[50px] mt-[40px] xl:w-[100%] lg:w-[100%] "
              >
                <p className="lg:py-[10px] text-center  lg:text-left ">
                  At Pirai Infotech, we recognize that each industry presents
                  unique challenges and demands. That&apos;s why we deliver
                  tailored IT solutions that empower businesses across diverse
                  sectors. Most of us come from different IT backgrounds. We
                  combine our knowledge of various industries and the latest
                  cloud technology to create fully connected systems that solve
                  specific business challenges and drive growth.
                </p>
                <p className="py-[10px] text-center lg:text-left ">
                  Our team of experts has the know-how of the latest technology
                  and cloud developments. Working closely with our clients in
                  different industries has empowered us with valuable industry
                  insights that allow us to offer solutions that not only
                  address current industry needs but also anticipate future
                  demands. This helps us create IT infrastructures that are
                  built on technology that is future-ready and can be modified
                  with relative ease as the business changes or grows.
                </p>
              </div>
              <div
                className="2xl:w-[30%] 2xl:my-6 lg:hidden lg:mt-[36px]  
              lg:mb-[0px] lg:w-[60%]  xl:w-[60%] "
              >
                <Image
                  src={industriesExperienece}
                  alt="Banner"
                  className="2xl:ml-[50px] xl:ml-[40px]  lg:order-2 !order-last mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-20 lg:mt-[120px]">
        <div className="container m-auto w-[90%] ">
          <div className="lg:flex lg:justify-between  block  md:mx-auto ">
            <h3 className="text-center lg:text-left lg:w-[24%] text-[20px] font-semibold text-bgPrimaryRed  lg:text-[24px] ">
              Through our innovative and reliable industry-wide solutions, we
              help our clients
              <p className="text-[16px] mb-8 lg:mb-0 pt-[15px]  text-textBlack font-normal">
                Partner with Pirai Infotech to drive growth, foster innovation,
                and shape the future of your industry.
              </p>
            </h3>
            <div className="lg:flex relative lg:h-[300px] lg:justify-between lg:w-[75%] mt-3 lg:m-0">
              <div className="bg-textDarkBlue relative h-[250px] lg:h-auto  p-3 rounded-t-[12px] lg:rounded-t-none lg:rounded-bl-[12px] lg:rounded-tl-[12px] lg:w-[33.3%]">
                <h5 className="text-bgLightWhite text-[24px] font-medium 2xl:w-[70%]">
                  Drive growth and enhance operational efficiency
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={efficacy}
                    alt="efficacy"
                    className="absolute right-2 bottom-3"
                  />
                </div>
              </div>
              <div className="bg-bgPrimaryRed relative h-[250px] lg:h-auto p-3 lg:w-[33.3%]">
                <h5 className="text-bgLightWhite text-[24px] font-medium">
                  Propel you to become an industry leader
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={serviceleadership}
                    alt="serviceleadership"
                    className="absolute right-2 bottom-3 "
                  />
                </div>
              </div>
              <div className="bg-bgLightWhite h-[250px] lg:h-auto p-3 rounded-b-[12px] lg:rounded-bl-none lg:rounded-r-[12px] lg:w-[33.3%]">
                <h5 className="text-textBlack text-[24px] lg:text-[20px] xl:text-[24px] font-medium lg:w-[70%]">
                  Unlock the full potential of your industry
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={serviceInspiration}
                    alt="serviceInspiration"
                    className="absolute right-2 bottom-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------Working Process -------------------------------- */}

      {/* ----------------------------------------------What we offer ------------------------------------------ */}

      <section className="lg:mt-[120px]">
        <div className="container m-auto w-[90%] mt-[80px] pt-1 pb-[20px] ">
          <h1
            className="font-[600] 2xl:text-[48px] lg:text-[36px] md:text-[26px]
           text-textDarkBlue text-center  text-[24px]"
          >
            Catalyzing Success Across{" "}
            <span className="text-bgPrimaryRed"> Diverse Industries</span>
          </h1>
          {/* -------------------------------------------- Banking -------------------------------------- */}
          <div
            className="md:flex mt-[30px] md:justify-between md:items-center   mx-auto rounded-[20px] md:rounded-none
            md:w-auto py-[20px] md:py-[0px] "
            id="banking"
          >
            <div className=" ">
              <Image
                src={banking}
                alt="banking"
                className=" w-[80%] mx-auto py-[10px] 
              md:w-auto md:mx-0 hidden md:block"
              />
            </div>
            <div className="2xl:w-[60%] 2xl:py-[100px] lg:w-[65%] md:w-[105%] ">
              <Image
                src={bankIcon}
                alt="bankIcon"
                className="md:hidden p-5 w-[90px] h-[90px] mb-5 rounded-[24px] shadow-2xl  mx-[6px]"
              />
              <h1
                className="font-[600] 2xl:text-[36px] text-[28px] md:text-[20px] lg:text-[26px]
               text-textDarkBlue xl:text-[30px]  lg:px-[50px] md:px-[50px]  2xl:px-[0px] mx-[10px] py-[8px] md:py-[0px] md:mx-0"
              >
                Banking
              </h1>

              <p
                className="font-normal lg:text-[18px] md:text-[12px] 2xl:w-[100%] 2xl:px-[2px] lg:px-[50px] md:px-[50px] px-0
              2xl:py-[20px] 2xl:text-[20px] md:w-[100%] lg:w-auto mx-[10px] md:mx-auto "
              >
                One of the most unique benefits that our cloud solutions can
                offer to the banking sector is the effortless integration of the
                cloud with the bank systems and leveraging of advanced analytics
                and AI capabilities. Our cloud technology can enable banks to
                harness valuable insights to deliver personalized customer
                experiences. The banking sector relies on data analysis and
                security. With us, banks can handle vast amounts of data and
                mitigate cyber threats proactively. Such advancements can
                enhance customer service, improve risk management, and increase
                efficiency.
              </p>

              <div
                className="lg:px-[50px] 2xl:px-[0px] md:px-[50px] mx-[55px] md:mx-0 py-[10px] md:py-[0px] text-center
                 md:text-left md:mt-2 lg:mt-0 mt-4"
              >
                <Link href="#form">
                  <button
                    className="group border-2 hover:border-bgPrimaryRed hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-bgPrimaryRed 
                  rounded-xl px-3 py-2 ml-0 lg:mt-8 
                  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite"
                  >
                    <p className="flex items-center lg:text-[20px]  text-[12px] justify-between font-medium">
                      Unlock new possibilities
                      <span className="pl-2 group-hover:pl-3 transition-all">
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
                            className="group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------- Engineering ------------------------------------------- */}

      <section className="2xl:w-[100%]  md:bg-bgLightWhite">
        <div className="2xl:py-[0px] lg:py-[0px] md:py-[0px] md:mt-9 lg:mt-[10px] container m-auto w-[90%]">
          <div
            className="md:flex  md:justify-between md:items-center
       lg:w-[100%] md:w-[100%] pt-8 md:py-8
         rounded-[20px] md:rounded-none mx-auto lg:mt-[0px] -mt-[50px]"
            id="engineering"
          >
            <div className="2xl:py-[10px]"
            >
              <Image
                src={engineeringIcon}
                alt="engineeringIcon"
                className="md:hidden p-5 w-[90px]  h-[90px] mb-5 rounded-[24px] shadow-2xl   m-[6px]"
              />
              <h2
                className="font-[600] 2xl:text-[36px] text-[28px] md:text-[24px]  
             w-[60%] lg:px-[50px] xl:text-[30px] text-textDarkBlue
            2xl:px-[0px]  mx-[10px] md:mx-0"
              >
                Engineering
              </h2>
              <p
                className="font-normal 2xl:text-[20px] lg:text-[18px] 
            lg:px-[50px] 2xl:px-[0px] lg:w-[500px] md:w-[450px] md:py-[10px] xl:w-[700px] mx-[10px] md:mx-0"
              >
                Our cloud solutions can enable engineering firms to access vast
                computing power whenever needed, without investing in expensive
                infrastructure. They can manage complex projects more
                efficiently, accelerate time-to-market, and take on larger-scale
                projects that would otherwise not be possible. Teams dispersed
                across remote locations can leverage our cloud solutions for
                real-time collaboration, thus further improving productivity and
                innovation. This unique combination of computational power,
                scalability, and collaborative capabilities can be game-changing
                for engineering companies.
              </p>
              <div className="lg:px-[50px]  md:mt-0 mt-4  2xl:px-[0px] mx-[55px] md:mx-0 text-center md:text-left pt-[10px] md:pt-[0px]"
              >
                <Link href="#form">
                  <button
                    className="group border-2 hover:border-bgPrimaryRed hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-bgPrimaryRed 
                rounded-xl px-3 py-2 ml-0 lg:mt-8 
                drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite"
                  >
                    <p className="flex items-center lg:text-[20px] text-[11px] justify-between  font-medium">
                      Power your growth
                      <span className="pl-2 group-hover:pl-3 transition-all">
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
                            className="group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <Image
                src={engineering}
                alt="engineering"
                className="w-[80%] mx-auto py-[10px]
              md:w-auto md:mx-0 rounded-[50px] md:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------High Technology -------------------------------------------------------- */}

      <section className="lg:py-0 py-[10px] md:mt-9 lg:mt-[80px] pt-1 md:pb-[39px]">
        <div className="container m-auto w-[90%]">
          <div
            className="md:flex mt-[30px] md:justify-between md:items-center   mx-auto rounded-[20px] md:rounded-none
            md:w-auto py-[20px] md:py-[0px]"
            id="hightech"
          >
            <div className=" ">
              <Image
                src={hightech}
                alt="hightech"
                className=" w-[80%] mx-auto py-[10px] 
              md:w-auto md:mx-0 hidden md:block"
              />
            </div>
            <div className="2xl:w-[60%] 2xl:py-[100px] lg:w-[65%] md:w-[105%] ">
              <Image
                src={hightechIcon}
                alt="hightechIcon"
                className="md:hidden p-5 w-[90px] h-[90px] mb-5 rounded-[24px] shadow-2xl  mx-[6px]"
              />
              <h1
                className="font-[600] 2xl:text-[36px] text-[28px] md:text-[20px] lg:text-[26px]
               text-textDarkBlue xl:text-[30px]  lg:px-[50px] md:px-[50px]  2xl:px-[0px] mx-[10px] py-[8px] md:py-[0px] md:mx-0"
              >
                High Technology
              </h1>

              <p
                className="font-normal lg:text-[18px] md:text-[12px] 2xl:w-[100%] 2xl:px-[2px] lg:px-[50px] md:px-[50px] px-0
              2xl:py-[20px] 2xl:text-[20px] md:w-[100%] lg:w-auto mx-[10px] md:mx-auto "
              >
                Industries like e-Learning, e-Commerce, gaming, and
                entertainment can leverage our cutting-edge Live Enterprise
                framework to stay market disruptive. This framework can help
                easily integrate business processes, systems, and data.
                Additionally, we can help businesses get real-time visibility of
                customer behavior and market trends. They can use this framework
                to quickly adapt to evolving industry demands and stay ahead of
                the competition. Overall, the Live Enterprise framework can
                optimize operations, boost growth, and deliver exceptional value
                to customers.
              </p>

              <div
                className="lg:px-[50px] 2xl:px-[0px] md:px-[50px] mx-[55px] md:mx-0 py-[10px] md:py-[0px] text-center
                 md:text-left lg:mt-0 md:mt-2 mt-4"
              >
                <Link href="#form">
                  <button
                    className="group border-2 hover:border-bgPrimaryRed hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-bgPrimaryRed 
                  rounded-xl px-3 py-2 ml-0 lg:mt-8 
                  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite"
                  >
                    <p className="flex items-center lg:text-[20px]  text-[12px] justify-between font-medium">
                      Chart your success path
                      <span className="pl-2 group-hover:pl-3 transition-all">
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
                            className="group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------Retail -------------------------------------------------- */}

      <section className="2xl:w-[100%]  md:bg-bgLightWhite" id="retail">
        <div className="2xl:py-[0px] lg:py-[0px] md:py-[0px]  mt-[30px] container m-auto w-[90%]">
          <div
            className="md:flex  md:justify-between md:items-center
       lg:w-[100%] md:w-[100%]   pt-[39px] pb-[39px]
         rounded-[20px] md:rounded-none mx-auto lg:mt-[0px] -mt-[50px]"

          >
            <div className="2xl:py-[10px]">
              <Image
                src={retailIcon}
                alt="retailIcon"
                className="md:hidden p-5 w-[90px]  h-[90px] mb-5 rounded-[24px] shadow-2xl   m-[6px]"
              />
              <h2
                className="font-[600] 2xl:text-[36px] text-[28px] md:text-[24px]  
             w-[60%] lg:px-[50px] xl:text-[30px] text-textDarkBlue
            2xl:px-[0px]  mx-[10px] md:mx-0"
              >
                Retail
              </h2>
              <p
                className="font-normal 2xl:text-[20px] lg:text-[18px] 
            lg:px-[50px] 2xl:px-[0px] lg:w-[500px] md:w-[450px] md:py-[10px] xl:w-[700px] mx-[10px] md:mx-0"
              >
                Our cloud solutions for the retail industry go beyond enhancing
                operational efficiency. We help businesses anticipate future
                trends and easily adapt to evolving market demands. Through
                data-driven insights, retailers can establish a unique position
                in the marketplace, surpassing customer expectations. Retailers
                can leverage our robust data security and compliance measures to
                safeguard sensitive customer information and retain customer
                trust. Overall, our cloud solutions help kindle unanticipated
                business success and deliver long-lasting value to their
                customers.
              </p>

              <div className="lg:px-[50px]  md:mt-0 mt-4  2xl:px-[0px] mx-[55px] md:mx-0 text-center md:text-left pt-[10px] md:pt-[0px]"
              >
                <Link href="#form">
                  <button
                    className="group border-2 hover:border-bgPrimaryRed hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-bgPrimaryRed 
                rounded-xl px-3 py-2 ml-0 lg:mt-8 
                drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite"
                  >
                    <p className="flex items-center lg:text-[20px] text-[11px] justify-between  font-medium">
                      Elevate customer experience
                      <span className="pl-2 group-hover:pl-3 transition-all">
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
                            className="group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>

            <div className="hidden md:block">
              <Image
                src={retail}
                alt="retail"
                className="w-[80%] mx-auto py-[10px] 
              md:w-auto md:mx-0 rounded-[50px] md:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- Telecom -------------------------------------- */}

      <section className="container m-auto w-[90%]">
        <div className="mt-[40px]">
          <div
            className="md:flex  justify-between items-center
  lg:w-[100%]  md:w-[100%]  
  md:py-[10px] 2xl:py-[50px]  rounded-[20px] md:rounded-none mx-auto py-[20px] lg:mt-[0px] -mt-[50px]"
            id="telecom"
          >
            <div className="">
              <Image
                src={telecom}
                alt="telecom"
                className="w-[80%] mx-auto py-10 
              md:w-auto md:mx-0 hidden md:block"
              />
            </div>
            <div className="2xl:w-[60%] 2xl:py-[100px] lg:w-[75%] md:w-[100%] ">
              <Image
                src={telcomIcon}
                alt="telcomIcon"
                className="md:hidden p-5 w-[90px]  h-[90px] mb-5 rounded-[24px] shadow-2xl   m-[6px]"
              />
              <h2
                className="font-[600] 2xl:text-[36px] text-[24px] md:text-[20px] text-textDarkBlue 
        lg:px-[50px] md:px-[50px] 2xl:px-[0px] mx-[10px] md:mx-0 xl:text-[30px]"
              >
                Telecom
              </h2>
              <p
                className="font-normal 2xl:text-[20px] lg:text-[18px] 2xl:w-[100%] 2xl:px-[2px] lg:px-[50px] 
        md:px-[50px] 2xl:py-[20px]  mx-[10px] md:mx-0 md:text-[14px] py-[10px] "
              >
                Businesses in this sector can leverage our cloud solutions to
                enhance their network performance, automate network functions,
                and automate operations. This translates to seamless
                connectivity for customers. With our cloud solutions, telecom
                companies can extract valuable insights from massive amounts of
                data. With this knowledge, they can take data-driven decisions
                and deliver personalized customer experiences. Pirai Infotech
                spurs telecom businesses to stay agile, and adaptive and unlock
                new business opportunities faster than their peers.
              </p>

              <div
                className="lg:px-[50px]  md:mt-0 mt-4 2xl:px-[0px]  md:px-[50px]  mx-[55px] md:mx-0 py-[10px] md:py-[0px] text-center
        md:text-left"
              >
                <Link href="#form">
                  <button
                    className="group border-2 hover:border-bgPrimaryRed hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] text-bgPrimaryRed rounded-xl 
        px-3 py-2 ml-0 lg:mt-8 drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite"
                  >
                    <p className="flex items-center lg:text-[20px] text-[12px] justify-between font-medium">
                      Transform your business
                      <span className="pl-2 group-hover:pl-3 transition-all">
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
                            className="group-hover:fill-textWhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------------------------------------------Why Choose Pirai Infotech ------------------------------ */}

      {/* ---------------------------------------import Contact Components----------------------------------------------- */}

      <Form />
      <Footer />
    </>
  );
}

export default Industries;
