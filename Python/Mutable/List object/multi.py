def multi_list(list):
    multi_numbers=1
    for x in list:
        multi_numbers*=x
    return multi_numbers
print(multi_list([1,2,3]))