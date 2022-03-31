import { useEffect, useState } from 'react'

import './dash-covid.css'

export const DashCovid = (news) => {

  const [data, setData] = useState([])

  useEffect(() => {
    getCovidNews()
  }, [])

  const getCovidNews = async() => {
    const today = new Date();
    var twoDigitMonth=((today.getMonth()+1)>=10) ? (today.getMonth()+1) : '0' + (today.getMonth()+1);
    const date = today.getFullYear()+'-'+twoDigitMonth+'-'+today.getDate();
    const prevDate = today.getFullYear()+'-'+twoDigitMonth+'-'+(today.getDate()-3);
    const availableDate = date ? date : prevDate;
    
    const url = `https://api.covid19tracking.narrativa.com/api/${availableDate}/country/spain/region/andalucia`
    const resp = await fetch( url )
    const data = await resp.json()
    // const regio = data.dates['2022-03-20'].countries.Spain.regions // API format
    const regio = data.dates[date].countries.Spain.regions ? data.dates[date].countries.Spain.regions : data.dates[prevDate].countries.Spain.regions
    
    const news = regio.map( cov => {
      return {
        date: cov.date,
        id: cov.id,
        name: cov.name,
        andalucia_confirmed: cov.today_new_open_cases ? cov.today_new_open_cases : 0,
        andalucia_total: cov.today_confirmed ? cov.today_confirmed : 0,
        subregion: cov.sub_regions.map( 
          subreg => { 
            return { 
              community: subreg.name,
              community_confirmed: subreg.today_new_confirmed ? subreg.today_new_confirmed : 0,
              community_recovered: subreg.today_new_recovered ? subreg.today_new_recovered : 0,
            } 
          }
          )
        }
      })
    setData( news )
  }

  return (
    <div className="fblock covid-news">
      <h2 className="heading2 titular covid-heading">
        <span className="dash-span icon entypo-bell cov-icon"></span> LATEST COVID NEWS
      </h2>
      <div className="perspective">
        {
          data.map( (cov, i) => {
            return (
              <div key={i} className="cov-container">
                <label className="cov-tab a2" htmlFor="tab-top">Recovered</label>
                <label className="cov-tab a3" htmlFor="tab-front">Andalucía</label>
                <label className="cov-tab a4" htmlFor="tab-bottom">Confirmed</label>
                <input className="cov-input" type="radio" name="tabs" id="tab-top" />
                <input className="cov-input" type="radio" name="tabs" id="tab-front" />
                <input className="cov-input" type="radio" name="tabs" id="tab-bottom" /> 
                <div className="cube">  
                  <div className="tab-cov-content cov-subregion"> 
                    <span className="cov-rec">Today recovered:</span>
                      {
                        cov.subregion.map( (subreg, i) => {
                          return (
                            <div key={i} className="cov-content">
                              <p className="cov-subregion">{ subreg.community }
                                <span className="cov-subregion-recovered">{ subreg.community_recovered }</span>
                              </p>
                            </div>
                          )
                        })
                      }
                  </div>
                  <div className="tab-cov-content">
                    <h4>{cov.name } 
                    </h4>
                    <span className="cov-date">{cov.date}</span>
                    <p>Today confirmed: 
                      <span className='cov-confirmed'>{' '+ cov.andalucia_confirmed }</span>
                    </p>
                    <p>Today total confirmed: 
                      <span className='cov-total'>{' '+  cov.andalucia_total }</span>
                    </p>
                  </div>
                  <div className="tab-cov-content cov-subregion cov-last-subr"> 
                    <span className="cov-rec">Today total cases:</span>
                      {
                        cov.subregion.map( (subreg, i) => {
                          return (
                            <div key={i} className="cov-content">
                              <p className="cov-subregion">{ subreg.community }
                                <span className="cov-subregion-confirmed">{ subreg.community_confirmed }</span>
                              </p>
                            </div>
                          )
                        })
                      }
                  </div>
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}