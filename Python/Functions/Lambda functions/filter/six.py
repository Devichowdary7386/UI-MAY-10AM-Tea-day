numbers=[1,2,3,4,5,6,7,8,9,10]
def filterdata(num):
    return num%2==0
filter_obj=filter(filterdata,numbers)
even_numbers=list(filter_obj)
print(even_numbers)