import React, {useState} from 'react'
import authService from '../../appwrite/authService.js'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../features/auth/authSlice.js'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
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
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
                <Link
                    to="/login"
                    className="font-medium text-primary transition-all duration-200 hover:underline">
                    Sign in
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
            <form  method="POST" className="mt-8" onSubmit={handleSubmit(create)} >
              <div className="space-y-5">
                <div>
                  
                  <div className="mt-2">
                  <Input
                        label="Full Name: "
                        placeholder="Enter your full name"
                        {...register("name", {
                            required: true,
                        })}
                        />
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
                        })}/>
                    <Input
                        label="Password: "
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", {
                            required: true,
                        })}/>
                    
                    <Button
                        type="submit"
                        className="w-full">
                        Sign in
                    </Button>
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

export default Signup