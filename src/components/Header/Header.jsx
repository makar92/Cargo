import React, { useState } from 'react'
import styles from "./Header.module.scss"
import Button from '../UI/Button/Button'
import { Divide as Hamburger } from 'hamburger-react'
import BurgerWindow from './BurgerWindow'

const Header = () => {
  
  const [isOpen, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.header__bgBlock}></div>
      <nav className={styles.header__nav}>
        <div className={styles.header__logo}>
          <img src="./image/logo.svg" alt="logo" />
        </div>
        <ul className={styles.header__list}>
          <li><a href="#">Цены и срокиuuu</a></li>
          <li><a href="#">Услугиrrr</a></li>
          <li><a href="#">О компании</a></li>
          <li><a href="#">Контакты</a></li>
          <li><a href="#">Оформить груз</a></li>
        </ul>
        <Button 
          text="Оставить заявку" 
          className={styles.header__button}
        />
        <div className={styles.header__burger}>
          <Hamburger
            size={40}
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </nav>
      <BurgerWindow 
        className={isOpen
          ? styles.burgerWindow + " " + styles.active
          : styles.burgerWindow
        }
      />
    </header>
  )
}

export default Header