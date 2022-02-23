import { DashHeader } from '../../components/dash-components/dash-header/DashHeader';
import { DashMenuLinks } from '../../components/dash-components/dash-menulinks/DashMenuLinks';
import { DashDonut } from '../../components/dash-components/dash-donut/DashDonut';
import { DashLineChart } from '../../components/dash-components/dash-line-chart/DashLineChart';
import { DashMedia } from '../../components/dash-components/dash-media/DashMedia';
import { DashSocialBlock } from '../../components/dash-components/dash-social/DashSocialBlock';
import { DashProfile } from '../../components/dash-components/dash-profile/DashProfile';
import { DashWeather } from '../../components/dash-components/dash-weather/DashWeather';
import { DashCovid } from '../../components/dash-components/dash-covid/DashCovid';
import { DashSocialShare } from '../../components/dash-components/dash-social/DashSocialShare';
import { DashCalendar } from '../../components/dash-components/dash-calendar/DashCalendar';
import { DashNewsletter } from '../../components/dash-components/dash-newsletter/DashNewsletter';
import { DashAccount } from '../../components/dash-components/dash-account/DashAccount';
import { DashLoading } from '../../components/dash-components/dash-loading/DashLoading';
import Calendar from 'react-calendar'
import './homepage.css'

export const Homepage = () => {

  return (  
    <div className="nactive-dashboard">
      <div className="main-container">

        {/*······ HORIZONTAL MENU ······*/}

        <DashHeader />

        {/*···················································*/}
        {/*··············· LEFT CONTAINER ····················*/}
        {/*···················································*/}

          <div className="left-container dash-container">

            {/*······· FIRST BLOCK ·······*/}

            <DashMenuLinks />

            {/*······· SECOND BLOCK ·······*/}

            <DashDonut />

            {/*········ THIRD BLOCK ·······*/}

            <DashLineChart />

            {/*······· FOURTH BLOCK ·······*/}

            <DashLoading />

          </div>

        {/*···················································*/}
        {/*··············· MIDDLE CONTAINER ··················*/}
        {/*···················································*/}

          <div className="middle-container dash-container">

            {/*········· FIRST BLOCK ·········*/}

            <DashProfile />

            {/*········ SECOND BLOCK ·········*/}

            <DashCovid/>

            {/*········· THIRD BLOCK ·········*/}

            <DashWeather />

            {/*········ FOURTH BLOCK ·········*/}

            <DashSocialShare />

            {/*········· FIFTH BLOCK ·········*/}

            <DashMedia />

          </div>

        {/*···················································*/}
        {/*··············· RIGHT CONTAINER ··················*/}
        {/*···················································*/}

          <div className="right-container dash-container">

            {/*········· FIRST BLOCK ·········*/}

            <DashCalendar />
            
            {/*········ SECOND BLOCK ·········*/}

            <div className="calendar-month block">
              <div className="arrow-btn-container">
                <Calendar />
              </div>
            </div> 

            {/*········ THIRD BLOCK ··········*/}

            <DashNewsletter />

            {/*········· FOURTH BLOCK ········*/}

            <DashAccount />

            {/*········· FIFTH BLOCK ·········*/}
            
            <DashSocialBlock />

        </div> 
      </div> 
    </div>
  )
};
