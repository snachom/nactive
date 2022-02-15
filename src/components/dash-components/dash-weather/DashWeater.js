import { Link } from 'react-router-dom'
import './dash-weather.css'

export const DashWeater = () => {
  return (
    <div className="weather block clear">
      <h2 className="heading2 titular">
        <span className="dash-span icon entypo-location">
        </span><strong>CLUJ-NAPOCA</strong>/RO
      </h2>
      <div className="current-day">
        <p className="current-day-date">FRI 29/06</p>
        <p className="current-day-temperature">24º<span className="dash-span icon-cloudy"></span></p>
      </div>
      <ul className="unordered-list next-days">
        <li>
          <Link to="#43">
            <p className="next-days-date">
              <span className="dash-span day">SAT</span> 
              <span className="dash-span scnd-font-color">29/06</span></p>
            <p className="next-days-temperature">25º
              <span className="dash-span icon icon-cloudy scnd-font-color"></span>
            </p>
          </Link>
        </li>
        <li>
          <Link to="#44"> 
            <p className="next-days-date">
              <span className="dash-span day">SUN</span> 
              <span className="dash-span scnd-font-color">30/06</span></p>
            <p className="next-days-temperature">22º
              <span className="dash-span icon icon-cloudy2 scnd-font-color"></span>
            </p>
          </Link>
        </li>
        <li>
          <Link to="#45">
            <p className="next-days-date">
              <span className="dash-span day">MON</span> 
              <span className="dash-span scnd-font-color">01/07</span>
            </p>
            <p className="next-days-temperature">24º
              <span className="dash-span icon icon-cloudy2 scnd-font-color"></span>
            </p>
          </Link>
        </li>
        <li>
          <Link to="#46">
            <p className="next-days-date">
              <span className="dash-span day">TUE</span> 
              <span className="dash-span scnd-font-color">02/07</span>
            </p>
              <p className="next-days-temperature">26º
                <span className="dash-span icon icon-cloudy scnd-font-color"></span>
              </p>
          </Link>
        </li>
        <li>
          <Link to="">
            <p className="next-days-date">
              <span className="dash-span day">WED</span> 
              <span className="dash-span scnd-font-color">03/07</span>
            </p>
            <p className="next-days-temperature">27º
              <span className="dash-span icon icon-sun scnd-font-color"></span>
            </p>
          </Link>
        </li>
        <li>
          <Link to="">
            <p className="next-days-date">
              <span className="dash-span day">THU</span> 
              <span className="dash-span scnd-font-color">04/07</span>
            </p>
            <p className="next-days-temperature">29º
              <span className="dash-span icon icon-sun scnd-font-color"></span>
            </p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
