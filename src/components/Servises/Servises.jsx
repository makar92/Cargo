import React, { useRef } from 'react'
import styles from "./Servises.module.scss"
import Title from '../UI/Title/Title'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import Arrow from '../UI/Arrow/Arrow'
import { Pagination } from 'swiper/modules'
import Line from '../UI/Line/Line'
import ServiseItem from './ServiseItem/ServiseItem';

const Servises = (props) => {

  const items = [
    {
      idx: 0,
      title: "Выкуп товара",
      text: "Наша Кампания поможет легко приобрести товары в зарубежных интернет-магазинах, если вы не можете купить товар с вашей банковской картой или вам просто нужна помощь в покупке.",
      image: "./image/servises/servises_1.jpg",
    },
    {
      idx: 1,
      title: "Страховка груза",
      text: "Чтобы избежать таких потенциальных рисков, как срыв срока и повреждение груза, мы предлагаем оформить услуги страхования у надежных партнеров.",
      image: "./image/servises/servises_2.jpg",
    },
    {
      idx: 2,
      title: "Аренда склада",
      text: "Предлагаем для постоянной или временно аренды склады. Все склады находятся на охраняемой территории.",
      image: "./image/servises/servises_3.jpg",
    },
    {
      idx: 3,
      title: "Перевод денежных средств",
      text: "Наша Кампания оказывает услугу периодического перевода денежных средств по всем банковским счетам, за исключением номинального счета и счета представителя владельца облигаций.",
      image: "./image/servises/servises_4.jpg",
    },
  ]

  const swiperRef = useRef();

  return (
    <div className={styles.servises} id={props.id}>
      <div className={styles.servises__container}>
        <Title text="Услуги" className={styles.servises__title} />
        <Line className={styles.servises__line} color1/>
        <div className={styles.servises__arrowWrapper}>
          <Swiper
            className={styles.servises__swiper}
            modules={[Pagination]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            slidesPerView={3}
            breakpoints={{
              0: {slidesPerView: 1, spaceBetween: 80},
              980: {slidesPerView: 2, spaceBetween: 20},
              1400: {slidesPerView: 3, spaceBetween: 20},
            }}
            pagination={{
              el: "#servises__pagination",
              clickable: true,
              bulletClass: styles.swiperPag,
              bulletActiveClass: styles.swiperPagActive,
            }}
          >
            {items.map((q) =>
              <SwiperSlide key={q.idx} className={styles.servises__slide}>
                <ServiseItem title={q.title} text={q.text} image={q.image}/>
              </SwiperSlide>
            )}
          </Swiper>
          <Arrow
            className={styles.servises__arrow + " " + styles.servises__arrow_left}
            direction="left"
            padding="20px"
            onClick={() => swiperRef.current.slidePrev()}
          />
          <Arrow
            className={styles.servises__arrow + " " + styles.servises__arrow_right}
            direction="right"
            padding="20px"
            onClick={() => swiperRef.current.slideNext()}
          />
          <div id="servises__pagination" className={styles.servises__pagination}></div>
        </div>
      </div>
    </div>
  )
}

export default Servises