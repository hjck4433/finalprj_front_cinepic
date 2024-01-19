import styled from "styled-components";

const CinePickComp = styled.section`
  .container {
    width: 100%;
  }
`;

const CinePick = () => {
  return (
    <>
      <CinePickComp>
        <div className="container">cinepick</div>
      </CinePickComp>
    </>
  );
};

export default CinePick;
