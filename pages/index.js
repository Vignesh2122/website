import Header from "@/components/Header";
import Client from "@/components/client";
import Form from "@/components/Form";
import SmartFuture from "@/components/SmartFuture";
import Image from "next/image";
import ImageScroll from "@/components/Runningimage.js";
import proven from "../public/logos/proven.svg";
import customer from "../public/logos/customer.svg";
import contract from "../public/logos/contract.svg";
import maws from "../public/logos/MOB_AWS.jpg";
import mredhat from "../public/logos/MOB_REDHAT.jpg";
import mcheckpoint from "../public/logos/MOB_CHECKPOINT.jpg";
import mvmware from "../public/logos/MOB_VMWARE.jpg";
import Sect1 from "../components/Sect";
import homedevops from "../public/icons/homedevops.svg";
import homecloud from "../public/icons/homecloud.svg";
import homeapplication from "../public/icons/homeapplication.svg";
import homequality from "../public/icons/homequality.svg";
import Link from "next/link";
import Footer from "@/components/Footer";
import OurTechStack from "@/components/OurTechStack";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
      <title>Pirai Infotech : Leading IT Solutions Provider for Digital Transformation</title>
      <meta name="description" content="Discover Pirai Infotech's comprehensive IT solutions, Cloud Expertise, and Digital Transformation Services. Partner with us to Ignite Innovation, Efficiency, and scalability for your Business." />
      <meta name="keywords"  content="IT solutions provider, Digital transformation, Cloud expertise, Software development, DevOps services" />
      <meta charSet="utf-8" />
      <link rel="icon"  href="title.png" type="image/png" />

    </Head>
    <main>
      <Header />
      {/* ------------------------------------------Banner----------------------------------------------------- */}

      <section className="md:mt-[140px] mt-0">
        <div className="container m-auto ">
          <div
            className="text-center home-bg-image  
          bg-no-repeat lg:bg-cover bg-contain bg-bottom pb-[200px] sm:pb-[220px]  md:pb-[280px] lg:pb-[450px]  xl:pb-[550px] 2xl:pb-[800px]"
          >
            <div className="container m-auto w-[80%]">
              <h1 className="md:text-6xl text-[36px] font-bold text-textDarkBlue leading-[50px] md:leading-[90px]">
                Power Your Business With <br />
                Our Holistic IT Solutions
              </h1>
              <p className="md:text-[24px] text-[12px] font-normal text-bgPrimaryRed mt-6">
                Reimagine Your Digital Landscape with Enduring Cloud Support
              </p>

              <div className="md:mt-9 mt-4 flex justify-center">
                <Link href="/service">
                  <button
                    className="group transition-all flex items-center text-bgPrimaryRed  border-2 border-bgPrimaryRed rounded-xl hover:border-bgPrimaryRed
                hover:bg-bgPrimaryRed hover:text-textWhite  bg-textWhite md:px-8 px-2 md:py-3 py-1 mt-10 mx-auto my-10 lg:mx-0 md:text-[20px] text-[12px] lg:my-3 drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] "
                  >
                    Elevate Your Business{" "}
                    <span className="ml-2 group-hover:pl-3 transition-all">
                      <svg
                        width="20"
                        height="16"
                        viewBox="0 0 16 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 16.3018L6.575 14.9018L12.175 9.30176H0V7.30176H12.175L6.575 1.70176L8 0.301758L16 8.30176L8 16.3018Z"
                          fill="#D45147"
                          className="group-hover:fill-textWhite "
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-bgLightWhite mt-[60px]">
        <div className="container m-auto text-center py-10 w-[90%]">
          <h4 className="text-bgPrimaryRed text-xs lg:text-2xl font-semibold">
            Tap Into Our Cloud Expertise for Seamless Digital Experiences
          </h4>
          <h2 className="font-normal text-3xl lg:text-6xl text-textDarkBlue my-6">
            Welcome to Pirai Infotech!
          </h2>
          <p className="font-normal text-xs lg:text-[16px] leading-6 text-textBlack">
            We are a dynamic global digital transformation organization with
            over 6 years of experience in the IT industry. Our goal is to
            empower businesses with our comprehensive end-to-end solutions,
            advanced engineering capabilities, and extensive industry
            experience. Pirai Infotech empowers clients across diverse
            industries with efficient managed services to channel their digital
            transformation and equip them to be future-ready. Our innovative and
            passionate team is dedicated to driving your business forward.
          </p>
          <h3 className="text-[24px]  font-semibold text-textDarkBlue mt-7">
            Experience Excellence with Pirai Infotech
          </h3>
          <div className="lg:flex lg:justify-between text-left w-[100%] mt-7">
            <div className="border-2 border-textDarkBlue rounded-xl p-6  lg:w-[30%]">
              <Image src={proven} alt="proven" className="" />
              <h5 className="font-semibold my-1 text-xs lg:text-xl text-textDarkBlue">
                Proven Track Record
              </h5>
              <p className="font-normal text-[10px] lg:text-base text-textBlack">
                We have delivered 100+ digital transformation solutions across
                sectors like retail, banking, engineering, telecom, and high
                technology.
              </p>
            </div>

            <div className="border-2 border-textDarkBlue rounded-xl p-6 lg:w-[30%] my-3 lg:m-0">
              <Image src={customer} alt="proven" className="" />
              <h5 className="font-semibold my-1 text-xs lg:text-xl text-textDarkBlue">
                Customer-Centric Approach
              </h5>
              <p className="font-normal text-[10px] lg:text-base text-textBlack">
                We prioritize your unique needs and deliver tailored solutions
                that go beyond expectations.
              </p>
            </div>

            <div className="border-2 border-textDarkBlue rounded-xl p-6 lg:w-[30%]">
              <Image src={contract} alt="proven" className="" />
              <h5 className="font-semibold my-1 text-xs lg:text-xl text-textDarkBlue">
                Long-Term Partnership
              </h5>
              <p className="font-normal text-[10px] lg:text-base text-textBlack">
                We offer ongoing support and maintenance to ensure your business
                thrives.
              </p>
            </div>
          </div>
          <div className="flex justify-center pt-[35px]">
            <Link href="about">
              <button
                className=" group   hover:border-bgPrimaryRed border-2 hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)]
                text-bgPrimaryRed rounded-xl px-5 py-2  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite 
                transition-all duration-200 "
              >
                <p className="flex items-center text-[20px] justify-between font-medium">
                  Know About Us{" "}
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

      {/* --------------------------------------------Our Service----------------------------------------------------  */}
      <div className="flex justify-center items-center  lg:pb-[70px]">
        <h4 className="lg:text-[42px] text-[26px] font-semibold mt-[60px] text-textDarkBlue    bg-title_bg_image   bg-no-repeat bg-contain bg-bottom lg:pb-1">
          Our Services
        </h4>
      </div>
      <section className="lg:mt-[20%] xl:mt-[15%] 2xl:mt-[12%] mt-[3%]">
        <div className="relative">
          <div className=" xl:before:w-[50%]   before:bg-textDarkBlue before:content-['']   lg:before:absolute before:h-[600px]  before:top-0 before:right-0  before:-z-0"></div>
          <section className=" lg:container m-auto w-[100%] py-12 my-[10%]  lg:rounded-l-[36px]  rounded-[36px] relative bg-textDarkBlue z-10">
            <div>
              <div className="2xl:w-[30%] xl:w-[40%] px-[4%] py-[3%] 2xl:h-[500px]">
                <div className="">
                  <h1
                    className=" text-[24px] text-center lg:text-left font-semibold  text-bgPrimaryRed
                  bg-left-bottom  bg-no-repeat  "
                  >
                    Ignite Innovation, Efficiency, and Scalability with Our
                    Cloud Services
                  </h1>
                </div>
                <div className=" text-textWhite py-[20px]  text-[20x] text-center lg:text-left">
                  <p>
                    We offer everything from cutting-edge software development
                    and secure cloud solutions to robust{" "}
                    <span className="font-semibold">
                      cybersecurity and insightful data analytics.
                    </span>{" "}
                    Experience the convenience of accessing these integrated
                    solutions from a single source. With experience over 50,000+
                    hours, we know what it takes to deliver transformative
                    solutions for your business.
                  </p>
                </div>
                <div className=" pt-[20px] text-center xl:text-left ">
                  <Link href="/service">
                    <button
                      className=" group  hover:border-bgPrimaryRed border-[1px] hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] 
                text-bgPrimaryRed rounded-xl px-5 py-2  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite 
                transition-all duration-200 "
                    >
                      <p className="flex items-center text-[20px] justify-between font-medium">
                        Explore Our Service{" "}
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
              <div className="">
                {/* ---------------------------------------------------home devops ---------------------------- */}
                <div
                  className="xl:absolute -top-[32%] 2xl:left-[38%] xl:left-[40%] 2xl:w-[25%] xl:w-[28%] text-black 
                rounded-3xl  my-[20px] xl:my-[0px] px-5 shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)]  bg-textWhite py-[3%] border-[2px]
                 border-textWhite transition duration-500 hover:border-[2px] hover:border-bgPrimaryRed w-[90%] mx-auto"
                >
                  <Image
                    src={homedevops}
                    className="py-[4%] xl:py-[1%]"
                    alt="homedevops"
                  ></Image>
                  <h1 className="text-orange-700 text-[22px] xl:text-[24px] font-semibold xl:pt-2 text-textDarkBlue ">
                    DevOps Service
                  </h1>
                  <p className="text-[17px] xl:text-[16px]  py-[4%]">
                    Respond promptly to market demands and deliver value to your
                    customers with our advanced DevOps services. We help you
                    accelerate your software development and streamline your
                    software delivery. Achieve faster time-to-market, increase
                    team efficiency, and maintain premier product quality
                  </p>
                  <div className="mt-[18px] xl:pt-[22px] 2xl:pt-0">
                    <Link href="devops">
                      <button className=" group  hover:border-bgPrimaryRed border-[1px] hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)]  text-bgPrimaryRed rounded-xl px-3 py-1  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite  transition-all duration-300 ">
                        <p className="flex items-center text-[16px] justify-between font-medium">
                          Learn More{" "}
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
                <div className="xl:absolute -top-[36%] w-[90%]  mx-auto my-[20px] 2xl:left-[66%] xl:left-[71%] 2xl:w-[25%] xl:w-[28%] text-[black] rounded-3xl px-5 shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)]  bg-textWhite py-[3%]  border-[2px] border-textWhite transition duration-500 hover:border-[2px] hover:border-bgPrimaryRed">
                  <Image
                    src={homecloud}
                    className="py-[4%]  xl:py-[1%]"
                    alt="homecloud"
                  ></Image>
                  <h1 className="text-orange-700 text-[22px] xl:text-[24px] font-semibold xl:pt-2 text-textDarkBlue ">
                    Cloud Enablement
                  </h1>
                  <p className="text-[17px]  xl:text-[16px]   py-[4%] ">
                    Experience the agility, reliability, and security of our
                    advanced cloud solutions to adapt to business needs and
                    scale resources. Our tailored approach, comprehensive
                    expertise, latest technologies, and partnerships with
                    leading cloud vendors enable you to focus on innovation and
                    growth.
                  </p>
                  <div className="mt-[18px] xl:pt-[25px] 2xl:pt-[4px]  ">
                    <Link href="/cloud">
                      <button className=" group  hover:border-bgPrimaryRed border-[1px] hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)]  text-bgPrimaryRed rounded-xl px-3 py-1  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite  transition-all duration-300 ">
                        <p className="flex items-center text-[16px] justify-between font-medium">
                          Learn More{" "}
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
                <div
                  className="xl:absolute top-[52%] w-[90%] mx-auto my-[20px] 2xl:left-[38%] xl:left-[40%] 2xl:w-[25%] xl:w-[28%]  text-[black] rounded-3xl px-5 shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] 
             bg-textWhite py-[3%]   border-[2px] border-textWhite transition duration-500 hover:border-[2px] hover:border-bgPrimaryRed "
                >
                  <Image
                    src={homeapplication}
                    className="py-[4%] xl:py-[1px]"
                    alt="homeapplication"
                  ></Image>
                  <h1 className="text-orange-700 text-[22px] xl:text-[24px] font-semibold xl:pt-2 text-textDarkBlue ">
                    Application Service
                  </h1>
                  <p className="text-[17px] xl:text-[16px]  py-[4%]">
                    We offer comprehensive support and expertise in optimizing
                    software applications. With our Application Services, you
                    can streamline workflows, stay at the forefront of
                    technological advancements, and deliver engaging user
                    experiences. We empower you to gain a competitive edge in
                    the market.
                  </p>
                  <div className="mt-[17px] xl:pt-[25px] 2xl:pt-[4px] ">
                    <Link href="/application">
                      <button
                        className=" group  hover:border-bgPrimaryRed border-[1px]
                   hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)]  text-bgPrimaryRed rounded-xl px-3 py-1 
                    drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite  
                    transition-all duration-300 "
                      >
                        <p className="flex items-center text-[16px] justify-between font-medium ">
                          Learn More{" "}
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
                <div className="xl:absolute top-[52%] w-[90%] mx-auto  my-[20px] 2xl:left-[66%] xl:left-[71%] 2xl:w-[25%] xl:w-[28%] text-black rounded-3xl px-5 shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)]  bg-textWhite py-[3%] border-[2px] border-textWhite transition duration-500 hover:border-[2px] hover:border-bgPrimaryRed">
                  <Image src={homequality} alt="homequality" className="py-[4%]  xl:py-[1px]" />
                  <h1 className="text-orange-700 text-[22px] xl:text-[24px] font-semibold xl:pt-2 text-textDarkBlue ">
                    Quality Engineering
                  </h1>
                  <p className="text-[17px] xl:text-[16px]   py-[4%]">
                    Supercharge your software development process. Our team
                    proactively identifies and fixes defects to ensure your
                    software applications are reliable. With our agile
                    methodologies and advanced solutions, fast-track your
                    product launch and deliver innovative solutions faster than
                    ever before.
                  </p>
                  <div className="mt-[18px]">
                    <Link href="/qualityengineering">
                      <button className=" group  hover:border-bgPrimaryRed border-[1px] hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)]  text-bgPrimaryRed rounded-xl px-3 py-1  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textWhite  transition-all duration-300 ">
                        <p className="flex items-center text-[16px] justify-between font-medium">
                          Learn More{" "}
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
        </div>
      </section>

      {/* --------------------------------------------------service partner------------------------------------------------------------- */}
      <section className="lg:mt-[320px] mt-[40px] ">
        <div className="container m-auto  ">
          <h4 className="text-center font-semibold text-[#031555] text-[26px] lg:text-[42px]">
            Our Service <span className="text-bgPrimaryRed">Partners</span>
          </h4>
          <div className="xl:w-[75%] lg:w-[90%] container mx-auto">
            <div className="h-[500px]  md:w-full  m-auto w-[300px] mt-[30px] mb-[30px] md:mb-0  md:h-[350px]  ">
              <div className="relative   flex-col justify-between md:w-[80%] w-[70%]">
                <div className=" absolute sm:left-[0px] md:left-4 md:top-10 lg:left-0 2xl:left-16">
                  <div className="">
                  <div className="container-left relative w-[310px] h-[210px]   lg:w-[450px] lg:h-[250px]  ">
                    <div className="leftbox1 w-[310px] h-[190px]   lg:w-[450px] lg:h-[250px] flex justify-center  absolute opacity-100 rounded-[40px] transition-all duration-700">
                      
                      <Image src={maws} alt="Aws" className=""></Image>
                    </div>
                    <div className="leftbox2 w-[310px] h-[190px] lg:w-[450px] lg:h-[250px]  bg-[#031555] border-[1px]  absolute opacity-0 rounded-[40px] transition-all duration-700">
                      <p className="text-[white] font-normal text-center text-[14px] lg:text-[16px] px-[6px] py-[40px] lg:py-[60px] lg:px-[15px] lg:leading-[25px] leading-[18px]">
                        As a trusted &apos;Select Tier&apos; partner of AWS, we
                        leverage the power of AWS technologies to help our
                        clients innovate faster, scale operations quicker,
                        enhance operational efficiency, optimize costs, and stay
                        ahead in the competitive digital landscape.
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="absolute  top-[250px] md:right-52 md:top-10 md:left-[73%] 2xl:left-[65%] ">
                  <div className="container-right relative w-[310px] h-[210px] lg:w-[450px] lg:h-[250px]">
                    <div className="rightbox1 w-[310px] h-[190px] lg:w-[450px] lg:h-[250px]  flex justify-center align-middle   absolute opacity-100 rounded-[40px] transition-all duration-700">
                      
                      <Image src={mredhat} alt="RedHat" className=""></Image>
                    </div>
                    <div className="rightbox2 w-[310px] h-[190px] lg:w-[450px] lg:h-[250px] bg-[#031555] absolute opacity-0 rounded-[40px] transition-all duration-700">
                      <p className="text-[white] font-normal text-center text-[14px] lg:text-[16px] lg:py-[40px] lg:leading-[25px] px-[10px] py-4  lg:px-[15px] leading-[18px]">
                        By collaborating closely with Red Hat as a leading
                        &apos;Ready&apos; business partner, we transform our
                        client&apos;s IT infrastructure and accelerate
                        application development. Our partnership powers
                        businesses to modernize their operations, seamlessly
                        adapt to changing market demands, and grow sustainably.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd Row */}
          <div className="xl:w-[75%] lg:w-[90%] container mx-auto">
            <div className="h-[500px]  md:w-full m-auto w-[300px]  mb-[30px] md:mb-0  md:h-[350px]  ">
              <div className="relative  bg-bgPrimaryRed flex-col justify-around md:w-[80%]   ">
                <div className=" absolute sm:left-0   md:left-10 md:top-10 lg:left-0 2xl:left-16 ">
                  <div className="container-left relative w-[310px] h-[210px] lg:w-[450px] lg:h-[250px] ">
                    <div className="leftbox1 w-[310px] h-[190px] lg:w-[450px] lg:h-[250px] flex justify-center align-middle  absolute opacity-100 rounded-[40px] transition-all duration-700">
                      
                      <Image src={mvmware} alt="Vmware" className=""></Image>
                    </div>
                    <div className="leftbox2 w-[310px] h-[190px] lg:w-[450px] lg:h-[250px] bg-[#031555] border-[1px]  absolute opacity-0 rounded-[40px] transition-all duration-700">
                      <p className="text-[white] font-normal text-center lg:text-[16px] lg:py-[40px] lg:leading-[25px] text-[14px] px-[10px] py-4  lg:px-[15px] leading-[18px]">
                        With this collaboration, we empower businesses with
                        virtualization and cloud solutions that optimize
                        infrastructure, streamline operations, and enable agile
                        scalability. Our clients can accelerate their growth,
                        increase market competitiveness, and seize new
                        opportunities in the evolving business landscape.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute  top-[250px]  md:right-52 md:top-10  md:left-[73%] 2xl:left-[65%] ">
                  <div className="container-right relative w-[310px] h-[210px] lg:w-[450px] lg:h-[250px]">
                    <div className="rightbox1 w-[310px] h-[190px] lg:w-[450px] lg:h-[250px]  flex justify-center align-middle   absolute opacity-100 rounded-[40px] transition-all duration-700">
                      
                      <Image
                        src={mcheckpoint}
                        alt="cjeckpoint"
                        className=""
                      ></Image>
                    </div>
                    <div className="rightbox2 w-[310px] h-[190px] lg:w-[450px] lg:h-[250px] bg-[#031555] absolute opacity-0 rounded-[40px] transition-all duration-700">
                      <p className="text-[white] font-normal text-center lg:text-[16px] lg:py-[40px] lg:leading-[25px] text-[14px] px-[10px] py-6  lg:px-[15px] leading-[18px]">
                        As a strategic partner of Check Point, we deliver robust
                        cybersecurity solutions that safeguard our clients
                        digital assets, protect against evolving threats, and
                        ensure business continuity. This translates to
                        maintaining productivity, revenue, and customer trust
                        even in the face of unexpected events or threats.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------------------------Smarter Future ----------------------------------- */}
      <section className="bg-[#e3e6ed] py-[1px]">
        <div className="mt-[60px] py-[20px]">
          <h1 className="font-[700] lg:text-[42px] text-[26px] text-textDarkBlue text-center">
            Our Tech Stack for a
            <span className="text-bgPrimaryRed "> Smarter Future</span>
          </h1>
        </div>

        <div className="pb-[30px]">
          <SmartFuture />
          <OurTechStack />
        </div>
      </section>
      {/* ---------------------------------------------industries----------------------------------------------------- */}
      <section className="pb-[30px] ">
        <div
          className="relative before:content-[''] before:hidden lg:before:block before:absolute before:w-[411px]
         before:h-[770px] before:bg
         before:bg-no-repeat before:bg-contain before:top-[-60px]  
         before:-z-50 "
        ></div>
        <div className="container m-auto  w-[90%]  flex flex-col items-center ">
          <h1
            className="lg:text-[42px] text-[26px] font-semibold mt-[60px] text-textDarkBlue 
          bg-title_bg_image
          bg-no-repeat bg-contain bg-bottom lg:pb-1"
          >
            Our Industries
          </h1>
        </div>

        <div className="text-center text-[16px] lg:px-10 lg:text-[18px] leading-relaxed  container w-[90%] mx-auto  ">
          <h2 className="text-bgPrimaryRed  text-[24px] font-semibold text-center py-[20px]">
            Lead Your Industry With Our Tailor-made IT Solutions
          </h2>
          <p className="text-[16px] font-normal">
            We go beyond offering innovative solutions. We tailor our offerings
            based on industry-specific insights. Our service extends across
            diverse sectors — retail, banking, engineering, telecom, and high
            technology. We unlock exciting possibilities for your business,
            empowering you to surpass industry expectations.
          </p>
        </div>
        <div className="mt-[20px] flex justify-center items-center ">
          <Link href="industries">
            <button
              className=" group hover:border-bgPrimaryRed border-2 hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)]
           text-bgPrimaryRed rounded-xl px-5 py-2  drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)]
            hover:bg-bgPrimaryRed hover:text-textWhite transition-all"
            >
              <p className="flex items-center text-[12px] lg:text-[16px] justify-between ">
                Boost Your Growth{" "}
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
      </section>

      {/* -------------------------------------  Over View -------------------------------- */}
      <section className="container mt-[8px] mx-auto ">
        <div className="">
          <Sect1 />
        </div>
      </section>
      {/* --------------------------------------------GLobal clients------------------------------------------------ */}
      <section className="">
        <div
          className="container relative m-auto before:content-[''] before:absolute before:w-[335px]
         before:h-[770px] before:bg  before:top-[-200px] before:left-[-90px] 
         before:-z-50 before:hidden md:before:block pt-[60px]"
        >
          <div className="flex justify-center mt-[20px]">
            <h2 className="text-[26px] lg:text-[42px] text-textDarkGray font-semibold bg-title_bg_image bg-no-repeat bg-bottom bg-contain pb-[5px] lg:pb-3">
              Our Global Clients
            </h2>
          </div>
          <ImageScroll />
        </div>
      </section>

      <Client />

      <Form />

      <Footer />
      </main>
    </>
  );
}
