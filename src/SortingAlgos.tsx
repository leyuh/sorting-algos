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

    static merge (leftArr: number[][], rightArr: number[][], moves: number[][]) {

        let mergedArr: number[][] = [];

        let leftIndx : number = 0;
        let rightIndx : number = 0;
        let mergedIndx: number = 0;

        while (leftIndx < leftArr.length && rightIndx < rightArr.length) {
            if (leftArr[leftIndx][0] <= rightArr[rightIndx][0]) {
                
                moves.push([2, (mergedIndx + leftArr[0][2]), leftArr[leftIndx][2]]);
                mergedArr[mergedIndx] = leftArr[leftIndx];
                leftIndx++;
            } else {
                
                moves.push([2, (mergedIndx + leftArr[0][2]), rightArr[rightIndx][2]]);
                mergedArr[mergedIndx] = rightArr[rightIndx];
                rightIndx++;
            }
            mergedIndx++;
        }

        while (leftIndx < leftArr.length) {
            moves.push([2, (mergedIndx + leftArr[0][2]), leftArr[leftIndx][2]]);
            mergedArr[mergedIndx] = leftArr[leftIndx];
            leftIndx++;
            mergedIndx++;
        }
        while (rightIndx < rightArr.length) {
            moves.push([2, (mergedIndx + leftArr[0][2]), rightArr[rightIndx][2]]);
            mergedArr[mergedIndx] = rightArr[rightIndx];
            rightIndx++;
            mergedIndx++;
        }

        return mergedArr;
    }

    static mergeSortMain(arr: number[][], moves: number[][]) {
 
        if (arr.length == 1) {
            return arr;
        }

        let left: number[][] = this.mergeSortMain([...arr].slice(0, (Math.floor(arr.length / 2))), moves);
        let right: number[][] = this.mergeSortMain([...arr].slice((Math.floor(arr.length / 2))), moves);

        return this.merge(left, right, moves);
    }

    static mergeSort (arr: number[][]): number[][] {

        let tempArr: number[][] = [...arr];
        for (let i = 0; i < tempArr.length; i++) {
            tempArr[i].push(i);
        }
        let moves: number[][] = [];
        // move = [type, i, j]

       
        this.mergeSortMain(tempArr, moves);
        return moves;
        
    }

    static quickSort (arr: number[][]): number[][] {
        let tempArr: number[][] = [...arr];
        let moves: number[][] = [];
        // move = [i, j]


        return moves;
    }

    static heapSort (arr: number[][]): number[][] {
        let tempArr: number[][] = [...arr];
        let moves: number[][] = [];
        // move = [i, j]


        return moves;
    }
}