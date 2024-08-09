import Image from "next/image";
import smenu from "../public/logos/smenu.svg";
import Dockket from "../public/logos/dockket.svg";
import caresoft from "../public/logos/caresoft.svg";
import digi from "../public/logos/digi.svg";
import blueendeavour from "../public/logos/blue-endeavour.svg";
import cadonix from "../public/logos/cadonix.svg";
import React, { useState } from "react";
import midf from "../public/logos/midf.svg";
import cloudmigration from "../public/logos/cloudmigration.svg";
import Sodexo from "../public/logos/Sodexo.svg";
import Daemon from "../public/logos/Daemon.svg";

const Card = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const boxStyles = {
    container: "container m-auto text-center md:text-left ",
    buttonContainer: "md:mb-20 mb-[48px]",
    filterButton:
      "inline-block md:text-[24px] px-3 py-2   lg:mt-[40px] mt-[12px] md:mr-8 mr-2 sm:text-[15px] text-[9px]  !font-semibold text-[#031555] bg-white border-2 border-[#031555] rounded-[36px] cursor-pointer ",
    activeButton:
      "delay-100 !bg-[#031555] font-semibold !text-textprimarywhite",
    boxContainer: "flex overflow-x-scroll scrollbar p-2",
    box: "flex-none md:w-[580px] w-[390px] md:h-[280px] h-[220px] mr-5 py-2 rounded-[12px] delay-500 snap-align-start text-left bg-white shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)]",
  };

  const boxes = [
    {
      category: "cloud",
      content: (
        <div>
          <div className=" flex items-center rounded-[12px] bg-textprimarywhite">
            <Image
              src={caresoft}
              alt="caresoft"
              className="md:my-[20px] ml-3 md:h-[160px] md:w-[160px] h-[60px] w-[60px]"
            />

            <div className="md:mt-3 mr-3 ml-6 ">
              <h1 className="lg:text-xl text-[16px] font-semibold">
                Caresoft Global Private Limited
              </h1>
              <h4 className="font-medium text-[10px] md:text-[14px] md:mt-2">
                Cloud Migration to AWS
              </h4>
              <p className="font-normal text-[10px] md:text-[14px] hidden md:block mt-2 ">
                Pirai Infotech provided a roadmap for migrating workloads to AWS
                and conducted a proof of concept (POC) to validate our
                architecture. We successfully performed a Lift & Shift migration
                and utilized AWS resources, including Lambda, EC2, ELB, EBS,
                RDS, Route53, SES, ACM, ASG, and LC to achieve BCP and DR with
                defined RTO and RPO.
              </p>
            </div>
          </div>
          <p className="font-normal text-[10px] md:text-[14px] md:hidden block px-[16px] ">
                Pirai Infotech provided a roadmap for migrating workloads to AWS
                and conducted a proof of concept (POC) to validate our
                architecture. We successfully performed a Lift & Shift migration
                and utilized AWS resources, including Lambda, EC2, ELB, EBS,
                RDS, Route53, SES, ACM, ASG, and LC to achieve BCP and DR with
                defined RTO and RPO.
              </p>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div>
        <div className=" flex items-center rounded-[12px] bg-textprimarywhite">
          <Image
            src={digi}
            alt="digi"
            className="my-[20px] ml-3 md:h-[160px] md:w-[160px] h-[60px] w-[60px]"
          />
          <div className="md:mt-3 mr-3 ml-6 -mt-[40px]">
            <h1 className="lg:text-xl text-[16px] font-semibold">
              Digi Telecommunications
            </h1>
            <h4 className="font-medium text-[10px] md:text-[14px]  mt-2">
              CRM Platform in AWS
            </h4>
            <p className="font-normal text-[10px] md:text-[14px] hidden md:block mt-2 ">
              Digi needed a secure and scalable platform on AWS. Pirai Infotech
              designed and implemented a robust, secure, automated, and scalable
              infrastructure for hosting their CRM application. As the
              end-to-end platform owner on AWS, we host the CRM application.
            </p>
          </div>
        </div>
        <p className="font-normal text-[10px] md:text-[14px] block md:hidden px-[16px] -mt-[18px] ">
              Digi needed a secure and scalable platform on AWS. Pirai Infotech
              designed and implemented a robust, secure, automated, and scalable
              infrastructure for hosting their CRM application. As the
              end-to-end platform owner on AWS, we host the CRM application.
            </p>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div>
        <div className=" flex items-center rounded-[12px] bg-textprimarywhite">
          <Image
            src={blueendeavour}
            alt="blueendeavour"
            className="my-[15px] ml-3 md:h-[160px] md:w-[160px] h-[60px] w-[60px]"
          />
          <div className="md:mt-3 mr-3 ml-6 -mt-[25px]">
            <h1 className="lg:text-xl text-[16px] font-semibold">
              Blue Endeavour Ltd
            </h1>
            <h4 className="font-medium text-[10px] md:text-[14px]  mt-2">
              Hybrid Cloud Development
            </h4>
            <p className="font-normal text-[10px] md:text-[14px] hidden md:block mt-2 ">
              Pirai Infotech migrated workloads to AWS while integrating Domain
              Controllers in the VMware environment, bridging on-premise and
              cloud infrastructure.
            </p>
          </div>
        </div>
        <p className="font-normal text-[10px] md:text-[14px] md:hidden block px-[16px] -mt-[12px]">
              Pirai Infotech migrated workloads to AWS while integrating Domain
              Controllers in the VMware environment, bridging on-premise and
              cloud infrastructure.
            </p>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div>
        <div className=" flex items-center rounded-[12px] bg-textprimarywhite">
          <Image
            src={cadonix}
            alt="cadonix"
            className="my-[20px] ml-3 md:h-[160px] md:w-[160px] h-[60px] w-[60px]"
          />
          <div className="md:mt-3 mr-3 ml-6  -mt-[13px]">
            <h1 className="lg:text-xl text-[16px] font-semibold">
              Cadonix Software Development
            </h1>
            <h4 className="font-medium text-[10px] md:text-[14px]  mt-2">
              Multi Cloud Deployment
            </h4>
            <p className="font-normal text-[10px] md:text-[14px] hidden md:block  mt-2 ">
              We proposed a hybrid network leveraging Alibaba Cloud and AWS,
              with AWS serving as the source environment for the application. By
              utilizing Alibaba&apos;s CEN service, we established a reverse
              proxy network that connects back to Alibaba Cloud in Frankfurt.
              Additionally, we implemented a reverse proxy in Frankfurt to route
              traffic to AWS in Ireland, where the application is hosted.
            </p>
          </div>
        </div>
        <p className="font-normal text-[10px] md:text-[14px] block md:hidden px-[16px] -mt-[12px] ">
              We proposed a hybrid network leveraging Alibaba Cloud and AWS,
              with AWS serving as the source environment for the application. By
              utilizing Alibaba&apos;s CEN service, we established a reverse
              proxy network that connects back to Alibaba Cloud in Frankfurt.
              Additionally, we implemented a reverse proxy in Frankfurt to route
              traffic to AWS in Ireland, where the application is hosted.
            </p>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div>
        <div className=" flex items-center rounded-[12px] bg-textprimarywhite">
          <Image
            src={midf}
            alt="midf"
            className="my-[20px] ml-3 md:h-[160px] md:w-[160px] h-[60px] w-[60px]"
          />
          <div className="md:mt-3 mr-3 ml-6 -mt-[25px]">
            <h1 className="lg:text-xl text-[16px] font-semibold">
              MIDF Financial Services
            </h1>
            <h4 className="font-medium text-[10px] md:text-[14px]  mt-2">
              Monitoring Stack Implementation
            </h4>
            <p className="font-normal text-[10px] md:text-[14px] hidden md:block  mt-2 ">
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
        <p className="font-normal text-[10px] md:text-[14px] block md:hidden px-[16px] -mt-[12px] ">
              We implemented a comprehensive monitoring solution using
              Elasticsearch, Logstash, and Kibana to monitor all components of
              their data store solution. Using the Elastic Stack, they can
              monitor CPU and memory usage, logs, error messages, and more from
              all applications and virtual machines. We also created
              configurable and customized dashboards for machines and drill-down
              dashboards for applications.
            </p>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div>
        <div className=" flex items-center rounded-[12px] bg-textprimarywhite">
          <Image
            src={cloudmigration}
            alt="cloudmigration"
            className="my-[20px] ml-3 md:h-[160px] md:w-[160px] h-[60px] w-[60px]"
          />
          <div className="md:mt-2 mr-3 ml-6 -mt-[20px] ">
            <h1 className="lg:text-xl text-[16px] font-semibold">
              Contract IO Technology,
              <br /> Information and Internet
            </h1>
            <h4 className="font-medium text-[10px] md:text-[14px]  ">
              Cloud Migration & Application Containerization
            </h4>
            <p className="font-normal text-[10px] md:text-[14px] hidden md:block  ">
              Pirai Infotech migrated the workload from GCP to Azure and
              containerized their application using Docker. We utilized
              Terraform for Infrastructure as Code implementation. The complete
              stack was automated using CI/CD (Jenkins). Furthermore, we
              implemented SonarQube to enhance code quality.
            </p>
          </div>
        </div>
        <p className="font-normal text-[10px] md:text-[14px]  px-[16px] block md:hidden -mt-[12px]">
              Pirai Infotech migrated the workload from GCP to Azure and
              containerized their application using Docker. We utilized
              Terraform for Infrastructure as Code implementation. The complete
              stack was automated using CI/CD (Jenkins). Furthermore, we
              implemented SonarQube to enhance code quality.
            </p>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div>
        <div className=" flex items-center rounded-[12px] bg-textprimarywhite">
          <Image
            src={Sodexo}
            alt="Sodexo"
            className="my-[20px] ml-3 md:h-[160px] md:w-[160px] h-[60px] w-[60px]"
          />
          <div className=" md:mt-3 mr-3 ml-6 -mt-[25px] ">
            <h1 className="lg:text-xl text-[16px] font-semibold">Sodexo</h1>
            <h4 className="font-medium text-[10px] md:text-[14px]  mt-2">
              Micro-services Transformation & Migration to Azure
            </h4>
            <p className="font-normal text-[10px] md:text-[14px] hidden md:block  mt-2 ">
              We proposed a scalable microservices architecture using Azure AKS,
              enabling on-demand scaling of individual modules without impacting
              the ecosystem. We migrated the monolithic application to Azure
              cloud to leverage multi-geography deployment and dynamic scaling
              through Azure Kubernetes Service (AKS)
            </p>
          </div>
        </div>
        <p className="font-normal text-[10px] md:text-[14px]  block md:hidden px-[16px] -mt-[12px] ">
              We proposed a scalable microservices architecture using Azure AKS,
              enabling on-demand scaling of individual modules without impacting
              the ecosystem. We migrated the monolithic application to Azure
              cloud to leverage multi-geography deployment and dynamic scaling
              through Azure Kubernetes Service (AKS)
            </p>
        </div>
      ),
    },
    {
      category: "cloud",
      content: (
        <div>
        <div className=" flex items-center rounded-[12px] bg-textprimarywhite">
          <Image
            src={Daemon}
            alt="Daemon"
            className="my-[20px] ml-3 md:h-[160px] md:w-[160px] h-[60px] w-[60px]"
          />
          <div className="md:mt-3 mr-3 ml-6 -mt-[20px] ">
            <h1 className="lg:text-xl text-[16px] font-semibold">
              Daemon Information Technology <br />& Services
            </h1>
            <h4 className="font-medium text-[10px] md:text-[14px]  mt-2">
              DevOps Transformation
            </h4>
            <p className="font-normal text-[10px] md:text-[14px] hidden md:block mt-2 ">
              Daemon sought to manage the AWS workload and automate cloud
              deployment and pipelines for business application deployment.
              Pirai Infotech utilized Terraform for Infrastructure as Code and
              Chef for server configuration management in AWS. We implemented
              CI/CD using Jenkins and Docker for application deployment.
            </p>
          </div>
        </div>
        <p className="font-normal text-[10px] md:text-[14px] px-[16px] block md:hidden -mt-[12px] ">
              Daemon sought to manage the AWS workload and automate cloud
              deployment and pipelines for business application deployment.
              Pirai Infotech utilized Terraform for Infrastructure as Code and
              Chef for server configuration management in AWS. We implemented
              CI/CD using Jenkins and Docker for application deployment.
            </p>
        </div>
      ),
    },
    {
      category: "application",
      content: (
        <div>
        <div className=" flex items-center  rounded-[12px] bg-textprimarywhite">
          <Image
            src={smenu}
            alt="smenu"
            className="my-[10px] w- ml-3 md:h-[160px] md:w-[160px] h-[60px] w-[60px]"
          />
          <div className="md:mt-3 mr-3 ml-6 mt-2 ">
            <h1 className="lg:text-xl text-[16px] font-semibold">
              sMenu | Zero contact food <br /> ordering system
            </h1>
            <h4 className="font-medium text-[10px] md:text-[14px]  md:mt-2 mt-[3px]">
              Hybrid Mobile Application
            </h4>
            <p className="font-normal text-[10px] md:text-[14px]  md:mt-2 mt-[4px] ">
              Developed a hybrid food ordering mobile as well as web application
              named sMenu using technology stack tools with infrastructure
              platform Digital Ocean and AWS.
            </p>
          </div>
        </div>
        <p className="font-normal text-[10px] md:text-[14px]  px-[16px] block md:hidden mt-3">
              Developed a hybrid food ordering mobile as well as web application
              named sMenu using technology stack tools with infrastructure
              platform Digital Ocean and AWS.
            </p>
        </div>
      ),
    },
    {
      category: "application",
      content: (
        <div>
        <div className=" flex items-center rounded-[12px] bg-textprimarywhite">
          <Image
            src={Dockket}
            alt="Dockket"
            className="my-[20px] md:h-[160px] md:w-[160px] h-[60px] w-[60px] ml-3"
          />
          <div className="mt-3 mx-6">
            <h1 className="lg:text-xl text-[16px] font-semibold">
              DocKKet | Mobile Application to digitalize documents
            </h1>
            <h4 className="font-medium text-[10px] md:text-[14px]  mt-2">
              Enterprise Mobile Application
            </h4>
            <p className="font-normal text-[10px] md:text-[14px] hidden md:block mt-2">
              Developed an innovative hybrid business mobile application Dockket
              using cutting edge technology based on cloud architecture to
              manage huge amount of documents and digitalize sales and purchase
              documents.
            </p>
          </div>
        </div>
        <p className="font-normal text-[10px] md:text-[14px] block md:hidden px-[16px] mt-2">
              Developed an innovative hybrid business mobile application Dockket
              using cutting edge technology based on cloud architecture to
              manage huge amount of documents and digitalize sales and purchase
              documents.
            </p>
        </div>
      ),
    },
  ];

  const filteredBoxes =
    activeFilter === "all"
      ? boxes
      : boxes.filter((box) => box.category === activeFilter);

  return (
    <div className="container m-auto  w-[90%]">
      <div className="">
        <h2 className="text-[24px] text-center md:text-left md:text-[42px] font-semibold text-textDarkBlue MD:mt-[90px] mt-[30px]">
          OUR <span className="text-bgPrimaryRed">PROJECTS</span>
        </h2>
      </div>

      <div className={boxStyles.container}>
        <div className={boxStyles.buttonContainer}>
          <button
            className={`${boxStyles.filterButton} ${
              activeFilter === "all" ? boxStyles.activeButton : ""
            }`}
            onClick={() => handleFilterClick("all")}
          >
            All
          </button>
          <button
            className={`${boxStyles.filterButton} ${
              activeFilter === "application" ? boxStyles.activeButton : ""
            }`}
            onClick={() => handleFilterClick("application")}
          >
            Application Services
          </button>
          <button
            className={`${boxStyles.filterButton} ${
              activeFilter === "cloud" ? boxStyles.activeButton : ""
            }`}
            onClick={() => handleFilterClick("cloud")}
          >
            Cloud Enablement
          </button>
        </div>
        <div className={boxStyles.boxContainer}>
          {filteredBoxes.map((box, index) => (
            <div key={index} className={boxStyles.box}>
              {box.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
