import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../util/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../util/firebase';

const Login = () => {
  const [isSignForm,setIsSignForm] = useState(true);
  const [errorVar,setErrorVar] = useState(null);
  
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = ()=>{
     console.log(email.current.value);
     console.log(password.current.value);
     console.log(name.current.value);
    const message = checkValidData(email.current.value,password.current.value);
     setErrorVar(message);
     if(message) return;
    
     if(!isSignForm){
      createUserWithEmailAndPassword(auth, email.current.value,password.current.value,name.current.value)
      .then((userCredential) => {
        // Signed up 
        
        const user = userCredential.user;
        console.log(user);
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrorVar(errorCode +" " + errorMessage);
      });
     }
     else
     {
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorVar(errorCode +" " + errorMessage);
      });
     }
     
     
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
        <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 w-3/12 bg-black bg-opacity-60 rounded my-36 mx-auto right-0 left-0 '>
          <h1 className='font-bold text-3xl py-4 text-white'  >
            {isSignForm ? "Sign In" : "Sign Up"} </h1>
          {!isSignForm && <input ref={name}  type='text' placeholder='Name' className='p-3 m-4 w-full font-bold bg-slate-700 rounded-lg'/>}
          <input ref={email} type='text' placeholder='Email Address' className='p-3 m-4 w-full font-bold bg-slate-700 rounded-lg'/>
          <input ref={password} type='password' placeholder='Password' className='p-3 m-4 w-full font-bold bg-slate-700 rounded-lg'/>
          <p className='text-red-500'>{errorVar}</p>
          <button className='p-4 m-4 bg-red-700 w-full text-white rounded-lg' onClick={handleButtonClick}>{isSignForm ? "Sign In" : "Sign Up"}</button>
          <p className='text-white py-4 cursor-pointer' onClick={toggleSignInForm} >
          {isSignForm ? "New to Netflix? Sign Up Now" : "Already Registred? Sign In Now"} </p>
        </form>
    </div>
  )
}

export default Login