import React from 'react'
import styles from "./InfoBlock2.module.scss"
import Title from '../UI/Title/Title'
import Button from '../UI/Button/Button'
import Line from '../UI/Line/Line'

const InfoBlock2 = () => {
  return (
    <div className={styles.infoBlock2}>
      <div className={styles.infoBlock2__container}>
        <Title text="Готовы к сотрудничеству?" className={styles.infoBlock2__title}/>
        <Line color2 className={styles.infoBlock2__line}/>
        <div className={styles.infoBlock2__content}>
          <ul className={styles.infoBlock2__text}>
            <li>
              Для того, чтобы начать сотрудничество, необходимо оформить груз указав информацию о содержимом груза, его стоимость и количество. А так-же прикрепив фотографии к заявке.
            </li>
            <li>
              Если требуется проверка товара на соответсвие количеству, то при оформлении груза на нашем сайте укажите это в графе "Примечание". Данная услуга платная и составляет 3 юаня за одну позицию в заказе. Любые дополнительные проверки груза обсуждаются индивидуально в том числе и их стоимость.
            </li>
            <li>
              До отправки груза на наш склад в Китае обязательно позаботьтесь о том, чтобы сделать маркировку, с номером Вашего заказа у нас на сайте, для каждой внешней коробки, чтобы мы смогли определить именно Ваш груз. Если у Вас нет возможности сделать это самостоятельно, то попросите об этом своего поставщика.
            </li>
          </ul>
          <div className={styles.infoBlock2__image}>
            <img src="./image/ib2_1.jpg" alt="img" />
          </div>
          <div className={styles.infoBlock2__image}>
            <img src="./image/ib2_2.jpg" alt="img" />
          </div>
          <ul className={styles.infoBlock2__text}>
            <li>
              После отправки груза на наш склад в Китае, Вам обязательно нужно указать трек-номер для отслеживания посылок по Китаю для каждой позиции в заказе. Внести трек-номер можно на странице заказа. Трек-номер - это ещё одна мера для идентификации Вашего груза на нашем складе.
            </li>
            <li>
              Если Вы оформили груз по нашей инструкции и сделали все правильно, то при получении Вашего груза на складе в Китае статус заказа изменится на "На складе".
            </li>
            <div className={styles.infoBlock2__button}>
              <Button 
                text="Оформить груз" 
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default InfoBlock2