import React from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';

function HomeHeader() {
  return (
    <div className='Header'>
      <nav className='Header__Nav'>
        <ul className='Header__Nav__Login'>
          <NavLink to='/'><li>Zaloguj</li></NavLink>
          <NavLink to='/'><li>Załóż konto</li></NavLink>
        </ul>
      </nav>

      <nav className='Header__Main__Nav'>
        <ul className='Header__Main__Nav__Ul'>
        <Link activeClass="active" to="target" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={1000} isDynamic={true}>
              <li>Start</li>
        </Link>
        <Link activeClass="active" to="target" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={1000} isDynamic={true}>
              <li>O co chodzi</li>
        </Link>
        <Link activeClass="active" to="target" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={1000} isDynamic={true}>
              <li>O nas</li>
        </Link>
        <Link activeClass="active" to="target" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={1000} isDynamic={true}>
              <li>Fundacja i organizacje</li>
        </Link>
        <Link activeClass="active" to="target" spy={true} smooth={true} hashSpy={true}
              offset={50} duration={500} delay={1000} isDynamic={true}>
              <li>Kontakt</li>
        </Link>
        </ul>
      </nav>
    </div>
  );
}

export { HomeHeader };
