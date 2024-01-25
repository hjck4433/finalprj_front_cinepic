import axios from "axios";
import Common from "../util/Common";

const PreferApi = {
  // 감독 존재 여부
  // 배우 존재 여부
  // 회원의 취향 정보 가져오기
  getPreferInfo: async () => {
    return await axios.get(
      Common.CP_DOMAIN + `/prefer/getPreferInfo`,
      Common.tokenHeader()
    );
  },
  // 취향 등록
  savePrefer: async (directorName, actorName, gender, genre) => {
    const data = {
      directorName: directorName,
      actorName: actorName,
      gender: gender,
      genre: genre,
    };
    return await axios.post(
      Common.CP_DOMAIN + `/prefer/new`,
      data,
      Common.tokenHeader()
    );
  },
  // 취향 수정
  modifyPrefer: async (id, directorName, actorName, gender, genre) => {
    const data = {
      id: id,
      directorName: directorName,
      actorName: actorName,
      gender: gender,
      genre: genre,
    };
    return await axios.post(
      Common.CP_DOMAIN + `/prefer/modify`,
      data,
      Common.tokenHeader()
    );
  },
};

export default PreferApi;
