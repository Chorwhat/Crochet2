import React, { useState } from "react";

function PatternSelector(props) {
  const { patternsObj, setCurrentPattern } = props;
  const patterns = Object.values(patternsObj);
  const [selectedPatternIndex, setSelectedPatternIndex] = useState(0);
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);

  const handlePatternChange = (event) => {
    const patternIndex = parseInt(event.target.value);
    setSelectedPatternIndex(patternIndex);
    setSelectedSectionIndex(0);
  };

  const handleSectionChange = (event) => {
    const sectionIndex = parseInt(event.target.value);
    setSelectedSectionIndex(sectionIndex);
  };

  const handleSelect = () => {
    const pattern = patterns[selectedPatternIndex];
    if (Array.isArray(pattern)) {
      setCurrentPattern(pattern);
    } else if (
      typeof pattern === "object" &&
      pattern.hasOwnProperty("sections")
    ) {
      const rows = pattern.sections[selectedSectionIndex].rows;
      setCurrentPattern(rows);
    }
  };

  return (
    <div>
      <label htmlFor="pattern-selector">Select a pattern:</label>
      <select
        id="pattern-selector"
        onChange={handlePatternChange}
        value={selectedPatternIndex}
      >
        {patterns.map((pattern, index) => (
          <option key={index} value={index}>
            {`Pattern ${index + 1}`}
          </option>
        ))}
      </select>

      {typeof patterns[selectedPatternIndex] === "object" &&
      patterns[selectedPatternIndex].hasOwnProperty("sections") ? (
        <>
          <label htmlFor="section-selector">Select a section:</label>
          <select
            id="section-selector"
            onChange={handleSectionChange}
            value={selectedSectionIndex}
          >
            {patterns[selectedPatternIndex].sections.map((section, index) => (
              <option key={index} value={index}>
                {`Section ${index + 1}`}
              </option>
            ))}
          </select>
        </>
      ) : null}

      <button onClick={handleSelect}>Select</button>
    </div>
  );
}

export default PatternSelector;
