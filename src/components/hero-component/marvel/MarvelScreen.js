import React from 'react';
import { HeroList } from '../hero-detail/HeroList';

import '../comic-screens.css'

export const MarvelScreen = () => {
  return (
    <div className="marvel-container">
      <div className="app-container container">
        <div className="marvel-screen">
          <div className="window">
            <div className="titlebar">
              <div className="buttons">
                <div className="close">
                <a className="closebutton" href="/marvel" value="close"><span><strong>x</strong></span></a>
                </div>
                <div className="minimize">
                <a className="minimizebutton" href="/marvel" value="minimize"><span><strong>&ndash;</strong></span></a>
                </div>
                <div className="zoom">
                <a className="zoombutton" href="/marvel" value="zoom"><span><strong>+</strong></span></a>
                </div>
              </div>
              OS X Catalina
            </div>
            <div className="content">
              <h1>MARVEL Screen</h1>
              <hr />
              <HeroList publisher="Marvel Comics" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
