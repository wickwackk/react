import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let name = "Immortal Jamie";
  let name1 = "Legend Andy";
  let temp;
  setInterval((temp) => {
    while (true) {
      temp = "Immortal Jamie";
      if (temp == "Immortal Jamie") {
        temp = name1;
      } else if (temp == "Legend Andy") {
        temp = name;
      }
    }
    return console.log(temp);
  }, 1000);

  const customStyle = {
    color: name.split(" ")[0] === "Immortal" ? "red" : "green",
    fontSize: name.split(" ")[0] === "Immortal" ? "66px" : "26px",
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={customStyle}>Hello {temp}</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
