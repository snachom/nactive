import { useEffect, useState } from 'react';
import { getCovidNews } from '../../../helpers/getCovidNews';
import { LineChart } from './LineChart'
import './dash-line-chart.css'

export const DashLineChart = () => {

  const [covidNews, setCovidNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCovidNews()
      .then( (data) => {
        setCovidNews(data)
        setLoading(false)
      } )
    }, [])

  if(loading) { return <span>...</span>}
  
  const communities = covidNews.map(function (obj) {
    return obj.subregion.map(cov => { 
      return cov.community
    })
  })
  const confirmed = covidNews.map(function (obj) {
    return obj.subregion.map(cov => { 
      return cov.community_confirmed
    })
  })

  return (
    <div className="fblock dash-line">
      <div className="line-chart">
        <h2 className="dash-line-title">COVID STATUS</h2>
        <LineChart com={communities} conf={confirmed} />
      </div>
    </div>
  )
}
