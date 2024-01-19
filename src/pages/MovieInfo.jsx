import MovieDetail from "../component/MovieInfo/MovieDetail";

const data = {
  "movieId" : 10,
  "movieActor" : "안도 사쿠라, 나가야마 에이타, 쿠로카와 소야, 히이라기 히나타, 타카하타 미츠키",
  "movieDirector" : "고레에다 히로카즈",
  "movieGenre" : "드라마,미스터리,스릴러",
  "movieNation" : "일본",
  "movieContent" : "“우리 동네에는 괴물이 산다”싱글맘 사오리(안도 사쿠라)는 아들 미나토(쿠로카와 소야)의 행동에서 이상 기운을 감지한다.용기를 내 찾아간 학교에서 상담을 진행한 날 이후 선생님과 학생들의 분위기가 심상치 않게 흐르기 시작하고.“괴물은 누구인가?”한편 사오리는 친구들로부터 따돌림을 당하고 있는 미나토의 친구 요리(히이라기 히나타)의 존재를 알게 되고 자신이 아는 아들의 모습과 사람들이 아는 아들의 모습이 다르다는 사실을 어렴풋이 깨닫는데…태풍이 몰아치던 어느 날, 아무도 몰랐던 진실이 드러난다.",
  "moviePoster" : "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231130_162%2F1701308134241kbHHU_JPEG%2Fmovie_image.jpg",
  "movieRating" : "12세관람가",
  "movieRelease" : "20231129",
  "movieRuntime" : "127",
  "movieScore" : "9.00",
  "movieStill" : "https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231102_185%2F1698877175642F39ay_JPEG%2Fmovie_image.jpg|https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231102_66%2F16988771908320RXli_JPEG%2Fmovie_image.jpg|https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231102_188%2F16988772044086s93i_JPEG%2Fmovie_image.jpg|https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231102_90%2F1698877216681BaSVN_JPEG%2Fmovie_image.jpg|https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231102_44%2F1698877229921oFSr7_JPEG%2Fmovie_image.jpg|https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231102_32%2F1698877244373T2wxz_JPEG%2Fmovie_image.jpg|https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231102_61%2F1698877258312YazW0_JPEG%2Fmovie_image.jpg|https:\/\/search.pstatic.net\/common?quality=75&direct=true&src=https%3A%2F%2Fmovie-phinf.pstatic.net%2F20231102_285%2F1698877271874D5NnN_JPEG%2Fmovie_image.jpg",
  "movieTitle" : "괴물",
  "movieTitleEng" : "Monster"
}
const MovieInfo = () => {
  return (
    <>
      <MovieDetail data = {data}/>
    </>
  );
};
export default MovieInfo;
