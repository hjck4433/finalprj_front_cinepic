import React, { useEffect, useRef, useState } from "react";
import TheaterComp from "../component/Theater/theaterStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TheaterApi from "../api/TheaterApi";
import TheaterBannerComp from "../component/Theater/theaterBanner";

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

    // 서버에서 초기값을 불러오는 비동기 함수(theaterId 아이디 값으로 초기데이터 가져오기)
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
    fetchInitialData(); // 초기데이터 렌더링
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
        // 장소가 이동 될 때 마커를 누르면 맵 센터로 이동
        map.setCenter(
          new window.kakao.maps.LatLng(place.latitude, place.longitude)
        );
      });
      return placeMarker;
    });
    setMarkers(newMarkers);
    // 영화관 검색된 지역의 DB의 첫번째 값이 화면에 띄어지게 함
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
        {/* 영화관 배너 포스터 */}
        <TheaterBannerComp />
        <div className="container">
          <h2>📽영화관 지도 검색📽</h2>
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
                    <span className="title">상영관 </span>
                    <span>{selectedPlace.theaterName}</span>
                  </div>
                  <div>
                    <span className="title">주소 </span>
                    <span>{selectedPlace.theaterAddr}</span>
                  </div>
                  <div>
                    <span className="title">전화번호 </span>
                    <span>{selectedPlace.theaterPhone}</span>
                  </div>
                  <div>
                    <span className="title">총 좌석 수 </span>
                    <span>{selectedPlace.seats}석</span>
                  </div>
                </div>
              </div>
              <div className="basicInfo2">
                <h3>| 스크린관 정보</h3>
                <div className="content2">
                  <div>
                    <span className="title">총 스크린 수 </span>
                    <span>{selectedPlace.screens}개</span>
                  </div>
                  <div>
                    <span className="title">특별관 운영 여부 </span>
                    <span>{selectedPlace.isSpecialScreen}</span>
                  </div>
                  <div>
                    <span className="title">필름 상영관 수 </span>
                    <span>{selectedPlace.screenFilm}개</span>
                  </div>
                  <div>
                    <span className="title"> 2D 상영관 수 </span>
                    <span>{selectedPlace.screen2D}개</span>
                  </div>
                  <div>
                    <span className="title">3D 상영관 수 </span>
                    <span>{selectedPlace.screen3D}개</span>
                  </div>
                  <div>
                    <span className="title">4D 상영관 수 </span>
                    <span>{selectedPlace.screen4D}개</span>
                  </div>
                  <div>
                    <span className="title"> IMAX 상영관 수 </span>
                    <span>{selectedPlace.screenImax}개</span>
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
