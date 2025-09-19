import React from 'react'
import { useEffect,useState } from 'react'
import UseConversation from '../zustand/UseConversation.js'
import axios from 'axios'

function useGetMessage() {
    const [loading,setLoading]=useState(false)
    const {messages,setMessage,selectedConversation} = UseConversation()

    useEffect(()=>{
        const getMessages= async ()=>{
            setLoading(true)
            if(selectedConversation && selectedConversation._id){
                try{
                const res=await axios.get(`/api/message/get/${selectedConversation._id}`)
                setMessage(res.data)
                setLoading(false)
                }
                catch(error){
                    console.log("error in getting message",error);
                    setLoading(false)

                }                
            }

        }
        getMessages()
    },[selectedConversation,setMessage])
  return {loading,messages}
}

export default useGetMessage