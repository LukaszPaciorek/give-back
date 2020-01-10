import React from 'react'

import { HomeHeaderLink } from './HomeHeaderLink';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";


const LogIn = () => {
    return  (
        <div className='account'>
        <HomeHeaderLink />

        <div className="account__section">
          <div className='account__header'>
            <h1>Zaloguj się</h1>
          </div>
          <div className='account__decoration'></div>
          <div className='account__login__container'>
            <div className='account__login__inputs'>
              <div className='account__email'>
                <h3>Email</h3>
                <input type='email'></input>
              </div>
              <div className='account__password'>
                <h3>Hasło</h3>
                <input type='password'></input>
              </div>
            </div>
          </div>
          <div className='account__buttons'>
            <NavLink to='rejestracja'><button>Załóż konto</button></NavLink>
            <button>Zaloguj się</button>
          </div>
        </div>
        </div>
    )
}

export { LogIn }
