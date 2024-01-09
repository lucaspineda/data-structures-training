# WRITE LONGEST_CONSECUTIVE_SEQUENCE FUNCTION HERE #
#                                                  #
#                                                  #
#                                                  #
#                                                  #
####################################################

def longest_consecutive_sequence(num_list):
    longest_sequence = 0
    current_sequence = 0
    set_list = set(num_list)
    for number in num_list:
        if number - 1 not in set_list:
            current_sequence = 1
            while (number + 1) in set_list:
                current_sequence += 1
                number += 1
        longest_sequence = max(longest_sequence, current_sequence)
    return longest_sequence


print( longest_consecutive_sequence([100, 4, 200, 1, 3, 2]) )
print( longest_consecutive_sequence([1,2,3, 1,4,5, 5, 5]) )
print( longest_consecutive_sequence([1,2,3,8,9,0,6, -1]) )



"""
    EXPECTED OUTPUT:
    ----------------
    4

"""