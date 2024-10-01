from abc import *
class Bank(ABC):
    @abstractmethod
    def cal_tax(self):
        pass
class Account(Bank):
    min_bal=500
    def __init__(self,id,name,amount):
        self.acc_id=id
        self.acc_name=name
        self.acc_balance=amount
    def cal_tax(self):
        return self.acc_balance-self.min_bal
a1=Account(101,"Rahul",50000)
print(a1.cal_tax())

