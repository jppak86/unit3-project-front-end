import React, { useState } from 'react'
import '../CreateMessage/Create.css'
import MessageForm from './MessageForm'
import { createMessage } from '../../services/messageService'
import { useNavigate } from 'react-router-dom'



const CreateMessage = (props) => {
  const navigate = useNavigate()
  const [message, setMessage] = useState('')
  const formData = {
    message: message,
    added_by: props.user.profile
  }

  const handleCreateMessage = async (e) => {
    e.preventDefault()
  try {
    const newMessage = await createMessage(formData)
      navigate('/messages') 
  } catch (error) {
    throw error
  }
  
  }

  return (
    <div className="layout">
      <MessageForm message={message} setMessage={setMessage} handleCreateMessage={handleCreateMessage} />
 
    </div>
  )
}

export default CreateMessage