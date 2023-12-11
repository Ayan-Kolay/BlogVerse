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

<section>
      <div className="grid grid-cols-1">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Update the Password</h2>
           
    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form  method="POST" className="mt-8" onSubmit={handleSubmit(submit)} >
              <div className="space-y-5">
                <div>
                  
                  <div className="mt-2">
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


    // <div>
    //   <div className='flex items-center justify-center w-full'>
    //     <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
    //     <div className="mb-2 flex justify-center">
    //                 <span className="inline-block w-full max-w-[100px]">
    //                     <Logo width="100%" />
    //                 </span>
    //     </div>
    //     <h2 className="text-center text-2xl font-bold leading-tight">Update the password</h2>
        
    //     {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    //     <form onSubmit={handleSubmit(submit)} className='mt-8'>
    //         <div className='space-y-5'>
    //             <Input
    //             label="Password: "
    //             placeholder="Enter your password"
    //             type="text"
    //             {...register("password", {
    //                 required: true,
                    
    //             })}
    //             />
    //             <Input
    //             label="Confirm Password: "
    //             placeholder="Enter your password Again"
    //             type="password"
    //             {...register("passwordAgain", {
    //                 required: true,
                    
    //             })}
    //             />
    //             <Button
    //             type="submit"
    //             className="w-full"
    //             >Update</Button>
    //         </div>
    //     </form>
    //     </div>
    //     </div>
    //     </div>
  )
}

export default ResetPassword
