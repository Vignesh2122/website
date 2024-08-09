import { useState, useEffect } from 'react';
import Image from "next/image";
import cookie from "../public/career/cookies.svg";

const CookiesBanner = ({ children }) => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!document.cookie.includes('accepted_cookies')) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = 'accepted_cookies=yes; max-age=' + 60 * 60 * 24 * 30;
    setShowBanner(false);
    // document.cookie = 'cookieBy=codinglab; max-age=' + 60 * 60 * 24 * 30;

  };

  const closeCookies = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className="p-4 fixed bottom-4 right-4 bg-[#031555] z-50 rounded-md shadow-2xl w-[50%] md:w-[30%] lg:w-[30%]">
          <div className='flex'>
            <Image
              src={cookie}
              alt="cookie"
              className="w-[15px] lg:w-[25px] mr-2"
            />
            <h2 className="text-textWhite text-xs lg:text-base font-semibold">Cookies</h2>
          </div>

          <div className="mt-1 lg:mt-2">
            <p className="text-textWhite text-[10px] lg:text-xs">
            Our website would like to use the necessary cookies to ensure you get the best user experience.{' '}
              {/* <a href="#" className="text-blue-500 no-underline hover:underline">
                Read more....
              </a> */}
            </p>
          </div>

          <div className="mt-2 lg:mt-4 flex justify-evenly">
            <button
              className="rounded-lg w-[calc(50%-10px)] py-1 bg-bgLightWhite hover:bg-bgPrimaryRed text-[10px] lg:text-base hover:text-textWhite cursor-pointer"
              onClick={acceptCookies}
            >
              Accept
            </button>
            <button
              className="rounded-lg w-[calc(50%-10px)] py-1 bg-bgLightWhite hover:bg-bgPrimaryRed text-[10px] lg:text-base hover:text-textWhite cursor-pointer"
              onClick={closeCookies}
            >
              Decline
            </button>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default CookiesBanner;
