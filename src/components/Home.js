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
import { HomeMainPicture } from './HomeMainPicture';


function Home() {
  return (
    <div className="Home__Container">
      <div className="Home__Main__Container">
        <HomeMainPicture />
        <HomeHeader />
        <HomeMain />
      </div>
      <HomeColumns />
      <EasySteps />
      <AboutUs />
      <WhoHelp />
      <Contact />
    </div>
  );
}

export { Home };
