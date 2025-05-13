import React, { useState } from "react";
import axios from "axios";

function CarEntry() {
  const [carNumber, setCarNumber] = useState("");

  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/parking", {
        carNumber,
      });

      if (res.status === 200) {
        alert("Car entered successfully!");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 400) {
        // Handle case where car already exists
        alert("A car with this number already exists!");
      } else {
        // Handle other errors
        alert("An error occurred while entering the car.");
      }
    }
  };

  return (
    <div>
      <h3>Car Entry</h3>
      <input
        placeholder="Car Number"
        onChange={(e) => setCarNumber(e.target.value)}
      />
      <button onClick={handleSubmit}>Enter</button>
    </div>
  );
}

export default CarEntry;
