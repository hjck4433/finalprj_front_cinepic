import axios from "axios";
import Common from "../util/Common";

const BoardApi = {
  // 새 게시글 저장
  saveNewPost: async (categoryName, gatherType, title, image, boardContent) => {
    const data = {
      categoryName: categoryName,
      gatherType: gatherType,
      title: title,
      image: image,
      boardContent: boardContent,
    };
    return await axios.post(
      Common.MV_DOMAIN + "/board/post/new",
      data,
      Common.tokenHeader()
    );
  },
  // 게시글 수정
  updateBoard: async (
    id,
    categoryName,
    gatherType,
    title,
    image,
    boardContent
  ) => {
    const data = {
      id: id,
      categoryName: categoryName,
      gatherType: gatherType,
      title: title,
      image: image,
      boardContent: boardContent,
    };
    return await axios.post(
      Common.MV_DOMAIN + "/board/post/update",
      data,
      Common.tokenHeader()
    );
  },
  // 게시글 삭제
  deleteBoard: async (id) => {
    return await axios.delete(
      Common.MV_DOMAIN + `/board/post/delete/${id}`,
      Common.tokenHeader()
    );
  },
  // 게시글 리스트 조회
  boardList: async () => {
    return await axios.get(
      Common.MV_DOMAIN + `/board/list`,
      Common.tokenHeader()
    );
  },
  // 게시글 상세 조회
  boardDetail: async (postId) => {
    return await axios.get(
      Common.MV_DOMAIN + `/board/post/${postId}`,
      Common.tokenHeader()
    );
  },
};
export default BoardApi;
