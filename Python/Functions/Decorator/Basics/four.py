def testcase(func):
    def inner(a,b):
        if b==0:
            print("Can't Divide by zero")
        else:
            return func(a,b)
    return inner
@testcase
def calc(a,b):
    print(a/b)
calc(10,2)
calc(10,0)
print("Devi")
