import styled from "styled-components";

const TabPostComp = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 4px 5px 10px rgb(0, 0, 0, 0.2);


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

const TabPost = ({post}) => {


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
          <p>{post.postRegDate}</p>
        </div>
      </TabPostComp>
    </>
  );
};
export default TabPost;