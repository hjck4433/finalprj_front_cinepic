import BoardBanner from "../component/Board/BoardBanner";
import CardList from "../component/Board/CardList";

const data = {
  boardId: 1,
  memberId: 12345,
  categoryId: 10,
  gatherType: "씨네크루",
  boardRegDate: "2024-01-27",
  boardTitle: "음악영화 볼 파티원 모집합니다🎸🎵 음악이 좋은 영화도 ok",
  boardContent:
    "장르는 음악 영화로 제한합니다!\n 팝콘은 필수! \n매 주 같이 볼 영화 정하기로해요~\n장르는 음악 영화로 제한합니다!\n 팝콘은 필수! \n매 주 같이 볼 영화 정하기로해요~",
  boardImage:
    "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/AjV/image/-GRim5L9QwM0BagzxrQgnBuzgTw.png",
  count: 50,
};
const Board = () => {
  return (
    <>
      <BoardBanner />
      <CardList data={data} />
    </>
  );
};
export default Board;
