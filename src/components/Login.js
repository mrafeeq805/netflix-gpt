import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [login,setLogin] = useState(true)
  return (
    <div className='h-screen bg-cover bg-black md:bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg)]'>
        <Header/>
        <div className='flex justify-center items-center h-max '>
          <div className='bg-opacity-80 bg-black px-6 mt-16 w-full md:w-4/12 md:px-12 md:py-5 md:rounded-lg'>
            <form className='w-full space-y-5 mb-5'>
                <label className='text-3xl text-white font-bold mb-2'>{!login ? "Sign Up" : "Sign In"}</label>
                {!login && <input className='text-white w-full border-[1px] bg-inherit md:bg-inherit rounded-sm p-3 pl-5 md:pl-6 md:p-2' placeholder='Enter Full Name' type='text'/>}
                
                <input className='text-white w-full border-[1px] bg-inherit md:bg-inherit rounded-sm p-3 pl-5 md:pl-6 md:p-2' placeholder='Enter Email ID' type='email'/>
                <input className='text-white w-full border-[1px] bg-inherit md:bg-inherit rounded-sm p-3 pl-5 md:pl-6 md:p-2' placeholder='Enter Password' type='password'/>
                <button className='bg-red-500 w-full text-white p-3 text-lg md:text-base rounded-md md:p-2'>{!login ? "Sign Up" : "Sign In"}</button>
                
            </form>
            <span onClick={()=>setLogin(!login)} className='text-white mt-5 text-sm cursor-pointer select-none'>{login ? "New to Netflix ? Signup here" : "Already Registered ? Signin here"}</span>
          </div>
        </div>
        
        
    </div>
  )
}

export default Login