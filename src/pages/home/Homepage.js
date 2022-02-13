import React, { useContext } from 'react'
import Calendar from 'react-calendar'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext'
import { useDate } from '../../hooks/useDate';
import './homepage.css'

export const Homepage = () => {

  const { user } = useContext(AuthContext)

  const [handleToday, handleDayAfter, handleDayBefore, digitDate, stringDate] = useDate()


  return (  
    <div className="nactive-dashboard">
      <div className="main-container">

        {/*·····························*/}
        {/*······ HORIZONTAL MENU ······*/}
        {/*·····························*/}

          <header className="dash-header block">
            <ul className="unordered-list header-menu horizontal-list">
              <li>
                <Link className="dash-link header-menu-tab" to="#"><span className="dash-span icon entypo-cog scnd-font-color"></span>Account</Link>
              </li>
            </ul>

            <div className="profile-menu">
              <p className="paragraph-text">{user.name} <Link to="#26"></Link></p>
              <div className="profile-picture small-profile-picture">
                <img width="40px" alt="Charlino Brown" src="/assets/resources/charlie.jpg" />
              </div>
            </div>
          </header>

        {/*···················································*/}
        {/*··············· LEFT CONTAINER ····················*/}
        {/*···················································*/}

          <div className="left-container dash-container">

                {/*·····························*/}
                {/*······· FIRST SIDEBAR ·······*/}
                {/*····· REACTIVE PROJECTS ·····*/}
                {/*·····························*/}

            <div className="menu-box block">
              <h2 className="heading2 titular">REACTIVE PROJECTS</h2>
              <ul className="unordered-list menu-box-menu">
                <li>
                  <Link className="dash-link menu-box-tab" to="/gifs" target="_blank">
                    <span className="dash-span icon entypo-flashlight scnd-font-color"></span>
                      Gifs App
                    {/* <div className="menu-box-number">1</div> */}
                  </Link>                           
                </li>
                <li>
                  <Link className="dash-link menu-box-tab" to="/tasks" target="_blank">
                    <span className="dash-span icon entypo-newspaper scnd-font-color"></span>
                      Tasks App
                    {/* <div className="menu-box-number">3</div> */}
                  </Link>                            
                </li>
                <li>
                  <Link className="dash-link menu-box-tab" to="/smash" target="_blank">
                    <span className="dash-span icon entypo-alert scnd-font-color"></span>
                      Smash Bros
                    {/* <div className="menu-box-number">5</div> */}
                  </Link>                            
                </li>
                <li>
                  <Link className="dash-link menu-box-tab" to="/hero/marvel" target="_blank">
                    <span className="dash-span icon entypo-qq scnd-font-color"></span>
                      Marvel
                  </Link>
                </li>
                <li>
                  <Link className="dash-link menu-box-tab" to="/hero/dc" target="_blank">
                    <span className="dash-span icon entypo-renren scnd-font-color"></span>
                      DC
                  </Link>
                </li>                        
              </ul>
            </div>

              {/*······························*/}
              {/*······· SECOND SIDEBAR ·······*/}
              {/*········· DONUT CHART ········*/}
              {/*······························*/}

            <div className="donut-chart-block block">
              <h2 className="heading2 titular">OS AUDIENCE STATS</h2>
              <div className="donut-chart">

                <div id="porcion1" className="recorte"><div className="quesito ios" data-rel="21"></div></div>
                <div id="porcion2" className="recorte"><div className="quesito mac" data-rel="39"></div></div>
                <div id="porcion3" className="recorte"><div className="quesito win" data-rel="31"></div></div>
                <div id="porcionFin" className="recorte"><div className="quesito linux" data-rel="9"></div></div>

                <p className="center-date">JUNE<br/><span className="dash-span scnd-font-color">2013</span></p> 
              </div>
              <ul className="unordered-list os-percentages horizontal-list">
                <li>
                  <p className="ios os scnd-font-color">iOS</p>
                  <p className="os-percentage">21<sup>%</sup></p>
                </li>
                <li>
                  <p className="mac os scnd-font-color">Mac</p>
                  <p className="os-percentage">48<sup>%</sup></p>
                </li>
                <li>
                  <p className="linux os scnd-font-color">Linux</p>
                  <p className="os-percentage">9<sup>%</sup></p>
                </li>
                <li>
                  <p className="win os scnd-font-color">Win</p>
                  <p className="os-percentage">32<sup>%</sup></p>
                </li>
              </ul>
            </div>
              
              {/*······························*/}
              {/*········ THIRD SIDEBAR ·······*/}
              {/*········· LINE CHART ·········*/}
              {/*······························*/}

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

              {/*·······························*/}
              {/*········ FOURTH SIDEBAR ·······*/}
              {/*········· MEDIA BLOCK ·········*/}
              {/*·······························*/}

            <div className="media block">
              <div id="media-display">
                <Link className="dash-link media-btn play" to="#23"><span className="dash-span fontawesome-play"></span></Link>
              </div>
              <div className="media-control-bar">
                <Link className="dash-link media-btn play" to="#23"><span className="dash-span fontawesome-play scnd-font-color"></span></Link>
                <p className="time-passed">4:15 <span className="dash-span time-duration scnd-font-color">/ 9:23</span></p>
                <Link className="dash-link media-btn volume" to="#24"><span className="dash-span fontawesome-volume-up scnd-font-color"></span></Link>
                <Link className="dash-link media-btn resize" to="#25"><span className="dash-span fontawesome-resize-full scnd-font-color"></span></Link>
              </div>
            </div>

              {/*·······························*/}
              {/*········· FIFTH SIDEBAR ·······*/}
              {/*········· SOCIAL BLOCK ········*/}
              {/*·······························*/}

            <ul className="unordered-list social horizontal-list block">
              <li className="facebook"><p className="icon"><span className="dash-span zocial-facebook"></span></p><p className="number">248k</p></li>
              <li className="twitter"><p className="icon"><span className="dash-span zocial-twitter"></span></p><p className="number">30k</p></li>
              <li className="googleplus"><p className="icon"><span className="dash-span zocial-googleplus"></span></p><p className="number">124k</p></li>
              <li className="mailbox"><p className="icon"><span className="dash-span fontawesome-envelope"></span></p><p className="number">89k</p></li>
            </ul>

          </div>

        {/*···················································*/}
        {/*··············· MIDDLE CONTAINER ··················*/}
        {/*···················································*/}

          <div className="middle-container dash-container">

              {/*·······························*/}
              {/*········· FIRST BLOCK ·········*/}
              {/*········ PROFILE BLOCK ········*/}
              {/*·······························*/}

            <div className="profile block">
              <a className="dash-link add-button" href="https://twitter.com/nachoxtacks" target="_blank" rel="noreferrer">
                <span className="dash-span icon entypo-plus scnd-font-color"></span>
              </a>
              <div className="profile-picture big-profile-picture clear">
                <img width="150px" alt="Nacho" src="/assets/resources/nacho-blue.jpg" />
              </div>
              <h1 className="heading1 user-name">@nachoxtacks</h1>
              <div className="profile-description">
                <p className="scnd-font-color">Front End Web Developer</p>
              </div>
              <ul className="unordered-list profile-options horizontal-list">
                <li>
                  <a className="dash-link linkedin" href="https://www.linkedin.com/in/nachosalas/" target="_blank" rel="noreferrer">
                    <p className="paragraph-text">
                      <span className="dash-span icon entypo-linkedin scnd-font-color">
                      </span>
                    </p>
                  </a>
                </li>
                <li>
                  <a className="dash-link insta" href="https://www.instagram.com/mirlokimirli/" target="_blank" rel="noreferrer">
                    <p className="paragraph-text">
                      <span className="dash-span icon entypo-instagrem scnd-font-color">
                      </span>
                    </p>
                  </a>
                </li>
                <li>
                  <a className="dash-link github" href="https://github.com/snachom/nactive" target="_blank" rel="noreferrer">
                    <p className="paragraph-text">
                      <span className="dash-span icon entypo-github scnd-font-color">
                      </span>
                    </p>
                  </a>
                </li>
              </ul>
            </div>

              {/*·······························*/}
              {/*········ SECOND BLOCK ·········*/}
              {/*········ WEATHER BLOCK ········*/}
              {/*·······························*/}

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

              {/*·······························*/}
              {/*········· THIRD BLOCK ·········*/}
              {/*········ TWITTER BLOCK ········*/}
              {/*·······························*/}

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

              {/*·······························*/}
              {/*········ FOURTH BLOCK ·········*/}
              {/*········· SOCIAL BLOCK ········*/}
              {/*·······························*/}

              <ul className="unordered-list social block">
                <Link className="dash-link" to="#50"> 
                  <div className="facebook icon">
                    <span className="dash-span zocial-facebook"></span>
                  </div>
                  <h2 className="heading2 facebook titular">SHARE TO FACEBOOK</h2>
                </Link>
                <Link className="dash-link" to="#51"> 
                  <div className="twitter icon">
                    <span className="dash-span zocial-twitter"></span>
                  </div>
                  <h2 className="heading2 twitter titular">SHARE TO TWITTER</h2>
                </Link>  
                <Link className="dash-link" to="#52">
                  <div className="googleplus icon">
                    <span className="dash-span zocial-googleplus"></span>
                  </div>
                  <h2 className="heading2 googleplus titular">SHARE TO GOOGLE+</h2>
                </Link>
              </ul>

          </div>

        {/*···················································*/}
        {/*··············· RIGHT CONTAINER ··················*/}
        {/*···················································*/}

          <div className="right-container dash-container">

              {/*·································*/}
              {/*········· FIRST BLOCK ···········*/}
              {/*········ CALENDAR BLOCKS ········*/}
              {/*·································*/}

              <div className="calendar-day block">
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

                  
              <div className="calendar-month block">
                <div className="arrow-btn-container">

                  <Calendar />

                </div>
            </div> 

              {/*·······························*/}
              {/*········ SECOND BLOCK ·········*/}
              {/*······ NEWSLETTER BLOCK ·······*/}
              {/*·······························*/}

            <div className="join-newsletter block">
              <h2 className="heading2 titular">JOIN THE NEWSLETTER</h2>
              <div className="input-container">
                <input type="text" placeholder="yourname@gmail.com" className="dash-input email text-input"/>
                <div className="input-icon envelope-icon-newsletter">
                  <span className="dash-span fontawesome-envelope scnd-font-color"></span>
                </div>
              </div>
              <Link className="dash-link subscribe button" to="#21">SUBSCRIBE</Link>
            </div>

              {/*·······························*/}
              {/*········· THIRD BLOCK ·········*/}
              {/*········ SIGN IN BLOCK ········*/}
              {/*·······························*/}

            <div className="account block">
              <h2 className="heading2 titular">SIGN IN TO YOUR ACCOUNT</h2>
              <div className="input-container">
                <input type="text" placeholder="yourname@gmail.com" className="dash-input email text-input"/>
                <div className="input-icon envelope-icon-acount">
                  <span className="dash-span fontawesome-envelope scnd-font-color"></span>
                </div>
              </div>
              <div className="input-container">
                <input type="text" placeholder="Password" className="dash-input password text-input"/>
                <div className="input-icon password-icon">
                  <span className="dash-span fontawesome-lock scnd-font-color"></span>
                </div>
              </div>
              <Link className="dash-link sign-in button" to="#22">SIGN IN</Link>
              <p className="scnd-font-color">Forgot Password?</p>
                <Link className="dash-link fb-sign-in" to="58">
                  <p className="paragraph-text">
                    <span className="dash-span fb-border">
                      <span className="dash-span icon zocial-facebook">
                      </span>
                    </span>Sign in with Facebook
                  </p>
              </Link>
            </div>

              {/*··································*/}
              {/*·········· FOURTH BLOCK ··········*/}
              {/*········ PERCENTAGE BLOCK ········*/}
              {/*··································*/}

            <div className="loading block"> 
              <div className="progress-bar downloading"></div>
              <p className="paragraph-text">
                <span className="dash-span icon fontawesome-cloud-download scnd-font-color"></span>Downloading...
              </p>
              <p className="percentage">81<sup>%</sup></p>
              <div className="progress-bar uploading"></div>
              <p className="paragraph-text">
                <span className="dash-span icon fontawesome-cloud-upload scnd-font-color"></span>Uploading...
              </p>
              <p className="percentage">43<sup>%</sup></p>
            </div>

        </div> 
      </div> 
    </div>
  )
};
