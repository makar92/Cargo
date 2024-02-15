import React from 'react'
import styles from './Header.module.scss'
import Button from '../UI/Button/Button'

const BurgerWindow = (props) => {
  return (
    <nav className={props.className}>
      <ul className={styles.burgerWindow__burgerList}>
        <li><a href="">Цены и сроки</a></li>
        <li><a href="">Услуги</a></li>
        <li><a href="">О компании</a></li>
        <li><a href="">Контакты</a></li>
        <li><a href="">Оформить груз</a></li>
        <li><Button
          text="Оставить заявку"
        /></li>
      </ul>
    </nav>
  )
}

export default BurgerWindow