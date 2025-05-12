import React from "react";
import CarEntry from "./components/CarEntry";
import CarExit from "./components/CarExit";
import CarUpdate from "./components/CarUpdate";
import CarSearch from "./components/CarSearch";
import CarVerify from "./components/CarVerify";

function App() {
  return (
    <div>
      <h1>Parking System</h1>
      <CarEntry />
      <CarExit />
      <CarUpdate />
      <CarSearch />
      <CarVerify />
    </div>
  );
}

export default App;
