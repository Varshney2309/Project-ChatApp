import React from 'react'

import { SlLogout } from "react-icons/sl";

function Logout() {
  return (
    <div className='h-[10vh]'>
    <div>
      <SlLogout className='text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full px-4 py-3 mx-7 mt-7' />
    </div>
    </div>
  )
}

export default Logout