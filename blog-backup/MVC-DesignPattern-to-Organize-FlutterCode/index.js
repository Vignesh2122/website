import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import blogarrow from "../../public/blogs/blog-arrow.svg";
import Link from "next/link";
import Head from "next/head";
import diagram from "../../public/blog3/blog3-diagram.svg"
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
                <title>MVC Design Pattern to Organize Flutter Code</title>
                <link rel="icon" href="/title.png" type="image/png" />
            </Head>
            <Header />
            <div className='container mx-auto w-[90%] lg:w-full xl:w-[75%]'>
                {/* ----------------------------Header Section ------ */}
                <section className="lg:mt-[60px]">
                    <div className="lg:pt-[60px] md:flex w-[100%]">
                        <div className="w-full">
                        <h4 className="font-semibold lg:text-4xl lg:mb-3 text-xs sm:text-lg text-textDarkBlue my-1">MVC Design Pattern to Organize Flutter Code
                            </h4>
                            <div className="flex justify-between mb-3 lg:mb-5">
                            <h6 className="text-textgray text-[10px] sm:text-base lg:text-2xl font-medium">Published on - November, 2023</h6>
                            <h5 className="font-semibold text-[10px] sm:text-base text-bgPrimaryRed lg:text-2xl">Flutter</h5>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-4 lg:mt-8">Executive Summary</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Having a clean and maintainable codebase is most essential feature of a successful long term project. We at Pirai see our codebase as a reflection of our value. So we always prioritize having a clean and readable code structure. This way our codes are easily readable and scalable. Debugging for any fixes takes less time. Code reusability is another major advantage of having a clean codebase.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Problem Statement:
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Website developments have moved from simple HTML pages to complex applications over last few years. Also the need for cross-platform developments raise day by day. With this functionality developers could deploy codes to different platforms such as iOS, Android and Web with a single codebase. Managing the codebase for such complex applications and making development easy was a difficult task.</p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-3">Also, all the developed code should be future-proofed, so that any new developer could understand the programming logic easily. Few other risks we observed are code duplication, reduced scalability, hard to test and they are found to link directly with increased cost and reduced code quality.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Solution
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">We use Flutter for a complex application because of it cross-platform capabilities, fast development, high performance and customizable UI. To manage, maintain and scale up with our flutter code, we use Model-View-Controller (MVC) design pattern. Design pattern is some solutions or best practices achieved by expertise for a specific solution. These solutions are used to avoid same kind of flaws.</p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-3">There are lot other frameworks like Model-View-View-Model (MVVM), Model-View-Presenter (MVP), Model-View-Intent (MVI), Flux and few more. Based on the application and development team’s choice we decided to go with MVC.
                            </p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-3">Before we move on to concepts of MVC, we should have an understanding of difference between a design pattern and software architecture. The table below states the differences.
                            </p>
                            <h6 className="font-semibold lg:text-lg text-[10px] sm:text-sm text-bgPrimaryRed mt-2 md:mt-5">Design Pattern Vs Software Architecture
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Design pattern and software architecture are related topics but not the same.
                            </p>
                            <table className="border-2 border-textDarkGray w-full mt-5">
                                <thead className="text-textBlack border-b-2">
                                    <tr>
                                        <th className="border-r-2 lg:text-xl text-[10px] sm:text-base">Design patterns</th>
                                        <th className="lg:text-xl text-[10px] sm:text-base">Software architecture</th>
                                    </tr>
                                </thead>
                                <tbody className="text-start">
                                    <tr className=" border-b-2">
                                        <td className="border-r-2  text-[10px] sm:text-sm lg:text-base">Best practices or solutions to common problems that are  discovered and documented by experienced developers
                                        </td>
                                        <td className="text-[10px] sm:text-sm lg:text-base">Process of designing and organizing the overall structure of a software system
                                        </td>
                                    </tr>
                                    <tr className="border-b-2">
                                        <td className="border-r-2 text-[10px] sm:text-sm lg:text-base">Specific solutions to specific problems
                                        </td>
                                        <td className="text-[10px] sm:text-sm lg:text-base">Broader framework and vision for the software system
                                        </td>
                                    </tr>
                                    <tr className="">
                                        <td className="border-r-2 text-[10px] sm:text-sm lg:text-base">Help to improve the quality, maintainability, and scalability of software by providing standardized approaches to common problems
                                        </td>
                                        <td className="text-[10px] sm:text-sm lg:text-base">Helps to ensure that it meets the business and technical requirements
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">What is  MVC?
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">MVC (Model-View-Controller) is a widely used design pattern in software developments which separates an entire application into three components that are interconnected together. The main focus of MVC is to separate the interfaces based on functionality, user interface, data management and control. This way the entire application is modularized. Developers can understand the codebase easily and help them to maintain with less mess.
                            </p>
                            <p className="font-semibold text-justify lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">MVC have three components and they are:
                            </p>
                            <div className="flex items-start mt-2 ml-5">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                    />
                                    <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Model
                                    </p>
                                </div>
                                <div className="flex items-start mt-2 ml-5">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                    />
                                    <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">View
                                    </p>
                                </div>
                                <div className="flex items-start mt-2 ml-5">
                                    <Image
                                        src={dot}
                                        alt="dot"
                                        className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                    />
                                    <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Controller
                                    </p>
                                </div>
                                <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Model
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Model represents the application’s data and business logic. It provides interface for accessing and modifying application’s data. The data sources may come from DB, API, JSON etc.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-3 lg:mt-5">View
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">View is responsible for presenting the application’s data to the user.  Basically it is about user interface. It interacts with user to display data and also gets inputs from user.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-3 lg:mt-5">Controller
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Controller is for managing the flow control of the application. It receives the input from user and performs a respective actions in response such as deleting a model or updating the view.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-textDarkBlue mt-2 mb-4">MVC Communication pattern
                            </h6>
                            <Image
                                src={diagram}
                                alt="dot"
                                className=""
                            />
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5 text-center">MVC Communication pattern/flow
                            </h6>
                            <p className="font-medium lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">The workflow of MVC is explained below:
                            </p>
                            <div className="mt-2 ml-5">
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack">1. User interacts with application requesting for an info or for updating a module.
                            </p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack my-2">2. Controller receives the request, interprets the request. It gathers the required info and sends requests to Model.
                            </p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack">3. Model updates the application with change request or gathers requested information.
                            </p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack my-2">4. Controller gets back the response.
                            </p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack">5. View represents the use interface of the application. It retrieves the data from controller and displays to user.
                            </p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">6. User continuous to interact with the application and the cycle repeats.
                            </p>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Outcome
                            </h6>
                            <p className="font-semibold text-justify lg:text-xl text-xs sm:text-base text-textDarkBlue mt-2">Below are few benefits that Pirai experienced after adopting MVC design pattern:
                            </p>
                            <div className="ml-3 lg:ml-6">
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">MVC pattern helps to organize the code making it easier to manage, maintain and scale.
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Separation of concerns<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   This design pattern separates the responsibilities of the application. So managing, displaying and interaction between those two takes place in more formatted terms. It aids in flexibility, reusability and easy to test.
                            </span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Code reusability<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   By separating the application into various components, each module could be reused across different part of the application.
                            </span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Scalability<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Scaling and managing code as the application grow up becomes easy with various distinct components. Also modification becomes easy with the smaller components rather as a complex application as such.</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Testability<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   By separating the application, developers could work independently to test and figure out bugs easily with smaller distinct components.
                            </span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Flexibility<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   MVC allows working in changes on one portion without impacting the other.
                            </span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Parallel development<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Since the complex application is separated to smaller components, changes to each component can be done at same time all together speeds up the time to market factor.</span>
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