import styled from "styled-components";
import Button from "../../util/Button";
import label from "../../images/pick.png";
import CinePickComp from "../../component/Main/CinePickStyle";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserStore";
import PreferApi from "../../api/PreferApi";

const ImgComp = styled.div`
  width: 100%;
  padding-bottom: 147%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(3px 3px 3px #cccccc);
  border-radius: 5px;
`;

const CinePick = () => {
  const navigate = useNavigate();
  const [genre, setGenre] = useState(""); // 장르 상태
  const [movieData, setMovieData] = useState([]);

  // 로그인 상태
  const context = useContext(UserContext);
  const { loginStatus } = context;

  useEffect(() => {
    const todayGenre = getGenreByDay(); // 요일에 해당하는 장르 가져오기
    setGenre(todayGenre);
  }, []);

  const getGenreRecs = async (genre) => {
    const res = await PreferApi.getRecsMovies(genre);
    if (res.data !== null) {
      setMovieData(res.data);
    }
  };

  useEffect(() => {
    if (loginStatus) {
    } else {
      if (genre !== "") {
        getGenreRecs(genre);
      }
    }
  }, [loginStatus, genre]);

  const getGenreByDay = () => {
    const today = new Date().getDay(); // 현재 요일 가져오기(getDay)

    switch (today) {
      case 0:
        return "드라마"; // 일
      case 1:
        return "액션"; // 월
      case 2:
        return "코미디"; // 화
      case 3:
        return "스릴러"; // 수
      case 4:
        return "로맨스"; // 목
      case 5:
        return "판타지"; // 금
      case 6:
        return "SF"; // 토
      default:
        return "";
    }
  };

  const recsList = movieData.map((item) => {
    const key = Object.keys(item)[0]; //첫번째 키를 가져옴
    return item[key];
  });

  const toMovie = (movieId) => {
    navigate(`/moviesearch/${movieId}`);
  };

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
                <div
                  className="movieCard"
                  onClick={() => {
                    movieData &&
                      movieData.length > 0 &&
                      toMovie(movieData[0].recs1.movieId);
                  }}
                >
                  <img src={label} alt="label" className="label" />
                  <ImgComp
                    style={{
                      backgroundImage: `url(${
                        movieData &&
                        movieData.length > 0 &&
                        movieData[0].recs1.moviePoster
                      })`,
                    }}
                  />
                </div>
                <Button
                  children="상세보기"
                  // width="300px"
                  active={true}
                  front={"var(--DARKRED)"}
                  back={"var(--DARKRED)"}
                  clickEvt={() => {
                    movieData &&
                      movieData.length > 0 &&
                      toMovie(movieData[0].recs1.movieId);
                  }}
                />
              </div>
              <div className="rightSideBox">
                <div className="textBox">
                  <div className="genre">
                    <p>#{genre}</p>
                  </div>
                  <p className="story">
                    {movieData &&
                      movieData.length > 0 &&
                      movieData[0].recs1.moviePlot}
                  </p>
                </div>
                <div className="otherMovieBox">
                  {movieData &&
                    movieData.length > 0 &&
                    [...Array(3)].map((_, index) => (
                      <div
                        className="movieCard"
                        key={index}
                        onClick={() => {
                          toMovie(recsList[index + 1].movieId);
                        }}
                      >
                        <img src={label} alt="label" className="label" />

                        {/* 포스터 recs2번부터 가져오기 위해 index +1 해줌 */}
                        <ImgComp
                          style={{
                            backgroundImage: `url(${
                              recsList[index + 1].moviePoster
                            })`,
                          }}
                        />
                      </div>
                    ))}
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
