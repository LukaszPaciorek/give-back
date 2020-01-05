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
                <section key={i}>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci aperiam doloribus esse excepturi, illo iste mollitia
                    nostrum odio quam.
                </p>
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

export default WhoHelpOrganisations
