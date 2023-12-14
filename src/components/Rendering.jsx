import React, { useState } from "react";

const Rendering = () => {
  const [condition, setCondition] = useState(true);
  const toggleCondition = () => {
    setCondition(!condition);
  };
  return (
    <div>
      <div
        style={{
          backgroundColor: condition ? "violet" : "yellow",
          padding: "10px",
          width: "114px",
          borderRadius: "18px",
        }}
      >
        {condition ? (
          <p>changes color when pressed true</p>
        ) : (
          <p>changes color when pressed false</p>
        )}
      </div>

      <button
        onClick={toggleCondition}
        style={{
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
          border: "2px",
        }}
      >
        Press to change ({condition ? "true" : "false"})
      </button>
    </div>
  );
};

export default Rendering;
