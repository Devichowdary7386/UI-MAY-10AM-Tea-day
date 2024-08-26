let goToGoa=( success,failure)=>{
    let acc_bal=100;
    if(acc_bal>=10000){
        success("Go and Enjoy")
    }
    else{
        failure("Go To Pg-Open Laptop")
    }

}
goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})