import axios from "axios";
import Common from "../util/Common";

const MovieDetailApi = {
  // 영화 상세정보 조회
  getMovieDetail: async (movieId) => {
    return await axios.get(Common.CP_DOMAIN + `/movies/detail/${movieId}`);
  },

  // 무비포스트 -----------------------------------------------------------
  // 총 페이지 수(조회)

  // 페이지네이션

  // 저장

  // 수정

  // 삭제

  // 관람평 ---------------------------------------------------------------
  // 총 페이지 수(조회)
  getTotalMovieCommentPages: async (movieId) => {
    console.log("관람평 총 페이지 수 : " + movieId);
    const page = 0;
    const size = 5;
    return await axios.get(
      Common.CP_DOMAIN + `/comment/page/${movieId}?page=${page}&size=${size}`,
      Common.tokenHeader()
    );
  },
  // 페이지네이션
  getPagedMovieComments: async (movieId, page) => {
    return await axios.get(
      Common.CP_DOMAIN +
        `/comment/page/list/${movieId}?page=${page - 1}&size=5`,
      Common.tokenHeader()
    );
  },
  // 저장
  saveMovieComment: async (movieId, field, num, text) => {
    console.log("관람평 저장 진입");
    const data = {
      movieId: movieId,
      ratingField: field,
      ratingNum: num,
      ratingText: text,
    };
    return await axios.post(
      Common.CP_DOMAIN + "/comment/new",
      data,
      Common.tokenHeader()
    );
  },

  // 수정

  // 삭제
};
export default MovieDetailApi;
