product_prices=[1000,50,60,40,500,2000]
#display all  product prices below 1000
def filterdata(price):
    return price<1000
new_prices=list(filter(filterdata,product_prices))
print(product_prices)
print(new_prices)