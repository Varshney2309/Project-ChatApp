import React from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../context/useSendMessage.js';
import { useState } from 'react';

function TypeSend() {
  const [message,setMessage] = useState("")
  const {loading,sendMessages} = useSendMessage();
  const handleSubmit = async (e) =>{
    e.preventDefault();
    await sendMessages(message)
    setMessage("")
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className='flex space-x-3 h-[8vh]  bg-gray-800'>
          <div className='w-[70%] mx-10'>
            <input 
            type="text" 
            placeholder="Type here" 
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            className="border border-gray-700 outline-none rounded-3xl px-4 py-3 w-full" 
            />
            
          </div>
          <button>
            <IoSend className='text-3xl' />
          </button>
        </div>
    </form>
    </>
  )
}

export default TypeSend