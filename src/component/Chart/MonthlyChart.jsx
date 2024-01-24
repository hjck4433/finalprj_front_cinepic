import { styled } from "styled-components";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend, //범례
  ResponsiveContainer,
} from "recharts"; // 차트 관련 import 할 부분 추가

const ChartComp = styled.div`
  .chart {
    margin-right: 20px;
    padding: 20px;
    width: 800px;
    height: 100%;
    border-radius: 10px;
    border: 1px solid var(--GREY);
    background-color: white;
    .chartTitle {
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 1.3rem;
      color: #333;
    }
  }
  p {
    color: #333;
  }

  span {
    color: #333;
  }
`;
export default function Chart() {
  const data = [
    // dummy data를 활용해 차트 정상 작동 되는지 확인
    {
      name: "1월",
      monthlyUser: 50,
    },
    {
      name: "2월",
      monthlyUser: 20,
    },
    {
      name: "3월",
      monthlyUser: 40,
    },
    {
      name: "4월",
      monthlyUser: 30,
    },
    {
      name: "5월",
      monthlyUser: 15,
    },
    {
      name: "6월",
      monthlyUser: 55,
    },
    {
      name: "7월",
      monthlyUser: 60,
    },
    {
      name: "8월",
      monthlyUser: 0,
    },
    {
      name: "9월",
      monthlyUser: 70,
    },
    {
      name: "10월",
      monthlyUser: 30,
    },
    {
      name: "11월",
      monthlyUser: 10,
    },
    {
      name: "12월",
      monthlyUser: 100,
    },
  ];

  return (
    <ChartComp>
      <div className="chart">
        <h4 className="chartTitle">월별 회원가입 현황</h4>
        {
          <ResponsiveContainer
            width="100%"
            aspect={4 / 1.5} // aspect 는 width / height 의 비율을 지정
          >
            <LineChart data={data}>
              {/* X축 설정 */}
              <XAxis
                dataKey="name"
                stroke="var(--GREY)"
                tickCount={12}
                tick={{
                  fontSize: 13,
                  fill: "var(--DARKGREY)",
                }}
              />
              {/* 선 그래프 설정 */}
              <Line
                type="monotone"
                dataKey="monthlyUser"
                // 그래프 선 색 변경
                stroke="var(--RED)" // 원하는 그래프 선의 색상으로 변경
              />
              {/* Y축 설정 */}
              <YAxis
                stroke="var(--GREY)"
                // tickCount 속성을 사용하여 눈금 간격을 지정
                tickCount={6}
                // tick 속성을 사용하여 텍스트 스타일 지정
                tick={{
                  fontSize: 13,
                  fill: "var(--DARKGREY)",
                }}
              />
              {/* Tooltip이 화면에 보일 수 있도록 위치 설정 */}
              <Tooltip
                position={{ y: -20 }}
                wrapperStyle={{ pointerEvents: "all" }} // 툴팁이 다른 요소들에 가려져도 포인터 유지
                contentStyle={{
                  color: "var(--GREY)",
                  minHeight: "60px",
                  padding: "10px",
                }} // Tooltip 크기 조절
                offset={20} // 위치 조절
              />
              {/* 그리드 설정 */}
              <CartesianGrid stroke="var(--GREY)" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        }
      </div>
    </ChartComp>
  );
}
