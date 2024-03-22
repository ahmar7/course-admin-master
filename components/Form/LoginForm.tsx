'use client'
import React,{useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAxios } from '@/components/services/http.service';
import {useDispatch} from '@/components/store/index'
import {setUserDetails} from '@/components/store/reducers/auth/authReducer'
import { useRouter } from "next/navigation";
import LoaderIcon from '@/components/Icon/LoaderIcon';
const validationSchema = Yup.object({

  email: Yup.string()
    .required('Please enter your email')
    .email('Please enter a valid email'),

  password: Yup.string()
    .required('Please enter your password')
    .min(8, 'Password should be at least 8 characters'),
 
});

const initialValues = {
 
    email: '',
  
    password: '',
   
  };
const LoginForm = () => {
  const [isLoading,setIsloading]=useState(false)
    const { post } = useAxios()
   const router = useRouter()
    const dispatch=useDispatch()
  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, {resetForm}) => {
      setIsloading(true)
        post('/login', values)
        .then((response) => {
          const result:any = response.data
          dispatch(setUserDetails({token:result?.token,userData:result?.user}))
          console.log(result,"success")
          
          router.push('/')
          setIsloading(false)
          // resetForm()
        })
        .catch((error) => {
            const errorMessage = error.response.data.message
           console.log(errorMessage,"error")
           setIsloading(false)
          //  resetForm()
        })
    }}
  >
    {({ }) => (
      <Form >
         <div className="">
           
              <div className='my-8'>
                  <Field type="email" name='email' className="focus:outline-none border-b bg-white text-black w-full pb-2 border-sky-400 placeholder-gray-500 "  placeholder="Email Address "/>
                  <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
             </div>
            
             <div className="mb-8">
                 <Field type="password" name='password' className="focus:outline-none  bg-white text-black border-b w-full pb-2 border-sky-400 placeholder-gray-500 "  placeholder="Password " />
                 <ErrorMessage
                name="password"
                component="div"
                className="text-red-500"
              />
             </div>
           
             <div className="flex justify-center my-6">
             
                 {isLoading ? (
                          <button
                            disabled
                            className="!bg-primary mt-7 rounded-lg text-priamry font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2"
                          >
                            <LoaderIcon />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            className="!bg-primary mt-7 !text-white rounded-lg text-priamry font-headingBold text-xl flex justify-center items-center h-12 w-full lg:w-1/2"
                          >
                         Login
                        
                          </button>
                        )}
             </div>
             {/* <div className="flex justify-center ">
                 <p className="text-gray-500">Already have an acount? </p>
                 <a href="/login" className="text-sky-600 pl-2"> Sign In</a>
             </div> */}
         </div>
         </Form>
             )}
         </Formik>
  )
}

export default LoginForm