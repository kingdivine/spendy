import React from "react";
import "./App.css";
import BarGraph from "././components/BarGraph";
import Select from "react-select";

const App = () => {
  const options = [
    { value: "map", label: "Where in the world do I spend?" },
    { value: "days", label: "On What days do I spend the most?" },
    { value: "stores", label: "Who is taking my money?" },
    { value: "average", label: "How much am I actually spending?" }
  ];

  return (
    <div className="App">
      <h1>Spendy</h1>
      <div>
        <Select options={options} />
      </div>
      <div>
        <BarGraph />
      </div>
    </div>
  );
};

export default App;
