import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Background from "hero-slider/dist/components/Slide/Background";

const ButtonSlider = () => {
  return (
  <div className="kareem">
    <h1 style={{fontFamily:" Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",fontSize:"20px ",color:"white"}}>WHAT’S NEW AT QUINN EMANUEL?</h1>
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        
      <SwiperSlide>
      <div style={{ position: 'relative', zIndex: -1 }}>
    <button className="but" style={{ width: "75%", height: "300px" }}><a href="#">
      <span className="post-category">Awards</span><br></br>
      <span className="post-title">Five Quinn Emanuel Attorneys Named 2023 "Rising Stars" by Law360</span>  <br></br>
    </a></button>
  </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', zIndex: -1 }}>
    <button className="but" style={{ width: "75%", height: "300px" }}><a href="#">
      <span className="post-category">Awards</span><br></br>
      <span className="post-title">Law360 Selects Five Quinn Emanuel Partners as "2023 MVPs"</span>  <br></br>
    </a></button>
  </div>
      </SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', zIndex: -1 }}>
    <button className="but" style={{ width: "75%", height: "300px" }}><a href="#">
      <span className="post-category">Awards</span><br></br>
      <span className="post-title">Quinn Emanuel Receives Top Rankings in Legal 500 UK 2024</span>  <br></br>
    </a></button>
  </div></SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', zIndex: -1 }}>
    <button className="but" style={{ width: "75%", height: "300px" }}><a href="#">
      <span className="post-category">Awards</span><br></br>
      <span className="post-title">Quinn Emanuel Named 2023 "Litigation Department of the Year" by The American Lawyer</span>  <br></br>
    </a></button>
  </div></SwiperSlide>
      <SwiperSlide>
      <div style={{ position: 'relative', zIndex: -1 }}>
    <button className="but" style={{ width: "75%", height: "300px" }}><a href="#">
      <span className="post-category">Awards</span><br></br>
      <span className="post-title">Another Year - Still 'Most Feared'</span>  <br></br>
    </a></button>
  </div>
      </SwiperSlide>
    
    </Swiper>
    </div>
  );
}

export default ButtonSlider;
