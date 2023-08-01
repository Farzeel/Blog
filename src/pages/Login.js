import React from 'react'
import {auth,provider} from "../firebase"
import{signInWithPopup} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import{FcGoogle} from "react-icons/fc"

const Login = ({setisAuth}) => {
  const navigate = useNavigate()

  const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
 localStorage.setItem("isAuth",true)
 setisAuth(true)
 navigate("/")
    })
  }
  return (
    <div className=' h-72 flex flex-col justify-center items-center'>
      <p className=' text-lg'>Sign in with Google to Continue</p>
      <button onClick={signInWithGoogle} className=' mt-2  text-black hover:bg-black hover:text-white  border-2 border-cyan-900 p-2 text-sm flex items-center'><FcGoogle className=' mr-1'/>Sign in with Google</button>
    </div>
  )
}

export default Login
