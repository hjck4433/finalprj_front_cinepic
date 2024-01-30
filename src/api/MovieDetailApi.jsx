import axios from "axios";
import Common from "../util/Common";

const MovieDetailApi = {
  // 영화 상세정보 조회
  getMovieDetail: async (movieId) => {
    return await axios.get(Common.CP_DOMAIN + `/movies/detail/${movieId}`);
  },
};
export default MovieDetailApi;
