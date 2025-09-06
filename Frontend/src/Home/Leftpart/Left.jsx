import React from 'react'
import Logout from "./Logout"
import Search from "./Search"
import Users from './Users'


function Left() {
  return (
    <div className='w-[30%] bg-black text-gray-200 flex flex-col h-screen'>
        <Search />
        <div className='flex-1 overflow-y-auto' style={{ minHeight: "calc(84vh - 10vh)" }}>
        <Users />
      </div>
        <Logout />
        
    </div>
  )
}

export default Left