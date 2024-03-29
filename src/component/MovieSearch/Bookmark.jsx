import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useContext } from "react";
import { styled } from "styled-components";
import { UserContext } from "../../context/UserStore";
import BookmarkApi from "../../api/BookmarkApi";
import useTokenAxios from "../../hooks/useTokenAxios";
import PreferApi from "../../api/PreferApi";

const BookmarkComp = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  margin: 5px;
  z-index: 100;
  .BookmarkBox {
    width: 50px;
    height: 50px;
    &:hover {
      cursor: pointer;
    }
    .BookmarkAround {
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      .heart {
        font-size: 1.3rem;
        color: var(--ORANGE);
        opacity: 0.6;
        position: relative;
        z-index: 101;
        &.marked {
          opacity: 1;
        }
      }

      &:hover {
        .heart {
          opacity: 1;
          &.marked {
            opacity: 1;
          }
        }
      }
    }
  }
`;

const Bookmark = ({ movieId, handleModal, sortType, hideMovie }) => {
  const context = useContext(UserContext);
  const { loginStatus } = context;

  const [marked, setMarked] = useState(false);

  // 북마크 불러오기
  const fetchBookMark = async () => {
    const res = await BookmarkApi.isBookmark(movieId);
    if (res.data) {
      setMarked(true);
    } else {
      setMarked(false);
    }
  };
  const setBookMark = useTokenAxios(fetchBookMark);

  // 북마크 저장
  const saveBookMark = async () => {
    const res = await BookmarkApi.saveBookmark(movieId);
    if (res.data) {
      console.log("북마크 성공!");
      setBookMark();
      preferMovieSave();
    }
  };
  const bookMarkSave = useTokenAxios(saveBookMark);

  // 북마크 삭제
  const deleteBookMark = async () => {
    const res = await BookmarkApi.removeBookmark(movieId);
    if (res.data) {
      console.log("북마크 해제 성공!");
      setBookMark();
      preferMovieSave();
      if (sortType === "member") {
        hideMovie(movieId);
      }
    }
  };
  const bookMarkDelete = useTokenAxios(deleteBookMark);

  const preferMovieSave = async () => {
    const res = await PreferApi.saveRecsMovie();
    if (res.data) {
      console.log("영화추천 저장 성공");
    }
  };

  const changeHeart = () => {
    if (loginStatus) {
      marked ? bookMarkDelete() : bookMarkSave();
    } else {
      handleModal(
        "로그인",
        "로그인이 필요한 기능입니다. \n 로그인 하시겠습니까?",
        true
      );
    }
  };

  useEffect(() => {
    console.log("marked : " + marked);
  }, [marked]);

  useEffect(() => {
    if (loginStatus) {
      setBookMark();
    } else {
      setMarked(false);
    }
  }, [loginStatus]);

  return (
    <BookmarkComp>
      <div className="BookmarkBox">
        <div className="BookmarkAround" onClick={changeHeart}>
          <FontAwesomeIcon
            icon={faHeart}
            className={`heart ${marked ? "marked" : ""}`}
          />
        </div>
      </div>
    </BookmarkComp>
  );
};

export default Bookmark;
