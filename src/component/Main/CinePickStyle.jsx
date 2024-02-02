import styled from "styled-components";
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
              font-size: 1.2em;
            }
          }
        }
        @media only screen and (max-width: 500px) {
          .textBox {
            padding: 5px 5px;
            width: 400px;
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
export default CinePickComp;
