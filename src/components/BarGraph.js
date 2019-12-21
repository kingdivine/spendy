import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const BarGraph = ({ transactions }) => {
  const ref = useRef();

  const getDayCount = () => {
    let dict = {};
    for (let i = 0; i < transactions.length; i++) {
      const transactionDate = new Date(transactions[i].created);
      const day = transactionDate.getDay();
      if (day in dict) {
        dict[day] = dict[day] + 1;
      } else {
        dict[day] = 0;
      }
    }
    console.log(dict);
    return dict;
  };

  useEffect(() => {
    const dayCount = getDayCount();
    const ctx = ref.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Transactions",
            data: Object.keys(dayCount).map(key => dayCount[key])
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  });

  return (
    <div>
      <canvas ref={ref} />
    </div>
  );
};
export default BarGraph;
