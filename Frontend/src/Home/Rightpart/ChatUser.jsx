import React from 'react'
import UseConversation from '../../zustand/UseConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';


function ChatUser() {
  const {selectedConversation} = UseConversation()
  const {onlineUsers} = useSocketContext()
  const getOnlineUsersStatus = (userId)=>{
    return onlineUsers.includes(userId)?"Online":"Offline"
  }

  console.log(selectedConversation);
  
  return (
    <div className='flex space-x-3 items-center h-[8vh] justify-center bg-gray-800 hover:bg-gray-700 duration-300'>
        <div className="avatar avatar-online">
          <div className="w-16 rounded-full">
          <img src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" />
          </div>
        </div>
        <div>
            <h1 className='text-xl'>{selectedConversation.fullname}</h1>
            <span className='text-sm'>{getOnlineUsersStatus(selectedConversation._id)}</span>
        </div>
    </div>
  )
}

export default ChatUser