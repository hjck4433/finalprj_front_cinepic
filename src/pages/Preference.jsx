import React, { useState, useEffect } from "react";
import PreferComp from "../component/Preference/preferStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Button from "../util/Button";
import Modal from "../util/Modal";
import { useNavigate } from "react-router-dom";

const Preference = () => {
  // 모달 관련
  const [openModal, setModalOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);
  const [modalConfirm, setModalConfirm] = useState(null);
  //Button 활성화
  const [isActive, setActive] = useState(false);
  // 장르 상태 및 최대 선택 가능한 개수 설정
  const [selectedGenres, setSelectedGenres] = useState([]);
  const maxGenres = 3; // 최대 선택 할 수 있는 개수

  const navigate = useNavigate();

  // 모달 닫기
  const closeModal = (num) => {
    setModalOpen(false);
  };
  const handleModal = (header, msg, type, num) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
    setModalConfirm(num);
  };

  const modal = () => {
    handleModal("안내", "취향선택이 등록되었습니다.", false, 0);
  };

  // 버튼 활성화
  const activate = () => {
    isActive ? setActive(false) : setActive(true);
  };

  // 체크박스 변경 시 호출되는 함수
  const handleCheckboxChange = (genre) => {
    // 이미 선택된 장르인지 확인
    const isSelected = selectedGenres.includes(genre);

    if (isSelected) {
      // 이미 선택된 경우 해제
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else {
      // 선택되지 않은 경우 추가(단 , 최대 개수를 초과하지 않아야 함)
      if (selectedGenres.length < maxGenres) {
        setSelectedGenres([...selectedGenres, genre]);
      }
    }
  };

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
              {/* 각 장르 체크박스 렌더링 */}
              {[
                "다큐멘터리",
                "역사",
                "액션",
                "로맨스",
                "애니메이션",
                "재난",
                "스릴러",
                "코미디",
                "가족",
                "추리물",
                "종교",
                "SF",
                "전쟁",
                "판타지",
                "미스테리",
                "독립",
              ].map((genre) => (
                <div className="form_checkbox_btn" key={genre}>
                  <input
                    type="checkbox"
                    id={genre}
                    checked={selectedGenres.includes(genre)}
                    onChange={() => handleCheckboxChange(genre)}
                  />
                  <label htmlFor={genre}>{genre}</label>
                </div>
              ))}
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
              clickEvt={modal}
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
          </div>
          <Modal
            open={openModal}
            close={closeModal}
            header={modalHeader}
            children={modalMsg}
            type={modalType}
            confirm={() => {
              if (modalConfirm === 0) {
                navigate("/login");
              }
            }}
          />
        </div>
      </PreferComp>
    </>
  );
};
export default Preference;
