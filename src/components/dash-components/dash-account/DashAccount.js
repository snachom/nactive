import { Link } from 'react-router-dom'
import './dash-account.css'

// implement login logout here

export const DashAccount = () => {
  return (
    <div className="account block">
      <h2 className="heading2 titular">SIGN IN TO YOUR ACCOUNT</h2>
      <div className="input-container">
        <input type="text" placeholder="yourname@gmail.com" className="dash-input email text-input"/>
        <div className="input-icon envelope-icon-acount">
          <span className="dash-span fontawesome-envelope scnd-font-color"></span>
        </div>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Password" className="dash-input password text-input"/>
        <div className="input-icon password-icon">
          <span className="dash-span fontawesome-lock scnd-font-color"></span>
        </div>
      </div>
      <Link className="dash-link sign-in button" to="#22">SIGN IN</Link>
      <p className="scnd-font-color">Forgot Password?</p>
        <Link className="dash-link fb-sign-in" to="58">
          <p className="paragraph-text">
            <span className="dash-span fb-border">
              <span className="dash-span icon zocial-facebook">
              </span>
            </span>Sign in with Facebook
          </p>
      </Link>
    </div>
  )
}
