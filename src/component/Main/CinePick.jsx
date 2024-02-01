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
          box-shadow: 4px 5px 10px rgb(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.3s;
          &:hover {
            transform: scale(1.05);
          }

          .label {
            width: 30%;
            position: absolute;
            top: -5px;
            z-index: 1;
            transition: transform 0.3s ease;
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
            margin-top: 10px;
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
            box-shadow: 4px 5px 10px rgb(0, 0, 0, 0.2);
            transition: transform 0.3s ease;
            cursor: pointer;
            overflow: hidden;
            transition: all 0.3s;
            &:hover {
              transform: scale(1.05);
            }

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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: drop-shadow(3px 3px 3px #cccccc);
  border-radius: 5px;
`;

const CinePick = () => {
  const navigate = useNavigate();
  const [genre, setGenre] = useState(""); // 장르 상태

  useEffect(() => {
    const todayGenre = getGenreByDay(); // 요일에 해당하는 장르 가져오기
    setGenre(todayGenre);
  }, []);

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

  //리스트 -> 맵 -> 맵 // ["추천1":{영화정보}]
  const movieData = [
    {
      recs1: {
        movieId: 208,
        movieTitle: "시맨틱 에러: 더 무비",
        moviePoster:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220727_288%2F1658911236576PrgKi_JPEG%2Fmovie_image.jpg",
        movieTitleEng: "Semantic Error",
        movieRelease: "2022-08-31",
        movieGenre: "멜로/로맨스",
        movieNation: "한국",
        movieGrade: "12세이상관람가",
        movieRuntime: "177",
        movieScore: "8.98",
        movieDirector: "김수정",
        movieActors:
          "박서함,박재찬,송지오,김노진,김원기,최수견,차재훈,김건희,김진성,정준교,허이진,박준환,이진성,경수빈,신민선,한태희,기현우,손범서,한태경,우주명,이혜민,문해민,김정민,석유진,이정혁,조성진,정주원,송명호",
        moviePlot:
          "컴공과 '아싸' 추상우의 완벽하게 짜인 일상에 에러처럼 나타난 안하무인 디자인과 '인싸' 장재영, 극과 극 청춘들의 캠퍼스 로맨스가 스크린으로 펼쳐진다!",
        movieStills:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220729_192%2F165905798451338WdU_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220729_110%2F1659058008880hi7BT_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220729_20%2F1659058021098IuKf2_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220729_175%2F1659058034485oqtcK_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220729_87%2F1659058047412DKcxi_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220729_75%2F1659058060109CcN4X_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220729_235%2F1659058072031t3Vv6_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220729_38%2F1659058084189nlkfj_JPEG%2Fmovie_image.jpg",
      },
    },
    {
      recs2: {
        movieId: 364,
        movieTitle: "만추 리마스터링",
        moviePoster:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_244%2F1697699094676BxFwI_JPEG%2Fmovie_image.jpg",
        movieTitleEng: "Late Autumn",
        movieRelease: "2011-02-17",
        movieGenre: "멜로/로맨스",
        movieNation: "한국",
        movieGrade: "15세이상관람가",
        movieRuntime: "113",
        movieScore: "8.2",
        movieDirector: "김태용",
        movieActors: "현빈,탕웨이,김서라",
        moviePlot:
          "수인번호 2537번 애나. 7년째 수감 중, 어머니의 부고로 3일간의 휴가가 허락된다. 장례식에 가기 위해 탄 시애틀행 버스, 쫓기듯 차에 탄 훈이 차비를 빌린다. 사랑이 필요한 여자들에게 에스코트 서비스를 하는 그는, 누군가로부터 도망치는 중이다. “나랑 만나서 즐겁지 않은 손님은 처음이니까, 할인해 줄게요. 오늘 하루.” 훈은 돈을 갚고 찾아가겠다며 억지로 시계를 채워주지만 애나는 무뚝뚝하게 돌아선다. 7년 만에 만난 가족도 시애틀의 거리도, 자기만 빼놓고 모든 것이 변해 버린 것 같아 낯설기만 한 애나. 돌아가 버릴까? 발길을 돌린 터미널에서 훈을 다시 만난다. 그리고 장난처럼 시작된 둘의 하루. 시애틀을 잘 아는 척 안내하는 훈과 함께, 애나는 처음으로 편안함을 느낀다. “2537번, 지금 돌아가는 길입니다…” 이름도 몰랐던 애나와 훈. 호기심이던 훈의 눈빛이 진지해지고 표정 없던 애나의 얼굴에 희미한 미소가 떠 오를 때쯤, 누군가 훈을 찾아 오고 애나가 돌아가야 할 시간도 다가오는데...",
        movieStills:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_161%2F1697691640521su7Oj_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_191%2F1697691670378HImjO_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_39%2F16976916958970tw4i_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_50%2F1697691716973i0048_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_178%2F16976917367824XCzg_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_246%2F1697691760880mk7OD_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_265%2F1697691779878VIxqV_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_153%2F1697691797713kHDb1_JPEG%2Fmovie_image.jpg",
      },
    },
    {
      recs3: {
        movieId: 380,
        movieTitle: "너와 사랑한 시간",
        moviePoster:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20221101_132%2F1667286271131i0SJw_JPEG%2Fmovie_image.jpg",
        movieTitleEng: "DON'T FORGET I LOVE YOU",
        movieRelease: "2022-11-30",
        movieGenre: "멜로/로맨스",
        movieNation: "홍콩",
        movieGrade: "12세이상관람가",
        movieRuntime: "127",
        movieScore: "8.13",
        movieDirector: "황진진",
        movieActors: "류이호",
        moviePlot:
          "잠에서 깨면 어제의 기억을 잃는 작곡가 ‘루야오’가 심리치료사 ‘쉬싱웨’와 매일 사랑에 빠져 만들어가는 잊을 수 없는 러브송, 잊으면 안 되는 러브스토리",
        movieStills:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20221104_171%2F16675396065550Ipv4_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20221104_176%2F1667539630656Il4uU_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20221104_238%2F166753964779729G0L_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20221104_90%2F16675396710715KSAP_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20221104_143%2F1667539693908Efk78_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20221104_235%2F16675397179827Ka9r_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20221104_265%2F16675397349928go4G_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20221104_132%2F1667539753313Xez6W_JPEG%2Fmovie_image.jpg",
      },
    },
    {
      recs4: {
        movieId: 438,
        movieTitle: "비긴 어게인",
        moviePoster:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20201223_260%2F1608701516437kwOuA_JPEG%2Fmovie_image.jpg",
        movieTitleEng: "Begin Again",
        movieRelease: "2014-08-13",
        movieGenre: "멜로/로맨스",
        movieNation: "미국",
        movieGrade: "15세이상관람가",
        movieRuntime: "104",
        movieScore: "9.13",
        movieDirector: "존 카니",
        movieActors:
          "키이라 나이틀리,마크 러팔로,애덤 리바인,헤일리 스테인펠드,제임스 코든,캐서린 키너",
        moviePlot:
          "싱어송라이터인 ‘그레타’(키이라 나이틀리)는 남자친구 ‘데이브’(애덤 리바인)가 메이저 음반회사와 계약을 하게 되면서 뉴욕으로 오게 된다. 그러나 행복도 잠시, 오랜 연인이자 음악적 파트너로서 함께 노래를 만들고 부르는 것이 좋았던 그레타와 달리 스타가 된 데이브의 마음은 어느새 변해버린다. 스타 음반프로듀서였지만 이제는 해고된 ‘댄’(마크 러팔로)은 미치기 일보직전 들른 뮤직바에서 그레타의 자작곡을 듣게 되고 아직 녹슬지 않은 촉을 살려 음반제작을 제안한다. 거리 밴드를 결성한 그들은 뉴욕의 거리를 스튜디오 삼아 진짜로 부르고 싶었던 노래를 만들어가는데…",
        movieStills:
          "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20140709_121%2F1404878640240W2fyk_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20140709_185%2F1404878467263Tjc0U_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20140709_208%2F1404878468561vwGYr_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20140709_275%2F1404878468770OCYHY_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20140721_186%2F1405932604499aDnOS_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20140721_75%2F1405932604748dzBku_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20140721_133%2F1405932605248xbmMM_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20140721_149%2F1405932605744Lc20n_JPEG%2Fmovie_image.jpg",
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
                <div
                  className="movieCard"
                  onClick={() => navigate(`/moviesearch/{movieId}`)}
                >
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
                  <p className="story">{movieData[0].recs1.moviePlot}</p>
                </div>
                <div className="otherMovieBox">
                  {[...Array(3)].map((_, index) => (
                    <div
                      className="movieCard"
                      key={index}
                      onClick={() => navigate(`/moviesearch/{movieId}`)}
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
