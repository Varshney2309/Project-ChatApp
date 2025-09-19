import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import TypeSend from './typeSend'
import UseConversation from '../../zustand/UseConversation.js'
import { useEffect } from 'react'
import Loading from '../../components/Loading.jsx'
import { useAuth } from '../../context/Authprovider.jsx'
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = UseConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <ChatUser />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(92vh - 8vh)" }}
            >
              <Messages />
            </div>
            <TypeSend />
          </>
        )}
      </div>
    </div>
  )
}

export default Right

const NoChatSelected = () =>{
  const [authUser] = useAuth()
  return (
    <>
      <div className="relative">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
      <div className='flex h-screen items-center justify-center'>
        <h1 className='text-center'>Welcome {" "}<span className='font-semibold text-xl'>{authUser.user.fullname}</span>
        <br />
        No chat selected, please start conversation by seleting anyone to your contacts
        </h1>
      </div>
      </div>
    </>
  )
}