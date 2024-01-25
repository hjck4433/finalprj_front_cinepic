import styled from "styled-components";
import Button from "../../util/Button";
import { useEffect, useState } from "react";

const PostModalComp = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999999;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.8s;
  }
  section {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 10px;
    background-color: #fff;
    animation: modal-show 0.3s;
    overflow: hidden;

    h3 {
      font-size: 26px;
      font-weight: 900;
      margin-bottom: 20px;
    }

    .input_box {
      width: 100%;
      text-align: center;
      .file_box {
        overflow: hidden;
        p {
          margin-bottom: 20px;
        }
        img {
          height: 300px;
          margin: 20px 0;
        }
      }
      .box {
        display: flex;
        justify-content: end;
        label {
          display: inline-block;
          margin-bottom: 30px;
          padding: 10px 15px;

          border: 1px solid var(--RED);
          border-radius: 5px;
          color: var(--BLACK);
          font-weight: 300;
          font-size: 1em;
          cursor: pointer;
          .input_file {
            display: none;
          }
        }
      }

      .input_text {
        display: inline-block;
        width: 100%;
        border: none;
        border-bottom: 1px solid var(--GREY);
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-size: 1.3em;
        background-color: #fff;
      }
      textarea {
        display: inline-block;
        width: 100%;
        height: 200px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid var(--GREY);
        border-radius: 10px;
        font-size: 1.1em;
        background-color: #fff;
        resize: none;
        font-family: "Noto Sans KR", sans-serif;
        &:focus {
          outline: none;
        }
      }
    }

    .btnBox {
      display: flex;
      justify-content: right;
      button {
        width: auto;
        padding: 3px 16px;
        color: #fff;
        font-size: 1em;
        font-weight: 300;
        border-radius: 5px;

        &:last-child {
          border: 1px solid var(--RED);
          margin-left: 10px;
          color: var(--RED);
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    section {
      .input_box {
        .file_box {
          p {
            font-size: 1.3em;
          }
        }
        .box {
          label {
            font-size: 1.2em;
          }
        }
        .input_text {
          font-size: 1.4em;
        }
        textarea {
          font-size: 1.3em;
        }
      }
      .btnBox {
        button {
          width: auto;
          font-size: 1.2em;
        }
      }
    }
  }
  @media only screen and (max-width: 480px) {
  }
  @keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const TabPostModal = (props) => {
  const {
    open,
    close,
    type,
    postImage,
    moviePostId,
    postTitle,
    onChangePostTitle,
    postContent,
    onChangePostContent,
  } = props;

  // 이미지 업로드
  const [imgSrc, setImgSrc] = useState(postImage !== "" ? "" : postImage);
  const [file, setFile] = useState("");
  const [isImage, setIsImage] = useState(false);

  // 입력받은 이미지 파일 주소
  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files?.[0];

    // 선택 된 파일을 파이어베이스로
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setImgSrc(objectUrl);
      setFile(selectedFile);
      setIsImage(true);
    }
  };

  useEffect(() => {
    setImgSrc(postImage);
  }, [open]);

  // useEffect(() => {
  //   console.log("imgSrc : " + imgSrc);
  // }, [imgSrc]);

  useEffect(() => {
    console.log("modal rendered!");
  }, []);

  return (
    <>
      <PostModalComp>
        <div className={open ? "openModal modal" : "modal"}>
          <section>
            <div className="contentBox">
              <h3>씨네포스트</h3>
              <div className="input_box">
                <div className="file_box">
                  {imgSrc !== "" ? (
                    <img src={imgSrc} alt="이미지를 불러올 수 없습니다." />
                  ) : (
                    <p>이미지는 필수사항 입니다.</p>
                  )}
                </div>
                <div className="box">
                  <label htmlFor="file">
                    <input
                      type="file"
                      className="input_file"
                      id="file"
                      onChange={(e) => handleFileInputChange(e)}
                    />
                    파일 선택
                  </label>
                </div>

                <input
                  type="text"
                  defaultValue={postTitle}
                  className="input_text"
                  placeholder="제목"
                />
                <textarea
                  defaultValue={postContent}
                  placeholder="내용을 입력해 주세요"
                ></textarea>
              </div>

              <div className="btnBox">
                <Button
                  clickEvt={() => {}}
                  active={true}
                  children="작성"
                  width="80px"
                  front={"var(--RED)"}
                  back={"var(--DARKRED)"}
                />
                <Button
                  clickEvt={() => {
                    close();
                  }}
                  active={true}
                  children="취소"
                  width="80px"
                  front={"#fff"}
                  back={"#fff"}
                />
              </div>
            </div>
          </section>
        </div>
      </PostModalComp>
    </>
  );
};

export default TabPostModal;
