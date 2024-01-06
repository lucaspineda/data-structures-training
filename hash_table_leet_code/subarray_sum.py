# WRITE SUBARRAY_SUM FUNCTION HERE #
#                                  #
#                                  #
#                                  #
#                                  #
####################################

# def subarray_sum(num_array, target):
#     numbers_dict = {}
#     # first_number_index = None
#     # second_number_index = None
#     i = 0
#     for number in num_array:
#         numbers_dict[number] = i
#         i += 1
    
#     acc = 0
#     for index, num in enumerate(num_array):
#         acc = num
#         sub_index = index
#         # print(acc, 'acc')
#         while acc != target:
#             # print(acc)
#             # print(sub_index, 'suuub')
#             sub_index += 1
#             if sub_index > len(num_array) - 1:
#                 break
#             acc += num_array[sub_index]
#             # print(sub_index, 'subb', num_array[sub_index])
#         if acc == target:
#             return [numbers_dict.get(num), sub_index]
#     return []

def subarray_sum(nums, target):
    sum_index = {0: -1}
    current_sum = 0
    for i, num in enumerate(nums):
        current_sum += num
        print(current_sum - target)
        if current_sum - target in sum_index:
            return [sum_index[current_sum - target] + 1, i]
        sum_index[current_sum] = i
        print(sum_index, 'sum_index')
    return []

nums = [1, 2, 3, 4, 5]
target = 9
print ( subarray_sum(nums, target) )

nums = [-1, 24, 35, -4, 5]
target = 1
print ( subarray_sum(nums, target) )

nums = [2, 3, 4, 5, 6]
target = 3
print ( subarray_sum(nums, target) )

nums = []
target = 0
print ( subarray_sum(nums, target) )



"""
    EXPECTED OUTPUT:
    ----------------
    [1, 3]
    [0, 3]
    [1, 1]
    []

"""
