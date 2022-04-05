import React, { useState, useRef } from 'react'
import '../EditMessage/Edit.css'
import * as messageService from '../../services/messageService'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'



const EditMessage = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [message, setMessage] = useState(location.state)


  const formData = {
    message: message.message,
    added_by: props.user.profile,
  }

  const formElement = useRef();
    
  const handleChange = evt => {
    setMessage({...message, [evt.target.name]: evt.target.value })
  }
  

  const handleEditMessage = async (e) => {
    e.preventDefault()
    try {
      const editMessage = await messageService.updateMessage(formData, message._id)
      console.log(editMessage)
      navigate('/messages')
    } catch (error) {
      throw error
    }
    
  };


  return (
    <form ref={formElement} className="edit-form" onSubmit={handleEditMessage}>
      <div className="message-prompt">
        <label>Update your message</label>
      </div>

      <input
        required
        name="message"
        autoComplete='off'
        placeholder="message"
        value={formData.message}
        onChange={handleChange}
      />

      <div className="border"></div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default EditMessage