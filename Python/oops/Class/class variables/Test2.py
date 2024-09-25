class Test:
    a=100
    def __init__(self):
        Test.b=200
t1=Test()
print(Test.__dict__)
    