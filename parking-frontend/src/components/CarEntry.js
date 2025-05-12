import React, { useState } from "react";
import axios from "axios";

function CarEntry() {
  const [carNumber, setCarNumber] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://127.0.0.1:3000/entry", { carNumber });
    alert("Car entered!");
  };

  return (
    <div>
      <h3>Car Entry</h3>
      <input placeholder="Car Number" onChange={e => setCarNumber(e.target.value)} />
      <button onClick={handleSubmit}>Enter</button>
    </div>
  );
}

export default CarEntry;
