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
      }
    }
    .pickMovieBox {
      width: 100%;
      padding: 35px 35px 100px;
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
        }
      }
    }
  }
  @media only screen and (max-width: 991px) {
    .container {
      .pickMovieBox {
        .rightSideBox {
          .textBox {
            .genre {
              font-size: 1.3em;
              padding: 0;
            }
            .story {
              font-size: 1em;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      .cineTitle {
        h3 {
          padding-left: 8%;
          font-size: 1.9em;
        }
      }
      .pickMovieBox {
        .onePickBox {
          button {
            width: 150px;
            margin-top: 30px;
          }
        }
        .rightSideBox {
          .textBox {
            padding: 0 40px;
            .genre {
              font-size: 1.4em;
              border: 1px solid red;
            }
            .story {
              font-size: 1.1em;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .container {
      .pickMovieBox {
        padding: 25px 25px 100px;
        .onePickBox {
          button {
            width: 130px;
            margin-top: 20px;
          }
        }
        .rightSideBox {
          .textBox {
            padding: 0 0 0 30px;
            .genre {
              border: 1px solid blue;
            }
            .story {
              font-size: 1.2em;
            }
          }
          .otherMovieBox {
            display: none;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
    .container {
      .pickMovieBox {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;
export default CinePickComp;
