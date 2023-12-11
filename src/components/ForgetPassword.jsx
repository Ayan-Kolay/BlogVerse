import React, { useState } from 'react'
import {Button,Input,Logo} from '../components'
import authService from '../../appwrite/authService'
import { Link } from 'react-router-dom'

import {useForm} from 'react-hook-form'
function ForgetPassword() {
    const {register,handleSubmit} = useForm()
    const [error, setError] = useState();
    const submit = (data) => {
        setError("")
        try {
            const recovery = authService.forgetPassword(data,"http://127.0.0.1:5173/reset-password")
            console.log(recovery);
        }
        catch(error) {
            setError(error.message)
        }
    }
  return (
    // <div>
    //   <div className='flex items-center justify-center w-full'>
    //     <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    //     <div className="mb-2 flex justify-center">
    //                 <span className="inline-block w-full max-w-[100px]">
    //                     <Logo width="100%" />
    //                 </span>
    //     </div>
    //     <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
    //     <p className="mt-2 text-center text-base text-black/60">
    //                 Don&apos;t have any account?&nbsp;
    //                 <Link
    //                     to="/signup"
    //                     className="font-medium text-primary transition-all duration-200 hover:underline"
    //                 >
    //                     Sign Up
    //                 </Link>
    //     </p>
    //     {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    //     <form onSubmit={handleSubmit(submit)} className='mt-8'>
    //         <div className='space-y-5'>
    //             <Input
    //             label="Email: "
    //             placeholder="Enter your email"
    //             type="email"
    //             {...register("email", {
    //                 required: true,
    //                 validate: {
    //                     matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
    //                     "Email address must be a valid address",
    //                 }
    //             })}
    //             /><Button
    //             type="submit"
    //             className="w-full"
    //             >Submit</Button>
    //         </div>
    //     </form>
    //     </div>
    //     </div>
    //     </div>

    <section>
      <div className="grid grid-cols-1">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
            <p className="mt-2 text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link
    to="/signup"
    className="font-medium text-primary transition-all duration-200 hover:underline"
>
    Sign Up
</Link>
            </p>
    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form  method="POST" className="mt-8" onSubmit={handleSubmit(submit)} >
              <div className="space-y-5">
                <div>
                  <label htmlFor="" className="text-base font-medium text-gray-900">
                    {' '}
                    Email address{' '}
                  </label>
                  <div className="mt-2">
                  <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                /><Button
                type="submit"
                className="w-full"
                >Submit</Button>
            </div>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">

            </div>
          </div>
        </div>
        <div className="h-full w-full">
         
        </div>
      </div>
    </section>
  )
}

export default ForgetPassword
