import { styled } from "styled-components";
import Bookmark from "./Bookmark";
import { useNavigate } from "react-router-dom";

const MovieCardComp = styled.div`
  position: relative;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.5);

  &.hide {
    display: none;
  }
  .overlay {
    position: absolute;
    border-radius: 5px;
    padding: 10% 12%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 4;
    .hoverInfo {
      width: 100%;
      height: 100%;
      .title {
        color: #fff;
        width: 100%;
        font-size: 1.2em;
        font-weight: 600;
        margin-bottom: 10%;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .plotText {
        color: #fff;
        font-size: 0.8em;
        line-height: 1.4em;
        margin-bottom: 10px;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        text-align: left;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 10;
      }

      .score {
        position: absolute;
        width: 80%;
        left: 10%;
        bottom: 5%;
        font-weight: 300;
        font-size: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid var(--GREY);
        padding-top: 10px;
        .scoreText {
          color: #fff;
          padding: 2%;
          font-size: 1.2em;
          font-weight: 600;
        }
        .scoreNum {
          padding: 0% 2%;
          font-size: 1.8rem;
          font-weight: 600;
          color: #fff;
        }
      }
    }
  }

  &:hover .overlay {
    opacity: 1;
  }

  @media only screen and (max-width: 768px) {
    .overlay {
      .hoverInfo {
        margin: 2%;

        .title {
          font-size: 1.1rem;
        }
        .plotText {
          font-size: 0.8rem;
        }
        .score {
          width: 80%;
          margin-bottom: 1%;
          .scoreText {
            font-size: 1rem;
          }
          .scoreNum {
            font-size: 1.8rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .overlay {
      .hoverInfo {
        .title {
          font-size: 1.1em;
        }
        .plotText {
          font-size: 0.76em;
          -webkit-line-clamp: 8;
        }
        .score {
          .scoreNum {
            font-size: 1.6em;
          }
        }
      }
    }
  }
`;

const ImgComp = styled.div`
  width: 100%;
  padding-bottom: 148%;
  background-image: url(${(props) => props.$imgsrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const MovieCard = ({
  movie,
  handleModal,
  sortType,
  hideState,
  setHideState,
  hideMovie,
}) => {
  const navigate = useNavigate();

  const toMovieDetail = () => {
    navigate(`/moviesearch/${movie.movieId}`);
  };

  const hide = (hideState && hideState[movie.movieId]) || false;

  // console.log(`MovieCard 렌더링 중: ${movie.id}`);

  return (
    <>
      <MovieCardComp className={hide ? "hide" : ""}>
        <ImgComp $imgsrc={movie.moviePoster} />
        <div className="overlay" onClick={toMovieDetail}>
          <div className="hoverInfo">
            <p className="title">{movie.movieTitle}</p>
            <p className="plotText">{movie.moviePlot}</p>
            <p className="score">
              <span className="scoreText">평점</span>
              <span className="scoreNum">{movie.movieScore}</span>
            </p>
          </div>
        </div>
        <Bookmark
          movieId={movie.movieId}
          handleModal={handleModal}
          hideState={hideState}
          setHideState={setHideState}
          sortType={sortType}
          hideMovie={hideMovie}
        />
      </MovieCardComp>
    </>
  );
};
export default MovieCard;
