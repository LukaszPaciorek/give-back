import React from 'react';


class Contact1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
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
              <form onSubmit={this.handleSubmit}>
                <label>Wpisz swoją wiadomość</label>
                <textarea onfocus="if(this.value==this.defaultValue)this.value='';" className='forms__textarea'value={this.state.value} onChange={this.handleChange} wrap='hard' cols={40} rows={10} placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie dolor ac tincidunt blandit. Sed pulvinar lorem id convallis accumsan.' />
              </form>
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
}



export { Contact1 };
