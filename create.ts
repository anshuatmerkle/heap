import { MaxHeap } from './index';

const heap = new MaxHeap();

heap.insert(50);
heap.insert(30);
heap.insert(20);
heap.insert(15);
heap.insert(10);
heap.insert(16);
heap.insert(6);

heap.printHeap();

heap.delete();

heap.printHeap();