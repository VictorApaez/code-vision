import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Complexity() {
  const worstCase = [
    { x: 1, y: 1 },
    { x: 2, y: 2 },
    { x: 3, y: 4 },
    { x: 4, y: 8 },
    { x: 5, y: 16 },
    { x: 6, y: 32 },
    { x: 7, y: 64 },
    { x: 8, y: 128 },
  ];

  const averageCase = [];
  for (let x = 1; x <= 8; x++) {
    averageCase.push({ x: x, y: x * Math.log2(x) });
  }

  const lineAnimation = {
    duration: 2000,
    easing: "backOut",
  };

  return (
    <>
      <h2 className="font-bold text-xl mb-4">Time & Space Complexity</h2>
      <ResponsiveContainer width="100%" height="80%" className="-ml-5">
        <LineChart>
          <XAxis dataKey="x" />
          <YAxis />

          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line
            type="monotone"
            data={worstCase}
            dataKey="y"
            stroke="#d15134"
            strokeWidth={4}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
