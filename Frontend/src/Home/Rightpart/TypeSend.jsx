import React from 'react'
import { IoSend } from "react-icons/io5";

function TypeSend() {
  return (
    <>
    <div className='flex space-x-3 h-[8vh]  bg-gray-800'>
    <div className='w-[70%] mx-10'>
        <input type="text" placeholder="Type here" className="border border-gray-700 outline-none rounded-3xl px-4 py-3 w-full" />
        
    </div>
    <button>
        <IoSend className='text-3xl' />
    </button>
    </div>
    </>
  )
}

export default TypeSend