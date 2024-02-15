import React, { Component } from "react";
import styles from "./Carusel.module.scss"
import Slide from "./Slide";
import Arrow from "../UI/Arrow/Arrow";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
//import 'swiper/css/pagination';
//import 'swiper/css/navigation';

const Carusel = () => {

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
        <SwiperSlide ><Slide /></SwiperSlide>
        <SwiperSlide ><Slide /></SwiperSlide>
        <SwiperSlide ><Slide /></SwiperSlide>
        <SwiperSlide ><Slide /></SwiperSlide>
        <SwiperSlide ><Slide /></SwiperSlide>
        <SwiperSlide ><Slide /></SwiperSlide>
        <SwiperSlide ><Slide /></SwiperSlide>
        <SwiperSlide ><Slide /></SwiperSlide>
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