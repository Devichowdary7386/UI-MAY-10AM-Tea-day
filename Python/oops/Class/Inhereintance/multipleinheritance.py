class Parent1:
    def m1(self):
        print("Parent1 Class -m1 method")
class Parent2:
    def m2(Self):
        print("Parent2 Class -m2 method")
class Child(Parent1,Parent2):
    def m3(self):
        print("Child Class -m3 method")
obj=Child()
obj.m1()
obj.m2()
obj.m3()