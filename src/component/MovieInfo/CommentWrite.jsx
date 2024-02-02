import styled from "styled-components";
import Button from "../../util/Button";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserStore";
import MovieDetailApi from "../../api/MovieDetailApi";
import useTokenAxios from "../../hooks/useTokenAxios";

const CommentWriteComp = styled.div`
  margin-bottom: 5%;
  display: flex;

  .user_box {
    width: 120px;
    text-align: center;
    padding: 10px;
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
    overflow: hidden;
    .select_box {
      padding: 16px;
      min-width: 180px;
      label {
        &:nth-child(1) {
          margin-right: 20px;
        }
        select {
          cursor: pointer;
          font-size: 1.1em;
          border-style: none;
          &:focus {
            outline: 1px solid #fff;
          }
        }
      }
    }
    .bar {
      width: 1px;
      height: 60%;
      background-color: var(--ORANGE);
    }
    textarea {
      width: calc(100% - (180px + (20px + 20px)));
      margin: 20px;
      border: none;
      resize: none;
      font-size: 1.1em;
      font-family: "Noto Sans KR", sans-serif;
      &:focus {
        outline: 1px solid #fff;
      }
    }
    button {
      font-weight: 300;
      margin: 20px;
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
      font-size: 1.1em;
      .select_box {
        text-align: right;
        padding: 2% 2% 4% 2%;
        label {
          &:nth-child(1) {
          }
        }
      }
      .bar {
        width: 100%;
        height: 1px;
        margin: 0 auto;
      }
      textarea {
        width: 100%;
        margin: 0;
        margin: 20px 0;
        margin-bottom: 3%;
      }
      button {
        margin: 10px;
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

const CommentWrite = ({ movieId, userAlias, handleModal }) => {
  const context = useContext(UserContext);
  const { loginStatus } = context;

  const [field, setField] = useState("연출");
  const [num, setNum] = useState("1");
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("영화아이디 : " + movieId);
  }, []);

  // 관람평 저장
  const handleSubmitComment = async () => {
    const res = await MovieDetailApi.saveMovieComment(
      movieId,
      field,
      num,
      text
    );
    console.log("관람평 저장 결과 : ", res.data);
    if (res.data) {
      setField("연출");
      setNum("1");
      setText("");
      // getTotalPage();
    }
  };
  const saveComment = useTokenAxios(handleSubmitComment);

  const comtWriteData = {
    postId: 1,
    movieId: 123,
    image:
      "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231106_145%2F169919951043106bD7_JPEG%2Fmovie_image.jpg",
    alias: "Mimi",
    ratingField: "",
    ratingNum: "",
    ratingText: "",
    commentRegDate: "",
  };

  return (
    <>
      <CommentWriteComp
        onClick={() => {
          console.log("click!");
          !loginStatus &&
            handleModal(
              "로그인",
              "로그인이 필요한 기능입니다. \n 로그인 하시겠습니까?",
              true,
              0
            );
        }}
      >
        <div className="user_box">
          <div className="img_box">
            <ComtImg $comtImg={comtWriteData.image}></ComtImg>
          </div>
          <p>{comtWriteData.alias}</p>
        </div>

        <div className="input_box">
          <div className="select_box">
            <label htmlFor="field">
              <select
                name="rating_field"
                id="field"
                size={1}
                value={field}
                onChange={(e) => {
                  setField(e.target.value);
                }}
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

            <label htmlFor="num">
              <select
                name="rating_num"
                id="num"
                size={1}
                value={num}
                onChange={(e) => {
                  setNum(e.target.value);
                }}
              >
                <option value="1">1</option>
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
          <textarea
            className="comment"
            placeholder="관람평을 입력해주세요"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
          <Button
            children="작성"
            front="var(--ORANGE)"
            back="var(--RED)"
            width="58px"
            height=""
            fontSize="1em"
            active={text.length > 0}
            clickEvt={saveComment}
          />
        </div>
      </CommentWriteComp>
    </>
  );
};
export default CommentWrite;
