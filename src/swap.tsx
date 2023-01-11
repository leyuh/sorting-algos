export default function swap (arr: number[], i: number, j: number): void {
    let temp: number = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}