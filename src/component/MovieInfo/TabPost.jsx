import styled from "styled-components";
import Button from "../../util/Button";

const TabPostComp = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 4px 5px 10px rgb(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.05);
  }

  .img_box {
    width: 100%;
    position: relative;
    padding-bottom: 80%;
  }
  .text_box {
    font-size: 1.1em;
    padding: 10%;
    p:nth-child(1) {
      margin-bottom: 15%;
    }
    p:nth-child(2) {
      margin-bottom: 10%;
    }
    p:nth-child(3) {
      margin-bottom: 20%;
    }
    p:nth-child(4) {
      color: var(--GREY);
      /* margin-bottom: 20px; */
    }
    button {
      border: 1px solid var(--GREY);
      color: var(--GREY);
      transition: all 0.3s;

      position: absolute;
      left: 20px;
      bottom: 20px;

      &:hover {
        border: 1px solid var(--ORANGE);
        color: var(--ORANGE);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .text_box {
      font-size: 1.3em;
      button {
        font-size: 1em;
      }
    }
  }
`;
const PostImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$postImage});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
`;

const TabPost = ({ post, revise }) => {
  const toDate = new Date(post.postRegDate);
  const regDate = toDate.toISOString().split("T")[0];

  return (
    <>
      <TabPostComp>
        <div className="img_box">
          <PostImg $postImage={post.postImage}></PostImg>
        </div>
        <div className="text_box">
          <p>{post.alias}</p>
          <p>{post.postTitle}</p>
          <p>{post.postContent}</p>
          <p>{regDate}</p>
          <Button
            children="수정"
            front="#fff"
            back="#fff"
            width="60px"
            height="36px"
            fontSize="0.9em"
            active={true}
            clickEvt={() => {
              revise(
                post.postImage,
                post.postTitle,
                post.postContent,
                post.postId
              );
            }}
          />
        </div>
      </TabPostComp>
    </>
  );
};
export default TabPost;
