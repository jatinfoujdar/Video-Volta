import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignForm,setIsSignForm] = useState(true);
  

  const handleButtonClick = ()=>{

  }

  const toggleSignInForm =()=>{
    setIsSignForm(!isSignForm)
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='bg'/>

        </div>
        <form className='absolute p-12 w-3/12 bg-black bg-opacity-60 rounded my-36 mx-auto right-0 left-0 '>
          <h1 className='font-bold text-3xl py-4 text-white' onClick={handleButtonClick} >
            {isSignForm ? "Sign In" : "Sign Up"} </h1>
          {!isSignForm && <input type='text' placeholder='Name' className='p-3 m-4 w-full font-bold bg-slate-700 rounded-lg'/>}
          <input type='text' placeholder='Email Address' className='p-3 m-4 w-full font-bold bg-slate-700 rounded-lg'/>
          <input type='password' placeholder='Password' className='p-3 m-4 w-full font-bold bg-slate-700 rounded-lg'/>
          <button className='p-4 m-4 bg-red-700 w-full text-white rounded-lg'>{isSignForm ? "Sign In" : "Sign Up"}</button>
          <p className='text-white py-4 cursor-pointer' onClick={toggleSignInForm}>
          {isSignForm ? "New to Netflix? Sign Up Now" : "Already Registred? SignIn Now"} </p>
        </form>
    </div>
  )
}

export default Login