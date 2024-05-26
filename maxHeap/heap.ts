/**
 * Operations of Heap
 * Heapify: a process of creating a heap from an array.
 * Insertion: process to insert an element in existing heap time complexity O(log N).
 * Deletion: deleting the top element of the heap or the highest priority element, and then organizing the heap and returning the element with time complexity O(log N).
 * Peek: to check or find the most prior element in the heap, (max or min element for max and min heap).
*/
export class MaxHeap {
    heap: number[];
    length: number;

    constructor(array?: number[]) {
        this.heap = [];
        this.length = 0;
        if (Array.isArray(array) && array.length > 0) {
            for (const num of array) {
                this.insert(num);
            }
        }
    }

    getLeftChildIndex(parentIndex: number): number {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex: number): number {
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex: number): number {
        return (childIndex - 1) >> 1;
    }

    hasLeftChild(parentIndex: number): boolean {
        return this.getLeftChildIndex(parentIndex) < this.length;
    }

    hasRightChild(parentIndex: number): boolean {
        return this.getRightChildIndex(parentIndex) < this.length;
    }

    hasParent(childIndex: number): boolean {
        return this.getParentIndex(childIndex) >= 0;
    }

    leftChild(parentIndex: number): number {
        return this.heap[this.getLeftChildIndex(parentIndex)];
    }

    rightChild(parentIndex: number): number {
        return this.heap[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex: number): number {
        return this.heap[this.getParentIndex(childIndex)];
    }

    swapNode(indexOne: number, indexTwo: number) {
        const temp: number = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    peek(): number | null {
        if (this.length == 0) {
            return null;
        }
        return this.heap[0];
    }

    delete(): number | null {
        if (this.length == 0) {
            return null;
        }
        const node = this.heap[0];
        this.heap[0] = this.heap[--this.length];
        this.heapifyDown();

        return node;
    }

    insert(val: number): void {
        this.heap[this.length++] = val;
        this.heapifyUp();
    }

    heapifyUp(): void {
        let insertedNode = this.length - 1;
        while (this.hasParent(insertedNode) && this.heap[insertedNode] > this.parent(insertedNode)) {
            this.swapNode(insertedNode, this.getParentIndex(insertedNode));
            insertedNode = this.getParentIndex(insertedNode);
        }
    }

    heapifyDown(): void {
        let index = 0;

        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                largerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] >= this.heap[largerChildIndex]) {
                break;
            }
            else {
                this.swapNode(index, largerChildIndex);
                index = largerChildIndex;
            }
        }
    }

    printHeap(): void {
        for (let i = 0; i < this.length; i++) {
            process.stdout.write(` ${this.heap[i]} `);
        }
        console.log();
    }
}