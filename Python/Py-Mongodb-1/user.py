import requests
user_data=requests.get('https://jsonplaceholder.typicode.com/users')
user_json=user_data.json()
user_list=json.loads()
new_users=[]
for user in user_list:
    new_users.append({'id':user.id,
                      'uname':user.uname})
print(user_json)
    