//import React from 'react'
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div className="bg-slate-50 h-full w-full fixed top-0 left-0 flex justify-center items-center">
      <div>
      <div className="border-1 shadow-2xl  bg-white p-10 rounded-lg">
        <div className=" flex justify-start text-4xl font-bold">Sign Up</div>
        <div className="flex justify-start items-center  font-bold font-mono pt-2 mt-2" >Enter your informtion to create</div>
        <div className="flex justify-start items-center font-bold font-mono ">account.....</div>
       
       <div className="grid grid-rows-1 flex justify-center ">

       <div className=" grid grid-cols-3 gap-2 pt-2 ">
            <div className="  p-2 flex justify-end col-span-1 font-bold">
              First Name 
            </div>
            <div className="col-span-2">
              <input className="border p-2 rounded border-gray-800  bg-white" placeholder="Enter your first name" type="text" />
            </div>
        </div>  
        <div className="grid  grid-cols-3 gap-2 pt-2">
            <div className=" p-2 flex justify-end col-span-1 font-bold">
             Last Name 
            </div>
            <div className="col-span-2">
              <input className="border  p-2 rounded border-gray-800 bg-white" placeholder="Enter your last name" type="text" />
            </div>
        </div> 
        <div className="grid   grid-cols-3 gap-2 pt-2">
            <div className="  p-2 flex justify-end col-span-1 font-bold">
              Email 
            </div>
            <div className="col-span-2">
              <input className=" border  p-2 rounded border-gray-800 bg-white"placeholder="Enter your email" type="text" />
            </div>
        </div> 
        <div className="grid grid-cols-3 gap-2 pt-2">
            <div className=" p-2 flex justify-end col-span-1 font-bold">
             Password 
            </div>
            <div className="col-span-2">
              <input className="border p-2 rounded border-gray-800 bg-white" placeholder="Enter your password" type="text" />
            </div>
        </div> 
        
       </div>
        
        <div className="flex justify-center items-center pt-2">
          <button className=" px-2 py-2 text-white w-full rounded-full bg-blue-500 mt-2">Sign Up</button>
        </div>
        <dir className="flex justify-start font-bold pt-2 mt-2">
        Already have an acccount? <Link to="/signin" className="underline">Sign In</Link>
        </dir>
      </div>
      </div>
    </div>
  );
}
