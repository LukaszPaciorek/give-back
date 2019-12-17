import React from 'react';
import { HomeMainPicture } from './HomeMainPicture';
import { Link } from 'react-router-dom';



function HomeMain() {
  return (
    <div className='home__main'>
    <HomeMainPicture />
      <div className='home__main__container'>
        <div className='home__main__description'>
          <p>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</p>
        </div>
        <div className='home__main__ornament'/>
        <div className="home__main__button">
           <Link to='logowanie'><button>ODDAJ <br/>RZECZY</button></Link>
           <Link to='logowanie'><button id="org">ZORGANIZUJ ZBIÓRKĘ</button> </Link>
        </div>
      </div>
    </div>
  );
}

export { HomeMain };
