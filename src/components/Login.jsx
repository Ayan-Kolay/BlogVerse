import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {login as authLogin} from '../features/auth/authSlice.js'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../../appwrite/authService.js"
import {useForm} from "react-hook-form"
import { ArrowRight } from 'lucide-react'


function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                console.log(userData);
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    // <div
    // className='flex items-center justify-center w-full'
    // >
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
    //     <form onSubmit={handleSubmit(login)} className='mt-8'>
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
    //             />
    //             <Input
    //             label="Password: "
    //             type="password"
    //             placeholder="Enter your password"
    //             {...register("password", {
    //                 required: true,
    //             })}
    //             />
    //             <p className="mt-2 text-center text-base text-black/60">
    //                 Forget Password!&nbsp;
    //                 <Link
    //                     to="/forget-password"
    //                     className="font-medium text-primary transition-all duration-200 hover:underline"
    //                 >
    //                     Reset Password
    //                 </Link>
    //             </p>
    //             <Button
    //             type="submit"
    //             className="w-full"
    //             >Sign in</Button>
    //         </div>
    //     </form>
    //     </div>
    // </div>

    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2">
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
            <form  method="POST" className="mt-8" onSubmit={handleSubmit(login)} >
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
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                <p className="mt-2 text-center text-base text-black/60">
                    Forget Password!&nbsp;
                    <Link
                        to="/forget-password"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Reset Password
                    </Link>
                </p>
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">

            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>



  )
}

export default Login