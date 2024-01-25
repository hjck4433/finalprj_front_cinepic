import { RadioBox } from "../component/NewPost/RadioBox";
import Button from "../util/Button";
import { NewPostComp } from "../component/NewPost/NewPostStyle";
import postImage from "../images/PostImage.png";
import { PostComp } from "../component/Post/PostStyle";
import CommentList from "../component/Post/Comment/CommentList";
import { useNavigate, useParams } from "react-router-dom";
import BoardApi from "../api/BoardApi";
import MemberApi from "../api/MemberApi";
import React, { useEffect, useState } from "react";
import useTokenAxios from "../hooks/useTokenAxios";
import { storage } from "../api/firebase";
import Modal from "../util/Modal";
import profileImg from "../images/profileImg.png";

const PostRevise = () => {
  // 게시글 상세로 이동
  const navigate = useNavigate();
  const toPostDetail = () => {
    navigate(-1);
  };

  const [boardData, setBoardData] = useState("");
  const { postId } = useParams();
  const [memberInfo, setMemberInfo] = useState(null);
  const [regDate, setRegDate] = useState("");

  const fetchMemberDetail = async () => {
    const res = await MemberApi.getMemberDetail();
    if (res.data !== null) setMemberInfo(res.data);
  };
  const getMemberDetail = useTokenAxios(fetchMemberDetail);

  const fetchBoardData = async () => {
    console.log("API 요청 전");
    const res = await BoardApi.boardDetail(postId);
    console.log("API 요청 후 : ", res);
    if (res.data !== null) {
      setBoardData(res.data);
      setSelCategory(res.data.categoryName);
      setSelGather(res.data.gatherType);
      setInputTitle(res.data.title);
      setInputContents(res.data.boardContent);
      setImgSrc(res.data.image);

      const toDate = new Date(res.data.regDate);
      setRegDate(toDate.toISOString().split("T")[0]);
    }
  };
  const getBoardData = useTokenAxios(fetchBoardData);

  useEffect(() => {
    getMemberDetail(); // 멤버 정보 가져옴
    getBoardData(); // 게시글 정보 가져옴
  }, []);

  // 카테고리(주제선택) 및 모임형식(온/오프라인)
  const [selCategory, setSelCategory] = useState("");
  const [selGather, setSelGather] = useState("");

  const CategoryChange = (e) => {
    setSelCategory(e.target.value);
  };
  const GatherChange = (e) => {
    setSelGather(e.target.value);
  };

  const [inputTitle, setInputTitle] = useState("");
  const [inputContents, setInputContents] = useState("");
  const InputTitleChange = (e) => {
    setInputTitle(e.target.value);
  };
  const InputContentsChange = (e) => {
    setInputContents(e.target.value);
  };

  // 이미지 업로드
  const [imgSrc, setImgSrc] = useState(postImage);
  const [file, setFile] = useState("");

  // 입력받은 이미지 파일 주소
  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files?.[0];

    // 선택된 파일을 파이어베이스로
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setImgSrc(objectUrl);
      setFile(selectedFile);
    }
  };

  // 모달
  const [openModal, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
    navigate(-1);
  };
  const [modalMsg, setModalMsg] = useState("");
  const [modalHeader, setModalHeader] = useState("");
  const [modalType, setModalType] = useState(null);

  const handleModal = (header, msg, type) => {
    setModalOpen(true);
    setModalHeader(header);
    setModalMsg(msg);
    setModalType(type);
  };

  // 게시글 수정
  const updatePost = async (url) => {
    const res = await BoardApi.updateBoard(
      boardData.id,
      selCategory,
      selGather,
      inputTitle,
      url,
      inputContents
    );
    if (res.data) {
      console.log("저장 성공!");
      handleModal("성공", "수정이 완료되었습니다.", false);
    }
  };

  const onSubmit = () => {
    if (imgSrc !== postImage && imgSrc !== boardData.image) {
      const storageRef = storage.ref();
      const fileRef = storageRef.child(file.name);
      fileRef.put(file).then(() => {
        console.log("저장성공!");
        fileRef.getDownloadURL().then((url) => {
          console.log("저장경로 확인 : " + url);
          console.log("url" + url);
          updatePost(url);
        });
      });
    } else {
      updatePost();
    }
  };
  const postUpdate = useTokenAxios(onSubmit);

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
                  <img src={postImage} alt="게시글 첨부 이미지" />
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
