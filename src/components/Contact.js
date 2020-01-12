import React from 'react';


class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      fields: {
        name: '',
        email: '',
        message: '',
      },
      errors: {},
      formIsValid: '',
      status: false
    };
  }

  sendData = () => {

    let {name, email, message} = this.state.fields;

    fetch('https://fer-api.coderslab.pl/v1/portfolio/contact', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({name: name, email: email, message: message})
    }).then((res) => res.json())
        .then((data) => console.log("status", data))
        .catch((err) => console.log(err))
};

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Name
    if(!fields['name']) {
      formIsValid = false;
      errors['name'] = 'Imię powinno być jednym wyrazem';
    }

    if(typeof fields['name'] !== 'undefined') {
      if(!fields['name'].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors['name'] = 'Imię powinno składać się tylko z liter';
      }
    }

    //Email
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(fields['email']).toLowerCase()) !== true) {
      formIsValid = false;
      errors['email'] = 'Email nie jest prawidłowy';
    }

    //text
    if(fields['message'].length < 120 ) {
      formIsValid = false;
      errors['message'] = 'Pole powinno zawierać wiadomość z minimum 120 znaków';
    }

     this.setState({errors: errors});

     let nameValid = (errors.name !== undefined );
     console.log(`Błąd: ${errors.name}`);
     console.log(`Czy walidacja name jest nieprawidłowa? ${nameValid}`)


     let emailValid = (errors.email !== undefined );
     console.log(`Błąd: ${errors.email}`);
     console.log(`Czy walidacja email jest nieprawidłowa? ${emailValid}`)

     let messageValid = (errors.message !== undefined );
     console.log(`Błąd: ${errors.message}`);
     console.log(`Czy walidacja message jest nieprawidłowa? ${messageValid}`)

     console.log(`Czy walidacja przebiegła pomyślnie? ${formIsValid}`)


     if (errors.name === undefined && errors.email === undefined && errors.message === undefined) {
                 this.setState({
                     status: true,
                     name: "",
                     email: "",
                     message: ""
                 });
                 this.sendData();

             } else {
                 this.setState({
                     status: false
                 })
             }

     return this.setState({formIsValid});
   }

   contactSubmit = (e) => {
     e.preventDefault();
     this.handleValidation()
   }

   handleChange = (field, e) => {
     let fields = this.state.fields;
     let formIsValid = this.state.formIsValid;
     fields[field] = e.target.value;
     this.setState({fields});
     this.setState({formIsValid});
   }












  render() {
    let formIsValid = (this.state.formIsValid);
    let nameValid = (this.state.errors.name === undefined );
    let emailValid = (this.state.errors.email === undefined );
    let messageValid = (this.state.errors.message === undefined );

    return (
      <div className='contact' id='contact'>
        <div className='contact__image'>
        </div>
        <div className='contact__container'>
          <div className='contact__header'>
            <p>Skontaktuj się z nami</p>
          </div>
          <div className='contact__decoration'>
          </div>
          <p className='validation__succesfull' style={formIsValid ? {opacity: '1'} : {opacity: '0'}}>Wiadomość została wysłana! Wkrótce się skontaktujemy.</p>
          <div className='contact__form'>
          </div>
          <div className='contact__forms__container'>
            <form className='contact__forms' >
              <div className='forms__input'>
              <label>Wpisz swoje imię</label>
              <input refs='name' type='text' id='text__input' className='name__input'
                     placeholder='Imie'
                     onChange={this.handleChange.bind(this, 'name')}
                     value={this.state.fields['name']}
                     style={nameValid ? {borderBottom: '1px solid $color__grey'} : {borderBottom: '1px solid red'}}></input>
              <p className='error__name' style={nameValid ? {opacity: '0'} : {opacity: '1'}}>Podane imię jest nieprawidłowe!</p>
              </div>
              <div className='forms__input'>
              <label>Wpisz swój email</label>
              <input refs='email' type='email' id='email__input' className='email__input'
                    placeholder='E-mail'
                    onChange={this.handleChange.bind(this, 'email')}
                    value={this.state.fields['email']}
                    style={emailValid ? {borderBottom: '1px solid $color__grey'} : {borderBottom: '1px solid red'}}></input>
              <p className='error__email' style={emailValid ? {opacity: '0'} : {opacity: '1'}}>Podany adres email jest nieprawidłowy!!</p>
              </div>
              <div className='contact__text__container'>
                <div className='forms__input__text'>
                    <label>Wpisz swoją wiadomość</label>
                    <textarea onFocus="if(this.value==this.defaultValue)this.value='';"
                              className='forms__textarea' wrap='hard' cols={40} rows={10}
                              placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie dolor ac tincidunt blandit. Sed pulvinar lorem id convallis accumsan.'
                              onChange={this.handleChange.bind(this, 'message')}
                              value={this.state.fields['message']}
                              style={messageValid ? {borderBottom: '1px solid $color__grey'} : {borderBottom: '1px solid red'}}/>
                  <p className="error__txt" style={messageValid? {opacity: '0'} : {opacity: '1'}}  >Wiadomość musi mieć conajmniej 120 znaków!</p>
                </div>
              </div>
              <div className='forms__button'>
                <button type='submit' className='forms__button__submit' onClick={this.contactSubmit.bind(this)}>Wyślij</button>
              </div>
            </form>
          </div>
        </div>
        <div className='contact__footer'>
          <div className='contact__sign'>
            <p>Copyright by Coders Lab</p>
          </div>
          <div className='contact__logos'>
            <div className='contact__facebook'></div>
            <div className='contact__instagram'></div>
          </div>
        </div>
      </div>
    );
  }
}

export { Contact };
