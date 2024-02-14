import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AppBar() {
  const [token,setToken] = useState(localStorage.getItem("token"));
  return (
    <div>
        <div className='flex justify-between border py-2 px-2 shadow-xl'>
            <div className='p-2 text-4xl font-bold'>
             Harmony Hues
            </div>
            <div className='flex gap-8  mr-8'>
                  {
                    (token) ? <div className='border rounded-2xl p-4 text-white bg-blue-500' ><button onClick={handleLogout}>Logout</button></div> : <div className='flex  gap-2'>
                    <div className='border rounded-2xl p-4 text-white bg-blue-500'>
                      <Link to="/signup"> Sign Up</Link>
                      </div>
                      
                    <div className='border rounded-2xl p-4 text-white bg-blue-500'>
                    <Link to="/signin"> Sign In</Link>
                    </div>
                    </div>
                    
                  }
                  
                  
                  <div className='border rounded-2xl p-4 text-white bg-blue-500 '>
                  <Link to="/createblog"> Create Blog</Link>
                  </div>       
            </div>
        </div>
    </div>
  )

  function handleLogout()
    {
        localStorage.clear();
        setToken(localStorage.getItem("token"));
    }
}
