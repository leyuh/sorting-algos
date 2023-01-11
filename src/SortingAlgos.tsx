import React, { useEffect } from 'react';
import swap from './swap';

export default class SortingAlgos {

    static selectionSort (arr: number[]): number[][] {
        let tempArr: number[] = [...arr];
        let moves: number[][] = [];
        // move = [i, j]

        for (let i = 0; i < tempArr.length - 1; i++) {
            let minIndx: number = i;
            for (let j = i + 1; j < tempArr.length; j++) {
                if (tempArr[j] < tempArr[minIndx]) {
                    minIndx = j;
                }
            }
            if (i != minIndx) {
                swap(tempArr, i, minIndx);
                moves.push([i, minIndx]);
            }
        }

        return moves;
    }

    static bubbleSort (arr: number[]): number[][] {

        let tempArr: number[] = [...arr];
        let moves: number[][] = [];

        for (let i = 0; i < tempArr.length; i++) {
            for (let j = 0; j < (tempArr.length - i - 1); j++) {
                if (tempArr[j] > tempArr[j+1]) {
                    swap(tempArr, j, j + 1);
                    moves.push([j, j + 1]);
                }
            }
        }

        return moves;

    }
}