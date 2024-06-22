class Account{
    acc_id=101;
    acc_name='Rahul';
    acc_bal=0;
    min_bal=500;
    deposit_amount(amount){
        this.acc_bal=this.acc_bal+amount
    }
    get_bal(){
        return this.acc_bal=this.acc_bal-this.min_bal
    }
    withdrawl_amount(amount){
        this.acc_bal=this.acc_bal-amount
    }









}
let a1=new Account(101,'Rahul',50000);

a1.deposit_amount(5000);
console.log(a1.get_bal())
a1.Withdrawl_amount(50)

console.log(a1)
