import React from "react";
import { useEffect } from "react";

function Counter({ count, setCount, totalCheckboxes, isActive}) {
  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handlePlusClick = () => {
    if (count < totalCheckboxes) {
      setCount(count + 1);
    }
  };

  const handleKeyDown = (event) => {
    if(isActive){
      if (event.key === "ArrowUp") {
        handlePlusClick();
      } else if (event.key === "ArrowDown") {
        handleMinusClick();
      }
    }
   
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      <button onClick={() => handleMinusClick()}>-</button>
      <h1 style={{ margin: "0 1rem" }}>{count}</h1>
      <button onClick={() => handlePlusClick()}>+</button>
    </div>
  );
}

export default Counter;
