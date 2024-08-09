import Image from "next/image";
import servicecloud from "../../public/service-cloud/logos/service-cloud.svg";
import applicationworkflow from "../../public/service-application/application-workflow.svg";
import applicationdevelopment from "../../public/service-application/application-development.svg";
import applicationmodernization from "../../public/service-application/application-modernization.svg";
import applicationintergation from "../../public/service-application/application-intergation.svg";
import applicationsecurity from "../../public/service-application/application-security.svg";
import applicationmanagement from "../../public/service-application/application-management.svg";
import java from "../../public/service-application/java.svg";
import oracle from "../../public/service-application/oracle.svg";
import flutter from "../../public/service-application/flutter.svg";
import figma from "../../public/service-application/figma.svg";
import mongodb from "../../public/service-application/mongodb.svg";
import xcode from "../../public/service-application/xcode.svg";
import vscode from "../../public/service-application/vscode.svg";
import postgresql from "../../public/service-application/postgresql.svg";
import restapi from "../../public/service-application/restapi.svg";

import angularjs from "../../public/service-application/angularjs.svg";
import nextjs from "../../public/service-application/nextjs.svg";
import mysql from "../../public/service-application/mysql.svg";
import maven from "../../public/service-application/maven.svg";

import azure from "../../public/service-application/azure.svg";
import jenkins from "../../public/service-application/jenkins.svg";
import eclipse from "../../public/service-application/eclipse.svg";
import react from "../../public/service-application/react.svg";

import git from "../../public/service-application/git.svg";
import fastapi from "../../public/service-application/fastapi.svg";
import springboot from "../../public/service-application/springboot.svg";
import ij from "../../public/service-application/ij.svg";

import experienceapplication from "../../public/service-application/experience-application.svg";
import rangeapplication from "../../public/service-application/range-application.svg";
import supportapplication from "../../public/service-application/support-application.svg";

import gitlab from "../../public/logos/gitlab.svg";
import python from "../../public/service-application/python.svg";
import spring from "../../public/service-application/spring.svg";
import smenu from "../../public/logos/smenu.svg";
import dockket from "../../public/logos/dockket.svg";
import application_banner from "../../public/logos/Application-banner.jpg";

import React from "react";

import Header from "@/components/Header";
import Form from "@/components/Form";
import Client from "@/components/client";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Devops() {
  const boxStyles = {
    container: "container m-auto hidden",
    boxContainer: "flex overflow-x-scroll no-scrollbar p-2",
    box: "flex-none w-[550px] mr-8 py-2 rounded-[20px] delay-500 snap-align-start bg-white shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)]",
  };

  const boxes = [
    {
      category: "application",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image src={smenu} alt="smenu" className="my-[20px] w- ml-3" />
          <div className="mt-3 mr-3 ml-6 ">
            <h1 className="text-xl font-semibold">
              sMenu | Zero contact food <br /> ordering system
            </h1>
            <h4 className="font-medium text-base mt-2">
              Hybrid Mobile Application
            </h4>
            <p className="font-normal text-xs mt-2 ">
              Developed a hybrid food ordering mobile as well as web application
              named sMenu using technology stack tools with infrastructure
              platform Digital Ocean and AWS.
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "application",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image src={dockket} alt="dockket" className="my-[20px] ml-3" />
          <div className="mt-3 mx-6">
            <h1 className="text-xl font-semibold">
              DocKKet | Mobile Application to digitalize documents
            </h1>
            <h4 className="font-medium text-base mt-2">
              Enterprise Mobile Application
            </h4>
            <p className="font-normal text-xs mt-2">
              Developed an innovative hybrid business mobile application Dockket
              using cutting edge technology based on cloud architecture to
              manage huge amount of documents and digitalize sales and purchase
              documents.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Application Development | Pirai Infotech: Transform Your Business Digitally</title>
        <meta name="description" content="Empower your business with Pirai Infotech's tailored application services. From development to security, our experts ensure seamless integration, modernization, and management, empowering your business in the digital era." />
        <meta name="keywords" content="Application Services, Application Development, Application Modernization, Application Integration, Application Security Services, Application Management" />
        <meta charSet="utf-8" />
        <link rel="icon" href="title.png" type="image/png" />
      </Head>
      <Header />
      <div className="hidden lg:block lg:relative bg-contain lg:before:content-[''] lg:before:block lg:before:absolute before:bg-contain xl:before:w-[320px] lg:before:w-[320px] lg:before:h-[450px] xl:before:h-[500px] 2xl:before:h-[600px] before:bg-no-repeat lg:before:bg-software_page_bg_image lg:before:top-[-30px] 2xl:before:top-[-2px] lg:before:-z-50"></div>
      <section className="mt-[25px] lg:mt-[120px] lg:flex lg:justify-between lg:items-center">
        <div className="container m-auto w-[90%]">
          <div className="">
            <div className="w-full text-center lg:text-left lg:w-[40%] xl:w-[40%] 2xl:w-[43%] ">
              <h1 className="text-textDarkBlue text-4xl leading-[50px] md:text-5xl font-bold md:leading-[60px] lg:mt-[50px] xl:mt-[70px] lg:text-4xl 2xl:text-6xl xl:text-5xl lg:leading-[50px] xl:leading-[60px] 2xl:leading-[75px]">
                Accelerate Your Business Digital Transformation Effortlessly
              </h1>
              <h3 className=" font-normal   text-[20px] 2xl:text-[] mt-4 leading-[30px] lg:text-[18px]">
                Gain A Competitive Edge With Our Cutting-Edge Application
                Services.
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-10  lg:absolute lg:right-0 lg:w-[50%] flex justify-center lg:justify-end m-auto w-[90%]">
          <Image
            src={application_banner}
            alt="servicecloud"
            className="lg:w-[100%] lg:h-[360px] md:w-[370px]   w-[500px] lg:mt-[50px] 
             xl:h-[460px] rounded-[30px] md:rounded-none mx-auto"
          />
        </div>
      </section>

      <section className="mt-[60px] lg:mt-[120px]">
        <div className="container m-auto w-[90%]">
          <div className=" bg-textDarkBlue rounded-3xl sm:m-0">
            <h2 className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl py-[18px] lg:p-[36px] text-textprimarywhite font-semibold lg:leading-[50px]">
              Thrive in the Evolving Digital Landscape With <br />
              <span className="text-bgPrimaryRed px-[10px] lg:px-0">
                Our Tailored Application Services
              </span>
            </h2>
            <div className="lg:flex lg:items-center p-3">
              <div className="flex  items-center md:p-0 justify-evenly lg:my-6 lg:mx-3 2xl:mx-20">
                <Image src={applicationworkflow} alt="applicationworkflow" className="w-[40%] lg:w-[80%]" />
              </div>
              <div className="text-textprimarywhite text-center lg:text-left md:px-7 pt-10 pb-7 lg:p-0 lg:my-6 text-[12px] lg:text-[18px]  lg:w-[58%] font-normal 2xl:w-[55%]">
                <p>
                  At Pirai Infotech, we specialize in crafting user-centric,
                  robust, and innovative solutions tailored to your unique
                  requirements. Our experts help you deliver exceptional user
                  experiences, even as your business scales and your user base
                  expands. Our unwavering focus on application security ensures
                  that your digital assets remain protected from vulnerabilities
                  and threats.
                </p>
                <p className="mt-10">
                  But our commitment doesn&apos;t end with development. We
                  provide ongoing support, regular updates, and optimization to
                  ensure that your applications stay reliable, high-performing,
                  and up-to-date. With Pirai Infotech as your trusted partner in
                  application services, you can achieve long-term success and
                  sustainability in the digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[36px] lg:mt-[120px]">
        <div className="container m-auto w-[90%] ">
          <div className="lg:flex lg:justify-between  block  md:mx-auto ">
            <h3 className="text-center lg:text-left lg:w-[40%] text-[20px] font-semibold text-bgPrimaryRed pr-0 md:pr-8 lg:text-[36px] ">
              With Pirai Infotech,
              <br className="hidden lg:block" /> you gain
            </h3>
            <div className="lg:flex relative lg:h-[300px] lg:justify-between lg:w-[75%] mt-3 lg:m-0">
              <div className="bg-textDarkBlue relative h-[250px] lg:h-auto  p-3 rounded-t-[12px] lg:rounded-t-none lg:rounded-bl-[12px] lg:rounded-tl-[12px] lg:w-[33.3%]">
                <h5 className="text-textWhite text-[24px] font-medium 2xl:w-[70%]">
                  Experience and expertise
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={experienceapplication}
                    alt="qualityprofessional"
                    className="absolute right-2 bottom-3"
                  />
                </div>
              </div>
              <div className="bg-bgPrimaryRed relative h-[250px] lg:h-auto p-3 lg:w-[33.3%]">
                <h5 className="text-textWhite text-[24px] font-medium">
                  Comprehensive range of customized services
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={rangeapplication}
                    alt="qualityleadership"
                    className="absolute right-2 bottom-3 "
                  />
                </div>
              </div>
              <div className="bg-bgLightWhite h-[250px] lg:h-auto p-3 rounded-b-[12px] lg:rounded-bl-none lg:rounded-r-[12px] lg:w-[33.3%]">
                <h5 className="text-textBlack text-[24px] lg:text-[20px] xl:text-[24px] font-medium lg:w-[70%]">
                  Continuous support
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={supportapplication}
                    alt="qualitysatisfaction"
                    className="absolute right-2 bottom-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-[120px] relative">
        <div className="container m-auto w-[90%]">
          <h1 className="font-bold text-2xl sm:text-4xl xl:text-5xl text-textDarkBlue text-center leading-[30px] sm:leading-[50px] xl:leading-[70px]">
            How Can You Empower <br className="block lg:hidden" /> Your Business
            With <br className="" />
            <span className="text-bgPrimaryRed">Our Application Services?</span>
          </h1>
          <div className="lg:flex mt-6 lg:mt-14 lg:justify-between block">
            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={applicationdevelopment}
                  alt="applicationdevelopment"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={applicationdevelopment}
                    alt="applicationdevelopment"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Application Development
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                We develop intuitive and user-friendly applications to align
                with your unique business needs. By leveraging new technologies
                and following agile methodologies, we deliver applications that
                are robust, scalable, and future-proof. Our agile approach
                ensures faster development cycles so that you can adapt quickly
                to market changes and stay ahead of the competition. Our
                innovative applications help enhance your customer experiences,
                streamline your processes, and optimize resource allocation,
                leading to increased productivity and cost savings.
              </p>
            </div>

            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] mt-14 lg:mt-[0px] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={applicationmodernization}
                  alt="applicationmodernization"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={applicationmodernization}
                    alt="applicationmodernization"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Application Modernization
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                Our experts leverage latest technologies and modern
                architectures to transform your dated applications into
                high-performing and scalable solutions. Experience faster
                response times, engaging user experiences, and effortless
                adaptation to market demands. We easily integrate your
                applications with other systems, platforms, and services. With
                this, your teams can collaborate in real-time and data sharing
                becomes streamlined. Our comprehensive application modernization
                solutions make your operations more agile, save costs, and
                maximize your return on investment.
              </p>
            </div>
          </div>

          <div className="lg:flex mt-14 lg:justify-center">
            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={applicationintergation}
                  alt="applicationintergation"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={applicationintergation}
                    alt="applicationintergation"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3  sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Application Integration
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                We specialize in efficiently connecting disparate systems, data,
                and workflows. When you choose our application integration
                expertise, you eliminate manual data entry, reduce errors, and
                enhance data accuracy and consistency throughout your
                organization. This saves you time and costs. You can focus on
                strategic initiatives and high-value tasks. Our ability to craft
                tailored integration solutions sets us apart from the crowd.
                Ultimately, you can access critical information in real-time and
                enhance your decision-making.
              </p>
            </div>
          </div>

          <div className="lg:flex mt-14 lg:justify-between block">
            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={applicationsecurity}
                  alt="applicationsecurity"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={applicationsecurity}
                    alt="applicationsecurity"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Application Security Services
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                We proactively identify and address vulnerabilities in your
                applications to minimize downtime and ensure uninterrupted
                operations. Our experts implement a multi-layered approach and
                advanced security measures to fortify your applications. This
                includes rigorous code reviews, penetration testing, and
                vulnerability assessments. We regularly monitor and check for
                security patches, ensuring that your applications are up-to-date
                and protected against vulnerabilities. With Pirai Infotech, you
                consistently gain your customers’ trust and confidence and
                enhance your reputation and brand value.
              </p>
            </div>

            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] mt-14 lg:mt-[0px] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={applicationmanagement}
                  alt="applicationmanagement"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={applicationmanagement}
                    alt="applicationmanagement"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Application Management
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                Our application management service encompasses taking care of
                all the technical aspects. This includes system upgrades, bug
                fixes, and performance optimizations. We proactive monitor and
                maintain your applications to ensure they are always up and
                running, and there is minimal downtime and maximum productivity.
                By entrusting your application management to us, you benefit
                from improved application stability, enhanced user experiences,
                and reduced business disruptions. You focus on your core
                business operations hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-[120px]">
        <div className="lg:bg-textDarkBlue bg-textDarkBlue pb-10">
          <div className="container m-auto w-[90%]">
            <h1 className="font-semibold md:mx-8 text-xl px-4 pt-6 md:text-[36px] md:leading-[50px] lg:leading-[55px] xl:leading-none text-center text-textprimarywhite md:py-16 lg:w-[75%] lg:mx-auto xl:w-full">
              We Help to Revolutionize Your Organization’s{" "}
              <span className="text-bgPrimaryRed">Application Landscape</span>
            </h1>

            <div className="lg:flex w-[100%] lg:justify-between mt-10 md:mt-0">
              <div className="flex lsm:w-[15%] lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  01
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[69%]">
                  <h3 className="text-[18px]  sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Extensive Expertise and Experience
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Our seasoned team leverages its deep industry knowledge and
                    technical proficiency to deliver outstanding solutions
                    across diverse industries.
                  </p>
                </div>
              </div>

              <div className="flex lsm:w-[15%] lg:mx-6 lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  02
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[65%] 2xl:w-[55%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Tailormade Solutions
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Leverage our ability to craft tailored solutions that
                    precisely align with your unique business requirements and
                    objectives.
                  </p>
                </div>
              </div>

              <div className="flex lsm:w-[15%] lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  03
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[11%]" />
                <div className="w-full lg:w-[53%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Agile Methodologies
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Our expert team leverages cutting-edge methodologies to
                    streamline processes, foster collaboration, and drive faster
                    delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:py-16 lg:justify-between lg:w-[100%]">
              <div className="flex lsm:w-[15%] lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  04
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[11%]" />
                <div className="w-full lg:w-[60%] 2xl:w-[55%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Seamless Integration
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Experience perfect integration of your applications and
                    systems. This can optimize your business processes and drive
                    operational efficiency.
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lsm:w-[15%] lg:mx-6 lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  05
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[65%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Robust Security Measures
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We prioritize data security with modern technologies and
                    continuous monitoring. Our rigorous security measures ensure
                    comprehensive protection against potential threats.
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lsm:w-[15%] lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  06
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[58%] 2xl:w-[50%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Dedicated Support
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Our tight-knit team, led by an expert Project Manager, works
                    closely with you for smooth application lifecycles and
                    prompt issue resolution.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className="container m-auto mb-10 lg:mb-20 hidden">
          <h2 className="text-2xl lg:text-[42px] font-semibold text-textDarkBlue mt-11 lg:mt-[90px] text-center">
            Our Projects
          </h2>
        </div>

        <div className={boxStyles.container}>
          <div className={boxStyles.boxContainer}>
            {boxes.map((box, index) => (
              <div key={index} className={boxStyles.box}>
                {box.content}
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className=" mt-[46px] lg:mt-[120px] lg:mb-[120px]">
        <div className="container m-auto w-[90%]">
          <h1 className="text-2xl lg:text-[42px] font-bold text-center text-textDarkBlue mb-[24px]">
            Our Tech <span className="text-bgPrimaryRed">Stack</span>
          </h1>
          <div className=" w-[100%] items-center">
            <div className="flex justify-evenly items-center sm:py-[20px] py-[15px]">
              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={java} alt="java" className="" />
              </div>
              <div className=" sm:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={oracle} alt="oracle" className="" />
              </div>
              <div className="sm:w-[15%] w-[17%] sm:px-6  px-[2px] ">
                <Image src={flutter} alt="flutter" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={figma} alt="figma" className="" />
              </div>


            </div>
            <div className="flex justify-evenly items-center sm:py-[20px] py-[15px]">
              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={vscode} alt="vscode" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={postgresql} alt="postgresql" className="" />
              </div>

              <div className="sm:w-[12%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={react} alt="spring" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={restapi} alt="restapi" className="" />
              </div>


            </div>
            <div className="flex justify-evenly items-center m:py-[30px] py-[15px] ">
              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={angularjs} alt="restapi" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={nextjs} alt="gitlab" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={mysql} alt="python" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={maven} alt="spring" className="" />
              </div>


            </div>
            <div className="flex justify-evenly items-center m:py-[30px] py-[15px]">
              <div className="m:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={eclipse} alt="python" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={git} alt="restapi" className="" />
              </div>

              <div className="m:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={fastapi} alt="gitlab" className="" />
              </div>

              <div className="m:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={python} alt="python" className="" />
              </div>

            </div>
            <div className="flex justify-evenly items-center m:py-[30px] py-[15px]">
              <div className=" sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={mongodb} alt="mongodb" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={xcode} alt="xcode" className="" />
              </div>
              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={gitlab} alt="gitlab" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={spring} alt="spring" className="" />
              </div>
            </div>
            <div className="flex justify-evenly items-center m:py-[30px] py-[15px]">
              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={azure} alt="restapi" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px] ">
                <Image src={jenkins} alt="gitlab" className="" />
              </div>
              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={springboot} alt="spring" className="" />
              </div>

              <div className="sm:w-[15%] w-[17%] sm:px-6 px-[2px]">
                <Image src={ij} alt="python" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Client />
      <Form />
      <Footer />
    </>
  );
}
