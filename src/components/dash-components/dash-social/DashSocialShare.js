import { Link } from 'react-router-dom'
import './dash-social-share.css'

export const DashSocialShare = () => {
  return (
    <ul className="unordered-list social block">
      <Link className="dash-link" to="#50"> 
        <div className="facebook icon">
          <span className="dash-span zocial-facebook"></span>
        </div>
        <h2 className="heading2 facebook titular">SHARE TO FACEBOOK</h2>
      </Link>
      <Link className="dash-link" to="#51"> 
        <div className="twitter icon">
          <span className="dash-span zocial-twitter"></span>
        </div>
        <h2 className="heading2 twitter titular">SHARE TO TWITTER</h2>
      </Link>  
      <Link className="dash-link" to="#52">
        <div className="googleplus icon">
          <span className="dash-span zocial-googleplus"></span>
        </div>
        <h2 className="heading2 googleplus titular">SHARE TO GOOGLE+</h2>
      </Link>
    </ul>
  )
}
