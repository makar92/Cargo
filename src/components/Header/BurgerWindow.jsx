import React from 'react'
import styles from './Header.module.scss'
import Button from '../UI/Button/Button'

const BurgerWindow = (props) => {

  const navList = props.navList

  return (
    <nav className={props.className}>
      <ul className={styles.burgerWindow__burgerList}>
        {navList.map((q) => <li key={q.id}><a href={q.link}>{q.name}</a></li>)}
        <li><Button text="Оставить заявку"/></li>
      </ul>
    </nav>
  )
}

export default BurgerWindow