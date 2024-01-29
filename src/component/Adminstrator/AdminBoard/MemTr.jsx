import { styled } from "styled-components";
import Button from "../../../util/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MemTrComp = styled.tr`
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
        justify-content: left;
        .imgBox {
          width: 30px;
          padding-bottom: 30px;
          margin-right: 5px;
          position: relative;
          border-radius: 100%;
          overflow: hidden;
          background-color: var(--GREY);
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
          }
          svg {
            width: 80%;
            height: 80%;
            position: absolute;
            top: 20%;
            left: 10%;
            color: var(--DARKGREY);
          }
        }
        span {
        }
      }
    }
  }
`;

const MemTr = ({ data, index, setId, deleteModal }) => {
  const toDate = new Date(data.regDate);
  const regDate = toDate.toISOString().split("T")[0];

  return (
    <MemTrComp>
      {/* 숫자 자동증가 */}
      <td className="center">{index + 1}</td>
      <td className="profile">
        <span className="wrapper">
          <span className="imgBox">
            {data.image && data.image ? (
              <img src={data.image} alt="profile" />
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
          </span>
          <span>{data.alias}</span>
        </span>
      </td>
      <td className="center">{data.name}</td>
      <td className="center">{data.email}</td>
      <td className="center">{data.phone}</td>
      <td className="center">{data && data.isKakao ? "O" : "X"}</td>
      <td className="center">{data && data.isMembership ? "O" : "X"}</td>
      <td className="center">{regDate}</td>
      <td className="center">{data.isWithdraw ? "O" : "X"}</td>
      <td className="center">{data.addr}</td>

      <td>
        <Button
          children={"삭제"}
          fontSize=".8em"
          width="80px"
          height="30px"
          active={true}
          back="var(--DARKRED)"
          clickEvt={() => {
            setId(data.id);
            deleteModal();
          }}
        />
      </td>
    </MemTrComp>
  );
};
export default MemTr;
