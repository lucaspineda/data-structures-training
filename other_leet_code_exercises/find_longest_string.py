# WRITE FIND_LONGEST_STRING FUNCTION HERE #
#                                         #
#                                         #
#                                         #
#                                         #
###########################################
    
def find_longest_string(my_list):
    if not len(my_list):
        return ''
    longest = my_list[0]
    for item in my_list:
        if len(item) > len(longest):
            longest = item
    return longest


string_list = ['apple', 'banana', 'kiwi', 'pear']
longest = find_longest_string(string_list)
print(longest)  


"""
    EXPECTED OUTPUT:
    ----------------
    banana
    
"""