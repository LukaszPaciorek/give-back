import React from 'react'

import { HomeHeaderLink } from './HomeHeaderLink';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

const Register = () => {
    return  (
        <div className='rejestracja'>
        <HomeHeaderLink />

        <div className="rejestracja__section">
          <div className='rejestracja__header'>
            <h1>Załóż konto</h1>
          </div>
          <div className='rejestracja__decoration'></div>
          <div className='rejestracja__login__container'>
            <div className='rejestracja__login__inputs'>
              <div className='rejestracja__email'>
                <h3>Email</h3>
                <input type='email'></input>
              </div>
              <div className='rejestracja__password'>
                <h3>Hasło</h3>
                <input type='password'></input>
                <h3>Powtórz hasło</h3>
                <input type='password'></input>
              </div>
            </div>
          </div>
          <div className='rejestracja__buttons'>
            <NavLink to='logowanie'><button>Zaloguj się</button></NavLink>
            <button>Załóż konto</button>
          </div>
        </div>
        </div>
    )
}

export { Register }
