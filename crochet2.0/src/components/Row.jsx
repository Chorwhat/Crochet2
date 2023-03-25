import React from "react";

function Row({ numCheckBoxes, count, startingIndex, onCheckboxClick, rowIndex, cumulativeValue }) {
  const checkboxes = [...Array(numCheckBoxes)].map((e, i) => (
    <input
      type="checkbox"
      checked={i + startingIndex < count + startingIndex}
      onChange={() => {}}
      onClick={() => onCheckboxClick(i + startingIndex)}
      key={i}
    />
  ));

  const checkedCount = checkboxes.filter(checkbox => checkbox.props.checked).length;
  const fractionText = `${checkedCount}/${numCheckBoxes}`;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ display: "flex" }}>{checkboxes}</div>
      <div style={{ fontSize: 12, color: checkedCount === numCheckBoxes ? "green" : "gray" }}>{fractionText}</div>
      <div style={{ fontSize: 12, color: checkedCount === numCheckBoxes ? "green" : "gray" }}>Row {rowIndex}</div>
        <div style={{ fontSize: 12, color: checkedCount === numCheckBoxes ? "green" : "gray" }}>Total: {cumulativeValue}</div>
    </div>
  );
}

export default Row;
