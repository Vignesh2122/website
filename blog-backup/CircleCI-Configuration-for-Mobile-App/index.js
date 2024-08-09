import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import diagram1 from "../../public/blog1/diagram1.png";
import diagram2 from "../../public/blog1/diagram2.jpg";
import blogarrow from "../../public/blogs/blog-arrow.svg";
import dot from "../../public/career/career-dot.svg"
import Link from "next/link";
import Head from "next/head";

export default function Blogs() {

    const contentData = [
        {
            id: 1,
            category: 'Cloud',
            name: 'Implementing-Azure-FileShare-for-VMScaleSet',
            timeLimit: "Published on - December 2023",
            image3: blogarrow,
            heading: "Implementing Azure File Share for VM Scale Set (Auto-Scaling)",
            content: "At Pirai we had a client request to implement auto scaling for a project that relied on standalone Virtual Machines (VMs) to store files locally, in order to accommodate the increasing traffic....",
            title: "Learn more"

        },
        {
            id: 2,
            category: 'Infra',
            name: 'Secondary-Network-Interface-in-a-RHEL-Instance',
            timeLimit: "Published on - November 2023",
            image3: blogarrow,
            heading: "Secondary Network Interface in a RHEL Instance",
            content: "A secondary network interface is an additional network interface card (NIC) that is added to a computer system or server to provide additional network connectivity....",
            title: "Learn more"

        },
        {
            id: 3,
            category: 'Flutter',
            name: 'MVC-DesignPattern-to-Organize-FlutterCode',
            timeLimit: "Published on - November 2023",
            image3: blogarrow,
            heading: "MVC Design Pattern to Organize Flutter Code",
            subHeading: "Enhancing User Experience and Driving Business Success",
            content: "Having a clean and maintainable codebase is most essential feature of a successful long term project. We at Pirai see our codebase as a reflection of our value. So we always prioritize having a clean and readable code structure....",
            title: "Learn more"

        },
    ];
    return (
        <>
            <Head>
                <title>CircleCI Configuration for Mobile App</title>
                <link rel="icon" href="/title.png" type="image/png" />
            </Head>
            <Header />
            <div className='container mx-auto w-[90%] lg:w-full xl:w-[75%]'>
                {/* ----------------------------Header Section ------ */}
                <section className="lg:mt-[60px]">
                    <div className="lg:pt-[60px] md:flex w-[100%]">
                        <div className="w-full">
                            <h4 className="font-semibold lg:text-4xl lg:mb-3 text-xs sm:text-lg text-textDarkBlue my-1">CircleCI Configuration for Mobile App
                            </h4>
                            <div className="flex justify-between mb-3 lg:mb-5">
                                <h6 className=" text-textgray text-[10px] sm:text-base lg:text-2xl font-medium">Published on - December, 2023</h6>
                                <h5 className="font-semibold text-[10px] sm:text-base text-bgPrimaryRed lg:text-2xl">Mobile</h5>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Executive Summary
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">In today&apos;s rapidly changing business world, where competition is fierce, Pirai aims to deliver high-quality mobile apps quickly and efficiently to meet customer demands, along with high business value. This way we always stay ahead of the competition. Similar to any other type of software developments, mobile application development also need CI/CD to helps developers automate the entire software delivery process, from code development to deployment, testing, and release.</p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Problem Statement
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-base text-textBlack mt-2">One of Pirai&apos;s client wanted to develop a mobile application to complement their Website. It is basically an accounting application that stores and handles product price, discount rates, inventories, customer account and lot more. This app has to handle critical and analytical data. Pirai took extra steps in choosing the right tools and technologies to make the development and deployment smooth.</p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-3">Mobile applications are developed with platform specific tools, languages are highly customised. These applications are installed directly to user’s device and they are optimised for small screens and touch based interfaces. Few factors like rapid release cycles, consistent quality, early bug detection and improved collaboration are most important to be considered while developing the application. CI/CD practices helped Pirai to cover all such critical factors and helped the team to improve efficiency, quality, and collaboration in the development process.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Solution
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">When Pirai decided to practice CI/CD for mobile application, choosing the right CI/CD tool that suites the project requirement was a difficult task as there were  many options available in the market. A study about different tools available is done and team choose CircleCI for mobile app development.</p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack my-3">CircleCI is a cloud-based CI/CD tool that can help development teams accelerate their workflows and deliver high-quality software applications with greater speed and reliability.
                            </p>
                            <Image
                                src={diagram1}
                                alt="blogdesign"
                                className="w-full rounded-md"
                            />
                            <Image
                                src={diagram2}
                                alt="blogdesign"
                                className="w-full mt-2 rounded-md"
                            />
                            <div className="leading-none flex mt-2">
                                <p className="text-textBlack font-medium text-[10px] lg:text-base">Image:</p>
                                <Link className="text-[#008CD1] ml-1 text-[10px] lg:text-base hover:text-textDarkBlue" href="https://circleci.com/continuous-integration/#continuous-integration-ci-vs-continuous-deployment-cd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://circleci.com/continuous-integration/#continuous-integration-ci-vs-continuous-deployment-cd
                                </Link>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Why CircleCI?</h6>
                            <div className="">
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Easy to get started.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Integrates widely with cloud-native or multi-platform tools.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Offers end-to-end automation of the build and test process.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Facilitates continuous integration process.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Enables fast feedbacks.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Scalability
                                    </p>
                                </div>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">CircleCI features
                            </h6>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Parallelism<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Run parallel tests to speeds up the testing process and allows for faster feedback on code changes.</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Customizable Workflows<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Customizable workflow engine that allows developers to create complex build, test, and deployment pipelines</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Security and Compliance<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Wide range of security and compliance features, including encrypted build artifacts and support for compliance frameworks such as SOC 2 and GDPR</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Resource classes<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Allows to optimize CPU and RAM resources for each job</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Orbs<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Reusable packages of YAML configuration that condense repeated pieces of config into single lines of code.</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Matrix jobs<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Allows to run a parameterized job multiple times with different arguments.</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Parameters <span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Pipeline variables, environment variables and contexts are parameters that allow users to store and reuse data and to protect sensitive information.</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Approvals <span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Workflows can be programmed to wait for manual approval of a job before moving on.</span>
                            </p>
                            <h6 className="font-semibold text-justify lg:text-lg text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Best practices to benefit more
                            </h6>
                            <p className="font-medium text-justify lg:text-xl text-[10px] sm:text-base text-textDarkBlue mt-2">Listing below few best practices of Pirai:
                            </p>
                            <div className="ml-3">
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Plan the build process prior and repeat them in configuration file.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Split test jobs based on time or functionality.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Understand the resource needed and use parallelism to maximize testing efficiency.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Make use of Orbs libraries, which provides options to add many tools.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Enables fast feedbacks.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Caching dependencies and reuse data.
                                    </p>
                                </div>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Outcome
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Below are few benefits that Pirai experienced after configuring CircleCI:
                            </p>
                            <div className="ml-3">
                                <div className="flex items-start mt-3">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">CircleCI provides options to troubleshoot via SSH and helps in identifying and resolving the build issues quickly.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">It allows the .yml files to run parallelly
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">It allows caching with simple keys and the data could be reused in workflow.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">CircleCI allows developers to automate the build, test, and deployment process of mobile applications, which improves speed and efficiency of development process.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">It supports wide range of programming languages and cross-platforms, including Android and iOS mobile applications, making it easy to build, test, and deploy applications for multiple platforms.
                                    </p>
                                </div>
                                <div className="flex items-start mt-2">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">CircleCI helps in meeting scalability based on needs and complexity of application.
                                    </p>
                                </div>
                                <div className="flex items-start my-2 mb-4">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                    />
                                    <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">It supports wide range of testing options to ensure quality and reliability of mobile application.
                                    </p>
                                </div>
                                <div className="leading-none flex mt-2">
                                    <p className="text-textBlack font-medium text-[10px] lg:text-base">Source:</p>
                                    <Link className="text-[#008CD1] ml-1 text-[10px] lg:text-base hover:text-textDarkBlue" href="https://circleci.com/blog/what-is-a-ci-cd-pipeline/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://circleci.com/blog/what-is-a-ci-cd-pipeline/
                                    </Link>
                                </div>
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