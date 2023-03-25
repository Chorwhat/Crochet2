import React from "react";
import Row from "./Row";

function Pattern({pattern, numRows, totalChecked, onCheckboxClick }) {
  
  let remainingChecked = totalChecked;
  const rows = [];

  for (let i = 0; i < pattern.length; i++) {
    const checkboxesPerRow = pattern[i].length;
    const numCheckedInRow = Math.min(remainingChecked, checkboxesPerRow);

    //every stitch has a value, we want to add up the values of the stitches in the current row
    let rowValue = 0;
    for (let j = 0; j < checkboxesPerRow; j++) {
      rowValue += pattern[i][j].value;
    }

    //at the end of each row, we need the cumulative value of the row and the rows before it
    let cumulativeValue = 0;
    for (let j = 0; j <= i; j++) {
      let rowValue = 0;
      for (let k = 0; k < pattern[j].length; k++) {
        rowValue += pattern[j][k].value;
      }
      cumulativeValue += rowValue;
    }
  
    //const startingIndex should be the total number of stitches in previous rows
    let startingIndex = 0;
    for (let j = 0; j < i; j++) {
      startingIndex += pattern[j].length;
    }
    //decrement remainingChecked by the number of stitches in the current row
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

  return (
    <div style={{ display: "flex", overflowX: "scroll" }}>
      {rows}
    </div>
  );
}

export default Pattern;