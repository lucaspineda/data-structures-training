# WRITE TWO_SUM FUNCTION HERE #
#                             #
#                             #
#                             #
#                             #
###############################
    
    
def two_sum(num_array, target):
    numbers_dict = {}
    first_number_index = None
    second_number_index = None
    i = 0
    for number in num_array:
        numbers_dict[number] = i
        i += 1
    for index, number_item in enumerate(numbers_dict):
        second_number = target - number_item
        if second_number != number_item:
            if second_number in numbers_dict:
                first_number_index = index
                second_number_index = numbers_dict.get(second_number)
                break
    if first_number_index is not None:
        return [first_number_index, second_number_index]
    else:
        return []
    
print(two_sum([5, 1, 7, 2, 9, 3], 10))  
print(two_sum([4, 2, 11, 7, 6, 3], 9))  
print(two_sum([10, 15, 5, 2, 8, 1, 7], 12))  
print(two_sum([1, 3, 5, 7, 9], 10))  
print ( two_sum([1, 2, 3, 4, 5], 10) )
print ( two_sum([1, 2, 3, 4, 5], 7) )
print ( two_sum([1, 2, 3, 4, 5], 3) )

print ( two_sum([], 0) )
print ( two_sum([1, 2, 2, 4, 5], 3) )



"""
    EXPECTED OUTPUT:
    ----------------
    [1, 4]
    [1, 3]
    [0, 3]
    [1, 3]
    []
    [2, 3]
    [0, 1]
    []

"""


