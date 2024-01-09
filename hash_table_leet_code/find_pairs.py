# WRITE FIND_PAIRS FUNCTION HERE #
#                                #
#                                #
#                                #
#                                #
##################################

def find_pairs(arr1, arr2, target):
    pairs_list = []
    arr2_set = set(arr2)
    for number in arr1:
        remainder = target - number
        if remainder in arr2_set:
            pairs_list.append((number, remainder))
    return pairs_list


arr1 = [1, 2, 3, 4, 5]
arr2 = [2, 4, 6, 8, 10]
target = 7

pairs = find_pairs(arr1, arr2, target)
print (pairs)



"""
    EXPECTED OUTPUT:
    ----------------
    [(5, 2), (3, 4), (1, 6)]

"""