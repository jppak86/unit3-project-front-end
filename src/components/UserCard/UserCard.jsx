import React from 'react'
import '../UserCard/UserCard.css'

const UserCard = (props) => {
  
  return (
    <div className="user-card">
      <div className="user-info">
        <h4>By  {props.profile.name}</h4>
      </div>
    </div>
  )
}

export default UserCard