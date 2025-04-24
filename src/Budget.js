import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const BudgetChart = () => {
  const labels = ["Food", "Clothes", "Transport", "Health", "Misc"];
  const dataValues = [500, 1000, 300, 400, 69];
  const colors = ["#4F46E5", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];
  const data = {
    labels,
    datasets: [
      {
        label: "Spent",
        data: dataValues,
        borderWidth: 1,
        backgroundColor: colors,
        hoverOffset: 20,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: false,
      },
      datalabels: {
        color: "white",
        formatter: (value, context) => {
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          weight: "bold",
        },
      },
    },
  };

  return (
    <div
      className="container budget"
      style={{ width: "400px", margin: "0 auto" }}
    >
      <h2>Expenses Tracker</h2>
      <h3>
        {" "}
        Total Spent:{" ₹"}
        {dataValues.reduce((v, s) => {
          return v + s;
        })}
      </h3>
      <Doughnut className="chart" data={data} options={chartOptions} />
    </div>
  );
};

export default BudgetChart;
