import axios from "axios";
import Common from "../util/Common";

const BoardCommentApi = {
  // 댓글 저장하기
  saveNewComment: async (boardId, content) => {
    console.log("작성 댓글 : " + content);
    const data = {
      boardId: boardId,
      commentText: content,
    };
    return await axios.post(
      Common.CP_DOMAIN + "/comment/new",
      data,
      Common.tokenHeader()
    );
  },

  // 댓글 수정
  commentModify: async (commentId, content) => {
    console.log("댓글 수정 : " + commentId);
    const data = {
      id: commentId,
      commentContent: content,
    };
    return await axios.post(
      Common.CP_DOMAIN + "/comment/modify",
      data,
      Common.tokenHeader()
    );
  },

  // 댓글 삭제
  commentDelete: async (id) => {
    console.log("댓글 삭제 : " + id);
    return await axios.delete(
      Common.CP_DOMAIN + `/comment/delete/${id}`,
      Common.tokenHeader()
    );
  },

  // 댓글 전체 조회
  commentList: async (id) => {
    console.log("댓글 포스트 id : " + id);
    return await axios.get(
      Common.CP_DOMAIN + `/comment/${id}`,
      Common.tokenHeader()
    );
  },
};
export default BoardCommentApi;
