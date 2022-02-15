import { Link } from 'react-router-dom'
import './dash-tweets.css'

export const DashTweets = () => {
  return (
    <div className="tweets block">
      <h2 className="heading2 titular"><span className="dash-span icon zocial-twitter"></span>LATEST TWEETS</h2>
      <div className="tweet first">
        <p className="paragraph-text">Ice-cream trucks only play music when out of ice-cream. Well played dad. On 
          <Link className="dash-link tweet-link" to="#17">@Quora</Link>
        </p>
        <p className="paragraph-text">
          <Link className="dash-link time-ago scnd-font-color" to="#18">3 minutes ago</Link>
        </p>
      </div>
      <div className="tweet">
        <p className="paragraph-text">We are in the process of pushing out all of the new CC apps! We will tweet again once they are live 
          <Link className="dash-link tweet-link" to="#19">#CreativeCloud</Link>
        </p>
        <p className="paragraph-text">
          <Link className="dash-link scnd-font-color" to="#20">6 hours ago</Link>
        </p>
      </div>
    </div>

  )
}
