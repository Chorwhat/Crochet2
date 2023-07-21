// Instruction.js

import React from "react";

const Instruction = ({ currentStitch }) => {
  return (
    <div>
      <h3>Current Stitch Instruction:</h3>
      {currentStitch && currentStitch.instruction ? (
        <p>{currentStitch.instruction}</p>
      ) : (
        <p>No instruction available for this stitch.</p>
      )}
    </div>
  );
};

export default Instruction;
