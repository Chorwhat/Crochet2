import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Counter({ count, setCount, totalCheckboxes }) {
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
    if (event.key === "ArrowUp") {
      handlePlusClick();
    } else if (event.key === "ArrowDown") {
      handleMinusClick();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div>
      <button onClick={() => handleMinusClick()}>-</button>
      <h1>{count}</h1>
      <button onClick={() => handlePlusClick()}>+</button>
    </div>
  );
}

export default Counter;
