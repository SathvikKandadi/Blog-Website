import React from 'react'
import { Link } from 'react-router-dom'

export default function AppBar() {
  return (
    <div>
        <div className='flex justify-between border py-2 px-2 shadow-xl'>
            <div className='p-2 text-4xl font-bold'>
             Harmony Hues
            </div>
            <div className='flex gap-8  mr-8'>
                  <div className='border rounded-2xl p-4 text-white bg-blue-500'>
                  <Link to="/signup"> Sign Up</Link>
                  </div>
                  <div className='border rounded-2xl p-4 text-white bg-blue-500'>
                  <Link to="/signin"> Sign In</Link>
                  </div>
                  <div className='border rounded-2xl p-4 text-white bg-blue-500 '>
                  <Link to="/createblog"> Create Blog</Link>
                  </div>       
            </div>
        </div>
    </div>
  )
}
