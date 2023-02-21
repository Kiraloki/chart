import { Bar } from "react-chartjs-2";

function BarChart({ chartData }) {
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
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
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

export default BarChart;
