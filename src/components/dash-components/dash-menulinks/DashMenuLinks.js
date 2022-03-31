import { useNavigate } from 'react-router-dom'
import './dash-menu-links.css'

export const DashMenuLinks = () => {
  const navigate = useNavigate()
  // This is for production build as it
  // does not allow SPA
  const handleGifs = () => { 
    navigate('/gifs', { replace: true }) 
  }
  const handleTasks = () => { 
    navigate('/tasks', { replace: true }) 
  }
  const handleSmash = () => { 
    navigate('/smash', { replace: true }) 
  }
  const handleMarvel = () => { 
    navigate('/hero/marvel', { replace: true }) 
  }
  const handleDC = () => { 
    navigate('/hero/dc', { replace: true }) 
  }

  return (
    <div className="fblock menu-box blocks">
      <h2 className="heading2 titular">REACTIVE PROJECTS</h2>
      <ul className="unordered-list menu-box-menu">
        <li>
          <button className="btn-menu dash-link menu-box-tab" onClick={ handleGifs } >
            <span className="dash-span icon entypo-flashlight scnd-font-color"></span>
              Gifs App
          </button>                         
        </li>
        <li>
          <button className="btn-menu dash-link menu-box-tab" onClick={ handleTasks } >
            <span className="dash-span icon entypo-newspaper scnd-font-color"></span>
              Tasks App
          </button>                         
        </li>
        <li>
          <button className="btn-menu dash-link menu-box-tab" onClick={ handleSmash } >
            <span className="dash-span icon entypo-alert scnd-font-color"></span>
              Smash Bros
          </button>                         
        </li>
        <li>
          <button className="btn-menu dash-link menu-box-tab" onClick={ handleMarvel } >
            <span className="dash-span icon entypo-qq scnd-font-color"></span>
              Marvel
          </button>                         
        </li>
        <li>
          <button className="btn-menu dash-link menu-box-tab" onClick={ handleDC } >
            <span className="dash-span icon entypo-renren scnd-font-color"></span>
              DC
          </button>                         
        </li>                       
      </ul>
    </div>
  )
}
