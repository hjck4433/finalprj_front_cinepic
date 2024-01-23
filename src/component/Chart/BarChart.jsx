import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import styled from "styled-components";

const BarChartBox = styled.div`
  padding: 30px;
  height: 400px;
  margin-right: 20px;
  border-radius: 10px;
  border: 1px solid var(--GREY);
  background-color: white;
  .chartTitle {
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 1.3rem;
    color: #333;
  }
`;

const data = [
  {
    name: "씨네크루",
    pv: 30,
    color: "var(--DARKRED)",
  },
  {
    name: "크루후기",
    pv: 15,
    color: "var(--RED)",
  },
  {
    name: "온라인",
    pv: 100,
    color: "var(--ORANGE)",
  },
  {
    name: "오프라인",
    pv: 50,
    color: "var(--DARKGREY)",
  },
];

const Example = () => {
  return (
    <BarChartBox>
      <h4 className="chartTitle">유형별 누적게시물 현황</h4>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          width={500}
          height={400}
          data={data}
          margin={{
            top: 30,
            right: 30,
            bottom: 30,
            left: 30,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          {/* <Legend /> */}
          {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="pv" barSize={20} radius={[0, 10, 10, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
          {/* <Line dataKey="uv" stroke="#ff7300" /> */}
        </ComposedChart>
      </ResponsiveContainer>
    </BarChartBox>
  );
};

export default Example;
