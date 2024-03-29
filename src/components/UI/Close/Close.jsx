import React from 'react'
import styles from './Close.module.scss'

const Close = (props) => {
  return (
    <div
      className={styles.close + " " + props.className}
      onClick={props.onClick}
    >
      <svg width="13.000000" height="13.000000" viewBox="0 0 13 13" fill="#000000" xmlns="http://www.w3.org/2000/svg" >
        <defs />
        <path id="Vector" d="M7.6875 6.5L12.75 1.43799C13.0859 1.10864 13.0859 0.576172 12.75 0.24707C12.4219 -0.0822754 11.8906 -0.0822754 11.5625 0.24707L6.5 5.30908L1.4375 0.24707C1.10938 -0.0822754 0.578125 -0.0822754 0.25 0.24707C-0.0859375 0.576172 -0.0859375 1.10864 0.25 1.43799L5.3125 6.5L0.25 11.5623C-0.0859375 11.8916 -0.0859375 12.4241 0.25 12.7532C0.414062 12.9175 0.625 13 0.84375 13C1.05469 13 1.27344 12.9175 1.4375 12.7532L6.5 7.69092L11.5625 12.7532C11.7266 12.9175 11.9453 13 12.1562 13C12.375 13 12.5859 12.9175 12.75 12.7532C13.0859 12.4241 13.0859 11.8916 12.75 11.5623L7.6875 6.5Z" fill="#7E839A" />
      </svg>
    </div>
  )
}

export default Close