def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

# fib 3 - 1 = fib 2 = 1
# +
# fib 3 - 2 = fib 1 = 1

# fib 1 + fib 0
# 1 + 0 = 2

print("o fibonacci de 3 é: ",fib(3))
# print(fib(4))
# print(fib(5))