import React from 'react'
import { HomeHeaderLink } from './HomeHeaderLink';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

const LogOut= () => {

  return  (
    <>
      <div className='account'>
      <HomeHeaderLink />

      <div className="account__section">
        <div className='account__header'>
          <h1>Wylogowanie nastąpiło pomyślnie</h1>
        </div>
        <div className='account__decoration'></div>
        <div className='account__logOut'>
          <NavLink to='/'><button>Strona główna</button></NavLink>

        </div>
      </div>
      </div>
      </>
  )
}

export { LogOut }
