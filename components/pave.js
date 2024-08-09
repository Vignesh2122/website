import React from "react";
import endservice from "../public/logos/end-service.svg";
import globalservice from "../public/logos/global-service.svg";
import professionalexcellence from "../public/logos/professional-excellence.svg";
import Image from "next/image";

export default function Pave({ title, titleSpan }) {
  return (
    <section className="mt-20 lg:mt-44">
      <div className="container mx-auto w-[90%] ">
        <div className="block">
          <h2 className="text-[24px] md:text-4xl text-textDarkBlue text-center lg:text-left font-semibold">
            {title}
            <span className="text-bgPrimaryRed text-center lg:text-left">
              {titleSpan}
            </span>
          </h2>
          <p className="text-[18px] md:text-2xl font-medium text-center lg:text-left my-3">
            Pirai Infotech&apos;s three-pronged approach revolutionizes cloud
            services, setting new benchmarks of excellence and client delight.
          </p>
        </div>

        <div className="lg:mt-14 mt-8 block lg:flex justify-between lg:mx-[72px]">
          <Image src={endservice} alt="endservice" className="mx-auto w-[90px] lg:w-[150px]" />
          <div className="  ml-0 lg:ml-6 mt-6">
            <h4 className="font-semibold text-2xl text-center lg:text-left text-bgPrimaryRed">
              End-to-End Services
            </h4>
            <p className="font-medium text-base text-center lg:text-left mt-2">
              We offer cutting-edge comprehensive services in cloud technology,
              right from strategy to deployment, ensuring convenience and peace
              of mind. Trust our competent team to meet all your needs under one
              roof.
            </p>
          </div>
        </div>

        <div className="mt-5 block  lg:flex justify-between lg:mx-[72px]">
          <Image src={globalservice} alt="globalservice" className="mx-auto w-[90px] lg:w-[150px]" />
          <div className="ml-0 lg:ml-6 mt-6">
            <h4 className="font-semibold text-2xl text-center lg:text-left text-bgPrimaryRed">
              Worldwide Reach
            </h4>
            <p className="font-medium text-base text-center lg:text-left mt-2">
              With delivery centers in India, Malaysia, Germany, England, and
              the U.S., we offer time zone advantages, cultural insights, and
              prompt support no matter where you are located. Our strategic
              setup ensures efficient service delivery tailored to your specific
              needs.
            </p>
          </div>
        </div>

        <div className="mt-5 block lg:flex justify-between lg:mx-[72px]">
          <Image
            src={professionalexcellence}
            alt="professionalexcellence"
            className="mx-auto w-[90px] lg:w-[150px]"
          />
          <div className="ml-0 lg:ml-6 mt-6">
            <h4 className="font-semibold text-2xl text-center lg:text-left text-bgPrimaryRed">
              Unrivaled Professional Excellence
            </h4>
            <p className="font-medium text-base text-center lg:text-left mt-2">
              With 6+ years of delivering exceptional cloud solutions globally,
              we are your reliable partner for success. We offer you extensive
              global market experience, a tailored business approach, and an
              unwavering commitment to faster time to market and cost
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
