class Employee:
    loc="B101"
e1=Employee()
e2=Employee()
print(id(e1))
print(id(e2))
print(e1.__dict__)
print(e2.__dict__)
print(Employee.__dict__)