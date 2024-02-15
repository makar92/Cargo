import React from 'react'
import styles from "./Textarea.module.scss"

const Textarea = (props) => {
  return (
    <div className={styles.textArea + " " + props.className}>
      <div className={styles.textArea__leftText}>
        {props.leftText}
      </div>
      <textarea
        name="qwestion"
        placeholder={props.placeholder}
        className={styles.textArea__input}
        
      ></textarea>
    </div>
  )
}

export default Textarea