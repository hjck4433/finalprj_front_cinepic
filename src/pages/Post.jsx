import { PostComp } from "../component/Post/PostStyle";
import Button from "../util/Button";
import CommentList from "../component/Post/Comment/CommentList";
import talk from "../images/talk.jpg";
import pikachu from "../images/pikachu.jpg";

const Post = () => {
  return (
    <>
      <PostComp>
        <div className="container">
          <div className="postTop">
            <div className="profileIcon">
              <div className="profileImage">
                <img
                  src={pikachu}
                  // {
                  //   boardData && boardData.memberImage
                  //     ? boardData.memberImage
                  //     : profileimg
                  // }
                  alt="memberImage"
                />
              </div>
            </div>
            <div className="postTopInfo">
              <div className="categotyAndRegDate">
                <div className="selectedCategory">
                  <div className="selectedTheme">
                    <p>
                      씨네크루
                      {/* {boardData.categoryName} */}
                    </p>
                  </div>
                  <div className="selectedPlace">
                    <p>
                      온라인
                      {/* {boardData.gatherType} */}
                    </p>
                  </div>
                </div>
                <div className="writtenDate">
                  2024.01.16
                  {/* {regDate} */}
                </div>
              </div>
              <h3>
                올해도 솔로인 나는 SOLO!! 모이자!!
                {/* {boardData.title} */}
              </h3>
              <div className="nickAndReviseBtn">
                <div className="nickname">
                  <p>빚이느는솔로</p>
                  {/* {boardData.memberAlias} */}
                </div>
                {/* 유저의 닉네임과 보드데이터의 유저닉네임이 같다면 */}
                {/* {userAlias === boardData.memberAlias && ( */}
                <div className="reviseBtnBox">
                  <Button
                    children="수정하기"
                    front="var(--GREY)"
                    back="var(--DARKRED)"
                    active={true}
                    // clickEvt={}
                    width="100%"
                    height="30px"
                  />
                  <Button
                    children="삭제하기"
                    front="var(--GREY)"
                    back="var(--DARKGREY)"
                    active={true}
                    // clickEvt={}
                    width="100%"
                    height="30px"
                  />
                </div>
                {/* )} */}
              </div>
            </div>
          </div>
          <div className="postMain">
            <div className="contents">
              <img
                src={talk}
                // {boardData.image}
                alt="contentsImg"
              />
              <div className="contentsText">
                게시글의 내용 자리입니다. 게시글의 내용 자리입니다. 게시글의
                내용 자리입니다. 게시글의 내용 자리입니다. 게시글의 내용
                자리입니다. 게시글의 내용 자리입니다. 게시글의 내용 자리입니다.
                게시글의 내용 자리입니다. 게시글의 내용 자리입니다. 게시글의
                내용 자리입니다. 게시글의 내용 자리입니다. 게시글의 내용
                자리입니다. 게시글의 내용 자리입니다. 게시글의 내용 자리입니다.
                게시글의 내용 자리입니다. 게시글의 내용 자리입니다. 게시글의
                내용 자리입니다. 게시글의 내용 자리입니다. 게시글의 내용
                자리입니다. 게시글의 내용 자리입니다. 게시글의 내용 자리입니다.
                게시글의 내용 자리입니다. 게시글의 내용 자리입니다. 게시글의
                내용 자리입니다.
                {/* {boardData.boardContent} */}
              </div>
            </div>
          </div>
          <CommentList
          // id={postId}
          // userAlias={userAlias}
          />
          <div className="goToListBtn">
            <Button
              className="listBtn"
              children="목록보기"
              active={true}
              front="var(--RED)"
              // clickEvt={}
            />
          </div>
        </div>
      </PostComp>
    </>
  );
};
export default Post;
