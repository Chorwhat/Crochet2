import React, { useState } from "react";
import Pattern from "./components/Pattern";
import PatternSelector from "./components/PatternSelector";
import { testPatterns } from "./testPatterns";

function App() {
  
  const [currentPattern, setCurrentPattern] = useState(testPatterns.patternShort.sections[0].rows);
  const [otherPattern, setOtherPattern] = useState(testPatterns.patternShort.sections[0].rows);

  

  return (
    <div>
      <PatternSelector patternsObj={testPatterns} setCurrentPattern={setCurrentPattern} />
     
      <Pattern pattern={currentPattern} isActive={true}/>

      <PatternSelector patternsObj={testPatterns} setCurrentPattern={setOtherPattern} />
      <Pattern pattern={otherPattern} isActive={false} />
    </div>
  );
}

export default App;
