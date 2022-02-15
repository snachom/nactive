import { Link } from 'react-router-dom'
import './dash-line-chart.css'

export const DashLineChart = () => {
  return (
    <div className="line-chart-block block clear">
      <div className="line-chart">

        <div className='grafico'>
          <ul className='unordered-list eje-y'>
            <li>30</li>
            <li>20</li>
            <li>10</li>
            <li>0</li>
          </ul>
          <ul className='unordered-list eje-x'>
            <li>Apr</li>
            <li>May</li>
            <li>Jun</li>
          </ul>
          <span data-valor= '25'>
          <span data-valor= '8'>
          <span data-valor= '13'>
          <span data-valor= '5'>   
          <span data-valor= '23'>   
          <span data-valor= '12'>
          <span data-valor= '15'>
          </span></span></span></span></span></span></span>
        </div>

        </div>
          <ul className="unordered-list time-lenght horizontal-list">
            <li><Link className="dash-link time-lenght-btn" to="#14">Week</Link></li>
            <li><Link className="dash-link time-lenght-btn" to="#15">Month</Link></li>
            <li><Link className="dash-link time-lenght-btn" to="#16">Year</Link></li>
          </ul>
          <ul className="unordered-list month-data clear">
            <li>
              <p className="paragraph-text">APR<span className="dash-span scnd-font-color"> 2013</span></p>
              <p className="paragraph-text"><span className="dash-span entypo-plus increment"> </span>21<sup>%</sup></p>
            </li>
            <li>
              <p className="paragraph-text">MAY<span className="dash-span scnd-font-color"> 2013</span></p>
              <p className="paragraph-text"><span className="dash-span entypo-plus increment"> </span>48<sup>%</sup></p>
            </li>
            <li>
              <p className="paragraph-text">JUN<span className="dash-span scnd-font-color"> 2013</span></p>
              <p className="paragraph-text"><span className="dash-span entypo-plus increment"> </span>35<sup>%</sup></p>
            </li>
          </ul>
        </div>
  )
}
