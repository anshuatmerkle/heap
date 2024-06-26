import { MaxHeap } from './heap';

const arr = [-42, 34, 1, 24, -1, 100, 20, 30, 18, 24, -4];

/**
 * Sorts an array of numbers in non decreasing order.
 * T.C. ->
 *  n * O(log n) - for heap creation
 *  n * O(log n) - for deleting nodes that in result sorts the array
 * @param {Array} arr - Array of numbers
 * @returns {Array} - sorted array in non decreasing order
 */
export function heapSort(arr: number[]): number[] {
    const heap = new MaxHeap(arr);

    for (let i = 0; i < arr.length; i++) {
        const root = heap.delete();
        heap.heap[heap.length] = root ?? -1;
    }
    return heap.heap;
}

console.log(heapSort(arr));