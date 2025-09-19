import React from 'react'
import { useSocketContext } from './SocketContext'
import UseConversation from '../zustand/UseConversation.js'
import { useEffect } from 'react'
import sound from '../assets/get-notification.mp3'

function useGetSocketMessage() {
    const {socket} =useSocketContext()
    const {messages,setMessage} = UseConversation()

    useEffect(()=>{
        socket.on("newMessage",(newMessage)=>{
            const notification = new Audio(sound)
            notification.play()
            setMessage([...messages,newMessage])
        })
        return () =>{
            socket.off("newMessage")
        }
    },[socket,messages,setMessage])
}

export default useGetSocketMessage