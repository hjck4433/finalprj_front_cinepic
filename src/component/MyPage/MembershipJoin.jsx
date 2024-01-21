import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../util/Button";
import Logo from "../../images/cinepic_logo.png";

const MembershipJoinComp = styled.section`
  width: 100%;
  background-color: var(--RED);
  margin-bottom: 80px;
  .container {
    position: relative;
    display: flex;
    justify-content: center;
  }
  .adWrap {
    padding: 10%;
    width: 70%;
    /* outline: 1px solid red; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 1.9rem;
      font-weight: 600;
      padding-bottom: 50px;
      white-space: nowrap;
      color: var(--IVORY);
      /* outline: 1px solid black; */
    }
    Button {
      font-size: 1.2em;
    }
  }
  .imgWrap {
    padding: 5%;
  }
  @media (max-width: 768px) {
    .container {
      flex-direction: column;
    }
    .adWrap {
      width: 100%;
      padding: 10%;
      padding-top: 10px;
    }
    .imgWrap {
      display: flex;
      order: -1;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 480px) {
    .container {
      .adWrap {
        .ad {
          p {
            font-size: 1.5em;
          }
        }
      }
      .imgWrap {
        .img {
          width: 50%;
        }
      }
    }
  }
`;

const MembershipJoin = () => {
  const navigate = useNavigate();

  const toPayment = () => {
    navigate("/Payment");
  };

  return (
    <MembershipJoinComp>
      <div className="container">
        <div className="adWrap">
          <div className="ad">
            <p>단 한번의 가입으로 광고없이 쾌적하게!</p>
          </div>
          <div className="buttonBox">
            <Button
              children="가입하기"
              active={true}
              clickEvt={toPayment}
              front={"var(--IVORY)"}
              color={"var(--RED)"}
              width={"130px"}
            />
          </div>
        </div>
        <div className="imgWrap">
          <img className="LogoIcon" src={Logo} alt="LogoIcon" />
        </div>
      </div>
    </MembershipJoinComp>
  );
};

export default MembershipJoin;
