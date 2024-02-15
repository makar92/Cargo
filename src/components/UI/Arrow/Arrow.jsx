import React, { useState } from 'react'
import styles from './Arrow.module.scss'

const Arrow = (props) => {

  let rotate;
  switch(props.direction) {
    case 'up': rotate = "rotate(-90deg)"; break;
    case 'down': rotate = "rotate(90deg)"; break;
    case 'right': rotate = "rotate(0deg)"; break;
    case 'left': rotate = "rotate(180deg)"; break;
    default: rotate = "rotate(180deg)"
  }
  
  let activeArrow;
  if (props.isActive === true) {
    activeArrow = styles.activeArrow;
  }

  return (
    <div 
      id={props.id}
      className={styles.arrow + " " + props.className + " " + activeArrow} 
      style={{
        transform: `${rotate}`, 
        padding: `${props.padding}`, 
      }}
      onClick={props.onClick}
    >
      <div className={styles.arrow__container}>
        <svg width="28" height="28" viewBox="0 0 26.1562 26.1562" fill="none" xmlns="http://www.w3.org/2000/svg">
          <desc>
            Created with Pixso.
          </desc>
          <defs />
          <path className={styles.arrow__svg} id="Vector" d="M0 13.0781C0 5.85352 5.85156 0 13.0781 0C20.3047 0 26.1562 5.85352 26.1562 13.0781C26.1562 20.3027 20.3047 26.1562 13.0781 26.1562C5.85156 26.1562 0 20.3027 0 13.0781ZM13.0781 24.4688C19.3359 24.4688 24.4688 19.4009 24.4688 13.0781C24.4688 6.81836 19.3984 1.6875 13.0781 1.6875C6.82031 1.6875 1.6875 6.75537 1.6875 13.0781C1.6875 19.3379 6.75781 24.4688 13.0781 24.4688ZM13.7344 19.5908L19.8047 13.5264C20.0547 13.2783 20.0547 12.8779 19.8047 12.6299L13.7344 6.56543C13.4922 6.31738 13.0859 6.31738 12.8438 6.56543L12.4766 6.9292C12.2266 7.17725 12.2266 7.58838 12.4844 7.83105L17 12.1816L6.96094 12.1816C6.60938 12.1816 6.32812 12.4663 6.32812 12.8145L6.32812 13.3418C6.32812 13.6899 6.60938 13.9746 6.96094 13.9746L17 13.9746L12.4844 18.3252C12.2266 18.5732 12.2266 18.979 12.4688 19.2271L12.8359 19.5908C13.0859 19.8389 13.4922 19.8389 13.7344 19.5908Z" fill="#ffffff" />
        </svg>
      </div>
    </div>
  )
}


export default Arrow