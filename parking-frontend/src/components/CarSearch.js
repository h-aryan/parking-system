import React, { useState } from "react";
import axios from "axios";

function CarSearch() {
  const [carNumber, setCarNumber] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/parking/${carNumber}`
    );
    const res = response.data;
    setData(res.data);
    if (!carNumber.trim()) {
      alert("Please enter a car number.");
      return;
    }
  };

  return (
    <div>
      <h3>Search Car</h3>
      <input
        placeholder="Car Number"
        onChange={(e) => setCarNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default CarSearch;
