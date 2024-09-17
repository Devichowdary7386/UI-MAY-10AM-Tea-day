def login_required(func):
    def inner(name,is_login):
        if is_login==False:
            print("Login is required")
        else:
            func(name,is_login)
    return inner
def home_page(name,is_login):
    print("Home Page")
@login_required
def about_page(name,is_login):
    print("About Page")
@login_required
def product_page(name,is_login):
    print("Product Page")
@login_required
def order_page(name,is_login):
    print("Order Page")
home_page("Rahul",True)
about_page("Rahul",True)
product_page("Rahul",False)
order_page("Rahul",True)