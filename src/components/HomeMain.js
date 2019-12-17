import React from 'react';
import { HomeMainPicture } from './HomeMainPicture';
import { Link } from 'react-router-dom';



function HomeMain() {
  return (
    <div className='Home__Main'>
    <HomeMainPicture />
      <div className='Home__Main__Container'>
        <div className='Home__Main__Description'>
          <p>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</p>
        </div>
        <div className='Home__Main__Ornament'/>
        <div className="Home__Main__Button">
           <Link to='logowanie'><button>ODDAJ <br/>RZECZY</button></Link>
           <Link to='logowanie'><button id="org">ZORGANIZUJ ZBIÓRKĘ</button> </Link>
        </div>
      </div>
    </div>
  );
}

export { HomeMain };
