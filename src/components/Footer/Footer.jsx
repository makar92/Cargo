import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__line}></div>
      <div className={styles.footer__columns}>
        <div className={styles.footer__column}>
          <div className={styles.footer__logo}>
            <img src="./image/logo.svg" alt="" />
          </div>
          <div className={styles.footer__phone}>8(800)600-18-69</div>
          <div className={styles.footer__mail}>
            <a href="mailto:info@cargoasia.info">info@cargoasia.info</a>
            </div>
          <div className={styles.footer__adress}>
            <div className={styles.footer__adressTitle}>Адрес в Китае:</div>
            <div className={styles.footer__adressText}>
              后宅街道洪华小区5<br/> 栋一单元一楼RT789库房 高建军 电话
            </div>
            <div className={styles.footer__adressIndex}>15966660379</div>
          </div>
          <div className={styles.footer__social}>
            <a href="#">
              <img src="./image/social/instagram.svg" alt="icon" />
            </a>
            <a href="#">
              <img src="./image/social/vk.svg" alt="icon" />
            </a>
            <a href="#">
              <img src="./image/social/telegram.svg" alt="icon" />
            </a>
          </div>
        </div>
        <div className={styles.footer__column}>
          <div className={styles.footer__columnTitle}>Грузоперевозки</div>
          <ul className={styles.footer__columnList}>
            <li><a href="#">Цены и сроки</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">Оформить груз</a></li>
          </ul>
        </div>
        <div className={styles.footer__column}>
        <div className={styles.footer__columnTitle}>Услуги</div>
          <ul className={styles.footer__columnList}>
            <li><a href="#">Выкуп товара</a></li>
            <li><a href="#">Страховка груза</a></li>
            <li><a href="#">Аренда склада</a></li>
            <li><a href="#">Перевод денежных средств</a></li>
          </ul>
        </div>
        <div className={styles.footer__column}>
        <div className={styles.footer__columnTitle}>Информация</div>
          <ul className={styles.footer__columnList}>
            <li><a href="#">Отзывы</a></li>
            <li><a href="#">Требования к грузу</a></li>
            <li><a href="#">Договор-оферта</a></li>
            <li><a href="#">Как заключить договор</a></li>
            <li><a href="#">Способы оплаты услуг</a></li>
            <li><a href="#">Документы</a></li>
            <li><a href="#">Статьи</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer