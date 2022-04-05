import { Link, NavLink } from 'react-router-dom'
import React from 'react'
import '../NavBar/NavBar.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='nav-bar'>
          <ul>
            <li>Welcome, {user.name}</li>
            <li><Link to="/profiles">Profiles</Link></li>
            <li><Link to="/messages">Messages</Link></li>
            <li><Link to="/" onClick={handleLogout}>LogOut</Link></li>
            <li><Link to="/new" >New Message</Link></li>
          </ul>
        </nav>
      :
        <nav className='nav-bar'>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/profiles">Profiles</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
