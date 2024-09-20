try:
    a=int(input("Enter No"))
    b=int(input("Enter No"))
    print(a/b)
except ZeroDivisionError as e:
    print("Can't Division Zero")
except ValueError as e:
    print("Can't convert string to int")
