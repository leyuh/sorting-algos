import './App.css';
import React, { useState, useEffect } from "react";
import SortingAlgos from './SortingAlgos';
import Bar from './Bar';

function App() {

  const visWidth: number = 600;
  const visHeight: number = 400;

  const marginSize: number = 5;

  const arrLength: number = 10;

  const [arr, setArr] = useState<number[][]>([]);

  useEffect(() => {
    for (let i = 0; i < arrLength; i++) {
      let randNum: number = Math.ceil(Math.random() * arrLength);
      setArr((prev) => {
        return [...prev, [randNum, 0]];
      })
    }

  }, [])

  return (
    <div id="app">
      <div id="visualizer">
        {arr.map((val: number[], i: number) => {
          console.log("rerender");
          return <Bar
            name={`bar-${i}`}
            height={`${val[0] * ((visHeight - 20) / arrLength)}px`}
            width={`${(visWidth / arrLength) - marginSize}px`}
            margin={`${marginSize}px`}
            status={val[1]}
            key={i}
          />
        })}
      </div>

      <div id="sorts-list">
        <div className="sort-div" id="selection-sort" onClick={() => {
          SortingAlgos.selectionSort(arr, setArr);
        }}>
          <h1 className="sort-title">Selection Sort</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
