import swap from './swap';
import React, { Dispatch, SetStateAction } from 'react';

const timeout = (time: number) => {
    return new Promise((res) => setTimeout(res, time));
}

// MOVE = [TYPE, I, J]

export default async function visualize (moves: number[][], arr: number[][], setArr: Dispatch<SetStateAction<number[][]>>, speed: number) {
    for (let i = 0; i < moves.length; i++) {
        await timeout(speed);
        setArr((prev) => {
            let tempArr: number[][] = [...prev];
            if (moves[i][0] == 2) {
                // SWAP
                tempArr[moves[i][1]][1] = 2;
                tempArr[moves[i][2]][1] = 2;
                swap(tempArr, moves[i][1], moves[i][2]);
            } else if (moves[i][0] == 1) {
                // CONSIDER
                tempArr[moves[i][1]][1] = 1;
            } else {
                console.log(moves[i][0]);
            }

            return tempArr;
        })

    }
}