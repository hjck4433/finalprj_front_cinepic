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
      .inputWapper {
        text-align: right;
        margin-right: 10%;
        padding-bottom: 20px;
        cursor: pointer;
        font-size: 1.2em;
        input {
          text-align: center;
          font-size: 1em;
          width: 30%;
          border: none;
          border-bottom: 1px solid black;
        }
      }
    }
    .infoContainer {
      border: 1px solid #333333;
      padding-top: 30px;
      margin: 0 auto;
      width: 80%;

      h3 {
        margin-left: 35px;
      }
      .basicInfo1 {
        padding-top: 30px;
        h4 {
          color: #bf3131;
          margin-left: 35px;
        }
        .content1 {
          width: 90%;
          border: 1px solid #333333;
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
                background-color: #cccccc;
                position: absolute;
                top: 25%;
                right: 0;
              }
            }
          }
        }
      }
      .basicInfo2 {
        padding-top: 20px;
        h4 {
          color: #bf3131;
          margin-left: 35px;
        }
        .content2 {
          width: 90%;
          border: 1px solid #333333;
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
                background-color: #cccccc;
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
  @media only screen and (max-width: 768px) {
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
