import { styled } from "styled-components";

const TheaterComp = styled.section`
  // 지도 전체 감싸는 영역
  .container {
    padding: 80px 0;
    // 제목
    h2 {
      padding-left: 10%;
      margin-bottom: 50px;
    }
    // 지도 영역
    .mapContainer {
      width: 80%;
      height: 500px;
      margin: 0 auto;
      margin-bottom: 50px;
    }
    // 검색바 감싸는 영역
    .searchContainer {
      margin-bottom: 30px;
      height: 30px;
      .inputWapper {
        text-align: right;
        font-size: 1.2em;
        width: 80%;
        margin: 0 auto;
        position: relative;
        // 검색창&돋보기 아이콘
        .searchBox {
          position: absolute;
          right: 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--BLACK);
          // 검색창
          input {
            text-align: left;
            font-size: 1em;
            border: none;
            outline: none;
            margin-right: 10px;
          }
          // 아이콘
          svg {
            cursor: pointer;
          }
        }
      }
    }
    // 정보박스 전체 영역
    .infoContainer {
      border: 1px solid var(--BLACK);
      padding-top: 30px;
      margin: 0 auto;
      width: 80%;
      // 상영관 이름
      h3 {
        padding-left: 5%;
        margin-bottom: 30px;
      }
      // 기본정보 박스 영역
      .basicInfo1 {
        margin-bottom: 40px;
        // 기본정보 제목
        h4 {
          color: var(--RED);
          margin-left: 35px;
        }
        // 박스 안에 내용
        .content1 {
          width: 90%;
          border: 1px solid var(--BLACK);
          margin: 20px 35px;
          padding: 15px 30px;
          line-height: 40px;
          div {
            display: flex;
            flex-direction: row;
            span {
              display: inline-block;
              width: 120px;
              margin-right: 10px;
              position: relative;
              &::after {
                display: block;
                content: "";
                width: 2px;
                height: 50%;
                background-color: var(--GREY);
                position: absolute;
                top: 25%;
                right: 0;
              }
            }
          }
        }
      }
      // 스크린관 정보 박스 영역
      .basicInfo2 {
        // 스크린관 정보 제목
        h4 {
          color: var(--RED);
          margin-left: 35px;
        }
        // 스크린관 정보 내용
        .content2 {
          width: 90%;
          border: 1px solid var(--BLACK);
          display: grid;
          grid-template-columns: 30% 30% 30%;
          grid-template-rows: repeat(3fr);
          gap: 5%;
          margin: 25px 35px;
          padding: 20px 30px;
          line-height: 40px;
          div {
            span {
              width: 120px;
              display: inline-block;
              margin-right: 10px;
              position: relative;
              &::after {
                display: block;
                content: "";
                width: 2px;
                height: 50%;
                background-color: var(--GREY);
                position: absolute;
                top: 25%;
                right: 0;
              }
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 840px) {
    .container {
      h2 {
      }
      .searchContainer {
        .inputWapper {
          input {
            font-size: 0.7em;
          }
        }
      }
      .infoContainer {
        .basicInfo1 {
          margin-right: 15px;
          h4 {
            padding-bottom: 5px;
            .content1 {
              div {
                span {
                  width: 90px;
                }
              }
            }
          }
        }
        .basicInfo2 {
          width: 97%;
          .content2 {
            grid-template-columns: 55% 45%;
            grid-template-rows: 25% 25% 25%;
            gap: 1px;
            div {
              span {
              }
            }
          }
        }
      }
    }
  }
`;

export default TheaterComp;
