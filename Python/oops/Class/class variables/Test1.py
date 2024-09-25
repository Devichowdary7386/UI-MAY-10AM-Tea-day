class Test:
    def __init__(self):
        self.a=100
    def m1(self):
        self.b=200

    
t1=Test()
t2=Test()
t1.m1()

print(t1.__dict__)
print(t2.__dict__)
