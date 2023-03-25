import React, { useState } from "react";
import Counter from "./components/Counter";
import Pattern from "./components/Pattern";
import PatternSelector from "./components/PatternSelector";
import { testPatterns } from "./testPatterns";

function App() {
  const [count, setCount] = useState(0);
  const [currentPattern, setCurrentPattern] = useState(testPatterns.patternShort);
  const totalCheckboxes = currentPattern.reduce((total, row) => total + row.length, 0);

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
      <Counter
        count={count}
        setCount={handleCountChange}
        totalCheckboxes={totalCheckboxes}
      />
      <Pattern
        currentStitch={count + 1}
        pattern={currentPattern}
        numRows={currentPattern.length}
        totalChecked={count}
        onCheckboxClick={handleCheckboxClick}
      />
    </div>
  );
}

export default App;
