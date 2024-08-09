import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Form from "@/components/Form";
import blogarrow from "../../public/blogs/blog-arrow.svg";
import Link from "next/link";
import Head from "next/head";
import diagram from "../../public/blog2/blog2-diagram.png"

export default function Blogs2() {

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
                <title>Implementing Azure File Share for VM Scale Set (Auto-Scaling)</title>
                <link rel="icon" href="/title.png" type="image/png" />
            </Head>
            <Header />
            <div className='container mx-auto w-[90%] lg:w-full xl:w-[75%]'>
                {/* ----------------------------Header Section ------ */}
                <section className="lg:mt-[60px]">
                    <div className="lg:pt-[60px] md:flex w-[100%]">
                        <div className="w-full">
                            <h4 className="font-semibold lg:text-3xl my-1 lg:mb-3 text-xs sm:text-lg text-textDarkBlue">Implementing Azure File Share for VM Scale Set (Auto-Scaling)
                            </h4>
                            <div className="flex justify-between mb-3 lg:mb-5">
                            <h6 className=" text-textgray text-[10px] sm:text-base lg:text-2xl font-medium">Published on - December, 2023</h6>
                            <h5 className="font-semibold text-[10px] sm:text-base text-bgPrimaryRed lg:text-2xl">Cloud</h5>
                            </div>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-4 lg:mt-8">Abstract:</h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">At Pirai we had a client request to implement auto scaling for a project that relied on standalone Virtual Machines (VMs) to store files locally, in order to accommodate the increasing traffic. To achieve this, Virtual Machine Scale Set was chosen which runs multiple VMs in the background to handle requests. However, a new challenge arose. With multiple VMs running, file storage became a problem. Storing files separately on different VMs was no longer a viable option. Therefore, the team had to find a common storage space for all VMs to access.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Problem Statement:
                            </h6>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Downtime<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   If your application experiences sudden spikes in traffic or usage, it may become overwhelmed and crash. This can lead to downtime, which can be costly and damaging to your reputation.
                            </span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Poor performance<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Without auto-scaling, your application may not have the resources it needs to perform optimally during peak usage periods. This can lead to slow load times, timeouts, and other performance issues.</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Overprovisioning<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   To ensure that your application can handle peak usage, you may need to overprovision resources, which can lead to unnecessary costs. This can be especially problematic if your application experiences periods of low usage, as you&apos;ll be paying for unused resources.</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Manual management<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Without auto-scaling, you&apos;ll need to manually manage the scaling of your infrastructure. This can be time-consuming and can distract your team from other important tasks.</span>
                            </p>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Overall, without auto-scaling, your application may struggle to handle fluctuating demand, leading to downtime, poor performance, and unnecessary costs. Auto-scaling can help you avoid these issues by automatically adjusting resources based on demand, ensuring optimal performance and cost-effectiveness.
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Benefits of Auto-scaling for virtual machines (VMs):
                            </h6>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Increased availability<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Auto-scaling ensures that your application can handle fluctuations in traffic without experiencing downtime or reduced performance. By automatically adding or removing VM instances, your application can scale up or down seamlessly, based on demand.
                            </span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Improved performance<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   With auto-scaling, you can ensure that your application always has the necessary resources to perform at its best. By scaling up resources during peak usage periods, you can avoid bottlenecks and ensure consistent performance.
                            </span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Reduced costs<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Auto-scaling allows you to provision resources based on demand, rather than over-provisioning and incurring unnecessary costs. This can help you optimize your infrastructure costs and avoid paying for unused resources.</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Increased agility<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Auto-scaling enables you to quickly respond to changing business requirements and scale your application up or down as needed. This can help you stay competitive and respond to market trends.</span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Simplified management<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   With auto-scaling, you don&apos;t need to manually manage the scaling of your infrastructure. Instead, the system automatically adjusts resources based on demand, freeing up your team to focus on other tasks.</span>
                            </p>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Challenges:
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">The main challenge was choosing the right storage solution for the client&apos;s setup. There were two possible options: Azure File Share and Blob Storage.
                            </p>
                            <table className="border-2 border-textDarkGray w-full mt-5">
                                <thead className="text-textBlack border-b-2">
                                    <tr>
                                        <th className="lg:text-xl text-[10px] sm:text-base"></th>
                                        <th className="border-x-2 lg:text-xl text-[10px] sm:text-base">Azure File Share</th>
                                        <th className="lg:text-xl text-[10px] sm:text-base">Blob Storage</th>
                                    </tr>
                                </thead>
                                <tbody className="text-start">
                                    <tr className=" border-b-2">
                                        <td className="text-[10px] sm:text-base pl-3">Purpose
                                        </td>
                                        <td className="border-x-2 text-[10px] sm:text-sm lg:text-base">Azure File Share is a cloud-based file share solution that provides a single, centralized location for storing files. It is ideal for situations where files need to be accessed by multiple VMs or applications
                                        </td>
                                        <td className="text-[10px] sm:text-sm lg:text-base">Blob Storage is a cloud-based object storage solution that stores unstructured data such as images, videos, and documents. It is ideal for situations where you need to store large amounts of data and access it from anywhere in the world.
                                        </td>
                                    </tr>
                                    <tr className=" border-b-2">
                                        <td className="text-[10px] sm:text-base pl-3">Access
                                        </td>
                                        <td className="border-x-2 text-[10px] sm:text-sm lg:text-base">Azure File Share is accessed through SMB (Server Message Block) protocols, which is a standard protocol for sharing files between Windows machines. It is supported by many operating systems, including Windows, Linux, and mac Os.
                                        </td>
                                        <td className="text-[10px] sm:text-sm lg:text-base">Blob Storage can be accessed through REST APIs, SDKs, and other Azure services. It provides multiple tiers for storage, including hot, cool, and archive storage
                                        </td>
                                    </tr>
                                    <tr className=" border-b-2">
                                        <td className="text-[10px] sm:text-base pl-3">Cost
                                        </td>
                                        <td className="border-x-2 text-[10px] sm:text-sm lg:text-base">Azure File Share is priced based on the amount of storage used and the number of operations performed. It is a cost-effective solution for situations where multiple VMs or applications need to access the same files.
                                        </td>
                                        <td className="text-[10px] sm:text-sm lg:text-base">Blob Storage is a cloud-based object storage solution that stores unstructured data such as images, videos, and documents. It is ideal for situations where you need to store large amounts of data and access it from anywhere in the world.
                                        </td>
                                    </tr>
                                    <tr className="w-[100%] border-b-2">
                                        <td className="text-[10px] sm:text-base px-3">Performance
                                        </td>
                                        <td className="border-x-2 text-[10px] sm:text-sm lg:text-base">Azure File Share provides high-performancefilesharing capabilities that can handle large amounts of data and multiple file operations at the same time.
                                        </td>
                                        <td className="text-[10px] sm:text-sm lg:text-base">Blob Storage is optimized for storing large amounts of data and is designed to handle high-volume data transactions
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Solution:
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">Azure File Share is a cloud-based file share solution that provides a single, centralized location for storing files. The solution is available on Azure and can be accessed from any VM that is part of the Virtual Machine Scale Set. Azure File Share was selected because it offered a number of key advantages:
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Shared Storage<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   All VMs in the Virtual Machine Scale Set could access the files stored in the same location. This allowed the client to store files centrally, making it easier to manage and retrieve files, and eliminated the need to copy files across multiple VMs.
                            </span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Easy Implementation<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Azure File Share is an easy-to-use storage solution that can be quickly deployed, making it ideal for the client&apos;s needs. It is simple to integrate with existing Azure services and can be accessed via standard SMB (Server Message Block) protocols.
                            </span>
                            </p>
                            <p className="font-semibold text-justify lg:text-lg text-[10px] sm:text-sm text-textDarkBlue mt-2">Cost-Effective<span className="font-normal lg:text-lg text-[10px] sm:text-sm text-textBlack"> -   Azure File Share is a cost-effective solution, as it eliminates the need for additional storage hardware, reduces the number of VMs required, and provides a single storage location for all files.</span>
                            </p>
                            <h6 className="font-semibold lg:text-lg text-[10px] sm:text-sm text-bgPrimaryRed mt-2 md:mt-5 mb-4">Architecture Diagram:
                            </h6>
                            <div className="flex justify-center">
                            <Image
                                src={diagram}
                                alt="dot"
                                className=""
                            />
                            </div>     
                            <h6 className="font-semibold lg:text-xl text-xs sm:text-base text-bgPrimaryRed mt-2 md:mt-5">Conclusion:
                            </h6>
                            <p className="font-normal text-justify lg:text-lg text-[10px] sm:text-sm text-textBlack mt-2">In summary, implementing auto scaling with Azure File Share was a successful solution for the client&apos;s project. The team was able to choose the right storage solution based on the client&apos;s setup and requirements. Azure File Share was the best option because it provided shared storage, was easy to implement, and cost-effective. By using Azure File Share, the client was able to store files centrally, access them from any VM in the Virtual Machine Scale Set, and reduce the overall cost of storage.
                            </p>
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
                                <p className="font-medium text-[10px] sm:text-xs lg:text-base text-textgray">{item.timeLimit}</p>
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