import csv
customers=[{'id':101,'name':'rahul','avail':True},
           {'id':102,'name':'sonia','avail':False}

]
fp1=open("emp.csv",'w',newline="")
wr=csv.writer(fp1)
wr.writerow(['id','name','avail'])
for cust in customers:
    wr.writerow([cust['id'],cust['name'],cust['avail']])
print(cust)