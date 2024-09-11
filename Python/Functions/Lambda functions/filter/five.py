products=[
{'id':1,'name':'Marker pen','category':'st'},
{'id':2,'name':'Sugar','category':'gr'},
{'id':3,'name':'pens','category':'st'},
{'id':4,'name':'Millet', 'category':'gr'},
{'id':5,'name':'Duster', 'category':'st'},
{'id':6,'name':'Dal', 'category':'gr'}
]
def filterdata(product):
    if product['category']=='st':
        return True
    else:
        return False
print(list(filter(filterdata,products)))