import styled from "styled-components";
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserStore";
import Button from "../util/Button";
import MemberApi from "../api/MemberApi";
import useTokenAxios from "../hooks/useTokenAxios";
import paymentImg from "../images/paymentImg.png";

const PaymentComp = styled.div`
  .container {
    .paymentBox {
      width: 100%;
      padding-bottom: 100%;
      background-image: url(${paymentImg});
      background-size: cover;
      position: relative;
      text-align: center;
      .textBox {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        h3 {
          margin-bottom: 10px;
          color: white;
          span {
            font-weight: 600;
            color: white;
          }
          .yellow {
            color: #ffeb55;
          }
          @media only screen and (max-width: 768px) {
            font-size: 1.8em;
          }
          @media only screen and (max-width: 520px) {
            font-size: 1.5em;
          }
          @media only screen and (max-width: 431px) {
            font-size: 1.3em;
          }
        }
      }
      .buttonBox {
        position: absolute;
        left: 50%;
        top: 58%;
        transform: translate(-50%, -50%);
        margin-top: 30px;

        @media only screen and (max-width: 768px) {
          margin-top: 50px;
          button {
            width: 150px;
          }
        }
        @media only screen and (max-width: 431px) {
          font-size: 1em;
          button {
            width: 100px;
          }
        }
      }
    }
  }
`;

const Payment = () => {
  const navigate = useNavigate();

  const context = useContext(UserContext);
  // 로그인 / 멤버쉽 여부
  const { setIsMember } = context;

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.8.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);

    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  // 멤버십 정보 저장
  const membershipUpdate = async () => {
    const res = await MemberApi.saveMembership(true);
    console.log(res.data);
    if (res.data) {
      navigate("/payment/result");
      console.log("멤버십 저장 성공");
    } else {
      console.log("멤버십 저장 실패!");
    }
  };
  const updateMembership = useTokenAxios(membershipUpdate);

  // 회원 정보 불러오기
  const memberInfo = async () => {
    const res = await MemberApi.getMemberDetail();
    console.log("회원 상세정보: " + res.data);
    if (res.data !== null) {
    }
  };

  const onClickPayment = async () => {
    const { IMP } = window;
    IMP.init("imp78148083");

    try {
      const response = await MemberApi.getMemberDetail();

      if (response.data) {
        const { name, email, addr } = response.data;

        const data = {
          pg: "kcp.AO09C", // NHN KCP 결제 방식 사용
          pay_method: "card",
          merchant_uid: `mid_${new Date().getTime()}`,
          amount: "2900",
          name: "결제",
          buyer_name: name,
          buyer_email: email,
          buyer_addr: addr,
        };

        IMP.request_pay(data, callback);
      } else {
        console.error("회원 상세정보 불러오기 오류: ", response);
      }
    } catch (error) {
      console.error("사용자 정보 불러오기 오류:", error);
    }
  };

  const callback = (response) => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;

    if (success) {
      updateMembership();
      console.log("결제 성공");
      // 토큰
      setIsMember(true);
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  };

  return (
    <>
      <PaymentComp>
        <div className="container">
          <div className="paymentBox">
            <div className="textBox">
              <h3>
                단 <span className="yellow">2,900원</span>으로
              </h3>
              <h3>
                광고 없이 <span>쾌적한 환경</span>에서
              </h3>
              <h3>
                <span>씨네픽</span>을 즐겨보세요!
              </h3>
            </div>
            <div className="buttonBox">
              <Button
                children="결제하기"
                active={true}
                front={"white"}
                clickEvt={onClickPayment}
                color={"var(--BLACK)"}
              />
            </div>
          </div>
        </div>
      </PaymentComp>
    </>
  );
};
export default Payment;
