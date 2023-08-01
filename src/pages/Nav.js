import React from 'react'
import{Link} from "react-router-dom"
import{signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

const Nav = ({isAuth,setisAuth}) => {
    const navigate = useNavigate()

    const signUserOut = ()=>{
        signOut(auth).then(()=>{
            localStorage.clear()
            setisAuth(false)
            navigate("/login")

        })
    }
  
  return (
    <div className=' text-lg  bg-black text-white flex items-center justify-center h-20 border-b-2'>
      <div className=' ml-10' ><Link className='hover:text-red-500'  to={"/"}>Home</Link></div>
      {isAuth&&<div className=' ml-5'><Link className='hover:text-red-500' to={"/createpost"}><button  className=' text-lg mr-10 hover:text-red-500  px-2'>Create Post</button></Link></div>}
      {isAuth?<div className=''><button onClick={signUserOut} className=' text-lg mr-10 hover:text-red-500  px-2'>LogOut</button></div>
     : <div className=' ml-3 '><Link to={"/login"}><button className=' text-lg  hover:text-red-500   px-2'>Login</button></Link></div>
       
       
       }
    </div>
  )
}

export default Nav
