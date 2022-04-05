import { useState } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import * as authService from './services/authService'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import MessageList from './pages/MessageList/MessageList'
import CreateMessage from './pages/CreateMessage/CreateMessage'
import EditMessage from './pages/EditMessage/EditMessage'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar handleLogout={handleLogout} user={user} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/messages"
          element={user ? <MessageList user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/new"
          element={user ? <CreateMessage user={user} /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit"
          element={user ? <EditMessage user={user} /> : <Navigate to="/login" />}
        />

      </Routes>
    </>
  )
}

export default App
