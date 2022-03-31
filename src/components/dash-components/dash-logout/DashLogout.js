import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../auth/authContext'
import { types } from '../../../types/types'
import './dash-logout.css'

export const DashLogout = () => {

  const navigate = useNavigate()
  const { user, dispatch } = useContext(AuthContext)

  const handleLogout = () => { 
    dispatch({ type: types.logout })
    navigate('/login', { replace: true }) 
  }

  return (
    <div className="fblock container home-logout-wrapper">
      <div className="home-logout-wrapper-inner">
        <h2>LOGOUT</h2>

        <span className="nav-item nav-link text-warning "> { user.name } </span>
        <button 
          className="btn btn-outline-dark btn-logout"
          onClick={ handleLogout }
        >
          Logout
        </button>
      </div>
    </div>
  )
}
