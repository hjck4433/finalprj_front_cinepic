import styled from "styled-components";
import { useState } from "react";
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
        outline: none;
        border: none;
        padding: 6px;
        font-weight: 600;
        option {
        }
      }
    }
  }
`;

const Tr = ({ data, index, revise, setRevise, clickOk, clickDel }) => {
  const toDate = new Date(data.regDate);
  const regDate = toDate.toISOString().split("T")[0];
  const [confirmRevise, setConfirmRevise] = useState(false);

  return (
    <TrComp>
      <td className="center">{index + 1}</td>
      <td className="profile">
        <span className="wrapper">
          <span className="imgBox">
            <img
              src={data.memberImage ? data.memberImage : basicProfile}
              alt="profile"
            />
          </span>
          <span>{data.alias}</span>
        </span>
      </td>
      <td>{data.title}</td>
      <td className="center">{data.count}</td>
      <td className="center">{regDate}</td>
      <td className="selectBox">
        <select
          name="category"
          //   disabled={categoryActive}
          //   value={categorySel}
          //   onChange={onChangeCategory}
        >
          <option value="sel" hidden>
            선택
          </option>
          <option value="CINE:CREW ">CINE:CREW</option>
          <option value="모임후기">모임후기</option>
        </select>
      </td>
      <td className="selectBox">
        <select
        //   name="gather"
        //   disabled={gatherActive}
        //   value={typeSel}
        //   onChange={onChangeType}
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
            back="var(--MIDBLUE)"
            front="var(--BLUE)"
            fontSize=".8em"
            width="80px"
            height="30px"
            active={true}
            clickEvt={() => {
              //   clickOk(categorySel, typeSel, data.id);
            }}
          />
        ) : (
          <Button
            children={"수정"}
            back="var(--BLUE)"
            fontSize=".8em"
            width="80px"
            height="30px"
            active={true}
            // clickEvt={clickRevise}
          />
        )}
      </td>
      <td>
        <Button
          children={"삭제"}
          front="var(--GREY)"
          back="var(--BLUE)"
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
