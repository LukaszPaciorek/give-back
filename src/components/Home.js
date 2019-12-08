import React from 'react';
import HomeHeader from './HomeHeader';
import Navigation from './Navigation';
import HomeColumns from './HomeColumns';
import EasySteps from './EasySteps';
import AboutUs from './AboutUs';
import WhoHelp from './WhoHelp';
import Contact from './Contact';
import FormSend from './FormSend';


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Home component</p>
        <HomeHeader />
        <Navigation />
        <HomeColumns />
        <EasySteps />
        <AboutUs />
        <WhoHelp />
        <Contact />
        <FormSend />
      </header>
    </div>
  );
}

export default Home;
