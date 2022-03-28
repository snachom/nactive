import { Link, useNavigate } from 'react-router-dom'
import './dash-menu-links.css'

export const DashMenuLinks = () => {
  const navigate = useNavigate()
  const handlemenu = () => { 
    navigate('/gifs', { replace: true }) 
  }

  return (
    <div className="menu-box blocks">
      <h2 className="heading2 titular">REACTIVE PROJECTS</h2>
      <ul className="unordered-list menu-box-menu">
        <li>
          <button 
            className="btn btn-outline-dark btn-logout"
            onClick={ handlemenu }
          ></button>
          <Link className="dash-link menu-box-tab" to="/gifs" target="_blank">
            <span className="dash-span icon entypo-flashlight scnd-font-color"></span>
              Gifs App
            {/* <div className="menu-box-number">1</div> */}
          </Link>                           
        </li>
        <li>
          <Link className="dash-link menu-box-tab" to="/tasks" target="_blank">
            <span className="dash-span icon entypo-newspaper scnd-font-color"></span>
              Tasks App
            {/* <div className="menu-box-number">3</div> */}
          </Link>                            
        </li>
        <li>
          <Link className="dash-link menu-box-tab" to="/smash" target="_blank">
            <span className="dash-span icon entypo-alert scnd-font-color"></span>
              Smash Bros
            {/* <div className="menu-box-number">5</div> */}
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
