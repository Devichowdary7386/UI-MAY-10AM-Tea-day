class Employee:
    def cal_tax(self):
        print("Employee class")
class Account:
    def cal_tax(self):
        print("Account class")
class User:
    def cal_tax(self):
        print("User class")
def exec(obj):
    obj.cal_tax()
exec(Employee())
exec(Account())
exec(User())