import React from 'react'
import styles from "./InfoBlock1.module.scss"
import Title from '../UI/Title/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import Line from '../UI/Line/Line'
import InfoItem from './InfoItem/InfoItem';

const InfoBlock1 = () => {

  const items = [
    { id: 0, text: "Таможенное оформление груза", image: "./image/infoBlock1/file_1.svg", },
    { id: 1, text: "Страховка груза", image: "./image/infoBlock1/file_2.svg", },
    { id: 2, text: "Проверка товара на брак", image: "./image/infoBlock1/file_3.svg", },
    { id: 3, text: "Доставка в любой город РФ", image: "./image/infoBlock1/file_4.svg", },
    { id: 4, text: "Консолидация на складе", image: "./image/infoBlock1/file_5.svg", },
    { id: 5, text: "Ответственное хранение груза", image: "./image/infoBlock1/file_6.svg", },
    { id: 6, text: "Помощь в оплате товара", image: "./image/infoBlock1/file_7.svg", },
    { id: 7, text: "Упаковка, переупаковка, паллетирование груза к международной перевозке", image: "./image/infoBlock1/file_8.svg", },
  ]

  return (
    <div className={styles.infoBlock1}>
      <div className={styles.infoBlock1__container}>
        <Title
          text="Почему стоит выбрать именно нас?"
          className={styles.infoBlock1__title}
        />
        <Line className={styles.infoBlock1__line} color1/>
        <div className={styles.infoBlock1__items}>
          {items.map((q) => <InfoItem key={q.id} text={q.text} image={q.image}/>)}
        </div>
        <Swiper
          className={styles.infoBlock1__slider}
          modules={[Navigation, Pagination]}
          pagination={{
            el: `#rcarusel__pugination`,
            clickable: true,
            bulletClass: styles.swiperPag,
            bulletActiveClass: styles.swiperPagActive,
          }}
          spaceBetween={200}
          slidesPerView={1}
        >
          {items.map((q) =>
            <SwiperSlide key={q.id} className={styles.infoBlock1__slide}>
              <InfoItem text={q.text} image={q.image}/>
            </SwiperSlide>
          )}
        </Swiper>
        <div
          id="rcarusel__pugination"
          className={styles.infoBlock1__pugination}
        ></div>
      </div>
    </div>
  )
}

export default InfoBlock1