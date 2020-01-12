import React from 'react'

import { HomeHeaderLink } from './HomeHeaderLink';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      formIsValid: '',
      errors: {}
    }
  }

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Email
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(fields['email']).toLowerCase()) !== true) {
      formIsValid = false;
      errors['email'] = 'Email nie jest prawidłowy';
    }

    //Password
    if(fields['password'].length < 6 ) {
      formIsValid = false;
      errors['password'] = 'Hasło powinno zawierać minimum 6 znaków';
    }

    //ConfirmPassword
    if(fields['password'] !== fields['confirmPassword']) {
      formIsValid = false
      errors['confirmPassword'] = 'Hasła nie są identyczne';
    }

    this.setState({errors: errors});

    let emailValid = (errors.email !== undefined );
    console.log(`Błąd: ${errors.email}`);
    console.log(`Czy walidacja email jest nieprawidłowa? ${emailValid}`)

    let passwordValid = (errors.password !== undefined );
    console.log(`Błąd: ${errors.password}`);
    console.log(fields['password'].length)
    console.log(`Czy walidacja password jest nieprawidłowa? ${passwordValid}`)

    let confirmPasswordValid = (errors.confirmPassword !== undefined );
    console.log(`Błąd: ${errors.confirmPassword}`);
    console.log(`Czy walidacja confirmPassword jest nieprawidłowa? ${confirmPasswordValid}`)

    if (errors.email === undefined && errors.password === undefined && errors.confirmPassword === undefined) {
                this.setState({
                    formIsValid: true,
                    fields: {
                      name: "",
                      email: "",
                      message: ""
                    }
                });
            } else {
                this.setState({
                    status: false
                })
            }
    console.log(this.state.fields)
   }

  handleClick = (e) => {
    e.preventDefault();
    this.handleValidation();
  }

  handleChange = (field, e) => {
    let fields = this.state.fields;
    let formIsValid = this.state.formIsValid;
    fields[field] = e.target.value;
    this.setState({fields});
    this.setState({formIsValid});
  }

  render() {

    let emailValid = (this.state.errors.email !== undefined );
    let passwordValid = (this.state.errors.password !== undefined );
    let confirmPasswordValid = (this.state.errors.confirmPassword !== undefined );


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
                <input type='email'
                  onChange={this.handleChange.bind(this, 'email')}></input>
              </div>
              <div className='account__password'>
                <h3>Hasło</h3>
                <input type='password'
                  onChange={this.handleChange.bind(this, 'password')}></input>
                <h3>Powtórz hasło</h3>
                <input type='password'
                  onChange={this.handleChange.bind(this, 'confirmPassword')}></input>
              </div>
            </div>
          </div>
          <div className='account__buttons'>
            <NavLink to='logowanie'><button>Zaloguj się</button></NavLink>
            <button onClick={this.handleClick}>Załóż konto</button>
          </div>
        </div>
        </div>
    )
  }
}

export { Register }
