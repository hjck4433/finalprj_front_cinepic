import { styled } from "styled-components";

const ModalStyle = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show 0.8s;
  }

  section {
    width: 90%;
    max-width: 450px;
    margin: 0 auto;
    border-radius: 0.3rem;
    background-color: white;
    animation: modal-show 0.3s;
    overflow: hidden;
    header {
      position: relative;
      padding: 16px 64px 16px 16px;
      background-color: var(--VIOLET);
      font-weight: 600;
      button {
        position: absolute;
        top: 15px;
        right: 15px;
        width: 30px;
        font-size: 21px;
        font-weight: 700;
        text-align: center;
        color: #999;
        background-color: transparent;
      }
    }
    div {
      padding: 16px;
      border-bottom: 2px solid #dee2e6;
      text-align: center;
      color: #333;
      white-space: pre-line;
      line-height: 1.4;
      input {
        width: 80%;
        padding: 5px;
        outline: none;
        border: 1px solid var(--GREY);
      }
    }
    footer {
      padding: 12px 16px;
      text-align: right;
      button {
        padding: 6px 12px;
        color: #fff;
        background-color: var(--VIOLET);
        border-radius: 5px;
        font-size: 13px;
      }
    }
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

const Button = styled.button`
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  border: 0;
  width: 60px;
`;

const EditModal = (props) => {
  const { open, confirm, close, type, header, contentVal, onChangeContent } =
    props;

  return (
    <ModalStyle>
      <div className={open ? "openModal modal" : "modal"}>
        {open && (
          <section>
            <header>{header}</header>
            <div className="inputArea">
              <input
                type="text"
                defaultValue={contentVal}
                onChange={(e) => {
                  onChangeContent(e.target.value);
                }}
                placeholder={"댓글을 입력하세요"}
              />
            </div>
            <footer>
              {type && (
                <Button
                  onClick={() => {
                    confirm();
                  }}
                >
                  확인
                </Button>
              )}
              <Button onClick={close}>{type ? "취소" : "확인"}</Button>
            </footer>
          </section>
        )}
      </div>
    </ModalStyle>
  );
};
export default EditModal;
