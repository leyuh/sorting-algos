import './App.css';
import React, { useState, useEffect } from "react";
import SortingAlgos from './SortingAlgos';
import Bar from './Bar';
import visualize from './visualize';

function App() {

  const SPEED: number = 20;

  const visWidth: number = 600;
  const visHeight: number = 400;

  const marginSize: number = 1;

  const arrLength: number = 25;

  const [arr, setArr] = useState<number[][]>([]);

  const timeout = (time: number) => {
      return new Promise((res) => setTimeout(res, time));
  }

  const updateBar = async (i: number) => {
    await timeout(SPEED);
    setArr((prev) => {
      let tempArr = [...prev];
      tempArr[i][1] = 0;
      return tempArr;
    })
  }

  useEffect(() => {
    for (let i = 0; i < arrLength; i++) {
      let randNum: number = Math.ceil(Math.random() * arrLength);
      setArr((prev) => {
        return [...prev, [randNum, 0]];
      })
    }

  }, [])

  // revert modes of bars

  useEffect(() => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] != 0) {
        updateBar(i);
      }
    }
  }, [arr])

  return (
    <div id="app">
      <div id="visualizer">
        {arr.map((val: number[], i: number) => {
          return <Bar
            name={`bar-${i}`}
            height={`${val[0] * ((visHeight - 20) / arrLength)}px`}
            width={`${(visWidth / arrLength) - marginSize}px`}
            margin={`${marginSize}px`}
            mode={val[1]}
            key={i}
          />
        })}
      </div>

      <div id="sorts-list">
        <div className="sort-div" id="selection-sort" onClick={() => {
          visualize(SortingAlgos.selectionSort(arr), arr, setArr);
        }}>
          <h1 className="sort-title">Selection Sort</h1>
        </div>
        <div className="sort-div" id="bubble-sort" onClick={() => {
          visualize(SortingAlgos.bubbleSort(arr), arr, setArr);
        }}>
          <h1 className="sort-title">Bubble Sort</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
