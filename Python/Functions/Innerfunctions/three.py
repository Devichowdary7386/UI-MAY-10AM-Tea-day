def outer():
    print("Outer function")
    def inner():
        print("Inner function")
    return 100
value=outer()

