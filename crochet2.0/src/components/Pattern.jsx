import React, { useState, useEffect } from "react";
import Row from "./Row";

function Pattern({ pattern, numRows, totalChecked, onCheckboxClick }) {
  const [currentStitchIndex, setCurrentStitchIndex] = useState(0);

  useEffect(() => {
    setCurrentStitchIndex(totalChecked - 1);
  }, [totalChecked]);

  let remainingChecked = totalChecked;
  const rows = [];

  for (let i = 0; i < pattern.length; i++) {
    const checkboxesPerRow = pattern[i].length;
    const numCheckedInRow = Math.min(remainingChecked, checkboxesPerRow);

    let rowValue = 0;
    for (let j = 0; j < checkboxesPerRow; j++) {
      rowValue += pattern[i][j].value;
    }

    let cumulativeValue = 0;
    for (let j = 0; j <= i; j++) {
      let rowValue = 0;
      for (let k = 0; k < pattern[j].length; k++) {
        rowValue += pattern[j][k].value;
      }
      cumulativeValue += rowValue;
    }

    let startingIndex = 0;
    for (let j = 0; j < i; j++) {
      startingIndex += pattern[j].length;
    }

    remainingChecked -= numCheckedInRow;

    rows.push(
      <Row
        numCheckBoxes={checkboxesPerRow}
        key={i}
        count={numCheckedInRow}
        startingIndex={startingIndex + 1}
        onCheckboxClick={onCheckboxClick}
        rowIndex={i + 1}
        cumulativeValue={cumulativeValue}
      />
    );
  }

  let currentStitch;
  if (currentStitchIndex === pattern.flat().length) {
    currentStitch = "Done";
  } else {
    currentStitch = pattern.flat()[currentStitchIndex]?.name;
  }

  let nextStitch;
  if (currentStitchIndex + 1 === pattern.flat().length) {
    nextStitch = "Done";
  } else {      
    nextStitch = pattern.flat()[currentStitchIndex + 1]?.name;
  }

  return (
    <div style={{ overflowX: "scroll", maxWidth: "100vw" }}>
      <h1>Current Stitch: {currentStitch}</h1>
      <h2>Next Stitch: {nextStitch}</h2>

      <div style={{ display: "flex" }}>
        {rows}
      </div>
    </div>
  );
}

export default Pattern;
