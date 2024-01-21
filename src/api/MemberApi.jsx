import axios from "axios";
import Common from "../util/Common";

const MemberApi = {
  // 이메일 인증
  sendEmailCode: async (email) => {
    console.log("이메일 인증 : " + email);
    return await axios.get(Common.CP_DOMAIN + `/email/mail?id=${email}`);
  },
  // 중복 체크
  checkUnique: async (type, data) => {
    console.log("중복체크 진입 : " + data);
    const dataMap = {
      type: type,
      data: data,
    };
    return await axios.post(Common.CP_DOMAIN + "/auth/isunique", dataMap);
  },
  //회원가입
  joinMember: async (
    email,
    password,
    name,
    alias,
    phone,
    addr,
    image,
    isKakao
  ) => {
    console.log("회원가입 진입 : " + email);
    const data = {
      email: email,
      password: password,
      name: name,
      alias: alias,
      phone: phone,
      addr: addr,
      image: image,
      isKakao: isKakao,
    };
    return await axios.post(Common.CP_DOMAIN + "/auth/join", data);
  },
  //로그인
  login: async (email, password) => {
    console.log("로그인 진입 : " + email);
    const data = {
      email: email,
      password: password,
    };
    return await axios.post(Common.CP_DOMAIN + "/auth/login", data);
  },
  // 회원 상세 조회
  getMemberDetail: async () => {
    return await axios.get(
      Common.CP_DOMAIN + "/member/detail",
      Common.tokenHeader()
    );
  },

  // 회원 정보 수정
  changeMemberInfo: async (
    email,
    password,
    name,
    alias,
    phone,
    addr,
    image,
    isKakao
  ) => {
    console.log("회원정보 수정 : " + email);
    const data = {
      email: email,
      password: password,
      name: name,
      alias: alias,
      phone: phone,
      addr: addr,
      image: image,
      isKakao: isKakao,
    };
    return await axios.post(
      Common.CP_DOMAIN + "/member/update",
      data,
      Common.tokenHeader()
    );
  },
  // 비밀번호 체크
  isPassword: async (password) => {
    const data = {
      password: password,
    };
    return await axios.post(
      Common.CP_DOMAIN + "/member/ispassword",
      data,
      Common.tokenHeader()
    );
  },

  // 회원 탈퇴
  withdrawMember: async () => {
    console.log("회원 탈퇴 진입");
    return await axios.get(
      Common.CP_DOMAIN + "/member/withdraw",
      Common.tokenHeader()
    );
  },

  // admin - 월별 회원정보 조회
  getMonthlyData: async () => {
    return await axios.get(
      Common.MV_DOMAIN + "/member/admin/monthly",
      Common.tokenHeader()
    );
  },

  // admin - 회원 조회
  memberPage: async (page) => {
    return await axios.get(
      Common.MV_DOMAIN + `/member/admin/list/page?page=${page - 1}&size=10`,
      Common.tokenHeader()
    );
  },
  // admin - 페이지네이션
  getTotalPage: async () => {
    const page = 0;
    const size = 10;
    return await axios.get(
      Common.MV_DOMAIN + `/member/admin/list/count?page=${page}&size=${size}`,
      Common.tokenHeader()
    );
  },

  // admin - 로그인 타입별

  // admin - 회원 삭제
  deleteMem: async (memId) => {
    return await axios.delete(
      Common.MV_DOMAIN + `/member/admin/delete/${memId}`,
      Common.tokenHeader()
    );
  },
  // 관리자 로그인
  adminLogin: async (adminId, adminPassword) => {
    const data = {
      adminId: adminId,
      adminPassword: adminPassword,
    };
    return await axios.post(Common.CP_DOMAIN + "/auth/adminlogin", data);
  },
};
export default MemberApi;
