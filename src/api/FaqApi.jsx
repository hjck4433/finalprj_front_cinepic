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

  // faq 수정

  reviseFaq: async (faqId, faqAnswer, faqQuestion) => {
    console.log("FAQ 수정 : " + faqId);
    const data = {
      faqId: faqId,
      faqAnswer: faqAnswer,
      faqQuestion: faqQuestion,
    };
    return await axios.post(
      Common.MV_DOMAIN + "/faq/revise",
      data,
      Common.tokenHeader()
    );
  },
};

export default FaqApi;
