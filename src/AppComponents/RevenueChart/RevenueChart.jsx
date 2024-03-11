import React from "react";
import "./RevenueChart.scss";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

// const data = [
//   { name: "Jan", uv: 400, pv: 2400, amt: 2400 },
//   { name: "Feb", uv: 300, pv: 2430, amt: 2410 },
//   { name: "March", uv: 200, pv: 2450, amt: 2420 },
//   { name: "Apr", uv: 700, pv: 2460, amt: 2430 },
//   { name: "May", uv: 1100, pv: 2480, amt: 2440 },
//   { name: "June", uv: 900, pv: 2460, amt: 2450 },
//   { name: "Jul", uv: 400, pv: 2400, amt: 2400 },
//   { name: "Aug", uv: 300, pv: 2430, amt: 2410 },
//   { name: "Sep", uv: 200, pv: 2450, amt: 2420 },
//   { name: "Oct", uv: 700, pv: 2460, amt: 2430 },
//   { name: "Nov", uv: 1100, pv: 2480, amt: 2440 },
//   { name: "Dec", uv: 900, pv: 2460, amt: 2450 },
// ];

const data = [
    { name: "Jan", uv: 400, },
    { name: "Feb", uv: 500,},
    { name: "March", uv: 200, },
    { name: "Apr", uv: 700, },
  ];
const RevenueChart = () => {
  return (
    <div className="revenueChartBox">
        <div className="chartTitle">
        Renevue
        </div>
      <LineChart
        width={600}
        height={380}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="green" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
};

export default RevenueChart;
