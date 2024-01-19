import React from "react";
import PreferComp from "../component/Preference/preferStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
        </div>
      </PreferComp>
    </>
  );
};
export default Preference;
