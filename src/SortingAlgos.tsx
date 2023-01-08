import React, { Dispatch, SetStateAction } from 'react';

export default class SortingAlgos {

    private static RUN_SPEED: number = 1000;

    private static interval () {
        return new Promise(r => setTimeout(r, SortingAlgos.RUN_SPEED));
    }

    private static updateBarStatus (arr: number[][], setArr: Dispatch<SetStateAction<(number[][])>>, i: number, status: number): void {
        setArr((prev) => {
            let tempArr = [...prev];
            tempArr[i][1] = status;
            return tempArr;
        })

    }

    private static async swap (arr: number[][], setArr: Dispatch<SetStateAction<(number[][])>>, i: number, j: number) {
        setArr((prev) => {
            let tempArr: number[][] = [...prev];
            let temp: number[] = tempArr[i];
            tempArr[i] = tempArr[j];
            tempArr[j] = temp;
            return tempArr;
        })
        await this.interval();
    }

    static async selectionSort (arr: number[][], setArr: Dispatch<SetStateAction<(number[][])>>) {
        for (let i = 0; i < arr.length - 1; i++) {
            console.log(arr);
            await SortingAlgos.interval();
            let minIndx: number = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j][0] < arr[minIndx][0]) {
                    minIndx = j;
                }
            }
            await SortingAlgos.interval();
            SortingAlgos.swap(arr, setArr, i, minIndx);
        }
    }
}