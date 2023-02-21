import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }) {
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
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: chartData.title
            }
          }
        }}
      />
    </div>
  );
}

export default PieChart;
