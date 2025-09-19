import React from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx';
import { useRef } from 'react';
import { useEffect } from 'react';
import useGetSocketMessage from '../../context/useGetSocketMessage.js';

function Messages() {
  const {loading,messages} = useGetMessage();
  useGetSocketMessage() //listening incoming messages
  console.log(messages)

  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  return (
    <div className='flex-1 overflow-y-auto' style={{minHeight:"calc(92vh - 8vh)"}}>

      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 && messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
          <Message key={message._id} message={message} />
          </div>
        ))
      )}


        {!loading && messages.length === 0 && (
          <div>
            <p className='text-center mt-[20%]'>Say! Hi to start the conversation</p>
          </div>
        )}
        
    </div>
  )
}

export default Messages