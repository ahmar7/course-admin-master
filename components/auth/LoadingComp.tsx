'use client';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation"; // Corrected the import path
import { useSelector } from 'react-redux';

interface RootState {
  authReducer: {
    token: string | null;
  };
}

const LoadingComp = () => {
  const router = useRouter();
  const token = useSelector((state: RootState) => state.authReducer.token);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const redirectUser = async () => {
      if (token !== null) {
        // Use async/await syntax
        await router.push('/dashboard');
        setIsLoading(false);
      } else if (token === null && !isLoading) {
        await router.push('/login');
      }
    };

    redirectUser();
  }, [token, isLoading]); // Removed 'router' from dependency array to avoid unnecessary re-runs

  // Simulate an async operation like checking session storage or waiting for a Redux action to complete
  useEffect(() => {
    const checkTokenStatus = setTimeout(() => {
      setIsLoading(false); // Signal that loading/checking is complete
    }, 500); // Adjust time as needed

    return () => clearTimeout(checkTokenStatus);
  }, []);

  return isLoading ? (
    <div className="flex w-full bg-white absolute justify-center items-center h-screen">
      <div className="w-fit">
        <img alt="Loading..." src={"/images/logo.png"} className="h-[200px] animate-pulse" />
      </div>
    </div>
  ) : null; // Optionally render nothing or some placeholder when not loading
};

export default LoadingComp;