import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getSmashById } from "../../helpers/getSmashById";
import './smash-detail.css'

export const SmashDetail = () => {
  
  const {smashId} = useParams()
  const smash = useMemo( () => getSmashById(smashId), [smashId] )
  const navigate = useNavigate();
  
  if(!smash) {
    return <Navigate to='/smash' />
  }
  
  const handleReturn = () => {
    navigate('/smash');
  }

  return (
    <div className="app-container smash-wrapper">
      <div className="container-smash-detail">
        <header className="header-smash-card">
        <div className="bio">
          <img src={`/assets/smash/${smash.id}.png`} alt="background" className="bg" />
          <div className="desc">
            <h2>@nachoxtacks</h2>
            <p> I'm a web developer and I love creating awesome stuff. I usually work as a Front End Developer with Drupal roles, however React is one of my passions as well.</p>
            <button className="btn btn-outline-warning btn-smash mt-2" onClick={()=> window.open("https://twitter.com/nachoxtacks", "_blank")} >Twitter</button>
          </div>
        </div>

      </header>
      <div className="avatarcontainer">
          <img src="/assets/smash/ssb_icon.png" alt="avatar" className="avatar" />
        </div>
      <div className="smash-detail-content">
        <div className="data">
          <ul>
            <li>
              {smash.name}
              <span>Character</span>
            </li>
            <li>
              Nacho
              <span>FrontEnd</span>
            </li>
            <li>
              {smash.console}
              <span>Console</span>
            </li>
          </ul>
        </div>
        <div className="detail-button-wrapper">
          <button className="btn btn-outline-dark btn-smash-detail" onClick={handleReturn}>
            Return
          </button>
        </div>
      </div>
      </div>
    </div>
  )
};
