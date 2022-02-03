import { useMemo } from "react";
import { Navigate, useParams } from "react-router-dom";
import { getSmashById } from "../../helpers/getSmashById";
import './smash-detail.css'

export const SmashDetail = () => {

  const {smashId} = useParams()
  const smash = useMemo( () => getSmashById(smashId), [smashId] )

  if(!smash) {
    return <Navigate to='/smash' />
  }
  return (
    <div className=" container app-container">
      <div className="container-smash-detail">
        <header className="header-smash-card">
        <div className="bio">
          <img src={`/assets/smash/${smash.id}.png`} alt="background" className="bg" />
          <div className="desc">
            <h3>@nachoxtacks</h3>
            <p>I'm a FrontEnd developer who loves React.</p>
            <button className="btn btn-outline-warning btn-smash" onClick={()=> window.open("https://twitter.com/nachoxtacks", "_blank")} >Twitter</button>
          </div>
        </div>
        <div className="avatarcontainer">
          <img src="/assets/smash/ssb_icon.png" alt="avatar" className="avatar" />
          <div className="hover">
              <div className="icon-twitter"></div>
          </div>
        </div>
      </header>
      <div className="content">
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
              <span>Following</span>
            </li>
          </ul>
        </div>
        <div className="follow"> <div className="icon-twitter" onClick={()=> window.open("https://twitter.com/nachoxtacks", "_blank")}></div>Twitter</div>
      </div>
      </div>
    </div>
  )
};
