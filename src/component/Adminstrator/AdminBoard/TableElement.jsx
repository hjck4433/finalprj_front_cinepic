import styled from "styled-components";
import React, { useState, useEffect, useRef } from "react";
import Button from "../../../util/Button";
import basicProfile from "../../../images/profileImg.png";

const TrComp = styled.tr`
  vertical-align: middle;
  td {
    padding: 10px;
    vertical-align: middle;
    &.center {
      text-align: center;
    }
    &.profile {
      .wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .imgBox {
          width: 30px;
          padding-bottom: 30px;
          position: relative;
          border-radius: 100%;
          overflow: hidden;
          background-color: var(--GREY);
          img {
            position: absolute;
            width: 100%;
          }
          margin-right: 10px;
        }
        span {
        }
      }
    }
    &.selectBox {
      select {
        &:disabled {
          opacity: 1;
        }
        border: 1px solid var(--GREY);
        border-radius: 2px;
        padding: 6px;
        font-weight: 600;
        option {
        }
      }
    }
  }
`;

const Tr = ({ data, index, revise, setRevise, clickOk, clickDel }) => {
  const [confirmRevise, setConfirmRevise] = useState(false);
  const [categorySel, setCategorySel] = useState("sel");
  const [categoryActive, setCategoryActive] = useState(true);
  const [typeSel, setTypeSel] = useState("sel");
  const [gatherActive, setGatherActive] = useState(true);

  // 날짜 가져오는 형식
  const toDate = new Date(data.regDate);
  const regDate = toDate.toISOString().split("T")[0];

  // 첫 렌더링(마운트) 상태 여부를 useRef를 사용하여 관리
  const isInitialRender = useRef(true);

  // 카테고리 정보, 온/오프라인 상태 관리
  useEffect(() => {
    if (revise === true || revise === "back") {
      // console.log("TR" + data.id + "revise 영향");
      setConfirmRevise(false);
      setRevise(false);
      setCategoryActive(true);
      setGatherActive(true);
      if (revise === "back") {
        setCategorySel(data.categoryName);
        setTypeSel(data.gatherType);
      }
    }
  }, [revise]);

  // 수정버튼 클릭
  const clickRevise = () => {
    setCategoryActive(false);
    if (categorySel !== "씨네크루" && categorySel !== "sel")
      setGatherActive(false);
    setConfirmRevise(true);
  };

  // 대분류 변경
  const onChangeCategory = (e) => {
    const selectedCategory = e.target.value; // 선택된 대분류 값 가져오기
    setCategorySel(selectedCategory); // 대분류 상태 없데이트

    // 대분류가 "씨네크루"가 아닌 경우 -> 소분류 초기화, 기본값인 "오프라인"으로 설정
    if (selectedCategory !== "cineCrew") {
      setTypeSel("오프라인");
    }
  };

  // 소분류 변경
  const onChangeType = (e) => {
    setTypeSel(e.target.value);
  };

  return (
    <TrComp>
      {/* 숫자 자동증가 */}
      <td className="center">{index + 1}</td>
      <td className="profile">
        <span className="wrapper">
          <span className="imgBox">
            <img src={data.image} alt="profile" />
          </span>
          <span>{data.alias}</span>
        </span>
      </td>
      <td>{data.title}</td>
      <td className="center">{data.count}</td>
      <td className="center">{regDate}</td>
      {/* 셀렉트 들어갈 예정 */}
      <td className="selectBox">
        <select
          name="category"
          disabled={categoryActive}
          dafaultValue={categorySel}
          onChange={onChangeCategory}
        >
          <option value="sel" hidden>
            선택
          </option>
          <option value="cineCrew">씨네크루</option>
          <option value="crewReview">크루후기</option>
        </select>
      </td>
      {/* 셀렉트 들어갈 예정 */}
      <td className="selectBox">
        <select
          name="gather"
          disabled={gatherActive}
          value={typeSel}
          onChange={onChangeType}
        >
          <option value="sel" hidden>
            선택
          </option>
          <option value="오프라인">오프라인</option>
          <option value="온라인">온라인</option>
        </select>
      </td>
      <td>
        {confirmRevise ? (
          <Button
            children={"확인"}
            back="var(--DARKRED)"
            fontSize=".8em"
            width="80px"
            height="30px"
            active={true}
            clickEvt={() => {
              clickOk(categorySel, typeSel, data.id);
            }}
          />
        ) : (
          <Button
            children={"수정"}
            front="var(--DARKGREY)"
            back="var(--DARKRED)"
            fontSize=".8em"
            width="80px"
            height="30px"
            active={true}
            clickEvt={clickRevise}
          />
        )}
      </td>
      <td>
        <Button
          children={"삭제"}
          back="var(--DARKRED)"
          fontSize=".8em"
          width="80px"
          height="30px"
          active={true}
          clickEvt={() => clickDel(data.id)}
        />
      </td>
    </TrComp>
  );
};

const MemoizedTr = React.memo(Tr, (prevProps, nextProps) => {
  const isTargetTr = prevProps.data.id === nextProps.editId;

  return (
    (isTargetTr && prevProps.revise === nextProps.revise) ||
    (!isTargetTr &&
      prevProps.confirmRevise === nextProps.confirmRevise &&
      prevProps.categorySel === nextProps.categorySel &&
      prevProps.typeSel === nextProps.typeSel &&
      prevProps.categoryActive === nextProps.categoryActive &&
      prevProps.gatherActive === nextProps.gatherActive &&
      prevProps.data.id === nextProps.data.id)
  );
});
export default Tr;
