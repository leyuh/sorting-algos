import './App.css';
import React, { useState, useEffect } from "react";
import SortingAlgos from './SortingAlgos';
import Bar from './Bar';
import visualize from './visualize';

function App() {

  const [SPEED, setSPEED] = useState<number>(150);

  const [forceQuit, setForceQuit] = useState<boolean>(false);

  const visWidth: number = 600;
  const visHeight: number = 400;

  const [marginSize, setMarginSize] = useState<number>(2.5);

  const [arrLength, setArrLength] = useState<number>(15);

  const [arr, setArr] = useState<number[][]>([]);

  const timeout = (time: number) => {
      return new Promise((res) => setTimeout(res, time));
  }

  const refresh = () => {
    setArr([]);
    for (let i = 0; i < arrLength; i++) {
      let randNum: number = Math.ceil(Math.random() * arrLength);
      setArr((prev) => {
        return [...prev, [randNum, 0]];
      })
    }
  }

  useEffect(() => {
    let speed: string | null = localStorage.getItem("speed");
    let length: string | null = localStorage.getItem("arr-length");
    if (speed != null) {
      setSPEED(parseInt(speed));
    }
    if (length != null) {
      setArrLength(parseInt(length));
      console.log("set");
    }
    refresh();
  }, [])

  const updateBar = async (i: number) => {
    await timeout(SPEED);
    setArr((prev) => {
      let tempArr = [...prev];
      tempArr[i][1] = 0;
      return tempArr;
    })
  }

  useEffect(() => {
    if (arrLength < 30) {
      setMarginSize(5);
    } else if (arrLength < 60) {
      setMarginSize(2.5);
    } else {
      setMarginSize(1);
    }
    refresh();
  }, [arrLength]);

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
      <div id="control-panel">
        <input id="bars-input" defaultValue={localStorage.getItem("arr-length") || arrLength} onBlur={(e) => {
          let num = parseInt(e.target.value);
          if (num) {
            if (num < 2) {
              num = 2;
            } else if (num > 100) {
              num = 100;
            }
          }
          setArrLength(num);
          localStorage.setItem("arr-length", num.toString());
        }}></input>
        <input id="speed-input" defaultValue={localStorage.getItem("speed") || SPEED} onBlur={(e) => {
          let num = parseInt(e.target.value);
          if (num) {
            if (num < 10) {
              num = 10;
            } else if (num > 500) {
              num = 500;
            }
          }
          setSPEED(num);
          localStorage.setItem("speed", num.toString());
        }}></input>
        <button id="refresh" onClick={() => {
          
          window.location.reload();
          setForceQuit(true);
        }}>R</button>
      </div>

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
          visualize(SortingAlgos.selectionSort(arr), arr, setArr, SPEED);
        }}>
          <h1 className="sort-title">Selection Sort</h1>
        </div>
        <div className="sort-div" id="bubble-sort" onClick={() => {
          visualize(SortingAlgos.bubbleSort(arr), arr, setArr, SPEED);
        }}>
          <h1 className="sort-title">Bubble Sort</h1>
        </div>
        <div className="sort-div" id="insertion-sort" onClick={() => {
          visualize(SortingAlgos.insertionSort(arr), arr, setArr, SPEED);
        }}>
          <h1 className="sort-title">Insertion Sort</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
