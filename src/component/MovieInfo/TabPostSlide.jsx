import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import TabPost from "./TabPost";

const PostSlide = styled.div`


`;



const TabPostSlide = () => {
  const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const post = {
    postId: 1,
    postImage: "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
    movieId: 123,
    image: "",
    alias: "nana",
    postTitle: "Awesome Movie Review",
    postContent: "I recently watched this amazing movie and here's my detailed review...",
    postRegDate: "2024-01-23T12:34:56Z"
  }

  return (
    <>
      <PostSlide>
        <Swiper
        className="movie_post_slider"
        loop={false}
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        allowTouchMove={true}
        initialSlide={0}
        spaceBetween={20}
        breakpoints={{
          992: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          300: {
            slidesPerView: 2,
            spaceBetween:20,
          },
        }}
        ref={swiperRef}
        >

          <SwiperSlide className="slide" >
            <TabPost post={post}/>
          </SwiperSlide>

        <div className="swiper-button-prev swiper-button"></div>
        <div className="swiper-button-next swiper-button"></div>
        </Swiper>

      </PostSlide>
    </>
  );
};
export default TabPostSlide;