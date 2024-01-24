import React, { useState } from "react";
import styled from "styled-components";
import { PieChart, Pie, Sector } from "recharts";

const PieChartBox = styled.div`
  padding: 30px;
  border-radius: 10px;
  border: 1px solid var(--GREY);
  .chartTitle {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 1.3rem;
    color: #333;
  }
`;

const ResponsiveContainer = styled.div`
  /* margin: 20px; */
`;

const PieChartComp = styled(PieChart)`
  background-color: #fff;
  /* border: 1px solid var(--GREY); */
  border-radius: 10px;
  .chartTitle {
    font-size: 1.4em;
    color: var(--BLACK);
    text-align: center; /* 글자 중앙 정렬을 위해 추가 */
    margin-bottom: 10px; /* 필요에 따라 여백 조절 */
  }
`;
const data = [
  { name: "일반 회원", value: 400 },
  { name: "카카오 회원", value: 300 },
];

const TypeChart = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"var(--BLACK)"}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={"var(--RED)"}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="var(--BLACK)"
        fontSize={13}
      >{`${value} 명`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="var(--DARKGREY)"
        fontSize={11}
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const LoginTypeChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <PieChartBox>
      <h4 className="chartTitle">회원가입 방법 구분</h4>
      <ResponsiveContainer width="100%" height="100%">
        <PieChartComp width={250} height={250}>
          <Pie
            activeIndex={activeIndex}
            activeShape={TypeChart}
            data={data}
            cx="50%" // 가로위치
            cy="50%" // 세로위치
            innerRadius={60} // 안쪽 원
            outerRadius={80} // 바깥쪽 원
            fill="var(--DARKGREY)"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChartComp>
      </ResponsiveContainer>
    </PieChartBox>
  );
};

export default LoginTypeChart;
