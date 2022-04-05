import React from 'react'
import { Link } from 'react-router-dom'
import '../Message/MessageCard.css'

const MessageUpdate = (props) => {
  const authorId = props.chat.added_by?._id ? props.chat.added_by._id : props.chat.added_by
  const isAuthor = props.user?.profile === authorId


  return (
    isAuthor &&
    <div className="interactions">
      {props.chat.message &&
        <Link className='update-message'
          to='/edit'
          state={props.chat}>
            <button>
              Update
            </button>
          </Link>
        }
        <button
          onClick={() => props.handleDeleteMessage(props.chat._id)}
        >Delete</button>
    </div >
  )
}

export default MessageUpdate