import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import serviceIllustration from "../../public/illustrations/service-banner.svg";
import tool from "../../public/logos/center.png";
import serviceleadership from "../../public/logos/service-leadership.svg";
import servicecustomer from "../../public/logos/service-customer.svg";
import serviceefficiency from "../../public/logos/service-efficiency.svg";
import rounded from "../../public/icons/rounded.svg";
import application from "../../public/logos/application-service.jpg";
import cloudenablement from "../../public/logos/cloud-enablement.jpg";
import qualty from "../../public/logos/quality-engineering.jpg";
import Form from "@/components/Form";
import Client from "@/components/client";
import Pave from "@/components/pave";
import Card from "@/components/card";
import homedevops from "../../public/icons/homedevops.svg";
import homeapplication from "../../public/icons/homeapplication.svg";
import homequality from "../../public/icons/homequality.svg";
import homecloud from "../../public/icons/homecloud.svg";
import ourservice from "../../public/logos/ourservice.jpg";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function service() {
  return (
    <>
      <Head>
        <title>Innovate, Accelerate, Transform | Pirai Infotech</title>
        <meta name="description" content="Explore our comprehensive Application Services, Cloud Enablement, DevOps Services, and Quality Engineering." />
        <meta name="keywords" content="Application Service, Cloud Enablement, DevOps Services, Quality Engineering" />
        <meta charSet="utf-8" />
        <link rel="icon" href="title.png" type="image/png" />
      </Head>
      <div className="body-font font-poppins scroll-smooth">
        <Header />

        <section className="">
          <div className="container mx-auto w-[90%] lg:w-full">
            <div className="lg:flex lg:items-center lg:mt-[110px] lg:justify-between block lg:ml-[40px]  text-center  lg:text-left">
              <div className="lg:w-[47%]  2xl:w-[40%] ">
                <h1 className="text-textDarkBlue text-[40px] lg:text-[50px] xl:text-[60px] 2xl:text-[64px] font-bold lg:leading-[90px] xl:leading-12 2xl:leading-12 ">
                  Ignite Your Digital Transformation Journey
                </h1>
                <h3 className=" font-medium text-xl mt-5  sm:text-center lg:text-left  ">
                  Innovate, Accelerate, and Transform to Embrace the Full
                  Potential of Digital.
                </h3>
                <Link href="#form">
                  <button className=" group transition-all hover:border-bgPrimaryRed hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] border-2 text-bgPrimaryRed rounded-xl px-3 2xl:px-4 py-2 mt-4 drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textprimarywhite 2xl:mt-6">
                    <p className="flex justify-between items-center text-[16px]">
                      {" "}
                      Let&apos;s Connect
                      <span className="pl-2 group-hover:pl-3 z-5 transition-all">
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
                            className="group-hover:fill-textprimarywhite"
                          />
                        </svg>
                      </span>
                    </p>
                  </button>
                </Link>
              </div>
              <Image
                src={serviceIllustration}
                alt="Banner"
                className="mt-[12px] mx-auto lg:mx-0 w-[80%] lg:w-[410px] xl:w-[45%] 2xl:w-[700px]"
              />
            </div>
          </div>
        </section>

        <section className="mt-[60px]">
          <div className="container m-auto text-center lg:text-left ">
            <div className=" bg-textDarkBlue rounded-3xl">
              <h2 className="text-4xl pt-9 px-9 text-textprimarywhite text-[20px] lg:text-[36px] font-semibold">
                Reinvent Business-IT Alignment
                <span className="text-bgPrimaryRed"> With Pirai</span>
              </h2>
              <div className="lg:flex lg:justify-between lg:items-center mt-6  block lg:w-auto w-[100%] lg:flex-row">
                <div className="2xl:w-[30%] sm:ml-6 md:ml-6 lg:my-[20px] lg:w-[60%] xl:w-[60%] mt-9 2xl:mt-4">
                  <Image
                    src={tool}
                    alt="applicationworkflow"
                    className="2xl:ml-[50px] xl:ml-[40px] lg:ml-[40px] ml-[26%] w-[50%] lg:w-[100%]"
                  />
                </div>
                <div
                  className="text-textprimarywhite text-[12px] md:text-[20px] mx-4 2xl:w-[60%] font-normal
                lg:w-[700px] py-[30px]  lg:py-[30px] lg:px-[30px] xl:w-[1100px] xl:pt-[50px] xl:px-[30px] pb-[10%] md:pb-[10%] "
                >
                  <p className="">
                    To truly experience the benefits of business automation, you
                    need to integrate all parts of your business with
                    user-friendly software using a secure IT infrastructure.
                    That&apos;s where we come in.
                  </p>
                  <p className="py-4">
                    Pirai Infotech&apos;s advanced IT solutions have been
                    helping to shape the IT infrastructures of businesses
                    globally for more than 6 years. Our services are built to
                    advance technological agility, help you increase
                    cross-departmental efficiency, and enable you to deliver an
                    improved level of service to your end consumers.
                  </p>
                  <p className="">
                    Our team&apos;s nab on the current market tech trends means
                    that the technology we deploy helps bring businesses to the
                    future — reducing server loads, optimizing operational
                    costs, and eliminating business decisions made due to poor
                    data analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="mt-[36px] lg:mt-16">
          <div className="container m-auto w-[90%] ">
            <div className="lg:flex lg:justify-between  block  md:mx-auto ">
              <h3 className="text-center lg:text-left lg:w-[40%] text-[20px] font-semibold text-bgPrimaryRed  lg:text-[36px] ">
                Experience unparalleled <br />benefits like
              </h3>
              <div className="lg:flex relative lg:h-[300px] lg:justify-between lg:w-[75%] mt-3 lg:m-0">
                <div className="bg-textDarkBlue relative h-[250px] lg:h-auto  p-3 rounded-t-[12px] lg:rounded-t-none lg:rounded-bl-[12px] lg:rounded-tl-[12px] lg:w-[33.3%]">
                  <h5 className="text-textWhite text-[24px] font-medium 2xl:w-[70%]">
                    Bold, top-down leadership
                  </h5>
                  <div className="flex justify-end">
                    <Image
                      src={serviceleadership}
                      alt="serviceleadership"
                      className="absolute right-2 bottom-3"
                    />
                  </div>
                </div>
                <div className="bg-bgPrimaryRed relative h-[250px] lg:h-auto p-3 lg:w-[33.3%]">
                  <h5 className="text-textWhite text-[24px] font-medium">
                    Customer-centric innovation
                  </h5>
                  <div className="flex justify-end">
                    <Image
                      src={servicecustomer}
                      alt="servicecustomer"
                      className="absolute right-2 bottom-3 "
                    />
                  </div>
                </div>
                <div className="bg-bgLightWhite h-[250px] lg:h-auto p-3 rounded-b-[12px] lg:rounded-bl-none lg:rounded-r-[12px] lg:w-[33.3%]">
                  <h5 className="text-textBlack text-[24px] lg:text-[20px] xl:text-[24px] font-medium lg:w-[70%]">
                    Maximization of operational efficiency
                  </h5>
                  <div className="flex justify-end">
                    <Image
                      src={serviceefficiency}
                      alt="serviceefficiency"
                      className="absolute right-2 bottom-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:mt-24 mt-[10%] ">
          <h2 className="text-center text-[26px] lg:text-5xl font-bold text-textDarkBlue">
            Our
            <span className="text-bgPrimaryRed  lg:text-5xl pl-3">
              Services
            </span>
          </h2>
        </section>
        <section className="lg:mt-24 mt-[5%] relative before:content-[''] lg:before:block before:absolute before:w-[270px] before:h-[540px] before:bg-Devops_bg_image before:-top-[60px] before:right-0  before:-z-50 before:hidden">
          <div className="container m-auto w-[90%] lg:w-full">
            <div className="sm:flex sm:justify-center sm:items-center">
              <div className="lg:flex lg:justify-between lg:items-center  lg:mx-auto  ">
                <div className="w-[40%]">
                  <Image
                    src={application}
                    alt="application"
                    className="w-full hidden lg:block"
                  />
                </div>
                <div className="lg:w-[57%] my-[24px] border-[1px] border-textDarkBlue  lg:my-0 lg:border-0 rounded-[35px]  p-4  ">
                  <Image
                    src={homeapplication}
                    alt="homedevops"
                    className="my-2  lg:hidden block"
                  />
                  <h2 className="text-3xl text-textDarkBlue font-semibold 2xl:text-4xl">
                    Application services
                  </h2>
                  <p className="font-normal text-base mt-5 lg:text-lg 2xl:mt-6">
                    We craft tailored software solutions that drive growth,
                    improve customer experience, and increase operational
                    efficiency. We combine the latest agile technologies with
                    our extensive industry experience to deliver impactful IT
                    solutions that make a noticeable difference to your business
                    goals.
                  </p>
                  <div className="hidden lg:flex">
                    <div>
                      <div className="flex mt-3 2xl:mt-6">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Application Development
                        </h4>
                      </div>
                      <div className="mt-4 flex 2xl:mt-6">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Application Management
                        </h4>
                      </div>
                      <div className="mt-4 flex 2xl:mt-6">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Application Modernization
                        </h4>
                      </div>
                    </div>
                    <div className="lg:ml-11">
                      <div className="mt-3 flex 2xl:mt-6">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Application Security Services
                        </h4>
                      </div>
                      <div className="mt-4 flex 2xl:mt-6">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Application Integration Services
                        </h4>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={application}
                    alt="application"
                    className="w-[80%]  mx-auto block my-10 lg:hidden rounded-[35px] shadow-[2px_5px_5px_4px_rgba(0,0,0,0.10)]"
                  />
                  <div className="lg:block flex justify-center items-center">
                    <Link href="/application">
                      <button className="mt-8 group hover:border-bgPrimaryRed hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] group border-2 text-bgPrimaryRed rounded-xl px-3 py-2 drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textprimarywhite 2xl:mt-12">
                        <p className="flex items-center text-[12px] lg:text-[20px] justify-between">
                          {" "}
                          Enhance User Experience{" "}
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
                                className="group-hover:fill-textprimarywhite"
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
          </div>
        </section>
        <section className="lg:mt-44  relative before:content-[''] lg:before:block before:absolute before:w-[320px] before:h-[540px]  before:bg-software_development_image lg:before:top-[-50px] xl:before:top-[-80px]  2xl:before:top-[-40px] before:-z-50 before:hidden">
          <div className="container m-auto w-[90%] lg:w-full">
            <div className="sm:flex sm:justify-between">
              <div className="lg:flex lg:justify-between lg:items-center lg:mx-auto  ">
                <div className="lg:w-[55%]  my-[24px] border-[1px] border-textDarkBlue p-4  rounded-[35px]  lg:my-0 lg:border-0  ">
                  <Image
                    src={homecloud}
                    alt="homedevops"
                    className="my-2 lg:hidden block"
                  />
                  <h2 className="text-3xl text-textDarkBlue font-semibold  2xl:text-4xl">
                    Cloud Enablement
                  </h2>
                  <p className="font-normal text-base mt-5 2xl:mt-4 2xl:text-lg">
                    We collaborate with leading cloud vendors to deliver the
                    full potential of cloud computing to your business. This
                    includes defining a cloud strategy, designing the ideal
                    architecture, migrating smoothly, and optimizing
                    performance. We will guide you in adopting secure and
                    scalable cloud platforms across public, private, and hybrid
                    cloud environments.
                  </p>
                  <div className="hidden lg:flex">
                    <div className="">
                      <div className="mt-3 flex 2xl:mt-4">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Managed Cloud Services
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Cloud Migration
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Multi cloud management
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Cloud Consulting & Advisory
                        </h4>
                      </div>
                    </div>
                    <div className="lg:ml-20">
                      <div className="mt-3 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Cloud Security
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Hybrid Security
                        </h4>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={cloudenablement}
                    alt="cloudenablement"
                    className="w-[80%] my-10 mx-auto  block lg:hidden rounded-[35px] shadow-[2px_5px_5px_4px_rgba(0,0,0,0.10)]"
                  />
                  <div className="lg:block flex justify-center items-center">
                    <Link href="/cloud">
                      <button className="mt-6  lg:mx-0 hover:border-bgPrimaryRed group hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] border-2 text-bgPrimaryRed rounded-xl px-3 py-2 drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textprimarywhite 2xl:mt-8">
                        <p className="flex items-center text-[12px] lg:text-[20px] justify-between">
                          Tap Cloud Potential{" "}
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
                                className="group-hover:fill-textprimarywhite"
                              />
                            </svg>
                          </span>
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-[40%]">
                  <Image
                    src={cloudenablement}
                    alt="cloudenablement"
                    className="w-full hidden lg:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="lg:mt-48 relative before:content-[''] lg:before:block before:absolute before:w-[270px] before:h-[540px] before:bg-cloud_enablement_bg_image  before:top-[-50px] before:right-0 before:-z-50 before:hidden">
          <div className="container m-auto w-[90%] lg:w-full ">
            <div className="sm:flex sm:justify-center  ">
              <div className="lg:flex lg:justify-between lg:items-center lg:mx-auto">
                <div className="lg:w-[40%] lg:mt-5">
                  <Image
                    src={ourservice}
                    alt="ourservice"
                    className="w-full hidden lg:block"
                  />
                </div>

                <div className="lg:w-[55%]  xl: my-[24px] border-[1px] border-textDarkBlue lg:p-2 p-4 rounded-[35px]  lg:my-0 lg:border-0">
                  <Image
                    src={homedevops}
                    alt="homedevops"
                    className="my-2 lg:hidden block"
                  />
                  <h2 className="text-3xl text-textDarkBlue lg:mb-4 font-semibold 2xl:text-4xl">
                    DevOps Services
                  </h2>
                  <p className="font-normal text-base mt-4 text-[12px] my-10 lg:m-0 2xl:text-lg 2xl:mt-6">
                    Streamline workflows, automate infrastructure, and
                    effortlessly deploy hassle-free code. Maximize efficiency
                    and accelerate your time-to-market. Let us help you make
                    software development and deployment smooth and efficient.
                  </p>
                  <div className="mt-4 2xl:mt-6 justify-between hidden lg:flex">
                    <div className="">
                      <div className="flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Assessment & Strategy Planning
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Continuous Integration and Deployment (CI/CD)
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Configuration Management
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Infrastructure Management
                        </h4>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          DevOps Consulting Services
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          DevOps Automation
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Monitoring & Back Up
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-base text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Maintenance and support
                        </h4>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={ourservice}
                    alt="ourservice"
                    className="w-[80%] mx-auto lg:hidden rounded-[35px] shadow-[2px_5px_5px_4px_rgba(0,0,0,0.10)]"
                  />
                  <div className="lg:block flex justify-center items-center">
                    <Link href="/devops">
                      <button className="group hover:border-bgPrimaryRed  hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] group border-2 text-bgPrimaryRed rounded-xl px-3 py-2 mt-8 drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textprimarywhite 2xl:mt-8">
                        <p className="flex items-center text-[12px] lg:text-[20px] justify-between">
                          Improve Business Efficiency{" "}
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
                                className="group-hover:fill-textprimarywhite"
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
          </div>
        </section>

        <section className="lg:mt-44 relative before:content-[''] lg:before:block before:absolute before:w-full before:bg-no-repeat before:h-[540px] before:bg-Quality_bg_image before:top-[-75px] before:-z-50 before:hidden">
          <div className="container m-auto w-[90%] lg:w-full">
            <div className="sm:flex sm:justify-between ">
              <div className="lg:flex lg:justify-between lg:items-center  lg:mx-auto  ">
                <div className="lg:w-[57%]  my-[24px] border-[1px] border-textDarkBlue  lg:my-0 lg:border-0 rounded-[35px] p-4  lg:ml-0">
                  <Image
                    src={homequality}
                    alt="homedevops"
                    className="my-2 lg:hidden block"
                  />
                  <h2 className="text-3xl text-textDarkBlue font-semibold 2xl:text-4xl">
                    Quality Engineering
                  </h2>
                  <p className="font-normal text-base mt-5 2xl:text-lg 2xl:mt-6">
                    Our teams adopt comprehensive testing methodologies and
                    quality assurance processes throughout the development
                    lifecycle. We ensure that your applications meet the highest
                    standards of performance, reliability, and user satisfaction
                  </p>
                  <div className="hidden lg:flex">
                    <div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-xl text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Assessment Planning
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-xl text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Test Automation
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-xl text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Quality Advisory
                        </h4>
                      </div>
                      <div className="mt-4 2xl:mt-6 flex">
                        <Image src={rounded} alt="rounded" />
                        <h4 className="font-semibold text-xl text-textDarkBlue lg:ml-2 2xl:text-lg">
                          Process Standardization
                        </h4>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={qualty}
                    alt="application"
                    className="w-[80%] mx-auto block my-10 lg:hidden rounded-[35px] shadow-[2px_5px_5px_4px_rgba(0,0,0,0.10)]"
                  />
                  <div className="lg:block flex justify-center items-center">
                    <Link href="/qualityengineering">
                      <button className="mt-4  hover:shadow-[0px_3px_3px_2px_rgba(0,0,0,0.10)] hover:border-bgPrimaryRed border-2 group text-bgPrimaryRed rounded-xl px-3 py-2 drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)] hover:bg-bgPrimaryRed hover:text-textprimarywhite 2xl:mt-10">
                        <p className="flex items-center text-[12px] lg:text-[20px] justify-between">
                          Elevate Software Quality{" "}
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
                                className="group-hover:fill-textprimarywhite"
                              />
                            </svg>
                          </span>
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-[40%]">
                  <Image
                    src={qualty}
                    alt="application"
                    className="w-full hidden lg:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Pave title="Remap Your Success With " titleSpan="Pirai Infotech" />

        <Card />
        <Client />
        <Form />
        <Footer />
      </div>
    </>
  );
}
