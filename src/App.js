import React, { useEffect, useState } from "react";
import "./App.css";
import dummydata from "./dummydata";
import BarGraph from "././components/BarGraph";
import Map from "./components/Map";
import AverageSpend from "./components/AverageSpend";
import WordCloud from "./components/WordCloud";
import Select from "react-select";

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const options = [
    { value: "map", label: "Where in the world do I spend?" },
    { value: "barGraph", label: "On What days do I spend the most?" },
    { value: "wordCloud", label: "Who is taking my money?" },
    { value: "averageSpend", label: "How much am I actually spending?" }
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(() => {
    const data = dummydata.transactions; //replace with api call
    setTransactions(data);
  }, []);

  const GRAPHICS = {
    map: <Map />,
    barGraph: <BarGraph transactions={transactions} />,
    wordCloud: <WordCloud transactions={transactions} />,
    averageSpend: <AverageSpend />
  };

  const handleSelectChange = option => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <h1>Spendy</h1>
      <div>
        <Select
          value={selectedOption}
          options={options}
          onChange={handleSelectChange}
        />
      </div>
      <div id="graphic-container">{GRAPHICS[selectedOption.value]}</div>
    </div>
  );
};

export default App;
