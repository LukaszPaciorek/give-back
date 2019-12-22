import React from 'react';
import { HomeHeader } from './HomeHeader';
import { Navigation } from './Navigation';
import { HomeColumns } from './HomeColumns';
import { EasySteps } from './EasySteps';
import { AboutUs } from './AboutUs';
import { WhoHelp } from './WhoHelp';
import { Contact } from './Contact';
import { FormSend } from './FormSend';
import { HomeMain } from './HomeMain';


function Home() {
  return (

    <div className="home__container" id='home'>
      <div className='home__main__cont'>
        <HomeHeader />
        <HomeMain />
        <HomeColumns />
        <EasySteps />
        <AboutUs />
        <Contact />
      <div className="home__second__container">
        <div className='home__right__container'>
        </div>
      </div>
      </div>
    </div>
  );
}

export { Home };
