class MaxHeap:
    def __init__(self):
        self.heap = []

    def _left_child(self, index):
        return 2 * index + 1

    def _right_child(self, index):
        return 2 * index + 2

    def _parent(self, index):
        return (index - 1) // 2

    def _swap(self, index1, index2):
        self.heap[index1], self.heap[index2] = self.heap[index2], self.heap[index1]

    def insert(self, value):
        # if not self.heap:
        #     self.heap.append(value)
        #     return
        self.heap.append(value)
        current_index = len(self.heap) - 1
        while self.heap[0] != value:
            parent = self._parent(current_index)
            if self.heap[self._parent(current_index)] < value:
                self._swap(current_index, self._parent(current_index))
            else:
                break
            current_index = parent

        
        
    # WRITE THE INSERT METHOD HERE #
    #                              #
    #                              #
    #                              #
    #                              #
    ################################
    
    
    
myheap = MaxHeap()
myheap.insert(99)
myheap.insert(72)
myheap.insert(61)
myheap.insert(58)

print(myheap.heap)  


myheap.insert(100)

print(myheap.heap)  


myheap.insert(75)

print(myheap.heap)


"""
    EXPECTED OUTPUT:
    ----------------
    [99, 72, 61, 58]
    [100, 99, 61, 58, 72]
    [100, 99, 75, 58, 72, 61]

"""
    