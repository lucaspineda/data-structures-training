# WRITE THE FUNCTION HERE #
#                         #
#                         #
#                         #
#                         #
###########################

def first_non_repeating_char(string_value):
    my_dict = {}
    repeated_chars = []

    for char_value in string_value:
        if char_value in my_dict:
            repeated_chars.append(char_value)
        my_dict[char_value] = True

    for char_value in string_value:
        if char_value not in repeated_chars:
            return char_value
        

    


print( first_non_repeating_char('leetcode') )

print( first_non_repeating_char('hello') )

print( first_non_repeating_char('aabbcc') )



"""
    EXPECTED OUTPUT:
    ----------------
    l
    h
    None

"""