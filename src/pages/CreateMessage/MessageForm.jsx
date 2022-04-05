import React from 'react'
import '../CreateMessage/Create.css'

const MessageForm = (props) => {
  return (
    <form className="create-form" onSubmit={props.handleCreateMessage}>
      <div className="message-prompt">
        <label>Enter your message</label>
      </div>

      <input
        required
        name="message"
        autoComplete='off'
        placeholder="message"
        value={props.message}
        onChange={(e) => props.setMessage(e.target.value)}
      />

      <div className="border"></div>

      <button type="submit">Submit</button>
    </form>
  )
}

export default MessageForm