import { React, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const MyComponent = () => {
  const blogUrl = process.env.NEXT_PUBLIC_BLOG_URL;
  const router = useRouter();
  const [countdown, setCountdown] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    });

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (countdown === 0) {
    router.push(blogUrl);
  }

  return (
    <>
    </>
  );
};

export default MyComponent;
