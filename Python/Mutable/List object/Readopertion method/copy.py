l1=[4,5,6,7]# cloning the listobject using copy
l2=l1.copy()
print(l1)
print(l2)
print(id(l1))
print(id(l2))

l1=[4,5,6,7]
l2=l1
print(id(l1))
print(id(l2))