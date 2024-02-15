import React from 'react'
import styles from './FileInput.module.scss'

const FileInput = (props) => {
  return (
    <div className={styles.fileInput + " " + props.className}>
      <div className={styles.fileInput__textBlock}>
        <div className={styles.fileInput__leftText}>
          {props.leftText}
        </div>
        <div className={styles.fileInput__rightText}>
          {props.rightText}
        </div>
      </div>
      <input
        id='file01'
        type="file"
        className={styles.fileInput__downloads}
      />
      <label
        htmlFor="file01"
        className={styles.fileInput__downloadsLabel}
      >{props.mainText}</label>
    </div>
  )
}

export default FileInput