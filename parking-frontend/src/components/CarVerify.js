import React, { useState } from "react";
import axios from "axios";

function CarVerify() {
  const [carNumber, setCarNumber] = useState("");
  const [passkey, setPasskey] = useState("");

  const handleVerify = async () => {
    const res = await axios.post("http://127.0.0.1:3000/verify", { carNumber, passkey });
    alert(res.data.message);
  };

  return (
    <div>
      <h3>Verify Car Exit</h3>
      <input placeholder="Car Number" onChange={e => setCarNumber(e.target.value)} />
      <input placeholder="Passkey" onChange={e => setPasskey(e.target.value)} />
      <button onClick={handleVerify}>Verify</button>
    </div>
  );
}

export default CarVerify;
