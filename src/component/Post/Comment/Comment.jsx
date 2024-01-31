import Button from "../../../util/Button";
import { useState } from "react";
import BoardCommentApi from "../../../api/BoardCommentApi";
import profileImg from "../../../images/profileImg.png";
import useTokenAxios from "../../../hooks/useTokenAxios";
import Modal from "../../../util/Modal";
import EditModal from "./EditCommentModal";

const Comment = ({ boardComment, fetchCommentList, userAlias }) => {
  const dateTime = boardComment.commentRegDate;
  const toDate = new Date(dateTime);
  const regDate = toDate.toISOString().split("T")[0];

  //   댓글 수정
  const [openEditModal, setOpenEditModal] = useState(false);
  const [editModalContent, setEditModalContent] = useState(
    boardComment.boardCommentText
  );

  const editModalOpen = () => {
    setOpenEditModal(true);
    setEditModalContent(boardComment.boardCommentText);
  };

  const closeEditModal = () => {
    setOpenEditModal(false);
    setEditModalContent(boardComment.boardCommentText);
  };

  const commentModify = async () => {
    console.log("댓글 수정 전");
    const res = await BoardCommentApi.commentModify(
      boardComment.boardCommentId,
      editModalContent
    );
    console.log("commentId : " + boardComment.boardCommentId);
    if (res.data !== null) {
      console.log("댓글 수정 성공");
      fetchCommentList(); // 수정 후 댓글 목록 다시 불러오기
      closeEditModal(); // 모달 닫기
    }
  };
  const modiComment = useTokenAxios(commentModify);

  // 댓글 삭제
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  const deleteComment = async () => {
    const deleteRes = await BoardCommentApi.commentDelete(
      boardComment.boardCommentId
    );
    if (deleteRes.data) {
      console.log("Comment 삭제 성공");
      closeModal();
      fetchCommentList();
    }
  };

  const delComment = useTokenAxios(deleteComment);

  // 모달 닫기
  const closeModal = (num) => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="commentBox" key={boardComment.boardCommentId}>
        <div className="iconArea">
          <div className="imgBox">
            <img
              src={boardComment.memberImage || profileImg}
              alt="memberIcon"
            />
          </div>
        </div>
        <div className="textBox">
          <div className="comment">
            <p className="nickname">{boardComment.memberAlias}</p>
            <p className="commentText">{boardComment.commentText}</p>
          </div>
        </div>
        <div className="buttonBox">
          <div className="writtenDate">{regDate}</div>
          {userAlias === boardComment.memberAlias && (
            <div className="editBtnBox">
              <Button
                className="editBtn"
                children="수정"
                active={true}
                width="44%"
                height="30px"
                fontSize="1em"
                front="var(--RED)"
                back="var(--DARKRED)"
                clickEvt={editModalOpen}
              />
              <Button
                className="deleteBtn"
                children="삭제"
                active={true}
                width="44%"
                height="30px"
                fontSize="1em"
                front="var(--GREY)"
                back="var(--DARKGREY)"
                clickEvt={() => {
                  setModalOpen(true);
                  setModalHeader("삭제");
                  setModalMsg("삭제하시겠습니까?");
                  setModalType(true);
                }}
              />
            </div>
          )}
          <Modal
            open={openModal}
            close={closeModal}
            header={modalHeader}
            children={modalMsg}
            type={modalType}
            confirm={() => delComment()}
          />
          <EditModal
            open={openEditModal}
            close={closeEditModal}
            header={"수정"}
            contentVal={editModalContent}
            onChangeContent={setEditModalContent}
            type={true}
            confirm={() => modiComment()}
          />
        </div>
      </div>
    </>
  );
};
export default Comment;
