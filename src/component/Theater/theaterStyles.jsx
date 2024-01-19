import { styled } from "styled-components";

const TheaterComp = styled.section`
  .container {
    padding: 80px 0;
    h2 {
      padding-left: 10%;
      margin-bottom: 50px;
    }
    .mapContainer {
      width: 80%;
      height: 500px;
      margin: 0 auto;
      margin-bottom: 50px;
    }
    .searchContainer {
      margin-bottom: 30px;
      height: 30px;
      .inputWapper {
        text-align: right;
        font-size: 1.2em;
        width: 80%;
        margin: 0 auto;
        position: relative;
        .searchBox {
          position: absolute;
          right: 0;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid var(--BLACK);
          input {
            text-align: left;
            font-size: 1em;
            border: none;
            outline: none;
            margin-right: 10px;
          }
          svg {
            cursor: pointer;
          }
        }
      }
    }
    .infoContainer {
      border: 1px solid var(--BLACK);
      padding-top: 30px;
      margin: 0 auto;
      width: 80%;

      h3 {
        padding-left: 5%;
        margin-bottom: 30px;
      }
      .basicInfo1 {
        margin-bottom: 40px;
        h4 {
          color: var(--RED);
          margin-left: 35px;
        }
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
      .basicInfo2 {
        h4 {
          color: var(--RED);
          margin-left: 35px;
        }
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
