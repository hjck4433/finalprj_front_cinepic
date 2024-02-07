import { styled } from "styled-components";
import MovieList from "../MovieSearch/MovieList";

const BookMarkListComp = styled.section`
  .container {
    h2 {
      font-size: 1.8rem;
      font-weight: 600;
      padding-bottom: 80px;
      padding-left: 20px;
    }
  }
`;

const BookMarkList = () => {
  return (
    <>
      <BookMarkListComp>
        <div className="container">
          <h2>북마크</h2>
          <MovieList sortType="member" />
        </div>
      </BookMarkListComp>
    </>
  );
};

export default BookMarkList;
