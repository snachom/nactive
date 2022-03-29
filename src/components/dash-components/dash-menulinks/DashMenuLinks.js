import { Link, NavLink } from 'react-router-dom'
import './dash-menu-links.css'

export const DashMenuLinks = () => {

  // <div className="navbar-nav">
  // <NavLink
  //   className={ ( {isActive} ) => { return "nav-submenu nav-item nav-link + (isActive ? 'active' : '')"} }
  //   to="/gifs" >
  //   Gifs
  // </NavLink>
  // <NavLink
  //   className={ ( {isActive} ) => { return "nav-submenu nav-item nav-link + (isActive ? 'active' : '')"} }
  //   to="/tasks" >
  //   Tasks
  // </NavLink>
  // <NavLink
  //   className={ ( {isActive} ) => { return "nav-submenu nav-item nav-link + (isActive ? 'active' : '')"} }
  //   to="/smash" >
  //   Smash
  // </NavLink>


  return (
    <div className="menu-box blocks">
      <h2 className="heading2 titular">REACTIVE PROJECTS</h2>
      <ul className="unordered-list menu-box-menu">
        <li>
          <NavLink className="dash-link menu-box-tab" to="/gifs" target="_blank">
            <span className="dash-span icon entypo-flashlight scnd-font-color"></span>
              Gifs App
          </NavLink>                           
        </li>
        <li>
          <Link className="dash-link menu-box-tab" to="/tasks" target="_blank">
            <span className="dash-span icon entypo-newspaper scnd-font-color"></span>
              Tasks App
          </Link>                            
        </li>
        <li>
          <Link className="dash-link menu-box-tab" to="/smash" target="_blank">
            <span className="dash-span icon entypo-alert scnd-font-color"></span>
              Smash Bros
          </Link>                            
        </li>
        <li>
          <Link className="dash-link menu-box-tab" to="/hero/marvel" target="_blank">
            <span className="dash-span icon entypo-qq scnd-font-color"></span>
              Marvel
          </Link>
        </li>
        <li>
          <Link className="dash-link menu-box-tab" to="/hero/dc" target="_blank">
            <span className="dash-span icon entypo-renren scnd-font-color"></span>
              DC
          </Link>
        </li>                        
      </ul>
    </div>
  )
}
