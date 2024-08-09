import twitter from "../public/logos/twitter.svg";
import facebook from "../public/icons/face-book.svg";
import linkedin from "../public/icons/linked-in.svg";
import instagram from "../public/icons/instagram.svg";
import fotter from "../public/icons/fotter.svg";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL;

  return (
    <section className="bg-textDarkBlue mt-[60px]">
      <div className=" container mx-auto">
        <div className="pt-[20px] flex justify-center md:justify-start lg:ml-8">
          <Link
            href="/"
            aria-label="Go home"
            // title="Company"
            className="md:block w-[116px]"
          >
            <Image
              src={fotter}
              alt="fotter"
              className="text-textWhite w-[116px]"
            />
          </Link>
        </div>
        <hr className="border-1 border-textWhite cursor-pointer mt-[30px]  duration-500 md:hidden" />
        <div className="">
          <div className="md:flex  md:justify-center  md:space-x-24  pt-[20px] ">
            <div className="flex-wrap md:text-center  text-textWhite space-y-2 px-[30px] md:px-0">
              <h1 className="font-semibold text-[16px]  ">
                {/* <Link href="/">Company</Link> */}
                <p>Company</p>
              </h1>
              <ul className="text-[16px] leading-12 font-[400] space-y-2  ">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/career">Careers</Link>
                </li>
                <li>
                  <Link href={blogUrl}>Blogs</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div className="flex-wrap md:text-center text-right -mt-[153px] md:-mt-0  text-textWhite space-y-2  px-[30px] md:px-0 ">
              <h1 className="font-semibold text-[16px]">
                <Link href="/service">Services</Link>
              </h1>
              <ul className="text-[16px] leading-12 font-[400] space-y-2">
                <li>
                  <Link href="/application">Application Services</Link>
                </li>
                <li>
                  <Link href="/cloud">Cloud Enablement</Link>
                </li>
                <li>
                  <Link href="/devops">DevOps Services</Link>
                </li>
                <li>
                  <Link href="/qualityengineering">Quality Engineering</Link>
                </li>
              </ul>
            </div>
            <div className="flex-wrap md:text-center text-right mt-[150px]  text-textWhite space-y-2 md:hidden  px-[30px] ">
              {/* <h1 className="font-semibold text-[16px]">
                <Link href="/">Legal</Link>
              </h1>

              <ul className="text-[16px] leading-12 font-[400] space-y-2 ">
                <li>
                  <Link href="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/">Terms & Services</Link>
                </li>
                <li>
                  <Link href="/">Terms of Use</Link>
                </li>
                <li>
                  <Link href="/">Refund Policy</Link>
                </li>
              </ul> */}
            </div>

            <div className="flex-wrap md:text-center text-left -mt-[50px] md:-mt-0  text-textWhite space-y-2  px-[30px] md:px-0 ">
              <h1 className="font-[600]  text-[16px]">
                <Link href="/industries">Industries</Link>
              </h1>
              <ul className="text-[16px] leading-12 font-[400] space-y-2">
                <li>
                  <Link href="/industries/#banking">Banking</Link>
                </li>
                <li>
                  <Link href="/industries/#engineering">Engineering</Link>
                </li>
                <li>
                  <Link href="/industries/#hightech">High Technology</Link>
                </li>
                <li>
                  <Link href="/industries/#retail">Retail</Link>
                </li>
                <li>
                  <Link href="/industries/#telecom">Telecom</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex m-auto container bg-textDarkBlue justify-center md:justify-end  items-center  w-[100%]  pt-[30px] py-[20px]">
            {/* <p className="md:text-[10px] text-[10px] px-[30px] md:px-0 font-[400] text-textWhite   ">
              Terms & Condition{" "}
              <span className="block md:inline  ml-0 lg:ml-[24px]">
                {" "}
                Privacy Policy{" "}
              </span>
            </p> */}
            <div className="lg:mr-8">
              <div className="text-center">
                <p className="font-[400] md:text-[10px] text-textWhite text-[10px]">
                  Follow us on
                </p>
                <div className="flex space-x-2 mt-2">
                  <Link
                    href="https://twitter.com/InfotechPirai"
                    passHref
                    target="_blank"
                  >
                    <Image src={twitter} alt="twitter" className="w-[20px]" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/piraiinfotech2017"
                    target="_blank"
                    passHref
                  >
                    <Image src={facebook} alt="facebook" className="w-[20px]" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/pirai-infotech/?originalSubdomain=in"
                    target="_blank"
                    passHref
                  >
                    <Image src={linkedin} alt="linkedin" className="w-[20px]" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/piraiinfotech/"
                    target="_blank"
                    passHref
                  >
                    <Image
                      src={instagram}
                      alt="instagram"
                      className="w-[20px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
