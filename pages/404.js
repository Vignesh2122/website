import { React, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import pnfimg from '../img/404img.png';
import Image from 'next/image';

const ErrorPage = () => {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      router.push('/');
    }

    return () => clearInterval(timer);
  }, [countdown, router]);

  const remainingText = countdown === 0 ? 'Second' : countdown === 1 ? 'Second' : 'Seconds';

  return (
    <>
      <Header />
      <div className='mt-[9.5%] pnf-sec'>
        <Image src={pnfimg} alt='blog arrow' className='w-2/4 lg:w-1/4' />
        <p className='w-[90%] lg:w-[50%] text-center p-5'>
          The page you are looking for doesn’t exist, had its name changed,
          <br />
          might have been removed, or is temporarily unavailable.
        </p>
        <p className='text-center text-[18px] font-medium text-textDarkBlue'>
          Redirecting to Homepage in {countdown} {remainingText}
        </p>
        <button
          onClick={() => router.push("/")}
          className='body-font font-poppins text-textprimarywhitegroup transition-all flex items-center text-bgPrimaryRed border-2 border-bgPrimaryRed rounded-xl hover:border-bgPrimaryRed hover:bg-bgPrimaryRed hover:text-textWhite bg-textWhite md:px-8 px-2 md:py-3 py-1 mt-10 mx-auto my-10 lg:mx-0 md:text-[20px] text-[12px] lg:my-3 drop-shadow-[4px_4px_12px_rgba(212,81,71,.1)]'>
          Go back to Home</button>
      </div>
      <Footer />
    </>
  );
};

export default ErrorPage;
