import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import TabPost from "./TabPost";
import Button from "../../util/Button";
import TabPostModal from "./TabPostModal";

const PostSlide = styled.div`
  width: 100%;
  .container {
    padding-top: 50px;
    text-align: right;
    button {
      border: 1px solid var(--ORANGE);
      margin-right: 10px;
      color: var(--ORANGE);
      font-weight: 300;
      transition: 0.3s ease-in;
      &:hover {
        color: #fff;
      }
    }
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
        &.swiper-button-prev {
          &:hover {
            left: 0;
            background-image: linear-gradient(
              to right,
              rgba(0, 0, 0, 0.1),
              rgba(255, 255, 255, 0)
            );
          }
        }
        &.swiper-button-next {
          &:hover {
            right: 0;
            background-image: linear-gradient(
              to left,
              rgba(0, 0, 0, 0.1),
              rgba(255, 255, 255, 0)
            );
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
  }

  @media only screen and (max-width: 1200px) {
    .container {
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      button {
        margin-right: 0;
        font-size: 1.15em;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .container {
    }
  }
`;

const TabPostSlide = () => {
  // const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const [openPostModal, setOpenPostModal] = useState(false);
  const [postType, setPostType] = useState("");

  const [postImage, setPostImage] = useState("");
  const [editId, setEditId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [onChangePostTitle, setOnChangePostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [onChangePostContent, setOnChangePostContent] = useState("");

  // 모달 닫기
  const closePostModal = () => {
    setOpenPostModal(false);
  };

  // 모달 수정 버전으로 열기
  const openEdit = () => {
    setOpenPostModal(true);
    setPostType("edit");
  };

  // 제목 값 저장
  const changeTitleInput = (e) => {
    setPostTitle(e.target.value);
  };

  // 내용 값 저장
  const changeContentInput = (e) => {
    setPostContent(e.target.value);
  };

  const postData = [
    {
      postId: 1,
      postImage:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent:
        "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z",
    },
    {
      postId: 2,
      postImage:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent:
        "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z",
    },
    {
      postId: 3,
      postImage:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent:
        "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z",
    },
    {
      postId: 4,
      postImage:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent:
        "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z",
    },
    {
      postId: 5,
      postImage:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent:
        "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z",
    },
    {
      postId: 6,
      postImage:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent:
        "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z",
    },
    {
      postId: 7,
      postImage:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "nana",
      postTitle: "Awesome Movie Review",
      postContent:
        "I recently watched this amazing movie and here's my detailed review...",
      postRegDate: "2024-01-23T12:34:56Z",
    },
  ];

  const revise = (image, title, content, id) => {
    setOpenPostModal(true);
    setPostType("edit");
    setPostImage(image);
    setPostTitle(title);
    setPostContent(content);
    setEditId(id);
  };

  // useEffect(() => {
  //   console.log("postImage : " + postImage);
  // }, [postImage]);

  return (
    <>
      <PostSlide>
        <div className="container">
          <Button
            children="글 작성하기"
            front="#fff"
            back="var(--ORANGE)"
            width="100px"
            height=""
            fontSize="1em"
            active={true}
            clickEvt={() => {
              setOpenPostModal(true);
              setPostType("new");
              setPostImage("");
              setPostTitle("");
              setPostContent("");
            }}
          />
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
                spaceBetween: 20,
              },
            }}
            ref={swiperRef}
          >
            {postData &&
              postData.map((post) => (
                <SwiperSlide className="slide" key={post.postId}>
                  <TabPost post={post} revise={revise} />
                </SwiperSlide>
              ))}
            <div className="swiper-button-prev swiper-button"></div>
            <div className="swiper-button-next swiper-button"></div>
          </Swiper>
        </div>
      </PostSlide>

      <TabPostModal
        open={openPostModal}
        close={closePostModal}
        type={postType}
        postImage={postImage}
        moviePostId={editId}
        postTitle={postTitle}
        onChangePostTitle={changeTitleInput}
        postContent={postContent}
        onChangePostContent={changeContentInput}
      />
    </>
  );
};
export default TabPostSlide;
