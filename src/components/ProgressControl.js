import React, { PropTypes } from 'react'
import './ProgressControl.scss';

const ProgressControl = ({ buttons, bars, onUpdateProgress}) => {
  let select;
  return (
    <div className="progress-control">
      <div className="progress-control__selector">
        <select ref={node => { select = node }}>
          {bars.map(b => <option key={b.id} value={b.id}>{b.id}</option>)}
        </select>
      </div>
      <div className="progress-control__buttons">
        {buttons.map((value, i) => <button key={i} onClick={() => onUpdateProgress(select.value, value)}>{value}</button>)}
      </div>
    </div>
  )
}

ProgressControl.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  bars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  })).isRequired,
  onUpdateProgress: PropTypes.func.isRequired
}

export default ProgressControl
