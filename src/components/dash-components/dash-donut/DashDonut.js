import { RadialChart } from './PopChart'
import './dash-donut.css'

export const DashDonut = () => {
  return (
    <div className="dash-donut">
      <h2 className="donut-title">TECHNOLOGIES</h2>
      <div className="donut-chart">
        <RadialChart />
      </div>
    </div>
  )
}
