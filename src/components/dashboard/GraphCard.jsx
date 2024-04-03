import React, { useState, useEffect } from "react";
import { Chart, registerables } from "chart.js";
import "../../styles/GraphCard.scss";

function GraphCard() {
  const [chart, setChart] = useState();
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!chartData) {
      return;
    }
    if (chart) {
      chart.destroy();
    }
    Chart.register(...registerables);
    const context = document.getElementById("graph-line");

    const graphData = {
      type: "line",
      fill: { target: false },
      tension: 0.5,
    };

    setChart(
      new Chart(context, {
        data: {
          labels: chartData.labels.reverse(),
          datasets: [
            {
              label: "USA",
              data: chartData.datasets.reverse(),
              borderColor: "#6b8b16",
              ...graphData,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: true,
            },
            responsive: true,
          },
          elements: {
            point: {
              radius: 0.1,
            },
          },
        },
      })
    );
  }, [chartData]);

  const fetchData = async () => {
    const data = await fetch(
      "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
    );
    const json = await data.json();
    console.log(json.data);

    setChartData(
      json.data.reduce((acc, item) => {
        return {
          labels: [...(acc["labels"] || []), item.Year],
          datasets: [...(acc["datasets"] || []), item.Population],
        };
      }, {})
    );
  };

  return (
    <div className="graph__container">
      <div className="graph__container-head">Population in US</div>
      <canvas id="graph-line"></canvas>
    </div>
  );
}

export default GraphCard;
