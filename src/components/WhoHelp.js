import React from 'react';
import {HashRouter} from 'react-router-dom';
import WhoHelpWrapper from './WhoHelpWrapper';



class WhoHelp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {}
    }

    render() {

    return <>
      <div className='who__help__container'>
        <div className='who__help__header'>
          <h2>Komu pomagamy?</h2>
          <div className='who__help__ornament'/>
          </div>
          <div className='who__help__wrap'>
          <WhoHelpWrapper link={[<div>Fundacjoooom</div>, <div>Organizacjom pozarządowym</div>, <div>Lokalnym zbiórkom</div>]}/>
        </div>
      </div>
    </>
      }
}

export { WhoHelp };
