from abc import abstractmethod
class Bank:
    @abstractmethod
    def cal_tax(Self):
        pass
b=Bank() 
print(b)
print(id(b))
