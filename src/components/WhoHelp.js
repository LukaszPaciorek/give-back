import React from 'react';


class WhoHelp extends React.Component {
    constructor() {
      super();
      this.state = {
        groups: ['Fundacjom', 'Organizacjom pozarządowym', 'Lokalnym zbiórkom'],
        currentPage: 1,
        textPerGroup: 3
      }
    }

    render() {
      const {groups, currentPage, textPerGroup} = this.state;

      const elements = groups.map ((group, i) => {
        return <li key={i}> {group} </li>
      })

      const pageNumbers = [];
      for (let i=1; i <= Math.ceil(groups.length/textPerGroup); i++) {
        const element = <li key={i}> {i} </li>
        pageNumbers.push(element)
      }


    return <section>
    <div className='who__help__header'>
      <h2>Komu pomagamy?</h2>
      <div className='who__help__ornament'/>
    </div>

        <ul className='who__help__groups'>
          {elements}
        </ul>
        <ul className='who__help__numbers'>
          {pageNumbers}
        </ul>
      </section>
      }
}

export { WhoHelp };
