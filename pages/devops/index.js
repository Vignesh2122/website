import Header from "@/components/Header";
import Form from "@/components/Form";
import Client from "@/components/client";
import Footer from "@/components/Footer";
import bussinessaction from "../../public/logos/bussiness-action.svg";
import devopsteam from "../../public/logos/devops-team.svg";
import devopsdeliver from "../../public/logos/devops-deliver.svg";
import devopsbussiness from "../../public/logos/devops-bussiness.svg";
import devopsassessment from "../../public/logos/devops-assessment.svg";
import devopsdeployment from "../../public/logos/devops-deployment.svg";
import devopsinfrastructure from "../../public/logos/devops-infrastructure.svg";
import devops_banner from "../../public/logos/Devops-banner.jpg";
import devopsconsulting from "../../public/logos/devops-consulting.svg";
import devopsautomation from "../../public/logos/devops-automation.svg";
import devopsmonitoring from "../../public/logos/devops-monitoring.svg";
import devopsmaintenance from "../../public/logos/devops-maintenance.svg";
import devopsconfiguration from "../../public/logos/devops-configuration.svg";
import splunk from "../../public/logos/splunk.svg";
import kubernetes from "../../public/logos/kubernetes.svg";
import junit from "../../public/logos/junit.svg";
import jira from "../../public/logos/jira.svg";
import nagios from "../../public/logos/nagios.svg";
import ansible from "../../public/logos/ansible.svg";
import maven from "../../public/logos/maven.svg";
import jenkins from "../../public/logos/jenkins.svg";
import redhat from "../../public/logos/redhat.svg";
import openstack from "../../public/logos/openstack.svg";
import docker from "../../public/logos/docker.svg";
import gitlab from "../../public/logos/gitlab.svg";
import Image from "next/image";
import React from "react";
import Head from "next/head";

export default function Devops() {
  return (
    <>
      <Head>
        <title>Drive Cloud Transformation and Automation with Expert DevOps Solutions | Pirai Infotech</title>
        <meta name="description" content="Maximize the Potential of Cloud Computing and Streamline Your Operations with Pirai’s cutting-edge DevOps solutions." />
        <meta name="keywords" content="DevOps Consulting Services, DevOps Solutions, DevOps Automation, Maintenance and Support, Continuous Deployment" />
        <meta charSet="utf-8" />
        <link rel="icon" href="title.png" type="image/png" />
      </Head>
      <Header />
      <div className="hidden lg:block relative before:content-[''] before:block before:absolute before:bg-contain xl:before:w-[320px] lg:before:w-[320px] lg:before:h-[450px] xl:before:h-[500px] 2xl:before:h-[540px] before:bg-Devops_top_bg_image before:bg-no-repeat lg:before:top-[-40px]  2xl:top-[-30px] before:-z-50"></div>
      <section className="mt-[35px] lg:mt-[150px] 2xl:mt-[180px] lg:flex lg:justify-between lg:items-center">
        <div className="container mx-auto lg:w-[90%] w-[100%]">
          <div className="">
            <div className="w-full lg:w-[40%] xl:w-[50%] mt-[47px] text-center lg:text-left">
              <h1 className="text-textDarkBlue text-[36px] leading-[50px] mx-10 sm:mx-[115px] md:mx-[150px] lg:mx-0 xl:text-5xl sm:leading-[50px] font-bold lg:leading-[45px] 2xl:text-6xl xl:leading-[60px] 2xl:leading-[70px]">
                Drive Cloud Transformation With Cutting-Edge DevOps Solutions
              </h1>
              <h3 className=" mx-6 lg:mx-0 font-normal lg:text-[20px] 2xl:text-[20px] text-xl mt-3 xl:mt-5">
                From Code to Cloud — <br /> Continuous Delivery and Deployment.
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:w-[50%] lg:absolute lg:right-0 flex justify-center lg:justify-end w-[90%] m-auto">
          <Image
            src={devops_banner}
            alt="servicedevops"
            className="lg:w-[100%] lg:h-[360px] md:w-[370px]   w-[500px] lg:mt-[50px] 
             xl:h-[460px] rounded-[30px] md:rounded-none mx-auto"
          />
        </div>
      </section>

      <section className="mt-[49px] lg:mt-[120px]">
        <div className="container m-auto lg:w-full w-[90%]">
          <div className=" bg-textDarkBlue rounded-3xl">
            <h2 className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl p-[18px] lg:p-[36px] text-textprimarywhite font-semibold lg:leading-[50px]">
              Integrate Every Business Action With IT for <br />
              <span className="text-bgPrimaryRed">Unparalleled Efficiency</span>
            </h2>
            <div className="lg:flex lg:items-center">
              <div className="flex justify-center px-5 md:p-0 lg:w-[30%] lg:my-6 lg:mx-9 2xl:mx-20">
                <Image src={bussinessaction} alt="bussinessaction" />
              </div>
              <div className="text-textprimarywhite text-center lg:text-left px-7  lg:p-0 lg:my-6 text-[12px] 2xl:text-[20px] md:text-[20px] lg:w-[60%] font-normal 2xl:w-[55%]">
                <p className="mt-[10px] lg:mt-0">
                  Leverage IT-Business alignment with Pirai Infotech to help
                  your team achieve shared business goals, such as faster
                  time-to-market for new services and digital products with
                  ease.
                </p>
                <p className="lg:my-12 my-6">
                  Experience the power of seamless and continuous code delivery
                  with Pirai Infotech&apos;s DevOps services. Partner with a
                  future-ready team that handles end-to-end development and
                  deployment strategies across the cloud in one place – all with
                  the goal to help you maximize productivity and reduce costs.
                </p>
                <p className="pb-[20px]">
                  Our goal is to digitize every repetitive day-to-day task in
                  your business that would normally be done by a human being so
                  you can experience true automation across the board.
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
              Our DevOps
              <br className="hidden lg:block" /> Services Help You
            </h3>
            <div className="lg:flex relative lg:h-[300px] lg:justify-between lg:w-[75%] mt-3 lg:m-0">
              <div className="bg-textDarkBlue relative h-[250px] lg:h-auto  p-3 rounded-t-[12px] lg:rounded-t-none lg:rounded-bl-[12px] lg:rounded-tl-[12px] lg:w-[33.3%]">
                <h5 className="text-textWhite text-[24px] font-medium 2xl:w-[70%]">
                  Improve collaboration and communication within teams
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={devopsteam}
                    alt="qualityprofessional"
                    className="absolute right-2 bottom-3"
                  />
                </div>
              </div>
              <div className="bg-bgPrimaryRed relative h-[250px] lg:h-auto p-3 lg:w-[33.3%]">
                <h5 className="text-textWhite text-[24px] font-medium">
                  Make it easier for your business to scale
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={devopsbussiness}
                    alt="qualityleadership"
                    className="absolute right-2 bottom-3 "
                  />
                </div>
              </div>
              <div className="bg-bgLightWhite h-[250px] lg:h-auto p-3 rounded-b-[12px] lg:rounded-bl-none lg:rounded-r-[12px] lg:w-[33.3%]">
                <h5 className="text-textBlack text-[24px] lg:text-[20px] xl:text-[24px] font-medium lg:w-[70%]">
                  Deliver better customer experience
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={devopsdeliver}
                    alt="qualitysatisfaction"
                    className="absolute right-2 bottom-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-16 relative">
        <div className="h-[500px] w-full absolute bg-[#E3E6ED] -z-10 top-[350px] lg:block hidden"></div>
        <div className="h-[520px] w-full absolute bg-[#E3E6ED] -z-10 lg:top-[1600px] xl:top-[1400px] lg:block hidden"></div>
        <div className="container m-auto w-[90%]">
          <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-textDarkBlue text-center">
            Our DevOps <span className="text-bgPrimaryRed">Services</span>
          </h1>
          <div className="lg:flex block mt-6 lg:mt-14 lg:justify-between">
            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={devopsassessment}
                  alt="devopsassessment"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={devopsassessment}
                    alt="devopsassessment"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-xl md:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-8 sm:mt-20 text-textDarkBlue">
                  Assessment & Strategy Planning
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                We conduct a thorough assessment of our clients&apos; existing
                culture, organizational structure, and technical capabilities.
                Based on the evaluation, we develop a comprehensive plan to
                foster a customer-centric culture, enhance efficiency, and
                optimize practices.
              </p>
            </div>

            <div className="mt-14 lg:mt-[0px] lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={devopsdeployment}
                  alt="devopsdeployment"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={devopsdeployment}
                    alt="devopsdeployment"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-xl md:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-8 sm:mt-20 text-textDarkBlue">
                  Continuous Integration & Deployment
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                Our CI/CD solutions enable smooth integration and deployment of
                code, ensuring faster and more efficient software development
                cycles. By automating the build, test, and deployment processes,
                we help our clients to deliver high-quality applications on the
                fly with more reliability.
              </p>
            </div>
          </div>

          <div className="lg:flex mt-14 lg:justify-between block">
            <div className="mt-14 lg:mt-[0px] lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={devopsinfrastructure}
                  alt="devopsinfrastructure"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={devopsinfrastructure}
                    alt="devopsinfrastructure"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-xl md:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-9 sm:mt-20 text-textDarkBlue">
                  Infrastructure Management
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                Our team is adept at managing complex IT infrastructures and
                custom requirements. We empower clients to streamline and
                automate their infrastructure management processes with
                comprehensive solutions like provisioning, configuring,
                monitoring, and enabling security.
              </p>
            </div>

            <div className="mt-14 lg:mt-[0px] lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={devopsconfiguration}
                  alt="devopsconfiguration"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={devopsconfiguration}
                    alt="devopsconfiguration"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-xl md:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Configuration Management
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                We offer robust solutions that enable clients to effectively
                manage and control their IT infrastructure configurations. Our
                experienced team implements industry-leading practices and tools
                to ensure consistency, traceability, and efficiency in
                configuration life-cycle. With our configuration management
                services, clients can enhance system stability, reduce errors,
                and accelerate deployment processes.
              </p>
            </div>
          </div>

          <div className="lg:flex mt-14 lg:justify-between block">
            <div className="mt-14 lg:mt-[70px] lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={devopsconsulting}
                  alt="devopsconsulting"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={devopsconsulting}
                    alt="devopsconsulting"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-xl md:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  DevOps Consulting Services
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                At Pirai Infotech, we are dedicated to comprehending the
                particular needs of our clients and helping them apply DevOps
                best practises across their whole business. We offer strategy
                and roadmap formulation, implementation planning, process
                improvement, tool selection and integration, best practise
                adoption, and performance and scalability assistance as part of
                our comprehensive DevOps consulting services. Our knowledgeable
                team is dedicated to providing clients with DevOps training and
                assistance to improve their business processes and facilitate
                successful transitions.
              </p>
            </div>

            <div className="mt-14 lg:mt-[70px] lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={devopsautomation}
                  alt="devopsautomation"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={devopsautomation}
                    alt="devopsautomation"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-xl md:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  DevOps Automation
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                To assist our clients in streamlining their development and
                operations processes, we specialise in offering DevOps
                automation services. With the help of our cutting-edge DevOps
                automation solutions, we give businesses the ability to shorten
                delivery times, cut costs, and improve overall quality. Our
                DevOps automation services encompass automating the build, test,
                and deployment procedures to improve collaboration and
                communication, ensure excellent quality across the board,
                increase agility and delivery speed, and minimise costs.
              </p>
            </div>
          </div>

          <div className="lg:flex mt-14 lg:justify-between block">
            <div className="mt-14 lg:mt-[0px] lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={devopsmonitoring}
                  alt="devopsmonitoring"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={devopsmonitoring}
                    alt="devopsmonitoring"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-xl md:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Monitoring & Backup
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mt-5 sm:mt-8">
                Pirai Infotech provides proactive monitoring and comprehensive
                backup solutions to ensure the stability, performance, and
                security of our clients’ critical systems and data.{" "}
              </p>
              <p className="font-normal text-base mx-6 mt-3 mb-10 sm:mb-20">
                With advanced monitoring tools and techniques, we continuously
                monitor their infrastructure, applications, and network to
                detect and resolve any issues before they impact their business
                operations. Our robust backup solutions also safeguard their
                valuable data and offer reliable recovery options in the event
                of data loss or system failures.
              </p>
            </div>

            <div className="mt-14 lg:mt-[0px] lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={devopsmaintenance}
                  alt="devopsmaintenance"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={devopsmaintenance}
                    alt="devopsmaintenance"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-xl md:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Maintenance and Support
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mt-5 sm:mt-8 mx-6">
                We place a high priority on our client&apos;s data protection
                and system uptime. For their unique needs, our committed team
                provides both onsite and remote support.
              </p>
              <p className="font-normal text-base mx-6 mt-3 mb-10 sm:mb-20">
                Whether it&apos;s troubleshooting issues, enhancing performance,
                or guaranteeing data security, our professionals are available
                to help as soon as possible. We also provide adaptable support
                plans made to fit their financial situation and business
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-20">
        <div className="lg:bg-textDarkBlue bg-textDarkBlue pb-10">
          <div className="container m-auto w-[90%]">
            <h1 className="font-semibold md:mx-8 text-xl px-4 pt-6 md:text-[36px] md:leading-[50px] lg:leading-[55px] xl:leading-none text-center text-textprimarywhite md:py-16 lg:w-[75%] lg:mx-auto xl:w-full">
              Catalyze Your Business Growth With{" "}
              <span className="text-bgPrimaryRed">Our DevOps Services</span>
            </h1>

            <div className="lg:flex w-[100%] lg:justify-between mt-10 md:mt-0">
              <div className="flex lg:w-[30%] lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  01
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[69%]">
                  <h3 className="text-[18px]  sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Expert DevOps Professionals
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Our team consists of experienced and certified DevOps
                    professionals who have a proven track record of delivering
                    quality services to clients.
                  </p>
                </div>
              </div>

              <div className="flex lg:w-[30%] lg:mx-6 lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  02
                </h5>
                <hr className="h-[5px] md:w-[8%]  md:mx-6 bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[13px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[65%] 2xl:w-[55%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Comprehensive Range of Services
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We offer a comprehensive range of DevOps services that can
                    transform business and take it to the next level.
                  </p>
                </div>
              </div>

              <div className="flex lg:w-[30%] lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  03
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-6 bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[13px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[11%]" />
                <div className="w-full lg:w-[53%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Customized Solutions
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We work closely with clients to understand their
                    requirements and provide customized solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:py-16 lg:justify-between lg:w-[100%]">
              <div className="flex lg:w-[30%] lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  04
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-6 bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[13px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[11%]" />
                <div className="w-full lg:w-[60%] 2xl:w-[55%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Support and Maintenance
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We also offer a wide range of support and maintenance
                    services to ensure your system runs smoothly and
                    efficiently.
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lg:w-[30%] lg:mx-6 lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  05
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-6 bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[13px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[65%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Timely Deliverables
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    By utilizing CI/CD pipelines, we ensure that client
                    deliverables are consistently met on time and with better
                    quality.
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lg:w-[30%] lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  06
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-6 bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[13px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[58%] 2xl:w-[50%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Continuous Monitoring
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We continuously monitor our clients’ infrastructure to
                    ensure it is always ready for deployment, providing an
                    uninterrupted experience for them.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:pb-16 lg:justify-between lg:w-[100%]">
              <div className="flex lg:w-[30%] lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  07
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-6 bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[13px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[11%]" />
                <div className="w-full lg:w-[60%] 2xl:w-[55%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Infrastructure Automation
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We focus on automating everything from application
                    deployment to infrastructure management using infra-as-code
                    principles.{" "}
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lg:w-[30%] lg:mx-6 lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  08
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-6 bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[13px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[65%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Cross-Functional Collaboration
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Our team members take ownership beyond their traditional
                    roles, thus enhancing collaboration, saving time, and
                    improving efficiency.{" "}
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lg:w-[30%] lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  09
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-6 bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[13px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[58%] 2xl:w-[50%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Microservices Expertise
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    With our extensive experience in microservices, we can adopt
                    innovative approaches to effectively manage applications.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-[46px] lg:[60px]">
        <div className="container m-auto w-[90%]">
          <h1 className="text-2xl lg:text-[42px] font-bold text-center text-textDarkBlue mb-[24px]">
            Our Tech <span className="text-bgPrimaryRed">Stack</span>
          </h1>
          <div className="flex items-center justify-around flex-wrap w-[100%]">
            <Image
              src={splunk}
              alt="splunk"
              className="w-[30%] sm:w-[27%] lg:w-[15%] p-2 md:p-2"
            />
            <Image
              src={kubernetes}
              alt="kubernetes"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:pl-16 md:pb-5 md:ml-[-50px] lg:ml-5"
            />
            <Image
              src={junit}
              alt="junit"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:p-10"
            />
            <Image
              src={jira}
              alt="jira"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:p-10"
            />

            <Image
              src={nagios}
              alt="nagios"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:px-10"
            />
            <Image
              src={ansible}
              alt="ansible"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:p-8"
            />
            <Image
              src={maven}
              alt="maven"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:p-10"
            />
            <Image
              src={jenkins}
              alt="jenkins"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2  md:p-10"
            />
            <Image
              src={redhat}
              alt="redhat"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:p-10"
            />
            <Image
              src={openstack}
              alt="openstack"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:p-10"
            />
            <Image
              src={docker}
              alt="docker"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:p-10"
            />
            <Image
              src={gitlab}
              alt="gitlab"
              className="w-[30%] sm:w-[27%] lg:w-[22%] p-2 md:p-10"
            />
          </div>
        </div>
      </section>
      <Client />
      <Form />
      <Footer />
    </>
  );
}
