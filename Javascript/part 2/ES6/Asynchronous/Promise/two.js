let employees=[
               {id:101,name:"Rahul",sal:45000},
               {id:102,name:"Sonia",sal:50000}
]
let createEmployee=(emp)=>{
    return new Promise( resolve,reject)=>{
        setTimeout(() => {
            let db_flag=true;
            db_flag=true?resolve("Data Insert"):reject("Failed")
            employees.push(emp)
        },4000);

    }
   
}

   
        
let displayEmployees=()=>{

}
createEmployee({id:103,name:"Priyanaka",sal:55000}).then((msg)=>{console.log(msg)})

                                                    .catch((err)=>{console.log(err)})
displayEmployees()