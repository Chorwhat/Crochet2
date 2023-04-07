import React, { useState } from "react";
import Counter from "./components/Counter";
import Pattern from "./components/Pattern";
import PatternSelector from "./components/PatternSelector";
import { testPatterns } from "./testPatterns";

function App() {
  const [count, setCount] = useState(0);
  const [currentPattern, setCurrentPattern] = useState(testPatterns.patternShort.sections[0].rows);
  console.log(typeof currentPattern)
  const totalCheckboxes = Array.isArray(currentPattern) 
  ? currentPattern.reduce((total, row) => total + row.length, 0) 
  : 0;
  console.log(totalCheckboxes)

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
      <PatternSelector patternsObj={testPatterns} setCurrentPattern={setCurrentPattern} />
     
      <Pattern
        currentStitch={count + 1}
        pattern={currentPattern}
        numRows={currentPattern.length}
        totalChecked={count}
        onCheckboxClick={handleCheckboxClick}
      />

      <Counter
        count={count}
        setCount={handleCountChange}
        totalCheckboxes={totalCheckboxes}
      />
    </div>
  );
}

export default App;
