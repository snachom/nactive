import { Link } from 'react-router-dom'
import './dash-media.css'

export const DashMedia = () => {
  return (
    <div className="media block">
      <div id="media-display">
        <Link className="dash-link media-btn play" to="#23"><span className="dash-span fontawesome-play"></span></Link>
      </div>
      <div className="media-control-bar">
        <Link className="dash-link media-btn play" to="#23"><span className="dash-span fontawesome-play scnd-font-color"></span></Link>
        <p className="time-passed">4:15 <span className="dash-span time-duration scnd-font-color">/ 9:23</span></p>
        <Link className="dash-link media-btn volume" to="#24"><span className="dash-span fontawesome-volume-up scnd-font-color"></span></Link>
        <Link className="dash-link media-btn resize" to="#25"><span className="dash-span fontawesome-resize-full scnd-font-color"></span></Link>
      </div>
    </div>
  )
}
