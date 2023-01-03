import logo from "./immortal.ico";
import "./App.css";
import { useState } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";

function App() {
  const name = "Immortal Jamie";
  // const [name, setName] = useState("Immortal Jamie");
  // let myInterval = setInterval(() => {
  //   if (name == "Immortal Jamie") {
  //     setName("Legend Andy");
  //   } else if (name == "Legend Andy") {
  //     setName("Immortal Jamie");
  //   }
  //   return console.log(name);
  // }, 1000);

  const customStyle = {
    color: name.split(" ")[0] === "Immortal" ? "red" : "green",
    fontSize: name.split(" ")[0] === "Immortal" ? "66px" : "26px",
  };

  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
