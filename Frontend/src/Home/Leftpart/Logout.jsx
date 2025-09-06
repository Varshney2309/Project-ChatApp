import React, { useState } from 'react'

import { SlLogout } from "react-icons/sl";
import axios from 'axios';
import Cookies from 'js-cookie'
import toast from 'react-hot-toast';

function Logout() {
  const [loading,setLoading]=useState(false)
  const handleLogout = async () => {
    setLoading(true)
    try {
      const res= await axios.post('/api/user/logout')
      localStorage.removeItem('ChatApp');
      Cookies.remove('jwt')
      setLoading(false)
      toast.success("Logged out Successfully")
      window.location.reload()
    } catch (error) {
      console.log("error in logout",error);
      toast.error("Error in logging out")
      
    }
  }
  return (
    <div className='h-[10vh]'>
    <div>
      <SlLogout className='text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full px-4 py-3 mx-7 mt-7' onClick={handleLogout} />
    </div>
    </div>
  )
}

export default Logout