import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Hero() {
  return (
    <section id="#home" className="bg-grey-50 bg-white min-h-96">
      <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
    </section>
  )
}

export default Hero