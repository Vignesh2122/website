import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import blogarrow from "../../public/blogs/blog-arrow.svg";
import Link from "next/link";
import Head from "next/head";
import dot from "../../public/career/career-dot.svg"

export default function Blogs4() {

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
            id: 3,
            category: 'Cloud',
            name: 'Streamlining-Infrastructure-with-AWS-CloudFormation',
            timeLimit: "Published on - November 2023",
            image3: blogarrow,
            heading: "Streamlining Infrastructure with AWS CloudFormation",
            content: "The process of managing and controlling different services used in the application development lifecycle using a code or a machine readable format is known to be Infrastructure as code (IaC)....",
            title: "Learn more"

        },
    ];

    return (
        <>
            <Head>
                <title>Secondary Network Interface in a RHEL Instance</title>
                <link rel="icon" href="/title.png" type="image/png" />
            </Head>
            <Header />
            <div className='container mx-auto w-[90%] lg:w-full xl:w-[75%]'>
                {/* ----------------------------Header Section ------ */}
                <section className="lg:mt-[60px]">
                    <div className="lg:pt-[60px] md:flex w-[100%]">
                        <div className="w-full">
                            <h4 className="font-semibold lg:text-4xl lg:mb-3 text-xs sm:text-lg text-textDarkBlue my-1">Secondary Network Interface in a RHEL Instance
                            </h4>
                            <div className="flex justify-between mb-3 lg:mb-5">
                            <h6 className="text-textgray text-[10px] sm:text-base lg:text-2xl font-medium">Published on - November, 2023</h6>
                            <h5 className="font-semibold text-[10px] sm:text-base text-bgPrimaryRed lg:text-2xl">Infra</h5>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-4 lg:mt-8">Executive Summary</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">A secondary network interface is an additional network interface card (NIC) that is added to a computer system or server to provide additional network connectivity. A network interface is a hardware component that allows a computer to communicate over a network, and a secondary network interface is simply a second such component added to the system. A secondary network interface provides additional flexibility and reliability in network communications. Pirai uses RHEL instance to host server environments due to its robustness, security features, and support for a wide range of hardware and software configurations.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Problem Statement</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">One of Pirai’s client used RHEL instances for their the versatility and stability of RHEL. They wanted to create a secondary network interface on their RHEL instance for several reasons like:
                            </p>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                />
                                <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Segmentation of network traffic
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                />
                                <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Load balancing and fault tolerance
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                />
                                <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Network troubleshooting
                                </p>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Solution</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">A secondary network interface can be used to create a separate network segment for certain types of traffic, or to provide redundancy and load balancing by allowing traffic to be spread across multiple network interfaces. It also provides flexibility and redundancy, enabling improved network performance and reliability for a variety of use cases.
                            </p>

                            <h5 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-4 lg:mt-8">Steps to create SNI</h5>
                            <div className="mt-1">
                                <h6 className="font-medium lg:text-xl text-xs sm:text-base text-textDarkBlue">1. Check the current network interface settings:</h6>
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-1 ml-[10px] sm:ml-4 lg:ml-5">The command <span className="text-textDarkBlue font-semibold">ifconfig or ip addr show,</span> is used to display current network interface settings and take note of the interface name, IP address, and subnet mask.
                                </p>
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-base text-textBlack mt-1">2. Determine the name of the network interface that needs to be configured.
                                </p>
                                <h6 className="font-medium lg:text-xl text-xs sm:text-base text-textDarkBlue mt-1">3. Create a new network interface configuration file:</h6>
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-1 ml-[10px] sm:ml-4 lg:ml-5">In the <span className="text-textDarkBlue font-semibold">/etc/sysconfig/network-scripts/</span> directory, create a new network interface configuration file with a name that corresponds to the new interface.
                                </p>
                                <h6 className="font-medium lg:text-xl text-xs sm:text-base text-textDarkBlue mt-1">4. Edit the new configuration file:</h6>
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-1 ml-[10px] sm:ml-4 lg:ml-5">Edit the new configuration file to specify the IP address, subnet mask, default gateway, and other network settings for the new interface. Use the settings appropriate for the network environment.
                                </p>
                                <h6 className="font-medium lg:text-xl text-xs sm:text-base text-textDarkBlue">5. Restart networking services:</h6>
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-1 ml-[10px] sm:ml-4 lg:ml-5">Use the command <span className="text-textDarkBlue font-semibold">systemctl</span> restart network to restart the networking services and apply the new interface configuration.
                                </p>
                                <h6 className="font-medium lg:text-xl text-xs sm:text-base text-textDarkBlue mt-1">6. Verify the new interface:</h6>
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-1 ml-[10px] sm:ml-4 lg:ml-5">Use the command <span className="text-textDarkBlue font-semibold">ifconfig or ip addr show</span> to verify that the new interface has been created and has the correct IP address and network settings.
                                </p>
                                <h6 className="font-medium lg:text-xl text-xs sm:text-base text-textDarkBlue mt-1">7. Configure routing:</h6>
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-1 ml-[10px] sm:ml-4 lg:ml-5">If necessary, configure routing for the new interface using the <span className="text-textDarkBlue font-semibold">route</span> command or by editing the routing table in the <span className="text-textDarkBlue font-semibold">/etc/sysconfig/network-scripts/route-(interface)</span> file.
                                </p>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Challenges faced</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Team faced few of the challenges mentioned below while creating the secondary network interface on their RHEL instance.
                            </p>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">The system&apos;s firewall settings needed an update to allow traffic through the new interface.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Team monitored closely the existing interfaces to avoid the conflicts with IP addresses.
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">The network settings for the new interface are to be verified to avoid the issues with other network traffic or connectivity issues with network-dependent applications and services.
                                </p>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-textDarkBlue mt-4 lg:mt-8">Steps to overcome challenges</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Pirai took few extra steps to overcome the challenges faced while creating the SNI. Listing below few of them:
                            </p>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Verify the current network configurations to avoid conflicts
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Took extra care with network setting factors like IP address, subnet mask, gateway, and DNS servers
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Check and verify the firewall settings
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Implement appropriate security measures to protect the system and network
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[9px] md:mt-[8px] lg:mt-3"
                                />
                                <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack ml-2 sm:ml-3 lg:ml-4">Document all changes made to the network configuration and keep a record of the network settings and configuration files, for future references
                                </p>
                            </div>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">By following these steps, team could address the challenges faced quickly and effectively.
                            </p>

                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Outcome / benefits</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Below were few of the benefits that Client could experience after creating SNI on a RHEL instance:
                            </p>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                />
                                <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Improved network performance
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                />
                                <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Improved network segmentation and redundancy
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                />
                                <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Simplified network troubleshooting
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                />
                                <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Isolation of network traffic
                                </p>
                            </div>
                            <div className="flex items-start mt-2 ml-5">
                                <Image
                                    src={dot}
                                    alt="dot"
                                    className="w-1 md:w-[6px] mt-[6px] sm:mt-[10px] md:mt-[9px] lg:mt-3"
                                />
                                <p className="font-normal lg:text-xl text-[10px] sm:text-base text-textBlack ml-2 lg:ml-3">Flexible network configurations
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