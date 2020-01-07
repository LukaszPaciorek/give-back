import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

function HomeHeader() {
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
        <Link activeClass="active" to="target" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={100} isDynamic={true}>
              <li>Start</li>
        </Link>
        <Link activeClass="active" to="easy__steps__header" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={100} isDynamic={true}>
              <li>O co chodzi</li>
        </Link>
        <Link activeClass="active" to="about__us" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={100} isDynamic={true}>
              <li>O nas</li>
        </Link>
        <Link activeClass="active" to="who__help__description" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={100} isDynamic={true}>
              <li>Fundacja i organizacje</li>
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={100} isDynamic={true}>
              <li>Kontakt</li>
        </Link>
        </ul>
      </nav>
    </div>
  );
}

export { HomeHeader };
