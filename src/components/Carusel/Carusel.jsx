import React from "react";
import styles from "./Carusel.module.scss"
import Slide from "./Slide/Slide";
import Arrow from "../UI/Arrow/Arrow";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const Carusel = () => {

  const slides = [
    {
      id: 0,
      title: "Прямое КАРГО из Китая",
      text: "Доставляем любые грузы из Китая по честной цене",
      image: "./image/carusel/1sl.jpg",
    },
    {
      id: 1,
      title: "Гарантируем сроки!",
      text: "Если мы не уложимся в обозначенные сроки, доставка груза со скидкой до 90%",
      image: "./image/carusel/2sl.jpg",
    },
    {
      id: 2,
      title: "Выкуп товара с ТаоБао, 1688",
      text: "Выкуп и доставка товаров с китайских торговых площадок. ",
      image: "./image/carusel/3sl.jpg",
    },
    {
      id: 3,
      title: "Экспресс авто доставка",
      text: "Доставка автотранспортом из Китая в Россию от 15 дней, от $0,5/кг",
      image: "./image/carusel/4sl.jpg",
    },
  ]


  return (
    <div className={styles.carusel}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={200}
        slidesPerView={1}
        pagination={{
          el: `#carusel__pugination`,
          clickable: true,
          bulletClass: styles.swiperPag,
          bulletActiveClass: styles.swiperPagActive,
        }}
        navigation={{
          prevEl: "#carusel__prevSlide",
          nextEl: "#carusel__nextSlide",
        }}
      >
        {slides.map((q) => 
          <SwiperSlide key={q.id}>
            <Slide
              title={q.title}
              text={q.text}
              image={q.image}
            />
          </SwiperSlide>
        )}
      </Swiper>
      <Arrow
        id="carusel__prevSlide"
        direction="left"
        padding="20px"
        className={
          styles.carusel__arrow + " " +
          styles.carusel__arrow_left
        }
      />
      <Arrow
        id="carusel__nextSlide"
        direction="right"
        padding="20px"
        className={
          styles.carusel__arrow + " " +
          styles.carusel__arrow_right
        }
      />
      <div
        id="carusel__pugination"
        className={styles.carusel__pugination}
      ></div>
    </div>
  )
}

export default Carusel