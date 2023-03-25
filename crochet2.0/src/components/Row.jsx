import React from "react";

function Row({ count, startingIndex, onCheckboxClick, }) {
  const checkboxes = [...Array(10)].map((e, i) => (
    <input
      type="checkbox"
      checked={i + startingIndex < count + startingIndex}
      onChange={() => {}}
      onClick={() => onCheckboxClick(i + startingIndex)}
      key={i}
    />
  ));

  return <div style={{ display: "flex" }}>{checkboxes}</div>;
}

export default Row;
