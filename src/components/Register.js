import React from 'react'

import { HomeHeaderLink } from './HomeHeaderLink';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";



const Register = () => {
    return  (

        <div className='account'>
        <HomeHeaderLink />

        <div className="account__section__reg">
          <div className='account__header'>
            <h1>Załóż konto</h1>
          </div>
          <div className='account__decoration'></div>
          <div className='account__login__container__reg'>
            <div className='account__login__inputs__reg'>
              <div className='account__email'>
                <h3>Email</h3>
                <input type='email'></input>
              </div>
              <div className='account__password'>
                <h3>Hasło</h3>
                <input type='password'></input>
                <h3>Powtórz hasło</h3>
                <input type='password'></input>
              </div>
            </div>
          </div>
          <div className='account__buttons'>
            <NavLink to='logowanie'><button>Zaloguj się</button></NavLink>
            <button>Załóż konto</button>
          </div>
        </div>
        </div>
    )
}

export { Register }
