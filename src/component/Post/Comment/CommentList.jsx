import Button from "../../../util/Button";
import Comment from "./Comment";
import { useState, useEffect } from "react";
import BoardCommentApi from "../../../api/BoardCommentApi";
import useTokenAxios from "../../../hooks/useTokenAxios";

const BoardCommentList = ({ id, userAlias }) => {
  const [commentData, setCommmentData] = useState("");
  const [inputComment, setInputComment] = useState("");

  const inputCommentChange = (e) => {
    setInputComment(e.target.value);
  };

  // 댓글 저장
  const submitComment = async () => {
    const response = await BoardCommentApi.saveNewComment(id, inputComment);
    console.log("댓글 저장 결과 : ", response.data);
    if (response.data) {
      setInputComment("");
    }
  };
  const saveComment = useTokenAxios(submitComment);

  // 댓글 리스트 불러오기
  const fetchCommentList = async () => {
    const res = await BoardCommentApi.commentList(id);
    if (res.data !== null) {
      setCommmentData(res.data);
    }
  };
  const getCommentList = useTokenAxios(fetchCommentList);

  useEffect(() => {
    getCommentList();
  }, []);

  return (
    <>
      <div className="commentArea">
        <h3>댓글</h3>
        <div className="commentList">
          {commentData &&
            commentData.map((boardComment) => (
              <Comment
                key={boardComment.boardCommentId}
                userAlias={userAlias}
                boardComment={boardComment}
              />
            ))}
        </div>
        <div className="textInputBox">
          <textarea
            type="text"
            placeholder="100자 이하로 댓글을 남겨주세요."
            value={inputComment}
            onChange={inputCommentChange}
          ></textarea>
          <Button
            className="postBtn"
            children="등록"
            active={inputComment.length > 0 && inputComment.length < 101}
            width="70px"
            height="30px"
            fontSize="14px"
            clickEvt={saveComment}
          />
        </div>
      </div>
    </>
  );
};

export default BoardCommentList;
