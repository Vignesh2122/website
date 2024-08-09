import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import menubar from "../public/icons/menubar.svg";
import navarrow from "../public/icons/nav-arrow.svg";
import headerIcon from "../public/icons/headerIcon.svg";
import { useRouter } from "next/router";

function NavLink({ to, children }) {
  return (
    <Link href={to} className={`mx-4`}>
      {children}
    </Link>
  );
}

function MobileNav({ open, setOpen }) {
  const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL;

  return (
    <div
      className={`fixed top-0 left-0 h-full w-screen  sm:w-[100%]  z-50     bg-textWhite  ${open ? "translate-x-0" : " -translate-x-full "
        }transition-all lg:hidden duration-700 ease-in-out filter drop-shadow-md overflow-y-auto `}
    >
      <div className="px-[28px] flex items-center py-[17px] pt-[40px] bg-white ">
        {" "}
        <Link className="" href="/">
          <svg
            width="100"
            height="46"
            viewBox="0 0 120 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.3282 5.6932C46.3282 8.5883 43.9812 10.9352 41.0861 10.9352C38.191 10.9352 35.8441 8.5883 35.8441 5.6932C35.8441 2.79811 38.191 0.451172 41.0861 0.451172C43.9812 0.451172 46.3282 2.79811 46.3282 5.6932Z"
              fill="#031555"
            />
            <path
              d="M9.15151 11.8986C8.66776 11.8986 8.2756 12.2907 8.2756 12.7745V27.5739C8.2756 28.0576 8.66776 28.4498 9.15151 28.4498H16.5512C17.6854 28.4498 18.7523 28.2383 19.7519 27.8154C20.7515 27.3733 21.6261 26.7774 22.3758 26.0277C23.1255 25.2779 23.7118 24.4033 24.1348 23.4037C24.5769 22.3849 24.798 21.3084 24.798 20.1742C24.798 19.04 24.5769 17.9731 24.1348 16.9735C23.7118 15.9547 23.1255 15.0704 22.3758 14.3207C21.6261 13.571 20.7515 12.9847 19.7519 12.5618C18.7523 12.1196 17.6854 11.8986 16.5512 11.8986H9.15151ZM8.2756 44.0962C8.2756 44.58 7.88344 44.9721 7.39968 44.9721H0.875915C0.39216 44.9721 0 44.58 0 44.0962V4.4989C0 4.01514 0.392161 3.62298 0.875915 3.62298H16.5512C18.0698 3.62298 19.5308 3.82483 20.9341 4.22852C22.3374 4.61298 23.6446 5.17045 24.8556 5.90094C26.0859 6.6122 27.2009 7.47724 28.2005 8.49607C29.2193 9.49568 30.0843 10.6106 30.7956 11.8409C31.5261 13.0712 32.0836 14.388 32.468 15.7913C32.8717 17.1946 33.0736 18.6555 33.0736 20.1742C33.0736 22.4425 32.641 24.5859 31.776 26.6043C30.9109 28.6036 29.7287 30.3529 28.2293 31.8523C26.7299 33.3517 24.971 34.5339 22.9525 35.399C20.9533 36.264 18.8195 36.6965 16.5512 36.6965H9.15151C8.66776 36.6965 8.2756 37.0887 8.2756 37.5725V44.0962Z"
              fill="#031555"
            />
            <path
              d="M45.04 44.0962C45.04 44.58 44.6479 44.9721 44.1641 44.9721H37.9863C37.5026 44.9721 37.1104 44.58 37.1104 44.0962V14.9659C37.1104 14.4822 37.5026 14.09 37.9863 14.09H44.1641C44.6479 14.09 45.04 14.4822 45.04 14.9659V44.0962Z"
              fill="#031555"
            />
            <path
              d="M58.9384 44.0962C58.9384 44.58 58.5462 44.9721 58.0625 44.9721H51.9424C51.4587 44.9721 51.0665 44.58 51.0665 44.0962V14.9659C51.0665 14.4822 51.4587 14.09 51.9424 14.09H52.5168C52.8008 14.09 53.0672 14.2278 53.2314 14.4595L54.9928 16.945C55.2968 17.374 55.9064 17.4382 56.3198 17.1134C57.3973 16.2669 58.5873 15.5955 59.89 15.0993C61.5047 14.4649 63.1771 14.1477 64.9072 14.1477H70.9805C71.4642 14.1477 71.8564 14.5399 71.8564 15.0236V21.1149C71.8564 21.5986 71.4642 21.9908 70.9805 21.9908H64.9072C64.0806 21.9908 63.3021 22.1446 62.5716 22.4521C61.8411 22.7597 61.2067 23.1826 60.6685 23.7209C60.1302 24.2591 59.7073 24.8935 59.3998 25.624C59.0922 26.3544 58.9384 27.133 58.9384 27.9596V44.0962Z"
              fill="#031555"
            />
            <path
              d="M104.843 44.0962C104.843 44.58 104.451 44.9721 103.968 44.9721H103.389C103.107 44.9721 102.843 44.8369 102.678 44.6085L100.454 41.524C100.149 41.1017 99.5467 41.0377 99.1461 41.3703C98.6164 41.8101 98.0645 42.2321 97.4906 42.6365C96.664 43.2132 95.7893 43.7226 94.8666 44.1648C93.9439 44.5877 92.9923 44.9241 92.012 45.174C91.0508 45.4239 90.0704 45.5488 89.0708 45.5488C86.8986 45.5488 84.8513 45.1836 82.929 44.4531C81.0259 43.7226 79.3535 42.6654 77.9117 41.2813C76.4892 39.878 75.3646 38.1671 74.538 36.1487C73.7114 34.1302 73.2982 31.8331 73.2982 29.2572C73.2982 26.8543 73.7114 24.6532 74.538 22.654C75.3646 20.6355 76.4892 18.9054 77.9117 17.4637C79.3535 16.022 81.0259 14.907 82.929 14.1189C84.8513 13.3115 86.8986 12.9078 89.0708 12.9078C90.0704 12.9078 91.0604 13.0328 92.0408 13.2827C93.0212 13.5326 93.9727 13.8786 94.8954 14.3207C95.8182 14.7628 96.6928 15.2819 97.5194 15.8778C98.1047 16.2901 98.6623 16.7255 99.1923 17.1838C99.5746 17.5144 100.158 17.4816 100.482 17.0936L102.678 14.4623C102.844 14.263 103.09 14.1477 103.35 14.1477H103.968C104.451 14.1477 104.843 14.5399 104.843 15.0236V44.0962ZM96.9139 29.2572C96.9139 28.1807 96.7024 27.1426 96.2795 26.143C95.8758 25.1242 95.3184 24.2303 94.6071 23.4614C93.8958 22.6732 93.0596 22.0484 92.0985 21.5871C91.1565 21.1065 90.1473 20.8662 89.0708 20.8662C87.9943 20.8662 86.9755 21.0488 86.0143 21.4141C85.0724 21.7793 84.2458 22.3176 83.5345 23.0288C82.8425 23.7401 82.2946 24.6244 81.8909 25.6816C81.4872 26.7197 81.2854 27.9115 81.2854 29.2572C81.2854 30.6028 81.4872 31.8042 81.8909 32.8615C82.2946 33.8996 82.8425 34.7742 83.5345 35.4855C84.2458 36.1967 85.0724 36.735 86.0143 37.1002C86.9755 37.4655 87.9943 37.6481 89.0708 37.6481C90.1473 37.6481 91.1565 37.4174 92.0985 36.9561C93.0596 36.4755 93.8958 35.8507 94.6071 35.0818C95.3184 34.2936 95.8758 33.3998 96.2795 32.4002C96.7024 31.3813 96.9139 30.3337 96.9139 29.2572Z"
              fill="#031555"
            />
            <path
              d="M118.8 44.0962C118.8 44.58 118.407 44.9721 117.924 44.9721H111.746C111.262 44.9721 110.87 44.58 110.87 44.0962V14.9659C110.87 14.4822 111.262 14.09 111.746 14.09H117.924C118.407 14.09 118.8 14.4822 118.8 14.9659V44.0962Z"
              fill="#031555"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M114.758 10.9352C117.653 10.9352 120 8.5883 120 5.6932C120 2.79811 117.653 0.451172 114.758 0.451172C111.863 0.451172 109.516 2.79811 109.516 5.6932C109.516 8.5883 111.863 10.9352 114.758 10.9352ZM114.687 9.37679C116.682 9.37679 118.3 7.75931 118.3 5.76404C118.3 3.76877 116.682 2.15129 114.687 2.15129C112.692 2.15129 111.074 3.76877 111.074 5.76404C111.074 7.75931 112.692 9.37679 114.687 9.37679Z"
              fill="#031555"
            />
          </svg>
        </Link>
        <div>

          {open && (
            <div
              className="z-50  fixed pl-[120px]  right-4  flex-col justify-between items-center lg:hidden "
              onClick={() => {
                setOpen(false);
                document.body.style.overflow = "visible";
              }}
            >
              <button className="w-[50px]  -mt-[15px]">
                <Image src={headerIcon} alt="navbutton" />
              </button>
              <span
                className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""
                  }`}
              />
              <span
                className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"
                  }`}
              />
              <span
                className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""
                  }`}
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-around  px-[28px] text-textDarkBlue  ">
        <Link
          className="text-xl font-medium my-4  "
          href="/"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Home
        </Link>
        <div className="w-full  h-[3px] bg-bgPrimaryRed"> </div>

        <div className="my-4 w-full ">
          <Link
            className="text-xl font-medium "
            href="/service"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Services
          </Link>
          <div className="flex flex-col pl-[20px] mt-4">
            <Link
              className="text-xl font-medium my-2"
              href="/application"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              Application Services
            </Link>
            <div className="w-[100%] h-[3px] bg-textprimarygrey"></div>
            <Link
              className="text-xl font-medium my-2"
              href="/cloud"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              Cloud Enablement
            </Link>
            <div className="w-[100%] h-[3px] bg-textprimarygrey" />
            <Link
              className="text-xl font-medium mt-1 mb-2"
              href="/devops"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              DevOps Services
            </Link>
            <div className="w-[100%] h-[3px] bg-textprimarygrey"></div>
            <Link
              className="text-xl font-medium mt-2"
              href="/qualityengineering"
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              Quality Engineering
            </Link>
          </div>
        </div>
        <div className="w-[100%] h-[3px] bg-bgPrimaryRed" />
        <Link
          className="text-xl font-medium my-4"
          href="/industries"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Industries
        </Link>
        <div className="w-[100%] h-[3px] bg-bgPrimaryRed"></div>
        <Link
          className="text-xl font-medium my-4"
          href="/career"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Careers
        </Link>
        <div className="w-[100%] h-[3px] bg-bgPrimaryRed"></div>
        <Link
          className="text-xl font-medium my-4"
          href={blogUrl}
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Blogs
        </Link>
        <div className="w-[100%] h-[3px] bg-bgPrimaryRed"></div>
        <Link
          className="text-xl font-medium my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About Us
        </Link>
        <div className="w-[100%] h-[3px] bg-bgPrimaryRed mb-8"></div>
      </div>
    </div>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL;

  useEffect(() => {
    document.body.style.overflow = "visible";
  }, []);

  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname);
    switch (router.pathname) {
      case "/":
        document.getElementById("home").style.backgroundColor = "#e3e6ed";
        break;
      case "/service":
        document.getElementById("service").style.backgroundColor = "#e3e6ed";
        break;
      case "/devops":
        document.getElementById("service").style.backgroundColor = "#e3e6ed";
        document.getElementById("devOps").style.color = "#031555";
        break;
      case "/cloud":
        document.getElementById("service").style.backgroundColor = "#e3e6ed";
        document.getElementById("cloud").style.color = "#031555";
        break;
      case "/application":
        document.getElementById("service").style.backgroundColor = "#e3e6ed";
        document.getElementById("application").style.color = "#031555";
        break;
      case "/qualityengineering":
        document.getElementById("service").style.backgroundColor = "#e3e6ed";
        document.getElementById("qualityengineering").style.color = "#031555";
        break;
      case "/about":
        document.getElementById("about").style.backgroundColor = "#e3e6ed";
        break;
      case "/industries":
        document.getElementById("industries").style.backgroundColor = "#e3e6ed";
        break;
      case "/career":
        document.getElementById("career").style.backgroundColor = "#e3e6ed";
        break;
      case "/blogs":
        document.getElementById("blogs").style.backgroundColor = "#e3e6ed";
        break;
    }
  });

  return (
    <header>
      <MobileNav open={open} setOpen={setOpen} />

      <div className="hdr-sty w-full h-[100%] lg:h-11 lg:py-12 lg:w-screen  lg:bg-textWhite z-50  lg:fixed lg:top-0 lg:left-0 lg:right-0   text-black lg:text-white bg-white lg:bg-transparent">
        <div className="max-w-screen-2x h-full w-[100%] px-7 lg:mx-auto lg:container flex items-center justify-between">
          <div className="text-textWhite py-10 cursor-pointer lg:w-[11%] xl:w-[30%] 2xl:w-[45%]">
            <Link
              href="/"
              aria-label="Go home">
              <svg
                width="100"
                height="46"
                viewBox="0 0 120 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M46.3282 5.6932C46.3282 8.5883 43.9812 10.9352 41.0861 10.9352C38.191 10.9352 35.8441 8.5883 35.8441 5.6932C35.8441 2.79811 38.191 0.451172 41.0861 0.451172C43.9812 0.451172 46.3282 2.79811 46.3282 5.6932Z"
                  fill="#031555"
                />
                <path
                  d="M9.15151 11.8986C8.66776 11.8986 8.2756 12.2907 8.2756 12.7745V27.5739C8.2756 28.0576 8.66776 28.4498 9.15151 28.4498H16.5512C17.6854 28.4498 18.7523 28.2383 19.7519 27.8154C20.7515 27.3733 21.6261 26.7774 22.3758 26.0277C23.1255 25.2779 23.7118 24.4033 24.1348 23.4037C24.5769 22.3849 24.798 21.3084 24.798 20.1742C24.798 19.04 24.5769 17.9731 24.1348 16.9735C23.7118 15.9547 23.1255 15.0704 22.3758 14.3207C21.6261 13.571 20.7515 12.9847 19.7519 12.5618C18.7523 12.1196 17.6854 11.8986 16.5512 11.8986H9.15151ZM8.2756 44.0962C8.2756 44.58 7.88344 44.9721 7.39968 44.9721H0.875915C0.39216 44.9721 0 44.58 0 44.0962V4.4989C0 4.01514 0.392161 3.62298 0.875915 3.62298H16.5512C18.0698 3.62298 19.5308 3.82483 20.9341 4.22852C22.3374 4.61298 23.6446 5.17045 24.8556 5.90094C26.0859 6.6122 27.2009 7.47724 28.2005 8.49607C29.2193 9.49568 30.0843 10.6106 30.7956 11.8409C31.5261 13.0712 32.0836 14.388 32.468 15.7913C32.8717 17.1946 33.0736 18.6555 33.0736 20.1742C33.0736 22.4425 32.641 24.5859 31.776 26.6043C30.9109 28.6036 29.7287 30.3529 28.2293 31.8523C26.7299 33.3517 24.971 34.5339 22.9525 35.399C20.9533 36.264 18.8195 36.6965 16.5512 36.6965H9.15151C8.66776 36.6965 8.2756 37.0887 8.2756 37.5725V44.0962Z"
                  fill="#031555"
                />
                <path
                  d="M45.04 44.0962C45.04 44.58 44.6479 44.9721 44.1641 44.9721H37.9863C37.5026 44.9721 37.1104 44.58 37.1104 44.0962V14.9659C37.1104 14.4822 37.5026 14.09 37.9863 14.09H44.1641C44.6479 14.09 45.04 14.4822 45.04 14.9659V44.0962Z"
                  fill="#031555"
                />
                <path
                  d="M58.9384 44.0962C58.9384 44.58 58.5462 44.9721 58.0625 44.9721H51.9424C51.4587 44.9721 51.0665 44.58 51.0665 44.0962V14.9659C51.0665 14.4822 51.4587 14.09 51.9424 14.09H52.5168C52.8008 14.09 53.0672 14.2278 53.2314 14.4595L54.9928 16.945C55.2968 17.374 55.9064 17.4382 56.3198 17.1134C57.3973 16.2669 58.5873 15.5955 59.89 15.0993C61.5047 14.4649 63.1771 14.1477 64.9072 14.1477H70.9805C71.4642 14.1477 71.8564 14.5399 71.8564 15.0236V21.1149C71.8564 21.5986 71.4642 21.9908 70.9805 21.9908H64.9072C64.0806 21.9908 63.3021 22.1446 62.5716 22.4521C61.8411 22.7597 61.2067 23.1826 60.6685 23.7209C60.1302 24.2591 59.7073 24.8935 59.3998 25.624C59.0922 26.3544 58.9384 27.133 58.9384 27.9596V44.0962Z"
                  fill="#031555"
                />
                <path
                  d="M104.843 44.0962C104.843 44.58 104.451 44.9721 103.968 44.9721H103.389C103.107 44.9721 102.843 44.8369 102.678 44.6085L100.454 41.524C100.149 41.1017 99.5467 41.0377 99.1461 41.3703C98.6164 41.8101 98.0645 42.2321 97.4906 42.6365C96.664 43.2132 95.7893 43.7226 94.8666 44.1648C93.9439 44.5877 92.9923 44.9241 92.012 45.174C91.0508 45.4239 90.0704 45.5488 89.0708 45.5488C86.8986 45.5488 84.8513 45.1836 82.929 44.4531C81.0259 43.7226 79.3535 42.6654 77.9117 41.2813C76.4892 39.878 75.3646 38.1671 74.538 36.1487C73.7114 34.1302 73.2982 31.8331 73.2982 29.2572C73.2982 26.8543 73.7114 24.6532 74.538 22.654C75.3646 20.6355 76.4892 18.9054 77.9117 17.4637C79.3535 16.022 81.0259 14.907 82.929 14.1189C84.8513 13.3115 86.8986 12.9078 89.0708 12.9078C90.0704 12.9078 91.0604 13.0328 92.0408 13.2827C93.0212 13.5326 93.9727 13.8786 94.8954 14.3207C95.8182 14.7628 96.6928 15.2819 97.5194 15.8778C98.1047 16.2901 98.6623 16.7255 99.1923 17.1838C99.5746 17.5144 100.158 17.4816 100.482 17.0936L102.678 14.4623C102.844 14.263 103.09 14.1477 103.35 14.1477H103.968C104.451 14.1477 104.843 14.5399 104.843 15.0236V44.0962ZM96.9139 29.2572C96.9139 28.1807 96.7024 27.1426 96.2795 26.143C95.8758 25.1242 95.3184 24.2303 94.6071 23.4614C93.8958 22.6732 93.0596 22.0484 92.0985 21.5871C91.1565 21.1065 90.1473 20.8662 89.0708 20.8662C87.9943 20.8662 86.9755 21.0488 86.0143 21.4141C85.0724 21.7793 84.2458 22.3176 83.5345 23.0288C82.8425 23.7401 82.2946 24.6244 81.8909 25.6816C81.4872 26.7197 81.2854 27.9115 81.2854 29.2572C81.2854 30.6028 81.4872 31.8042 81.8909 32.8615C82.2946 33.8996 82.8425 34.7742 83.5345 35.4855C84.2458 36.1967 85.0724 36.735 86.0143 37.1002C86.9755 37.4655 87.9943 37.6481 89.0708 37.6481C90.1473 37.6481 91.1565 37.4174 92.0985 36.9561C93.0596 36.4755 93.8958 35.8507 94.6071 35.0818C95.3184 34.2936 95.8758 33.3998 96.2795 32.4002C96.7024 31.3813 96.9139 30.3337 96.9139 29.2572Z"
                  fill="#031555"
                />
                <path
                  d="M118.8 44.0962C118.8 44.58 118.407 44.9721 117.924 44.9721H111.746C111.262 44.9721 110.87 44.58 110.87 44.0962V14.9659C110.87 14.4822 111.262 14.09 111.746 14.09H117.924C118.407 14.09 118.8 14.4822 118.8 14.9659V44.0962Z"
                  fill="#031555"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M114.758 10.9352C117.653 10.9352 120 8.5883 120 5.6932C120 2.79811 117.653 0.451172 114.758 0.451172C111.863 0.451172 109.516 2.79811 109.516 5.6932C109.516 8.5883 111.863 10.9352 114.758 10.9352ZM114.687 9.37679C116.682 9.37679 118.3 7.75931 118.3 5.76404C118.3 3.76877 116.682 2.15129 114.687 2.15129C112.692 2.15129 111.074 3.76877 111.074 5.76404C111.074 7.75931 112.692 9.37679 114.687 9.37679Z"
                  fill="#031555"
                />
              </svg>
            </Link>
          </div>

          <div className="lg:w-[89%] xl:[70%] text-[16px] p-3  justify-between hidden lg:flex">
            <ul className="w-[80%] flex justify-between  items-center text-poppins  ">
              <Link href="/" className="">
                <li
                  className="py-2 px-5 text-[16px]  text-[#031555] hover:bg-[#e3e6ed] z-20 rounded-[15px] font-medium transition-all duration-300 cursor-pointer"
                  id="home"
                >
                  Home
                </li>
              </Link>
              <div className="relative group hover:bg-[#e3e6ed] z-20 rounded-[15px] ">
                <Link href="service" className="">
                  <button
                    className="text-[#031555] ss text-[16px] font-medium hover:bg-[#e3e6ed] px-5 py-2 rounded-[15px] flex items-center transition-all duration-800 cursor-pointer"
                    id="service"
                  >
                    Services
                    <Image
                      src={navarrow}
                      alt="dropdown"
                      className="transition-transform duration-300 group-hover:rotate-90"
                    />
                  </button>
                </Link>
                <div className="absolute -left-[45px] text-center w-[205px]   hidden  bg-[#e3e6ed] text-white py-2 mt-0 ml-2 rounded-[18px] group-hover:block transition-all duration-800 cursor-pointer">
                  <Link
                    href="/application"
                    className="block px-5 py-2 text-textprimarygrey text-[16px] font-medium hover:text-[#031555] transition-all duration-300 cursor-pointer" id="application"
                  >
                    Application Services
                  </Link>
                  <Link
                    href="/cloud"
                    className="block px-5 py-2 text-textprimarygrey text-[16px] font-medium hover:text-[#031555] transition-all duration-300 cursor-pointer" id="cloud"
                  >
                    Cloud Enablement
                  </Link>
                  <Link
                    href="/devops"
                    className="block px-5 py-2 text-textprimarygrey text-[16px] font-medium hover:text-[#031555] transition-all duration-300 cursor-pointer" id="devOps"
                  >
                    DevOps Services
                  </Link>
                  <Link
                    href="/qualityengineering"
                    className="block px-5 py-2 text-textprimarygrey text-[16px] font-medium hover:text-[#031555] transition-all duration-300 cursor-pointer" id="qualityengineering"
                  >
                    Quality Engineering
                  </Link>
                </div>
              </div>

              <div
                className="relative group hover:bg-[#E3E6ED] z-20  rounded-[15px] transition-all duration-300 cursor-pointer"
              >
                <Link href="/industries">
                  <button
                    className="text-[#031555]  text-[16px] font-medium hover:bg-[#e3e6ed] px-5 py-2 rounded-[15px]  flex items-center"
                    id="industries"
                  >
                    Industries
                    <Image
                      src={navarrow}
                      alt="dropdown"
                      className="transition-transform duration-300  group-hover:rotate-90"
                    />
                  </button>
                </Link>
                <div className="absolute  -left-[30px] w-[184px] transition-all duration-300  z-10 text-center hidden  bg-[#e3e6ed] text-white py-2 mt-0 ml-2 rounded-[18px] group-hover:block">
                  <Link
                    href="industries/#banking"
                    className="block px-4 py-[7px] text-textprimarygrey text-[16px]  font-medium  hover:text-[#031555] transition-all duration-300"
                  >
                    Banking
                  </Link>
                  <Link
                    href="industries/#engineering"
                    className="block px-4 py-[7px] text-textprimarygrey text-[16px] font-medium hover:text-[#031555] transition-all duration-300"
                  >
                    Engineering
                  </Link>
                  <Link
                    href="industries/#hightech"
                    className="block px-4 py-[7px] text-textprimarygrey text-[16px] font-medium hover:text-[#031555] transition-all duration-300"
                  >
                    High Technology
                  </Link>
                  <Link
                    href="industries/#retail"
                    className="block px-4 py-[7px] text-textprimarygrey text-[16px] font-medium hover:text-[#031555] transition-all duration-300"
                  >
                    Retail
                  </Link>
                  <Link
                    href="industries/#telecom"
                    className="block px-4 py-[7px] text-textprimarygrey text-[16px] font-medium hover:text-[#031555] transition-all duration-300"
                  >
                    Telecom
                  </Link>
                </div>
              </div>
              <Link href="/career">
                <li
                  className="py-2 px-5 text-[16px] rounded-[15px] hover:bg-[#e3e6ed] text-[#031555] font-medium transition-all duration-300 cursor-pointer"
                  id="career"
                >
                  Careers
                </li>
              </Link>
              <Link href={blogUrl}>
                <li
                  className="py-2 px-5 text-[16px] rounded-[15px] hover:bg-[#e3e6ed] text-[#031555] font-medium transition-all duration-300 cursor-pointer"
                  id="blogs"
                >
                  Blogs
                </li>
              </Link>
              <Link href="/about">
                <li
                  className="py-2 px-5 text-[16px] rounded-[15px] hover:bg-[#e3e6ed] text-[#031555] font-medium transition-all duration-300 cursor-pointer"
                  id="about"
                >
                  About Us
                </li>
              </Link>
            </ul>
            <div className="">
              <Link href="#form">
                <button className="body-font font-poppins rounded-[12px] text-[16px] py-2 px-4 bg-[#D45147] text-textprimarywhite">
                  Enquire Now
                </button>
              </Link>
            </div>
          </div>
          {!open && (
            <div
              className="z-50  relative -right-4  flex-col pt-[15px]  pl-[120px]  items-center lg:hidden "
              onClick={() => {
                setOpen(true);
                document.body.style.overflow = "hidden";
              }}
            >
              <button className="w-[50px] ">
                <Image src={menubar} alt="navbutton" />
              </button>
              <span
                className={`h-1 w-full  bg-black rounded-lg transform transition-all duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""
                  }`}
              />
              <span
                className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"
                  }`}
              />
              <span
                className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""
                  }`}
              />
            </div>
          )}

        </div>
      </div>
    </header>
  );
}
