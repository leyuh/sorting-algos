import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const visWidth: number = 600;
  const visHeight: number = 400;

  const marginSize: number = 5;

  const arrLength: number = 25;

  const [arr, setArr] = useState<number[]>([]);

  useEffect(() => {
    for (let i = 0; i < arrLength; i++) {
      let randNum: number = Math.ceil(Math.random() * arrLength);
      setArr((prev) => {
        return [...prev, randNum];
      })
    }
  }, [])

  return (
    <div id="app">
      <div id="visualizer">
        {arr.map((val: number, i: number) => {
          return <span className="bar" id={`bar-${i}`} style={{
            "height": `${val * ((visHeight - 10) / arrLength)}px`,
            "width": `${(visWidth / arrLength) - marginSize}px`,
            "margin": `${marginSize}px`
          }} key={i}/>
        })}
      </div>
    </div>
  );
}

export default App;
