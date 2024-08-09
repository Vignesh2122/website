import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import blogarrow from "../../public/blogs/blog-arrow.svg";
import Link from "next/link";
import Head from "next/head";
import diagram1 from "../../public/blog5/diagram1.png"
import dot from "../../public/career/career-dot.svg"

export default function Blogs3() {

    const contentData = [
        {
            id: 1,
            category: 'Mobile',
            name: 'CircleCI-Configuration-for-Mobile-App',
            timeLimit: "Published on - December 2023",
            image3: blogarrow,
            heading: "CircleCI Configuration for Mobile App",
            content: "In today's rapidly changing business world, where competition is fierce, Pirai aims to deliver high-quality mobile apps quickly and efficiently to meet customer demands, along with high business value....",
            title: "Learn more"

        },
        {
            id: 2,
            category: 'Cloud',
            name: 'Implementing-Azure-FileShare-for-VMScaleSet',
            timeLimit: "Published on - December 2023",
            image3: blogarrow,
            heading: "Implementing Azure File Share for VM Scale Set (Auto-Scaling)",
            content: "At Pirai we had a client request to implement auto scaling for a project that relied on standalone Virtual Machines (VMs) to store files locally, in order to accommodate the increasing traffic....",
            title: "Learn more"

        },
        {
            id: 3,
            category: 'Infra',
            name: 'Secondary-Network-Interface-in-a-RHEL-Instance',
            timeLimit: "Published on - November 2023",
            image3: blogarrow,
            heading: "Secondary Network Interface in a RHEL Instance",
            content: "A secondary network interface is an additional network interface card (NIC) that is added to a computer system or server to provide additional network connectivity....",
            title: "Learn more"

        },
    ];
    return (
        <>
            <Head>
                <title>Streamlining Infrastructure with AWS CloudFormation</title>
                <link rel="icon" href="/title.png" type="image/png" />
            </Head>
            <Header />
            <div className='container mx-auto w-[90%] lg:w-full xl:w-[75%]'>
                {/* ----------------------------Header Section ------ */}
                <section className="lg:mt-[60px]">
                    <div className="lg:pt-[60px] md:flex w-[100%]">
                        <div className="w-full">
                            <h4 className="font-semibold lg:text-4xl lg:mb-3 text-xs sm:text-lg text-textDarkBlue my-1">Streamlining Infrastructure with AWS CloudFormation
                            </h4>
                            <div className="flex justify-between mb-3 lg:mb-5">
                                <h6 className="text-textgray text-[10px] sm:text-base lg:text-2xl font-medium">Published on - November, 2023</h6>
                                <h5 className="font-semibold text-[10px] sm:text-base text-bgPrimaryRed lg:text-2xl mb-1 lg:mb-3">Cloud</h5>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-4 lg:mt-8">Executive Summary</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">The process of managing and controlling different services used in the application development lifecycle using a code or a machine readable format is known to be Infrastructure as code (IaC). In this approach, set of IT infrastructure services are defined, deployed, and managed. It involves writing scripts, templates, or configuration files that specify the desired state of the infrastructure, and using tools and frameworks to automate the deployment and management of that infrastructure.
                            </p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">In this case study, we explore how we successfully implemented a cloud infrastructure using AWS CloudFormation. Our client was facing difficulties in managing and scaling its infrastructure, which resulted in prolonged downtime and significant costs. However, with the help of CloudFormation, we were able to automate and streamline the entire infrastructure process, resulting in improved performance, reduced costs, and increased flexibility.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Problem Statement</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Our client had been using traditional on-premise infrastructure to run its business operations. However, as they grew, the infrastructure became increasingly difficult to manage and scale. They had to purchase additional hardware and software licenses, resulting in significant capital expenditure. Moreover, downtime due to system failures and maintenance was impacting the productivity and reputation. Therefore, we decided to migrate to the cloud and chose AWS as their cloud provider.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Solution</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">We decided to use AWS CloudFormation to standardize and automate its infrastructure. CloudFormation is an AWS service that provides a templated infrastructure as code approach to resource management. It allows users to create and manage a collection of related AWS resources in a repeatable and predictable way.
                            </p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Our infrastructure team created templates for each of the client&apos;s applications and services, which included EC2 instances, load balancers, databases, and storage solutions using a JSON or YAML template. They used AWS CloudFormation to provision and manage the resources automatically. The templates were stored in version control, which allowed for easy tracking of changes and collaboration between team members.
                            </p>
                            <h6 className="font-medium lg:text-xl text-xs sm:text-base text-textDarkBlue mt-3">Listing below few AWS services/resources from our template:</h6>
                            <table className="border-2 border-textDarkGray w-full mt-5">
                                <thead className="text-textBlack border-b-2">
                                    <tr>
                                        <th className="border-r-2 lg:text-xl text-[10px] sm:text-base">Resource/Service</th>
                                        <th className="lg:text-xl text-[10px] sm:text-base">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody className="text-start">
                                    <tr className=" border-b-2 text-center">
                                        <td className=" border-r-2 p-2 text-[10px] sm:text-base">EC2 instances
                                        </td>
                                        <td className=" text-[10px]  sm:text-base">Runs containers and leverage security
                                        </td>
                                    </tr>
                                    <tr className=" border-b-2 text-center">
                                        <td className=" border-r-2 p-2 text-[10px] sm:text-base">AWS CodePipeline
                                        </td>
                                        <td className=" text-[10px] sm:text-base">Sets up a CI/CD pipeline
                                        </td>
                                    </tr>
                                    <tr className=" border-b-2 text-center">
                                        <td className=" border-r-2 p-2 text-[10px] sm:text-base">AWS CodeCommit
                                        </td>
                                        <td className=" text-[10px] sm:text-base">Hosts source code
                                        </td>
                                    </tr>
                                    <tr className=" border-b-2 text-center">
                                        <td className=" border-r-2 p-2 text-[10px] sm:text-base">AWS CodeBuild
                                        </td>
                                        <td className=" text-[10px] sm:text-base">Builds and tests the application
                                        </td>
                                    </tr>
                                    <tr className=" border-b-2 text-center">
                                        <td className=" border-r-2 p-2 text-[10px] sm:text-base">AWS CodeDeploy
                                        </td>
                                        <td className=" text-[10px] sm:text-base">Automates deployment process
                                        </td>
                                    </tr>
                                    <tr className=" border-b-2 text-center">
                                        <td className=" border-r-2 p-2 text-[10px] sm:text-base">AWS Elastic Beanstalk
                                        </td>
                                        <td className=" text-[10px] sm:text-base">Deploys application in a managed environment
                                        </td>
                                    </tr>
                                    <tr className=" border-b-2 text-center">
                                        <td className=" border-r-2 p-2 text-[10px] sm:text-base">AWS Lambda
                                        </td>
                                        <td className=" text-[10px] sm:text-base">Deploys applicationas a serverless function
                                        </td>
                                    </tr>
                                    <tr className=" text-center">
                                        <td className=" border-r-2 p-2 text-[10px] sm:text-base">AWS CloudWatch
                                        </td>
                                        <td className=" text-[10px] sm:text-base">Monitors environment and application
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">AWS CloudFormation Architecture
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Here is a sample template we follow from AWS for our deployment process:
                            </p>
                            <div className="flex justify-center">
                                <Image
                                    src={diagram1}
                                    alt="dot"
                                    className="my-2"
                                />
                            </div>
                            <div className="leading-none flex mt-2">
                                <p className="text-textBlack font-medium text-[10px] lg:text-base">Image:</p>
                                <Link className="text-[#008CD1] ml-1 text-[10px] lg:text-base hover:text-textDarkBlue" href="https://aws.amazon.com/blogs/architecture/using-devops-automation-to-deploy-lambda-apis-across-accounts-and-environments/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    https://aws.amazon.com/blogs/architecture/using-devops-automation-to-deploy-lambda-apis-across-accounts-and-environments/
                                </Link>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-textDarkBlue mt-4 lg:mt-8">Why AWS CloudFormation</h6>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">CloudFormation helps to manage multiple AWS resources as a single entity, making it easier to manage and maintain infrastructure over time.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">CloudFormation templates ensures that your infrastructure resources are consistent across different environments (e.g., development, staging, production), reducing the risk of configuration.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">CloudFormation supports scaling resources up or down based on traffic, usage, and other factors, making it easier to respond to changing business needs.
                                </p>
                            </div>

                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Challenges faced</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">We faced several challenges during the migration process.
                            </p>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">The first challenge was the lack of a standardized infrastructure. Each team was using different tools and configurations, which made it challenging to manage and scale the infrastructure.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">The second challenge was the need for a cost-effective solution. We wanted to reduce infrastructure costs while improving performance and scalability.
                                </p>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Outcome / benefits</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Below were few of the benefits that Pirai could experience after adoption of AWS CloudFormation:
                            </p>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Standardization: We now have a standardized infrastructure that was easy to manage and scale.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Cost savings:  We no longer needed to purchase hardware and software licenses, resulting in significant cost savings
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Increased agility: We could now easily deploy new applications and services, which improved its ability to respond to market changes.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Flexibility and scalability: It enables organizations to create and manage resources across multiple AWS accounts and regions, providing flexibility to adapt to changing business needs and scale resources as needed
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Standardization and governance: By defining infrastructure as code, it provides a standardized approach to resource provisioning and management. This approach helps ensure compliance with organizational policies and governance requirements.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* ---------------------------Related Blog ------ */}
            <section className="mt-6 lg:mt-[75px] container mx-auto w-[90%] lg:w-full xl:w-[75%]">
                <h3 className='lg:text-4xl text-xs sm:text-lg font-semibold text-textDarkBlue'>Recent Articles:</h3>
                {contentData?.map((item, index) => (
                    <div className="mt-3 lg:mt-5" key={index}>
                        <Link href={`/${item.name}`}>
                            <div className="flex justify-between items-center">
                                <h4 className="lg:text-xl text-[10px] sm:text-base font-semibold text-bgPrimaryRed">{item.category}</h4>
                                <p className="font-medium text-[8px] sm:text-xs lg:text-base text-textgray">{item.timeLimit}</p>
                            </div>
                            <h5 className="lg:text-2xl text-xs sm:text-lg font-semibold text-textDarkBlue mt-1">{item.heading}</h5>
                            <p className="lg:text-xl text-justify text-[10px] sm:text-base font-normal text-textBlack mt-3">{item.content}</p>
                            <button className="mt-3">
                                <p className="flex items-center text-xs sm:text-base md:text-xl font-semibold text-textgray hover:text-bgPrimaryRed">
                                    {item.title}{" "}
                                    <span className="pl-2  group-hover:pl-3 transition-all">
                                        <Image
                                            src={item.image3}
                                            alt="blogarrow"
                                            className="w-[13px] sm:w-4 md:w-full"
                                        />
                                    </span>
                                </p>
                            </button>
                        </Link>
                    </div>
                ))}
            </section>
            <Form />
            <Footer />
        </>
    )
}