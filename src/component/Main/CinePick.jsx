import styled from "styled-components";
import Button from "../../util/Button";
import label from "../../images/pick.png";
import poster from "../../images/poster.jpeg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieDetailApi from "../../api/MovieDetailApi";

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
          margin-top: 40px;
        }
        @media only screen and (max-width: 400px) {
          button {
            width: 150px;
          }
        }

        .movieCard {
          position: relative;
          border-radius: 5px;
          margin-bottom: 15px;

          .label {
            width: 30%;
            position: absolute;
            top: -5px;
            z-index: 1;
          }
        }
      }
      .rightSideBox {
        width: 70%;
        .textBox {
          padding: 5px 40px;

          .genre {
            font-size: 1.5em;
            font-weight: 600;
            padding: 10px 0;
            margin-top: 30px;
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
        @media only screen and (max-width: 900px) {
          .textBox {
            p {
              font-size: 0.9em;
            }
            .story {
              font-size: 1.1em;
            }
          }
        }
        @media only screen and (max-width: 500px) {
          .textBox {
            padding: 5px 5px;

            p {
              font-size: 0.9em;
            }
            .story {
              font-size: 1.1em;
            }
          }
        }
        .otherMovieBox {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0 40px 100px 40px;

          .movieCard {
            width: 28%;
            position: relative;
            border-radius: 5px;
            margin-bottom: 15px;

            .label {
              width: 30%;
              position: absolute;
              top: -2px;
              z-index: 1;
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
  /* background-image: url(${poster}); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(3px 3px 3px #cccccc);
  border-radius: 5px;
`;

const genresByDay = {
  월요일: "액션",
  화요일: "코미디",
  수요일: "스릴러",
  목요일: "로맨스",
  금요일: "판타지",
  토요일: "SF",
  일요일: "드라마",
};

const getGenreByDay = () => {
  const today = new Date().getDate(); // 현재 요일 가져오기

  switch (today) {
    case 0:
      return genresByDay["월요일"];
    case 1:
      return genresByDay["화요일"];
    case 2:
      return genresByDay["수요일"];
    case 3:
      return genresByDay["목요일"];
    case 4:
      return genresByDay["금요일"];
    case 5:
      return genresByDay["토요일"];
    case 6:
      return genresByDay["일요일"];
    default:
      return 0;
  }
};
const CinePick = () => {
  const navigate = useNavigate();
  const [genre, setGenre] = useState(""); // 장르 상태

  useEffect(() => {
    const todayGenre = getGenreByDay(); // 요일에 해당하는 장르 가져오기
    setGenre(todayGenre);
  }, []);

  // const [movieData, setMovieData] = useState(null);
  // useEffect(()=>{
  //   const fetchMovieData = async () =>{
  //     try {
  //       const response = await MovieDetailApi.getMovieDetail();
  //       setMovieData(response.data);
  //     }catch (error) {
  //       console.error("영화 데이터를 가져오는데에 실패했습니다 : ", error);
  //     }
  //   };
  // },[]);

  const movieData = [
    //리스트 -> 맵 -> 맵 // 리스트 ["추천1":{영화정보}]
    {
      recs1: {
        movieId: 5,
        movieTitle: "탑건: 매버릭",
        moviePoster:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220509_176%2F1652081912471yhg3N_JPEG%2Fmovie_image.jpg",
        movieTitleEng: "Top Gun: Maverick",
        movieRelease: "2022-06-22",
        movieGenre: "액션",
        movieNation: "미국",
        movieGrade: "12세이상관람가",
        movieRuntime: "130",
        movieScore: "9.59",
        movieDirector: "조셉 코신스키",
        movieActors:
          "톰 크루즈,마일즈 텔러,제니퍼 코넬리,존 햄,에드 해리스,글렌 포웰,제이 엘리스,그렉 타잔 데이비스,찰스 파렐,장 루이자 켈리,대니 라미레즈",
        moviePlot:
          "최고의 파일럿이자 전설적인 인물 매버릭(톰 크루즈)은 자신이 졸업한 훈련학교 교관으로 발탁된다. 그의 명성을 모르던 팀원들은 매버릭의 지시를 무시하지만 실전을 방불케 하는 상공 훈련에서 눈으로 봐도 믿기 힘든 전설적인 조종 실력에 모두가 압도된다. 매버릭의 지휘아래 견고한 팀워크를 쌓아가던 팀원들에게 국경을 뛰어넘는 위험한 임무가 주어지자 매버릭은 자신이 가르친 동료들과 함께 마지막이 될 지 모를 하늘 위 비행에 나서는데…",
        movieStills:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20191219_253%2F1576735700330webEM_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20191219_176%2F1576735700763y1rP2_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220331_153%2F1648689964919opv47_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220331_102%2F1648689986537YrqQP_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220518_121%2F1652840771393vLWSH_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220518_113%2F1652840792374Vnp3O_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220524_220%2F1653355431672Fu8QY_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220524_265%2F1653356036705pxnWc_JPEG%2Fmovie_image.jpg",
      },
    },
    {
      recs2: {
        movieId: 14,
        movieTitle: "가디언즈 오브 갤럭시: Volume 3",
        moviePoster:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230503_20%2F1683109578216k8TUH_JPEG%2Fmovie_image.jpg",
        movieTitleEng: "Guardians of the Galaxy Volume 3",
        movieRelease: "2023-05-03",
        movieGenre: "액션",
        movieNation: "미국",
        movieGrade: "12세이상관람가",
        movieRuntime: "150",
        movieScore: "9.36",
        movieDirector: "제임스 건",
        movieActors:
          "크리스 프랫,조 샐다나,데이브 바티스타,카렌 길런,폼 클레멘티에프,빈 디젤,브래들리 쿠퍼,윌 폴터",
        moviePlot:
          "‘가모라’를 잃고 슬픔에 빠져 있던 ‘피터 퀼’이 위기에 처한 은하계와 동료를 지키기 위해 다시 한번 가디언즈 팀과 힘을 모으고, 성공하지 못할 경우 그들의 마지막이 될지도 모르는 미션에 나서는 이야기",
        movieStills:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230330_43%2F1680141339524pUlAw_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230330_254%2F1680141360378AaTAF_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230330_257%2F1680141372796QQRaa_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230330_33%2F1680141384154VChwQ_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230330_173%2F1680141395277GjtVB_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230330_257%2F1680141408381o96AW_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230330_78%2F16801414194244P5B5_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230330_191%2F1680141441455SeAI5_JPEG%2Fmovie_image.jpg",
      },
    },
    {
      recs3: {
        movieId: 30,
        movieTitle: "존 윅 4",
        moviePoster:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230329_142%2F1680055399492ipxkq_JPEG%2Fmovie_image.jpg",
        movieTitleEng: "John Wick: Chapter 4",
        movieRelease: "2023-04-12",
        movieGenre: "액션",
        movieNation: "미국",
        movieGrade: "청소년관람불가",
        movieRuntime: "169",
        movieScore: "8.32",
        movieDirector: "채드 스타헬스키",
        movieActors:
          "키아누 리브스,로렌스 피쉬번,이안 맥쉐인,빌 스카스가드,견자단",
        moviePlot:
          "죽을 위기에서 살아난 ‘존 윅’은 ‘최고 회의’를 쓰러트릴 방법을 찾아낸다. 비로소 완전한 자유의 희망을 보지만, NEW 빌런 ‘그라몽 후작’과 전 세계의 최강 연합은 ‘존 윅’의 오랜 친구까지 적으로 만들어 버리고, 새로운 위기에 놓인 ‘존 윅’은 최후의 반격을 준비하는데,, 레전드 액션 블록버스터 <존 윅>의 새로운 챕터가 열린다!",
        movieStills:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230324_67%2F1679619803960PhD2B_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230324_138%2F1679619835970irG2P_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230324_213%2F1679619864478DABSX_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230324_133%2F1679619883662xnKPv_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230324_69%2F16796199041819nP27_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230324_100%2F1679619943531RUCrF_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230324_21%2F1679619927968CmuMj_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230324_155%2F1679619961634pMuAI_JPEG%2Fmovie_image.jpg",
      },
    },
    {
      recs4: {
        movieId: 73,
        movieTitle: "플래시",
        moviePoster:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230605_156%2F1685928448391kkQ2Y_JPEG%2Fmovie_image.jpg",
        movieTitleEng: "The Flash",
        movieRelease: "2023-06-14",
        movieGenre: "액션",
        movieNation: "미국",
        movieGrade: "12세이상관람가",
        movieRuntime: "144",
        movieScore: "8.08",
        movieDirector: "안드레스 무시에티",
        movieActors: "에즈라 밀러,마이클 키튼",
        moviePlot:
          "시공간이 붕괴된 세계, 차원이 다른 히어로가 온다! 빛보다 빠른 스피드, 물체 투과, 전기 방출, 자체 회복, 천재적인 두뇌까지 갓벽한 능력을 자랑하지만 존재감은 제로, 저스티스 리그에서 궂은일을 도맡아 하는 히어로 ‘플래시’. 어느 날 자신에게 빛보다 빠른 속도로 달리면 시공간 이동 능력이 있음을 알게 된 그는 ‘브루스 웨인’의 만류를 무시한 채 끔찍한 상처로 얼룩진 과거를 바꾸기 위해 시간을 역행한다. 의도치 않은 장소에 불시착한 ‘플래시’는 멀티버스 세상 속 또 다른 자신과 맞닥뜨리고 메타 휴먼이 흔적도 없이 사라지고 모든 것이 뒤엉킨 세상과 마주하게 된다. ‘플래시’는 자신이 알던 모습과 전혀 달라진 나이 들고 은퇴한 ‘배트맨’과 크립톤 행성에서 온 ‘슈퍼걸’의 도움으로 외계의 침공으로부터 시간과 차원이 붕괴된 지구를 구하려 나서는데…",
        movieStills:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230607_55%2F1686099934532d6LII_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230607_261%2F1686099957904U0Imu_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230607_162%2F1686099974441kmrgN_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230607_52%2F1686100025232pM2I1_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230607_51%2F1686100044771aWw5e_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230607_93%2F1686100153633jE3jm_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230607_291%2F1686100203387Ym4WT_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20230607_110%2F1686100222988oSSYg_JPEG%2Fmovie_image.jpg",
      },
    },
  ];
  const recsList = movieData.map((item) => {
    const key = Object.keys(item)[0]; //cjt번째 키를 가져옴
    return item[key];
  });

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
                  <ImgComp
                    style={{
                      backgroundImage: `url(${movieData[0].recs1.moviePoster})`,
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
                    navigate(`/moviesearch/{movieId}`);
                  }}
                />
              </div>
              <div className="rightSideBox">
                <div className="textBox">
                  <div className="genre">
                    <p>#{genre}</p>
                  </div>
                  <p className="story">{movieData.story}</p>
                </div>
                <div className="otherMovieBox">
                  {[...Array(3)].map((_, index) => (
                    <div className="movieCard" key={index}>
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
