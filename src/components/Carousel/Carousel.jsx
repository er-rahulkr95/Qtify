import React, { useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import carouselStyles from "./Carousel.module.css";
import { Navigation } from "swiper";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0, null);
  }, [data]);
};

const Carousel = ({ data, component }) => {
  return (
    <div className={carouselStyles.carouselWrapper}>
      <Swiper
        style={{ padding: "0px 20px" }}
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove
      >
        <Controls data={data} />

        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item, index) => (
          <SwiperSlide key={index}>{component(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
