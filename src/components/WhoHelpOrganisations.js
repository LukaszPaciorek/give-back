import React from 'react';


class WhoHelpOrganisations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toRender: [
              {   header: 'Organizacja “Lorem Ipsum 1”',
                  description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                  donation: 'Egestas, sed, tempus.'},
              {   header: 'Organizacja “Lorem Ipsum 2” ',
                  description: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                  donation: 'Ut, aliquam, purus, sit, amet.'},
              {   header: 'Organizacja “Lorem Ipsum 3”',
                  description: 'Scelerisque in dictum non consectetur a erat nam',
                  donation: 'Mi, quis, hendrerit, dolor.'},
              {   header: 'Organizacja “Lorem Ipsum 4”',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aspernatur at, culpa nam nemo provident qui.',
                  donation: 'Lorem ipsum dolor.'},
              {   header: 'Organizacja “Lorem Ipsum 5”',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aspernatur at, culpa nam nemo provident qui.',
                  donation: 'Lorem ipsum dolor.'},
              {   header: 'Organizacja “Lorem Ipsum 6”',
                  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi aspernatur at, culpa nam nemo provident qui.',
                  donation: 'Lorem ipsum dolor.'}
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
                    Organizacje pozarządowe
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci aperiam doloribus esse excepturi, illo iste mollitia
                    nostrum odio quam.
                </p>
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

export default WhoHelpOrganisations
