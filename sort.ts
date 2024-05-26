import { MaxHeap } from './index';

const arr = [2, 34, 1, 24, -1, 20, 30, 18, 24, -4];

/**
 * Sorts an array of numbers in non decreasing order.
 * T.C. ->
 *  n * O(log n) - for heap creation
 *  n * O(log n) - for deleting nodes that in result sorts the array
 * @param {Array} arr - Array of numbers
 * @returns {Array} - sorted array in non decreasing order
 */
function heapSort(arr: number[]): number[] {
    const heap = new MaxHeap();
    for (let num of arr) {
        heap.insert(num);
    }
    for (let i = 0; i < arr.length; i++) {
        const root = heap.delete();
        heap.heap[heap.length] = root ?? -1;
    }
    return heap.heap;
}

console.log(heapSort(arr));