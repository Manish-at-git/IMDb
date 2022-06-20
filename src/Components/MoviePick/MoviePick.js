import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { loadMovieList } from "../../redux/actions";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useSelector, useDispatch } from "react-redux";

// import required modules
import { Pagination, Navigation } from "swiper";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import WhatToWatch from "../WhatToWatch/WhatToWatch";
import Card from "../Cards/Card";
import img from "./poster.png";
import "./MoviePick.css";

import {
  faAngleRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
function MoviePick() {
  const data = useSelector((state) => state.images);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMovieList("https://jsonplaceholder.typicode.com/users"));
  }, []);

  console.log(data);
  return (
    <div className="container-fluid" style={{ background: "black" }}>
      <div className="container MoviePick">
        <div className="MoviePick-Heading">
          <WhatToWatch
            heading="What To Watch"
            recommend="Get More Recommendations"
            title="Top Picks"
            text="TV Shows and Movies just for you"
          />
          <div className="MoviePick-Cards">
            <Swiper
              slidesPerView={5}
              spaceBetween={40}
              slidesPerGroup={2}
              loop={false}
              loopFillGroupWithBlank={false}
              // pagination={{
              //   clickable: true,
              // }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePick;
