import React, { useState } from "react";
import Counter from "./components/Counter";
import Pattern from "./components/Pattern";
import { testPatterns } from "./testPatterns";


//import env from "./env";

function App() {

  //Pattern is an array of arrays, each array is a row, and each object is a stitch
  const testPattern = testPatterns.patternShort

  const numRows = testPattern.length;
 
  //numStitches is the number of objects in the pattern array
  let numStitches = 0;
  for (let i = 0; i < testPattern.length; i++) {
    numStitches += testPattern[i].length;
  }

  const totalCheckboxes = numStitches;

  const [count, setCount] = useState(0);

  const totalChecked = count;

  const handleCountChange = (newCount) => {
    if (newCount <= totalCheckboxes) {
      setCount(newCount);
    }
  };

  const handleCheckboxClick = (clickedCheckboxIndex) => {
    handleCountChange(clickedCheckboxIndex);
  };
  
  return (
    <div>
      <Counter
        count={count}
        setCount={handleCountChange}
        totalCheckboxes={totalCheckboxes}
      />
      <Pattern
        pattern={testPattern}
        numRows={numRows}
        totalChecked={totalChecked}
        onCheckboxClick={handleCheckboxClick}
      />
    </div>
  );
}

export default App;