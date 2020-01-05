import React from 'react';
import logo from './logo.svg';
import { Home } from './components/Home';
import { HashRouter, Route, Link, Switch, NavLink } from 'react-router-dom';
import { LogIn } from './components/LogIn';
import { Register } from './components/Register';
import { LogOut} from './components/LogOut';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path= "/" component = { Home } />
          <Route exact path= "/logowanie" component = { LogIn } />
          <Route exact path= "/rejestracja" component = { Register } />
          <Route exact path= "/wylogowanie" component = { LogOut } />
        </Switch>
      </HashRouter>
    </>
  );
}

export { App };
