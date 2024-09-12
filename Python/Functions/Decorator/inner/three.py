def outer():
    print("Outer Function")
    def inner():
        print("Inner Function")
    return inner
x=outer()
x()
x()
x()
x()