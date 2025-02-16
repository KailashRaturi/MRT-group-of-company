import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with Tarun was a pleasure from start to finish. He provided professional video editing services for our promotional campaign and was able to deliver exactly what we were looking for. He added creative touches that made the final product stand out and resonate with our target audience. Tarun’s communication and dedication to the project were top-notch -Diksha",
    },
    {
      img: profilePic2,
      review:
        "Tarun’s graphic design skills are phenomenal. He designed our new logo and branding materials, and the results were exactly what we had hoped for—clean, modern, and instantly recognizable. The designs have helped elevate our brand and communicate our values clearly. We’re excited to have him as a long-term partner. -Sonam",
    },
    {
      img: profilePic3,
      review:
        "I had the pleasure of working with Tarun on some promotional materials for our upcoming product launch. He was quick to respond to feedback, and his designs were fresh and innovative. The final product was perfect, and it helped us create the impact we needed. I highly recommend his graphic design services! -Sodhi" ,
    },
    {
      img: profilePic4,
      review:
        "Tarun was a one-stop-shop for all our design needs. From designing our website logo, creating logo and branding, to editing our promotional videos—he did it all! We’ve worked with several designers and editors before, but Tarun’s creativity, professionalism, and dedication to quality are unmatched. -Deepak",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
