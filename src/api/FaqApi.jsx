import axios from "axios";
import Common from "../util/Common";

const FaqApi = {
  //faq 추가생성
  createFaq: async (faqAnswer, faqQuestion) => {
    const data = {
      faqAnswer: faqAnswer,
      faqQuestion: faqQuestion,
    };
    return await axios.post(
      Common.MV_DOMAIN + "/faq/new",
      data,
      Common.tokenHeader()
    );
  },
};

export default FaqApi;
