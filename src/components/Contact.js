import React from 'react';


function Contact() {
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
        <div className='contact__forms'>
          <div className='forms__input'>
          <label>Wpisz swoje imię</label>
          <input type="text" id="text__input" className="name__input"></input>
          <p className="error__msg">Podane imię jest nieprawidłowe!</p>
          </div>
          <div className='forms__input'>
          <label>Wpisz swój email</label>
          <input type="email" id="email__input" className="email__input"></input>
          <p className="error__msg">Podany adres email jest nieprawidłowy!!</p>
          </div>
        </div>
        <div className='forms__input__text'>
        <label>Wpisz swój tekst</label>
        <input type="text__area" id="text__area__input" className="text__area__input"></input>
        <p className="error__msg">Wiadomość musi mieć conajmniej 120 znaków!</p>
        </div>
        <div className='forms__button'>
          <button type='submit' className='forms__button__submit'>Wyślij</button>
        </div>
      </div>
    </div>
  );
}

export { Contact };
