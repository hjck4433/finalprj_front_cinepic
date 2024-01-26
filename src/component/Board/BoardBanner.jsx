import { useState } from "react";
import styled from "styled-components";
import crewBanner from "../../images/CrewBanner.jpg";
import Button from "../../util/Button";

const CineBannerComp = styled.section`
  width: 100%;
  height: 550px;
  background-image: url(${crewBanner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .container {
    width: 100%;
    height: 100%;
    padding: 40px 30px;
    position: relative;
    .banner {
      ul {
        font-size: 1.3em;
        display: flex;
        gap: 20px;
        li {
          color: var(--GREY);
          cursor: pointer;
        }
        .focused_menu {
          font-weight: 600;
          color: #ead196;
        }
      }
      .title {
        position: absolute;
        top: 45%;
        left: 30px;
        .focused_title {
          opacity: 1;
          position: relative;
          transition: all 1.3s;
          h2 {
            margin-bottom: 16px;
            font-weight: 600;
            color: #fff;
          }
          p {
            margin-bottom: 40px;
            font-size: 1.2em;
            font-weight: 300;
            color: #fff;
          }
        }
        .none_title {
          opacity: 0;
          position: absolute;
          top: 0;
          left: 0;
        }
        button {
          height: 46px;
          font-weight: 300;
          font-size: 1em;
          background-color: rgba(0, 0, 0, 0);
          border: 1px solid #fff;
          &:hover {
            background-color: rgba(0, 0, 0, 0.2);
            border: none;
          }
        }
      }
    }
    .filter {
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      padding: 30px 20px;
      .banner {
        ul {
          font-size: 1.6em;
        }
        .title {
          top: auto;
          left: 30px;
          bottom: 30px;
          .focused_title {
            h2 {
              font-size: 3em;
            }
            p {
              font-size: 1.4em;
            }
          }
          button {
            height: 40px;
            font-size: 1.2em;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
  }
`;

const BoardBanner = () => {
  const [currentTab, setTab] = useState(0);

  return (
    <>
      <CineBannerComp>
        <div className="container">
          <div className="banner">
            <ul>
              <li
                onClick={() => {
                  setTab(0);
                }}
                className={currentTab === 0 ? "focused_menu" : ""}
              >
                씨네크루
              </li>
              <li
                onClick={() => {
                  setTab(1);
                }}
                className={currentTab === 1 ? "focused_menu" : ""}
              >
                크루후기
              </li>
            </ul>
            <div className="title">
              <div
                className={currentTab === 0 ? "focused_title" : "none_title"}
              >
                <h2>씨네크루</h2>
                <p>씨네크루, 새로운 친구와의 만남의 장소</p>
              </div>
              <div
                className={currentTab === 1 ? "focused_title" : "none_title"}
              >
                <h2>크루후기</h2>
                <p>새로운 친구와의 경험을 공유하세요</p>
              </div>
              <Button
                clickEvt={() => {}}
                active={true}
                children="글 작성하기"
                width="110px"
                // front={"#fff"}
                // back={"#fff"}
              />
            </div>
          </div>
          <div className="filter"></div>
        </div>
      </CineBannerComp>
    </>
  );
};
export default BoardBanner;
