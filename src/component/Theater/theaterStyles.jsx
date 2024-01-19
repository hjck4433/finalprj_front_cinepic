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
            @media screen and (max-width: 840px) {
              font-size: 0.7em;
            }
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
      padding: 40px;
      margin: 0 auto;
      width: 80%;
      // 상영관 이름
      h3 {
        margin-bottom: 40px;
      }
      // 기본정보 박스 영역
      .basicInfo1 {
        margin-bottom: 40px;
        @media screen and (max-width: 840px) {
          margin-right: 15px;
        }
        // 기본정보 제목
        h3 {
          color: var(--RED);
          margin-bottom: 5%;
          @media screen and (max-width: 840px) {
            padding-bottom: 5px;
          }
        }
        // 박스 안에 내용
        .content1 {
          border: 1px solid var(--BLACK);
          padding: 25px;
          line-height: 40px;
          div {
            display: flex;
            flex-direction: row;
            @media screen and (max-width: 700px) {
              font-size: 0.8em;
            }
            span {
              display: inline-block;
              width: 120px;
              margin-right: 10px;
              position: relative;
              font-weight: 600;
              @media screen and (max-width: 610px) {
                margin-right: 0;
              }
              &::after {
                display: block;
                content: "";
                width: 2px;
                height: 50%;
                background-color: var(--GREY);
                position: absolute;
                top: 25%;
                right: 0;
                @media screen and (max-width: 700px) {
                  right: 20px;
                }
                @media screen and (max-width: 610px) {
                  right: 45px;
                }
              }
            }
          }
        }
      }
      // 스크린관 정보 박스 영역
      .basicInfo2 {
        @media screen and (max-width: 840px) {
          width: 97%;
        }
        // 스크린관 정보 제목
        h3 {
          color: var(--RED);
          margin-bottom: 5%;
        }
        // 스크린관 정보 내용
        .content2 {
          border: 1px solid var(--BLACK);
          display: grid;
          grid-template-columns: 31% 31% 31%;
          grid-template-rows: repeat(3fr);
          gap: 6%;
          padding: 30px;
          line-height: 37px;
          @media screen and (max-width: 840px) {
            grid-template-columns: 55% 45%;
            grid-template-rows: 25% 25% 25%;
            gap: 1px;
          }
          @media screen and (max-width: 700px) {
            padding: 20px;
            grid-template-columns: 50% 50%;
            grid-template-rows: 23% 23% 23%;
            gap: 4px;
          }
          div {
            @media screen and (max-width: 700px) {
              font-size: 0.8em;
            }
            span {
              width: 120px;
              display: inline-block;
              margin-right: 10px;
              position: relative;
              font-weight: 600;
              @media screen and (max-width: 610px) {
                margin-right: -15px;
              }
              &::after {
                display: block;
                content: "";
                width: 2px;
                height: 50%;
                background-color: var(--GREY);
                position: absolute;
                top: 25%;
                right: 0;
                @media screen and (max-width: 700px) {
                  right: 20px;
                }
                @media screen and (max-width: 610px) {
                  right: 40px;
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default TheaterComp;
