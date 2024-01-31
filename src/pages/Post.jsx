import { PostComp } from "../component/Post/PostStyle";
import Button from "../util/Button";
import BoardCommentList from "../component/Post/Comment/CommentList";
import { useNavigate, useParams } from "react-router-dom";
import BoardApi from "../api/BoardApi";
import MemberApi from "../api/MemberApi";
import React, { useEffect, useState } from "react";
import useTokenAxios from "../hooks/useTokenAxios";
import Modal from "../util/Modal";
import profileImg from "../images/profileImg.png";

const Post = () => {
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState("");
  const [userAlias, setUserAlias] = useState("");
  const { postId } = useParams();
  const [regDate, setRegDate] = useState("");

  // 모달창
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleModal = (header, msg, type) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
  };

  const clickBtn = (num) => {
    switch (num) {
      case 1:
        navigate(`/board/post/revise/${postId}`);
        break;
      case 2:
        navigate(-1);
        break;
      default:
    }
  };

  const fetchBoardData = async () => {
    console.log("API 요청 전");
    const res = await BoardApi.boardDetail(postId);
    console.log("API 요청 후 : ", res);
    if (res.data !== null) {
      setBoardData(res.data);
      const toDate = new Date(res.data.regDate);
      setRegDate(toDate.toISOString().split("T")[0]);
    }
  };
  const getBoardData = useTokenAxios(fetchBoardData);

  const fetchPostDetail = async () => {
    const res = await BoardApi.boardDetail(postId);
    if (res.data) {
      getBoardData();
    }
  };
  const getPostDetail = useTokenAxios(fetchPostDetail);

  const fetchUserDetail = async () => {
    const res = await MemberApi.getMemberDetail();
    if (res.data !== null) {
      setUserAlias(res.data.alias);
    }
  };
  const getUserDetail = useTokenAxios(fetchUserDetail);

  const deletePost = async () => {
    const res = await BoardApi.deleteBoard(postId);
    if (res.data) {
      navigate(-1);
    }
  };
  const delPost = useTokenAxios(deletePost);

  useEffect(() => {
    getPostDetail();
    getUserDetail();
  }, []);
  return (
    <>
      <PostComp>
        <div className="container">
          <div className="postTop">
            <div className="profileIcon">
              <div className="profileImage">
                <img
                  src={
                    boardData && boardData.memberImage
                      ? boardData.memberImage
                      : profileImg
                  }
                  alt="memberImage"
                />
              </div>
            </div>
            <div className="postTopInfo">
              <div className="categotyAndRegDate">
                <div className="selectedCategory">
                  <div className="selectedTheme">
                    <p>{boardData.categoryName}</p>
                  </div>
                  <div className="selectedPlace">
                    <p>{boardData.gatherType}</p>
                  </div>
                </div>
                <div className="writtenDate">{regDate}</div>
              </div>
              <h3>{boardData.title}</h3>
              <div className="nickAndReviseBtn">
                <div className="nickname">{boardData.memberAlias}</div>
                {/* 유저의 닉네임과 보드데이터의 유저닉네임이 같다면 */}
                {userAlias === boardData.memberAlias && (
                  <div className="reviseBtnBox">
                    <Button
                      children="수정하기"
                      front="var(--GREY)"
                      back="var(--DARKRED)"
                      active={true}
                      clickEvt={() => clickBtn(1)}
                      width="100%"
                      height="30px"
                    />
                    <Button
                      children="삭제하기"
                      front="var(--GREY)"
                      back="var(--DARKGREY)"
                      active={true}
                      clickEvt={() => {
                        handleModal("삭제", "삭제하시겠습니까?", true);
                      }}
                      width="100%"
                      height="30px"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="postMain">
            <div className="contents">
              <img src={boardData.image} alt="contentsImg" />
              <div className="contentsText">
                <p>{boardData.boardContent}</p>
              </div>
            </div>
          </div>
          {/* 댓글 부분 추가 */}
          <BoardCommentList id={postId} userAlias={userAlias} />
          <div className="goToListBtn">
            <Button
              className="listBtn"
              children="목록보기"
              active={true}
              front="var(--RED)"
              clickEvt={() => clickBtn(2)}
            />
          </div>
        </div>
        <Modal
          open={openModal}
          close={closeModal}
          header={modalHeader}
          children={modalMsg}
          type={modalType}
          confirm={() => {
            delPost();
          }}
        />
      </PostComp>
    </>
  );
};
export default Post;
