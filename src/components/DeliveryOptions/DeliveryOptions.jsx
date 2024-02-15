import React, { useRef } from 'react'
import styles from "./DeliveryOptions.module.scss"
import Title from '../UI/Title/Title'
import DeliveryItem from './DeliveryItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import Arrow from '../UI/Arrow/Arrow'
import { Pagination } from 'swiper/modules';
import Line from '../UI/Line/Line'

const DeliveryOptions = () => {

  const swiperRef = useRef();

  return (
    <div className={styles.deliveryOtions}>
      <Title
        text="Варианты доставки грузов из Китая"
        className={styles.deliveryOtions__title}
      />
      <Line 
        className={styles.deliveryOtions__line}
        color2
      />
      <div className={styles.deliveryOtions__arrowWrapper}>
        <Swiper
          className={styles.deliveryOtions__swiper}
          modules={[Pagination]}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 80,
            },
            980: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          pagination={{
            el: `#deliveryOtions__pugination`,
            clickable: true,
            bulletClass: styles.swiperPag,
            bulletActiveClass: styles.swiperPagActive,
          }}
        >
          <SwiperSlide className={styles.deliveryOtions__slide}><DeliveryItem /></SwiperSlide>
          <SwiperSlide className={styles.deliveryOtions__slide}><DeliveryItem /></SwiperSlide>
          <SwiperSlide className={styles.deliveryOtions__slide}><DeliveryItem /></SwiperSlide>
          <SwiperSlide className={styles.deliveryOtions__slide}><DeliveryItem /></SwiperSlide>
          <SwiperSlide className={styles.deliveryOtions__slide}><DeliveryItem /></SwiperSlide>
          <SwiperSlide className={styles.deliveryOtions__slide}><DeliveryItem /></SwiperSlide>
          <SwiperSlide className={styles.deliveryOtions__slide}><DeliveryItem /></SwiperSlide>
        </Swiper>
        <Arrow
          className={
            styles.deliveryOtions__arrow + " " +
            styles.deliveryOtions__arrow_left
          }
          direction="left"
          padding="20px"
          onClick={() => swiperRef.current.slidePrev()}
        />
        <Arrow
          className={
            styles.deliveryOtions__arrow + " " +
            styles.deliveryOtions__arrow_right
          }
          direction="right"
          padding="20px"
          onClick={() => swiperRef.current.slideNext()}
        />
        <div 
          id='deliveryOtions__pugination'
          className={styles.deliveryOtions__pagination}
        ></div>
      </div>
    </div>
  )
}

export default DeliveryOptions