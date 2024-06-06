import React, { useEffect } from 'react'
import {signOut} from "firebase/auth";
import {auth} from "../util/firebase";
import {useNavigate} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../util/userSlice';
import { useDispatch, useSelector } from 'react-redux';



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = ()=>{
  signOut(auth).then(() => {
  
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
  navigate("/error");
});
}
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName , photoURL} = user;
      dispatch(addUser({uid: uid,email: email, displayName: displayName, photoURL: photoURL}))
      
      navigate("/browse");
    } else {
      // User is signed out
      dispatch(removeUser())
     navigate("/");
    }
  });
},[])
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44'
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="jumpman" /> 
   
   {user && (<div className='flex p-2'>
    <img className='w-12 h-12 ' alt='usericon'
    src= {user.photoURL}/>
   <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
   </div>)}
   
  </div>
  )
}

export default Header