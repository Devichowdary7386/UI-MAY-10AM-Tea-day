class Account:
    min_bal=500
    def open_Account(self):
        print("Account opened successfully")
    @classmethod
    def m2(cls):
       pass
    @staticmethod
    def m3():
        pass
a1=Account()
a2=Account()
a3=Account()
print(a1.__dict__)
print(a2.__dict__)
print(a3.__dict__)
print(Account.__dict__)
print(a1.open_Account)
print(a2.open_Account)
print(a3.open_Account)