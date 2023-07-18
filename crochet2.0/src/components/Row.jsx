import React from "react";

/*
A Row represents the individual rows in a crochet pattern.
It is used by the Pattern component to render the appropriate amount of Rows
Each Row contains checkboxes representing individual stitches
These checkboxes are not checked with their usual

Props:
numCheckBoxes: number of Checkboxes (stitches) in a row
numChecked: number of Checkboxes that are checked
startingIndex: the index of the first stitch in a row, 
*/


function Row({ numCheckBoxes, numChecked, startingIndex, onCheckboxClick, rowIndex, cumulativeValue }) {
  const checkboxes = [...Array(numCheckBoxes)].map((e, i) => (
    <input
      type="checkbox"
      checked={i + startingIndex < numChecked + startingIndex}
      onChange={() => {}}
      onClick={() => onCheckboxClick(i + startingIndex)}
    />
  ));

  const checkedCount = checkboxes.filter(checkbox => checkbox.props.checked).length;
  const fractionText = `${checkedCount}/${numCheckBoxes}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid gray", padding: "5px" }}>
      <div style={{ display: "flex" }}>{checkboxes}</div>
      <div style={{ fontSize: 12, color: checkedCount === numCheckBoxes ? "green" : "gray" }}>{fractionText}</div>
      <div style={{ fontSize: 12, color: checkedCount === numCheckBoxes ? "green" : "gray" }}>Row {rowIndex}</div>
      <div style={{ fontSize: 12, color: checkedCount === numCheckBoxes ? "green" : "gray" }}>Total: {cumulativeValue}</div>
    </div>
  );
}

export default Row;
