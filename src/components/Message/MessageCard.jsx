import React from 'react'
import '../Message/MessageCard.css'
import MessageUpdate from './MessageUpdate'
import UserCard from '../UserCard/UserCard'
import { Link } from 'react-router-dom'


const MessageCard = (props) => {
  return (
    <div className="message-card">

    <div className="card-header">
      <UserCard profile={props.chat.added_by} />
      <MessageUpdate {...props}/>

    </div>
      

    <div className="message-container">
      <p>{props.chat.message}</p>
      
    
    </div>
{/* 
    <div className="photo-container">
      <p>{props.chat.photo}</p>
    </div> */}

  </div>
  )
}

export default MessageCard