import React, { useState } from "react";
import axios from "axios";

function CarExit() {
  const [carNumber, setCarNumber] = useState("");

  const handleExit = async () => {
    const res = await axios.post("http://127.0.0.1:3000/exit", { carNumber });
    alert("Exited. Total cost: " + res.data.cost);
  };

  return (
    <div>
      <h3>Car Exit</h3>
      <input placeholder="Car Number" onChange={e => setCarNumber(e.target.value)} />
      <button onClick={handleExit}>Exit</button>
    </div>
  );
}

export default CarExit;
