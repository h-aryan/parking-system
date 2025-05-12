import React, { useState } from "react";
import axios from "axios";

function CarUpdate() {
  const [carNumber, setCarNumber] = useState("");
  const [newInfo, setNewInfo] = useState("");

  const handleUpdate = async () => {
    await axios.put("http://127.0.0.1:3000/update", { carNumber, newInfo });
    alert("Car info updated!");
  };

  return (
    <div>
      <h3>Update Car Info</h3>
      <input placeholder="Car Number" onChange={e => setCarNumber(e.target.value)} />
      <input placeholder="New Info" onChange={e => setNewInfo(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default CarUpdate;
