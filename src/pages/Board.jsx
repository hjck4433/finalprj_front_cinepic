import { useNavigate, useParams } from "react-router-dom";
import BoardBanner from "../component/Board/BoardBanner";
import CardList from "../component/Board/CardList";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserStore";

const data = {
  boardId: 1,
  memberId: 12345,
  categoryId: 10,
  gatherType: "씨네크루",
  boardRegDate: "2024-01-23T12:34:56Z",
  boardTitle: "음악영화 볼 파티원 모집합니다🎸🎵 음악이 좋은 영화도 ok",
  boardContent:
    "장르는 음악 영화로 제한합니다!\n 팝콘은 필수! \n매 주 같이 볼 영화 정하기로해요~\n장르는 음악 영화로 제한합니다!\n 팝콘은 필수! \n매 주 같이 볼 영화 정하기로해요~",
  boardImage:
    "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/AjV/image/-GRim5L9QwM0BagzxrQgnBuzgTw.png",
  count: 50,
};
const Board = () => {
  const navigate = useNavigate();
  const { category } = useParams();

  const context = useContext(UserContext);
  const { loginStatus } = context;

  // 카테고리 / 키워드 관리
  const [categorySel, setCategorySel] = useState("");
  const [keyword, setKeyword] = useState("");

  // 백 여러번 호출 방지
  const [isLoading, setIsLoading] = useState(false);

  // 로그인 x → 로그인 페이지로 이동

  // 카테고리
  useEffect(() => {
    switch (category) {
      case "gather":
        setCategorySel("씨네크루");
        break;
      case "recap":
        setCategorySel("크루후기");
        break;
      default:
        navigate("/notfound");
        break;
    }
  }, [category, navigate]); // navigate 넣는게 맞나..
  return (
    <>
      <BoardBanner
        id={category}
        keyword={keyword}
        setKeyword={setKeyword}
        setIsLoading={setIsLoading}
      />
      <CardList
        data={data}
        category={categorySel}
        keyword={keyword}
        setKeyword={setKeyword}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </>
  );
};
export default Board;
