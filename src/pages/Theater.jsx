import React, { useEffect, useRef, useState } from "react";
import TheaterComp from "../component/Theater/theaterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TheaterApi from "../api/TheaterApi";

const Theater = () => {
  const mapRef = useRef(null); // 지도 링크
  const [location, setLocation] = useState({
    lat: 37.5139545,
    long: 127.1049251,
  }); // 위도, 경도
  const [searchQuery, setSearchQuery] = useState(""); // 검색어
  const [map, setMap] = useState(null); // 지도
  const [theaterData, setTheaterData] = useState([]); // 극장 정보 불러오기
  const [selectedPlace, setSelectedPlace] = useState(null); // 선택된 장소 데이터 불러오기
  const [markers, setMarkers] = useState([]); // 마커 배열

  // 지도 불러오기
  useEffect(() => {
    const container = mapRef.current; // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new window.kakao.maps.LatLng(location.lat, location.long),
      level: 5,
    };

    const kakaoMap = new window.kakao.maps.Map(container, options);
    setMap(kakaoMap);

    // 서버에서 초기값을 불러오는 비동기 함수
    const fetchInitialData = async () => {
      try {
        const resp = await TheaterApi.theaterIdDetail();
        setTheaterData([resp.data]);
        console.log("초기 데이터 : " + resp.data.longitude);
        setSelectedPlace(resp.data);
        setLocation({ lat: resp.data.latitude, long: resp.data.longitude });
      } catch (error) {
        console.error("초기 값 정보가 아님:", error);
      }
    };
    fetchInitialData();
  }, []);

  // 검색 상자
  const handleSearchInputChange = (event) => {
    console.log("검색 : ", searchQuery);
    setSearchQuery(event.target.value);
  };

  // 검색 확인 버튼 누를 시 내용 조회
  const handleSearchButtonClick = async () => {
    console.log("검색 키워드: ", searchQuery);
    const resp = await TheaterApi.theaterAddrSearch(searchQuery);
    if (resp.data !== null) {
      setTheaterData(resp.data);
      console.log("지도정보 : " + resp.data);
      setSearchQuery(""); // 엔터 시 글 초기화
      setLocation({ lat: resp.data[0].latitude, long: resp.data[0].longitude });
    }
  };

  // 지도에 마커 표시하기
  useEffect(() => {
    if (!theaterData) return;
    markers.forEach((marker) => marker.setMap(null));

    const newMarkers = theaterData.map((place) => {
      const placeMarker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(place.latitude, place.longitude),
      });
      placeMarker.setMap(map); // 지도에 마커 표시
      window.kakao.maps.event.addListener(placeMarker, "click", () => {
        setSelectedPlace(place);

        map.setCenter(
          new window.kakao.maps.LatLng(place.latitude, place.longitude)
        );
      });
      return placeMarker;
    });
    setMarkers(newMarkers);

    if (theaterData.length > 0) {
      const firstPlace = theaterData[0];
      map.setCenter(
        new window.kakao.maps.LatLng(firstPlace.latitude, firstPlace.longitude)
      );
    }
  }, [theaterData, map]);

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
          {selectedPlace && selectedPlace !== null && (
            <div className="infoContainer" key={selectedPlace.id}>
              {/* CGV 청주(서문) */}
              <h3>{selectedPlace.theaterName}</h3>
              <div className="basicInfo1">
                <h3>| 기본정보</h3>
                <div className="content1">
                  <div>
                    <span>상영관 </span>
                    {selectedPlace.theaterName}
                  </div>
                  <div>
                    <span>주소 </span>
                    {selectedPlace.theaterAddr}
                  </div>
                  <div>
                    <span>전화번호 </span>
                    {selectedPlace.theaterPhone}
                  </div>
                  <div>
                    <span>총 좌석 수 </span>
                    {selectedPlace.seats}석
                  </div>
                </div>
              </div>
              <div className="basicInfo2">
                <h3>| 스크린관 정보</h3>
                <div className="content2">
                  <div>
                    <span>총 스크린 수 </span>
                    {selectedPlace.screens}개
                  </div>
                  <div>
                    <span>특별관 운영 여부 </span>
                    {selectedPlace.isSpecialScreen}
                  </div>
                  <div>
                    <span>필름 상영관 수 </span>
                    {selectedPlace.screenFilm}개
                  </div>
                  <div>
                    <span> 2D 상영관 수 </span>
                    {selectedPlace.screen2D}개
                  </div>
                  <div>
                    <span>3D 상영관 수 </span>
                    {selectedPlace.screen3D}개
                  </div>
                  <div>
                    <span>4D 상영관 수 </span>
                    {selectedPlace.screen4D}개
                  </div>
                  <div>
                    <span> IMAX 상영관 수 </span>
                    {selectedPlace.screenImax}개
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </TheaterComp>
    </>
  );
};

export default Theater;
