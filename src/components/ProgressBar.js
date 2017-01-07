import React, { PropTypes } from 'react'
import './ProgressBar.scss';

const ProgressBar = ({ text, progress, valid}) => {
  return (
    <div className={'progress-bar ' + (valid ? 'progress-bar--valid' : 'progress-bar--invalid')}>
      <div className="progress-bar__inner" style={{width: progress + '%'}}></div>
      <span className="progress-bar__text">{text}</span>
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired
}

export default ProgressBar
