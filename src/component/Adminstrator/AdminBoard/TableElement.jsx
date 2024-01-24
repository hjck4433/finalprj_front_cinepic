import styled from "styled-components";
import { useState } from "react";
import Button from "../../../util/Button";
import Modal from "../../../util/Modal";
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
  const [categorySel, setCategorySel] = useState("sel");
  const [categoryActive, setCategoryActive] = useState(true);
  const [typeSel, setTypeSel] = useState("sel");
  const [gatherActive, setGatherActive] = useState(true);

  const [confirmRevise, setConfirmRevise] = useState(false);

  //Modal
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);
  const [modalConfirm, setModalConfirm] = useState(null);

  // 모달 닫기
  const closeModal = (num) => {
    setModalOpen(false);
  };
  const handleModal = (header, msg, type, num) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
    setModalConfirm(num);
  };

  const clickRevise = () => {
    setCategoryActive(false);
    if (categorySel !== "씨네크루" && categorySel !== "sel")
      setGatherActive(false);
    setConfirmRevise(true);
  };

  const ClickOk = () => {
    handleModal("확인", "수정하시겠습니까?", true, 0);
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
      <td className="center">{data.regDate}</td>
      {/* 셀렉트 들어갈 예정 */}
      <td className="selectBox">
        <select
          name="category"
          disabled={categoryActive}
          dafaultValue={categorySel}
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
        <select name="gather" disabled={gatherActive} defaultValue={typeSel}>
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
            clickEvt={ClickOk}
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
          clickEvt={() => {}}
        />
      </td>
      <Modal
        open={openModal}
        close={closeModal}
        header={modalHeader}
        children={modalMsg}
        type={modalType}
        confirm={() => {
          if (modalConfirm === 0) {
            setCategoryActive(true);
            setGatherActive(true);
            closeModal();
            setConfirmRevise(false);
          }
        }}
      />
    </TrComp>
  );
};
export default Tr;
