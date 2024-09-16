def change_case(func):
    def inner(name):
        return func("Hi"+name.upper())
    return inner
@change_case
def display(name):
    print(name)
display("rahul")
display("sonia")
display("priya")