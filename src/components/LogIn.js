import React from 'react'

import { HomeHeaderLink } from './HomeHeaderLink';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";


const LogIn = () => {
    return  (
        <div className='logowanie'>
        <HomeHeaderLink />

        <div className="logowanie__section">
          <div className='logowanie__header'>
            <h1>Zaloguj się</h1>
          </div>
          <div className='logowanie__decoration'></div>
          <div className='logowanie__login__container'>
            <div className='logowanie__login__inputs'>
              <div className='logowanie__email'>
                <h3>Email</h3>
                <input type='email'></input>
              </div>
              <div className='logowanie__password'>
                <h3>Hasło</h3>
                <input type='password'></input>
              </div>
            </div>
          </div>
          <div className='logowanie__buttons'>
            <NavLink to='rejestracja'><button>Załóż konto</button></NavLink>
            <button>Zaloguj się</button>
          </div>
        </div>
        </div>
    )
}

export { LogIn }
