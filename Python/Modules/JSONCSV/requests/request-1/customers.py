import json
import csv
customers=[{'id':101,'name':'rahul','avail':True},
           {'id':102,'name':'sonia','avail':False}

]
fp1=open("emp.json",'w')
#fp2=open("emp.csv",'w')
json.dump(customers,fp1)
print('Json File created Successfully')
fp1.close()