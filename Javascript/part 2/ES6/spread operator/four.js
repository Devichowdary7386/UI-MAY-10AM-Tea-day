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
let emp_details={}

for (key in emp){
    //console.log(key,emp[key])
    emp_details[key]=emp[key]
}
for (key in details){
    emp_details[key]=details[key]
}
console.log(emp_details)
