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
        self.heap.append(value)
        current = len(self.heap) - 1

        while current > 0 and self.heap[current] > self.heap[self._parent(current)]:
            self._swap(current, self._parent(current))
            current = self._parent(current)
    
    # We will be writing the _sink_down method in the next exercise.
    # But I need to include it here for the tests to work for remove.
    # So, don't peek at this one here.  :-)
    def _sink_down(self, index):
        max_index = index
        while True:
            left_index = self._left_child(index)
            right_index = self._right_child(index)

            if (left_index < len(self.heap) and 
                    self.heap[left_index] > self.heap[max_index]):
                max_index = left_index

            if (right_index < len(self.heap) and 
                    self.heap[right_index] > self.heap[max_index]):
                max_index = right_index
            
            print(max_index, index, 'aaaa')
            if max_index != index:
                self._swap(index, max_index)
                index = max_index
            else:
                return
                       
    def remove(self):
        if len(self.heap) == 0:
            return None
        elif len(self.heap) == 1:
            max_value = self.heap[0]
            self.heap.pop()
            return max_value
        else:
            max_value = self.heap[0]
            self.heap[0] = self.heap[len(self.heap) - 1]
            self.heap.pop()
            self._sink_down(0)
            return max_value

    # WRITE THE REMOVE METHOD HERE #
    #                              #
    #                              #
    #                              #
    #                              #
    ################################
    
    
    
myheap = MaxHeap()
myheap.insert(99)
myheap.insert(95)
myheap.insert(80)
myheap.insert(55)
myheap.insert(60)
myheap.insert(50)
myheap.insert(100)

print(myheap.heap)


# myheap.remove()
myheap._sink_down(0)

print(myheap.heap)


# myheap.remove()

print(myheap.heap)


"""
    EXPECTED OUTPUT:
    ----------------
    [95, 75, 80, 55, 60, 50, 65]
    [80, 75, 65, 55, 60, 50]
    [75, 60, 65, 55, 50]

"""
    