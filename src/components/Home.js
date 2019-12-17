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
    <div className="Home__Container">
      <div className='Home__Main__Cont'>
        <HomeHeader />
        <HomeMain />
        <HomeColumns />
      <div className="Home__Second__Container">
        <div className='Home__Right__Container'>
        </div>
      </div>
      </div>
    </div>
  );
}

export { Home };
