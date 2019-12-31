import React from 'react';


class WhoHelp extends React.Component {
    constructor() {
      super();
      this.state = {
        groups: ['Fundacjom', 'Organizacjom pozarządowym', 'Lokalnym zbiórkom', 'Fundacjom', 'Organizacjom pozarządowym', 'Lokalnym zbiórkom', 'Fundacjom', 'Organizacjom pozarządowym', 'Lokalnym zbiórkom'],
        currentPage: 1,
        textPerGroup: 3
      }
    }
    handleClick = (event, i) => {
      this.setState({
        currentPage: i
      })
    }


    render() {
      const {groups, currentPage, textPerGroup} = this.state;

      const indexOfLast = currentPage * textPerGroup;
      const indexOfFirst = indexOfLast - textPerGroup;
      const currentGroup = groups.slice(indexOfFirst, indexOfLast);

      const elements = currentGroup.map ((group, i) => {
        return <li key={i}> {group} </li>
      })

      const pageNumbers = [];
      for (let i=1; i <= Math.ceil(groups.length/textPerGroup); i++) {
        const element = <li key={i}
                            onClick={e=>this.handleClick(e,i)}
                            className={this.state.currentPage == i ? 'active' : ''}>
                                    {i}
                        </li>
        pageNumbers.push(element)
      }




    return <section>
      <div className='who__help__container'>
        <div className='who__help__header'>
          <h2>Komu pomagamy?</h2>
          <div className='who__help__ornament'/>
          </div>
          <div className='who__help__table'>
            <ul className='who__help__groups'>
              {elements}
            </ul>
          </div>
          <div className='who__help__text'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>

          <ul className='who__help__numbers'>
            {pageNumbers}
          </ul>
          </div>
    </section>
      }
}

export { WhoHelp };
