import { styled } from "styled-components";

const BookMarkListComp = styled.section`
  .container {
    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      padding-bottom: 60px;
    }
    .movielist {
      padding-bottom: 1000px;
      margin-bottom: 100px;
      outline: 1px solid red;

      @media (max-width: 768px) {
        padding-bottom: 500px;
        margin-bottom: 30px;
      }
    }
  }
`;

const BookMarkList = () => {
  return (
    <>
      <BookMarkListComp>
        <div className="container">
          <h2>BOOKMARKLIST</h2>
          <div className="movielist"></div>
        </div>
      </BookMarkListComp>
    </>
  );
};

export default BookMarkList;
