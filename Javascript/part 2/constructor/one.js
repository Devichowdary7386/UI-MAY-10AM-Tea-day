class Account{
acc_Id;
acc_Name;
acc_Bal;
min_bal=500;
constructor(Id,Name,Amount) {
    this.acc_Id=Id
    this.acc_Name=Name
    this.acc_Bal=Amount
}
deposit_amount(amount){
    this.acc_Bal=this.acc_Bal+amount
}
withdrawl_amount(amount){
    this.acc_Bal=this.acc_Bal-amount
}
get_bal(){
    return this.acc_Bal-this.min_bal
}

}
let a1=new Account(101,"Rahul",500000 )


let a2=new Account( 102,"Sonia",550000)



let a3=new Account(103,"Priyanaka",600000 )
a1.deposit_amount(100)
a1.withdrawl_amount(10)
console.log(a1.get_bal())

a2.deposit_amount(150)
a2.withdrawl_amount(12)

console.log(a2.get_bal())

a3.deposit_amount(200)
a3.withdrawl_amount(20)

console.log(a3.get_bal())