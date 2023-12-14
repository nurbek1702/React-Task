import React, { useState } from "react";

const TxtInput = () => {
  const [txt, setTxt] = useState("Makers Bootcamp");
  const inputChange = (event) => {
    setTxt(event.target.value);
  };
  return (
    <div>
      <h2 style={{ color: "blue" }}>On the site: {txt}</h2>
      <input
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          textAlign: "center",
          border: "2px",
        }}
        type="text"
        value={txt}
        onChange={inputChange}
      />

      <p>Value inp: {txt}</p>
    </div>
  );
};
export default TxtInput;
