import Button from "../../../util/Button";
import Comment from "./Comment";

const CommentList = () => {
  return (
    <>
      <div className="commentArea">
        <h3>댓글</h3>
        <div className="commentList">
          <Comment
          // key={comment.commentId}
          // userAlias={userAlias}
          // comment={comment}
          />
        </div>
        <div className="textInputBox">
          <textarea
            type="text"
            placeholder="100자 이하로 댓글을 남겨주세요."
            // value={inputComment}
            // onChange={oninputCommentChange}
          ></textarea>
          <Button
            className="postBtn"
            children="등록"
            active={true}
            width="70px"
            height="30px"
            // clickEvt={}
          />
        </div>
      </div>
    </>
  );
};

export default CommentList;
