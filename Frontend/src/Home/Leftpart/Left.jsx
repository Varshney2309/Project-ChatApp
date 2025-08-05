import React from 'react'
import Logout from "./Logout"
import Search from "./Search"
import Users from './Users'


function Left() {
  return (
    <div className='w-[30%] bg-black text-gray-200 flex flex-col h-screen'>
        <Search />
        <Users />
        <Logout />
        
    </div>
  )
}

export default Left