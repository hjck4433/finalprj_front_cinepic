import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faPen, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

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
      .delete,
      .check {
        transition: all 0.5s;
      }
      .modify:hover,
      .check:hover {
        cursor: pointer;
        color: var(--ORANGE);
      }
      .delete:hover {
        cursor: pointer;
        color: var(--BLACK);
      }
    }
    .select_box {
      padding: 16px;
      min-width: 180px;
      line-height: 36px;

      display: flex;
      justify-content: center;
      gap: 10px;
      label {
        select {
          font-size: 0.9em;
          border-style: none;
        }
        select[disabled] {
          /* 화살표를 없애는 스타일 */
          -webkit-appearance: none; /* Safari 및 Chrome 등 Webkit 기반 브라우저에서 사용 */
          -moz-appearance: none; /* Firefox에서 사용 */
          appearance: none; /* 일반적인 경우에 적용 */
          color: var(--BLACK);
          font-size: 1.1em;
        }
      }
      .num {
        font-size: 1.5em;
        font-weight: 900;
        select[disabled] {
          font-size: 1.1em;
          font-weight: 700;
        }
      }
    }
    .bar {
      width: 1px;
      height: 60%;
      background-color: var(--ORANGE);
    }
    .comment {
      width: 100%;
      /* margin: 40px 20px; */
      line-height: 26px;
      height: auto;
      margin: 20px;
      border: none;

      resize: none;
      font-size: 1em;
      font-family: "Noto Sans KR", sans-serif;
      &:focus {
        outline: none;
      }
    }
    .P_comment {
      width: 100%;
      display: inline;
      line-height: 26px;
      font-size: 1em;
      margin: 40px 20px;
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
        .delete {
          font-size: 18px;
        }
      }
      .select_box {
        justify-content: flex-start;
        label {
          select:nth-child(1) {
          }
        }
        .num {
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

const Comt = (props) => {
  const {
    open,
    close,
    type,
    postImage,
    moviePostId,
    postAlias,
    postTitle,
    onChangePostTitle,
    postContent,
    onChangePostContent,
    handleModal,
    comt,
    userAlias,
  } = props;
  const [isRevice, setIsRevice] = useState(false);

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
              {isRevice ? (
                <FontAwesomeIcon
                  icon={faCheck}
                  className="check"
                  onClick={() => {
                    setIsRevice(false);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faPen}
                  className="modify"
                  onClick={() => {
                    setIsRevice(true);
                  }}
                />
              )}

              <FontAwesomeIcon
                icon={faXmark}
                className="delete"
                onClick={() => {
                  handleModal("삭제", "삭제하시겠습니까?", true);
                }}
              />
            </div>
          )}
          <div className="select_box">
            {/* <span>{comt.ratingField}</span>
            <span>{comt.ratingNum}</span> */}

            <label htmlFor="field">
              <select
                name="rating_field"
                id="field"
                size={1}
                value={comt.ratingField}
                disabled={isRevice ? false : true}
              >
                <option value="연출" defaultValue>
                  연출
                </option>
                <option value="배우">배우</option>
                <option value="OST">OST</option>
                <option value="영상미">영상미</option>
                <option value="스토리">스토리</option>
              </select>
            </label>

            <label htmlFor="num" className="num">
              <select
                name="rating_num"
                id="num"
                size={1}
                value={comt.ratingNum}
                disabled={isRevice ? false : true}
              >
                <option value="1" defaultValue>
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </label>
          </div>

          <div className="bar"></div>

          {isRevice ? (
            <textarea
              className="comment"
              placeholder="관람평을 입력해주세요"
              value={comt.ratingText}
              disabled={false}
            ></textarea>
          ) : (
            <p className="P_comment">{comt.ratingText}</p>
          )}
        </div>
      </ComtComp>
    </>
  );
};
export default Comt;
