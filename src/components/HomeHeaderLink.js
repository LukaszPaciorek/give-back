import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

function HomeHeaderLink() {
  return (
    <div className='header'>
      <nav className='header__nav'>
        <ul className='header__nav__login'>
          <NavLink to='logowanie'><li>Zaloguj</li></NavLink>
          <NavLink to='rejestracja'><li>Załóż konto</li></NavLink>
        </ul>
      </nav>

      <nav className='header__main__nav'>
        <ul className='header__main__nav__ul'>
              <li><NavLink activeClass='active' to='/'>Start</NavLink></li>
              <li><NavLink activeClass='active' to='/#section4'>O co chodzi</NavLink></li>
              <li><NavLink activeClass='active' to='/#aboutUs'>O nas</NavLink></li>
              <li><NavLink activeClass='active' to='/#aboutUs'>Fundacja i organizacje</NavLink></li>
              <li><NavLink activeClass='active' to='/#contact'>Kontakt</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export { HomeHeaderLink };
