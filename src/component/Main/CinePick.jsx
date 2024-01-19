import styled from "styled-components";
import Button from "../../util/Button";
import label from "../../images/pick.png";
import poster from "../../images/poster.jpeg";

const CinePickComp = styled.section`
  .container {
    width: 100%;
    .cineTitle {
      h3 {
        font-size: 1.5rem;
        font-weight: 400;
        padding: 100px 40px 40px 40px;

        span {
          font-weight: 600;
        }
        @media only screen and (max-width: 768px) {
          padding-left: 8%;
          font-size: 1.9em;
        }
        @media only screen and (max-width: 520px) {
          font-size: 1.5em;
        }
      }
    }
    .pickMovieBox {
      width: 100%;
      padding: 35px 35px 100px 35px;
      /* border: 1px solid blue; */
      display: flex;
      .onePickBox {
        /* border: 1px solid red; */
        width: 30%;
        button {
          display: block;
          margin: 0 auto;
        }
        .movieCard {
          position: relative;
          /* border: 1px solid gray; */
          border-radius: 5px;
          margin-bottom: 15px;
          .label {
            width: 30%;
            position: absolute;
          }
        }
      }
      .rightSideBox {
        width: 70%;
        /* border: 1px solid gray; */
        .textBox {
          padding: 5px 40px;

          .genre {
            font-size: 1.5em;
            font-weight: 600;
            padding: 10px 0;
          }
          p {
            color: var(--DARKGREY);
            margin-bottom: 10px;
          }
          .story {
            line-height: 1.4;
            font-size: 1.2em;
            margin-bottom: 20px;
          }
        }
        .otherMovieBox {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 40px 100px 40px;
          /* border: 1px solid orange; */

          .movieCard {
            width: 28%;
            position: relative;
            /* border: 1px solid gray; */
            border-radius: 5px;
            margin-bottom: 15px;
            .label {
              width: 30%;
              position: absolute;
            }
          }
          @media only screen and (max-width: 735px) {
            display: none;
          }
        }
      }
      @media only screen and (max-width: 735px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .onePickBox {
          width: 60%;
        }
      }
    }
  }
`;
const ImgComp = styled.div`
  width: 100%;
  padding-bottom: 147%;
  background-image: url(${poster});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(3px 3px 3px #cccccc);
  border-radius: 5px;
`;
const CinePick = () => {
  // const movieData = [{}];
  return (
    <>
      <CinePickComp>
        <div className="container">
          <div className="cineTitle">
            <h3>
              오늘은 이 <span>영화</span>어때요?
            </h3>
            <div className="pickMovieBox">
              <div className="onePickBox">
                <div className="movieCard">
                  <img src={label} alt="label" className="label" />
                  <ImgComp />
                  {/* 북마크 자리 */}
                </div>

                <Button
                  children="상세보기"
                  // width="300px"
                  active={true}
                  front={"var(--DARKRED)"}
                  back={"var(--DARKRED)"}
                />
              </div>
              <div className="rightSideBox">
                <div className="textBox">
                  <div className="genre">
                    <p>#로맨스</p>
                  </div>
                  <p className="story">
                    조엘은 아픈 기억만을 지워준다는 라쿠나사를 찾아가 헤어진
                    연인 클레멘타인의 기억을 지우기로 결심한다. 기억이 사라져
                    갈수록 조엘은 사랑이 시작되던 순간, 행복한 기억들, 가슴 속에
                    각인된 추억들을 지우기 싫어지기만 하는데... 당신을 지우면 이
                    아픔도 사라질까요? 사랑은 그렇게 다시 기억된다.우면 이
                    아픔도 사라질까요? 사랑은 그렇게 다시 기억된다.
                  </p>
                </div>
                <div className="otherMovieBox">
                  <div className="movieCard">
                    <img src={label} alt="label" className="label" />
                    <ImgComp />
                    {/* 북마크 자리 */}
                  </div>
                  <div className="movieCard">
                    <img src={label} alt="label" className="label" />
                    <ImgComp />
                    {/* 북마크 자리 */}
                  </div>
                  <div className="movieCard">
                    <img src={label} alt="label" className="label" />
                    <ImgComp />
                    {/* 북마크 자리 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CinePickComp>
    </>
  );
};

export default CinePick;
