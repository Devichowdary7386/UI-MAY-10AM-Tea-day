class Parent:
    def m1(self):
        print("Parent Class-m1 method")
    def m2(self):
        print("Parent Class-m2 method")
class Child(Parent):
    def m3(self):
        print("Child Class-m3 method")
obj=Child()
obj.m1()
obj.m2()
obj.m3()  