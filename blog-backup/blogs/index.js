import { useState } from 'react';
import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import week1 from "../../public/blogs/week1.svg";
import week2 from "../../public/blogs/week2.svg";
import week3 from "../../public/blogs/week3.svg";
import searchicon from "../../public/blogs/search-icon.svg"
import blogarrow from "../../public/blogs/blog-arrow.svg";
import design1 from "../../public/blogs/design1.svg";
import mobile1 from "../../public/blogs/mobile1.svg";
import rectangle from "../../public/blogs/rectangle.png";
import Link from "next/link";
import Head from "next/head";
import { document } from 'postcss';
import { Input, Space } from 'antd';
const { Search } = Input;
export default function Blogs() {

    const contentData = [
        {
            id: 6,
            name: 'Pirai-AstraML',
            category: 'MLOps',
            timeLimit: "Published on - February 2024",
            image3: blogarrow,
            heading: "Pirai’s AstraML: Leading the Way in MLOps",
            content: "In the ever-evolving landscape of technology, Machine Learning Operations (MLOps) has emerged as a crucial framework for organizations to harness the potential of machine learning models efficiently....",
            title: "Learn more"
        },
        {
            id: 1,
            name: 'CircleCI-Configuration-for-Mobile-App',
            category: 'Mobile',
            timeLimit: "Published on - December 2023",
            image3: blogarrow,
            heading: "CircleCI Configuration for Mobile App",
            content: "In today's rapidly changing business world, where competition is fierce, Pirai aims to deliver high-quality mobile apps quickly and efficiently to meet customer demands, along with high business value....",
            title: "Learn more"
        },
        {
            id: 2,
            name: 'Implementing-Azure-FileShare-for-VMScaleSet',
            category: 'Cloud',
            timeLimit: "Published on - December 2023",
            image3: blogarrow,
            heading: "Implementing Azure File Share for VM Scale Set (Auto-Scaling)",
            content: "At Pirai we had a client request to implement auto scaling for a project that relied on standalone Virtual Machines (VMs) to store files locally, in order to accommodate the increasing traffic....",
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
        {
            id: 4,
            name: 'Secondary-Network-Interface-in-a-RHEL-Instance',
            category: 'Infra',
            timeLimit: "Published on - November 2023",
            image3: blogarrow,
            heading: "Secondary Network Interface in a RHEL Instance",
            content: "A secondary network interface is an additional network interface card (NIC) that is added to a computer system or server to provide additional network connectivity....",
            title: "Learn more"
        },
        {
            id: 5,
            name: 'Streamlining-Infrastructure-with-AWS-CloudFormation',
            category: 'Cloud',
            timeLimit: "Published on - November 2023",
            image3: blogarrow,
            heading: "Streamlining Infrastructure with AWS CloudFormation",
            content: "The process of managing and controlling different services used in the application development lifecycle using a code or a machine readable format is known to be Infrastructure as code (IaC)....",
            title: "Learn more"
        },
    ];

    const [isTechnologyActive, setTechnologyActive] = useState("all");
    const [tempSearchFilter, setTempSearchFilter] = useState('');
    const [activeFilter, setActiveFilter] = useState("all");
    const [searchFilter, setSearchFilter] = useState('');
    const [noResults, setNoResults] = useState(false);

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
        setTechnologyActive(filter)
    };
    const handleChange = (e) => {
        const value = e.target.value;
        setSearchFilter(value);
        setTempSearchFilter(e.target.value)
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchFilter(tempSearchFilter)
    };
    const filteredBoxes = contentData.filter((box) => {
        const { category, heading, subHeading, content, title } = box;
        const trimAndLowerCase = (str) => str.trim().toLowerCase();
        const filterByCategory = activeFilter === "all" || trimAndLowerCase(box.category) === trimAndLowerCase(activeFilter);

        const filterBySearch = searchFilter === "all" || (
            trimAndLowerCase(category).includes(trimAndLowerCase(searchFilter)) ||
            trimAndLowerCase(heading).includes(trimAndLowerCase(searchFilter)) ||
            trimAndLowerCase(content).includes(trimAndLowerCase(searchFilter)) ||
            trimAndLowerCase(title).includes(trimAndLowerCase(searchFilter))
        );
        // Return true if both filters match
        return filterByCategory && filterBySearch;
    });
    const hasResults = filteredBoxes.length > 0;
    const highlightSearchTerm = (text, searchTerm) => {
        if (!searchTerm) {
            return text;
        }

        const regex = new RegExp(`(${searchTerm})`, 'gi');
        return text.split(regex).map((part, index) => (
            regex.test(part) ? <span key={index} className="highlight">{part}</span> : part
        ));
    };
    return (
        <>
            <Head>
                <title>Explore Insights and Updates | Pirai Infotech Blog</title>
                <meta name="description" content="Discover the latest trends, insights, and updates in technology, cloud solutions, quality engineering, and more." />
                <meta name="keywords" content="Technology trends, Insights, Blogs |  Pirai Infotech" />
                <meta charSet="utf-8" />
                <link rel="icon" href="title.png" type="image/png" />
            </Head>
            <Header />
            <div className='px-[28px]'>
                {/* ---------------------------- What are you looking for ------ */}
                <section className="mt-12 lg:pt-[90px]">
                    <div className="flex mt-6 justify-center">
                        <form onSubmit={handleSearch} className='flex'>
                            <div className="relative serach-bar w-[300px] sm:w-[613px]">
                                <Search
                                    className='input-search'
                                    placeholder="What are You Looking for ?"
                                    allowClear
                                    size="large"
                                    onChange={handleChange} value={searchFilter}
                                />
                            </div>
                        </form>
                    </div>
                    <div className='flex mt-6 lg:mt-9 justify-center'>
                        <h5 className='font-semibold text-xs sm:text-base lg:text-2xl text-textDarkBlue mt-2 mr-5 lg:mr-7'>Tags</h5>
                        <div id="filter-buttons" className='flex flex-wrap'>
                            <button className={`border border-textDarkBlue rounded-3xl text-textDarkBlue bg-bgLightWhite px-4 py-1 mt-2 cursor-pointer font-normal text-xs sm:text-base lg:text-xl ${isTechnologyActive === 'all' ? 'bg-bgPrimaryRed text-textWhite border border-none' : ''}`} onClick={() => handleFilterClick('all')}>
                                All
                            </button>
                            <button className={`border border-textDarkBlue rounded-3xl text-textDarkBlue bg-bgLightWhite px-4 py-1 mt-2 cursor-pointer font-normal text-xs sm:text-base lg:text-xl mx-3 ${isTechnologyActive === 'Cloud' ? 'bg-bgPrimaryRed text-textWhite border border-none' : ''}`} onClick={() => handleFilterClick('Cloud')}>
                                Cloud
                            </button>
                            <button className={`border border-textDarkBlue rounded-3xl text-textDarkBlue bg-bgLightWhite px-4 py-1 mt-2 cursor-pointer font-normal text-xs sm:text-base lg:text-xl ${isTechnologyActive === 'Mobile' ? 'bg-bgPrimaryRed text-textWhite border border-none' : ''}`} onClick={() => handleFilterClick('Mobile')}>
                                Mobile
                            </button>
                            <button className={`border border-textDarkBlue rounded-3xl text-textDarkBlue bg-bgLightWhite px-4 py-1 mt-2 cursor-pointer font-normal text-xs sm:text-base lg:text-xl mx-3 ${isTechnologyActive === 'Infra' ? 'bg-bgPrimaryRed text-textWhite border border-none' : ''}`} onClick={() => handleFilterClick('Infra')}>
                                Infra
                            </button>
                            <button className={`border border-textDarkBlue rounded-3xl text-textDarkBlue bg-bgLightWhite px-4 py-1 mt-2 cursor-pointer font-normal text-xs sm:text-base lg:text-xl  ${isTechnologyActive === 'Flutter' ? 'bg-bgPrimaryRed text-textWhite border border-none' : ''}`} onClick={() => handleFilterClick('Flutter')}>
                                Flutter
                            </button>
                            <button className={`border border-textDarkBlue rounded-3xl text-textDarkBlue bg-bgLightWhite px-4 py-1 mt-2 cursor-pointer font-normal text-xs sm:text-base lg:text-xl ml-3 ${isTechnologyActive === 'MLOps' ? 'bg-bgPrimaryRed text-textWhite border border-none' : ''}`} onClick={() => handleFilterClick('MLOps')}>
                                MLOps
                            </button>
                        </div>
                    </div>
                    <div className="md:w-[100%] md:mt-12">
                        {hasResults ? (
                            filteredBoxes?.map((item, index) => (
                                <div className="mt-10 container mx-auto w-[95%] lg:w-[90%]" key={index}>
                                    <Link href={`/${item.name}`}>
                                        <div className="flex justify-between items-center">
                                            <h4 className="lg:text-xl text-[10px] sm:text-base font-semibold text-bgPrimaryRed">{item.category}</h4>
                                            <p className="font-medium text-[8px] sm:text-xs lg:text-base text-textgray">{item.timeLimit}</p>
                                        </div>
                                        <h5 className="lg:text-2xl text-xs sm:text-lg font-semibold text-textDarkBlue mt-1">{highlightSearchTerm(item.heading, searchFilter)}</h5>
                                        <p className="lg:text-xl text-[10px] sm:text-base font-normal text-textBlack mt-3">{highlightSearchTerm(item.content, searchFilter)}</p>
                                        <button className="mt-3">
                                            <p className="flex items-center text-xs sm:text-base md:text-xl font-semibold text-textgray">
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
                            ))
                        ) : (
                            <p className="text-textDarkBlue text-sm sm:text-lg font-semibold lg:text-4xl text-center">No result found</p>
                        )}
                    </div>
                </section>
            </div>
            <Form />
            <Footer />
        </>
    )
}

