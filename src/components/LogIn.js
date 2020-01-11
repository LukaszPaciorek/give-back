import React, { Component } from 'react'

import { HomeHeaderLink } from './HomeHeaderLink';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';


class LogIn extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {emailError: '', passwordError: ''},
      status: false
    }
  }

  handleUserInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.currentTarget.value;
    this.setState({[name]: value.trim()});
    console.log(this.state.email, this.state.password);
  }

  handleValidate = (e) => {
    e.preventDefault();
    const {password, email, errors} = this.state;
    console.log(email.length);
    let errorObj = errors;
    const validateEmail = RegExp(/^\S+@\S+\.\S+/g);
    console.log(validateEmail.test(email));
    if ((email.length <= 5 && validateEmail.test(email))
        && password.length < 6) {
            errorObj.emailError = 'Podany email jest nieprawidłowy!'
            errorObj.passwordError = 'Podane hasło jest za krótkie!'
            console.log('Podany email jest nieprawidłowy a hasło za krótkie');
        } else if ((email.length <= 5 && !validateEmail.test(email)) && password.length >= 6) {
            errorObj.emailError = 'Podany email jest nieprawidłowy!'
            console.log('Podany email jest nieprawidłowy');
        } else if ((email.length > 5 || !validateEmail.test(email)) && password.length < 6)
        if (password.length <= 6) {
            errorObj.passwordError = 'Podane hasło jest za krótkie!'
            console.log('Podane hasło jest za krótkie');
        } else {
          console.log('Wszystko OK');
            errorObj.passwordError = ''
            errorObj.emailError = ''

        }
        this.setState({
            errors: errorObj,

        });

        if (this.state.errors.passwordError === '' && this.state.errors.emailError === '' ) {
            this.setState({
                status: true,
                pass: '',
                email: ''
            });


        } else {
            this.setState({
                status: false
            })
        }
    };

  render() {
    return  (
        <div className='account'>
        <HomeHeaderLink />

        <div className='account__section'>
          <div className='account__header'>
            <h1>Zaloguj się</h1>
          </div>
          <div className='account__decoration'></div>
          <div className='account__login__container'>
            <div className='account__login__inputs'>
              <div className='account__email'>
                <h3>Email</h3>
                <input type='email' required className='form-control' name='email'
                  value={this.state.email}
                  placeholder='email'
                  onChange={this.handleUserInput} />
                  <p className={'validateData'}> {this.state.emailError}</p>

              </div>
              <div className='account__password'>
                <h3>Hasło</h3>
                <input type='password' className='form-control' name='password'
                  value={this.state.password}
                  placeholder='password'
                  onChange={this.handleUserInput} />
                  <p className={'validateData'}> {this.state.passwordError}</p>

              </div>
            </div>
          </div>
          <div className='account__buttons'>
            <NavLink to='rejestracja'><button>Załóż konto</button></NavLink>
            <button type='submit' onClick={this.handleValidate}>Zaloguj się</button>
          </div>
        </div>

        </div>
    )}
}

export { LogIn }
