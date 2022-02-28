import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext'
import './dash-header.css'

export const DashHeader = () => {

  const { user } = useContext(AuthContext)
  
  return (
    <header className="dash-header block">
      <ul className="unordered-list header-menu horizontal-list">
        <li>
          <Link className="dash-link header-menu-tab" to="#"><span className="dash-span icon entypo-cog scnd-font-color"></span>Account</Link>
        </li>
      </ul>

      <div className="profile-menu">
        <p className="paragraph-text">{user.name} <Link to="#26"></Link></p>
        <div className="profile-picture small-profile-picture">
          <img width="40px" alt="Charlino Brown" src="/assets/resources/charlie.jpg" />
        </div>
      </div>
    </header>
  )
}
