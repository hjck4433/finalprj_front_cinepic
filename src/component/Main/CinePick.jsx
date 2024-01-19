import styled from "styled-components";
import Button from "../../util/Button";

const CinePickComp = styled.section`
  .container {
    width: 100%;
  }
`;

const CinePick = () => {
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
                <div className="onePickMovie">
                  <img src="" alt="" className="lable" />
                  <img src="" alt="" className="poster" />
                  {/* 북마크 자리 */}
                </div>
                <Button
                  children="상세보기"
                  // width=""
                  active={true}
                  front={"var(--DARKRED)"}
                  back={"var(--DARKRED)"}
                />
              </div>
              <div className="textBox">
                <div className="genre"></div>
              </div>
              <div className="otherMoviesBox"></div>
            </div>
          </div>
        </div>
      </CinePickComp>
    </>
  );
};

export default CinePick;
