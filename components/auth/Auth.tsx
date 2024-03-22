import { useContext, useEffect, useState } from 'react'
import { useRouter } from "next/navigation";
import { useSelector } from 'react-redux'
export const Auth = ({ children }: { children: any }) => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const {token} = useSelector((state: any) => state.authReducer)

  useEffect(() => {
    if ( !token) {
      router.push('/login')
    }
    setIsLoading(false)
  }, [ router, token])

  if (isLoading) {
    return (
      <div className="flex w-full bg-white absolute justify-center items-center h-screen">
        <div className="w-fit">
          <img
            alt="logo1"
            src={"/images/logo.png"}
            className="h-[200px] animate-pulse"
          />
        </div>
      </div>
    )
  }

 

  return children
}
