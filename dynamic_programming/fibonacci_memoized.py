memo = [None] * 100

def fib(n):
    if memo[n] is not None:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n - 1) + fib(n - 2)
    # print(memo)
    return memo[n]




print("o fibonacci de 3 é: ",fib(99))
