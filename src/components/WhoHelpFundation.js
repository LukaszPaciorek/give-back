import React from 'react';


class WhoHelpFundation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toRender: [
                {    header: 'Fundacja “Dbam o Zdrowie”',
                    description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej.',
                    donation: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                {   header: 'Fundacja “Dla Dzieci”',
                    description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                    donation: 'ubrania, meble, zabawki'},
                {   header: 'Fundacja “Bez Domu”',
                    description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    donation: 'ubrania, jedzenie, ciepłe koce'},
                {   header: 'Fundacja “Dbam o Zdrowie2”',
                    description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej.',
                    donation: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                {   header: 'Fundacja “Dla Dzieci2”',
                    description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                    donation: 'ubrania, meble, zabawki'},
                {   header: 'Fundacja “Bez Domu2”',
                    description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    donation: 'ubrania, jedzenie, ciepłe koce'},
                {   header: 'Fundacja “Dbam o Zdrowie3”',
                    description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej.',
                    donation: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                {   header: 'Fundacja “Dla Dzieci3”',
                    description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                    donation: 'ubrania, meble, zabawki'},
                {   header: 'Fundacja “Bez Domu3”',
                    description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    donation: 'ubrania, jedzenie, ciepłe koce'}
            ],
            currentPage: 1,
            elPerPage: 3,
        }
    }

    handleClickPage = (e, i) => {
        this.setState({
            currentPage: i
        });
    };

    render() {

        let elemPerPage = 3;
        const {currentPage, toRender, elPerPage} = this.state;
        const indexOfLast = currentPage * elemPerPage;
        const indexOfFirst = indexOfLast - elemPerPage;
        const currentEl = toRender.slice(indexOfFirst, indexOfLast)
        const elements = currentEl.map((el, i) => {

            return (
                <section>
                  <h1> {el.header} </h1>
                  <p> {el.description} </p>
                  <p> {el.donation}</p>
                </section>
            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(toRender.length / elPerPage); i++) {

            const element = <li key={i} onClick={(e) => this.handleClickPage(e, i)}
                                className={this.state.currentPage === i ? 'activePage' : ''}>{i}</li>
            pageNumbers.push(element)
        }

        return (
            <>
              <div className='who__help__content'>
                 <p className={'p'}>
                    W naszej bazie znajdziesz listę
                    zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
              </div>
              <section>
                {elements}
              </section>
              <div className={'p'}>
                <ul className={'p'}>
                  {pageNumbers}
                </ul>
              </div>
            </>
        )
    }
}

export default WhoHelpFundation
