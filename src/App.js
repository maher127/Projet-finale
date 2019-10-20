import React from "react";
import NavbarComponent from "./components/navbar/NavbarComponent";
import "./App.css";
import Carosel from "./components/carosel/Carosel";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Carosel />
    </div>
  );
}

export default App;
