import { MinHeap } from './heap';

const arr = [6,5,4,3,2,1];
const k = 3;

export function kthSmallest(arr: number[], k: number): number | null {
    if(k > arr.length) {
        return null;
    }
    let minHeap = new MinHeap(arr);

    while(k > 1) {
        minHeap.delete();
        k--;
    }
    return minHeap.delete();
}

console.log(kthSmallest(arr, k));