import React from 'react'
import styles from "./Header.module.scss"
import Button from '../UI/Button/Button'
import { Divide as Hamburger } from 'hamburger-react'
import BurgerWindow from './BurgerWindow'
import { useDispatch, useSelector } from 'react-redux'
import { CHANGE_ISOPEN_BURGER_WINDOW } from '../../store/burgerReducer'


const Header = () => {

  const navList = [
    {id:0, name: "Цены и сроки", link: "#formCost"},
    {id:1, name: "Услуги", link: "#servises"},
    {id:2, name: "О компании", link: "#about"},
    {id:3, name: "Контакты", link: "#"},
    {id:4, name: "Оформить груз", link: "#"},
  ]

  const dispatch = useDispatch()
  const burgerWindowIsOpen = useSelector( state => state.burger.burgerWindowIsOpen)

  return (
    <header className={styles.header}>
      <div className={styles.header__bgBlock}></div>
      <nav className={styles.header__nav}>
        <div className={styles.header__logo}>
          <img src="./image/logo.svg" alt="logo" />
        </div>
        <ul className={styles.header__list}>
          {navList.map((q) => <li key={q.id}><a href={q.link}>{q.name}</a></li>)}
        </ul>
        <Button 
          text="Оставить заявку" 
          className={styles.header__button}
        />
        <div className={styles.header__burger}>
          <Hamburger
            size={40}
            toggled={burgerWindowIsOpen}
            toggle={() => dispatch({type: CHANGE_ISOPEN_BURGER_WINDOW})}
          />
        </div>
      </nav>
      <BurgerWindow 
        className={burgerWindowIsOpen
          ? styles.burgerWindow + " " + styles.active
          : styles.burgerWindow
        }
        navList={navList}
      />
    </header>
  )
}

export default Header