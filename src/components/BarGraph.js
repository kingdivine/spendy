import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

const BarGraph = () => {
  const ref = useRef();
  useEffect(() => {
    const ctx = ref.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [
          {
            label: "Transactions",
            data: [86, 67, 91, 67, 78, 89, 99]
          }
        ]
      },
      options: {}
    });
  });

  return (
    <div>
      <canvas ref={ref} />
    </div>
  );
};
export default BarGraph;
