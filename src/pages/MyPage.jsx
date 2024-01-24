import BookMarkList from "../component/MyPage/BookMakrList";
import MembershipJoin from "../component/MyPage/MembershipJoin";
import MyInfo from "../component/MyPage/MyInfo";
import MemberApi from "../api/MemberApi";
import useTokenAxios from "../hooks/useTokenAxios";

const MyPage = () => {
  return (
    <>
      <MyInfo />
      <MembershipJoin />
      <BookMarkList />
    </>
  );
};
export default MyPage;
