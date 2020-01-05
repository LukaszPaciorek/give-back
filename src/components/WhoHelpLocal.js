import React from 'react';


class WhoHelpLocal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toRender: [
              {    header: 'Zbiórka “Lorem Ipsum 1”',
                   description: 'Quis varius quam quisque id diam vel quam elementum pulvinar.',
                   donation: 'Egestas, sed, tempus.'},
               {   header: 'Zbiórka “Lorem Ipsum 2”',
                   description: 'Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.',
                   donation: 'Ut, aliquam, purus, sit, amet.'},
               {   header: 'Zbiórka “Lorem Ipsum 3”',
                   description: 'Scelerisque in dictum non consectetur a erat nam',
                   donation: 'Mi, quis, hendrerit, dolor.'},
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
            if (i>1) {
            const element = <div key={i} onClick={(e) => this.handleClickPage(e, i)}
                                className={this.state.currentPage === i ? 'activePage' : ''}>{i}</div>
            pageNumbers.push(element)
            }
        }

        return (
            <>
            <div className='who__help__content'>
              <p className='who__help__description'>
                    Lokalne zbiórki
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

export default WhoHelpLocal
