#varied from one object to another object
class Employee:
    Company_name='TCS'
    def __init__(self,id,name,sal):
        #create instance variable-self
        self.eid=id
        self.ename=name
        self.easl=sal

e1=Employee(101,'Rahul',45000)
print(e1.__dict__)


e2=Employee(102,'Sonia',50000)
print(e2.__dict__)


e3=Employee(103,'Priyanka',55000)
print(e3.__dict__)
print(Employee.__dict__)