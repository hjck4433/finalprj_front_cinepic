import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../../util/Button";
import Logo from "../../images/cinepic_logo.png";

const MembershipJoinComp = styled.section`
  width: 100%;
  /* background-image: url(${Logo}); */
  background-color: var(--DARKRED);
  background-position: center;
  margin-bottom: 80px; // 북마크와의 간격
  overflow: hidden;
  /* border: 1px solid blue; */
  .container {
    position: relative;
    display: flex;
    align-items: center;
    /* border: 1px solid green; */
    padding: 7% 0;
    .adWrap {
      /* outline: 1px solid white; */
      display: flex;
      align-items: center;
      flex-direction: column;

      p {
        font-size: 1.9rem;
        font-weight: 600;
        padding-bottom: 30px;
        white-space: nowrap;
        color: var(--IVORY);
        /* outline: 1px solid black; */
      }
      Button {
        font-size: 1.2em;
      }
    }
    .imgWrap {
      /* border: 1px solid black; */
      transform: rotate(-20deg) scale(2.7);
      opacity: 40%;
      padding: 0 35%;
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
        transform: rotate(-20deg) scale(1);
        margin: 40px;
        .img {
          width: 50%;
        }
      }
      p {
        font-size: 1.5em;
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
              back={"var(--ORANGE)"}
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
