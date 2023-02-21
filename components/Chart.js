import { useState, useEffect } from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";

function Chart({ t }) {
  const [chartData, setChartData] = useState({
    labels: t.dx,

    datasets: [
      {
        label: t.t,
        data: t.dy,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ],
    title: t.t
  });

  return (
    <div className="App">
      {t.l && <LineChart chartData={chartData} />}
      {t.b && <BarChart chartData={chartData} />}
      {t.p && <PieChart chartData={chartData} />}
    </div>
  );
}
export default Chart;
