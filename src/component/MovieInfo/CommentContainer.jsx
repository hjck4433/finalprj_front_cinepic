import styled from "styled-components";
import CommentWrite from "./CommentWrite";
import Comt from "./Comt";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserStore";
import Modal from "../../util/Modal";
import PaginationUtil from "../../util/Pagination/Pagination";

const CommentContainerComp = styled.section`
  .container {
    h4 {
      font-size: 1.5em;
      margin: 4% 2%;
    }
  }
`;

const CommentContainer = ({ userAlias }) => {
  const context = useContext(UserContext);
  const { loginStatus } = context;
  const navigate = useNavigate();

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

  // 페이지네이션 관련
  const [totalPage, setTotalPage] = useState(5);
  const [page, setPage] = useState(1);

  const commentData = [
    {
      postId: 1,
      movieId: 123,
      image:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231106_145%2F169919951043106bD7_JPEG%2Fmovie_image.jpg",
      alias: "nana",
      ratingField: "OST",
      ratingNum: "8",
      ratingText: "ost가 영화 분위기를 더 살려주는거 같아요",
      commentRegDate: "2024-01-23T12:34:56Z",
    },
    {
      postId: 2,
      movieId: 123,
      image:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231106_145%2F169919951043106bD7_JPEG%2Fmovie_image.jpg",
      alias: "nana",
      ratingField: "OST",
      ratingNum: "8",
      ratingText: "ost가 영화 분위기를 더 살려주는거 같아요",
      commentRegDate: "2024-01-23T12:34:56Z",
    },
    {
      postId: 3,
      movieId: 123,
      image:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231106_145%2F169919951043106bD7_JPEG%2Fmovie_image.jpg",
      alias: "씨네픽",
      ratingField: "OST",
      ratingNum: "8",
      ratingText:
        "밤하늘의 별빛처럼, 당신은 희망과 가능성으로 빛나는 존재입니다. 과거를 뒤로하고 오늘을 살며 내일을 향해 달려나가세요. 당신의 꿈과 열정이 세상을 아름답게 만듭니다. 계속해서 빛나세요.",
      commentRegDate: "2024-01-24T12:34:56Z",
    },
    {
      postId: 4,
      movieId: 123,
      image:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231106_145%2F169919951043106bD7_JPEG%2Fmovie_image.jpg",
      alias: "nana",
      ratingField: "OST",
      ratingNum: "8",
      ratingText:
        "ost가 영화 분위기를 더 살려주는거 같아요. ost가 영화 분위기를 더 살려주는거 같아요. ost가 영화 분위기를 더 살려주는거 같아요. ost가 영화 분위기를 더 살려주는거 같아요. ost가 영화 분위기를 더 살려주는거 같아요. ",
      commentRegDate: "2024-01-25T12:34:56Z",
    },
    {
      postId: 5,
      movieId: 123,
      image:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231106_145%2F169919951043106bD7_JPEG%2Fmovie_image.jpg",
      alias: "씨네픽",
      ratingField: "OST",
      ratingNum: "8",
      ratingText:
        "밤하늘의 별빛처럼, 당신은 희망과 가능성으로 빛나는 존재입니다. 과거를 뒤로하고 오늘을 살며 내일을 향해 달려나가세요. 당신의 꿈과 열정이 세상을 아름답게 만듭니다. 계속해서 빛나세요.",
      commentRegDate: "2024-01-26T12:34:56Z",
    },
  ];
  return (
    <>
      <CommentContainerComp>
        <div className="container">
          <h4>관람평</h4>
          <CommentWrite userAlias={userAlias} handleModal={handleModal} />
          <div className="comment_box">
            {commentData.map((comment) => (
              <Comt
                comt={comment}
                userAlias={userAlias}
                key={comment.postId}
                handleModal={handleModal}
              />
            ))}
          </div>

          <PaginationUtil
            totalPage={totalPage}
            limit={5}
            page={page}
            setPage={setPage}
          />
        </div>
      </CommentContainerComp>
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
            closeModal();
            // 삭제함수 부르기
          }
        }}
      />
    </>
  );
};
export default CommentContainer;
