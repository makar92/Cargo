import React, { useRef } from 'react'
import styles from "./DeliveryOptions.module.scss"
import Title from '../UI/Title/Title'

import { Swiper, SwiperSlide } from 'swiper/react'
import Arrow from '../UI/Arrow/Arrow'
import { Pagination } from 'swiper/modules';
import Line from '../UI/Line/Line'
import DeliveryItem from './DeliveryItem/DeliveryItem'

const DeliveryOptions = () => {

  const items = [
    {
      idx: 0,
      title: "Авто - обычная",
      image: "./image/deliveryOptions/dev_1.jpg",
      period: "9-15 дней",
      weight: "от 5 кг",
      price: 2.5,
    },
    {
      idx: 1,
      title: "Авто - ускоренная",
      image: "./image/deliveryOptions/dev_2.webp",
      period: "5-10 дней",
      weight: "от 5 кг",
      price: 4,
    },
    {
      idx: 2,
      title: "Авиа",
      image: "./image/deliveryOptions/dev_3.jpg",
      period: "2-3 дня",
      weight: "от 5 кг",
      price: 10,
    },
    {
      idx: 3,
      title: "Ж/д",
      image: "./image/deliveryOptions/dev_4.jpg",
      period: "10-17 дней",
      weight: "от 10 кг",
      price: 3,
    },
    {
      idx: 4,
      title: "Море",
      image: "./image/deliveryOptions/dev_5.jpg",
      period: "15-20 дней",
      weight: "от 50 кг",
      price: 5,
    },
  ]

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
          {items.map((q) =>
            <SwiperSlide key={q.idx} className={styles.deliveryOtions__slide}>
              <DeliveryItem
                title={q.title}
                image={q.image}
                period={q.period}
                weight={q.weight}
                price={q.price}
              />
            </SwiperSlide>
          )}

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