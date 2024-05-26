export class MinHeap {

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

    getLeftChildIndex(index: number): number {
        return (2 * index) + 1;
    }

    getRightChildIndex(index: number): number {
        return (2 * index) + 2;
    }

    getParentIndex(index: number): number {
        return (index - 1) >> 1;
    }

    hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.length;
    }

    hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.length;
    }

    hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0;
    }

    getLeftChild(index: number): number {
        return this.heap[this.getLeftChildIndex(index)];
    }

    getRightChild(index: number): number {
        return this.heap[this.getRightChildIndex(index)];
    }

    getParent(index: number): number {
        return this.heap[this.getParentIndex(index)];
    }

    swapNode(indexOne: number, indexTwo: number): void {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    heapifyUp(): void {
        let index = this.length - 1;
        while (this.hasParent(index) && this.heap[index] < this.getParent(index)) {
            this.swapNode(index, this.getParentIndex(index));
            index = this.getParentIndex(index);
        }
    }

    heapifyDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.heap[smallerChildIndex] > this.getRightChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] <= this.heap[smallerChildIndex]) {
                break;
            }
            else {
                this.swapNode(index, smallerChildIndex);
                index = smallerChildIndex;
            }
        }
    }

    insert(value: number): void {
        this.heap[this.length++] = value;
        this.heapifyUp();
    }

    delete(): number | null {
        if (this.length == 0) {
            return null;
        }
        let node = this.heap[0];
        this.heap[0] = this.heap[--this.length];

        this.heapifyDown();
        return node;
    }

    printHeap(): void {
        for (let i = 0; i < this.length; i++) {
            process.stdout.write(` ${this.heap[i]} `);
        }
        console.log();
    }
}