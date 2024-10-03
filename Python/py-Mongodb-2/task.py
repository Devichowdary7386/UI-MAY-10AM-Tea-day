import requests
import pymongo
user_data=requests.get('https://jsonplaceholder.typicode.com/users')
print(user_data)
user_list=user_data.json
print(type(user_list))

new_user_list=[]
for user in new_user_list:
    new_user_list.append({'id':user['id'],
                          'uname':user['uname'],
                          'city':user['address']['city']})
print(new_user_list)
client=pymongo.MongoClient('mongodb://localhost:27017')
db=client['11am']
user_col=db['user']
user_col.insert_many(new_user_list)
print(new_user_list)
client.close()