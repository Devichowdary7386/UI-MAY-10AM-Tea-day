class InsufficientBalError(Exception):
    def __init__(self,msg):
        self.msg=msg
def withdrawal():
    try:

       amount=int(input("Enter Amount to Withdrawal"))
       acc_bal=5000
       if acc_bal> amount:
        print("Withdrawal and Enjoy")
       else:
        raise InsufficientBalError("Low Balance")
    except InsufficientBalError as err:
       print(err.msg)
withdrawal()
print("Good Morning")