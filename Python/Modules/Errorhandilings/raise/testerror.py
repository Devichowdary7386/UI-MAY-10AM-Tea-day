class TestError(Exception):
    def __init__(self,msg):
        self.msg=msg
def testcase():
    if False:
        print("GA")
    else:
        try:

            raise TestError("TestError")
        except TestError as err:
            print("Handling Error")

testcase()
