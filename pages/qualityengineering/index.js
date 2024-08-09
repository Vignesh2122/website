import React from "react";
import Header from "@/components/Header";
import qualityCustomer from "../../public/illustrations/qualityCustomer.svg";
import Image from "next/image";
import natick from "../../public/icons/qatick.svg";
import preplanning from "../../public/icons/servplanning.svg";
import serves from "../../public/icons/servtest.svg";
import qaadvisory from "../../public/icons/qaadvisory.svg";
import qaprocess from "../../public/icons/qaprocess.svg";
import selenium from "../../public/icons/selenium.svg";
import jmeter from "../../public/icons/jmeter.svg";
import postman from "../../public/icons/postman.svg";
import testng from "../../public/icons/testng.svg";
import appium from "../../public/icons/appium.svg";
import cypress from "../../public/icons/cypress.svg";
import eclipse from "../../public/icons/eclipse.svg";
import android from "../../public/service-application/Androidstudio.svg";
import Blazemeter from "../../public/service-application/Blazemeter.svg";
import gatling from "../../public/icons/gatling.svg";
import quality_banner from "../../public/logos/quality-banner.jpg";
import Client from "@/components/client";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import qualityleadership from "../../public/logos/service-leadership.svg";
import qualityprofessional from "../../public/icons/qualityprofessional.svg";
import qualitysatisfaction from "../../public/icons/qualitysatisfaction.svg";
import Head from "next/head";
function QualityEngineering() {
  return (
    <>
      <Head>
        <title>Elevate Your Software Quality with Expert Quality Engineering Services | Pirai Infotech</title>
        <meta name="description" content="Experience the power of quality engineering services from Pirai Infotech.
          Our solutions guarantee top-notch software, cost savings, and happier customers." />
        <meta name="keywords" content="Quality Engineering, Software Quality, Quality Assurance, Testing, Test Automation" />
        <meta charSet="utf-8" />
        <link rel="icon" href="title.png" type="image/png" />
      </Head>
      <Header />
      <div className="hidden lg:block relative before:content-[''] before:block before:absolute before:bg-contain xl:before:w-[320px] lg:before:w-[320px] lg:before:h-[450px] xl:before:h-[500px] 2xl:before:h-[540px] before:bg-quality_page_bg_image before:bg-no-repeat lg:before:top-[-40px]  2xl:top-[-30px] before:-z-50"></div>
      <section className="mt-[35px] lg:mt-[150px] xl:mt-[180px] lg:flex lg:justify-between lg:items-center">
        <div className="container mx-auto lg:w-[90%] w-[100%]">
          <div className="">
            <div className="w-full lg:w-[40%] xl:w-[47%] mt-[47px] text-center lg:text-left">
              <h1 className="text-textDarkBlue text-[36px] leading-[50px] mx-10 sm:mx-[115px] md:mx-[150px] lg:mx-0 xl:text-5xl sm:leading-[50px] font-bold lg:leading-[45px] 2xl:text-6xl xl:leading-[60px] 2xl:leading-[70px]">
                Experience the Power of Quality Engineering
              </h1>
              <h3 className=" mx-6 lg:mx-0 font-normal lg:text-[20px] 2xl:text-[20px] text-xl mt-3 xl:mt-5">
                Unlock New Possibilities and Propel Your Business to Greater
                Heights.
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:w-[50%] lg:absolute lg:right-0 flex justify-center lg:justify-end w-[90%] m-auto">
          <Image
            src={quality_banner}
            alt="quality"
            className="lg:w-[100%] lg:h-[360px] md:w-[370px]   w-[500px] lg:mt-[50px] 
             xl:h-[460px] rounded-[30px] md:rounded-none mx-auto"
          />
        </div>
      </section>
      {/* -------------------------------------your QA Game  -------------------------------------- */}
      <section className="lg:mt-[180px] md:mt-[70px] mt-[50px]">
        <div className="container m-auto w-[90%]">
          <div className=" bg-textDarkBlue rounded-3xl">
            <h2 className="lg:text-4xl md:text-3xl text-xl text-center lg:text-left pt-9 lg:px-9 px-6 text-textWhite font-semibold">
              Create Lasting Value For Your Customers With  <br />

              <span className="text-bgPrimaryRed"> Our Quality Engineering Practices</span>
            </h2>
            <div className="lg:flex  items-center justify-center  ">
              <div
                className="2xl:w-[30%] 2xl:my-6 2xl:-mt-[5px]  lg:mt-[20px]  
              lg:mb-[0px] lg:w-[60%]  xl:w-[60%] xl:-mt-[22px] "
              >
                <Image
                  src={qualityCustomer}
                  alt="Banner"
                  className="2xl:ml-[50px] xl:ml-[40px]   mx-auto"
                />
              </div>
              <div
                className="text-textWhite text-[20px] 2xl:w-[990px] font-normal container  mx-auto
                 px-[20px] lg:ml-[50px] lg:mt-[40px] mt-[10px] xl:w-[100%] lg:w-[100%] "
              >
                <p className="lg:py-[10px] py-[10px] text-center lg:text-[20px]  text-[12px] lg:text-left lg:px-0">
                  Quality Engineering at Pirai Infotech involves a comprehensive approach to testing, analysis, and optimization. We eliminate defects and identify
                  potential issues early in the development lifecycle. This reduces development and maintenance costs, minimizes business disruptions, and saves you time.
                </p>
                <p className="lg:py-[20px] py-[10px] text-center lg:text-[20px] text-[12px] lg:text-left lg:px-0 ">
                  Our quality engineers ensure that your software generates positive customer experiences. By proactively addressing potential issues, we free you from
                  the burden of troubleshooting and issue resolution. This increases productivity and allows you to focus on driving innovation and achieving business objectives.
                </p>
                <p className="mt-3 text-center lg:text-[20px] text-[12px] lg:text-left lg:px-0 pb-[30px]  ">
                  Furthermore, when you consistently deliver high-quality software, you differentiate yourself from competitors
                  who may have frequent issues or performance problems. This competitive advantage
                  attracts more customers, expands your market share, and propels business growth. When you partner with Pirai Infotech for quality engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -------------------------------------your benefit from qa----------------------------------------- */}

      <section className="mt-10 lg:mt-[120px]">
        <div className="container m-auto w-[90%] ">
          <div className="lg:flex lg:justify-between  block  md:mx-auto ">
            <h3 className="text-center lg:text-left lg:w-[24%] text-[20px] font-semibold text-bgPrimaryRed  lg:text-[36px] py-[15px] lg:py-[0px]">
              You benefit from our QA
            </h3>
            <div className="lg:flex relative lg:h-[300px] lg:justify-between lg:w-[75%] mt-3 lg:m-0">
              <div className="bg-textDarkBlue relative h-[250px] lg:h-auto  p-3 rounded-t-[12px] lg:rounded-t-none lg:rounded-bl-[12px] lg:rounded-tl-[12px] lg:w-[33.3%]">
                <h5 className="text-textWhite text-[24px] font-medium 2xl:w-[70%]">
                  Extensive expertise and experience
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={qualityprofessional}
                    alt="qualityprofessional"
                    className="absolute right-2 bottom-3"
                  />
                </div>
              </div>
              <div className="bg-bgPrimaryRed relative h-[250px] lg:h-auto p-3 lg:w-[33.3%]">
                <h5 className="text-textWhite text-[24px] font-medium">
                  Collaborative approach
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={qualityleadership}
                    alt="qualityleadership"
                    className="absolute right-2 bottom-3 "
                  />
                </div>
              </div>
              <div className="bg-bgLightWhite h-[250px] lg:h-auto p-3 rounded-b-[12px] lg:rounded-bl-none lg:rounded-r-[12px] lg:w-[33.3%]">
                <h5 className="text-textBlack text-[24px] lg:text-[20px] xl:text-[24px] font-semibold lg:w-[70%]">
                  Commitment to excellence and client satisfaction
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={qualitysatisfaction}
                    alt="qualitysatisfaction"
                    className="absolute right-2 bottom-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--------------------------------------------------our services --------------------------------------------  */}

      <section className="lg:mt-[120px] mt-[40px] relative">
        <div className="h-[970px] w-full absolute  -z-10 top-[345px] lg:block hidden"></div>
        <div className="container m-auto px-[30px] md:px-[0px]">
          <h1 className="font-bold xl:text-[48px] md:text-[38px] sm:text-[27px] text-[24px] text-textDarkBlue text-center">
            Enhance Your Software Performance with{" "}
          </h1>
          <h1 className="font-bold xl:text-[48px] md:text-[38px] sm:text-[27px] text-[24px] text-[#D45147] text-center py-[5px]">
            {" "}
            Our Quality Engineering Services
          </h1>

          <div className="lg:flex lg:mt-[64px] mt-[20px] lg:justify-between block 2xl:px-[40px] md:px-[20px]  px:[0px]">
            <div className=" lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] xl:w-[47%] lg:w-[46%]  w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block  items-center">
                <Image
                  src={preplanning}
                  alt="preplanning"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 ml-9 p-6 2xl:w-[16%] lg:w-[20%] w-[80px] hidden sm:block">
                  <Image src={preplanning} alt="preplanning" className="" />
                </div>
                <h5 className="md:text-2xl sm:text-xl  text-[15px] font-semibold ml-6 mt-8 text-textDarkBlue">
                  Assessment Planning
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="text-[12px] xl:text-[16px] sm:text-[14px] mx-6 pb-[20px]">
                Our skilled quality engineers use the latest technologies to
                thoroughly evaluate your software quality and provide valuable
                insights to boost its performance and reliability. Our
                assessment goes beyond surface-level evaluations. We dive into
                your quality engineering processes and uncover risks,
                bottlenecks, and inefficiencies that might be holding your
                software back. By addressing these issues head-on, we enhance
                overall performance, reduce the likelihood of defects and
                improve customer satisfaction. Eventually, you&apos;ll save
                costs, increase efficiency, and gain a competitive edge in the
                market.
              </p>
            </div>

            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] xl:w-[47%] lg:w-[46%] w-[100%] border-bgPrimaryRed mt-8 lg:mt-[0px] lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={serves}
                  alt="serves"
                  className="block sm:hidden mt-[35px] w-[40px] ml-[20px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl lg:mt-9 mt-9 ml-9 p-6 2xl:w-[16%] lg:w-[20%] w-[80px] hidden sm:block">
                  <Image src={serves} alt="serves" className="" />
                </div>
                <h5 className="md:text-2xl sm:text-xl text-[15px] font-semibold ml-6  lg:mt-6 mt-11 text-textDarkBlue">
                  Test Automation
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="text-[12px] xl:text-[16px] sm:text-[14px] mx-6 pb-[20px]">
                We bring value to our clients through our extensive expertise in
                designing and implementing robust test automation frameworks.
                With us, they can achieve efficient and reliable testing across
                different platforms, devices, and environments. Moreover, we
                continuously support and maintain their test automation
                infrastructure. This can help them effortlessly adapt to
                changing project requirements. By partnering with us, clients
                can reduce their manual effort, accelerate testing cycles,
                improve software quality, and heighten customer satisfaction.
                Ultimately, they can focus on innovation and drive business
                growth.
              </p>
            </div>
          </div>

          <div className="lg:flex block lg:mt-14 mt-8 lg:justify-between 2xl:px-[40px] md:px-[20px] px-0">
            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] lg:border-textprimarywhite border-bgPrimaryRed border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={qaadvisory}
                  alt="qaadvisory"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9  ml-9 p-6 2xl:w-[16%] lg:w-[20%] w-[80px] hidden sm:block">
                  <Image src={qaadvisory} alt="qaadvisory" className="" />
                </div>
                <h5 className="md:text-2xl sm:text-xl text-[15px] font-semibold ml-6  lg:mt-6 mt-10 text-textDarkBlue">
                  Quality Advisory
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className=" text-[12px] xl:text-[16px] sm:text-[14px] mx-6 pb-[20px]">
                With our Quality Advisory service, you can gain a holistic
                perspective on your quality practices. We work closely with our
                clients to develop effective quality assurance strategies,
                define the right quality metrics, and implement robust quality
                control measures. Leverage our expertise to optimize your
                quality processes, mitigate risks, and enhance the quality of
                your software applications. By partnering with us, you can
                enhance customer satisfaction, boost operational efficiency, and
                reduce costs. Ultimately, you can make informed decisions,
                prioritize quality initiatives, and achieve your quality goals
                effectively.
              </p>
            </div>

            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] mt-8 lg:mt-[0px] lg:border-textprimarywhite border-bgPrimaryRed border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={qaprocess}
                  alt="qaprocess"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[43px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 ml-9 p-6 2xl:w-[16%] lg:w-[20%] w-[80px] hidden sm:block">
                  <Image src={qaprocess} alt="qaprocess" className="" />
                </div>
                <h5 className="md:text-2xl sm:text-xl text-[15px] font-semibold ml-6  lg:mt-6 mt-12 text-textDarkBlue">
                  Process Standardization
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="text-[12px] xl:text-[16px] sm:text-[14px]  mx-6 pb-[20px]">
                We can help streamline workflows, establish clear
                responsibilities, and implement quality checkpoints at various
                stages of the software development lifecycle. Our experts can
                help you achieve greater consistency, efficiency, and quality in
                your software development processes. You can improve your teams’
                productivity, reduce rework, and faster time-to-market.
                Additionally, our approach can facilitate efficient knowledge
                sharing and transfer within your teams and help you scale
                seamlessly as your business grows. Your customer satisfaction
                quotient will increase eventually, enhancing your business
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ------------------------------------------ change   QA  Management ----------------------------------- */}
      <section className="mt-12 lg:mt-[120px]">
        <div className="lg:bg-textDarkBlue  bg-textDarkBlue pb-10">
          <div className="container m-auto w-[90%]  rounded-lg">
            <h1 className="font-semibold md:mx-8 text-xl px-4 pt-6 md:text-[36px] md:leading-[50px] lg:leading-[55px] xl:leading-none text-center text-textprimarywhite md:py-16 lg:w-[75%] lg:mx-auto xl:w-full">
              Why Choose Pirai as Your Preferred
              <span className="text-bgPrimaryRed pl-2">
                Quality Engineering Partner?
              </span>
            </h1>

            <div className="lg:flex w-[100%] lg:justify-between mt-10 md:mt-0">
              <div className="flex lg:w-[30%] lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  01
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full ">
                  <h1 className="text-[18px]  sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Comprehensive Quality Solutions
                  </h1>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We offer end-to-end quality engineering services, from test
                    planning and execution to defect management and performance
                    testing. This ensures that your software applications are
                    robust and reliable.
                  </p>
                </div>
              </div>

              <div className="flex lg:w-[30%] lg:mx-6 lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  02
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[65%] 2xl:w-[55%]">
                  <h1 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Industry-Leading Expertise
                  </h1>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Our seasoned quality engineering experts have cross-industry
                    experience, delivering exceptional quality solutions for
                    your applications.
                  </p>
                </div>
              </div>

              <div className="flex lg:w-[30%] lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  03
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[11%]" />
                <div className="w-full lg:w-[53%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Tailored Approaches
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We customize our solutions to address your unique
                    requirements to create solutions that solve your
                    business&apos;s specific challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:flex lg:py-16 lg:justify-between lg:w-[100%]">
              <div className="flex lg:w-[30%] lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  04
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[11%]" />
                <div className="w-full lg:w-[60%] 2xl:w-[55%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Accelerated Time-to-Market
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Our quality engineering processes streamline development and
                    testing. This enables quicker release cycles for your
                    software applications without compromising quality or
                    reliability.
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lg:w-[30%] lg:mx-6 lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  05
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[65%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Continuous Improvement
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We proactively identify areas for enhancement, implement
                    feedback loops, and leverage data-driven insights. This
                    approach ensures that your applications remain at the
                    forefront of industry benchmarks.
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lg:w-[30%] lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  06
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[58%] 2xl:w-[50%]">
                  <h3 className="text-[18px] sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Collaborative Partnership
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We actively involve your team, seek feedback, and align
                    quality engineering efforts with your business objectives.
                    This creates transparency, ownership, and tailored solutions
                    that drive business success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------- Technologies --------------------------------------------------- */}
      <section className="container m-auto w-[80%] ">
        <div className="mt-[40px] lg:mt-[120px] lg:mb-[120px]">
          <h1 className="font-[700] lg:text-[42px] text-[20px] text-textDarkBlue text-center">
            Our Tech <span className="text-bgPrimaryRed">Stack</span>
          </h1>

          <div className="">
            <div className="flex lg:justify-between sm:justify-around justify-between mt-[50px]">
              <Image
                src={selenium}
                alt="selenium"
                className="w-[22%] lg:w-[15%]"
              />
              <Image src={jmeter} alt="jmeter" className="w-[22%] lg:w-[15%] " />
              <Image
                src={postman}
                alt="postman"
                className="w-[22%] lg:w-[15%]"
              />
              <Image src={testng} alt="testing" className="w-[22%] lg:w-[15%]" />
            </div>

            <div className="flex lg:justify-between sm:justify-around justify-between mt-[40px]">
              <Image
                src={eclipse}
                alt="eclipse"
                className="w-[22%] lg:w-[15%]"
              />
              <Image src={appium} alt="appium" className="w-[22%] lg:w-[15%]" />
              <Image
                src={gatling}
                alt="gatling"
                className="w-[22%] lg:w-[15%]"
              />
              <Image
                src={cypress}
                alt="Blazemeter"
                className="w-[22%] lg:w-[15%]"
              />
            </div>
            <div className="flex justify-evenly mt-[40px]">
              <Image
                src={android}
                alt="android"
                className="w-[24%] lg:w-[15%]"
              />
              <Image
                src={Blazemeter}
                alt="Blazemeter"
                className="w-[24%] lg:w-[15%]"
              />

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

export default QualityEngineering;
