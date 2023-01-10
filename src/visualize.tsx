import swap from './swap';
import React, { Dispatch, SetStateAction } from 'react';

const timeout = (time: number) => {
    return new Promise((res) => setTimeout(res, time));
}

export default async function visualize (moves: number[][], arr: number[], setArr: Dispatch<SetStateAction<number[]>>) {
    for (let i = 0; i < moves.length; i++) {
        await timeout(2000);
        console.log(arr);
        setArr((prev) => {
            let tempArr = [...prev];
            swap(tempArr, moves[i][0], moves[i][1]);
            return tempArr;
        })
        await timeout(2000);
    }
}