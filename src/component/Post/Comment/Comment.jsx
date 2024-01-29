import Button from "../../../util/Button";
import profileImg from "../../../images/profileImg.png";

const Comment = ({ boardComment, fetchCommentList, userAlias }) => {
  const dateTime = boardComment.commentRegDate;
  const toDate = new Date(dateTime);
  const regDate = toDate.toISOString().split("T")[0];
  return (
    <>
      <div className="commentBox">
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
                // clickEvt={editModalOpen}
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
                // clickEvt={}
              />
            </div>
          )}
          {/* <Modal
            open={openModal}
            close={closeModal}
            header={modalHeader}
            children={modalMsg}
            type={modalType}
            confirm={() => delComment()}
          /> */}
        </div>
      </div>
    </>
  );
};
export default Comment;
