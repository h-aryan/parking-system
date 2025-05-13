import React, { useState } from "react";
import axios from "axios";

function CarUpdate() {
  const [carNumber, setCarNumber] = useState("");
  const [newInfo, setNewInfo] = useState("");

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/parking/${carNumber}`,
        {
          carNumber: newInfo,
        }
      );
      alert("Car info updated!");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to update car info.");
    }
  };

  return (
    <div>
      <h3>Update Car Info</h3>
      <input
        placeholder="Car Number"
        onChange={(e) => setCarNumber(e.target.value)}
      />
      <input
        placeholder="New Info"
        onChange={(e) => setNewInfo(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default CarUpdate;
