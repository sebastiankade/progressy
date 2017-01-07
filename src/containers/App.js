import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProgressBar from '../components/ProgressBar.js';
import ProgressControl from '../components/ProgressControl.js';

import './App.scss';

class App extends Component {
  render() {
    let {bars, buttons, limit, updateProgress} = this.props;

    return (
      <div className="app">
        <div className="tile">
          <div className="tile-section">
            <h1 className="app__title">Progressy</h1>
          </div>
          <div className="tile-section tile-section--bordered">
            {bars.map(b =>
              <ProgressBar key={b.id} text={String(b.progress)} progress={b.percent} valid={b.valid}></ProgressBar>
            )}
          </div>

          <div className="tile-section">
            <ProgressControl buttons={buttons} bars={bars} onUpdateProgress={(bar, amount) => updateProgress(bar, amount, limit)}></ProgressControl>
          </div>
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};

export default connect(store => {
  return {...store};
}, (dispatch) => {
  return {
    updateProgress: (id, amount, limit) => {
      dispatch({type:'UPDATE_PROGRESS', id:id, amount, limit});
    }
  };
})(App);
