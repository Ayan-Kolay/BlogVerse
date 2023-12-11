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
    <div>
      <div className='flex items-center justify-center w-full'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(submit)} className='mt-8'>
            <div className='space-y-5'>
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
        </form>
        </div>
        </div>
        </div>
  )
}

export default ForgetPassword
