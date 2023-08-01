import { collection, deleteDoc, doc, getDocs, orderBy, query, } from 'firebase/firestore';
import React from 'react'
import { useState,useEffect  } from 'react'
import { auth, db } from '../firebase';
import{MdDelete} from "react-icons/md"
import {ThreeCircles,TailSpin} from "react-loader-spinner"

const postRef = collection(db,"posts")
const Home = ({isAuth}) => {
  const [loading, setloading] = useState(true);
  const [postlist, setpostlist] = useState([]);
useEffect(() => {
  
  const getPosts =async ()=>{
    setloading(true)
    const messagesQuery = query(postRef, orderBy("date", "desc"));
    const data = await getDocs(messagesQuery)
    setpostlist(data.docs.map((doc)=>  ({...doc.data(),id:doc.id})))
    setloading(false)
  }
  
  getPosts()
  
}, []);

const deletePost=async (id)=>{
  const postDoc = doc(db,"posts",id)
 
      await deleteDoc(postDoc)
      window.location.reload()
   
    
  
}
 

  return (
    <>
    <div className=' mt-1'><h1 className='  from-stone-900 text-center text-4xl'>MY BLOGS</h1></div>
    <div className=' mt-2 flex justify-center items-center flex-col'>

      {loading ?<div className=' flex items-center justify-center h-96'><ThreeCircles height={40} /></div>:postlist.map((post,index)=>{
  return <div key={index} className='shadow p-3 w-full md:w-1/2  text-black md:p-3 mt-4 flex flex-col items-start'>

<div className=' flex justify-between w-full items-center'>
<h3 className='  border-yellow-500  border-b-2 mt-2'><span className=' font-bold'>Title:</span> <span className=''>{post.Title}</span> </h3>
{isAuth&&post.author.id===auth.currentUser.uid&&<button onClick={()=>deletePost(post.id)} className=' flex mr-2 items-center justify-center w-20 hover:bg-black hover:text-white'><MdDelete color='red' size={20}/>Delete</button>}
</div>
 
 
  <p className='max-h-[320px] overflow-hidden overflow-y-auto text-justify hyphens-auto p-1 border-b-2 border-yellow-500  mt-2'>{post.Post}</p>
  <h1 className='mt-2 border-yellow-500  border-b-2' ><span className='   font-bold'>Author:</span> <span className='  text-sm'>@{post.author.name}</span> </h1>
  <h1 className=' mt-2 border-yellow-500  border-b-2'><span className=' font-bold'>Publish on: <span className=' text-xs'>{post.date}</span></span> </h1>
</div> })}
     
      
    </div>
    </>
  )
}

export default Home
