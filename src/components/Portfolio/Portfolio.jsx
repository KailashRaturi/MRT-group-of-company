import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/t1.jpg";
import Ecommerce from "../../img/t2.jpg";
import HOC from "../../img/t3.jpg";
import Sidebar1 from "../../img/t4.jpg";
import Ecommerce1 from "../../img/t5.jpg";
import HOC1 from "../../img/t6.jpg";
import Sidebar2 from "../../img/t7.jpg";
import Ecommerce2 from "../../img/t8.jpg";
import HOC2 from "../../img/t9.jpg";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      ></Swiper>
        <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        
        <SwiperSlide>
          <img src={Sidebar1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce1} alt="" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={HOC1} alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Sidebar2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce2} alt="" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={HOC2} alt="" />
        </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Portfolio;
