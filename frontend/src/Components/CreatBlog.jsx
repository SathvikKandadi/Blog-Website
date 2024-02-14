import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
export default function CreatBlog() {
    const navigate=useNavigate();
    const[ token,setToken]=useState("");
    useEffect(()=>{
        setToken(localStorage.getItem("token"))
        
    if(!token){
        navigate("/");


    }

    } ,[token])
    return (
      <div className=' flex justify-center items-center'>
          <div className='border  rounded-xl  m-8 w-1/4  shadow-2xl grid grid-rows-1 '>
          <div className='m-4'>
              <div className='font-bold'>Title:</div>
              <div className=''>
                  <input type="text"  className='w-80 border  p-2  border-gray-800 bg-white rounded' placeholder='Enter the title name' />
              </div>
          </div>
          <div className='m-4'>
              <div className='font-bold'>Author:</div>
              <div className=''>
                  <input className='w-80  border  p-2  border-gray-800 bg-white rounded'type="text" placeholder='Enter the Author name' />
              </div>
          </div>
          <div className='m-4'>
              <div className='font-bold'>Discription:</div>
              <div className=''>
                  <textarea className='border p-2 border-gray-800 bg-white w-80 h-60 rounded'></textarea>
              </div>
          </div>
          <div className='p-2 m-4'>
              <button className='border rounded-2xl p-2 text-white bg-blue-500 w-full' >Save</button>
          </div>
          </div>
      </div>
    )
  }