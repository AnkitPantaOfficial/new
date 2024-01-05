import React, { useState } from 'react';
import Firstblood from "./component/firstboood";
import Lower from "./component/lowerthird";

function App() {
  const [showFirstboood, setShowFirstboood] = useState(true);

  const toggleComponents = () => {
    setShowFirstboood(!showFirstboood);
  };

  return (
    <div>
      {showFirstboood ? <Firstblood /> : <Lower />}
      <button onClick={toggleComponents}>Toggle Components</button>
    </div>
  );
}

export default App;
