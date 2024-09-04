product_prices=[1000,50,60,40,500,2000]
#display all  product prices below 1000
new_prices=[]
for price in product_prices:
    if price<1000:
        new_prices.append(price)
print(new_prices)
