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
