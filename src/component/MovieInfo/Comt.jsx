import styled from "styled-components";

const ComtComp = styled.div`
  padding-bottom: 5%;
  display: flex;

  .user_box {
    width: 120px;
    text-align: center;
    padding: 10px;
    .img_box { 
      width: 70%;
      padding-bottom: 70%;
      margin-bottom: 10%;
      display: inline-block;

      border-radius: 50%;
      overflow: hidden;
      position: relative;
    }
  }
  .input_box {
    width: calc(100% - 120px);
    border-radius: 10px;
    border: 1px solid var(--GREY);
    display: flex;
    align-items: center;
    font-size: 1.1em;
    .select_box {
      padding: 16px;
      min-width: 180px;
      span:nth-child(1) {
        margin: 0 40% 0 12%;
      }
      span:nth-child(2) {
        font-size: 1.5em;
        font-weight: 900;
      }
    }
    .bar {
      width: 1px;
      height: 60%;
      background-color: var(--ORANGE);
    }
    .comment {
      width: 100%;
      margin: 20px;
    }
  }
  @media only screen and (max-width:1200px){

  }
  @media only screen and (max-width:768px){
    font-size: 1.1em;
    .user_box {
			width: 80px;
			padding: 0;
      font-size: 1.1em;
		}
    .input_box {
      width: calc(100% - 80px);
			display: block;
			padding: 2%;
			text-align: right;
      .select_box {
        text-align: right;
        padding: 1% 2% 4% 2%;
        span:nth-child(1) {
          margin: 0;
          margin-right: 35px
        }
      }
      .bar {
				width: 100%;
				height: 1px;
				margin: 0 auto;
			}
      .comment {
        width: 100%;
				margin: 0;
				padding: 20px 0;
				margin-bottom: 3%;
        text-align: left;
        font-size: 1.1em;
      }
    }
  }
  
  @media only screen and (max-width:480px){

  }
`;
const ComtImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$comtImg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
`;

const Comt = ({comt}) => {

  return (
    <>
      <ComtComp>
        <div className="user_box">
          <div className="img_box">
            <ComtImg $comtImg={comt.image}></ComtImg>
          </div>
          <p>{comt.alias}</p>
        </div>

        <div className="input_box">
          <div className="select_box">
            <span>{comt.ratingField}</span>
            <span>{comt.ratingNum}</span>
          </div>
          <div className="bar"></div>
          <p className="comment">{comt.ratingText}</p>
        </div>
      </ComtComp>
    </>
  );
};
export default Comt;