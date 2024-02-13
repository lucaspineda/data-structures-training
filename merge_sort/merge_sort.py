## WRITE MERGE FUNCTION HERE ##
#                             #
#                             #
#                             #
#                             #
############################### 
def merge(list1, list2):
    sorted_list = []
    i = j = 0
    while i < len(list1) and j < len(list2):
        print('caiu no h')
        if list1[i] < list2[j] or list2[j] is None:
            sorted_list.append(list1[i])
            i += 1
        else:
            sorted_list.append(list2[j])
            j += 1
    while i < len(list1):
        sorted_list.append(list1[i])
        i += 1
 
    while j < len(list2):
        sorted_list.append(list2[j])
        j += 1
    return sorted_list



print(merge([1,2,7,8], [3,4,5,6]))

print(merge([1,2,7,8], []))




"""
    EXPECTED OUTPUT:
    ----------------
    [1, 2, 3, 4, 5, 6, 7, 8]
    
 """