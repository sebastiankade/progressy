import React, { PropTypes } from 'react'
import './ProgressBar.css';

const ProgressBar = ({ text, progress, valid}) => {
  return (
    <div className={'progress-bar ' + (valid ? 'progress-bar--valid' : 'progress-bar--invalid')}>
      <div className="progress-bar__inner" style={{width: progress + '%'}}></div>
      <span className="progress-bar__text">{text}</span>
    </div>
  )
}

ProgressBar.propTypes = {
  // options: PropTypes.arrayOf(
  //   PropTypes.string.isRequired
  // ).isRequired,
  progress: PropTypes.number.isRequired,
  // onChange: PropTypes.func.isRequired
}

export default ProgressBar
