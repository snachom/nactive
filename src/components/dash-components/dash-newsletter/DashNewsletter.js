import { Link } from 'react-router-dom'
import './dash-newsletter.css'

export const DashNewsletter = () => {
  return (
    <div className="join-newsletter block">
      <h2 className="heading2 titular">JOIN THE NEWSLETTER</h2>
      <div className="input-container">
        <input type="text" placeholder="yourname@gmail.com" className="dash-input email text-input"/>
        <div className="input-icon envelope-icon-newsletter">
          <span className="dash-span fontawesome-envelope scnd-font-color"></span>
        </div>
      </div>
      <Link className="dash-link subscribe button" to="#21">SUBSCRIBE</Link>
    </div>
  )
}
