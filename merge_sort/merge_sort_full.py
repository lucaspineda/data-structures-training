def merge(array1, array2):
    combined = []
    i = 0
    j = 0
    while i < len(array1) and j < len(array2):
        if array1[i] < array2[j]:
            combined.append(array1[i])
            i += 1
        else:
            combined.append(array2[j])
            j += 1
              
    while i < len(array1):
        combined.append(array1[i])
        i += 1

    while j < len(array2):
        combined.append(array2[j])
        j += 1

    return combined

def merge_sort(my_list):
    if len(my_list) == 1:
        return my_list
    mid_index = round(len(my_list) / 2)
    left = my_list[0:mid_index]
    right = my_list[mid_index:]
    left_sorted = merge_sort(left)
    right_sorted = merge_sort(right)
    return merge(left_sorted, right_sorted)

## WRITE MERGE_SORT FUNCTION HERE ##
#                                  #
#                                  #
#                                  #
#                                  #
####################################




original_list = [3,1,4,2]

sorted_list = merge_sort(original_list)

print('Original List:', original_list)

print('\nSorted List:', sorted_list)



"""
    EXPECTED OUTPUT:
    ----------------
    Original List: [3, 1, 4, 2]
    
    Sorted List: [1, 2, 3, 4]
    
 """