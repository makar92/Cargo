import React from 'react'
import styles from "./Button.module.scss"

const Button = (props) => {

  return (
    <div 
      className={
        props.transparent
        ? styles.button + " " + props.className + " " + styles.type2
        : styles.button + " " + props.className
      }
      onClick={props.onClick}
    >
      {props.text}
    </div>
  )
}

export default Button