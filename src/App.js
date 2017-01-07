import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {
  render() {
    let {bars, buttons, limit, updateProgress} = this.props;
    let select;

    return (
      <div className="app">
        {bars.map(b => <h1 key={b.id}>{b.progress} - {b.valid ? 'yes' : 'no'}</h1>)}

        <div className="progress-incrementor">
          <div className="progress-incrementor__selector">
            <select ref={node => { select = node }}>
              {bars.map(b => <option key={b.id} value={b.id}>{b.id}</option>)}
            </select>
          </div>
          <div className="progress-incrementor__buttons">
            {buttons.map((v, i) => <button key={i} onClick={() => updateProgress(select.value, v, limit)}>{v}</button>)}
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
