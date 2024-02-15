import React from 'react'
import styles from './StepIndicator.module.scss'

const StapIndicator = ({isActive, ...props}) => {
  return (
    <div className={ isActive
      ? styles.number + " " + styles.active
      : styles.number
    }>
      {props.text}
    </div>
  )
}

export default StapIndicator