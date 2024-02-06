import styled from "styled-components";

export const NewPostComp = styled.section`
  background-color: white;
  .container {
    padding: 4%;
    h3 {
      color: var(--BLACK);
      font-weight: 600;
      font-size: 1.4em;
    }
    .postIntro {
      margin-bottom: 30px;
      h2 {
        margin-bottom: 40px;
      }
      p {
        margin-bottom: 5px;
        font-size: 1.4em;
      }
    }
    .postBox {
      width: 100%;
      border: 1px solid var(--GREY);
      border-radius: 10px;
      padding: 40px;
      .selectTheme {
        margin-bottom: 20px;
        h3 {
          color: var(--BLACK);
          font-weight: 600;
          font-size: 1.4em;
        }
      }
      .meetingType {
        margin-bottom: 20px;
        h3 {
          color: var(--BLACK);
          font-weight: 600;
          font-size: 1.4em;
        }
      }
      .author,
      .regDate,
      .postImage {
        display: flex;
        margin-bottom: 30px;
        h3 {
          color: var(--BLACK);
          font-weight: 600;
          font-size: 1.4em;
          width: 100px;
        }
        p {
          color: var(--BLACK);
          font-size: 1.2em;
        }
      }
      .postTitle,
      .contents {
        h3 {
          margin-bottom: 20px;
          letter-spacing: 8px;
        }
      }
      .postTitle {
        margin-bottom: 30px;
        input {
          background-color: var(--IVORY);
          border: 1px solid var(--ORANGE);
          width: 100%;
          border-radius: 10px;
          padding: 10px;
          font-size: 1.2em;
        }
      }
      .contents {
        textarea {
          background-color: var(--IVORY);
          border: 1px solid var(--ORANGE);
          width: 100%;
          border-radius: 10px;
          padding: 10px;
          font-size: 1.2em;
          resize: none;
        }
      }
      .uploadImage {
        width: 100%;
        margin-bottom: 30px;

        .imgBox {
          position: relative;
          width: 30%;
          padding-bottom: 30%;
          margin-bottom: 25px;
          border-radius: 5%;
          background-color: var(--GREY);
          overflow: hidden;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
          }
        }
        label {
          padding: 5px 10px;
          color: white;
          border-radius: 5px;
          font-size: 1em;
          font-weight: 600;
          cursor: pointer;
          background-color: var(--RED);
          transition: 0.3s ease-out;
          &:hover {
            background-color: var(--DARKRED);
          }
        }
        input {
          display: none;
        }
      }
    }
    .buttonBox {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      Button {
        margin: 20px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      padding: 5% 0%;
      .postIntro {
        .introTop {
          text-align: center;
          margin-bottom: 15px;
        }

        h2 {
          margin-bottom: 20px;
          font-size: 1.8em;
        }
      }
      .postBox {
        .contents {
          flex-direction: column;
          width: 100%;
          textarea {
            width: 100%;
            height: 200px;
          }
        }
        .uploadImage {
          .imgBox {
            position: relative;
            width: 40%;
            padding-bottom: 40%;
            margin-bottom: 25px;
            border-radius: 5%;
            background-color: var(--GREY);
            overflow: hidden;
            img {
              position: absolute;
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
`;
