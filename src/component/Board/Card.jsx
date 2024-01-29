import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardComp = styled.section`
  padding: 0 20px;
  .card_container {
    height: 226px;
    display: flex;
    gap: 30px;
    padding: 30px 0;
    /* margin-bottom: 100px; */
    border-bottom: 1px solid var(--GREY);
    cursor: pointer;
    .img_box {
      width: 22%;
      border-radius: 5px;
      overflow: hidden;
    }
    .text_box {
      width: calc(100% - 22% - 30px - (20px - 20px));
      position: relative;
      .date {
        text-align: right;
        color: var(--GREY);
        margin-bottom: 20px;

        position: absolute;
        top: -20px;
        right: 0;
      }
      .title {
        font-weight: 700;
        font-size: 1.4em;
        margin-bottom: 20px;

        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .text_area {
        margin-bottom: 20px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .count {
        color: var(--GREY);
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .card_container {
      display: block;
      height: auto;
      padding: 10px 0;
      .img_box {
        width: 100%;
        border-radius: 0;
        margin-bottom: 10px;
      }
      .text_box {
        width: 100%;
        .date {
          font-size: 1.3em;
          margin-bottom: 10px;
          position: static;
          top: auto;
          right: auto;
        }
        .title {
          font-weight: 400;
          font-size: 1.5em;
        }
        .text_area {
          display: none;
        }
        .count {
          text-align: right;
          font-size: 1.3em;
          position: static;
          bottom: auto;
          left: auto;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
  }
`;
const ImgComp = styled.div`
  /* width: 100%; */
  height: 100%;
  padding-bottom: 70%;
  background-image: url(${(props) => props.$imgsrc});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

const Card = ({ data }) => {
  const navigate = useNavigate();
  const toDate = new Date(data.boardRegDate);
  const regDate = toDate.toISOString().split("T")[0];

  return (
    <>
      <CardComp>
        <div
          className="card_container"
          onClick={() => {
            navigate(`/board/post/${data.boardId}`);
          }}
        >
          <div className="img_box">
            <ImgComp $imgsrc={data.boardImage} />
          </div>
          <div className="text_box">
            <p className="date">{regDate}</p>
            <p className="title">{data.boardTitle}</p>
            <div className="text_area">
              {data.boardContent.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <p className="count">조회수 {data.count}</p>
          </div>
        </div>
      </CardComp>
    </>
  );
};
export default Card;
