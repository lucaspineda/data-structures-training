class Node:
    def __init__(self, value):
        self.value = value
        self.next = None
        self.prev = None
        

class DoublyLinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node
        self.length = 1

    def print_list(self):
        output = []
        current_node = self.head
        while current_node is not None:
            output.append(str(current_node.value))
            current_node = current_node.next
        print(" <-> ".join(output))
        
    def append(self, value):
        new_node = Node(value)
        if self.head is None:
            self.head = new_node
        else:
            temp = self.head
            while temp.next is not None:
                temp = temp.next
            temp.next = new_node
            new_node.prev = temp
        self.length += 1
        return True
    
    def swap_pairs(self):
        current = self.head
        last = None
        next_current = None
        range_value = round(self.length // 2)
        if (self.length % 2) != 0:
            range_value += 1
        if self.length == 1:
            return
        for _ in range(range_value):
            if not current.next:
                last.next = current
                current.prev = last
                return
            after = current.next
            current.prev = after
            if after.next:
                next_current = after.next
            after.next = current
            if last:
                last.next = after
            else:
                self.head = after
            current.next = None
            after.prev = last
            last = current
            if next_current:
                current = next_current

    # WRITE SWAP_PAIRS METHOD HERE #
    #                              #
    #                              #
    #                              #
    #                              #
    ################################



my_dll = DoublyLinkedList(1)
# my_dll.append(2)
# my_dll.append(3)
# my_dll.append(4)
# my_dll.append(5)


print('my_dll before swap_pairs:')
my_dll.print_list()

my_dll.swap_pairs() 


print('my_dll after swap_pairs:')
my_dll.print_list()


"""
    EXPECTED OUTPUT:
    ----------------
    my_dll before swap_pairs:
    1 <-> 2 <-> 3 <-> 4
    ------------------------
    my_dll after swap_pairs:
    2 <-> 1 <-> 4 <-> 3

"""