import React, { useEffect } from 'react';
import swap from './swap';

export default class SortingAlgos {

    static selectionSort (arr: number[][]): number[][] {
        let tempArr: number[][] = [...arr];
        let moves: number[][] = [];
        // move = [i, j]

        for (let i = 0; i < tempArr.length - 1; i++) {
            let minIndx: number = i;
            for (let j = i + 1; j < tempArr.length; j++) {
                moves.push([1, j]);
                if (tempArr[j][0] < tempArr[minIndx][0]) {
                    minIndx = j;
                }
            }
            if (i != minIndx) {
                swap(tempArr, i, minIndx);
                moves.push([2, i, minIndx]);
            }
        }

        return moves;
    }

    static bubbleSort (arr: number[][]): number[][] {

        let tempArr: number[][] = [...arr];
        let moves: number[][] = [];

        for (let i = 0; i < tempArr.length; i++) {
            for (let j = 0; j < (tempArr.length - i - 1); j++) {
                moves.push([1, j]);
                moves.push([1, j + 1]);
                if (tempArr[j][0] > tempArr[j+1][0]) {
                    swap(tempArr, j, j + 1);
                    moves.push([2, j, j + 1]);
                }
            }
        }

        return moves;

    }

    static insertionSort (arr: number[][]): number[][] {
        let tempArr: number[][] = [...arr];
        let moves: number[][] = [];
        // move = [i, j]
        for (let i = 1; i < tempArr.length; i++) {
            let current = tempArr[i];
            moves.push([1, i]);
            let j = i - 1;
            while ((j > -1) && (current[0] < tempArr[j][0])) {
                swap(tempArr, j+1, j);
                moves.push([2, j+1, j]);
                j--;
            }
        }

        return moves;
    }
}