l1=[10,20,30,255]
b=bytes(l1)
ba=bytearray(l1)
ba.append(40)
for ele in ba:
    print(ele)
print(type(ba))
print(type(b))


