import { addDoc, collection } from 'firebase/firestore'
import React, { useState,useEffect } from 'react'
import {useNavigate } from 'react-router-dom'
import { db , auth } from './firebase'

import {ThreeCircles} from "react-loader-spinner"


const postRef = collection(db,"posts")
const CreatePostPage = ({isAuth}) => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate()
  const [Title , setTitle]=useState("")
  const [Post , setPost]=useState("")

  const createpost =async ()=>{
    setloading(true)
        await addDoc(postRef,{
          Title,Post,author:{
            name:auth.currentUser.displayName,
            id:auth.currentUser.uid
            
            
          },
          date:new Date().toLocaleString()
          
        })
        setloading(false)
        navigate("/")
  }
  useEffect(() => {
    if(isAuth==false){
      navigate("/login")
    }
    
  }, []);
  return (
    <div className=' height   flex justify-center items-center '>
      <div className='  mt-0 md:mt-10 w-full p-3 md:w-1/2 flex flex-col'>
        <h1 className=' text-3xl text-center font-bold '>Create post</h1>
        <div  className=' mt-3 flex flex-col'>
          <label className=' text-lg font-bold' htmlFor="title">Title</label>
          <input onChange={(e)=>setTitle(e.target.value)} className='bg-orange-100 p-2 outline-none border-2 border-cyan-900  ' type="text" name="title" id="title" placeholder='Title....' />
        </div>
        <div className='flex flex-col mt-3'>
          <label className='text-lg font-bold ' htmlFor="description">Post</label>
          <textarea onChange={(e)=>setPost(e.target.value)} className='bg-orange-100 p-2  h-52 outline-none border-2 border-cyan-900' type="text" name="description" id="description" placeholder='Post....' ></textarea>
        </div>
        <div className=' mt-3 flex items-center justify-center'>{loading?<ThreeCircles height={25}/>:<button onClick={createpost} className=' text-black hover:bg-black hover:text-white  border-2 border-cyan-900 p-2 text-sm'>Submit Post</button>}</div>
      </div>
      
    </div>
  )
}

export default CreatePostPage
