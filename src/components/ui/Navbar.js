import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

import './navbar.css'

export const Navbar = () => {

	return (

		<nav className="navbar navbar-expand-sm navbar-dark bg-black">
      <div className="container">

        <Link
          className="navbar-brand"
          to="/" >
          Home
        </Link>

        <button className="navbar-toggler">
          <span className="navbar-toggler-icon" data-bs-toggle="collapse" data-bs-target="#navBarMenu">
            <svg className="svg-icon" viewBox="0 0 20 20">
							<path d="M2.25,12.584c-0.713,0-1.292,0.578-1.292,1.291s0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291S2.963,12.584,2.25,12.584z M2.25,14.307c-0.238,0-0.43-0.193-0.43-0.432s0.192-0.432,0.43-0.432c0.238,0,0.431,0.193,0.431,0.432S2.488,14.307,2.25,14.307z M5.694,6.555H18.61c0.237,0,0.431-0.191,0.431-0.43s-0.193-0.431-0.431-0.431H5.694c-0.238,0-0.43,0.192-0.43,0.431S5.457,6.555,5.694,6.555z M2.25,8.708c-0.713,0-1.292,0.578-1.292,1.291c0,0.715,0.579,1.292,1.292,1.292c0.713,0,1.292-0.577,1.292-1.292C3.542,9.287,2.963,8.708,2.25,8.708z M2.25,10.43c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.43,0.43-0.43c0.238,0,0.431,0.192,0.431,0.43C2.681,10.238,2.488,10.43,2.25,10.43z M18.61,9.57H5.694c-0.238,0-0.43,0.192-0.43,0.43c0,0.238,0.192,0.431,0.43,0.431H18.61c0.237,0,0.431-0.192,0.431-0.431C19.041,9.762,18.848,9.57,18.61,9.57z M18.61,13.443H5.694c-0.238,0-0.43,0.193-0.43,0.432s0.192,0.432,0.43,0.432H18.61c0.237,0,0.431-0.193,0.431-0.432S18.848,13.443,18.61,13.443z M2.25,4.833c-0.713,0-1.292,0.578-1.292,1.292c0,0.713,0.579,1.291,1.292,1.291c0.713,0,1.292-0.578,1.292-1.291C3.542,5.412,2.963,4.833,2.25,4.833z M2.25,6.555c-0.238,0-0.43-0.191-0.43-0.43s0.192-0.431,0.43-0.431c0.238,0,0.431,0.192,0.431,0.431S2.488,6.555,2.25,6.555z"></path>
						</svg>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navBarMenu">
          <div className="navbar-nav">
            <NavLink
              className={ ( {isActive} ) => { return "nav-submenu nav-item nav-link + (isActive ? 'active' : '')"} }
              to="/gifs" >
              Gifs
            </NavLink>
            <NavLink
              className={ ( {isActive} ) => { return "nav-submenu nav-item nav-link + (isActive ? 'active' : '')"} }
              to="/tasks" >
              Tasks
            </NavLink>
            <div className="dropdown">
              <NavLink className="dropdown-toggle" data-bs-toggle="dropdown" to="#">Hero</NavLink>
              <ul className="dropdown-menu" role="menu">

                <NavLink
                  className={ ( {isActive} ) => { return "nav-submenu nav-item nav-link + (isActive ? 'active' : '')"} }
                  to="/hero/marvel" >
                  Marvel
                </NavLink>
                <NavLink
                  className={ ( {isActive} ) => { return "nav-submenu nav-item nav-link + (isActive ? 'active' : '')"} }
                  to="/hero/dc" >
                  DC
                </NavLink>
                <NavLink
                  className={ ( {isActive} ) => { return "nav-submenu nav-item nav-link + (isActive ? 'active' : '')"} }
                  to="/hero/search" >
                  Search
                </NavLink>

              </ul>
            </div>   
          </div>
          
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto logout-wrapper">
              <span className="nav-item nav-link text-warning "> Nacho </span>
              <button
                className="nav-item nav-link btn btn-outline-warning"
                // onClick={ handleLogout }
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </div>
		</nav>
	)
}
