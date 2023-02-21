import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [isClick, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
  };

  return (
    <div className="App" id="main">
      {isClick && (
        <p id="para">
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
      <button id="click" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default App;
