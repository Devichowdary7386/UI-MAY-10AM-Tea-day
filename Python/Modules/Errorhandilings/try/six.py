try:
    fp=open("data.txt",'r')
except:
    fp=open("one.txt",'r')
finally:
    data=fp.read()
print(data)
print("GM")
print("GA")
   