import styled from "styled-components";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

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
          }
        }
      }
    }
  }
`;

const CardList = ({
  data,
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
  const [boardData, setBoardData] = useState([]);
  const [gatherType, setGatherType] = useState("온라인");

  const handleSetGatherType = useCallback(
    (newGatherType) => {
      setGatherType(newGatherType);
      setIsLoading(true);
    },
    [setGatherType]
  );

  return (
    <>
      <CardListComp>
        <div className="container">
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
          <Card data={data} />
          <Card data={data} />
          <Card data={data} />
        </div>
      </CardListComp>
    </>
  );
};
export default CardList;
