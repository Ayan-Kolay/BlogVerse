import React, { useState } from 'react'
import {Button,Input,Logo} from '../components'
import authService from '../../appwrite/authService'
import { Link, useSearchParams } from 'react-router-dom'

import {useForm} from 'react-hook-form'
function ResetPassword() {
    const {register,handleSubmit} = useForm()
    const [error, setError] = useState();
    const [searchParams, setSearchParams] = useSearchParams();

  // Get a specific query parameter
  const userId = searchParams.get('userId');

  // Set a query parameter
  const secret = searchParams.get('secret')
    
    const submit = (data) => {
        setError("")
        try {
            console.log(userId);
            const recovery = authService.resetPassword(userId,secret,data)
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
        <h2 className="text-center text-2xl font-bold leading-tight">Update the password</h2>
        
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(submit)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Password: "
                placeholder="Enter your password"
                type="text"
                {...register("password", {
                    required: true,
                    
                })}
                />
                <Input
                label="Confirm Password: "
                placeholder="Enter your password Again"
                type="password"
                {...register("passwordAgain", {
                    required: true,
                    
                })}
                />
                <Button
                type="submit"
                className="w-full"
                >Update</Button>
            </div>
        </form>
        </div>
        </div>
        </div>
  )
}

export default ResetPassword
