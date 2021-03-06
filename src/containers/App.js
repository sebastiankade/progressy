import React, { Component } from 'react';
import {connect} from 'react-redux';
import ProgressBar from '../components/ProgressBar.js';
import ProgressControl from '../components/ProgressControl.js';

import {updateProgress} from '../actions';
import loadConfig from '../actions/config';

import './App.scss';

class App extends Component {
  render() {
    let {bars, buttons, loading, error, onUpdateProgress, onReload} = this.props;

    let body;

    if (loading) {
      body = (
        <div className="tile-section tile-section--bordered">
          <p className="app__loading">Loading...</p>
        </div>
      )
    } else if (error) {
      body = (
        <div className="tile-section tile-section--bordered">
          <p className="app__error"><strong>{error}</strong> - <a onClick={onReload}>Click here to retry.</a></p>
        </div>
      )
    } else {
      body = (<div>
        <div className="tile-section tile-section--bordered">
          {bars.map(b =>
            <ProgressBar key={b.id} text={String(b.progress)} progress={b.percent} valid={b.valid}></ProgressBar>
          )}
        </div>

        <div className="tile-section">
          <ProgressControl buttons={buttons} bars={bars} onUpdateProgress={(bar, amount) => onUpdateProgress(bar, amount)}></ProgressControl>
        </div>
      </div>);
    }

    return (
      <div className="app">
        <div className="tile">
          <div className="tile-section">
            <h1 className="app__title">Progressy</h1>
          </div>
          {body}
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
};

export default connect(store => store, dispatch => {
  return {
    onUpdateProgress: (id, amount) => {
      dispatch(updateProgress(id, amount));
    },
    onReload: () => {
      dispatch(loadConfig());
    }
  };
})(App);
