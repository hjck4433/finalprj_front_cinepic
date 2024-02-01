import { styled } from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";
import Modal from "../../util/Modal";

const MovieListComp = styled.section`
  padding-bottom: 150px;
  .container {
    .sortArea {
      display: flex;
      font-weight: 500;
      font-size: 0.9rem;
      margin-bottom: 60px;
      justify-content: flex-end;
      li {
        position: relative;
        color: var(--GREY);
        font-size: 1.1em;
        margin-left: 24px;
        cursor: pointer;
        &.active {
          color: var(--BLACK);
        }
        &:last-child {
          &::after {
            content: "";
            width: 2px;
            height: 100%;
            background-color: var(--GREY);
            position: absolute;
            top: 1px;
            left: -11px;
            cursor: default;
          }
        }
      }
    }

    &.mapContainer {
      .mapBox {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
        @media only screen and (max-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }
  }
`;

const MovieList = ({ sortType }) => {
  const [sortBy, setSortBy] = useState("recent");

  // 회원 북마크 해제 관련
  const [hideState, setHideState] = useState({});
  const hideMovieCard = (movieId) => {
    setHideState((prevHideState) => ({
      ...prevHideState,
      [movieId]: true,
    }));
  };

  const movieData = [
    {
      movieId: 80,
      movieTitle: "3일의 휴가",
      moviePoster:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231020_277%2F1697766507454EFUvK_JPEG%2Fmovie_image.jpg",
      movieTitleEng: "Our Season",
      movieRelease: "2023-12-06",
      movieGenre: "판타지,드라마",
      movieNation: "한국",
      movieGrade: "12세이상관람가",
      movieRuntime: "105",
      movieScore: "8.21",
      movieDirector: "육상효",
      movieActors: "김해숙,신민아,강기영,황보라,박명훈",
      moviePlot:
        "“따님은 어머님을 보거나 목소리를 들을 수 없고요. 휴가 동안 좋은 기억만 담고 오시면 됩니다.” 죽은 지 3년째 되는 날, ‘복자’(김해숙)는 하늘에서 3일간의 휴가를 받아 규칙 안내를 맡은 신입 ‘가이드’(강기영)와 함께 지상에 내려온다. 미국 명문 대학교 교수인 자랑스러운 딸을 볼 생각에 설레던 마음도 잠시, 돌연 자신이 살던 시골집으로 돌아와 백반 장사를 시작한 ‘진주’(신민아)의 모습에 당황한다. 속 타는 엄마의 마음도 모르는 ‘진주’는 자신을 찾아온 단짝 ‘미진’(황보라)과 엄마의 레시피를 찾아가고, 낯익은 요리를 보자 서로의 추억이 되살아나는데…",
      movieStills:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231013_37%2F1697174605093r83CN_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231013_147%2F1697174680684HRJdf_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231013_217%2F1697174705030MtjQ3_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231017_53%2F16975064599385jHWJ_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231017_37%2F1697506476621Do6dW_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231019_232%2F1697676375535qJ7eb_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_65%2F1698107328379TkpxI_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_200%2F1698107402087lbsov_JPEG%2Fmovie_image.jpg",
    },
    {
      movieId: 691,
      movieTitle: "이별의 아침에 약속의 꽃을 장식하자",
      moviePoster:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20210507_62%2F1620351390794y05Cq_JPEG%2Fmovie_image.jpg",
      movieTitleEng: "Maquia: When the Promised Flower Blooms",
      movieRelease: "2018-07-19",
      movieGenre: "애니메이션,판타지,드라마",
      movieNation: "일본",
      movieGrade: "12세이상관람가",
      movieRuntime: "115",
      movieScore: "8.95",
      movieDirector: "오카다 마리",
      movieActors: "이와미 마나카,이리노 미유",
      moviePlot:
        "영원을 살아가는 마키아와 숲 속에 버려진 아이 아리엘, 우연히 만나 운명이 된 두사람의 단 한번 함께한 시간을 담은 네버엔딩 스토리",
      movieStills:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180621_188%2F1529546627571w5FnO_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180621_292%2F1529546627764yOaAd_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180621_129%2F1529546627931uFvGS_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180621_59%2F1529546628088CsRQ1_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180621_188%2F1529546628192lqDJ8_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180621_73%2F1529546628301AiMag_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180621_102%2F15295466284609hDuV_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20180621_288%2F152954662863960O3J_JPEG%2Fmovie_image.jpg",
    },
    {
      movieId: 216,
      movieTitle: "이빨요정 비올레타: 요정나라로 돌아갈래!",
      moviePoster:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231108_99%2F1699429225358XtP0f_JPEG%2Fmovie_image.jpg",
      movieTitleEng: "MY FAIRY TROUBLEMAKER",
      movieRelease: "2023-11-18",
      movieGenre: "애니메이션,판타지,어드벤처",
      movieNation: "독일",
      movieGrade: "전체관람가",
      movieRuntime: "80",
      movieScore: "8.2",
      movieDirector: "캐롤라인 오리거",
      movieActors: "",
      moviePlot:
        "전 세계 아이들이 기다리는 이빨요정이 온다! 아이들이 자신의 빠진 유치를 베개 밑에 숨겨놓으면 숨어 들어가서, 이빨을 가지고, 선물을 남기고, 사라지는 이빨요정. 요정학교 시험에서 매번 꼴찌만 하는 사고뭉치 이빨요정 ‘비올레타’는 자신이 특별한 이빨요정임을 증명하기 위해 몰래 인간 세상으로 향한다. 처음 와본 인간 세상에 신난 것도 잠시 이빨을 가지고 사라지려던 ‘비올레타’는 이미 오래전에 유치가 다 빠진 12살 소녀 ‘맥시’와 만나게 되고 그대로 인간 세상에 갇혀버리고 마는데… 꽃으로 변해 버리기 전에 나… 요정나라로 돌아갈 수 있을까? 이빨요정 ‘비올레타’의 요정나라로 돌아가기 위한 스펙터클한 모험이 시작된다!",
      movieStills:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_214%2F1698108313943e6u4Q_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_229%2F1698108335366WIoms_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_283%2F1698108347342byCKp_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_187%2F1698108653312Mm0aM_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_58%2F1698108670134gq2rK_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_174%2F1698108684640d2FvN_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_279%2F1698108921296sXGSG_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231024_138%2F16981089337021d1lo_JPEG%2Fmovie_image.jpg",
    },
    {
      movieId: 250,
      movieTitle: "어쩌다 공주, 닭냥이 왕자를 부탁해!",
      moviePoster:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220729_298%2F1659063263419MeRd6_JPEG%2Fmovie_image.jpg",
      movieTitleEng: "Pil's Adventures",
      movieRelease: "2022-09-08",
      movieGenre: "애니메이션,판타지,어드벤처",
      movieNation: "프랑스",
      movieGrade: "전체관람가",
      movieRuntime: "89",
      movieScore: "8.84",
      movieDirector: "줄리앙 프루네",
      movieActors: "",
      moviePlot:
        "왕좌를 노리는 마법사 트리스탄을 막기 위해 필은 엉망진창 원정대를 이끌고 마법의 저주가 걸린 숲으로 모험을 떠나는데 어쩌다 시작된 필 공주와 일곱 기사들의 대환장 판타지 어드벤처!",
      movieStills:
        "https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220812_246%2F1660267514679R9c8R_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220812_177%2F1660267536820dskGA_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220812_34%2F1660267554128Cn1Ue_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220812_119%2F1660267567860EDBEh_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220812_245%2F16602675838727BMQ8_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220812_109%2F1660267598631rElXN_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220812_4%2F1660267612198CeIQm_JPEG%2Fmovie_image.jpg|https://search.pstatic.net/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20220812_185%2F1660267626654bx58M_JPEG%2Fmovie_image.jpg",
    },
  ];

  //Modal (북마크)
  const navigate = useNavigate();
  // 여기서부터
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  // 모달 닫기
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleModal = (header, msg, type) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
  };

  return (
    <>
      <MovieListComp>
        <div className="container">
          <ul className="sortArea">
            <li
              className={sortBy === "recent" ? "active" : ""}
              onClick={() => {
                setSortBy("recent");
              }}
            >
              최신순
            </li>
            <li
              className={sortBy === "former" ? "active" : ""}
              onClick={() => {
                setSortBy("former");
              }}
            >
              과거순
            </li>
          </ul>
        </div>
        <div className="container mapContainer">
          <div className="mapBox">
            {movieData &&
              movieData.map(
                (movie) =>
                  !hideState[movie.id] && (
                    <MovieCard
                      movie={movie}
                      key={movie.id}
                      handleModal={handleModal}
                      sortType={sortType}
                      hideState={hideState}
                      setHideState={setHideState}
                      hideMovie={hideMovieCard}
                    />
                  )
              )}
          </div>
        </div>
        <Modal
          open={openModal}
          close={closeModal}
          header={modalHeader}
          children={modalMsg}
          type={modalType}
          confirm={() => {
            navigate("/login");
          }}
        />
      </MovieListComp>
    </>
  );
};
export default MovieList;
