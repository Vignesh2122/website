import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import headerBanner from "../../public/career/career-header.png";
import reception from "../../public/career/reception.jpg";
import sofaarea from "../../public/career/sofaarea.jpg";
import piraihome from "../../public/career/pirai-home.jpg";
import piraionam from "../../public/career/piraionam.jpg";
import piraihall from "../../public/career/piraihall.jpg";
import infrasofaarea from "../../public/career/infrasofaarea.jpg";
import carrertick from "../../public/career/career-tick.svg"
import Head from "next/head";
import JobPanel from '@/components/JobPanel';

export default function Career() {
    return (
        <>
            <Head>
                <title>Join Pirai Infotech for Exciting Career Opportunities in Cutting-Edge Technology</title>
                <meta name="description" content="Shape the future with us! Explore exciting opportunities, latest tech stack, and supportive team." />
                <meta name="keywords" content="Tech Careers, Career Growth, Opportunities, Collaborative Team, Job Openings" />
                <meta charSet="utf-8" />
                <link rel="icon" href="title.png" type="image/png" />
            </Head>
            <Header />
            <div className='px-[28px] mx-auto container'>
                {/* ---------------------------- Header-Banner ------ */}
                <section className="lg:mt-[76px] ">
                    <div className="lg:flex lg:items-center mt-12 lg:mt-[110px] lg:justify-between block  text-center  lg:text-left">
                        <div className="lg:w-[50%]">
                            <h1 className="text-textDarkBlue text-[30px] sm:text-[40px] lg:text-[45px] xl:text-[60px] 2xl:text-[64px] font-bold xl:leading-[90px] xl:leading-12 2xl:leading-12 ">
                                Shape the future of
                                technology with us!
                            </h1>
                            <p className="font-normal text-justify text-xs sm:text-base xl:text-xl text-textBlack mt-3">
                                Join our talented team at <span className="text-textDarkBlue font-bold">Pirai Infotech</span> and advance your career. Explore exciting opportunities and grow your skills in a dynamic and collaborative environment. Apply now to be a part of our cutting-edge solutions that impact customers worldwide.
                            </p>
                        </div>
                        <Image
                            src={headerBanner}
                            alt="headerBanner"
                            className="mt-12 g:mt-[12px] mx-auto lg:mx-0 w-[80%] lg:w-[450px] xl:w-[45%]"
                        />
                    </div>
                </section>
                {/* ---------------------------- Join a Team ------ */}
                <section className="mt-12 lg:mt-[90px]">
                    <h5 className="text-2xl sm:text-3xl xl:text-[34px] font-bold text-textDarkBlue text-center">
                        Join a team of professionals that helps customers all over the world
                    </h5>
                    <div className="flex justify-between mt-8 w-[100%]">
                        <Image
                            src={reception}
                            alt="careerjob1"
                            className="w-[33%] rounded-md"
                        />
                        <Image
                            src={sofaarea}
                            alt="careerjob1"
                            className="w-[33%] rounded-md"
                        />
                        <Image
                            src={piraihall}
                            alt="careerjob1"
                            className="w-[33%] rounded-md"
                        />
                    </div>
                    <div className="flex justify-between mt-1 w-[100%]">
                        <Image
                            src={piraionam}
                            alt="careerjob1"
                            className="w-[50%] rounded-md"
                        />
                        <Image
                            src={infrasofaarea}
                            alt="infrasofaarea"
                            className="w-[49%] rounded-md"
                        />
                    </div>
                    <Image
                        src={piraihome}
                        alt="careerjob1"
                        className="mt-2 rounded-md w-full"
                    />
                </section>

                {/* ---------------------------- Why join US ------ */}
                <section className="mt-12 lg:mt-[90px]">
                    <h3 className="text-2xl sm:text-3xl xl:text-5xl font-semibold text-textDarkBlue text-center">Why Join us ?</h3>
                    <div className="lg:flex lg:justify-between mt-6 lg:mt-12 lg:w-[100%]">
                        <div className="lg:w-[30%] xl:w-[33%]">
                            <div className="flex items-center">
                                <h5 className="text-base sm:text-xl lg:text-[18px] xl:text-2xl font-semibold text-textDarkBlue mr-3 lg:mr-4 xl:mr-7">Latest Technology Stack</h5>
                                <Image
                                    src={carrertick}
                                    alt="carrertick"
                                    className="w-[30px] md:w-8 xl:w-[40px]"
                                />
                            </div>
                            <p className="text-xs sm:text-base xl:text-xl font-normal text-textBlack mt-3 lg:mt-6">Work Experience of Cutting edge Technologies</p>
                        </div>
                        <div className="lg:w-[30%] xl:w-[33%] lg:mx-3 mt-5 lg:mt-0">
                            <div className="flex items-center">
                                <h5 className="text-base sm:text-xl lg:text-[18px] xl:text-2xl font-semibold text-textDarkBlue mr-3 lg:mr-4 xl:mr-7">Take Charge</h5>
                                <Image
                                    src={carrertick}
                                    alt="carrertick"
                                    className="w-[30px] md:w-8 xl:w-[40px]"
                                />
                            </div>
                            <p className="text-xs sm:text-base xl:text-xl font-normal text-textBlack mt-3 lg:mt-6">As Much as you are willing to take and show Excellence</p>
                        </div>
                        <div className="lg:w-[30%] xl:w-[33%] mt-5 lg:mt-0">
                            <div className="flex items-center">
                                <h5 className="text-base sm:text-xl lg:text-[18px] xl:text-2xl font-semibold text-textDarkBlue mr-3 lg:mr-4 xl:mr-7">Fastest Growing Company</h5>
                                <Image
                                    src={carrertick}
                                    alt="carrertick"
                                    className="w-[30px] md:w-8 xl:w-[40px]"
                                />
                            </div>
                            <p className="text-xs sm:text-base xl:text-xl font-normal text-textBlack mt-3 lg:mt-6">We are at inflection point to Achieve Accelerated</p>
                        </div>
                    </div>

                    <div className="lg:flex lg:justify-between lg:mt-[60px] lg:w-[100%]">
                        <div className="lg:w-[30%] xl:w-[33%] mt-5 lg:mt-0">
                            <div className="flex items-center">
                                <h5 className="text-base sm:text-xl lg:text-[18px] xl:text-2xl font-semibold text-textDarkBlue mr-3 lg:mr-4 xl:mr-7">Great Colleagues</h5>
                                <Image
                                    src={carrertick}
                                    alt="carrertick"
                                    className="w-[30px] md:w-8 xl:w-[40px]"
                                />
                            </div>
                            <p className="text-xs sm:text-base xl:text-xl font-normal text-textBlack mt-3 lg:mt-6">Closely tied and supportive team</p>
                        </div>
                        <div className="lg:w-[30%] xl:w-[33%] lg:mx-3 mt-5 lg:mt-0">
                            <div className="flex items-center">
                                <h5 className="text-base sm:text-xl lg:text-[18px] xl:text-2xl font-semibold text-textDarkBlue mr-3 lg:mr-4 xl:mr-7">Cross Domain Exposure</h5>
                                <Image
                                    src={carrertick}
                                    alt="carrertick"
                                    className="w-[30px] md:w-8 xl:w-[40px]"
                                />
                            </div>
                            <p className="text-xs sm:text-base xl:text-xl font-normal text-textBlack mt-3 lg:mt-6">Highly Passionate and cohesive team of technology and business People</p>
                        </div>
                        <div className="lg:w-[30%] xl:w-[33%] mt-5 lg:mt-0">
                            <div className="flex items-center">
                                <h5 className="text-base sm:text-xl lg:text-[18px] xl:text-2xl font-semibold text-textDarkBlue mr-3 lg:mr-4 xl:mr-7">Don’t Stop Learning</h5>
                                <Image
                                    src={carrertick}
                                    alt="carrertick"
                                    className="w-[30px] md:w-8 xl:w-[40px]"
                                />
                            </div>
                            <p className="text-xs sm:text-base xl:text-xl font-normal text-textBlack mt-3 lg:mt-6">An Atmosphere where learning is always on the to do list</p>
                        </div>
                    </div>
                </section>


                {/* ---------------------------- Open Poition ------ */}
                <section className="mt-12 lg:mt-[90px]">
                    <div className="w-full flex justify-center">
                        <div className="bg-textDarkBlue px-6 lg:py-3 py-2 rounded-[79px]">
                            <h3 className="text-xs sm:text-base lg:text-xl xl:text-3xl text-textWhite text-center">Open Positions</h3>
                        </div>
                    </div>
                    <h4 className="text-textDarkBlue text-base sm:text-lg lg:text-3xl xl:text-4xl font-bold text-center mt-3 lg:mt-6">Would you be willing to come on board with us?</h4>

                    <JobPanel />

                </section>
                <div className="mt-8 lg:mt-24">
                    <div className="text-center text-textDarkBlue font-semibold" style={{ fontStyle: 'italic' }}>
                        <p className="font-semibold text-sm md:text-lg lg:text-3xl text-textDarkBlue">Submit your Profile to <a className="text-bgPrimaryRed" href="mailto:careers@piraiinfo.com">careers@piraiinfo.com</a> along with the job code in the subject </p>
                    </div>
                </div>
            </div>
            <Form />
            <Footer />
        </>
    )
}