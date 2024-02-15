import React, { useRef } from 'react'
import styles from "./Servises.module.scss"
import Title from '../UI/Title/Title'
import ServisesItem from './ServisesItem'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import Arrow from '../UI/Arrow/Arrow'
import { Pagination } from 'swiper/modules'
import Line from '../UI/Line/Line'

const Servises = () => {

  const swiperRef = useRef();

  return (
    <div className={styles.servises}>
      <div className={styles.servises__container}>
        <Title text="Услуги" className={styles.servises__title} />
        <Line 
          className={styles.servises__line}
          color1
        />
        <div className={styles.servises__arrowWrapper}>
          <Swiper
            className={styles.servises__swiper}
            modules={[Pagination]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            slidesPerView={3}
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
              el: "#servises__pagination",
              clickable: true,
              bulletClass: styles.swiperPag,
              bulletActiveClass: styles.swiperPagActive,
            }}
          >
            <SwiperSlide className={styles.servises__slide}><ServisesItem /></SwiperSlide>
            <SwiperSlide className={styles.servises__slide}><ServisesItem /></SwiperSlide>
            <SwiperSlide className={styles.servises__slide}><ServisesItem /></SwiperSlide>
            <SwiperSlide className={styles.servises__slide}><ServisesItem /></SwiperSlide>
            <SwiperSlide className={styles.servises__slide}><ServisesItem /></SwiperSlide>
            <SwiperSlide className={styles.servises__slide}><ServisesItem /></SwiperSlide>
          </Swiper>
          <Arrow
            className={
              styles.servises__arrow + " " +
              styles.servises__arrow_left
            }
            direction="left"
            padding="20px"
            onClick={() => swiperRef.current.slidePrev()}
          />
          <Arrow
            className={
              styles.servises__arrow + " " +
              styles.servises__arrow_right
            }
            direction="right"
            padding="20px"
            onClick={() => swiperRef.current.slideNext()}
          />
          <div
            id="servises__pagination"
            className={styles.servises__pagination}
          ></div>

        </div>
      </div>
    </div>
  )
}

export default Servises