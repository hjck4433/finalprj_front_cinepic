import styled from "styled-components";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import ToggleButton from "./ToggleBtn";

const CardListComp = styled.section`
  .container {
    .sortArea {
      display: flex;
      font-weight: 500;
      font-size: 0.9rem;
      margin-bottom: 60px;
      justify-content: flex-end;
      li {
        position: relative;
        color: var(--GREY);
        font-size: 1.1em;
        margin-left: 24px;
        cursor: pointer;
        &.active {
          color: var(--BLACK);
        }
        &:last-child {
          &::after {
            content: "";
            width: 2px;
            height: 100%;
            background-color: var(--GREY);
            position: absolute;
            top: 1px;
            left: -11px;
            cursor: default;
          }
        }
      }
    }
  }
`;

const CardList = ({
  category,
  keyword,
  type,
  setKeyword,
  isLoading,
  setIsLoading,
}) => {
  const navigate = useNavigate();
  // 페이지네이션
  const [totalPage, setTotalPage] = useState(5);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("recent");
  // const [boardData, setBoardData] = useState([]);
  const [gatherType, setGatherType] = useState("온라인");

  const handleSetGatherType = useCallback(
    (newGatherType) => {
      setGatherType(newGatherType);
      setIsLoading(true);
    },
    [setGatherType]
  );

  const boardData = [
    {
      boardId: 1,
      memberId: 12345,
      categoryId: 10,
      gatherType: "온라인",
      boardRegDate: "2024-01-24T12:34:56Z",
      boardTitle: "음악영화 볼 파티원 모집합니다🎸🎵 음악이 좋은 영화도 ok",
      boardContent:
        "장르는 음악 영화로 제한합니다!\n 팝콘은 필수! \n매 주 같이 볼 영화 정하기로해요~\n장르는 음악 영화로 제한합니다!\n 팝콘은 필수! \n매 주 같이 볼 영화 정하기로해요~",
      boardImage:
        "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/AjV/image/-GRim5L9QwM0BagzxrQgnBuzgTw.png",
      count: 50,
    },
    {
      boardId: 2,
      memberId: 12345,
      categoryId: 10,
      gatherType: "온라인",
      boardRegDate: "2024-01-24T12:34:56Z",
      boardTitle: "음악영화 볼 파티원 모집합니다🎸🎵 음악이 좋은 영화도 ok",
      boardContent:
        "장르는 음악 영화로 제한합니다!\n 팝콘은 필수! \n매 주 같이 볼 영화 정하기로해요~\n장르는 음악 영화로 제한합니다!\n 팝콘은 필수! \n매 주 같이 볼 영화 정하기로해요~",
      boardImage:
        "https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/AjV/image/-GRim5L9QwM0BagzxrQgnBuzgTw.png",
      count: 50,
    },
  ];
  return (
    <>
      <CardListComp>
        <div className="container">
          <div className="type_filter">
            <ToggleButton
              onChange={handleSetGatherType}
              gatherType={gatherType}
            />
          </div>
          <ul className="sortArea">
            <li
              className={sortBy === "recent" ? "active" : ""}
              onClick={() => {
                setSortBy("recent");
                setIsLoading(true);
              }}
            >
              최신순
            </li>
            <li
              className={sortBy === "former" ? "active" : ""}
              onClick={() => {
                setSortBy("former");
                setIsLoading(true);
              }}
            >
              과거순
            </li>
          </ul>
          <div className="boardMap">
            {boardData &&
              boardData.map((data) => <Card key={data.title} data={data} />)}
          </div>
        </div>
      </CardListComp>
    </>
  );
};
export default CardList;
