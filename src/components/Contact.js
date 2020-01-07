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
        <div className='contact__forms__container'>
          <div className='contact__forms'>
            <div className='forms__input'>
            <label>Wpisz swoje imię</label>
            <input type="text" id="text__input" className="name__input" placeholder='Imie' required></input>
            <div className="error__msg">Podane imię jest nieprawidłowe!</div>
            </div>
            <div className='forms__input'>
            <label>Wpisz swój email</label>
            <input type="email" id="email__input" className="email__input" placeholder='E-mail' required></input>
            <div className="error__msg">Podany adres email jest nieprawidłowy!!</div>
            </div>
          </div>
        </div>

        <div className='contact__text__container'>
          <div className='forms__input__text'>
            <label>Wpisz swój tekst</label>
            <input type="text__area" id="text__area__input" className="text__area__input" rows="5" placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie dolor ac tincidunt blandit. Sed pulvinar lorem id convallis accumsan. '></input>
            <div className="error__msg">Wiadomość musi mieć conajmniej 120 znaków!</div>
            <div className='forms__button'>
              <button type='submit' className='forms__button__submit'>Wyślij</button>
            </div>
          </div>
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



export { Contact };
