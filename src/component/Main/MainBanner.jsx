import styled from "styled-components";
import mainImg from "../../images/mainImg.jpg";
const MainBannerComp = styled.section`
  width: 100%;
  height: 400px;
  background-image: url(${mainImg});
  background-size: cover;
  background-position: left;
  .container {
    width: 100%;
    .textBox {
      padding: 100px;
      h4 {
        color: var(--IVORY);
        font-size: 1.2em;
        margin-bottom: 5px;
      }
      h2 {
        color: var(--IVORY);
        font-weight: 600;
      }
    }
  }
`;

const MainBanner = () => {
  return (
    <>
      <MainBannerComp>
        <div className="container">
          <div className="textBox">
            <h4>당신만을 위한 완벽한 영화 추천</h4>
            <h2>CINEPICK</h2>
          </div>
        </div>
      </MainBannerComp>
    </>
  );
};
export default MainBanner;
