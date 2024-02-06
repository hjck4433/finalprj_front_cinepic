import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../util/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const MyInfoComp = styled.section`
  width: 100%;
  padding-top: 80px;
  margin-bottom: 100px;
  @media only screen and (max-width: 480px) {
    margin-bottom: 0;
  }
  .container {
    padding-bottom: 80px;
    h2 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 1.8rem;
      font-weight: 800;
    }
    .wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      .userProfile {
        width: 250px;
        margin-right: 5%;
        padding-bottom: 5%;
        .profileImg {
          width: 250px;
          padding-bottom: 250px;
          position: relative;
          overflow: hidden;
          border-radius: 100%;
          background-color: var(--GREY);
          img {
            width: 100%;
            height: 100%;
            position: absolute;
          }
          svg {
            width: 80%;
            height: 80%;
            position: absolute;
            top: 20%;
            left: 10%;
            color: var(--DARKGREY);
          }
        }
      }
      .userContent {
        width: 50%;
        letter-spacing: -0.8px;

        .userBox {
          margin-bottom: 20px;
          display: grid;
          grid-template-columns: 30% 70%; //밑줄 길이 조절
          p {
            padding: 10px 0;
            letter-spacing: 0.8px;
            font-size: 18px;
            &.title {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            &:last-child {
              padding-left: 10px;
              border-bottom: 1px solid #cccccc;
              line-height: 1.2;
            }
          }
        }
      }
    }
    .buttonBox {
      display: flex;
      justify-content: end;
      /* outline: 1px solid red; */
      margin-top: 40px;
      button {
        margin-left: 50px;
        letter-spacing: -0.8px;
        word-break: keep-all;
        line-height: 1.4;
      }
    }
    @media only screen and (max-width: 768px) {
      .wrapper {
        flex-direction: column;
        align-items: center;
        width: 100%;

        .userProfile {
          width: 100%;
          margin: 0;
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
          .profileImg {
            width: 50%;
            padding-bottom: 50%;
          }
        }
        .userContent {
          width: 100%;
          justify-content: center;
          text-align: center;
          margin-right: 30px;
          .buttonBox {
            padding-right: 0;
            justify-content: center;
            margin-top: 70px;
            button {
              font-size: 1.2em;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 480px) {
      .wrapper {
        .userContent {
          padding: 0 10px;
          .userBox {
            p {
              font-size: 1.2em;
            }
          }
        }
      }
    }
  }
`;

const MyInfo = ({ memberInfo, profile }) => {
  //버튼경로
  const navigate = useNavigate();
  const tomemberpost = () => {
    navigate("/mypage/memberpost");
  };
  const toinfochange = () => {
    navigate("/mypage/infochange");
  };
  const toinfopreference = () => {
    navigate("/preference/revise");
  };

  return (
    <>
      <MyInfoComp>
        <div className="container">
          <h2>마이페이지</h2>
          <div className="wrapper">
            <div className="userProfile">
              <div className="profileImg">
                {memberInfo && memberInfo.image ? (
                  <img src={memberInfo.image} alt="프로필이미지" />
                ) : (
                  <FontAwesomeIcon icon={faUser} />
                )}
              </div>
            </div>
            <div className="userContent">
              <div className="userBox">
                <p className="title">이름</p>
                <p>{memberInfo && memberInfo.name}</p>
              </div>
              <div className="userBox">
                <p className="title">닉네임</p>
                <p>{memberInfo && memberInfo.alias}</p>
              </div>
              <div className="userBox">
                <p className="title">이메일</p>
                <p>{memberInfo && memberInfo.email}</p>
              </div>
              <div className="userBox">
                <p className="title">전화번호</p>
                <p>{memberInfo && memberInfo.phone}</p>
              </div>
              <div className="userBox">
                <p className="title">주소</p>
                <p>{memberInfo && memberInfo.addr}</p>
              </div>
              <div className="buttonBox">
                <Button
                  children="수정하기"
                  active={true}
                  height="45px"
                  width="24%"
                  fontSize=".9em"
                  clickEvt={toinfochange}
                />
                <Button
                  children="내 글 관리하기"
                  active={true}
                  height="45px"
                  width="24%"
                  fontSize=".9em"
                  clickEvt={tomemberpost}
                />
                <Button
                  children="내 취향 관리"
                  active={true}
                  height="45px"
                  width="24%"
                  fontSize=".9em"
                  clickEvt={toinfopreference}
                />
              </div>
            </div>
          </div>
        </div>
      </MyInfoComp>
    </>
  );
};

export default MyInfo;
