import { RadioBox } from "../component/NewPost/RadioBox";
import Button from "../util/Button";
import { NewPostComp } from "../component/NewPost/NewPostStyle";
import PostImage from "../images/PostImage.png";
import { useNavigate } from "react-router-dom";

const PostRevise = () => {
  // 게시글 상세로 이동
  const navigate = useNavigate();
  const toPostDetail = () => {
    navigate(-1);
  };
  return (
    <>
      <NewPostComp>
        <div className="container">
          <div className="postIntro">
            <h2>모임과 관련된 글을 등록해주세요.</h2>
            <p>함께 만들어가는 건전한 영화모임!</p>
            <p>후기로 추억하는 그 날의 즐거웠던 모임!</p>
          </div>
          <div className="postBox">
            <div className="selectTheme">
              <h3>주제 선택</h3>
              <RadioBox>
                <div className="themeSelectBtn">
                  <label className="cineCrew" htmlFor="crewBtn1">
                    <input
                      type="radio"
                      id="씨네크루"
                      value="씨네크루"
                      name="category"
                      // onChange={}
                    />
                    씨네크루
                  </label>
                  <label className="postCrew" htmlFor="crewBtn2">
                    <input
                      type="radio"
                      id="크루후기"
                      value="크루후기"
                      name="category"
                      // onChange={}
                    />
                    크루후기
                  </label>
                </div>
              </RadioBox>
            </div>
            <div className="meetingType">
              <h3>모임 유형</h3>
              <RadioBox>
                <div className="typeSelectBtn">
                  <label className="online" htmlFor="typeBtn1">
                    <input
                      type="radio"
                      id="온라인"
                      value="온라인"
                      name="meetingSpot"
                      // onChange={}
                    />
                    온라인
                  </label>
                  <label className="offline" htmlFor="typeBtn2">
                    <input
                      type="radio"
                      id="오프라인"
                      value="오프라인"
                      name="meetingSpot"
                      // onChange={}
                    />
                    오프라인
                  </label>
                </div>
              </RadioBox>
            </div>
            <div className="author">
              <h3>작성자</h3>
              <p>gogohamster</p>
              {/* <p>{memberInfo && memberInfo.alias}</p>  */}
            </div>
            <div className="regDate">
              <h3>작성일</h3>
              <p>2024.01.15</p>
              {/* <p>{currentDate}</p> */}
            </div>
            <div className="postTitle">
              <h3>제 목</h3>
              <textarea
                type="text"
                // value={InputTitle}
                placeholder="글의 제목을 입력해주세요."
                // onChange={}
              ></textarea>
            </div>
            <div className="postImage">
              <h3>이미지</h3>
              <div className="uploadImage">
                <div className="imgBox">
                  <img src={PostImage} alt="게시글 첨부 이미지" />
                </div>
                <label>
                  <input
                    type="file"
                    // onChange={}
                  />
                  파일 선택
                </label>
              </div>
            </div>
            <div className="contents">
              <h3>내 용</h3>
              <textarea
                type="text"
                // value={inputContents}
                placeholder="글의 내용을 입력해주세요."
                // clickEvt={}
              ></textarea>
            </div>
            <div className="buttonBox">
              <Button
                children="수정하기"
                active={true}
                front="var(--RED)"
                back="var(--DARKRED)"
                // clickEvt={}
              />
              <Button
                children="취소하기"
                active={true}
                front="var(--DARKGREY)"
                back="var(--BLACK)"
                onClick={toPostDetail}
              />
            </div>
          </div>
        </div>
      </NewPostComp>
    </>
  );
};
export default PostRevise;
