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
import MovieDetailApi from "../../api/MovieDetailApi";
import useTokenAxios from "../../hooks/useTokenAxios";

const PostSlide = styled.div`
  width: 100%;
  .post_container {
    padding: 30px 0 40px;
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

const TabPostSlide = ({ movieId, userImage, userAlias }) => {
  const context = useContext(UserContext);
  const { loginStatus } = context;

  const navigate = useNavigate();
  const swiperRef = useRef(null);

  // 기본 접근 제한 모달
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);
  const [modalConfirm, setModalConfirm] = useState(null);

  const closeModal = (num) => {
    setModalOpen(false);
  };

  const handleModal = (header, msg, type, num) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
    setModalConfirm(num);
  };

  // POST 불러오기
  const [postData, setPostData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchTotalPage = async () => {
    console.log("포스트 총 페이지 불러오는 중");
    setCurrentPage(1);
    try {
      const res = await MovieDetailApi.getTotalMoviePostPages(movieId);
      if (res.data) {
        setTotalPage(res.data);
        fetchFirstPosts();
      }
    } catch (e) {
      console.log("영화 포스트 총 페이지 불러오는 중 오류");
    }
  };
  const fetchFirstPosts = async () => {
    console.log("포스트 첫 리스트 불러오는 중");
    setLoading();
    try {
      const res = await MovieDetailApi.getPagedMoviePostList(movieId, 1);
      if (res.data) {
        setPostData(res.data);
        setCurrentPage((prevPage) => prevPage + 1);
      }
    } catch (e) {
      console.error("포스트 리스트 불러오는 중 오류");
    }
    setLoading(false);
  };

  const fetchPosts = async () => {
    console.log("포스트 불러오는 중");
    setLoading();
    try {
      const res = await MovieDetailApi.getPagedMoviePostList(
        movieId,
        currentPage
      );
      if (res.data) {
        setPostData((prevPostData) => [...prevPostData, ...res.data]);
        setCurrentPage((prevPage) => prevPage + 1);
      }
    } catch (e) {
      console.error("포스트 리스트 불러오는 중 오류");
    }
    setLoading(false);
  };
  const handleSlideChange = (swiper) => {
    const { activeIndex, slides } = swiper;
    if (
      activeIndex >= slides.length - 4 &&
      currentPage <= totalPage &&
      !loading
    ) {
      console.log("추가 로딩 지점 도달");
      fetchPosts();
    }
  };

  useEffect(() => {
    fetchTotalPage();
  }, []);

  // POST MODAL
  const [openPostModal, setOpenPostModal] = useState(false);
  const [postType, setPostType] = useState("");

  const closePostModal = () => {
    setOpenPostModal(false);
  };

  const [postImage, setPostImage] = useState("");
  const [editId, setEditId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postAlias, setPostAlias] = useState("");
  const [onChangePostTitle, setOnChangePostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [onChangePostContent, setOnChangePostContent] = useState("");

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

  // 저장
  const handleSubmitPost = async () => {
    const res = await MovieDetailApi.saveMoviePost(
      movieId,
      postImage,
      postTitle,
      postContent
    );
    console.log("포스트 업로딩 결과 : ", res.data);

    if (res.data) {
      setPostImage("");
      setPostTitle("");
      setPostContent("");
      // 조회 함수 자리
      fetchTotalPage();
    }
  };
  const savePost = useTokenAxios(handleSubmitPost);

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

  // 수정
  const postModify = async () => {
    console.log("무비포스트 수정 전");
    const res = await MovieDetailApi.modifyMoviePost(
      setEditId,
      postImage,
      postTitle,
      postContent
    );
    console.log("postId : " + setEditId);
    if (res.data !== null) {
      console.log("무비포스트 수정 성공");
      // 조회 함수 자리
      closeModal();
    }
  };
  const modiPost = useTokenAxios(postModify);

  //삭제
  const deletePost = async () => {
    const res = await MovieDetailApi.deleteMoviePost(editId);
    if (res.data) {
      console.log("무비포스트 삭제 성공");
      // 조회 함수 추가
    }
  };
  const delPost = useTokenAxios(deletePost);

  return (
    <>
      <PostSlide>
        <div className="post_container">
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
                      true,
                      0
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
            onSlideChange={handleSlideChange}
          >
            {postData &&
              postData.map((post) => (
                <SwiperSlide className="slide" key={post.postId}>
                  <TabPost
                    // onClick={}
                    postId={post.postId}
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
          if (modalConfirm === 0) {
            navigate("/login");
          } else {
            closePostModal();
            closeModal();
            // 삭제함수 부르기
          }
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
        handleModal={handleModal}
        savePost={savePost}
        modiPost={modiPost}
        delPost={delPost}
      />
    </>
  );
};
export default TabPostSlide;
