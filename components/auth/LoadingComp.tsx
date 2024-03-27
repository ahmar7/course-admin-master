'use client'
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"; // Make sure this import is correct, usually it's from 'next/router'
import { useSelector } from 'react-redux';

interface RootState {
  authReducer: {
    token: string | null;
  };
}

const LoadingComp = () => {
  const router = useRouter();
  const token = useSelector((state: RootState) => state.authReducer.token);

  // Introduce a state to track if the initial check is done
  const [isInitialCheckDone, setIsInitialCheckDone] = useState(false);

  useEffect(() => {
    // Directly handle redirection inside useEffect
    const handleRedirection = () => {
      const destinationPath = token ? '/dashboard' : '/login';
      // Ensure we're not already at the destination and that the initial check is completed
      if (destinationPath && isInitialCheckDone) {
        router.push(destinationPath);
      }
    };

    // Initially, we might not have the token status ready, wait for it
    if (!isInitialCheckDone) {
      // Mock an async check, e.g., verifying the token or waiting for some state update
      // This could be replaced with an actual async operation if needed
      const timer = setTimeout(() => {
        setIsInitialCheckDone(true); // Indicate that the initial token check is complete
      }, 500); // Adjust the delay based on your application's needs

      return () => clearTimeout(timer);
    }

    // Once the initial check is done, decide on redirection
    handleRedirection();
  }, [token, router, isInitialCheckDone]);

  // Render the Loader while handling redirection
  return (
    <div className="flex w-full bg-white absolute justify-center items-center h-screen">
      <div className="w-fit">
        <img alt="Loading..." src={"/images/logo.png"} className="h-[200px] animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingComp;
