import React from 'react'
import { useSwiper } from 'swiper/react'

function SwiperButtons() {
    const swiper = useSwiper()
  return (
    <div className='swiper-nav-btns'>
        <button onClick={() => swiper.slidePrev()}>prev</button>
        <button onClick={() => swiper.slideNext()}>Next</button>
    </div>
  )
}

export default SwiperButtons