import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import TabPost from "./TabPost";

const PostSlide = styled.div`
  width: 100%;
  .movie_post_slider {
    width: 100%;
    padding: 5%;

    .swiper-button {
      width: 15px;
      height: 100%;
      padding: 20px 40px;

      color: var(--ORANGE);
      opacity: 0.5;
      cursor: pointer;
      z-index: 10;
      transition: all 0.3s;
      top: 0;

      &:hover {
        opacity: 1;
      }
      &.swiper-button-prev{
        &:hover{
          left: 0;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0));
        }
      }
      &.swiper-button-next{
        &:hover{
          right: 0;
          background-image: linear-gradient(to left, rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0));
        }
      }
      &::after {
        font-size: 1.5rem; // 화살표 크기
        font-weight: 600;
      }
      &.swiper-button-disabled {
        z-index: 10;
        cursor: default;
        pointer-events: auto;
        &:hover {
          color: var(--GREY);
        }
      }
    }
  }
  @media only screen and (max-width:1200px){
    .container {
      
    }
  }
  @media only screen and (max-width:768px){
    .container {
      
    }
  }
  @media only screen and (max-width:480px){
    .container {
      
    }
  }
`;



const TabPostSlide = () => {
  // const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const postData = [
    {
      postId: 1,
      postImage: "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent: "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z"
    },
    {
      postId: 2,
      postImage: "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent: "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z"
    },
    {
      postId: 3,
      postImage: "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent: "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z"
    },
    {
      postId: 4,
      postImage: "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent: "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z"
    },
    {
      postId: 5,
      postImage: "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent: "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z"
    },
    {
      postId: 6,
      postImage: "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent: "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z"
    },
    {
      postId: 7,
      postImage: "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent: "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z"
    }
  ]



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
        spaceBetween={16}
        breakpoints={{
          992: {
            slidesPerView: 4,
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
          {postData && 
            postData.map((post) => (
              <SwiperSlide className="slide" key={post.postId} >
                <TabPost post={post}/>
              </SwiperSlide>
            ))
          }
    
          <div className="swiper-button-prev swiper-button"></div>
          <div className="swiper-button-next swiper-button"></div>
        </Swiper>

      </PostSlide>
    </>
  );
};
export default TabPostSlide;