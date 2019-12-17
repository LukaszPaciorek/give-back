import React from 'react';
import { Link } from 'react-router-dom';

function EasySteps() {
  return (
    <div className='easy__steps' id='section4'>
      <div className='easy__steps__header'>
        <h2>Wystarczą 4 proste kroki</h2>
        <div className='home__main__ornament'/>
      </div>
      <div className='easy__steps__container'>

        <div className='steps'>
          <img className='steps__icon' src={require('../assets/Icon-1.svg')} />
          <p className='easy__steps__title'>Wybierz rzeczy</p>
          <span className='easy__steps__decoration'></span>
          <p className='easy__steps__descrition'>Ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className='steps'>
          <img className='steps__icon' src={require('../assets/Icon-2.svg')} />
          <p className='easy__steps__title'>Spakuj je</p>
          <span className='easy__steps__decoration'></span>
          <p className='easy__steps__descrition'>Skorzystaj z worków na śmieci</p>
        </div>
        <div className='steps'>
          <img className='steps__icon' src={require('../assets/Icon-3.svg')} />
          <p className='easy__steps__title'>Zdecyduj komu chcesz pomóc</p>
          <span className='easy__steps__decoration'></span>
          <p className='easy__steps__descrition'>Wybierz zaufane miejsce</p>
        </div>
        <div className='steps'>
          <img className='steps__icon' src={require('../assets/Icon-4.svg')} />
          <p className='easy__steps__title'>Zamów kuriera</p>
          <span className='easy__steps__decoration'></span>
          <p className='easy__steps__descrition'>Kurier przyjedzie w dogodnym terminie</p>
        </div>

      </div>
        <div className="home__main__button">
          <Link to='logowanie'><button>ODDAJ <br/>RZECZY</button></Link>
        </div>
    </div>
  );
}

export { EasySteps };
