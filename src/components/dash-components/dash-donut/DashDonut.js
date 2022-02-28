import { RadialChart } from './PopChart'
import './dash-donut.css'

export const DashDonut = () => {
  return (
    <div className="dash-donut">
      <h3 className="donut-title">TECHNOLOGIES</h3>
      <div className="donut-chart">
        <RadialChart />
      </div>
    </div>
  )
}
