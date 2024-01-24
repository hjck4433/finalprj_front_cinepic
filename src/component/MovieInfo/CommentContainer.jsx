import styled from "styled-components";
import CommentWrite from "./CommentWrite";
import Comments from "./Comments";

const CommentContainerComp = styled.section`
  .container {
    h4 {
      font-size: 1.5em;
      margin: 4% 2%;
    }
  }
`;

const CommentContainer = () => {



  return (
    <>
      <CommentContainerComp>
        <div className="container">
          <h4>관람평</h4>
          <CommentWrite />
          <Comments />
        </div>
      </CommentContainerComp>
    </>
  );
};
export default CommentContainer;