import React, { useState } from "react";
import Counter from "./components/Counter";
import Pattern from "./components/Pattern";

function App() {
  const numRows = 3; // number of rows in the pattern
  const checkboxesPerRow = 10;
  const totalCheckboxes = numRows * checkboxesPerRow;

  const [count, setCount] = useState(0);

  const totalChecked = count;

  const handleCountChange = (newCount) => {
    if (newCount <= totalCheckboxes) {
      setCount(newCount);
    }
  };

  const handleCheckboxClick = (clickedCheckboxIndex) => {
    const startingIndex = checkboxesPerRow;
    const newCount = 1 + clickedCheckboxIndex + startingIndex - checkboxesPerRow;
    handleCountChange(newCount);
  };
  
  

  return (
    <div>
      <Counter
        count={count}
        setCount={handleCountChange}
        totalCheckboxes={totalCheckboxes}
      />
      <Pattern
        numRows={numRows}
        totalChecked={totalChecked}
        onCheckboxClick={handleCheckboxClick}
      />
    </div>
  );
}

export default App;
