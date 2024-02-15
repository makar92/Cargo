import React from 'react' 
import styles from "./About.module.scss"
import Title from '../UI/Title/Title'
import Line from '../UI/Line/Line'

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about__content}>
        <Title  
          text="О КОМПАНИИ" 
          className={styles.about__title}
        />
        <Line 
          className={styles.about__line}
          color2
        />
        <div className={styles.about__text}>
          <p>
            Компания Азия Карго - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия. Для вашего удобства есть тарифы на лёгкий и тяжелый куб. Мы работаем на рынке более 4 лет, а руководители компании занимаются логистикой уже более 11 лет.
          </p><br />
          <p>
            Мы стремимся предоставить лучшие условия доставки и лучший сервис своим клиентам. Выбирая нас - вы выбираете качественную доставку оптимальную по цене и времени! Убедитесь в этом сами!
          </p>
        </div>
      </div>
      <div className={styles.about__image}>
        <img src="./image/about_campany.png" alt="img" />
      </div>
    </div>
  )
}

export default About