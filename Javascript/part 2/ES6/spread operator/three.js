let emp={
           id:101,
           name:"Rahul",
           email:"rahul@gmail.com"
}
let details={
              email:"rahul@gmail.com",
              sal:45000,
              loc:"wayanad"
}
let emp_details={...emp,...details}
console.log(emp_details)
           
