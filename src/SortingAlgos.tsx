import React, { Dispatch, SetStateAction } from 'react';

export default class SortingAlgos {
    private static swap (arr: number[], i: number, j: number): void {
        let temp: number = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static selectionSort (arr: number[], setArr: Dispatch<SetStateAction<(number[])>>): void {
        let tempArr = [...arr];
        for (let i = 0; i < tempArr.length; i++) {
            let minIndx: number = i;
            for (let j = i + 1; j < tempArr.length; j++) {
                if (tempArr[j] < tempArr[minIndx]) {
                    minIndx = j;
                }
            }
            SortingAlgos.swap(tempArr, i, minIndx);
            console.log(tempArr);
        }
        setArr(tempArr);
        console.log(tempArr);
    }
}