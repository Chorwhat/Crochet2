import React from "react";

function PatternSelector(props) {
  const { patternsObj, setCurrentPattern } = props;
  const patterns = Object.values(patternsObj);

  const handleChange = (event) => {
    const patternIndex = parseInt(event.target.value);
    setCurrentPattern(patterns[patternIndex]);
  };

  return (
    <div>
      <label htmlFor="pattern-selector">Select a pattern:</label>
      <select id="pattern-selector" onChange={handleChange}>
        {patterns.map((pattern, index) => (
          <option key={index} value={index}>
            {`Pattern ${index + 1}`}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PatternSelector;
