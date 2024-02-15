import React from 'react'
import styles from "./Title.module.scss"

const Title = (props) => {
  return (
    <div className={styles.title + " " + props.className}>
      <div className={styles.title__text}>
        {props.text}
      </div>
    </div>
  )
}

export default Title