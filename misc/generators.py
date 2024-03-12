square_list = [n** 2 for n in range(5)]
square_list2 = (n** 2 for n in range(5))


print(square_list2)

for square in square_list2:
    print(square)