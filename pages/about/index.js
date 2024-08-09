import Header from "@/components/Header";
import Image from "next/image";
import passion from "../../public/illustrations/passion.svg.svg";
import success from "../../public/illustrations/success.svg";
import countries from "../../public/icons/countries.svg.svg";
import technologies from "../../public/icons/technologies.svg.svg";
import clients from "../../public/icons/clients.svg.svg";
import employees from "../../public/icons/employees.svg.svg";
import founder from "../../public/illustrations/founder.svg";
import missions from "../../public/icons/missions.svg.svg";
import visions from "../../public/icons/visons.svg.svg";
import value from "../../public/icons/value.svg.svg";
import india from "../../public/icons/india.svg";
import malaysia from "../../public/icons/malaysia.svg";
import germany from "../../public/icons/germany.svg";
import unitedkingdom from "../../public/icons/united-kingdom.svg";
import unitedstates from "../../public/icons/united-states (2).svg";
import light from "../../public/icons/light.svg";
import run from "../../public/icons/run.svg";
import climb from "../../public/icons/climb.svg";
import paper_rocket from "../../public/icons/paper-rocket.svg";
import rocket from "../../public/icons/rocket.svg";
import mountain from "../../public/icons/mountain.svg";
import Footer from "@/components/Footer";
import Sliders from "@/components/Sliders";
import Map from "@/components/Map";
import Pave from "@/components/pave";
import Form from "@/components/Form";
import Link from "next/link";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Innovating Cloud Solutions | Pirai Infotech</title>
        <meta name="description" content="Explore the journey of Pirai Infotech, a global leader in cloud solutions. Discover our milestones, success cornerstones, and inclusive culture." />
        <meta name="keywords" content="Pirai Infotech, Cloud solutions, Digital transformation, Global leader, Success milestones, Technology innovation" />
        <meta charSet="utf-8" />
        <link rel="icon" href="title.png" type="image/png" />
      </Head>
      <Header />

      <section>
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 lg:mt-[140px] mt-[60px] container m-auto font-poppins 2xl:px-[50px] xl:px-[40px] sm:px-[5%]">
          <div className=" xl:w-[45%] 2xl:w-[40%] lg:w-[50%] mt-[-50px] md:mt-0">
            <h1
              className="  text-[40px] sm:text-[40px]  md:text-[46px] 2xl:text-[55px] xl:text-[48px] font-poppins leading-[72px] font-bold 
              text-center md:text-left mb-6 md:mb-0 text-textDarkBlue"
            >
              Discover What Drives Us at Pirai
            </h1>
            <p
              className="
              lg:mt-[10px] xl:mt-[10px] mt-[20px] sm:mt-[0px] text-[16px] md:text-[20px]  h-[60px] text-base md:text-lg font-[400]
               text-center md:text-left text-bgPrimaryRed 2xl:py-[20px] 2xl:text-[24px] md:mt-3"
            >
              Get To Know How We Can Elevate Your Business Beyond the Limits
            </p>

            <div className="py-5 2xl:py-[32px]">
              <Link href="/service">
                <button
                  className="group flex items-center text-[16px] md:text-[20px] text-bgPrimaryRed  border-2 border-bgPrimaryRed rounded-xl hover:border-bgPrimaryRed
                hover:bg-bgPrimaryRed hover:text-textWhite  bg-textWhite p-[8px] mt-[-5px] mx-auto my-10 lg:mx-0 lg:my-3 md:ml-0 md:mt-[10px]"
                >
                  Explore Our Potential
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

          <div className="lg:w-[540px] md:w-[840px] sm:w-[450px]sm:mt-0 md:mt-[-60px] lg:mt-0">
            <Image
              src={passion}
              alt="passion"
              className=" 2xl:w-[1030px]  bg-[rgba(227, 230, 237, 0.4)]"
            />
          </div>
        </div>
      </section>
      {/* ----------------------------------   About Us -------------------------------------------------------------- */}

      <section>
        <div className="container mx-auto w-[90%]  m-auto body-font font-poppins bg-[#031555] sm:px-16 lg:px-8 px-4  py-[10px] rounded-2xl">
          <h1 className="font-[600] text-center text-[24px] sm:text-[33px] md:text-[40px] lg:text-[42px] text-textWhite">
            About Us
          </h1>
          <p className=" text-center  font-[600] md:text-[36px] text-[12px] text-bgPrimaryRed  py-2 justify-start ">
            Sparking Cloud Innovation Since 2017
          </p>

          <div className=" text-center justify-center text-[12px] md:text-[20px] text-textWhite">
            <p className=" font-[500]  sm:font-[500] py-[10px] ">
              The Pirai story started with a dream, a desire to redefine the
              digital landscape through cutting-edge cloud solutions. That’s
              when, our founder and Chief Executive Gokul A N, formed a team of
              tech-savvy trailblazers to write an epic digital transformation
              story.
            </p>

            <p className="font-[500]  md:leading-[30px] text-[12px] md:text-[20px] sm:font-[500] py-[10px] text-textWhite">
              From humble beginnings, we embarked on a mission to leverage the
              power of the cloud in helping businesses thrive in an increasingly
              interconnected digital world. Today, Pirai Infotech is at the
              forefront of cloud innovation. It has been one of the
              fastest-growing companies with an average growth rate of 100% YoY
              for the past 5 years.
            </p>

            <p className="font-medium text-[12px] md:text-[20px]   sm:font-[500] py-[10px] text-textWhite">
              We are proud to have spent 250,000 man-hours working on
              automation. We are continuously pushing boundaries and delivering
              exceptional value to our clients worldwide across industries —
              retail, telecom, banking, engineering, and high technology. Our
              client line-up is a mix of Fortune 500 companies, dynamic
              startups, and global enterprises.
            </p>
            <p className="font-[500] text-[12px] md:text-[24px]  sm:font-[500]  text-bgPrimaryRed pb-5">
              We are writing a story where innovation is our language and impact
              is our purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------journey of pirai new section ------ */}
      <section>
        <div className="container m-auto text-center pt-[60px] xl:h-[810px] lg:h-[700px] md:h-[1000px] sm:h-[940px] h-[700px]  bg-contain lg:bg-UpandDown_lines  bg-no-repeat bg-center">
          <h1 className="text-[#031555] md:text-[48px]  text-[30px] font-[600] mb-[110px]">
            {" "}
            Journey of <span className="text-[#D45147] ">Pirai</span>
          </h1>
          <div className="relative">
            <div className="absolute xl:left-[65px]  2xl:left-[100px] xl:top-0 2xl:top-[8px] lg:left-[52px] lg:top-[-35px]  sm:top-[-50px] top-[-70px] md:left-[40px] sm:left-[50px] left-[20%] flex lg:flex-col justify-between lg:justify-normal  items-center  xl:w-[250px] lg:w-[200px] md:w-[430px] sm:w-[340px] w-[40%] text-center">
              <Image
                src={light}
                alt="light"
                className="md:w-[80px] w-[22%] sm:w-[70px] lg:w-auto block lg:hidden rounded-full shadow-[0_5px_35px_10px_rgb(185,188,197)] xl:my-[61px]  lg:my-[50px] order-2 lg:order-1"
              />
              <div className=" flex flex-col lg:order-2 md:w-[280px] sm:w-[205px] lg:mt-[190px] xl:mt-[220px] lg:ml-[5px] w-[62%] lg:w-auto">
                <h1 className="xl:text-[28px] md:text-[23px] sm:text-[18px] text-[15px]  font-[600] lg:py-2 lg:order-1">
                  2017
                </h1>
                <p className="xl:text-[16px] sm:text-[13px] text-[8px] lg:order-2 ">
                  Pirai Infotech was founded and Build ‘Center of Excellence’ to
                  incubate talent.
                </p>
              </div>
            </div>
            <div
              className="absolute 2xl:left-[315px]  xl:left-[250px] 2xl:top-[-72px] xl:top-[-52px] lg:left-[200px]
             md:left-[310px] sm:left-[260px] left-[42%] lg:top-[-70px] md:top-[90px] sm:top-[70px] top-[20px] flex lg:flex-col 
             justify-between lg:justify-normal items-center xl:w-[250px] lg:w-[200px] md:w-[430px] sm:w-[340px] w-[40%] text-center"
            >
              <Image
                src={run}
                alt="light"
                className="w-[22%] sm:w-[70px] md:w-[80px] lg:w-auto block lg:hidden rounded-full shadow-[0_5px_35px_10px_rgb(185,188,197)]
                 lg:order-3 xl:my-[70px] lg:my-[50px]"
              />
              <div className="flex flex-col md:w-[280px] sm:w-[205px] w-[62%] lg:w-auto">
                <h1 className="xl:text-[28px] md:text-[23px] sm:text-[18px] text-[15px] font-[600] lg:py-2 lg:order-2">
                  2019
                </h1>
                <p className="xl:text-[16px] sm:text-[13px] text-[8px]">
                  Started operations in the UK, Malaysia and Germany. Contracted
                  new business to mark its first growth &gt;100%
                </p>
              </div>
            </div>
            <div
              className="absolute 2xl:left-[540px]  xl:left-[437px] 2xl:top-[8px]  xl:top-0 lg:left-[350px] md:left-[40px] 
            sm:left-[50px] left-[20%] lg:top-[-35px] md:top-[230px] sm:top-[210px] top-[110px] flex lg:flex-col justify-between 
            lg:justify-normal items-center xl:w-[250px] lg:w-[200px] md:w-[430px] sm:w-[340px] w-[40%] text-center"
            >
              <Image
                src={climb}
                alt="climb"
                className="w-[22%] sm:w-[70px] md:w-[80px] lg:w-auto  block lg:hidden rounded-full shadow-[0_5px_35px_10px_rgb(185,188,197)]
                 xl:my-[70px] lg:my-[50px] order-2 lg:order-1"
              />

              <div className="flex flex-col md:w-[280px] sm:w-[205px] w-[62%] lg:mt-[190px] xl:mt-[220px] lg:ml-[5px] lg:w-auto lg:order-2">
                <h1 className="xl:text-[28px] md:text-[23px] sm:text-[18px] text-[15px] font-[600] lg:py-2">
                  2020
                </h1>
                <p className="xl:text-[16px] sm:text-[13px] text-[8px]">
                  Diversified Pirai offerings for customers to cover their
                  requirements with a strategic focus on automation
                </p>
              </div>
            </div>
            <div
              className="absolute 2xl:left-[765px] xl:left-[620px] xl:top-[-52px] 2xl:top-[-72px] lg:left-[490px] md:left-[310px]
             sm:left-[260px] left-[42%] lg:top-[-70px] md:top-[365px] sm:top-[335px] top-[200px] flex lg:flex-col 
             justify-between lg:justify-normal items-center xl:w-[250px] lg:w-[200px] md:w-[430px] sm:w-[340px] w-[40%] text-center"
            >
              <Image
                src={paper_rocket}
                alt="climb"
                className="w-[22%] sm:w-[70px] md:w-[80px] lg:w-auto block lg:hidden  rounded-full shadow-[0_5px_35px_10px_rgb(185,188,197)]
                 xl:my-[70px] lg:my-[50px] order-1 lg:order-2"
              />
              <div className="flex flex-col md:w-[280px] sm:w-[205px] w-[62%] lg:w-auto order-2 lg:order-1">
                <h1 className="xl:text-[28px] md:text-[23px] sm:text-[18px] text-[15px] font-[600] lg:py-2 lg:order-2">
                  2021
                </h1>
                <p className="xl:text-[16px] sm:text-[13px] text-[8px]">
                  Partnered with AWS to enhance Pirai’s services to the customer
                  across the globe to continue 100% YoY growth
                </p>
              </div>
            </div>
            <div
              className="absolute 2xl:left-[985px] xl:left-[805px] 2xl:top-[8px] xl:top-0 lg:left-[640px] md:left-[40px] 
            sm:left-[50px] left-[20%] lg:top-[-35px] md:top-[510px] sm:top-[470px] top-[295px] flex lg:flex-col justify-between 
            lg:justify-normal items-center xl:w-[250px] lg:w-[200px] md:w-[430px] sm:w-[340px] w-[40%] text-center"
            >
              <Image
                src={rocket}
                alt="climb"
                className="w-[22%] sm:w-[70px] md:w-[80px]  lg:w-auto block lg:hidden rounded-full shadow-[0_5px_35px_10px_rgb(185,188,197)]
                 xl:my-[70px] lg:my-[50px] order-2 lg:order-1"
              />
              <div className="flex flex-col md:w-[280px] sm:w-[205px] w-[62%] lg:mt-[190px] xl:mt-[220px] lg:ml-[5px] lg:w-auto order-1 lg:order-2">
                <h1 className="xl:text-[28px] md:text-[23px] sm:text-[18px] text-[15px] font-[600] lg:py-2">
                  2022
                </h1>
                <p className="xl:text-[16px] sm:text-[13px] text-[8px]">
                  With Infra for 250+ engineers globally, Partnered with Red hat to further expand Pirai’s Offerings
                </p>
              </div>
            </div>
            <div
              className="absolute 2xl:left-[1215px] xl:left-[990px] 2xl:top-[-72px] xl:top-[-52px] lg:left-[790px] 
            md:left-[310px] sm:left-[260px] left-[42%] lg:top-[-70px] md:top-[640px] sm:top-[600px] top-[380px]  
            flex lg:flex-col justify-between lg:justify-normal  items-center xl:w-[250px] lg:w-[200px] md:w-[430px]
             sm:w-[340px] w-[40%] text-center"
            >
              <Image
                src={mountain}
                alt="climb"
                className="w-[22%] sm:w-[70px] md:w-[80px] lg:w-auto lg:order-2 block lg:hidden rounded-full shadow-[0_5px_35px_10px_rgb(185,188,197)]
                 xl:my-[70px] lg:my-[50px] "
              />
              <div className="flex flex-col  md:w-[280px] sm:w-[205px] w-[62%] lg:w-auto">
                <h1 className="xl:text-[28px] lg:text-[23px] sm:text-[18px] text-[15px] font-[600] lg:py-2 lg:order-2 order-1">
                  2023
                </h1>
                <p className="xl:text-[16px] sm:text-[13px] text-[8px] order-2 lg:order-1">
                  Moved to a new 100+ seater world class development center and
                  celebrated 6 years of Pirai’s success
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------our success --------------------------------------- */}

      <section
        className=" font-poppins relative before:content-[''] z-5 before:block before:absolute
       before:top-0 before:right-0 2xl:before:w-[1150px] 2xl:before:h-[600px]   xl:before:w-[150px]  xl:before:h-[500px]
       lg:before:w-[130px]  lg:before:h-[500px] 
       md:before:w-[150px] md:before:h-[570px] before:bg-textDarkBlue lg:mt-[-85px] mt-[50px]"
      >
        <div
          className=" bg-textDarkBlue 2xl:h-[600px] md:rounded-l-[50px] md:rounded-none rounded-[30px] xl:h-[500px]
          lg:h-[500px] lg:w-[88%] xl:w-[90%] md:h-[570px]
          sm:w-[100%] sm:h-[580px] w-[100%] h-[400px]  z-10 container m-auto"
        >
          <h1 className="text-[12px] sm:text-[30px]  md:text-[36px] text-center font-semibold py-[28px] px-[9%] lg:px-[4%] 2xl:px-[12%] text-textWhite relative">
            Here Is How We Synergize{" "}
            <span className="text-bgPrimaryRed"> Our Success </span>{" "}
          </h1>

          <div
            className="flex justify-evenly  items-center w-full  2xl:py-10 lg:relative sm:pr-[90px]   pt-[30px] lg:pt-[0px] 
          lg:px-[10px]"
          >
            <div>
              <Image
                src={success}
                alt="success"
                className="hidden lg:block lg:w-[70%] xl:w-[80%] 2xl:w-[100%]"
              />
            </div>

            <div className="w-80 sm:w-[450px] mx-auto sm:m-0 ">
              <div className="flex items-center  justify-center w-full">
                <div className=" border-b-2 border-bgPrimaryRed border-r-2 w-1/2 flex items-center justify-around">
                  <div className="pb-2 flex justify-center text-center flex-wrap">
                    <Image src={countries} alt="countries" />
                    <h2 className="text-bgPrimaryRed font-[600] w-full text-[20px] sm:text-[42px]">
                      5+
                    </h2>
                    <h1 className="text-textWhite w-full text-[16px] sm:text-[30px]">
                      Countries
                    </h1>
                  </div>
                </div>

                <div className=" border-b-2 border-bgPrimaryRed w-1/2 flex items-center justify-around">
                  <div className="pb-2 flex justify-center text-center flex-wrap">
                    <Image src={technologies} alt="technologies" />
                    <h2 className="text-bgPrimaryRed font-[600] w-full text-[20px] sm:text-[42px]">
                      40+
                    </h2>
                    <h1 className="text-textWhite w-full lg:ml-0 text-[16px] sm:text-[30px] ">
                      Technologies
                    </h1>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <div className=" border-bgPrimaryRed border-r-2 w-1/2 flex items-center justify-around">
                  <div className="pt-2 flex justify-center text-center flex-wrap">
                    <Image src={clients} alt="clients" />

                    <h2 className="text-bgPrimaryRed font-[600] w-full text-[20px] sm:text-[42px]">
                      20+
                    </h2>
                    <h1 className="text-textWhite w-full text-[16px] sm:text-[30px] ">
                      Clients
                    </h1>
                  </div>
                </div>
                <div className=" border-bgPrimaryRed w-1/2  flex items-center justify-around">
                  <div className="pt-2 flex justify-center text-center flex-wrap">
                    <Image src={employees} alt="employees" />

                    <h2 className="text-bgPrimaryRed font-[600] w-full text-[20px] sm:text-[42px]">
                      100+
                    </h2>
                    <h1 className="text-textWhite w-full text-[16px] sm:text-[30px] ">
                      Employees
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------Founder-------------------------------- */}

      <section
        className="font-poppins relative before:content-[''] z-5 before:block before:absolute
       before:top-0 before:right-0 2xl:before:w-[1150px]   xl:before:w-[150px]  xl:before:h-[500px]
       lg:before:w-[130px]  lg:before:h-[480px]
       md:before:w-[150px] md:before:h-[380px] before:bg-bgLightWhite mt-[50px]"
      >
        <div
          className=" 2xl:w-[90%] xl:w-[90%] lg:h-[480px] lg:w-[88%] xl:h-[500px]  md:w-[88%]  pb-[20px] md:rounded-l-[50px] 
          md:rounded-none rounded-[50px] w-[90%] container m-auto z-10 md:bg-bgLightWhite 
          2xl:rounded-l-[50px] md:h-[380px] md:flex items-center sm:border  sm:border-orange-800  
          md:border-none border sm:rounded-3xl border-bgPrimaryRed sm:block block md:px-5 md:py-14 "
        >
          <div className=" sm:[20%] ">
            <Image
              src={founder}
              alt="founder"
              className=" 2xl:py-[0px]  2xl:ml-[0px]   
                   md:w-[850px]  sm:w-[70px] w-[70px]
                    relative  md:mt-0  sm:mt-[5%] mt-[5%] sm:ml-[29%] md:ml-0 ml-[10%] "
            />
          </div>
          <div className="mx-[20px] lg:mx-0 lg:ml-[30px]  text-center">
            <div className="sm:-mt:[10%] bg-slate-400   sm:pl-[48px] md:pl-0">
              <h1
                className="font-[600] -mt-[60px] md:-mt-[0px] xl:text-[36px] lg:text-[28px] 2xl:text-start 2xl:mt-[0px] 2xl:ml-[0px] text-textDarkBlue text-[20px]
 text-center md:text-left relative
           
           "
              >
                Gokul A N
              </h1>
              <p
                className="font-[500] ml-[33px] sm:ml-[55px] md:ml-[0px] xl:text-[24px] 2xl:ml-[0px] lg:text-[20px]  sm:text-[14px] text-[12px] py-[5px]   
             md:text-bgPrimaryRed text-center md:text-left relative sm:text-textBlack  "
              >
                CEO{" "}
                <span className="  text-[0px] xl:text-[24px] md:text-[14px] ">
                  & Founder{" "}
                </span>{" "}
                @ Pirai Infotech
              </p>
            </div>

            <p
              className=" xl:text-[20px] lg:text-[16px]
             relative lg:text-left text-left w-[100%] md:w-auto mt-[20px]  font-normal py-2 md:mt-[0px] text-[12px]"
            >
              In the ever-evolving digital landscape, Pirai Infotech stands out,
              armed with efficient, innovative, and reliable technology solutions.
              We are relentlessly empowering businesses and propelling them to
              greater heights through our tailored IT solutions.
            </p>


            <p
              className="xl:text-[20px] lg:text-[16px] 2xl:ml-[0px]  2xl:px-[0px]  sm:text-[12px] text-[12px] 
             lg:text-left text-left font-normal py-2 relative"
            >
              Our strength lies in our continuous pursuit of cutting-edge technology
              solutions that foster adaptability, agility, and effectiveness.
              We envision a future where business possibilities are boundless
              through groundbreaking IT solutions.
            </p>
            <p
              className="xl:text-[20px] lg:text-[16px] 2xl:ml-[0px]  2xl:px-[0px]  sm:text-[12px] text-[12px] 
             lg:text-left text-left font-normal py-2 relative"
            >
              As we pioneer a transformative landscape, we surge forward, unleashing a wave of unparalleled
              excellence. The journey has begun. The future holds great promise. And, our every day persists
              with a meaningful purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------mission,vision,value---------------------------------- */}
      <>
        <div className="pt-[60px]  text-center md:text-[36px] sm:text-[28px] font-[600]">
          <h1 className="text-[#031555]">
            Defining Our
            <span className="text-[#D45147]"> Success Cornerstones</span>
          </h1>
        </div>

        <section
          className=" 2xl:mb-[0px] 2xl:mt-[20px] xl:mt-[5px]   md:mb-[50px] mb-[50px] md:mt-[-15px] 
      md:py-[20px]  container m-auto font-poppins lg:mt-[-20px] w-[90%]  mt-[30px] flex justify-center"
        >
          <div className="md:flex ">
            <div className="">
              <div
                className="bg-textDarkBlue 2xl:w-[728px] 2xl:h-[400px]  xl:h-[320px] xl:w-[632px] xl:my-[22px]  2xl:my-[0px]
           2xl:mt-[0px] md:w-[320px] md:h-[210px]  md:my-[41px]   md:ml-[0px] w-auto h-[184px]
             lg:w-[496px] lg:h-[260px] pl-[20px]
           "
              >
                <Image
                  src={missions}
                  alt="missions"
                  className="  2xl:ml-[20px] 2xl:py-[40px] 2xl:w-[150px] 2xl:h-[200px] 2xl:mt-[0px] 
              lg:w-[12%]   w-[48px]   py-[10px] md:py-[10px] lg:pt-[45px]
                 ml-[20px]  "
                />
                <div className="px-[5px]">
                  <h1
                    className="2xl:text-[24px]  text-bgPrimaryRed 2xl:mx-[50px] xl:text-[20px]
              sm:font-[600] font-[600] text-[16px] ml-[15px]  mt-[5px] xl:pt-[5px] 2xl:pt-[5px] 2xl:mt-[-10px] "
                  >
                    Mission
                  </h1>
                  <p
                    className="2xl:text-[20px] 2xl:font-[400] text-bgLightWhite 2xl:w-[524px] 2xl:mx-[46px] 2xl:py-[10px] 
                md:text-[12px] font-[400]  text-[10px]  px-[15px] 2xl:px-[0px]  
                xl:text-[16px]  pt-[5px]"
                  >
                    Our mission is to digitally transform enterprises by providing the best operational enhancement, infrastructure and governance without compromising on security.
                  </p>
                </div>
              </div>
              <div
                className="2xl:w-[728px] 2xl:h-[441px] bg-bgPrimaryRed 2xl:mt-[0px] 2xl:ml-[0px]  md:w-[310px] md:h-[222px]
              w-auto h-[160px]  
              lg:w-[496px] lg:h-[233.5px] 
              xl:h-[293px] xl:w-[632px] xl:mb-[0px] md:-mt-[45px]      
              md:mx-[0px] pl-[20px]"
              >
                <Image
                  src={visions}
                  alt="visions"
                  className="2xl:ml-[20px] 2xl:py-[40px] 2xl:w-[150px] 2xl:h-[200px] 2xl:mt-[0px] 
                lg:w-[12%]   w-[48px]   py-[10px] md:py-[10px] lg:pt-[35px]
                   ml-[15px]  "
                />
                <div className="px-[5px]">
                  <h1
                    className="2xl:text-[24px] font-semibold text-textDarkBlue 2xl:ml-[50px]
                   font-600 text-[16px]   ml-[15px] lg:mt-[5px] xl:text-[20px] 2xl:mt-[-10px] "
                  >
                    Vision
                  </h1>
                  <p
                    className=" 2xl:text-[20px] 2xl:font-[400] text-bgLightWhite  2xl:mx-[46px] 2xl:mt-[20px] 2xl:w-[528px]  2xl:px-[0px]
                xl:text-[16px]   font-[400]  text-[10px] px-[15px]
                    mt-5px  lg:py-[5px] 2xl:py-[0px] 
                md:text-[12px] 
                 lg:text-[13px]"
                  >
                    Empowering enterprises to leverage technology and focus on their core business.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="2xl:w-[800px] 2xl:h-auto 2xl:mt-[0px]   
             bg-bgLightWhite md:mt-[40px]  xl:mt-[20px]  
            mt-[0px]   w-auto 
           h-auto px-[20px]
           md:mx-[0px]    md:-ml-[10px]"
            >
              <Image
                src={value}
                alt="value"
                className="2xl:mx-[3%] 2xl:py-[0.2%]  2xl:w-[130px] 2xl:h-[190px]     
               w-[48px] xl:w-[80px] lg:w-[60px]   py-[20px] ml-[15px]
                                                                                                     "
              />
              <div className="px-[8px] 2xl:px-[15px]">
                <h1
                  className="text-textDarkBlue 2xl:text-[24px] font-[600] 2xl:mx-[4%] 2xl:my-[15px]    2xl:-mt-[0px] xl:text-[26px]  
               text-[16px]  ml-[10px] "
                >
                  Value
                </h1>

                <h1
                  className="2xl:text-[20px] font-[600] text-bgPrimaryRed 2xl:mx-[4%] 2xl:mt-[1%] sm:text-[12px] text-[12px] lg:text-[14px] sm:px-[10px] px-[10px]
              2xl:px-[0px]  py-[3px] xl:text-[20px] "
                >
                  Innovation:
                </h1>
                <p
                  className="2xl:text-[20px] font-[400] 2xl:ml-[4%] 2xl:py-[1%]  text-[10px]  px-[10px] 2xl:px-[0px]
               py-[3px] lg:py-[0px]
               lg:text-[13px] xl:text-[16px]"
                >
                  We thrive on pushing creative boundaries and challenging the
                  status quo.
                </p>

                <h1
                  className="2xl:text-[20px] font-[600] text-bgPrimaryRed 2xl:mx-[4%] 2xl:py-[1%]  text-[12px]  px-[10px] 2xl:px-[0px] 
              lg:text-[14px] py-[3px] xl:text-[20px] "
                >
                  Integrity:
                </h1>
                <p
                  className="2xl:text-[20px] font-[400] 2xl:mx-[4%] 2xl:py-[1%]  text-[10px]  px-[10px] 2xl:px-[0px]  py-[3px] lg:py-[0px] 
              lg:text-[13px] xl:text-[16px]"
                >
                  Transparency and ethics are non-negotiable in our business,
                  earning us unwavering client trust.
                </p>

                <h1
                  className="2xl:text-[20px] font-[600] text-bgPrimaryRed 2xl:mx-[4%] 2xl:py-[1%]  text-[12px]  px-[10px] 2xl:px-[0px] 
               py-[3px] lg:text-[14px] xl:text-[20px]  "
                >
                  Excellence:
                </h1>
                <p
                  className="2xl:text-[20px] font-[400] 2xl:mx-[4%] 2xl:py-[1%]  text-[10px]  px-[10px] 2xl:px-[0px] py-[3px] lg:py-[0px] 
              lg:text-[13px] xl:text-[16px]"
                >
                  We pursue the latest training, explore new technologies, and
                  hire untapped talent for exceptional results.
                </p>

                <h1
                  className="2xl:text-[20px] font-[600] text-bgPrimaryRed 2xl:mx-[4%] 2xl:py-[1%]  text-[12px]  px-[10px]
              2xl:px-[0px]  py-[3px] lg:text-[14px] xl:text-[20px] "
                >
                  Customer Focus:
                </h1>
                <p
                  className="2xl:text-[20px] font-[400] 2xl:mx-[4%] 2xl:py-[1%]  text-[10px]  px-[10px] 2xl:px-[0px] 
             py-[3px] lg:py-[0px] lg:text-[13px] xl:text-[16px]"
                >
                  We understand our clients’ unique needs and deliver customized
                  solutions to address their business challenges.
                </p>

                <h1
                  className="2xl:text-[20px] font-[600] text-bgPrimaryRed 2xl:mx-[4%] 2xl:py-[2px]  text-[12px]  px-[10px] 2xl:px-[0px] 
             py-[3px] lg:text-[14px] xl:text-[20px] "
                >
                  Accountability:
                </h1>
                <p className="2xl:text-[20px] font-[400] 2xl:mx-[4%] 2xl:py-[1%] pb-5 text-[10px]  px-[10px] 2xl:px-[0px]  py-[3px] lg:py-[0px] lg:text-[13px] xl:text-[16px]">
                  We take full ownership of our work, ensuring our projects have
                  a significantly faster time to market.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>

      {/* New Paths    <Component/> */}

      <Pave title="What Sets " titleSpan="Us Apart" />

      {/* -----------------------------------------------Global Reach----------------------------------- */}

      <section className="items-center justify-center lg:block hidden  container mx-auto font-poppins lg:mb-[0px]">
        <h1 className="text-[36px] font-[600] text-center mt-[50px]   text-textDarkBlue">
          Our Global <span className="text-bgPrimaryRed"> Reach </span>
        </h1>
        <div>
          <Map />
        </div>
      </section>

      {/* --------------------------------culture of pirai infotech -------------------------------- */}

      <section className="2xl:mt-[120px] 2xl:overflow-hidden sm:mt-[80px] container m-auto font-poppins">
        <div className="pb-[40px]">
          <div className="pb-[10px]">
            <h1 className="font-[600] text-[36px] text-textDarkBlue text-center hidden md:hidden lg:block md:mt-[10px]">
              Experience the Vibrant{" "}
              <span className="text-bgPrimaryRed">
                {" "}
                Culture of Pirai Infotech{" "}
              </span>
            </h1>
            <h1 className="sm:font-[600] md:text-[36px] sm:text-[25px] text-[25px]  font-[600] text-textDarkBlue lg:hidden text-center sm:text-textDarkBlue  pt-[60px] lg:pt-[30px]">
              Life at Pirai
            </h1>
          </div>

          <div className="text-center text-[20px] pb-[20px] lg:w-[88%] mx-auto hidden lg:block">
            <h2 className="py-[0px]">
              At Pirai Infotech, we thrive in a growth-centric and inclusive
              culture.
            </h2>
            <h3 className="py-[10px]">
              We inspire our teams to scale new heights through challenging
              business opportunities and continuous training. Our annual
              performance reviews are about acknowledging achievements,
              providing constructive feedback, and identifying areas for further
              growth. We prioritize growth through grants and sponsorships for
              advanced training.
            </h3>
            <h4 className="py-[10px]">
              We create a fair, equal, welcoming, and safe environment for all
              employees regardless of their background, beliefs, or
              circumstances. Our robust diversity, equity, and inclusion
              policies not only foster a sense of belonging and acceptance but
              also lead to more engaged teams.
            </h4>
            <h5 className="py-[10px]">
              Experience the dynamic life at Pirai Infotech, where we nurture
              career aspirations and celebrate achievements.
            </h5>
          </div>
          <Sliders />
        </div>
      </section>

      {/* our global research only for mobile view*/}

      <section className="block lg:hidden px-[20px]">
        <div className="">
          <h1 className="text-center font-[600] text-[24px] md:text-[36px]  text-textDarkBlue md:pb-[20px] ">
            Our Global <span className="text-[#D45147]">Reach</span>
          </h1>
        </div>
        <div>
          <div className="flex w-[100%] justify-between pt-[40px] pb-[10px] md:pb-[50px]">
            <div className="flex w-[33%] flex-col items-center text-center px-[5px]">
              <Image src={india} alt="india" className="w-[24px] h-[24px] " />
              <p className="md:text-[14px] text-[10px]">
                Pirai Infotech Private Limited
                6, 32, Kamaraj Rd,
                Arumugam Nagar,
                Mahalingapuram,
                Tamil Nadu 642002
              </p>
            </div>
            <div className="flex w-[33%] flex-col items-center text-center px-[5px]">
              <Image src={malaysia} alt="malasia" />
              <p className="md:text-[14px] text-[10px]">
                Pirai Infosolutions SDN BHD,
                No. 23 Lorong Cakera Purnama, 12/32 Seksyen 12 42300
                Bandar Puncak Alam Selangor, Malaysia
              </p>
            </div>
            <div className="flex w-[33%] flex-col items-center text-center px-[5px]">
              <Image src={germany} alt="germany" />
              <p className="md:text-[14px] text-[10px]">
                Pirai Infotech UG,
                12307 Berlin,
                Germany
              </p>
            </div>
          </div>
          <div className="flex w-[100%] justify-between py-[30px]">
            <div className="flex w-[33%] flex-col items-center text-center px-[5px]">
              <Image src={unitedkingdom} alt="unitedkingdom" />
              <p className="md:text-[14px] text-[10px]">
                Pirai Infotech Limited
                Venture House, Downshire Way,
                Arlington Square, Bracknell RG12 1WA,
                United Kingdom
              </p>
            </div>
            <div className="flex w-[33%] flex-col items-center text-center px-[5px]">
              <Image src={unitedstates} alt="unitedstates" />
              <p className="md:text-[14px] text-[10px]">
                Pirai Infotech INC,
                99 Wall Street,
                #1253, New York, NY 10005
              </p>
            </div>
            <div className="flex w-[33%] flex-col items-center text-center px-[5px]">
              <Image src={malaysia} alt="malasia" />
              <p className="md:text-[14px] text-[10px]">
                Pirai Infotech SDN BHD 12A-6A & 12B-6B, Galleria@Cyberjaya, Jalan Teknokrat 6, Cyberjaya 5, 63000 Cyberjaya, Selangor Darul Ehsan, Malaysia
              </p>
            </div>
          </div>
        </div>
      </section>
      <Form />

      {/* ---------------------------------------------------Footer------------------------------ */}
      <Footer />
    </>
  );
}
