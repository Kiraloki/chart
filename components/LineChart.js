import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div
      className="chart-container"
      style={{
        marginBottom: "3rem",
        width: "50%",
        display: "block",
        marginLeft: "auto",
        marginRight: "auto"
      }}
    >
      <h2 style={{ textAlign: "center" }}>Line Chart</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: chartData.title
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;
