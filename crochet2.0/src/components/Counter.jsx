import React from "react";
import { useEffect } from "react";

/*
A counter is simply a div with two buttons and a number
Clicking the minus button lowers the count by 1
Clicking the plus button increases the count by 1
The arrow keys also work for incrementing/decrementing the counter, if it is set as Active
The counter is used by the Pattern Component.
In a Pattern, the counter goes between 0 and the total amount of stitches (totalCheckboxes) in the Pattern rendering it
*/


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
        event.preventDefault();
        handlePlusClick();
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
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
