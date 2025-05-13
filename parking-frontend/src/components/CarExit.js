import React, { useState } from "react";
import axios from "axios";

function CarExit() {
  const [carNumber, setCarNumber] = useState("");

  const handleExit = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/api/parking/${carNumber}`
      );

      if (res.status === 200) {
        alert("Car exited successfully");
      } else {
        alert("Error exiting car");
      }
    } catch (error) {
      alert("Car not found");
    }
  };

  return (
    <div>
      <h3>Car Exit</h3>
      <input
        placeholder="Car Number"
        onChange={(e) => setCarNumber(e.target.value)}
      />
      <button onClick={handleExit}>Exit</button>
    </div>
  );
}

export default CarExit;
