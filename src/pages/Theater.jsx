import React, { useEffect, useRef, useState } from "react";
import TheaterComp from "../component/Theater/theaterStyles";
import { Map, Marker } from "react-kakao-maps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Theater = ({ data }) => {
  const mapRef = useRef(null); // 지도 링크
  const [location, setLocation] = useState({ lat: 0, long: 0 }); // 위도, 경도
  const [searchQuery, setSearchQuery] = useState(""); // 검색어
  const [map, setMap] = useState(null); // 지도
  const [text, setText] = useState("");
  const [theaterData, setTheaterData] = useState("");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [list, setList] = useState([
    {
      id: "001224",
      province: "서울시",
      city: "송파구",
      theaterName: "롯데시네마 월드타워",
      theaterAddr:
        "서울특별시 송파구 신천동 29번지 신천동, 엔터동롯데시네마(5~11층)",
      theaterPhone: "1544-8855",
      seats: "4,204",
      screens: 18,
      isSpecialScreen: "있음",
      screenFilm: 0,
      screen2D: 18,
      screen3D: 6,
      screen4D: 1,
      screenImax: 1,
      latitude: "37.5139545",
      longitude: "127.1049251",
    },
  ]);

  // const dataList = list.map((list) => <div key={list.id}></div>);

  // 지도 불러오기
  useEffect(() => {
    const container = mapRef.current; // 지도를 담을 영역의 DOM 레퍼런스

    const options = {
      center: new window.kakao.maps.LatLng(37.5665, 126.978),
      level: 5,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, [location]);

  // 검색 상자
  const handleSearchInputChange = (event) => {
    console.log("검색 : ", searchQuery);
    setSearchQuery(event.target.value);
  };

  // 검색 확인 버튼 누를 시 내용 조회
  const handleSearchButtonClick = async () => {
    console.log("검색 : ", searchQuery);
    setText(searchQuery);
    // const resp = await Api.,mapSearch(searchQuery);
    // setTheaterData(resp.data);
    // console.log(resp);
    setSearchQuery(""); // 엔터 시 글 초기화
  };

  // 지도에 마커 표시하기
  // useEffect(() => {
  //   if (!theaterData) return;
  //   markers.forEach((marker) => marker.setMap(null));

  //   const newMarkers = theaterData.map((place) => {
  //     const placeMarker = new window.kakao.maps.Marker({
  //       position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
  //     });
  //     placeMarker.setMap(map); // 지도에 마커 표시
  //     window.kakao.maps.event.addListener(placeMarker, "click", () => {
  //       setSelectedPlace(place);
  //     });
  //     return placeMarker;
  //   });
  //   setMarkers(newMarkers);
  // }, [theaterData]);

  // if (!data) {
  //   return <div>Loading...</div>;
  // }
  // console.log(data);

  return (
    <>
      <TheaterComp>
        <div className="container">
          <h2>인디스페이스 - 영화예술 상영관 검색</h2>
          <div className="mapContainer" ref={mapRef}></div>
          <div className="searchContainer">
            <div className="inputWapper">
              <div className="searchBox">
                <input
                  type="text"
                  placeholder="지역 / 구 단위로 입력"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onKeyUp={(e) => {
                    if (e.key === "Enter" && searchQuery.trim() !== "") {
                      e.preventDefault(); // Enter 키의 기본 동작 방지
                      handleSearchButtonClick();
                    }
                  }}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  onClick={handleSearchButtonClick}
                />
              </div>
            </div>
          </div>
          {list &&
            list.map((list) => (
              <div className="infoContainer" key={list.id}>
                {/* CGV 청주(서문) */}
                <h3>{list.theaterName}</h3>
                <div className="basicInfo1">
                  <h3>| 기본정보</h3>
                  <div className="content1">
                    <div>
                      <span>상영관 </span>
                      {list.theaterName}
                    </div>
                    <div>
                      <span>주소 </span>
                      {list.theaterAddr}
                    </div>
                    <div>
                      <span>전화번호 </span>
                      {list.theaterPhone}
                    </div>
                    <div>
                      <span>총 좌석 수 </span>
                      {list.seats}석
                    </div>
                  </div>
                </div>
                <div className="basicInfo2">
                  <h3>| 스크린관 정보</h3>
                  <div className="content2">
                    <div>
                      <span>총 스크린 수 </span>
                      {list.screens}개
                    </div>
                    <div>
                      <span>특별관 운영 여부 </span>
                      {list.isSpecialScreen}
                    </div>
                    <div>
                      <span>필름 상영관 수 </span>
                      {list.screenFilm}개
                    </div>
                    <div>
                      <span> 2D 상영관 수 </span>
                      {list.screen2D}개
                    </div>
                    <div>
                      <span>3D 상영관 수 </span>
                      {list.screen3D}개
                    </div>
                    <div>
                      <span>4D 상영관 수 </span>
                      {list.screen4D}개
                    </div>
                    <div>
                      <span> IMAX 상영관 수 </span>
                      {list.screenImax}개
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </TheaterComp>
    </>
  );
};

export default Theater;
