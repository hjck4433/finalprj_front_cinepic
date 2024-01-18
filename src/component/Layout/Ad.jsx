import styled from "styled-components";
import { useState } from "react";
import Modal from "../../util/Modal";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import adImg from "../../images/ad_banner.jpg";
import logo from "../../images/cinepic_logo.png";

const AdComp = styled.section`
  width: 100%;
  background-image: url(${adImg});
  background-position: center;
  .container {
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    .adBox {
      padding: 5% 0;
      p {
        color: white;
        font-size: 1.3em;
      }
      @media only screen and (max-width: 768px) {
        padding: 20px;
        p {
          font-size: 0.9em;
        }
      }
    }
  }
  .imgWrap {
    transform: rotate(-30deg);
    opacity: 20%;
    position: absolute;
    right: 5%;
    .logoImg {
      width: 90%;
    }
  }
  &:hover {
    cursor: pointer;
    transition: 0.3s ease-in;
  }
`;

const Ad = () => {
  const navigate = useNavigate();
  const toPayment = () => {
    navigate("/Payment");
  };

  return (
    <>
      <AdComp onClick={toPayment}>
        <div className="container">
          <div className="adBox">
            <p>
              멤버십에 가입하고 광고 없는 편안한 환경에서 씨네픽을 즐겨보세요!
            </p>
          </div>
          <div className="imgWrap">
            <img className="logoImg" src={logo} alt="logoImg" />
          </div>
        </div>
      </AdComp>
    </>
  );
};
export default Ad;
