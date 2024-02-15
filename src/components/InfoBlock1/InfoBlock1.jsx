import React, { useState } from 'react'
import styles from "./InfoBlock1.module.scss"
import Title from '../UI/Title/Title'
import InfoItem from './InfoItem'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import Line from '../UI/Line/Line'

const InfoBlock1 = () => {

  return (
    <div className={styles.infoBlock1}>
      <div className={styles.infoBlock1__container}>
        <Title 
          text="Почему стоит выбрать именно нас?" 
          className={styles.infoBlock1__title} 
        />
        <Line 
          className={styles.infoBlock1__line}
          color1
        />
        <div className={styles.infoBlock1__items}>
          <InfoItem />
          <InfoItem />
          <InfoItem />
          <InfoItem />
          <InfoItem />
          <InfoItem />
          <InfoItem />
          <InfoItem />
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
          <SwiperSlide className={styles.infoBlock1__slide}><InfoItem /></SwiperSlide>
          <SwiperSlide className={styles.infoBlock1__slide}><InfoItem /></SwiperSlide>
          <SwiperSlide className={styles.infoBlock1__slide}><InfoItem /></SwiperSlide>
          <SwiperSlide className={styles.infoBlock1__slide}><InfoItem /></SwiperSlide>
          <SwiperSlide className={styles.infoBlock1__slide}><InfoItem /></SwiperSlide>
          <SwiperSlide className={styles.infoBlock1__slide}><InfoItem /></SwiperSlide>
          <SwiperSlide className={styles.infoBlock1__slide}><InfoItem /></SwiperSlide>
          <SwiperSlide className={styles.infoBlock1__slide}><InfoItem /></SwiperSlide>
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