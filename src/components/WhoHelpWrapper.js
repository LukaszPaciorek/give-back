import React from 'react';
import {HashRouter} from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import WhoHelpFundation from './WhoHelpFundation';
import WhoHelpOrganisations from './WhoHelpOrganisations';
import WhoHelpLocal from './WhoHelpLocal';



class WhoHelpWrapper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentLinkIndex: 1
      }
    }
    handleClickShowSection = (event, i) => {
      this.setState({
        currentLinkIndex: i
      })
    }

    handlePassLinkIndex = (event, i) => {
      event.preventDefault();
      this.handleClickShowSection(i);
    }


    render() {
      const currentLinkIndex = this.state.currentLinkIndex;

    return <>
      <div className='who__help__positions'>
        <ul>
          {this.props.link.map((el, i) => {
            return (
              <li key={i} onClick={(e) => this.handlePassLinkIndex(e, i)} id={i}
                  className={currentLinkIndex === i ? 'active' : ''}>
                    <a href=''>{el}</a>
              </li>
            )
          })}
        </ul>
      </div>

      {currentLinkIndex === 0 ? <WhoHelpFundation/> :  (currentLinkIndex === 1 ? <WhoHelpOrganisations/> : <WhoHelpLocal/>)}

    </>
      }
}

export default WhoHelpWrapper;
