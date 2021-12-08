import React from "react";

function App() {
  return (
    <div className="App">
      {addNumber(1, 2)}
      <div className="bg-green-500">Hi</div>
      <div className="bg-green-500 h-5">Hi</div>
    </div>
  );
}

function addNumber(a: number, b: number): number {
  return a + b;
}

addNumber(1, 2);

export default App;
