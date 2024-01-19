import styled from "styled-components";


const MovieDetailComp = styled.section`
	width: 100vw;
	height: 500px;
	background-color: var(--BLACK);
	.container {
		background-color: pink;
		display: flex;
		justify-content: center;
		align-items: center;
    gap: 5%;
		.img_box {
			width: 200px;
			height: calc(200px * 1.48);
		}
		.text_box {
			width: 50%;
			.title_box {
				font-weight: 600;
				p:nth-child(1) {
					font-size: 2.5em;
					color: #fff;
					margin-bottom: 3%;
				}
				p:nth-child(2) {
					font-size: 1.7em;
					color: var(--GREY);
					margin-bottom: 10%;
				}
			}
			.movie_info {
				font-size: 1.3em;
				font-weight: 600;
				div {
					font-weight: 600;
					margin-bottom: 5%;
				}
				span:nth-child(1) {
					display: inline-block;
					width: 20%;
				}
				span:nth-child(2) {
					display: inline-block;
				}
			}
		}
		
	}
`;
const ImgComp = styled.div`
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.$imgsrc});
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;
`;

const MovieDetail = ({data}) => { 


	return (
		<>
			<MovieDetailComp>
				<div className="container">
					<div className="img_box">
						<ImgComp $imgsrc={data.moviePoster}/>
						{/* 북마크 추가해야 됨 */}
					</div>
					<div className="text_box">
						<div className="title_box">
							<p>{data.movieTitle}</p>
							<p>{data.movieTitleEng}</p>
						</div>
						<div className="movie_info">
							<div>
								<span>개봉</span>
								<span>{data.movieRelease}</span>
							</div>
							<div>
								<span>장르</span>
								<span>{data.movieGenre}</span>
							</div>
							<div>
								<span>국가</span>
								<span>{data.movieNation}</span>
							</div>
							<div>
								<span>등급</span>
								<span>{data.movieRating}</span>
							</div>
							<div>
								<span>평점</span>
								<span>{data.movieScore}</span>
							</div>
							<div>
								<span>상영시간</span>
								<span>{data.movieRuntime}</span>
							</div>
						</div>
					</div>
	
				</div>
			</MovieDetailComp>
		</>
		
	);
};
export default MovieDetail;