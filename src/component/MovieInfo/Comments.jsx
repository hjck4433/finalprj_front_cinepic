import Comt from "./Comt";



const Comments = () => {
  const commentData = {
    postId: 1,
    movieId: 123,
    image: "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231106_145%2F169919951043106bD7_JPEG%2Fmovie_image.jpg",
    alias: "nana",
    ratingField: "OST",
    ratingNum: "8",
    ratingText: "ost가 영화 분위기를 더 살려주는거 같아요",
    commentRegDate: "2024-01-23T12:34:56Z"
  }

  return (
    <>
      <Comt comt={commentData}/>
    </>
  );
};
export default Comments;