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
                {   header: 'Fundacja “Dbam o Zdrowie 2”',
                    description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej.',
                    donation: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                {   header: 'Fundacja “Dla Dzieci 2”',
                    description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                    donation: 'ubrania, meble, zabawki'},
                {   header: 'Fundacja “Bez Domu 2”',
                    description: 'Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.',
                    donation: 'ubrania, jedzenie, ciepłe koce'},
                {   header: 'Fundacja “Dbam o Zdrowie 3”',
                    description: 'Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji zyciowej.',
                    donation: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'},
                {   header: 'Fundacja “Dla Dzieci 3”',
                    description: 'Cel i misja: Pomoc dzieciom z ubogich rodzin.',
                    donation: 'ubrania, meble, zabawki'},
                {   header: 'Fundacja “Bez Domu 3”',
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
              <div key={i} className='who__help__elements'>
                <h3> {el.header} </h3>
                <div className='element__description'> {el.description} </div>
                <div className='element__tags'> {el.donation}</div>
                <div className={'who__help__decoration'+i}/>
              </div>
            )
        });

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(toRender.length / elPerPage); i++) {

            const element = <div key={i} onClick={(e) => this.handleClickPage(e, i)}
                                className={this.state.currentPage === i ? 'activePage' : ''}>{i}</div>
            pageNumbers.push(element)
        }

        return (
            <>
            <div className='who__help__content'>
              <p className='who__help__description'>
                    Fundacje
                    W naszej bazie znajdziesz listę
                    zweryfikowanych Fundacji, z którymi
                    współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
              </div>
              <div className='who__help__box'>
                {elements}
              </div>
              <div className={'who__help__pagination'}>
                <div className={'pagination__list'}>
                  {pageNumbers}
                </div>
              </div>
            </>
        )
    }
}

export default WhoHelpFundation
