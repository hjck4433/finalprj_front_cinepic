import { styled } from "styled-components";

const TheaterComp = styled.section`
  .container {
    padding: 80px 0;
    h2 {
      text-align: center;
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
        margin-right: 140px;
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

      .infoContent {
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
            span {
              display: flex;
              flex-direction: row;
              h5 {
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
            span {
              h5 {
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
  }
`;

export default TheaterComp;
