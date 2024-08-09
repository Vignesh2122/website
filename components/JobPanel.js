import { React, useState } from 'react';
import vacancy from "../public/career/vacancy-dot.svg"
import clock from "../public/career/career-clock.svg"
import expercence from "../public/career/career-experence.svg"
import location from "../public/career/career-location.svg"
import arrow from "../public/career/career-arrow.svg"
import careerdownarrow from "../public/career/career-downarrow.svg"
import dot from "../public/career/career-dot.svg"
import Image from "next/image";
import { Collapse, theme } from 'antd';

const App = () => {
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
    };
    const [activeDescription, setActiveDescription] = useState({ description1: true, description2: true, description3: true, description4: true, description5: true, });

    const toggleDescription = (key) => {
        setActiveDescription((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const getItems = (panelStyle) => [
        {
            key: '1',
            label: activeDescription.description1 ? (
                <div className="bg-textWhite p-3 lg:p-6 rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] flex justify-between items-center cursor-pointer border border-textWhite hover:border-bgPrimaryRed transition-all duration-700" onClick={() => toggleDescription('description1')}>
                    <div className="">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">UI/UX Designer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-U111</h4>
                        </div>

                        <div className="flex items-center mt-2 sm:mt-3">
                            <div className="flex items-center">
                                <Image
                                    src={clock}
                                    alt="clock"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Full Time</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={expercence}
                                    alt="expercence"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">4+ Years</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={location}
                                    alt="location"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Pollachi</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:flex lg:items-center sm:mr-8 lg:mr-0">
                            <h5 className="text-xl text-textBlack font-medium lg:mr-5 xl:mr-8 lg:block hidden">Job Description</h5>
                            <Image
                                src={arrow}
                                alt="arrow"
                            />
                        </div>

                    </div>
                </div>
            ) : (
                <div className="bg-textWhite p-3 lg:p-6 rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] border border-textWhite hover:border-bgPrimaryRed transition-all duration-700"
                    onClick={() => toggleDescription('description1')}
                >
                    <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">UI/UX Designer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-U111</h4>
                        </div>
                        <div className="lg:flex lg:items-center lg:mr-0">
                            <h5 className="font-medium text-xl text-textBlack lg:mr-3 lg:block hidden">Job Description</h5>
                            <Image
                                src={careerdownarrow}
                                alt="careerdownarrow"
                            />
                        </div>
                    </div>
                    <div className="bg-bgPrimaryRed py-[2px] mt-3"></div>
                    <div className="flex items-center mt-3">
                        <Image
                            src={clock}
                            alt="clock"
                            className="w-[17px] sm:w-[20px] md:w-[25px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Full Time</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={expercence}
                            alt="expercence"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">4+ Years</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={location}
                            alt="location"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Pollachi</h5>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Must Have Skills:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Proficiency in UI wireframe tools (Figma/AdobeXD)</p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Knowledge on graphic designing tools (Photoshop/Illustrator/InDesign)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Proficiency in design tools (Canva/Sketch/CorelDraw)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Creative & intuitive thinking
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Job Description:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Build interactive prototypes to visualize design concepts.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Iterate and refine designs based on feedback from cross-functional teams.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Develop visually appealing user interfaces with end user psychology.
                        </p>
                    </div>
                    <div className="flex mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Collaborate with the development team to ensure design feasibility.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Present design concepts and ideas to colleagues, executives, and clients.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Maintain best practices on style, fonts, colours, and images.
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Added Advantage:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Hand on experience in video content creation and editing tools (Premier Pro and After Effects).
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Professional Certification in above mentioned tools.
                        </p>
                    </div>
                </div>
            ),
            style: panelStyle,
        },
        {
            key: '2',
            label: activeDescription.description2 ? (
                <div className="bg-textWhite p-3 lg:p-6 rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] flex justify-between items-center cursor-pointer border border-textWhite hover:border-bgPrimaryRed transition-all duration-700" onClick={() => toggleDescription('description2')}>
                    <div className="">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">Front-end Developer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-F112</h4>
                        </div>
                        <div className="flex items-center mt-2 sm:mt-3">
                            <div className="flex items-center">
                                <Image
                                    src={clock}
                                    alt="clock"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Full Time</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={expercence}
                                    alt="expercence"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">4+ Years</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={location}
                                    alt="location"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Pollachi</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:flex lg:items-center sm:mr-8 lg:mr-0">
                            <h5 className="text-xl text-textBlack font-medium lg:mr-5 xl:mr-8 lg:block hidden">Job Description</h5>
                            <Image
                                src={arrow}
                                alt="arrow"
                            />
                        </div>

                    </div>
                </div>
            ) : (
                <div className="bg-textWhite p-3 lg:p-6 rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] border border-textWhite hover:border-bgPrimaryRed transition-all duration-700"
                    onClick={() => toggleDescription('description2')}
                >
                    <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">Front-end Developer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-F112</h4>
                        </div>
                        <div className="lg:flex lg:items-center lg:mr-0">
                            <h5 className="font-medium text-xl text-textBlack lg:mr-3 lg:block hidden">Job Description</h5>
                            <Image
                                src={careerdownarrow}
                                alt="careerdownarrow"
                            />
                        </div>
                    </div>
                    <div className="bg-bgPrimaryRed py-[2px] mt-3"></div>
                    <div className="flex items-center mt-3">
                        <Image
                            src={clock}
                            alt="clock"
                            className="w-[17px] sm:w-[20px] md:w-[25px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Full Time</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={expercence}
                            alt="expercence"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">4+ Years</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={location}
                            alt="location"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Pollachi</h5>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Must Have Skills:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Proficiency in HTML5 & CSS3 (SASS/LESS).
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Strong understanding of Vanilla JavaScript and JQuery.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience with ReactJS/VueJS/AngularJS.
                        </p>
                    </div>
                    <div className="flex mt-2 items-start lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Understanding of versioning (Git) & code hosting tools (Bitbucket/GitHub/GitLab).
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Familiarity with MVC architecture and OOP programming.
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Job Description:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Implement clean code practices.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Troubleshoot and debug application.
                        </p>
                    </div>
                    <div className="flex mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Build reusable code and libraries for future use.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Do code reviews & write quality unit test.
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Added Advantage:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Understanding of Cloud Services (AWS, Azure, Alibaba or GCP).
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Professional certification in above mentioned technologies.
                        </p>
                    </div>
                </div>
            ),
            style: panelStyle,
        },
        {
            key: '3',
            label: activeDescription.description3 ? (
                <div className="bg-textWhite p-3 lg:p-6 rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] flex justify-between items-center cursor-pointer border border-textWhite hover:border-bgPrimaryRed transition-all duration-700" onClick={() => toggleDescription('description3')}>
                    <div className="">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">Back-end Developer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-B113</h4>
                        </div>

                        <div className="flex items-center mt-2 sm:mt-3">
                            <div className="flex items-center">
                                <Image
                                    src={clock}
                                    alt="clock"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Full Time</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={expercence}
                                    alt="expercence"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">4+ Years</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={location}
                                    alt="location"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Pollachi</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:flex lg:items-center sm:mr-8 lg:mr-0">
                            <h5 className="text-xl text-textBlack font-medium lg:mr-5 xl:mr-8 lg:block hidden">Job Description</h5>
                            <Image
                                src={arrow}
                                alt="arrow"
                            />
                        </div>

                    </div>
                </div>
            ) : (
                <div className="bg-textWhite p-3 lg:p-6 rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] border border-textWhite hover:border-bgPrimaryRed transition-all duration-700"
                    onClick={() => toggleDescription('description3')}
                >
                    <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">Back-end Developer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-B113</h4>
                        </div>
                        <div className="lg:flex lg:items-center lg:mr-0">
                            <h5 className="font-medium text-xl text-textBlack lg:mr-3 lg:block hidden">Job Description</h5>
                            <Image
                                src={careerdownarrow}
                                alt="careerdownarrow"
                            />
                        </div>
                    </div>
                    <div className="bg-bgPrimaryRed py-[2px] mt-3"></div>
                    <div className="flex items-center mt-3">
                        <Image
                            src={clock}
                            alt="clock"
                            className="w-[17px] sm:w-[20px] md:w-[25px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Full Time</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={expercence}
                            alt="expercence"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">4+ Years</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={location}
                            alt="location"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Pollachi</h5>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Must Have Skills:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Proficient knowledge on programming languages (Java/JavaScript/Python) (Django/ Flask)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience with Frameworks (Spring/NodeJS/Django)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Well versed knowledge on database queries (SQL/ NoSQL/MySQL)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience with database (Postgres/MongoDB/Oracle)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">

                            API testing tools (Postman/SoapUI)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Understanding of versioning (Git) & code hosting tools (Bitbucket/GitHub/GitLab)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Fundamentals of ETL & RESTful API
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Job Description:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Collaborate with frontend developers to integrate user-facing elements with server side logic.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Implement clean code practices.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Troubleshoot and debug application.
                        </p>
                    </div>
                    <div className="flex mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Build reusable code and libraries for future use.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Do code reviews & write quality unit test.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Implementation of security and data protection.
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Added Advantage:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience with tools like Celery, Nginx, Gunicorn etc.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Familiarity with Parallel Threading, Concurrent calling and Aggregation Queries.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Understanding of Cloud Services (AWS, Azure, Alibaba or GCP).
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience in Microservices, Event-driven systems, Caching.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Event driven architecture (Kafka).
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Professional Certification in above mentioned technologies.
                        </p>
                    </div>
                </div>
            ),
            style: panelStyle,
        },
        {
            key: '4',
            label: activeDescription.description4 ? (
                <div className="bg-textWhite p-3 lg:p-6 rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] flex justify-between items-center cursor-pointer border border-textWhite hover:border-bgPrimaryRed transition-all duration-700" onClick={() => toggleDescription('description4')}>
                    <div className="">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">QA Engineer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-Q114</h4>
                        </div>

                        <div className="flex items-center mt-2 sm:mt-3">
                            <div className="flex items-center">
                                <Image
                                    src={clock}
                                    alt="clock"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Full Time</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={expercence}
                                    alt="expercence"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">4+ Years</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={location}
                                    alt="location"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Pollachi</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:flex lg:items-center sm:mr-8 lg:mr-0">
                            <h5 className="text-xl text-textBlack font-medium lg:mr-5 xl:mr-8 lg:block hidden">Job Description</h5>
                            <Image
                                src={arrow}
                                alt="arrow"
                            />
                        </div>

                    </div>
                </div>
            ) : (
                <div className="bg-textWhite p-3 lg:p-6 rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] border border-textWhite hover:border-bgPrimaryRed transition-all duration-700"
                    onClick={() => toggleDescription('description4')}
                >
                    <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">QA Engineer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-Q114</h4>
                        </div>
                        <div className="lg:flex lg:items-center lg:mr-0">
                            <h5 className="font-medium text-xl text-textBlack lg:mr-3 lg:block hidden">Job Description</h5>
                            <Image
                                src={careerdownarrow}
                                alt="careerdownarrow"
                            />
                        </div>
                    </div>
                    <div className="bg-bgPrimaryRed py-[2px] mt-3"></div>
                    <div className="flex items-center mt-3">
                        <Image
                            src={clock}
                            alt="clock"
                            className="w-[17px] sm:w-[20px] md:w-[25px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Full Time</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={expercence}
                            alt="expercence"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">4+ Years</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={location}
                            alt="location"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Pollachi</h5>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Must Have Skills:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience in automation testing (Cypress/Selenium/Appium)</p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            API testing (Postman/SoapUI)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience on BDD testing frameworks (JUnit/TestNg/Cucumber/Mocha)
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Job Description:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Create detailed and well-structured test cases based on requirement documents.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Identify, record and track defects from creation to resolution in Jira.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Perform E2E testing, sanity testing, smoke testing, regression testing, functionality testing, API testing.
                        </p>
                    </div>
                    <div className="flex mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Develop automation scripts for desktop-based applications & prepare QA reports.
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Perform manual testing as needed, contributing to the overall quality of the software.
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Added Advantage:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience in JIRA test management tools (Zephyr/Xray).
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Professional Certifications (ISTQB/CAST).
                        </p>
                    </div>
                </div>
            ),
            style: panelStyle,
        },
        {
            key: '5',
            label: activeDescription.description5 ? (
                <div className="bg-textWhite p-3 lg:p-6  rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] flex justify-between items-center border border-textWhite hover:border-bgPrimaryRed transition-all duration-700" onClick={() => toggleDescription('description5')}>
                    <div className="">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">Cloud & DevOps Engineer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-I115</h4>
                        </div>
                        <div className="flex items-center mt-2 sm:mt-3">
                            <div className="flex items-center">
                                <Image
                                    src={clock}
                                    alt="clock"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Full Time</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={expercence}
                                    alt="expercence"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">4+ Years</p>
                            </div>
                            <div className="flex items-center ml-2 lg:ml-4 xl:ml-6">
                                <Image
                                    src={location}
                                    alt="location"
                                    className="w-[12px] sm:w-[20px] lg:w-[30px] xl:w-[35px]"
                                />
                                <p className="text-textBlack font-medium text-[8px] sm:text-xs md:text-sm lg:text-xl pl-1 lg:pl-3">Pollachi</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="lg:flex lg:items-center sm:mr-8 lg:mr-0">
                            <h5 className="text-xl text-textBlack font-medium lg:mr-5 xl:mr-8 lg:block hidden">Job Description</h5>
                            <Image
                                src={arrow}
                                alt="arrow"
                            />
                        </div>

                    </div>
                </div>
            ) : (
                <div className="bg-textWhite p-3 lg:p-6 rounded-xl lg:rounded-3xl shadow-[1px_3px_8px_3px_rgba(0,0,0,0.10)] border border-textWhite hover:border-bgPrimaryRed transition-all duration-700"
                    onClick={() => toggleDescription('description5')}
                >
                    <div className="flex justify-between items-center cursor-pointer">
                        <div className="flex items-center">
                            <h3 className="text-xs sm:text-base lg:text-xl font-semibold text-textBlack">Cloud & DevOps Engineer</h3>
                            <Image
                                src={vacancy}
                                alt="vacancy"
                                className="mx-3"
                            />
                            <h4 className="text-[10px] sm:text-sm  font-medium lg:text-lg text-textgray">PI-IN-JV-I115</h4>
                        </div>
                        <div className="lg:flex lg:items-center lg:mr-0">
                            <h5 className="font-medium text-xl text-textBlack lg:mr-3 lg:block hidden">Job Description</h5>
                            <Image
                                src={careerdownarrow}
                                alt="careerdownarrow"
                            />
                        </div>
                    </div>
                    <div className="bg-bgPrimaryRed py-[2px] mt-3"></div>
                    <div className="flex items-center mt-3">
                        <Image
                            src={clock}
                            alt="clock"
                            className="w-[17px] sm:w-[20px] md:w-[25px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Full Time</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={expercence}
                            alt="expercence"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">4+ Years</h5>
                    </div>
                    <div className="flex items-center mt-2 lg:mt-3">
                        <Image
                            src={location}
                            alt="location"
                            className="w-[17px] sm:w-[20px] lg:w-[40px]"
                        />
                        <h5 className="text-xs sm:text-sm md:text-lg lg:text-xl font-normal text-textBlack ml-2 lg:ml-6">Pollachi</h5>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Must Have Skills:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-[10px] lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience in Cloud Services (AWS/Azure/Alibaba/GCP)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience in Infrastructure as Code technologies (IaC) such as Terraform
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Experience in CLI Shell scripting, preferably PowerShell or Bash
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Design, implement, and maintain CI/CD Pipelines (Jenkins/CircleCI) & manage containers (Docker & Kubernetes)
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Job Description:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Automate DevOps workflow with Python scripting
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Work with Cloud Security logging and monitoring tools (Prometheus & Grafana)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Maintain version controlling tools (Git) & code hosting tools (Bitbucket/GitHub/GitLab)
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Work with networking concepts (SSH, FTP, TCP, IP, DNS, CDN & Load Balancing)
                        </p>
                    </div>
                    <h4 className="text-[10px] sm:text-sm md:text-lg lg:text-xl font-semibold text-textBlack mt-2 lg:mt-6">Added Advantage:</h4>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 lg:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Knowledge on databases (SQL/NoSQL/Cache) & message queuing (RabbitMQ) & tools such as Ansible
                        </p>
                    </div>
                    <div className="flex items-start mt-2 lg:mt-[18px]">
                        <Image
                            src={dot}
                            alt="dot"
                            className="mt-[7px] sm:mt-2 md:mt-3 w-1 md:w-[6px]"
                        />
                        <p className="text-textBlack sm:text-justify text-xs sm:text-sm md:text-base lg:text-lg font-normal ml-2">
                            Professional Certification in above mentioned tools.
                        </p>
                    </div>
                </div>
            ),
            style: panelStyle,
        },
    ];
    return (
        <Collapse
            className="lg:mx-28 mt-5 lg:mt-7"
            bordered={false}
            style={{
                background: token.colorBgContainer,
            }}
            items={getItems(panelStyle)}
        />
    );
};
export default App;
