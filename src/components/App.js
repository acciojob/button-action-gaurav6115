import React, { useState } from "react";
import "./../styles/App.css";

const App = (props) => {
  const [para, setPara] = useState(false);

  const handleClick = () => {
    setPara(
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
    );
  };

  return (
    <div className="App" id="main">
      <p id="para">{para}</p>
      <button id="click" onClick={handleClick}>
        Click
      </button>
    </div>
  );
};

export default App;
