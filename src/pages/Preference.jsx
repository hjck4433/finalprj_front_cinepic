import React from "react";
import PreferComp from "../component/Preference/preferStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../util/Button";

const Preference = () => {
  return (
    <>
      <PreferComp>
        <div className="container">
          <h2>내 영화 취향 선택하기</h2>

          <div className="searchSel selDirector">
            <h3>| 선호하는 감독(최대 3명)</h3>

            <div className="searchBar">
              <div className="search">
                <input type="text" placeholder="감독 이름을 입력하세요." />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className="selBox">
                <div className="sel director">
                  <span>봉준호</span>
                  <span>X</span>
                </div>
                <div className="sel director">
                  <span>박찬욱</span>
                  <span>X</span>
                </div>
                <div className="sel director">
                  <span>크리스토퍼 놀란</span>
                  <span>X</span>
                </div>
              </div>
            </div>
          </div>
          <div className="searchSel selActor">
            <h3>| 선호하는 배우(최대 3명)</h3>

            <div className="searchBar">
              <div className="search">
                <input type="text" placeholder="배우 이름을 입력하세요." />
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <div className="selBox">
                <div className="sel actor">
                  <span>이하늬</span>
                  <span>X</span>
                </div>
                <div className="sel actor">
                  <span>윤계상</span>
                  <span>X</span>
                </div>
                <div className="sel actor">
                  <span>강하늘</span>
                  <span>X</span>
                </div>
              </div>
            </div>
          </div>
          <div className="genderSel">
            <h3>| 성별 선택</h3>
            <div class="form_toggle">
              <div className="form_radio_btn radio_female">
                <input
                  id="radio-1"
                  type="radio"
                  name="성별"
                  value="female"
                  checked
                />
                <label htmlFor="radio-1">여성</label>
              </div>
              <div className="form_radio_btn">
                <input id="radio-2" type="radio" name="성별" value="male" />
                <label htmlFor="radio-2">남성</label>
              </div>
            </div>
          </div>
          <div className="selectGenre">
            <h3>| 영화 장르 선택(최대 3개)</h3>
            <div className="genre">
              <div className="form_checkbox_btn">
                <input type="checkbox" id="다큐멘터리" />
                <label htmlFor="다큐멘터리">다큐멘터리</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="역사" />
                <label htmlFor="역사">역사</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="선택" />
                <label htmlFor="선택">액션</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="로맨스" />
                <label htmlFor="로맨스">로맨스</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="애니메이션" />
                <label htmlFor="애니메이션">애니메이션</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="재난" />
                <label htmlFor="재난">재난</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="스릴러" />
                <label htmlFor="스릴러">스릴러</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="코미디" />
                <label htmlFor="코미디">코미디</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="가족" />
                <label htmlFor="가족">가족</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="추리물" />
                <label htmlFor="추리물">추리물</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="종교" />
                <label htmlFor="종교">종교</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="SF" />
                <label htmlFor="SF">SF</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="전쟁" />
                <label htmlFor="전쟁">전쟁</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="판타지" />
                <label htmlFor="판타지">판타지</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="미스테리" />
                <label htmlFor="미스테리">미스테리</label>
              </div>
              <div className="form_checkbox_btn">
                <input type="checkbox" name="선택" id="독립" />
                <label htmlFor="독립">독립</label>
              </div>
            </div>
          </div>
          <div className="buttonBox">
            <Button
              children="등록하기"
              front={"var(--RED)"}
              back={"var(--DARKRED)"}
              width="200px"
              height="50px"
              fontSize="20px"
              active={true}
              // clickEvt={test}
            />
            <Button
              children="취소하기"
              front="var(--GREY)"
              back="var(--DARKGREY)"
              width="200Px"
              height="50px"
              fontSize="20px"
              active={true}
              // clickEvt={test}
            />
            {/* <Button children="활성화" clickEvt={activate} active={true} /> */}
          </div>
        </div>
      </PreferComp>
    </>
  );
};
export default Preference;
