import React from "react";
import Row from "./Row";

function Pattern({ numRows, totalChecked, onCheckboxClick }) {
  const checkboxesPerRow = 10;
  let remainingChecked = totalChecked;
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    const numCheckedInRow = Math.min(remainingChecked, checkboxesPerRow);
    const startingIndex = i * checkboxesPerRow;
    remainingChecked -= numCheckedInRow;

    rows.push(
      <Row
        key={i}
        count={numCheckedInRow}
        startingIndex={startingIndex}
        onCheckboxClick={onCheckboxClick}
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
