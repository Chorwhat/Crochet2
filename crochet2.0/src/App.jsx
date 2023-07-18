import React, { useState } from "react";
import Pattern from "./components/Pattern";
import PatternSelector from "./components/PatternSelector";
import { testPatterns } from "./testPatterns";

function App() {

  //state to store an array of the "pattern pairs" 
  //a pattern pair is a rendering of a PatternSelector, a Pattern, and two buttons (one for removal of this Pattern Pair and one to Activate it)
  const [patternPairs, setPatternPairs] = useState([
    { pattern: testPatterns.patternShort.sections[0].rows, isActive: true },
  ]);

  //Function to add a new PatternPair to the screen
  //default is the first section of patternShort
  //I should probably find a way to restructure testPatterns to be an array of objects, instead of an object containing multiple objects
  const addPatternPair = () => {
    setPatternPairs([
      ...patternPairs,
      {
        pattern: testPatterns.patternShort.sections[0].rows,
        isActive: false,
      },
    ]);
  };

  //Function for removing a patternPair from the rendering
  // the index it takes in is gotten from the button that runs this function.
  const removePatternPair = (index) => {
    setPatternPairs(patternPairs.filter((_, i) => i !== index));
  };

  //This is patternSelector functionality, being passed as a prop to PatternSelector.
  //It could likely be moved to patternSelector
  const updatePattern = (index, newPattern) => {
    setPatternPairs((prevPairs) =>
      prevPairs.map((pair, i) =>
        i === index ? { ...pair, pattern: newPattern } : pair
      )
    );
  };

  //This is for activating a pattern, also deactivates all other patterns
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
      
       {/* Loops through the state of patternPairs and renders them */}
      {patternPairs.map((pair, index) => (
        <div key={index}>
          
           {/* Renders the patternSelector */}
          <PatternSelector
            patternsObj={testPatterns}
            setCurrentPattern={(newPattern) => updatePattern(index, newPattern)}
          />

           {/* renders the Pattern */}
          <Pattern pattern={pair.pattern} isActive={pair.isActive} />
          
          {/* Button to remove the pattern pair */}
          <button onClick={() => removePatternPair(index)}>Remove</button>
          
           {/* Button to activate/deactivate the pattern pair */}
          <button onClick={() => activatePattern(index)}>
          {pair.isActive ? "Deactivate" : "Activate"}
          </button>


        </div>
      ))}
    </div>
  );
}

export default App;
