import React, { useState } from "react";
import axios from "axios";

function CarSearch() {
  const [carNumber, setCarNumber] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    if (!carNumber.trim()) {
      alert("Please enter a car number.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:3000/api/parking/${carNumber}`
      );
      console.log("API Response:", response.data);
      setData(response.data.data.car);
    } catch (error) {
      console.error("Error:", error);
      alert("Car not found or an error occurred.");
      setData(null);
    }
  };

  const formatTime = (isoTime) => {
    const date = new Date(isoTime);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return date.toLocaleTimeString("en-US", options);
  };

  return (
    <div>
      <h3>Search Car</h3>
      <input
        placeholder="Car Number"
        onChange={(e) => setCarNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Display the car data */}
      {data && (
        <div style={{ marginTop: "20px" }}>
          <h4>Car Details</h4>
          <p>
            <strong>Car Number:</strong> {data.carNumber}
          </p>
          <p>
            <strong>Entry Time:</strong> {formatTime(data.entryTime)}
          </p>
        </div>
      )}
    </div>
  );
}

export default CarSearch;
