import { useDate } from '../../../hooks/useDate'
import './dash-calendar.css'

export const DashCalendar = () => {

  const [handleToday, handleDayAfter, handleDayBefore, digitDate, stringDate] = useDate()

  return (
    <div className="fblock calendar-day block">
      <div className="arrow-btn-container">

        <button className="dash-link arrow-btn left button-day-before" onClick={handleDayBefore}>
          <span className="∑ash-span icon fontawesome-angle-left"></span>
        </button>
        <h2 className="heading2 titular weekday">{stringDate}</h2>
        
        <button className="dash-link arrow-btn right button-day-after" onClick={handleDayAfter}>
          <span className="dash-span icon fontawesome-angle-right"></span>
        </button>
      </div>
        <p className="the-day">{digitDate}</p>
        <button className="dash-link add-event today-btn button" onClick={handleToday}>TODAY</button>
    </div>
  )
}
