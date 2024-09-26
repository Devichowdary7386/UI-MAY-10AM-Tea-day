class Amount(Exception):
    def __init__(self,msg):
        self.msg=msg
def withdrawal():
    try:
        amount=int(input("Enter Amount"))
        acc_bal=1000
        if acc_bal>amount:
            print("withdrawal")
        else:
            raise Amount("Low Balance")
    except Amount as err:
        print(err.msg)
withdrawal()
print("GOOD MORNING")