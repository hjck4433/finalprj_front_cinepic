import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import TabPost from "./TabPost";
import Button from "../../util/Button";
import TabPostModal from "./TabPostModal";
import Modal from "../../util/Modal";
import { UserContext } from "../../context/UserStore";

const PostSlide = styled.div`
  width: 100%;
  .container {
    padding: 30px 0 40px !important;
    /* text-align: right; */
    .newButton {
      text-align: right;
      button {
        border: 1px solid var(--ORANGE);
        margin-right: 10px;
        color: var(--ORANGE);
        font-weight: 300;
        transition: 0.3s ease-in;
        /* margin: 2% 10px 2% 0; */
        &:hover {
          color: #fff;
        }
      }
    }
    .movie_post_slider {
      width: 100%;
      padding: 30px 20px;

      .swiper-slide {
        min-width: 280px;
      }
      .swiper-button {
        width: 15px;
        height: 100%;
        padding: 20px 40px;

        color: var(--ORANGE);
        opacity: 0.5;
        cursor: pointer;
        z-index: 10;
        transition: all 0.3s;
        top: 21px;

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

const TabPostSlide = ({ userAlias }) => {
  const context = useContext(UserContext);
  const { loginStatus } = context;

  // const [postData, setPostData] = useState([]);
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  const [postImage, setPostImage] = useState("");
  const [editId, setEditId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postAlias, setPostAlias] = useState("");
  const [onChangePostTitle, setOnChangePostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [onChangePostContent, setOnChangePostContent] = useState("");

  // 기본 접근 제한 모달
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  const closeModal = (num) => {
    setModalOpen(false);
  };

  const handleModal = (header, msg, type, num) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
  };

  // POST MODAL
  const [openPostModal, setOpenPostModal] = useState(false);
  const [postType, setPostType] = useState("");

  const closePostModal = () => {
    setOpenPostModal(false);
  };

  //post모달 새글 작성 버전으로 열기
  const openNew = () => {
    setOpenPostModal(true);
    setPostType("new");
    setPostImage("");
    setPostTitle("");
    setPostContent("");
    setPostAlias(userAlias);
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
      alias: "씨네픽",
      postTitle: "Awesome Movie Review",
      postContent:
        "I recently watched this amazing movie and here's my detailed review...ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
      postRegDate: "2024-01-23T12:34:56Z",
    },
    {
      postId: 3,
      postImage:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
      movieId: 123,
      alias: "씨네픽",
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
  // 수정 버전으로 넣기
  const revise = (type, image, title, content, id, alias) => {
    setOpenPostModal(true);
    setPostType(type);
    setPostImage(image);
    setPostTitle(title);
    setPostContent(content);
    setEditId(id);
    setPostAlias(alias);
  };

  // useEffect(() => {
  //   console.log("postImage : " + postImage);
  // }, [postImage]);

  return (
    <>
      <PostSlide>
        <div className="container">
          <div className="newButton">
            <Button
              children="글 작성하기"
              front="#fff"
              back="var(--ORANGE)"
              width="100px"
              height=""
              fontSize="1em"
              active={true}
              clickEvt={() => {
                loginStatus
                  ? openNew()
                  : handleModal(
                      "로그인",
                      "로그인이 필요한 기능입니다. \n 로그인 하시겠습니까?",
                      true
                    );
              }}
            />
          </div>
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
              500: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
            }}
            ref={swiperRef}
          >
            {postData &&
              postData.map((post) => (
                <SwiperSlide className="slide" key={post.postId}>
                  <TabPost
                    // onClick={}
                    post={post}
                    revise={revise}
                    userAlias={userAlias}
                  />
                </SwiperSlide>
              ))}
            <div className="swiper-button-prev swiper-button"></div>
            <div className="swiper-button-next swiper-button"></div>
          </Swiper>
        </div>
      </PostSlide>

      <Modal
        open={openModal}
        close={closeModal}
        header={modalHeader}
        children={modalMsg}
        type={modalType}
        confirm={() => {
          navigate("/login");
        }}
      />
      <TabPostModal
        open={openPostModal}
        close={closePostModal}
        type={postType}
        postImage={postImage}
        moviePostId={editId}
        postAlias={postAlias}
        postTitle={postTitle}
        onChangePostTitle={changeTitleInput}
        postContent={postContent}
        onChangePostContent={changeContentInput}
      />
    </>
  );
};
export default TabPostSlide;
