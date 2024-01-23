import styled from "styled-components";

const StillImgCump = styled.div`
  .still {
    width: 100%;
    height: 0;
    padding-bottom: 75%;
    position: relative;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        /* border-radius: 5px; */
        position: absolute;
        top: 0;
        left: 0;
    }
  }  
`;


const StillCutImg = ({still}) => {


    return (
      <StillImgCump>
        <div className="still">
            <img src={still} alt="stillsImg" />
        </div>
      </StillImgCump>
    );
  };
  export default StillCutImg;

