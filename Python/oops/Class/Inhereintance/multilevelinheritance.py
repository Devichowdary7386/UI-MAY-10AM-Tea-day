class GP:
    def m1(self):
        print("GP-Class- m1 method")
    def m2(self):
        print("GP-Class -m2 method")
class Parent(GP):
    def m3(self):
        print("Parent Class -m3 method")
class Child(Parent):
    def m4(self):
        print("Child Class -m4 method")
obj=Child()
obj.m1()
obj.m2()
obj.m3()
obj.m4()
