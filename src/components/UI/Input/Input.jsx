import React, { useState } from 'react'
import styles from "./Input.module.scss"

const Input = (props) => {

  return (
    <div className={styles.inputBlock + " " + props.className}>
      <div className={styles.inputBlock__leftText}>{props.text}</div>
      <div 
        className={styles.inputBlock__rightText}
        onClick={props.onClickRT}
      >{props.rightText}</div>
      <input
        type={props.type}
        className={styles.inputBlock__input}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  )
}

export default Input