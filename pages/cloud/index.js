import Image from "next/image";
import cloudarchitecture from "../../public/service-cloud/logos/cloud-architecture.svg";
import managedcloud from "../../public/service-cloud/logos/managed-cloud.svg";
import cloudmigration from "../../public/service-cloud/logos/cloud-migration.svg";
import multicloud from "../../public/service-cloud/logos/multi-cloud.svg";
import cloudconsulting from "../../public/service-cloud/logos/cloud-consulting.svg";
import cloudsecurity from "../../public/service-cloud/logos/cloud-security.svg";
import hybirdsecurity from "../../public/service-cloud/logos/hybird-security.svg";
import googlecloud from "../../public/service-cloud/logos/google-cloud.svg";
import alibabacloud from "../../public/service-cloud/logos/alibaba-cloud.svg";

import chef from "../../public/service-cloud/logos/chef.svg";
import elasticserch from "../../public/service-cloud/logos/elasticserch.svg";
import grafana from "../../public/service-cloud/logos/grafana.svg";
import ionos from "../../public/service-cloud/logos/ionos.svg";

import kibana from "../../public/service-cloud/logos/kibana.svg";
import logstash from "../../public/service-cloud/logos/logstash.svg";
import nagios from "../../public/service-cloud/logos/nagios.svg";
import prometheus from "../../public/service-cloud/logos/prometheus.svg";

import sonarqube from "../../public/service-cloud/logos/sonarqube.svg";
import terraform from "../../public/service-cloud/logos/terraform.svg";
import zabbix from "../../public/service-cloud/logos/zabbix.svg";
import jenkins from "../../public/service-cloud/logos/jenkins.svg";

import scaleway from "../../public/service-cloud/logos/scaleway.svg";
import aws from "../../public/service-cloud/logos/aws.svg";
import azure from "../../public/service-cloud/logos/azure.svg";
import digitalocean from "../../public/service-cloud/logos/digital-ocean.svg";
// import tick from "../../public/icons/tick.svg";
import caresoft from "../../public/logos/caresoft.svg";
import digi from "../../public/logos/digi.svg";
import blueendeavour from "../../public/logos/blue-endeavour.svg";
import midf from "../../public/logos/midf.svg";
import migrationcloud from "../../public/logos/migrationcloud.svg";
import cadonix from "../../public/logos/cadonix.svg";
import Sodexo from "../../public/logos/Sodexo.svg";
import Daemon from "../../public/logos/Daemon.svg";
import cloudenchaded from "../../public/logos/cloud-enchaded.svg";
import clouddata from "../../public/logos/cloud-data.svg";
import cloudproductivity from "../../public/logos/cloud-productivity.svg";
import cloud_banner from "../../public/logos/cloud-banner.jpg";
import Header from "@/components/Header";
import Form from "@/components/Form";
import Client from "@/components/client";
import Footer from "@/components/Footer";
import React from "react";
import Head from "next/head";

export default function Cloud() {
  const boxStyles = {
    container: "container m-auto hidden",
    boxContainer: "flex overflow-x-scroll no-scrollbar p-2",
    box: "flex-none w-[550px] mr-8 py-2 rounded-[20px] delay-500 snap-align-start bg-white shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)]",
  };

  const boxes = [
    {
      category: "cloud",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image src={caresoft} alt="caresoft" className="my-[20px] ml-3" />

          <div className="mt-3 mr-3 ml-6 ">
            <h1 className="text-xl font-semibold">
              Caresoft Global Private Limited
            </h1>
            <h4 className="font-medium text-base mt-2">
              Cloud Migration to AWS
            </h4>
            <p className="font-normal text-xs mt-2 ">
              Pirai Infotech provided a roadmap for migrating workloads to AWS
              and conducted a proof of concept (POC) to validate our
              architecture. We successfully performed a Lift & Shift migration
              and utilized AWS resources, including Lambda, EC2, ELB, EBS, RDS,
              Route53, SES, ACM, ASG, and LC to achieve BCP and DR with defined
              RTO and RPO.
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image src={digi} alt="digi" className="my-[20px] ml-3" />
          <div className="mt-3 mr-3 ml-6 ">
            <h1 className="text-xl font-semibold">Digi Telecommunications</h1>
            <h4 className="font-medium text-base mt-2">CRM Platform in AWS</h4>
            <p className="font-normal text-xs mt-2 ">
              Digi needed a secure and scalable platform on AWS. Pirai Infotech
              designed and implemented a robust, secure, automated, and scalable
              infrastructure for hosting their CRM application. As the
              end-to-end platform owner on AWS, we host the CRM application.
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image
            src={blueendeavour}
            alt="blueendeavour"
            className="my-[20px] ml-3"
          />
          <div className="mt-3 mr-3 ml-6 ">
            <h1 className="text-xl font-semibold">Blue Endeavour Ltd</h1>
            <h4 className="font-medium text-base mt-2">
              Hybrid Cloud Development
            </h4>
            <p className="font-normal text-xs mt-2 ">
              Pirai Infotech migrated workloads to AWS while integrating Domain
              Controllers in the VMware environment, bridging on-premise and
              cloud infrastructure.
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image src={cadonix} alt="cadonix" className="my-[20px] ml-3" />
          <div className="mt-3 mr-3 ml-6 ">
            <h1 className="text-xl font-semibold">
              Cadonix Software Development
            </h1>
            <h4 className="font-medium text-base mt-2">
              Multi Cloud Deployment
            </h4>
            <p className="font-normal text-xs mt-2 ">
              We proposed a hybrid network leveraging Alibaba Cloud and AWS,
              with AWS serving as the source environment for the application. By
              utilizing Alibaba&apos;s CEN service, we established a reverse
              proxy network that connects back to Alibaba Cloud in Frankfurt.
              Additionally, we implemented a reverse proxy in Frankfurt to route
              traffic to AWS in Ireland, where the application is hosted.
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image src={midf} alt="midf" className="my-[20px] ml-3" />
          <div className="mt-3 mr-3 ml-6 ">
            <h1 className="text-xl font-semibold">MIDF Financial Services</h1>
            <h4 className="font-medium text-base mt-2">
              Monitoring Stack Implementation
            </h4>
            <p className="font-normal text-xs mt-2 ">
              We implemented a comprehensive monitoring solution using
              Elasticsearch, Logstash, and Kibana to monitor all components of
              their data store solution. Using the Elastic Stack, they can
              monitor CPU and memory usage, logs, error messages, and more from
              all applications and virtual machines. We also created
              configurable and customized dashboards for machines and drill-down
              dashboards for applications.
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image
            src={migrationcloud}
            alt="migrationcloud"
            className="my-[20px] ml-3"
          />
          <div className="mt-2 mr-3 ml-6 ">
            <h1 className="text-xl font-semibold">
              Contract IO Technology,
              <br /> Information and Internet
            </h1>
            <h4 className="font-medium text-base ">
              Cloud Migration & Application Containerization
            </h4>
            <p className="font-normal text-xs  ">
              Pirai Infotech migrated the workload from GCP to Azure and
              containerized their application using Docker. We utilized
              Terraform for Infrastructure as Code implementation. The complete
              stack was automated using CI/CD (Jenkins). Furthermore, we
              implemented SonarQube to enhance code quality.
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image src={Sodexo} alt="Sodexo" className="my-[20px] ml-3" />
          <div className="mt-3 mr-3 ml-6 ">
            <h1 className="text-xl font-semibold">Sodexo</h1>
            <h4 className="font-medium text-base mt-2">
              Micro-services Transformation & Migration to Azure
            </h4>
            <p className="font-normal text-xs mt-2 ">
              We proposed a scalable microservices architecture using Azure AKS,
              enabling on-demand scaling of individual modules without impacting
              the ecosystem. We migrated the monolithic application to Azure
              cloud to leverage multi-geography deployment and dynamic scaling
              through Azure Kubernetes Service (AKS)
            </p>
          </div>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div className=" flex items-center bg-textprimarywhite">
          <Image src={Daemon} alt="Daemon" className="my-[20px] ml-3" />
          <div className="mt-3 mr-3 ml-6 ">
            <h1 className="text-xl font-semibold">
              Daemon Information Technology <br />& Services
            </h1>
            <h4 className="font-medium text-base mt-2">
              DevOps Transformation
            </h4>
            <p className="font-normal text-xs mt-2 ">
              Daemon sought to manage the AWS workload and automate cloud
              deployment and pipelines for business application deployment.
              Pirai Infotech utilized Terraform for Infrastructure as Code and
              Chef for server configuration management in AWS. We implemented
              CI/CD using Jenkins and Docker for application deployment.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Head>
        <title>Transform Your Business with Pirai Infotech&apos;s Cloud Solutions and Application Services</title>
        <meta name="description" content="Maximize the Efficiency of Your Operations with Our Comprehensive Cloud Services and Application Solutions." />
        <meta name="keywords" content="Cloud Solutions, Cloud Computing, Cloud Migration, Cloud Security, Cloud Management." />
        <meta charSet="utf-8" />
        <link rel="icon" href="title.png" type="image/png" />
      </Head>
      <Header />
      <div className="hidden lg:block lg:relative lg:before:content-[''] lg:before:block lg:before:absolute before:bg-contain xl:before:w-[320px] lg:before:w-[320px] lg:before:h-[450px] xl:before:h-[500px] 2xl:before:h-[500px] lg:before:bg-cloud_page_bg_image lg:before:bg-no-repeat lg:before:top-[-50px] 2xl:before:top-[-90px] lg:before:-z-50"></div>
      <section className="mt-[35px] lg:mt-[160px] 2xl:mt-[200px] lg:flex lg:justify-between lg:items-center">
        <div className="container mx-auto w-[90%] ">
          <div className="">
            <div className="w-full text-center lg:items-center lg:text-left lg:w-[40%] lg:mt-[50px] xl:w-[40%] xl:mt-[90px] 2xl:w-[45%]">
              <h1 className="text-textDarkBlue text-4xl leading-[50px] md:text-5xl lg:text-4xl xl:text-5xl font-bold md:leading-[60px]">
                Unlock the Power of the Cloud
              </h1>
              <h3 className=" font-normal text-[20px] mt-3 leading-[30px]">
                Empower your business with scalable and secure cloud solutions.
                Significantly lower the costs spent on expensive IT hardware,
                software & maintenance.
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:absolute lg:right-0 lg:w-[53%] flex justify-center lg:justify-end m-auto w-[90%]">
          <Image
            src={cloud_banner}
            alt="servicecloud"
            className="lg:w-[100%] lg:h-[360px] md:w-[370px]   w-[500px] lg:mt-[50px] 
            xl:h-[460px] rounded-[30px] md:rounded-none mx-auto"
          />
        </div>
      </section>

      <section className="mt-[49px] lg:mt-[150px] 2xl:mt-[250px]">
        <div className="container m-auto w-[90%]">
          <div className=" bg-textDarkBlue rounded-3xl sm:m-0">
            <h2 className="text-center lg:text-left text-xl sm:text-2xl md:text-3xl lg:text-4xl p-[18px] lg:p-[36px] text-textprimarywhite font-semibold lg:leading-[50px]">
              Improve Security & Reduce Upfront Costs with a
              <br />
              <span className="text-bgPrimaryRed">
                Tailored IT Architecture
              </span>
            </h2>
            <div className="lg:flex lg:items-center">
              <div className="flex justify-center px-5 md:p-0 lg:w-[30%] lg:my-1 lg:mx-9 2xl:mx-20">
                <Image src={cloudarchitecture} alt="cloudarchitecture" />
              </div>
              <div className="text-textprimarywhite text-center lg:text-left px-7 pt-10 pb-7 lg:p-0 lg:my-6 text-[12px] 2xl:text-[20px] md:text-xl lg:w-[60%] font-normal 2xl:w-[55%]">
                <p>
                  Experience the transformative capabilities of cloud computing
                  with Pirai Infotech. Let us help you figure out how your
                  business can reduce IT overheads with agile technology and
                  take your IT resource utilization to the next level.
                </p>
                <p className="lg:my-10 my-6">
                  Harness the advantage of our comprehensive services and
                  strategic partnerships with industry-leading cloud vendors to
                  unlock custom-tailored solutions that perfectly align with
                  your scale and needs.
                </p>
                <p className="">
                  Additionally, our team provides comprehensive training and
                  support programs to ensure a smooth transition and help you
                  maximize the potential of the cloud. We empower your teams,
                  right from onboarding to ongoing assistance, to help your
                  business thrive in the digital era.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[36px] lg:mt-[120px]">
        <div className="container m-auto w-[90%] ">
          <div className="lg:flex lg:justify-between  block  md:mx-auto ">
            <h3 className="text-center lg:text-left lg:w-[45%] text-[20px] font-semibold text-bgPrimaryRed lg:pr lg:text-[36px] ">
              You gain from Our <br /> Cloud Services
            </h3>
            <div className="lg:flex relative lg:h-[300px] lg:justify-between lg:w-[75%] mt-3 lg:m-0">
              <div className="bg-textDarkBlue relative h-[250px] lg:h-auto  p-3 rounded-t-[12px] lg:rounded-t-none lg:rounded-bl-[12px] lg:rounded-tl-[12px] lg:w-[33.3%]">
                <h5 className="text-textWhite text-[24px] font-medium 2xl:w-[70%]">
                  Enhanced security
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={cloudenchaded}
                    alt="qualityprofessional"
                    className="absolute right-2 bottom-3"
                  />
                </div>
              </div>
              <div className="bg-bgPrimaryRed relative h-[250px] lg:h-auto p-3 lg:w-[33.3%]">
                <h5 className="text-textWhite text-[24px] font-medium">
                  Complete control of your data & resources
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={clouddata}
                    alt="qualityleadership"
                    className="absolute right-2 bottom-3 "
                  />
                </div>
              </div>
              <div className="bg-bgLightWhite h-[250px] lg:h-auto p-3 rounded-b-[12px] lg:rounded-bl-none lg:rounded-r-[12px] lg:w-[33.3%]">
                <h5 className="text-textBlack text-[24px] lg:text-[20px] xl:text-[24px] font-medium lg:w-[70%]">
                  Improved Organizational productivity
                </h5>
                <div className="flex justify-end">
                  <Image
                    src={cloudproductivity}
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
        <div className="h-[970px] w-full absolute bg-[#E3E6ED] -z-10 lg:top-[450px] xl:top-[345px] lg:block hidden"></div>
        <div className="container m-auto w-[90%]">
          <h1 className="font-bold text-2xl sm:text-4xl lg:text-5xl text-textDarkBlue text-center leading-[30px] sm:leading-[50px]">
            Our Full-Range of Cloud <br className="block lg:hidden" />
            <span className="text-bgPrimaryRed">Enablement Services</span>
          </h1>
          <div className="lg:flex mt-6 lg:mt-14 lg:justify-between block">
            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={managedcloud}
                  alt="managedcloud"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 mx-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image src={managedcloud} alt="managedcloud" className="" />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3 sm:m-0 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Managed Cloud Services
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                Our extensive service portfolio covers a wide range of cloud
                offerings — cloud computing, cloud storage, cloud security,
                cloud networking, and other related services. Businesses can
                leverage our comprehensive cloud service portfolio to increase
                their operational efficiency and agility. Pirai Infotech
                empowers you to unlock the full potential of the cloud and gain
                a competitive edge within your industry.
              </p>
            </div>

            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed mt-14 lg:mt-[0px] lg:border-textprimarywhite border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={cloudmigration}
                  alt="cloudmigration"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 ml-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={cloudmigration}
                    alt="cloudmigration"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3 sm:ml-10 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Cloud Migration
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                We go above and beyond to ensure a smooth and successful
                transition to the cloud for our clients. Our process begins with
                a comprehensive evaluation of their existing infrastructure and
                applications. This allows us to gain a deep understanding of
                their unique requirements, challenges, and goals. Next, we
                develop a customized migration plan. Our experienced team guides
                and supports clients throughout the entire migration journey,
                ensuring minimal disruption to their operations.
              </p>
            </div>
          </div>

          <div className="lg:flex block mt-14 lg:justify-between">
            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] lg:border-textprimarywhite border-bgPrimaryRed border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={multicloud}
                  alt="multicloud"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 ml-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image src={multicloud} alt="multicloud" className="" />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3 sm:ml-10 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Multi-Cloud Management
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                We meticulously assess our client&apos;s needs and craft
                customized solutions to optimize their utilization of diverse
                cloud-based resources. Our expert team guides them in selecting
                the optimal combination of cloud providers and services. We work
                closely with our clients to ensure that the chosen cloud
                infrastructure aligns perfectly with their goals and objectives.
                But our support doesn&apos;t end there. We provide ongoing
                management and monitoring services to ensure superior system
                performance.
              </p>
            </div>

            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] mt-14 lg:mt-[0px] lg:border-textprimarywhite border-bgPrimaryRed border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={cloudconsulting}
                  alt="cloudconsulting"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 ml-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image
                    src={cloudconsulting}
                    alt="cloudconsulting"
                    className=""
                  />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3 sm:ml-10 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Cloud Consulting & Advisory
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                We provide organizations with the expertise and guidance needed
                to successfully navigate the intricate landscape of cloud
                computing. Our seasoned team is experienced in all aspects of
                cloud computing, from strategy and planning to implementation
                and management. We assess our clients’ cloud readiness, craft a
                tailored roadmap, and assist in selecting the optimal cloud
                solution. We also assist with cloud migration planning and
                execution and provide ongoing support and optimization services.
              </p>
            </div>
          </div>

          <div className="lg:flex block mt-14 lg:justify-between">
            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-transparent border-bgPrimaryRed lg:border-textprimarywhite border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex lg:block">
                <Image
                  src={cloudsecurity}
                  alt="cloudsecurity"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 ml-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image src={cloudsecurity} alt="cloudsecurity" className="" />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-4 sm:ml-10 lg:ml-6 lg:mt-6 mt-[45px] sm:mt-20 text-textDarkBlue">
                  Cloud Security
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                Data security is at the core of our cloud enablement services.
                We employ industry-leading practices like data encryption and
                multi-factor authentication to ensure the highest level of
                protection for your valuable data. Our team continuously
                monitors and mitigates risks and implements proactive measures
                to thwart unauthorized access. With us, you can confidently
                embrace the cloud, while maintaining the highest security
                standards.
              </p>
            </div>

            <div className="lg:shadow-[4px_10px_15px_8px_rgba(0,0,0,0.15)] bg-textprimarywhite rounded-[36px] lg:w-[46%] w-[100%] border-bgPrimaryRed lg:border-textprimarywhite mt-14 lg:mt-[0px] border-transparent border-2 hover:border-bgPrimaryRed transition-all duration-700">
              <div className="flex  lg:block">
                <Image
                  src={hybirdsecurity}
                  alt="hybirdsecurity"
                  className="block sm:hidden mt-[35px] ml-[20px] w-[40px] h-[40px] sm:w-[60px] sm:h-[60px]"
                />
                <div className="shadow-[0px_5px_5px_4px_rgba(0,0,0,0.10)] bg-textprimarywhite rounded-3xl mt-9 ml-9 p-6 lg:w-[90px] hidden sm:block">
                  <Image src={hybirdsecurity} alt="hybirdsecurity" />
                </div>
                <h5 className="text-base sm:text-2xl font-semibold ml-3 sm:ml-10 lg:ml-6 lg:mt-6 mt-12 sm:mt-20 text-textDarkBlue">
                  Hybrid Security
                </h5>
              </div>
              <hr className="h-[6px] lg:my-3 my-6 bg-bgPrimaryRed ml-6 rounded-xl border-0 lg:w-[65%] w-[85%]" />
              <p className="font-normal text-base mx-6 mb-10 sm:mb-20">
                We understand how crucial it is for businesses to be agile and
                scalable in today&apos;s dynamic environment. That&apos;s why
                our hybrid cloud services bring together the best of both worlds
                — the flexibility of public clouds and the security of private
                clouds. Our hybrid cloud solutions enable our clients to
                effortlessly scale their operations, adapt to evolving business
                demands, and foster a culture of innovation. We also implement
                advanced measures to ensure that sensitive data stays secure and
                confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-[120px]">
        <div className="lg:bg-textDarkBlue bg-textDarkBlue pb-10">
          <div className="container m-auto w-[90%]">
            <h1 className="font-semibold md:mx-8 text-xl px-4 pt-6 md:text-[36px] md:leading-[50px] lg:leading-[55px] xl:leading-none text-center text-textprimarywhite md:py-16 lg:w-[75%] lg:mx-auto xl:w-full">
              Enhance Your Operational Efficiency With{" "}
              <span className="text-bgPrimaryRed">Our Cloud Services</span>
            </h1>

            <div className="lg:flex w-[100%] lg:justify-between mt-10 md:mt-0">
              <div className="flex lg:w-[30%] lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  01
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[69%]">
                  <h3 className="text-[18px]  sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Proven Expertise
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    All our cloud engineers have enterprise-level technical
                    expertise with MCSEs and CCAs and have certified data center
                    management experience
                  </p>
                </div>
              </div>

              <div className="flex lg:w-[30%] lg:mx-6 lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  02
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[65%] 2xl:w-[55%]">
                  <h3 className="text-[18px]  sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Comprehensive Solutions
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We understand the complexities of the cloud environment and
                    take care of everything required for end-to-end cloud
                    solutions. This includes designing, implementing, and
                    managing customized cloud solutions.
                  </p>
                </div>
              </div>

              <div className="flex lg:w-[30%] lg:m-0 mt-5 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  03
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[11%]" />
                <div className="w-full lg:w-[53%]">
                  <h3 className="text-[18px]  sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Strategic Partnerships
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    Pirai Infotech has established strategic alliances in the
                    cloud space that enable us to leverage the latest
                    technologies and deliver exceptional value to clients.
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
                  <h3 className="text-[18px]  sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Security and Compliance
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We implement robust security measures, follow industry best
                    practices, and ensure regulatory compliance to safeguard
                    data.
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lg:w-[30%] lg:mx-6 lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  05
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[65%]">
                  <h3 className="text-[18px]  sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Continuous Innovation
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We actively explore emerging technologies and industry
                    trends. This enables us to offer cutting-edge cloud
                    solutions that consistently drive digital transformation for
                    our clients.
                  </p>
                </div>
              </div>

              <div className="flex mt-5 lg:w-[30%] lg:m-0 mx-3">
                <h5 className="font-semibold text-lg sm:text-2xl md:text-4xl text-textprimarywhite lg:w-[10%]">
                  06
                </h5>
                <hr className="h-[5px] md:w-[8%] md:mx-[27px] bg-bgPrimaryRed border-0 mt-[12px] w-[15px] mx-[15px] sm:mt-[15px] sm:w-[20px] md:mt-5 lg:w-[12%]" />
                <div className="w-full lg:w-[58%] 2xl:w-[50%]">
                  <h3 className="text-[18px]  sm:text-2xl md:mt-1 md:text-[28px] font-semibold text-bgPrimaryRed mb-3">
                    Customer-Centric Approach
                  </h3>
                  <p className="text-[14px] sm:text-lg md:text-xl font-normal text-textprimarywhite">
                    We listen to clients’ pain points and tailor our cloud
                    solutions to align with their business objectives. We
                    deliver personalized, responsive, and attentive service that
                    exceeds expectations.{" "}
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
            OUR PROJECTS
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
        <div className="container m-auto ">
          <h1 className="text-2xl lg:text-[42px] font-bold text-center text-textDarkBlue mb-[24px]">
            Our Tech <span className="text-bgPrimaryRed">Stack</span>
          </h1>

          <div className="flex justify-between items-center flex-wrap w-[90%] mx-auto ">
            <div className="w-[35%] sm:w-[27%] lg:w-[22%]  p-1 md:px-10">
              <Image src={googlecloud} alt="googlecloud" className="" />
            </div>
            <div className="w-[35%] sm:w-[27%] lg:w-[20%] p-1 md:px-10 ">
              <Image src={aws} alt="aws" className=" " />
            </div>
            <div className="w-[35%] sm:w-[27%] lg:w-[20%] p-1 md:px-10">
              <Image src={azure} alt="azure" className="" />
            </div>

            <div className="w-[35%] sm:w-[27%] lg:w-[20%] p-1 pr-8 md:px-10">
              <Image src={digitalocean} alt="digitalocean" className="" />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[20%] p-2 md:px-10">
              <Image src={alibabacloud} alt="alibabacloud" className=" " />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[22%] p-2 md:px-10">
              <Image src={jenkins} alt="digitalocean" className="" />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[22%] p-2 md:px-10">
              <Image src={chef} alt="googlecloud" className="" />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[22%] p-2 md:px-10">
              <Image src={elasticserch} alt="azure" className="" />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[22%] p-2 md:px-10">
              <Image src={grafana} alt="aws" className="md:py-[20px]" />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[22%] p-2 md:px-10">
              <Image
                src={prometheus}
                alt="digitalocean"
                className="md:py-[20px]"
              />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[22%] p-2 md:px-10">
              <Image src={kibana} alt="googlecloud" className="md:py-[20px]" />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[22%] p-2 md:px-10">
              <Image src={logstash} alt="azure" className="md:py-[20px]" />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[22%] p-2 sm:px-5 md:px-10">
              <Image src={nagios} alt="aws" className="md:py-[20px]" />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[22%] p-2 sm:px-5 md:px-10">
              <Image src={ionos} alt="digitalocean" className="md:py-[20px]" />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[20%] p-2 sm:px-5 md:px-10">
              <Image
                src={sonarqube}
                alt="googlecloud"
                className="md:py-[20px]"
              />
            </div>

            <div className="w-[40%] sm:w-[27%] lg:w-[20%] p-2 md:px-10">
              <Image src={terraform} alt="azure" className="md:py-[20px]" />
            </div>

            <div className="flex  items-center  justify-between sm:ml-24 mx-auto md:ml-28 lg:ml-auto sm:w-[50%] lg:w-[50%] lg:mt-10">
              <div className="w-[40%] sm:w-[35%] md:w-[30%]  lg:w-[50%] flex justify-center ">
                <Image src={scaleway} alt="scaleway" className="" />
              </div>

              <div className="w-[40%] sm:w-[35%] md:w-[30%] lg:w-[50%] flex lg:justify-center ">
                <Image src={zabbix} alt="aws" className="" />
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
