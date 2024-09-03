def largest_num_in_list(list):
    max=list[0]
    for a in list:
        if a>max:
            max=a
    return max
print(largest_num_in_list([1,2,3]))
        
