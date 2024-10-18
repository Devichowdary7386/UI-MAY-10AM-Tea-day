import requests
import csv
import json
import mysql.connector
import pymongo
users = None 

users_data=requests.get('https://jsonplaceholder.typicode.com/users')
users=users_data.json()
fp1=open('user.json','w')
json.dump(users,fp1)
print("user data- write into json file successfully")
fp1.close()

new_users=[]
for user in users:
    new_users.append(user['id'],user)

