import styled from "styled-components";

export const PostComp = styled.section`
  .container {
    background-color: white;
    padding: 3%;
    border-radius: 5px;

    .postTop {
      width: 100%;
      border-bottom: 1px solid var(--GREY);
      display: flex;
      align-items: center;
      padding-bottom: 30px;
      margin-top: 10px;
      margin-bottom: 50px;
      position: relative;

      .profileIcon {
        width: 15%;
        .profileImage {
          width: 100%;
          padding-bottom: 100%;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          background-color: var(--GREY);
          img {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            position: absolute;
          }
        }
        p {
          color: var(--BLACK);
          margin-top: 5px;
        }
      }
      .postTopInfo {
        width: 90%;
        margin-left: 30px;
        .categotyAndRegDate {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          .selectedCategory {
            width: 40%;
            height: 30px;
            display: flex;
            text-align: center;
            margin-bottom: 10px;

            .selectedTheme {
              width: 100px;
              height: 30px;
              background-color: var(--DARKRED);
              border-radius: 15px;
              margin-right: 5px;
              padding: 5px;

              p {
                font-weight: 600;
                color: white;
              }
            }
            .selectedPlace {
              width: 100px;
              height: 30px;
              background-color: var(--ORANGE);
              border-radius: 15px;
              padding: 5px;
              p {
                font-weight: 600;
                color: white;
              }
            }
          }
        }
        .writtenDate {
          color: var(--GREY);
        }
        h3 {
          color: var(--BLACK);
          margin-bottom: 20px;
          font-size: 1.8em;
        }
        .nickAndReviseBtn {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .nickname {
            font-size: 1.4em;
          }
        }
        .reviseBtnBox {
          display: flex;
          gap: 10px;
        }
      }
    }
    .postMain {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2%;
      .contents {
        width: 90%;
        img {
          width: 100%;
          border-radius: 10px;
        }
        .contentsText {
          width: 100%;
          margin: 40px 0;
          color: var(--BLACK);
          line-height: 1.5;
          font-size: 1.2rem;
          font-weight: 300;
          white-space: pre-wrap;
          margin-bottom: 150px;
          @media only screen and (max-width: 768px) {
            font-size: 1rem;
          }
        }
      }
    }
    // 댓글 리스트 부분
    .commentArea {
      margin-bottom: 50px;
      h3 {
        font-weight: 600;
        padding-bottom: 10px;
        border-bottom: 1px solid var(--GREY);
      }
      .commentList {
        .commentBox {
          border-bottom: 1px solid var(--GREY);
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 5px;
          .iconArea {
            width: 10%;
            .imgBox {
              width: 100%;
              padding-bottom: 100%;
              position: relative;
              border-radius: 50%;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
              }
            }
          }
          .textBox {
            width: 60%;
            padding: 2%;
            line-height: 1.4;

            .nickname {
              font-weight: 600;
              font-size: 1.4em;
              margin-bottom: 15px;
            }
            .commentText {
              font-size: 1.2em;
            }
          }
          .buttonBox {
            width: 20%;
            padding: 2%;
            .writtenDate {
              color: var(--GREY);
              margin-bottom: 20px;
              text-align: right;
            }
            .editBtnBox {
              display: flex;
              justify-content: space-between;
            }
          }
        }
      }
      // 댓글 입력창
      .textInputBox {
        width: 100%;
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: end;
        textarea {
          background-color: var(--IVORY);
          width: 100%;
          height: 120px;
          padding: 8px;
          font-size: 0.9rem;
          margin-bottom: 10px;
          border: 1px solid var(--ORANGE);
          border-radius: 10px;
          resize: none;
        }
        .postBtn {
          align-items: right;
          margin-bottom: 30px;
        }
      }
    }
    // 목록보기 버튼
    .goToListBtn {
      display: flex;
      justify-content: center;
      margin-bottom: 100px;
    }
  }

  // 미디어쿼리
  @media only screen and (max-width: 768px) {
    .container {
      .postTop {
        padding-bottom: 10px;
        margin-top: 10px;
        margin-bottom: 25px;
        .profileIcon {
          width: 25%;
        }
        p {
          color: var(--BLACK);
          font-size: 0.7rem;
        }
        .postTopInfo {
          h3 {
            margin-bottom: 5px;
          }
          .categotyAndRegDate {
            margin-bottom: 5px;
            .selectedCategory {
              margin-bottom: 0px;
            }
          }
        }
        .postTopInfo {
          .categotyAndRegDate {
            .selectedCategory {
              .selectedTheme,
              .selectedPlace {
                display: flex;
                justify-content: center;
                align-items: center;
              }
            }
          }
        }
        .postMain {
          padding: 3%;
          margin-top: 30px;
          .contents {
            width: 95%;
          }
          .contentsText {
            width: 100%;
            margin: 30px 0;
            p {
              font-size: 1rem;
            }
          }
        }
      }
      // 댓글 리스트 부분
      .commentArea {
        margin-bottom: 50px;
        h3 {
          color: var(--VIOLET);
          font-weight: 600;
        }
        .commentList {
          .commentBox {
            border-bottom: 1px solid var(--GREY);
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 5px;
            .iconArea {
              width: 10%;
              .imgBox {
                width: 100%;
                padding-bottom: 100%;
                position: relative;
                border-radius: 50%;
                overflow: hidden;
                img {
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  top: 0;
                  left: 0;
                }
              }
            }
            .textBox {
              width: 60%;
              padding: 2%;
              line-height: 1.4;

              .nickname {
                font-weight: 600;
                font-size: 1.4em;
                margin-bottom: 15px;
              }
              .commentText {
                color: black;
                font-size: 1.2em;
              }
            }
            .buttonBox {
              width: 20%;
              padding: 0%;
              .writtenDate {
                color: var(--GREY);
                margin-bottom: 20px;
                text-align: right;
              }
              .editBtnBox {
                display: flex;
                justify-content: space-between;
              }
            }
          }
        }
        // 댓글 입력창
        .textInputBox {
          margin-bottom: 20px;
        }
      }
      //목록보기 버튼
      .goToListBtn {
        margin-bottom: 50px;
      }
    }
  }
`;
