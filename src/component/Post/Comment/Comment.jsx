import Button from "../../../util/Button";
import pikachu from "../../../images/pikachu.jpg";
const Comment = () => {
  return (
    <>
      <div className="commentBox">
        <div className="iconArea">
          <div className="imgBox">
            <img src={pikachu} alt="memberIcon" />
          </div>
        </div>
        <div className="textBox">
          <div className="comment">
            <p className="nickname">낭만고양이</p>
            <p className="commentText">슬픈 도시를 비춰 춤추는 작은!</p>
          </div>
        </div>
        <div className="buttonBox">
          <div className="writtenDate">2024.01.17</div>
          <div className="editBtnBox">
            <Button
              className="editBtn"
              children="수정"
              active={true}
              width="44%"
              height="30px"
              fontSize="1em"
              front="var(--RED)"
              back="var(--DARKRED)"
              // clickEvt={}
            />
            <Button
              className="deleteBtn"
              children="삭제"
              active={true}
              width="44%"
              height="30px"
              fontSize="1em"
              front="var(--GREY)"
              back="var(--DARKGREY)"
              // clickEvt={}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Comment;
