import React, { useState } from "react";
import Pattern from "./components/Pattern";
import PatternSelector from "./components/PatternSelector";
import { testPatterns } from "./testPatterns";

function App() {
  const [patternPairs, setPatternPairs] = useState([
    { pattern: testPatterns.patternShort.sections[0].rows, isActive: true },
    { pattern: testPatterns.patternShort.sections[0].rows, isActive: false },
  ]);

  const addPatternPair = () => {
    setPatternPairs([
      ...patternPairs,
      {
        pattern: testPatterns.patternShort.sections[0].rows,
        isActive: false,
      },
    ]);
  };

  const removePatternPair = (index) => {
    setPatternPairs(patternPairs.filter((_, i) => i !== index));
  };

  const updatePattern = (index, newPattern) => {
    setPatternPairs((prevPairs) =>
      prevPairs.map((pair, i) =>
        i === index ? { ...pair, pattern: newPattern } : pair
      )
    );
  };

  const activatePattern = (index) => {
    setPatternPairs((prevPairs) =>
      prevPairs.map((pair, i) =>
        i === index ? { ...pair, isActive: true } : { ...pair, isActive: false }
      )
    );
  };

  return (
    <div>
      <button onClick={addPatternPair}>Add Pattern</button>
      {patternPairs.map((pair, index) => (
        <div key={index}>
          <PatternSelector
            patternsObj={testPatterns}
            setCurrentPattern={(newPattern) => updatePattern(index, newPattern)}
          />
          <Pattern pattern={pair.pattern} isActive={pair.isActive} />
          <button onClick={() => removePatternPair(index)}>Remove</button>
          <button onClick={() => activatePattern(index)}>
  {pair.isActive ? "Deactivate" : "Activate"}
</button>
        </div>
      ))}
    </div>
  );
}

export default App;
