import React from 'react'
import styles from "./Button.module.scss"

const Button = (props) => {

  return (
    <button 
      className={
        props.transparent
        ? styles.button + " " + props.className + " " + styles.type2
        : styles.button + " " + props.className
      }
      onClick={props.onClick}
      type={props.type}
      tabIndex={props.tabIndex}
    >
      {props.text}
    </button>
  )
}

export default Button