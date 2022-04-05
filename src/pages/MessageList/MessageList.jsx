import React, { useState, useEffect } from 'react';
import MessageCard from '../../components/Message/MessageCard';
import { getAllMessages, updateMessage, deleteMessage } from '../../services/messageService';



const MessageList = (props) => {
  const [messages, setMessages] = useState([])

  useEffect (() => {
    const fetchAllMessages = async () => {
      const messageData = await getAllMessages()
      setMessages(messageData)
    }
    fetchAllMessages()
    return () => { setMessages([])}
  }, [])

  const markUpdateMessage = async (messageId) => {
    try {
      const updatedMessage = await updateMessage(messageId)
      setMessages(messages.map((message) => (message._id === messageId ? updatedMessage : message)))
    } catch (error) {
      throw error
    }
  }

  const handleDeleteMessage = async (messageId) => {
    try {
      await deleteMessage(messageId)
      setMessages(messages.filter((message) => message._id !== messageId))
    } catch (error) {
      throw error
    }
  }

  return (
    <div className='layout'>
      {messages?.map((message) => (
        <MessageCard chat={message} key={message._id} user={props.user} markUpdateMessage={markUpdateMessage} handleDeleteMessage={handleDeleteMessage} />
      ))}
    </div>
  )
}

export default MessageList