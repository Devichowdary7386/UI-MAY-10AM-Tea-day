import random
lottery_nos=[]
for x in range(100):
    lottery_nos.append(random.randint(1000000000,9999999999))
#print(lottery_nos)
luckydip=random.sample(lottery_nos,5)
print(luckydip)