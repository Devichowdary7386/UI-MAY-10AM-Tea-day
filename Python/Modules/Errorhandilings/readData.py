import requests
import json
import csv
api_url='https://jsonplaceholder.typicode.com/users'
user_Data=None
try:
    user_Data=requests.get(api_url)
    users=user_Data.json()
    user_Data.raise_for_status()
except requests.expections.RequestExpection as e:
    fp=open("user.json",'r')
    users_Data=fp.read(fp)
print(users)
print(type(users))
