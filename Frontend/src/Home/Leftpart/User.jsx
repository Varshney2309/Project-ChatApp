import React from 'react'
import UseConversation from '../../zustand/UseConversation.js'
import { useSocketContext } from '../../context/SocketContext.jsx';

function User({user}) {
  const {selectedConversation,setSelectedConversation}=UseConversation()
  const isSelected=selectedConversation?._id===user._id;
  const {socket,onlineUsers} = useSocketContext()
  const isOnline = onlineUsers.includes(user._id)


  return (
    <div className={`hover:bg-slate-600 duration-300 ${isSelected?"bg-slate-700":""}`} onClick={()=>setSelectedConversation(user)}>
        <div className='flex space-x-4 px-8 py-3 hover:bg-slate-800 duration-300 mt-2'>
            <div className={`avatar ${isOnline?"avatar-online":""}`}>
                <div className="w-12 rounded-full">
                <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" />
                </div>
            </div>
            <div>
                <h1 className='font-bold text-white'>{user.fullname}</h1>
                <span>{user.email}</span>
            </div>  
       </div>
    </div>
  )
}

export default User