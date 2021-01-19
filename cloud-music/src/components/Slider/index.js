import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { SliderContainer, SliderBackground } from './style';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

function Slider(props) {
  const { banaList } = props;
  const Slide = banaList.map(e => <SwiperSlide><SliderContainer><img src = {e.imageUrl}/></SliderContainer></SwiperSlide>)
  return (
    <Swiper
      pagination = {{ clickable: true }}
      loop = {true}
      autoplay = {{ delay:2500, disableOnInteraction: false }}
    >
      {Slide}
      <SliderBackground />
    </Swiper>
  )
}

export default React.memo(Slider)