import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen } from "@fortawesome/free-solid-svg-icons";

const ComtComp = styled.div`
  padding-bottom: 5%;
  display: flex;

  .user_box {
    width: 120px;
    text-align: center;
    padding: 22px 10px;
    .img_box {
      width: 70%;
      padding-bottom: 70%;
      margin-bottom: 10%;
      display: inline-block;

      border-radius: 50%;
      overflow: hidden;
      position: relative;
    }
  }
  .input_box {
    width: calc(100% - 120px);
    border-radius: 10px;
    border: 1px solid var(--GREY);
    display: flex;
    align-items: center;
    font-size: 1.1em;

    position: relative;
    .icon_box {
      display: flex;
      gap: 16px;
      color: var(--GREY);
      opacity: 0.8;

      position: absolute;
      top: 16px;
      right: 18px;
      .modify,
      .close {
        transition: all 0.5s;
      }
      .modify:hover {
        cursor: pointer;
        color: var(--ORANGE);
      }
      .close:hover {
        cursor: pointer;
        color: var(--BLACK);
      }
    }
    .select_box {
      padding: 16px;
      min-width: 180px;
      span:nth-child(1) {
        margin: 0 40% 0 12%;
      }
      span:nth-child(2) {
        font-size: 1.5em;
        font-weight: 900;
      }
    }
    .bar {
      width: 1px;
      height: 60%;
      background-color: var(--ORANGE);
    }
    .comment {
      width: 100%;
      margin: 40px 20px;
      line-height: 26px;
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.1em;
    .user_box {
      width: 80px;
      padding: 0;
      font-size: 1.1em;
    }
    .input_box {
      width: calc(100% - 80px);
      display: block;
      padding: 2%;
      text-align: right;
      .icon_box {
        top: 20px;
        right: 18px;
        .modify {
          font-size: 16px;
        }
        .close {
          font-size: 18px;
        }
      }
      .select_box {
        text-align: left;
        padding: 5px 5px 15px;
        span:nth-child(1) {
          margin: 0;
          margin-right: 35px;
        }
      }
      .bar {
        width: 100%;
        height: 1px;
        margin: 0 auto;
      }
      .comment {
        width: 100%;
        margin: 0;
        padding: 20px 0;
        margin-bottom: 3%;
        text-align: left;
        font-size: 1.1em;
      }
    }
  }
  @media only screen and (max-width: 480px) {
  }
`;
const ComtImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$comtImg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
`;

const Comt = ({ comt, userAlias }) => {
  return (
    <>
      <ComtComp>
        <div className="user_box">
          <div className="img_box">
            <ComtImg $comtImg={comt.image}></ComtImg>
          </div>
          <p>{comt.alias}</p>
        </div>

        <div className="input_box">
          {userAlias && userAlias === comt.alias && (
            <div className="icon_box">
              <FontAwesomeIcon
                icon={faPen}
                className="modify"
                onClick={() => {}}
              />
              <FontAwesomeIcon
                icon={faXmark}
                className="close"
                onClick={() => {}}
              />
            </div>
          )}
          <div className="select_box">
            <span>{comt.ratingField}</span>
            <span>{comt.ratingNum}</span>
          </div>
          <div className="bar"></div>
          <p className="comment">{comt.ratingText}</p>
        </div>
      </ComtComp>
    </>
  );
};
export default Comt;
