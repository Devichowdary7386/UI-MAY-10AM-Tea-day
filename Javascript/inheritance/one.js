class Account{
    acc_name;
    acc_email;
    acc_addr
    constructor( name,email,addr){
        this.acc_name=name;
        this.acc_email=email;
        this.acc_addr=addr

    }
    class sa extends Account{
        acc_id;
        acc_bal=0;
        min_bal=500
        constructor(id,name,email,amount,addr){
            super(name,email,addr)
            this.acc_id=id;
            this.acc_bal=amount;
        }
            get_bal(){
                return this.acc_bal=this.acc_bal-this.min_bal
            }


        
     sa1=new sa; {'101',Devi,devi@gmail.com,'50000',Banglore};
        console.log(sa1);


    }








}