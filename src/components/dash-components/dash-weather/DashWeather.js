import { useEffect, useState } from 'react';
import './dash-weather.css'

export const DashWeather = () => {
  let currentDate = new Date();
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };     
  let date = (currentDate.toLocaleDateString('es-ES', options));

  const [state, setState] = useState([])

  useEffect(() => {
    getWeather()
  }, [])

  const getWeather = async() => {

    const url = `http://api.weatherapi.com/v1/current.json?key=2f04bca6470d46368fa192407222202&q=Huelva&aqi=no`
    const resp = await fetch( url )
    const data = await resp.json()
    const weatherCast = data.current
    const store = []
    store.push(weatherCast)
    
    const weather = store.map( cast => {
      return {
        degrees: cast.temp_c,
        windDir: cast.wind_dir,
        windSpeed: cast.wind_kph,
        condition: Object.keys(cast.condition).map( 
          cond => cast.condition[cond]
        )
      }
    })
    setState(weather)
  }

  console.log(state)

  return (
    <div className="weather block clear">
      <h2 className="heading2 titular">
        <span className="dash-span icon entypo-location">
        </span><strong>ANDALUCÍA / HUELVA</strong>
      </h2>
      <div className="current-day">
        <p className="current-day-date">{date}</p>
        {
          state.map( (weat, i) => {
            return (
              <p key={i} className="current-day-temperature">{weat.degrees}º
                {
                  (function() {
                    switch(weat.condition[0]) {
                      case 'Sunny':
                        return <span className="dash-span entypo-light-up"></span>
                      case 'Overcast':
                        return <span className="dash-span entypo-air"></span>
                      case 'Cloudy':
                        return <span className="dash-span entypo-cloud"></span>
                      case 'Patchy rain possible':
                        return <span className="dash-span entypo-water"></span>
                      case 'Moderate or heavy rain shower':
                        return <span className="dash-span entypo-cloud-thunder"></span>
                      default:
                        return <span className="dash-span entypo-adjust"></span>
                    }
                  })()
                }
              </p>
            )}
          )
        }
      </div>
      <ul className="unordered-list next-days">
        {
          state.map( (weat, i) => {
            return (
              <div key={i}>
                <li className="windir">
                  <a href="https://www.windguru.cz/48752" target="_blank" rel="noreferrer">
                    <div className="wind-wrapper">
                      <p className="next-days-date">
                        <span className="dash-span day">ACTUAL WIND DIRECTION</span> 
                      </p>
                      <p className="next-days-temperature">{weat.windDir}
                        <span className="dash-span icon entypo-address scnd-font-color"></span>
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="https://www.windguru.cz/48752" target="_blank" rel="noreferrer"> 
                    <div className="wind-wrapper">
                      <p className="next-days-date">ACTUAL WIND SPEED
                        <span className="dash-span day"></span> 
                      </p>
                      <p className="next-days-temperature">{weat.windSpeed}KMH
                        <span className="dash-span icon entypo-flag scnd-font-color"></span>
                      </p>
                    </div>
                  </a>
                </li>
            </div>
            ) 
          })
        }
      </ul>
    </div>
  )
}


