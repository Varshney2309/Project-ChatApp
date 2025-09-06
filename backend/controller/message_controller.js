import Conversation from "../models/conversation_model.js";
import Message from "../models/message_model.js";
import { getReceiverSocketId } from "../SocketIO/server.js";
import { io } from "../SocketIO/server.js";

export const sendMessage = async (req,res) =>{
    // console.log("Message sent",req.params.id,req.body.message);
    // this will print id of the user and message on console

    try {
        const {message} = req.body; //req.body.message bhi likh skte the destructuring kr dia
        const {id:receiverId} = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({ 
            //Conversation collection me se find kiya
            members:{$all : [senderId,receiverId]}
        })

        // Ab difference samajh:
        // $all: [a,b] → order matter nahi karta, bas dono values present honi chahiye array me.
        // [a,b] without $all → order matter karega, exact match chahiye.
        // 👉 Chat app me generally order ka kuch lena dena nahi hota (kyunki kabhi tu sender hoga, kabhi receiver).
        // Isliye $all use karte hain taaki bas ye check ho jaaye ki dono users us conversation me hain, chahe kis order me stored ho. ✅
                //         Simple example:
                // senderId = "101"
                // receiverId = "202"
                // Database me conversation hai:
                // { "members": ["101", "202"] }
                //         To query chalegi aur us document ko nikaal legi. ✅
                // Agar database me aisa kuch hi nahi hoga, to conversation = null milega.
                // 👉 Short me:
                // Ye line ka matlab hai "sender aur receiver dono ke beech purani chat (conversation) find karo".
        if(!conversation){
            conversation=await Conversation.create({
                members:[senderId,receiverId]
            })
        }
        const newMessage = new Message ({
            senderId,
            receiverId,
            message

        })
        if(newMessage){
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();
        // await newMessage.save();
        await Promise.all([conversation.save(),newMessage.save()]);//run parallel
        const receiverSocketId = getReceiverSocketId(receiverId)
        if(receiverId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }
        res.status(201).json(newMessage)

        
    } catch (error) {
        console.log("Error in sendMessage",error);
        res.status(500).json({error:"Internal server error"})
    }
    
}

export const getMessage= async (req,res)=>{
    try {
        const {id:chatUser} = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            members:{$all: [senderId,chatUser]}
        }).populate("messages");
        if(!conversation){
            return res.status(201).json([])
        }
        const messages = conversation.messages;
        res.status(201).json(messages)

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"})
        
        
    }
}
