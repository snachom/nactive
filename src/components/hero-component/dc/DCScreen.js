import { HeroList } from '../hero-detail/HeroList';

import '../comic-screens.css'

export const DCScreen = () => {
  return (
    <div className="app-container container">
      <div className="marvel-screen">
        <div className="window">
          <div className="titlebar">
            <div className="buttons">
              <div className="close">
                <a className="closebutton" href="/dc" value="close"><span><strong>x</strong></span></a>
              </div>
              <div className="minimize">
                <a className="minimizebutton" href="/dc" value="minimize"><span><strong>&ndash;</strong></span></a>
              </div>
              <div className="zoom">
                <a className="zoombutton" href="/dc" value="zoom"><span><strong>+</strong></span></a>
              </div>
            </div>
            OS X Catalina
          </div>
          <div className="content">
            <h1>DC Screen</h1>
            <hr />
            <HeroList publisher="DC Comics" />
          </div>
        </div>
      </div>
    </div>
  )
};